"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { imovelService } from "@/lib/imovel"
import { imovelSchema, type ImovelFormData } from "@/schemas/imovel"
import { TIPO_IMOVEL_OPTIONS, FINALIDADE_OPTIONS, MOBILIA_OPTIONS, type Imovel } from "@/lib/imovel-types"
import { useEffect } from "react"

interface Props {
  open: boolean
  onClose: () => void
  onSuccess: () => void
  imovel?: Imovel
}

export function UpdateImovelModal({ open, onClose, onSuccess, imovel }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    reset,
  } = useForm<ImovelFormData>({
    resolver: zodResolver(imovelSchema),
  })

  const disponivel = watch("disponivel")

  useEffect(() => {
    if (open && imovel) {
      reset({
        tipo_imovel: imovel.tipo_imovel,
        cep: imovel.cep,
        complemento: imovel.complemento || "",
        metragem: imovel.metragem,
        quartos: imovel.quartos || 0,
        suites: imovel.suites || 0,
        banheiros: imovel.banheiros || 0,
        vagas: imovel.vagas || 0,
        valor_aluguel: imovel.valor_aluguel,
        valor_venda: imovel.valor_venda,
        condominio: imovel.condominio || 0,
        iptu: imovel.iptu,
        finalidade: imovel.finalidade,
        disponivel: imovel.disponivel ?? true,
        mobilia: imovel.mobilia || "VAZIO",
        observacoes: imovel.observacoes || "",
      })
    }
  }, [open, imovel, reset])

  const onSubmit = async (data: ImovelFormData) => {
    if (!imovel?.id) return

    try {
      await imovelService.atualizar(imovel.id, data)
      onSuccess()
    } catch (err) {
      console.error(err)
      alert(err instanceof Error ? err.message : "Erro ao atualizar imóvel")
    }
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  if (!imovel) return null

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Editar Imóvel</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Informações Básicas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Informações Básicas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tipo_imovel">Tipo de Imóvel *</Label>
                <Select
                  defaultValue={imovel.tipo_imovel}
                  onValueChange={(value) => setValue("tipo_imovel", value as any)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {TIPO_IMOVEL_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.tipo_imovel && <p className="text-sm text-destructive">{errors.tipo_imovel.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="finalidade">Finalidade *</Label>
                <Select
                  defaultValue={imovel.finalidade}
                  onValueChange={(value) => setValue("finalidade", value as any)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a finalidade" />
                  </SelectTrigger>
                  <SelectContent>
                    {FINALIDADE_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.finalidade && <p className="text-sm text-destructive">{errors.finalidade.message}</p>}
              </div>
            </div>
          </div>

          {/* Localização */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Localização</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cep">CEP *</Label>
                <Input id="cep" placeholder="00000-000" {...register("cep")} />
                {errors.cep && <p className="text-sm text-destructive">{errors.cep.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="complemento">Complemento</Label>
                <Input id="complemento" placeholder="Apto 101, Bloco A, etc." {...register("complemento")} />
              </div>
            </div>
          </div>

          {/* Características */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Características</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="metragem">Metragem (m²) *</Label>
                <Input id="metragem" type="number" placeholder="0" {...register("metragem", { valueAsNumber: true })} />
                {errors.metragem && <p className="text-sm text-destructive">{errors.metragem.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="quartos">Quartos</Label>
                <Input id="quartos" type="number" placeholder="0" {...register("quartos", { valueAsNumber: true })} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="suites">Suítes</Label>
                <Input id="suites" type="number" placeholder="0" {...register("suites", { valueAsNumber: true })} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="banheiros">Banheiros</Label>
                <Input
                  id="banheiros"
                  type="number"
                  placeholder="0"
                  {...register("banheiros", { valueAsNumber: true })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="vagas">Vagas</Label>
                <Input id="vagas" type="number" placeholder="0" {...register("vagas", { valueAsNumber: true })} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobilia">Mobília</Label>
                <Select
                  defaultValue={imovel.mobilia || "VAZIO"}
                  onValueChange={(value) => setValue("mobilia", value as any)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {MOBILIA_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Valores */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="valor_venda">Valor Venda (R$) *</Label>
                <Input
                  id="valor_venda"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  {...register("valor_venda", { valueAsNumber: true })}
                />
                {errors.valor_venda && <p className="text-sm text-destructive">{errors.valor_venda.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="valor_aluguel">Valor Aluguel (R$) *</Label>
                <Input
                  id="valor_aluguel"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  {...register("valor_aluguel", { valueAsNumber: true })}
                />
                {errors.valor_aluguel && <p className="text-sm text-destructive">{errors.valor_aluguel.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="condominio">Condomínio (R$)</Label>
                <Input
                  id="condominio"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  {...register("condominio", { valueAsNumber: true })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="iptu">IPTU (R$) *</Label>
                <Input
                  id="iptu"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  {...register("iptu", { valueAsNumber: true })}
                />
                {errors.iptu && <p className="text-sm text-destructive">{errors.iptu.message}</p>}
              </div>
            </div>
          </div>

          {/* Observações e Status */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Informações Adicionais</h3>

            <div className="space-y-2">
              <Label htmlFor="observacoes">Observações</Label>
              <Textarea
                id="observacoes"
                placeholder="Informações adicionais sobre o imóvel..."
                {...register("observacoes")}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="disponivel"
                checked={disponivel}
                onCheckedChange={(checked) => setValue("disponivel", checked)}
              />
              <Label htmlFor="disponivel">Imóvel disponível</Label>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancelar
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Atualizando..." : "Atualizar Imóvel"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
