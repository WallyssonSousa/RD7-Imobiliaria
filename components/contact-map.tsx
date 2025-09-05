export function ContactMap() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Nossa Localização</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estamos localizados no coração de Copacabana, com fácil acesso e estacionamento disponível.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <div className="bg-muted/50 rounded-lg h-96 flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Mapa Interativo</h3>
                <p className="text-muted-foreground text-sm">Av. Atlântica, 1234 - Copacabana, RJ</p>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Como Chegar</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-foreground">Metrô:</span>
                  <p className="text-muted-foreground">Estação Cardeal Arcoverde (5 min caminhando)</p>
                </div>
                <div>
                  <span className="font-medium text-foreground">Ônibus:</span>
                  <p className="text-muted-foreground">Linhas 415, 435, 474 (Ponto em frente)</p>
                </div>
                <div>
                  <span className="font-medium text-foreground">Carro:</span>
                  <p className="text-muted-foreground">Estacionamento próprio disponível</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Pontos de Referência</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Copacabana Palace Hotel (200m)</p>
                <p>• Forte de Copacabana (500m)</p>
                <p>• Shopping Cassino Atlântico (300m)</p>
                <p>• Praia de Copacabana (em frente)</p>
              </div>
            </div>

            <div className="bg-accent/5 rounded-lg p-6 border border-accent/20">
              <h3 className="text-lg font-semibold text-foreground mb-2">Agende sua Visita</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Prefere nos conhecer pessoalmente? Agende uma visita ao nosso escritório.
              </p>
              <button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors rounded-md px-4 py-2 text-sm font-medium">
                Agendar Visita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
