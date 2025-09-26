"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import { imovelService } from "@/lib/imovel"
import type { Imovel } from "@/lib/imovel-types"
import { formatCurrency, formatCEP } from "@/lib/imovel-utils"

interface Props {
  open: boolean
  onClose: () => void
  onSuccess: () => void
  imovel?: Imovel
}

export function DeleteImovelModal({ open, onClose, onSuccess, imovel }: Props) {
  const handleDelete = async () => {
    if (!imovel?.id) return

    try {
      await imovelService.deletar(imovel.id)
      onSuccess()
    } catch (err) {
      console.error(err)
      alert(err instanceof Error ? err.message : "Erro ao excluir imóvel")
    }
  }

  if (!imovel) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            Excluir Imóvel
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Tem certeza que deseja excluir este imóvel? Esta ação não pode ser desfeita.
          </p>

          <div className="bg-muted p-4 rounded-lg space-y-2">
            <div className="font-semibold">
              {imovel.tipo_imovel.replace("_", " ")} - {formatCEP(imovel.cep)}
            </div>
            <div className="text-sm text-muted-foreground">
              {imovel.bairro && `${imovel.bairro} • `}
              {imovel.cidade && `${imovel.cidade}`}
            </div>
            <div className="text-sm">
              Venda: {formatCurrency(imovel.valor_venda)} • Aluguel: {formatCurrency(imovel.valor_aluguel)}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Excluir Imóvel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
