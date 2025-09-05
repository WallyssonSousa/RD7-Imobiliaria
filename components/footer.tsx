import { Facebook, Home, Instagram, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Home className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">RD7</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm text-pretty mb-4">
              Texto falando sobre a imobiliária.
            </p>
            <div className="flex space-x-4">
              <a
                href=""
                className="text-primary-foreground/60 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href=""
                className="text-primary-foreground/60 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/imoveis"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Imóveis
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Área do Cliente
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/imoveis?tipo=venda"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Compra e Venda
                </Link>
              </li>
              <li>
                <Link
                  href="/imoveis?tipo=aluguel"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Locação
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/avaliacao"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Avaliação
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/consultoria"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Consultoria
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/financiamento"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Financiamento
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/documentacao"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Documentação
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mr-2 text-accent flex-shrink-0" />
                <span>
                  Endereço
                  <br />
                  Cidade
                  <br />
                  CEP: 00000-000
                </span>
              </li>
              <li className="flex items-center text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 mr-2 text-accent flex-shrink-0" />
                <div>
                  <a href="tel:+" className="hover:text-accent transition-colors">
                    (21) 3333-4444
                  </a>
                  <br />
                  <a href="https://wa.me/" className="hover:text-accent transition-colors">
                    (21) 99999-8888 (WhatsApp)
                  </a>
                </div>
              </li>
              <li className="flex items-center text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 mr-2 text-accent flex-shrink-0" />
                <a href="mailto:emailimobiliaria@gmail.com" className="hover:text-accent transition-colors">
                  emailimobiliaria@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60 text-center md:text-left">
              © 2025 RD7. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
