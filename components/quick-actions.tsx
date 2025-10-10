"use client"

import { CreateImovelModal } from "@/components/imoveis/CreateImovelModal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { useState } from "react"

export function QuickActions() {
  const [createImovelOpen, setCreateImovelOpen] = useState(false)

  return (
    <div className="space-y-6">
      {/* Card de Ações Rápidas */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {/* Botão Novo Imóvel */}
          <Button
            variant="ghost"
            className="w-full justify-start h-auto p-3 hover:bg-muted"
            onClick={() => setCreateImovelOpen(true)}
          >
            <Plus className="h-4 w-4 mr-3" />
            <div className="text-left">
              <div className="font-medium">Novo Imóvel</div>
              <div className="text-xs text-muted-foreground">Cadastrar propriedade</div>
            </div>
          </Button>
        </CardContent>
      </Card>

      {/* Modal Novo Imóvel */}
      <CreateImovelModal open={createImovelOpen} onClose={() => setCreateImovelOpen(false)} />
    </div>
  )
}
