import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Home, Users, DollarSign, Calendar } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      title: "Imóveis Ativos",
      value: "487",
      change: "+12%",
      trend: "up",
      icon: Home,
    },
    {
      title: "Clientes Ativos",
      value: "1,234",
      change: "+8%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Vendas do Mês",
      value: "R$ 2.4M",
      change: "+23%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Visitas Agendadas",
      value: "45",
      change: "-5%",
      trend: "down",
      icon: Calendar,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {stat.trend === "up" ? (
                <TrendingUp className="h-3 w-3 mr-1 text-accent" />
              ) : (
                <TrendingDown className="h-3 w-3 mr-1 text-destructive" />
              )}
              <span className={stat.trend === "up" ? "text-accent" : "text-destructive"}>{stat.change}</span>
              <span className="ml-1">vs mês anterior</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
