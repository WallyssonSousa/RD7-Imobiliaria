import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentActivities() {
  const activities = [
    {
      id: 1,
      user: "João Silva",
      action: "cadastrou novo imóvel",
      property: "Apartamento em Copacabana",
      time: "2 horas atrás",
      type: "create",
    },
    {
      id: 2,
      user: "Maria Santos",
      action: "agendou visita para",
      property: "Casa na Barra da Tijuca",
      time: "4 horas atrás",
      type: "schedule",
    },
    {
      id: 3,
      user: "Pedro Costa",
      action: "finalizou venda de",
      property: "Cobertura em Ipanema",
      time: "1 dia atrás",
      type: "sale",
    },
    {
      id: 4,
      user: "Ana Oliveira",
      action: "atualizou informações de",
      property: "Loft no Centro",
      time: "2 dias atrás",
      type: "update",
    },
  ]

  const getActivityBadge = (type: string) => {
    switch (type) {
      case "create":
        return <Badge className="bg-accent text-accent-foreground">Novo</Badge>
      case "schedule":
        return <Badge variant="secondary">Agendamento</Badge>
      case "sale":
        return <Badge className="bg-green-500 text-white">Venda</Badge>
      case "update":
        return <Badge variant="outline">Atualização</Badge>
      default:
        return <Badge variant="secondary">Atividade</Badge>
    }
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Atividades Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt={activity.user} />
                <AvatarFallback>
                  {activity.user
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span>{" "}
                    <span className="text-muted-foreground">{activity.action}</span>{" "}
                    <span className="font-medium">{activity.property}</span>
                  </p>
                  {getActivityBadge(activity.type)}
                </div>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
