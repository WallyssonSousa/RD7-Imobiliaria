import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calculator, Home, Key } from "lucide-react"

export function ContactDepartments() {
  const departments = [
    {
      icon: Home,
      title: "Vendas",
      description: "Dapartamente de vendas",
      contact: "vendas@premiumcasa.com.br",
      phone: "(21) 3333-4445",
    },
    {
      icon: Key,
      title: "Locações",
      description: "Departamento de locações",
      contact: "contato@imobiliaria.com.br",
      phone: "(00) 0000-0000",
    },
    {
      icon: Calculator,
      title: "Avaliações",
      description: "Departamento de avaliações",
      contact: "contato@imobiliaria.com.br",
      phone: "(00) 0000-0000",
    }
  ]

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Fale com o Departamento 
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Texto sobre os departamentos.
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
