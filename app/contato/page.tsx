import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contatct-info"
import { ContactDepartments } from "@/components/contact-departments"
import { ContactMap } from "@/components/contact-map"

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-muted/20 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Entre em Contato Conosco
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Estamos aqui para ajudá-lo a encontrar o imóvel perfeito. Nossa equipe especializada está pronta para
                atendê-lo com excelência e dedicação.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>

        {/* Departments */}
        <ContactDepartments />

        {/* Map */}
        <ContactMap />
      </main>
      <Footer />
    </div>
  )
}
