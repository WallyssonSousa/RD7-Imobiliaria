export function LoginHero() {
  return (
    <div className="relative h-full bg-slate-900 flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[url('/geometric-pattern.png')] opacity-10"></div>

      <div className="relative z-10 text-center px-8 max-w-lg">
        <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg
            className="h-10 w-10 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6"
            />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-white">Sistema de Gestão Imobiliária</h1>

        <p className="text-lg mb-8 text-pretty text-slate-200">
          Gerencie propriedades, clientes e transações com eficiência e segurança. Sua ferramenta completa para o
          sucesso no mercado imobiliário.
        </p>

        <div className="grid grid-cols-1 gap-4 text-sm text-slate-300">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Gestão completa de propriedades</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Controle de clientes e leads</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Relatórios e analytics avançados</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Segurança e backup automático</span>
          </div>
        </div>
      </div>
    </div>
  )
}
