import { Button } from "@/components/ui/button"
import { Search, MapPin } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Encontre o Imóvel dos Seus <span className="text-accent">Sonhos</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Texto texto texto texto texto texto texto texto texto texto texto texto texto texto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/imoveis?tipo=venda">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                <Search className="h-5 w-5 mr-2" />
                Comprar Imóvel
              </Button>
            </Link>
            <Link href="/imoveis?tipo=aluguel">
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 bg-transparent"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Alugar Imóvel
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">000+</div>
              <div className="text-muted-foreground">Imóveis Disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">00+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">0000+</div>
              <div className="text-muted-foreground">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
