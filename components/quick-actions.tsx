import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Calendar, FileText, Users } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      title: "Novo Imóvel",
      description: "Cadastrar propriedade",
      icon: Plus,
      href: "/dashboard/imoveis/novo",
    },
    {
      title: "Agendar Visita",
      description: "Nova visita",
      icon: Calendar,
      href: "/dashboard/visitas/nova",
    },
    {
      title: "Novo Cliente",
      description: "Cadastrar cliente",
      icon: Users,
      href: "/dashboard/clientes/novo",
    },
    {
      title: "Relatório",
      description: "Gerar relatório",
      icon: FileText,
      href: "/dashboard/relatorios/novo",
    },
  ]

  return (
    <div className="space-y-6">
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {actions.map((action, index) => (
            <Button key={index} variant="ghost" className="w-full justify-start h-auto p-3 hover:bg-muted" asChild>
              <a href={action.href}>
                <action.icon className="h-4 w-4 mr-3" />
                <div className="text-left">
                  <div className="font-medium">{action.title}</div>
                  <div className="text-xs text-muted-foreground">{action.description}</div>
                </div>
              </a>
            </Button>
          ))}
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Resumo do Dia</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Visitas hoje</span>
            <span className="font-medium">8</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Novos leads</span>
            <span className="font-medium">12</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Propostas pendentes</span>
            <span className="font-medium">5</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Contratos a vencer</span>
            <span className="font-medium text-accent">3</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
