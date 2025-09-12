"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { imovelService, Imovel } from "@/lib/imovel"

interface Props {
  open: boolean
  onClose: () => void
}

export function CreateImovelModal({ open, onClose }: Props) {
  const [form, setForm] = useState<Partial<Imovel>>({
    tipo_imovel: "",
    cep: "",
    metragem: 0,
    valor_aluguel: 0,
    valor_venda: 0,
    iptu: 0,
    finalidade: ""
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      await imovelService.criar(form as Imovel)
      onClose()
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo Imóvel</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <Input placeholder="Tipo de Imóvel" name="tipo_imovel" onChange={handleChange} />
          <Input placeholder="CEP" name="cep" onChange={handleChange} />
          <Input placeholder="Metragem" type="number" name="metragem" onChange={handleChange} />
          <Input placeholder="Valor de Aluguel" type="number" name="valor_aluguel" onChange={handleChange} />
          <Input placeholder="Valor de Venda" type="number" name="valor_venda" onChange={handleChange} />
          <Input placeholder="IPTU" type="number" name="iptu" onChange={handleChange} />
          <Input placeholder="Finalidade" name="finalidade" onChange={handleChange} />
          <Button className="w-full" onClick={handleSubmit} disabled={loading}>
            {loading ? "Salvando..." : "Salvar"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
