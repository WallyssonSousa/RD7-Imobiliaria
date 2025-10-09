"use client"

import { useEffect, useState } from "react"
import { clienteService, Cliente } from "@/lib/clientes"
import { ClienteCard } from "@/components/clientes/ClienteCard"
import { ClienteForm } from "@/components/clientes/ClientesForm"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function ClientesPage() {
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [loading, setLoading] = useState(true)

  const carregarClientes = async () => {
    setLoading(true)
    try {
      const data = await clienteService.listar()
      setClientes(data)
    } catch (error) {
      console.error("Erro ao carregar clientes:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    carregarClientes()
  }, [])

  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Clientes</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="font-medium">Novo Cliente</Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Cadastrar Novo Cliente</DialogTitle>
            </DialogHeader>
            {/* O ClienteForm agora lida sozinho com o cadastro */}
            <ClienteForm onSuccess={carregarClientes} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {!loading && clientes.length === 0 && (
          <p className="text-center text-muted-foreground col-span-full">
            Nenhum cliente cadastrado ainda.
          </p>
        )}

        {clientes.map((cliente) => (
          <ClienteCard key={cliente.id} cliente={cliente} />
        ))}
      </div>
    </div>
  )
}
