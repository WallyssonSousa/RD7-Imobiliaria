"use client"

import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Plus, Edit, Trash2, Home, MapPin, Bed, Bath, Car, Square } from "lucide-react"
import { imovelService } from "@/lib/imovel"
import type { Imovel } from "@/lib/imovel-types"
import { formatCurrency, formatCEP, formatArea } from "@/lib/imovel-utils"
import { CreateImovelModal } from "@/components/imoveis/CreateImovelModal"
import { UpdateImovelModal } from "@/components/imoveis/UpdateImovelModal"
import { DeleteImovelModal } from "@/components/imoveis/DeleteImovelModal"

export default function ImoveisPage() {
  const [imoveis, setImoveis] = useState<Imovel[]>([])
  const [loading, setLoading] = useState(true)
  const [createOpen, setCreateOpen] = useState(false)
  const [updateOpen, setUpdateOpen] = useState<{ open: boolean; imovel?: Imovel }>({ open: false })
  const [deleteOpen, setDeleteOpen] = useState<{ open: boolean; imovel?: Imovel }>({ open: false })

  const fetchImoveis = async () => {
    setLoading(true)
    try {
      const data = await imovelService.listar()
      setImoveis(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImoveis()
  }, [])

  const handleCreateSuccess = () => {
    setCreateOpen(false)
    fetchImoveis()
  }

  const handleUpdateSuccess = () => {
    setUpdateOpen({ open: false })
    fetchImoveis()
  }

  const handleDeleteSuccess = () => {
    setDeleteOpen({ open: false })
    fetchImoveis()
  }

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case "CASA":
        return <Home className="h-4 w-4" />
      case "APARTAMENTO":
        return <Home className="h-4 w-4" />
      default:
        return <Square className="h-4 w-4" />
    }
  }

  const getFinalidadeBadge = (finalidade: string) => {
    const variants = {
      ALUGUEL: "secondary",
      COMPRA: "default",
      AMBOS: "outline",
    } as const

    return <Badge variant={variants[finalidade as keyof typeof variants] || "default"}>{finalidade}</Badge>
  }

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-muted-foreground">Carregando imóveis...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gerenciar Imóveis</h1>
          <p className="text-muted-foreground">Gerencie seu portfólio de imóveis</p>
        </div>
        <Button onClick={() => setCreateOpen(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Novo Imóvel
        </Button>
      </div>

      {imoveis.length === 0 ? (
        <Card className="p-12 text-center">
          <div className="space-y-4">
            <Home className="h-12 w-12 mx-auto text-muted-foreground" />
            <div>
              <h3 className="text-lg font-semibold">Nenhum imóvel cadastrado</h3>
              <p className="text-muted-foreground">Comece adicionando seu primeiro imóvel</p>
            </div>
            <Button onClick={() => setCreateOpen(true)} className="gap-2">
              <Plus className="h-4 w-4" />
              Adicionar Imóvel
            </Button>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imoveis.map((imovel) => (
            <Card key={imovel.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    {getTipoIcon(imovel.tipo_imovel)}
                    <CardTitle className="text-lg">{imovel.tipo_imovel.replace("_", " ")}</CardTitle>
                  </div>
                  <div className="flex gap-1">
                    {getFinalidadeBadge(imovel.finalidade)}
                    {imovel.disponivel && (
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Disponível
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {formatCEP(imovel.cep)}
                  {imovel.bairro && ` • ${imovel.bairro}`}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Square className="h-4 w-4 text-muted-foreground" />
                    <span>{formatArea(imovel.metragem)}</span>
                  </div>
                  {imovel.quartos && (
                    <div className="flex items-center gap-2">
                      <Bed className="h-4 w-4 text-muted-foreground" />
                      <span>{imovel.quartos} quartos</span>
                    </div>
                  )}
                  {imovel.banheiros && (
                    <div className="flex items-center gap-2">
                      <Bath className="h-4 w-4 text-muted-foreground" />
                      <span>{imovel.banheiros} banheiros</span>
                    </div>
                  )}
                  {imovel.vagas && (
                    <div className="flex items-center gap-2">
                      <Car className="h-4 w-4 text-muted-foreground" />
                      <span>{imovel.vagas} vagas</span>
                    </div>
                  )}
                </div>

                <Separator />

                <div className="space-y-2">
                  {imovel.valor_venda > 0 && (
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Venda:</span>
                      <span className="font-semibold text-green-600">{formatCurrency(imovel.valor_venda)}</span>
                    </div>
                  )}
                  {imovel.valor_aluguel > 0 && (
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Aluguel:</span>
                      <span className="font-semibold text-blue-600">{formatCurrency(imovel.valor_aluguel)}</span>
                    </div>
                  )}
                  {imovel.condominio && imovel.condominio > 0 && (
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Condomínio:</span>
                      <span className="text-sm">{formatCurrency(imovel.condominio)}</span>
                    </div>
                  )}
                </div>

                <Separator />

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 gap-2 bg-transparent"
                    onClick={() => setUpdateOpen({ open: true, imovel })}
                  >
                    <Edit className="h-3 w-3" />
                    Editar
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2 text-destructive hover:text-destructive bg-transparent"
                    onClick={() => setDeleteOpen({ open: true, imovel })}
                  >
                    <Trash2 className="h-3 w-3" />
                    Excluir
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Modals */}
      <CreateImovelModal open={createOpen} onClose={() => setCreateOpen(false)} onSuccess={handleCreateSuccess} />

      <UpdateImovelModal
        open={updateOpen.open}
        imovel={updateOpen.imovel}
        onClose={() => setUpdateOpen({ open: false })}
        onSuccess={handleUpdateSuccess}
      />

      <DeleteImovelModal
        open={deleteOpen.open}
        imovel={deleteOpen.imovel}
        onClose={() => setDeleteOpen({ open: false })}
        onSuccess={handleDeleteSuccess}
      />
    </div>
  )
}
