import { apiService } from "./api"
import { AuthManager } from "./auth"

const API_BASE_URL = process.env.PUBLIC_API || "http://127.0.0.1:5001"
 
export interface Imovel {
    id?: number
    tipo_imovel: string
    cep: string
    logradouro?: string
    bairro?: string
    cidade?: string
    estado?: string
    complemento?: string
    metragem: number
    quartos?: number
    suites?: number
    banheiros?: number
    vagas?: number
    valor_aluguel: number
    valor_venda: number
    condominio?: number
    iptu: number
    finalidade: string
    disponivel?: boolean
    mobilia?: string
    observacoes?: string
}

class ImovelService {
    private getToken() {
        const token = AuthManager.getToken()
        if (!token) throw new Error("Usuário não autenticado")
        return token
    }

    async listar(): Promise<Imovel[]> {
        return apiService.authenticatedRequest<Imovel[]>("/imoveis", this.getToken())
    }

    async criar(imovel: Imovel): Promise<Imovel> {
        const token = this.getToken()

        const payload = {
            tipo_imovel: imovel.tipo_imovel || "",
            cep: imovel.cep || "",
            metragem: imovel.metragem || 0,
            valor_aluguel: imovel.valor_aluguel || 0,
            valor_venda: imovel.valor_venda || 0,
            iptu: imovel.iptu || 0,
            finalidade: imovel.finalidade || "",
            complemento: imovel.complemento || "",
            quartos: imovel.quartos || 0,
            suites: imovel.suites || 0,
            banheiros: imovel.banheiros || 0,
            vagas: imovel.vagas || 0,
            condominio: imovel.condominio || 0,
            disponivel: imovel.disponivel ?? true,
            mobilia: imovel.mobilia || "VAZIO",
            observacoes: imovel.observacoes || "",
        }

        return fetch(`${API_BASE_URL}/imoveis`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(payload),
        })
            .then(async res => {
                const data = await res.json()
                if (!res.ok) throw new Error(data.erro || "Erro ao criar imóvel")
                return data.imovel
            })
    }


    async atualizar(id: number, imovel: Partial<Imovel>): Promise<Imovel> {
        return apiService.authenticatedRequest<Imovel>(`/imoveis/${id}`, this.getToken(), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(imovel),
        })
    }

    async deletar(id: number): Promise<{ mensagem: string }> {
        return apiService.authenticatedRequest<{ mensagem: string }>(`/imoveis/${id}`, this.getToken(), {
            method: "DELETE",
        })
    }
}

export const imovelService = new ImovelService()
