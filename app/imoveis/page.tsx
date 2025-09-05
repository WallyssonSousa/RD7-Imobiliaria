import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertyFilters } from "@/components/property-filters"
import { PropertyGrid } from "@/components/property-grid"
import { PropertyStats } from "@/components/property-stats"

export default function ImoveisPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="bg-muted/20 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Encontre seu Imóvel Ideal
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Explore nossa seleção completa de imóveis premium para compra e locação
              </p>
            </div>
            <PropertyStats />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <PropertyFilters />
          <PropertyGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}
