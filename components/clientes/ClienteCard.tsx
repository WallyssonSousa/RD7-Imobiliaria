"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Cliente, clienteService } from "@/lib/clientes"
import { toast } from "sonner"
import { User, MoreVertical, Briefcase, Home, KeyRound } from "lucide-react"

interface ClienteCardProps {
  cliente: Cliente
}

export function ClienteCard({ cliente }: ClienteCardProps) {
  const [funcoes, setFuncoes] = useState(
    cliente.funcoes_atuais || { funcionario: false, inquilino: false, proprietario: false }
  )
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const carregarFuncoes = async () => {
      try {
        const clienteAtualizado = await clienteService.obterPorId(cliente.id!)
        setFuncoes(clienteAtualizado.funcoes)
      } catch (err: any) {
        console.warn("Não foi possível carregar funções:", err.message)
      }
    }
    carregarFuncoes()
  }, [cliente.id])

  const handleAtribuirFuncao = async (funcao: "funcionario" | "inquilino" | "proprietario") => {
    try {
      setLoading(true)
      const res = await clienteService.atribuirFuncao(cliente.id!, funcao)
      setFuncoes(res.funcoes_atuais)
      toast.success(res.mensagem)
    } catch (err: unknown) {
      if (err instanceof Error) toast.error(err.message)
      else toast.error("Erro ao atribuir função")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow relative">
      <div className="absolute top-2 right-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleAtribuirFuncao("funcionario")} disabled={loading}>
              <Briefcase className="mr-2 w-4 h-4" /> Associar como Funcionário
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleAtribuirFuncao("inquilino")} disabled={loading}>
              <KeyRound className="mr-2 w-4 h-4" /> Associar como Inquilino
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleAtribuirFuncao("proprietario")} disabled={loading}>
              <Home className="mr-2 w-4 h-4" /> Associar como Proprietário
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
        <User className="w-8 h-8 text-primary" />
      </div>

      <CardContent className="p-0">
        <h3 className="font-semibold text-lg">{cliente.nome}</h3>
        <p className="text-sm text-muted-foreground mb-2">{cliente.email}</p>

        {cliente.criado_em && (
          <p className="text-xs text-muted-foreground mb-3">
            Criado em: {new Date(cliente.criado_em).toLocaleDateString()}
          </p>
        )}

        <div className="flex justify-center flex-wrap gap-3 mt-2">
          <div className="flex flex-col items-center">
            <Briefcase
              className={`w-5 h-5 ${funcoes.funcionario ? "text-blue-500" : "text-muted-foreground/50"}`}
            />
            <span className="text-xs mt-1 font-medium">Funcionário</span>
          </div>

          <div className="flex flex-col items-center">
            <KeyRound
              className={`w-5 h-5 ${funcoes.inquilino ? "text-green-500" : "text-muted-foreground/50"}`}
            />
            <span className="text-xs mt-1 font-medium">Inquilino</span>
          </div>

          <div className="flex flex-col items-center">
            <Home
              className={`w-5 h-5 ${funcoes.proprietario ? "text-yellow-500" : "text-muted-foreground/50"}`}
            />
            <span className="text-xs mt-1 font-medium">Proprietário</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
