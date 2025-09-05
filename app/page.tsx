import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { FeaturedProperties } from "@/components/featured-properties"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedProperties />
        <Services />
      </main>
      <Footer />
    </div>
  )
}
