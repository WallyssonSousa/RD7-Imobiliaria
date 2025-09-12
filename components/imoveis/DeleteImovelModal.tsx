"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { imovelService } from "@/lib/imovel"

interface Props {
  open: boolean
  id?: number
  onClose: () => void
}

export function DeleteImovelModal({ open, id, onClose }: Props) {
  const handleDelete = async () => {
    if (!id) return
    try {
      await imovelService.deletar(id)
      onClose()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Excluir Imóvel</DialogTitle>
        </DialogHeader>
        <p>Tem certeza que deseja excluir este imóvel?</p>
        <div className="flex justify-end space-x-2 mt-4">
          <Button variant="outline" onClick={onClose}>Cancelar</Button>
          <Button variant="destructive" onClick={handleDelete}>Excluir</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
