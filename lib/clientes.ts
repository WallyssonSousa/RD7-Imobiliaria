import { apiService } from "./api"

const API_BASE_URL = process.env.PUBLIC_API || "http://127.0.0.1:5001"

export interface Cliente {
  id?: number
  nome: string
  email: string
  senha?: string
  criado_em?: string
}

class ClienteService {
  async listar(): Promise<Cliente[]> {
    return apiService.request<Cliente[]>("/clientes", { method: "GET" })
  }

  async criar(cliente: Cliente): Promise<Cliente> {
    const payload = {
      nome: cliente.nome || "",
      email: cliente.email || "",
      senha: cliente.senha || "",
    }

    const response = await fetch(`${API_BASE_URL}/cadastro`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data.error || "Erro ao cadastrar cliente")

    return data.cliente
  }
}

export const clienteService = new ClienteService()
