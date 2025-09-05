import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Vendas por Mês</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Gráfico de Vendas</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Tipos de Imóveis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Gráfico de Distribuição</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
