"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { CreateImovelModal } from "@/components/imoveis/CreateImovelModal"
import { ClienteForm } from "@/components/clientes/ClientesForm"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function QuickActions() {
  const [createImovelOpen, setCreateImovelOpen] = useState(false)
  const [createClienteOpen, setCreateClienteOpen] = useState(false)

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

          {/* Botão Novo Cliente */}
          <Button
            variant="ghost"
            className="w-full justify-start h-auto p-3 hover:bg-muted"
            onClick={() => setCreateClienteOpen(true)}
          >
            <Plus className="h-4 w-4 mr-3" />
            <div className="text-left">
              <div className="font-medium">Novo Cliente</div>
              <div className="text-xs text-muted-foreground">Cadastrar cliente</div>
            </div>
          </Button>
        </CardContent>
      </Card>

      {/* Modal Novo Imóvel */}
      <CreateImovelModal open={createImovelOpen} onClose={() => setCreateImovelOpen(false)} />

      {/* Modal Novo Cliente */}
      <Dialog open={createClienteOpen} onOpenChange={setCreateClienteOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Cadastrar Novo Cliente</DialogTitle>
          </DialogHeader>
          <ClienteForm onSuccess={() => setCreateClienteOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
