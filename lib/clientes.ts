import { apiService } from "./api"

const API_BASE_URL = process.env.PUBLIC_API || "http://127.0.0.1:5001"

export interface Cliente {
  id?: number
  nome: string
  email: string
  senha?: string
  criado_em?: string
  funcoes_atuais?: {
    funcionario: boolean
    inquilino: boolean
    proprietario: boolean
  }
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

  async atribuirFuncao(clienteId: number, funcao: "funcionario" | "inquilino" | "proprietario") {
    const token = localStorage.getItem("auth_token")

    const response = await fetch(`${API_BASE_URL}/atribuir_funcao`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ cliente_id: clienteId, funcao }),
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data.erro || "Erro ao atribuir função")
    return data
  }

  async obterPorId(clienteId: number): Promise<Cliente> {
    const token = localStorage.getItem("auth_token")
    const response = await fetch(`${API_BASE_URL}/cliente/${clienteId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data.erro || "Erro ao buscar cliente")
    return data
  }

}

export const clienteService = new ClienteService()
