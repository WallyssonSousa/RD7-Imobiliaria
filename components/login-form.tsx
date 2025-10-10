"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Lock, User, AlertCircle, Shield } from "lucide-react"
import { apiService } from "@/lib/api"
import { AuthManager } from "@/lib/auth"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ClienteForm } from "@/components/clientes/ClientesForm"

export function LoginForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [openCadastro, setOpenCadastro] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await apiService.login({
        username: formData.username,
        password: formData.password,
      })

      AuthManager.saveAuth({
        username: formData.username,
        role: response.role,
        token: response.token,
      })

      router.push(AuthManager.getRedirectPath(response.role))
    } catch (error) {
      console.error(error)
      setError("Usuário ou senha inválidos.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (error) setError("")
  }

  return (
    <Card className="border-border shadow-lg">
      <CardHeader className="space-y-4">
        <div className="space-y-1">
          <CardTitle className="text-2xl font-bold text-foreground flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>Área do Usuário</span>
          </CardTitle>
          <p className="text-muted-foreground">Acesso para administradores e clientes</p>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="flex items-center space-x-2 text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
              <AlertCircle className="h-4 w-4" />
              <span>{error}</span>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="username">Usuário</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                id="username"
                type="text"
                value={formData.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                placeholder="Seu usuário ou email"
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                placeholder="Sua senha"
                className="pl-10 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="rememberMe"
                checked={formData.rememberMe}
                onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
              />
              <Label htmlFor="rememberMe" className="text-sm text-muted-foreground">
                Lembrar de mim
              </Label>
            </div>
            <button type="button" className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">
              Esqueceu a senha?
            </button>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>
        </form>

        <div className="text-center pt-2">
          <Dialog open={openCadastro} onOpenChange={setOpenCadastro}>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-sm text-primary hover:text-primary/80">
                Ainda não tem conta? Cadastre-se
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Novo Usuário</DialogTitle>
              </DialogHeader>
              <ClienteForm
                onSuccess={() => {
                  setOpenCadastro(false)
                }}
              />
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
}
