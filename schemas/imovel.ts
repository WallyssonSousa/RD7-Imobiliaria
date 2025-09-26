import { z } from "zod"

export const imovelSchema = z.object({
  tipo_imovel: z.enum(["CASA", "APARTAMENTO", "TERRENO", "SALA_COMERCIAL"]),
  cep: z.string().min(8, "CEP inválido"),
  complemento: z.string().optional(),
  metragem: z.number().positive("Informe a metragem"),
  quartos: z.number().min(0),
  suites: z.number().min(0),
  banheiros: z.number().min(0),
  vagas: z.number().min(0),
  valor_aluguel: z.number().min(0),
  valor_venda: z.number().min(0),
  condominio: z.number().min(0).optional(),
  iptu: z.number().min(0),
  finalidade: z.enum(["ALUGUEL", "COMPRA", "AMBOS"]),
  disponivel: z.boolean().default(true),
  mobilia: z.enum(["MOBILIADO", "SEMIMOBILIADO", "VAZIO"]).default("VAZIO"),
  observacoes: z.string().optional(),
})

export type ImovelFormData = z.infer<typeof imovelSchema>
