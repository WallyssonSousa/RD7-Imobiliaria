"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { CreateImovelModal } from "@/components/imoveis/CreateImovelModal"

export function QuickActions() {
  const [createOpen, setCreateOpen] = useState(false)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start h-auto p-3 hover:bg-muted"
            onClick={() => setCreateOpen(true)}
          >
            <Plus className="h-4 w-4 mr-3" />
            <div className="text-left">
              <div className="font-medium">Novo Imóvel</div>
              <div className="text-xs text-muted-foreground">Cadastrar propriedade</div>
            </div>
          </Button>
        </CardContent>
      </Card>

      {/* Modal */}
      <CreateImovelModal open={createOpen} onClose={() => setCreateOpen(false)} />
    </div>
  )
}
