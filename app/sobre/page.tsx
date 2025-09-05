import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, Heart, Target } from "lucide-react"

export default function SobrePage() {
  const values = [
    {
      icon: Shield,
      title: "Confiança",
      description: "Transparência e segurança em todas as transações",
    },
    {
      icon: Heart,
      title: "Dedicação",
      description: "Atendimento personalizado e cuidado com cada cliente",
    },
    {
      icon: Target,
      title: "Excelência",
      description: "Busca constante pela qualidade e inovação",
    },
  ]

  const team = [
    {
      name: "Carlos Mendes",
      role: "Diretor Geral",
      experience: "20 anos",
      creci: "CRECI 12345-F",
    },
    {
      name: "Ana Silva",
      role: "Gerente de Vendas",
      experience: "15 anos",
      creci: "CRECI 23456-F",
    },
    {
      name: "Roberto Santos",
      role: "Especialista em Locações",
      experience: "12 anos",
      creci: "CRECI 34567-F",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-muted/20 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Sobre a PremiumCasa</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Há mais de 15 anos conectando pessoas aos seus lares dos sonhos com excelência e confiança.
              </p>
            </div>
          </div>
        </div>

        {/* Nossa História */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Nossa História</h2>
                <p className="text-muted-foreground mb-4 text-pretty">
                  Fundada em 2009, a PremiumCasa nasceu com o objetivo de revolucionar o mercado imobiliário do Rio de
                  Janeiro, oferecendo um atendimento diferenciado e focado na experiência do cliente.
                </p>
                <p className="text-muted-foreground mb-6 text-pretty">
                  Ao longo dos anos, construímos uma reputação sólida baseada na confiança, transparência e resultados
                  excepcionais. Hoje, somos referência em imóveis premium na cidade maravilhosa.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">15+</div>
                    <div className="text-sm text-muted-foreground">Anos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">1000+</div>
                    <div className="text-sm text-muted-foreground">Clientes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">500+</div>
                    <div className="text-sm text-muted-foreground">Imóveis</div>
                  </div>
                </div>
              </div>
              <div className="bg-muted/20 rounded-lg h-96 flex items-center justify-center">
                <p className="text-muted-foreground">Imagem da empresa</p>
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossos Valores</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Os princípios que guiam nossa atuação e definem nossa identidade no mercado imobiliário.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-border text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-pretty">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Nossa Equipe */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossa Equipe</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Profissionais experientes e qualificados, prontos para atender suas necessidades imobiliárias.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-accent font-medium mb-2">{member.role}</p>
                    <div className="space-y-1">
                      <Badge variant="secondary" className="text-xs">
                        {member.experience} de experiência
                      </Badge>
                      <p className="text-xs text-muted-foreground">{member.creci}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
