"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { clienteService } from "@/lib/clientes"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"

interface ClienteFormProps {
  onSuccess?: () => void
}

export function ClienteForm({ onSuccess }: ClienteFormProps) {
  const [form, setForm] = useState({ nome: "", email: "", senha: "" })
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState<string | null>(null)
  const [sucesso, setSucesso] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErro(null)
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
      onSuccess?.()
    } catch (error) {
      console.error(error)
      setErro("Erro ao cadastrar. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="shadow-lg border border-border/60 backdrop-blur-lg bg-background/80">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-foreground">
              Nome completo
            </Label>
            <Input
              id="nome"
              name="nome"
              placeholder="Ex: João Silva"
              value={form.nome}
              onChange={handleChange}
              required
              className="h-11"
            />
          </div>

          <div>
            <Label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="email@exemplo.com"
              value={form.email}
              onChange={handleChange}
              required
              className="h-11"
            />
          </div>

          <div>
            <Label htmlFor="senha" className="mb-1.5 block text-sm font-medium text-foreground">
              Senha
            </Label>
            <Input
              id="senha"
              type="password"
              name="senha"
              placeholder="••••••••"
              value={form.senha}
              onChange={handleChange}
              required
              className="h-11"
            />
          </div>

          {erro && (
            <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 p-2 rounded-lg">
              <AlertCircle className="h-4 w-4" />
              <span>{erro}</span>
            </div>
          )}

          {sucesso && (
            <div className="flex items-center gap-2 text-sm text-green-600 bg-green-500/10 p-2 rounded-lg">
              <CheckCircle2 className="h-4 w-4" />
              <span>Cadastro realizado com sucesso!</span>
            </div>
          )}

          <Button type="submit" className="w-full h-11 font-medium" disabled={loading}>
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Cadastrando...</span>
              </div>
            ) : (
              "Cadastrar"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
