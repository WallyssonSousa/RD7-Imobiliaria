export function PropertyStats() {
  const stats = [
    { label: "Imóveis Disponíveis", value: "000+" },
    { label: "Para Venda", value: "000" },
    { label: "Para Locação", value: "000" },
    { label: "Vendidos este Mês", value: "00" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-accent mb-1">{stat.value}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
