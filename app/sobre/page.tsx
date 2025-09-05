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
      description: "Texto sobre confiança.",
    },
    {
      icon: Heart,
      title: "Dedicação",
      description: "Texto sobre dedicação.",
    },
    {
      icon: Target,
      title: "Excelência",
      description: "Texto sobre excelência.",
    },
  ]

  const team = [
    {
      name: "",
      role: "",
      experience: "",
      creci: "",
    },
    {
      name: "",
      role: "",
      experience: "",
      creci: "",
    },
    {
      name: "",
      role: "",
      experience: "",
      creci: "",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="bg-muted/20 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Sobre a RD7</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Texto sobre a imobiliária
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
                  Texto sobre a nossa História.
                </p>
                <p className="text-muted-foreground mb-6 text-pretty">
                  .
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">00+</div>
                    <div className="text-sm text-muted-foreground">Anos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">0000+</div>
                    <div className="text-sm text-muted-foreground">Clientes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">000+</div>
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

        {/* Valores */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossos Valores</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Texto sobre valores.
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

        {/* Equipe */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossa Equipe</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Texto sobre a equipe.
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
