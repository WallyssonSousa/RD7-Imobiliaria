import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Users, Clock } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Shield,
      title: "Confiança e Segurança",
      description: "Todas as transações são realizadas com total transparência e segurança jurídica.",
    },
    {
      icon: Award,
      title: "Excelência em Serviço",
      description: "Atendimento personalizado e consultoria especializada para cada cliente.",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais qualificados com amplo conhecimento do mercado imobiliário.",
    },
    {
      icon: Clock,
      title: "Agilidade nos Processos",
      description: "Processos otimizados para garantir rapidez em todas as etapas da negociação.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Por que Escolher a PremiumCasa?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Somos uma imobiliária comprometida em oferecer a melhor experiência na compra, venda e locação de imóveis de
            alto padrão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
