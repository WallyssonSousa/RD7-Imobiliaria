import { Card, CardContent } from "@/components/ui/card"
import { Cliente } from "@/lib/clientes"
import { User } from "lucide-react"

export function ClienteCard({ cliente }: { cliente: Cliente }) {
  return (
    <Card className="p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
        <User className="w-8 h-8 text-primary" />
      </div>

      <CardContent className="p-0">
        <h3 className="font-semibold text-lg">{cliente.nome}</h3>
        <p className="text-sm text-muted-foreground mb-2">{cliente.email}</p>
        {cliente.criado_em && (
          <p className="text-xs text-muted-foreground">
            Criado em: {new Date(cliente.criado_em).toLocaleDateString()}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
