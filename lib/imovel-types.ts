export interface Imovel {
  id?: number
  tipo_imovel: "CASA" | "APARTAMENTO" | "TERRENO" | "SALA_COMERCIAL"
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
  finalidade: "ALUGUEL" | "COMPRA" | "AMBOS"
  disponivel?: boolean
  mobilia?: "MOBILIADO" | "SEMIMOBILIADO" | "VAZIO"
  observacoes?: string
  data_cadastro?: string
}

export const TIPO_IMOVEL_OPTIONS = [
  { value: "CASA", label: "Casa" },
  { value: "APARTAMENTO", label: "Apartamento" },
  { value: "TERRENO", label: "Terreno" },
  { value: "SALA_COMERCIAL", label: "Sala Comercial" },
] as const

export const FINALIDADE_OPTIONS = [
  { value: "ALUGUEL", label: "Aluguel" },
  { value: "COMPRA", label: "Compra" },
  { value: "AMBOS", label: "Ambos" },
] as const

export const MOBILIA_OPTIONS = [
  { value: "VAZIO", label: "Vazio" },
  { value: "SEMIMOBILIADO", label: "Semi-mobiliado" },
  { value: "MOBILIADO", label: "Mobiliado" },
] as const
