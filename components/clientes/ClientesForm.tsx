"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { clienteService } from "@/lib/clientes"
import { Loader2 } from "lucide-react"

interface ClienteFormProps {
  onSuccess: () => void
}

export function ClienteForm({ onSuccess }: ClienteFormProps) {
  const [form, setForm] = useState({ nome: "", email: "", senha: "" })
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState<string | null>(null)
  const [sucesso, setSucesso] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErro(null)
    setSucesso(false)
    setLoading(true)

    try {
      await clienteService.criar(form)
      setForm({ nome: "", email: "", senha: "" })
      setSucesso(true)
      onSuccess()
    } catch (error) {
      console.error(error)
      setErro("Erro ao cadastrar cliente. Verifique os dados e tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="shadow-sm border border-border/50 backdrop-blur-md">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="mb-1.5" htmlFor="nome">Nome</Label>
            <Input
              id="nome"
              name="nome"
              placeholder="Ex: Maria Silva"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label className="mb-1.5" htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="email@exemplo.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label className="mb-1.5" htmlFor="senha">Senha</Label>
            <Input
              id="senha"
              type="password"
              name="senha"
              placeholder="••••••••"
              value={form.senha}
              onChange={handleChange}
              required
            />
          </div>

          {erro && <p className="text-sm text-destructive">{erro}</p>}
          {sucesso && (
            <p className="text-sm text-green-600">
              Cliente cadastrado com sucesso!
            </p>
          )}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Cadastrando...</span>
              </div>
            ) : (
              "Cadastrar Cliente"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
