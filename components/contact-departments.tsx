import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Key, Calculator, Users, FileText, Headphones } from "lucide-react"

export function ContactDepartments() {
  const departments = [
    {
      icon: Home,
      title: "Vendas",
      description: "Especialistas em compra e venda de imóveis premium",
      contact: "vendas@premiumcasa.com.br",
      phone: "(21) 3333-4445",
    },
    {
      icon: Key,
      title: "Locações",
      description: "Gestão completa de locações residenciais e comerciais",
      contact: "locacoes@premiumcasa.com.br",
      phone: "(21) 3333-4446",
    },
    {
      icon: Calculator,
      title: "Avaliações",
      description: "Avaliação precisa e laudo técnico do seu imóvel",
      contact: "avaliacoes@premiumcasa.com.br",
      phone: "(21) 3333-4447",
    },
    {
      icon: Users,
      title: "Consultoria",
      description: "Consultoria especializada em investimentos imobiliários",
      contact: "consultoria@premiumcasa.com.br",
      phone: "(21) 3333-4448",
    },
    {
      icon: FileText,
      title: "Jurídico",
      description: "Suporte jurídico completo para suas transações",
      contact: "juridico@premiumcasa.com.br",
      phone: "(21) 3333-4449",
    },
    {
      icon: Headphones,
      title: "Suporte",
      description: "Atendimento ao cliente e suporte técnico",
      contact: "suporte@premiumcasa.com.br",
      phone: "(21) 3333-4450",
    },
  ]

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Fale com o Departamento Certo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Nossa equipe especializada está organizada para atender suas necessidades específicas com máxima eficiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <dept.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{dept.title}</h3>
                <p className="text-muted-foreground text-pretty mb-4">{dept.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="text-sm">
                    <span className="text-muted-foreground">E-mail: </span>
                    <a href={`mailto:${dept.contact}`} className="text-accent hover:underline">
                      {dept.contact}
                    </a>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Telefone: </span>
                    <a href={`tel:${dept.phone.replace(/\D/g, "")}`} className="text-accent hover:underline">
                      {dept.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button asChild size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href={`mailto:${dept.contact}`}>E-mail</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    <a href={`tel:${dept.phone.replace(/\D/g, "")}`}>Ligar</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
