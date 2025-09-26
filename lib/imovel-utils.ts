export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

export const formatCEP = (cep: string): string => {
  return cep.replace(/(\d{5})(\d{3})/, "$1-$2")
}

export const formatArea = (area: number): string => {
  return `${area} m²`
}
