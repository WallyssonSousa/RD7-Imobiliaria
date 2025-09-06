"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Lock, Mail, AlertCircle, User, Users, Shield } from "lucide-react"

type UserType = "user" | "employee" | "admin"

interface UserTypeConfig {
  title: string
  description: string
  icon: React.ReactNode
  credentials: {
    email: string
    password: string
  }
  redirectPath: string
}

const userTypeConfigs: Record<UserType, UserTypeConfig> = {
  user: {
    title: "Área do Cliente",
    description: "Acesse sua conta e acompanhe seus imóveis",
    icon: <User className="h-5 w-5" />,
    credentials: {
      email: "cliente@rd7.com.br",
      password: "cliente123",
    },
    redirectPath: "/cliente/dashboard",
  },
  employee: {
    title: "Área do Funcionário",
    description: "Acesse o sistema de controle imobiliário",
    icon: <Users className="h-5 w-5" />,
    credentials: {
      email: "funcionario@rd7.com.br",
      password: "func123",
    },
    redirectPath: "/funcionario/dashboard",
  },
  admin: {
    title: "Área do Administrador",
    description: "Acesso completo ao sistema de gestão",
    icon: <Shield className="h-5 w-5" />,
    credentials: {
      email: "admin@rd7.com.br",
      password: "admin123",
    },
    redirectPath: "/admin/dashboard",
  },
}

export function AdaptiveLoginForm() {
  const router = useRouter()
  const [selectedUserType, setSelectedUserType] = useState<UserType>("user")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const currentConfig = userTypeConfigs[selectedUserType]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simular autenticação baseada no tipo de usuário
    setTimeout(() => {
      const config = userTypeConfigs[selectedUserType]
      if (formData.email === config.credentials.email && formData.password === config.credentials.password) {
        router.push(config.redirectPath)
      } else {
        setError("E-mail ou senha incorretos. Tente novamente.")
      }
      setIsLoading(false)
    }, 1500)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (error) setError("")
  }

  const handleUserTypeChange = (userType: UserType) => {
    setSelectedUserType(userType)
    setFormData({ email: "", password: "", rememberMe: false })
    setError("")
  }

  return (
    <Card className="border-border shadow-lg">
      <CardHeader className="space-y-4">
        {/* User Type Selection */}
        <div className="grid grid-cols-3 gap-2">
          {(Object.keys(userTypeConfigs) as UserType[]).map((userType) => (
            <button
              key={userType}
              type="button"
              onClick={() => handleUserTypeChange(userType)}
              className={`p-3 rounded-lg border transition-all duration-200 ${
                selectedUserType === userType
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background hover:border-primary/50 text-foreground hover:bg-muted"
              }`}
            >
              <div className="flex flex-col items-center space-y-1">
                {userTypeConfigs[userType].icon}
                <span className="text-xs font-medium">
                  {userType === "user" ? "Cliente" : userType === "employee" ? "Funcionário" : "Admin"}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="space-y-1">
          <CardTitle className="text-2xl font-bold text-foreground flex items-center space-x-2">
            {currentConfig.icon}
            <span>{currentConfig.title}</span>
          </CardTitle>
          <p className="text-muted-foreground">{currentConfig.description}</p>
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
            <Label htmlFor="email">E-mail</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="seu@email.com"
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

          <div className="text-center pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              {selectedUserType === "user" ? (
                <>
                  Não tem conta?{" "}
                  <button type="button" className="text-primary hover:text-primary/80 transition-colors font-medium">
                    Cadastre-se
                  </button>
                </>
              ) : (
                <>
                  Não tem acesso?{" "}
                  <button type="button" className="text-primary hover:text-primary/80 transition-colors font-medium">
                    Solicitar acesso
                  </button>
                </>
              )}
            </p>
          </div>
        </form>

        {/* Credentials for demonstration */}
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <p className="text-xs text-muted-foreground mb-2 font-medium">Credenciais de demonstração:</p>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>E-mail: {currentConfig.credentials.email}</p>
            <p>Senha: {currentConfig.credentials.password}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
