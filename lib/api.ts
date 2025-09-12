const API_BASE_URL = process.env.PUBLIC_API || "http://127.0.0.1:5001";

export interface LoginRequest {
    username: string
    password: string
}

export interface LoginResponse {
  mensagem: string
  token: string
  role: string
}

export interface ApiError {
  erro: string
}

class ApiService {
  private baseUrl: string

  constructor() {
    this.baseUrl = API_BASE_URL
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`

    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.erro || "Erro na requisição")
      }

      return data
    } catch (error) {
      if (error instanceof Error) {
        throw error
      }
      throw new Error("Erro de conexão com o servidor")
    }
  }

  async login(credentials: LoginRequest): Promise<LoginResponse> {
    return this.request<LoginResponse>("/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    })
  }

  async authenticatedRequest<T>(endpoint: string, token: string, options: RequestInit = {}): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      },
    })
  }
}

export const apiService = new ApiService()
