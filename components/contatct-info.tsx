"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react"

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(00) 0000-0000",
      description: "Atendimento de segunda a sexta",
      action: "Ligar Agora",
      href: "tel:+00000000000",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "(00) 00000-0000",
      description: "Atendimento rápido e direto",
      action: "Chamar no WhatsApp",
      href: "https://wa.me/",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@imobiliaria.com.br",
      description: "Resposta rápida",
      action: "Enviar E-mail",
      href: "mailto:contato@imobiliaria.com.br",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Informações de Contato</h2>
        <p className="text-muted-foreground text-pretty">
          Escolha a forma de contato que preferir.
        </p>
      </div>

      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <Card key={index} className="border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <method.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                  <p className="text-lg font-medium text-accent mb-1">{method.info}</p>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      {method.action}
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Office Info */}
      <Card className="border-border">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">Nosso Escritório</h3>
              <p className="text-muted-foreground mb-2">
                Endereço completo
                <br />
                Cidade, Cidade
                <br />
                CEP: 00000-00000
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <a
                  href="https://maps.google.com/?q=Endereço+completo,+Cidade,+CEP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver no Mapa
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Business Hours */}
      <Card className="border-border">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="h-6 w-6 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-3">Horário de Funcionamento</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Segunda a Sexta:</span>
                  <span className="text-foreground font-medium">8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábado:</span>
                  <span className="text-foreground font-medium">9h às 14h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domingo:</span>
                  <span className="text-foreground font-medium">Fechado</span>
                </div>
              </div>
              <div className="mt-4">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <Calendar className="h-4 w-4 mr-2" />
                    Agendar Visita
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
