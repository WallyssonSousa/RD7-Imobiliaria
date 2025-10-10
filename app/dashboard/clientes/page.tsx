"use client"

import { ClienteCard } from "@/components/clientes/ClienteCard"
import { Cliente, clienteService } from "@/lib/clientes"
import { useEffect, useState } from "react"

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
