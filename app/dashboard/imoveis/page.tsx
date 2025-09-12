"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { imovelService, Imovel } from "@/lib/imovel"
import { CreateImovelModal } from "@/components/imoveis/CreateImovelModal"
import { DeleteImovelModal } from "@/components/imoveis/DeleteImovelModal"

export default function ImoveisPage() {
  const [imoveis, setImoveis] = useState<Imovel[]>([])
  const [loading, setLoading] = useState(true)
  const [createOpen, setCreateOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState<{ open: boolean; id?: number }>({ open: false })

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

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Imóveis</h1>
        <Button onClick={() => setCreateOpen(true)}>Novo Imóvel</Button>
      </div>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {imoveis.map((imovel) => (
            <Card key={imovel.id}>
              <CardHeader>
                <CardTitle>{imovel.tipo_imovel} - {imovel.cidade}/{imovel.estado}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p><strong>CEP:</strong> {imovel.cep}</p>
                <p><strong>Metragem:</strong> {imovel.metragem} m²</p>
                <p><strong>Valor Venda:</strong> R$ {imovel.valor_venda}</p>
                <div className="flex space-x-2 mt-3">
                  <Button size="sm" variant="secondary">Editar</Button>
                  <Button size="sm" variant="destructive" onClick={() => setDeleteOpen({ open: true, id: imovel.id })}>
                    Excluir
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Modals */}
      <CreateImovelModal open={createOpen} onClose={() => { setCreateOpen(false); fetchImoveis() }} />
      <DeleteImovelModal
        open={deleteOpen.open}
        id={deleteOpen.id}
        onClose={() => { setDeleteOpen({ open: false }); fetchImoveis() }}
      />
    </div>
  )
}
