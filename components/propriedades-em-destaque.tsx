import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react"
import Link from "next/link"

export function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      title: "Apartamento Luxuoso em Copacabana",
      price: "R$ 2.500.000",
      type: "Venda",
      location: "Copacabana, Rio de Janeiro",
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      image: "/luxury-apartment-copacabana.jpg",
    },
    {
      id: 2,
      title: "Casa Moderna em Condomínio Fechado",
      price: "R$ 8.500/mês",
      type: "Aluguel",
      location: "Barra da Tijuca, Rio de Janeiro",
      bedrooms: 4,
      bathrooms: 3,
      area: 250,
      image: "/modern-house-gated-community.jpg",
    },
    {
      id: 3,
      title: "Cobertura com Vista para o Mar",
      price: "R$ 4.200.000",
      type: "Venda",
      location: "Ipanema, Rio de Janeiro",
      bedrooms: 4,
      bathrooms: 4,
      area: 300,
      image: "/penthouse-ocean-view-ipanema.jpg",
    },
  ]

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Imóveis em Destaque</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Confira nossa seleção especial de imóveis premium, cuidadosamente escolhidos para atender aos mais altos
            padrões.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant={property.type === "Venda" ? "default" : "secondary"}
                    className={
                      property.type === "Venda"
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent text-accent-foreground"
                    }
                  >
                    {property.type}
                  </Badge>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-background/80 rounded-full hover:bg-background transition-colors">
                  <Heart className="h-4 w-4 text-muted-foreground hover:text-accent" />
                </button>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.location}
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 text-balance">{property.title}</h3>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-accent">{property.price}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    {property.bedrooms} quartos
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    {property.bathrooms} banheiros
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    {property.area}m²
                  </div>
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Ver Detalhes</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/imoveis">
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              Ver Todos os Imóveis
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
