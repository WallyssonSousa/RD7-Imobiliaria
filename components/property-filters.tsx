"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search, SlidersHorizontal, X, MapPin } from "lucide-react"

export function PropertyFilters() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([500000, 5000000])
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const filterOptions = {
    tipo: ["Venda", "Aluguel"],
    categoria: ["Apartamento", "Casa", "Cobertura", "Loft", "Comercial"],
    quartos: ["1", "2", "3", "4", "5+"],
    bairros: ["Copacabana", "Ipanema", "Leblon", "Barra da Tijuca", "Botafogo", "Flamengo"],
  }

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter])
    }
  }

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter))
  }

  return (
    <div className="mb-8">
      {/* Search Bar */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Buscar por localização, tipo de imóvel..." className="pl-10 h-12 text-base" />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                className="h-12 px-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filtros
              </Button>
              <Button className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                <Search className="h-4 w-4 mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-sm text-muted-foreground mr-2">Filtros ativos:</span>
          {activeFilters.map((filter) => (
            <Badge
              key={filter}
              variant="secondary"
              className="bg-accent/10 text-accent hover:bg-accent/20 cursor-pointer"
              onClick={() => removeFilter(filter)}
            >
              {filter}
              <X className="h-3 w-3 ml-1" />
            </Badge>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setActiveFilters([])}
            className="text-muted-foreground hover:text-foreground h-6 px-2"
          >
            Limpar todos
          </Button>
        </div>
      )}

      {/* Advanced Filters */}
      {isFiltersOpen && (
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Tipo */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Tipo</Label>
                <Select onValueChange={(value) => addFilter(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions.tipo.map((tipo) => (
                      <SelectItem key={tipo} value={tipo}>
                        {tipo}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Categoria */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Categoria</Label>
                <Select onValueChange={(value) => addFilter(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions.categoria.map((categoria) => (
                      <SelectItem key={categoria} value={categoria}>
                        {categoria}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Quartos */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Quartos</Label>
                <Select onValueChange={(value) => addFilter(`${value} quartos`)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions.quartos.map((quarto) => (
                      <SelectItem key={quarto} value={quarto}>
                        {quarto} {quarto === "1" ? "quarto" : "quartos"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Bairro */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Bairro</Label>
                <Select onValueChange={(value) => addFilter(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions.bairros.map((bairro) => (
                      <SelectItem key={bairro} value={bairro}>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-2" />
                          {bairro}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Price Range */}
            <div className="mt-6 pt-6 border-t border-border">
              <Label className="text-sm font-medium mb-4 block">Faixa de Preço</Label>
              <div className="px-2">
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={10000000}
                  min={100000}
                  step={50000}
                  className="mb-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>R$ {priceRange[0].toLocaleString("pt-BR")}</span>
                  <span>R$ {priceRange[1].toLocaleString("pt-BR")}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={() => setIsFiltersOpen(false)}
                className="border-border text-muted-foreground hover:text-foreground"
              >
                Cancelar
              </Button>
              <Button
                onClick={() => setIsFiltersOpen(false)}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Aplicar Filtros
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
