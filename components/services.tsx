import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Key, FileText, Calculator, Users, Headphones } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Home,
      title: "Compra e Venda",
      description: "Assessoria completa para compra e venda de imóveis com toda segurança jurídica.",
    },
    {
      icon: Key,
      title: "Locação",
      description: "Gestão completa de locações, desde a captação até a administração do contrato.",
    },
    {
      icon: FileText,
      title: "Documentação",
      description: "Cuidamos de toda a documentação necessária para sua transação imobiliária.",
    },
    {
      icon: Calculator,
      title: "Avaliação",
      description: "Avaliação precisa do seu imóvel com base no mercado atual e localização.",
    },
    {
      icon: Users,
      title: "Consultoria",
      description: "Consultoria especializada para investimentos imobiliários e planejamento.",
    },
    {
      icon: Headphones,
      title: "Suporte 24/7",
      description: "Atendimento personalizado e suporte completo em todas as etapas do processo.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferecemos uma gama completa de serviços imobiliários para atender todas as suas necessidades com
            excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-pretty mb-4">{service.description}</p>
                <Button variant="ghost" className="text-accent hover:text-accent-foreground hover:bg-accent p-0">
                  Saiba mais →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
              Pronto para Encontrar seu Imóvel Ideal?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 text-pretty max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudá-lo a encontrar o imóvel perfeito. Entre em contato conosco e comece
              sua jornada hoje mesmo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Falar com Consultor
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                Agendar Visita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
