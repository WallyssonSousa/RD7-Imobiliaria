"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Bed, Bath, Square, Heart, Eye, Grid3X3, List, ChevronLeft, ChevronRight } from "lucide-react"

export function PropertyGrid() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  const properties = [
    {
      id: 1,
      title: "Apartamento Luxuoso em Copacabana",
      price: "R$ 2.500.000",
      monthlyPrice: null,
      type: "Venda",
      location: "Copacabana, Rio de Janeiro",
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      image: "/luxury-apartment-copacabana.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Casa Moderna em Condomínio Fechado",
      price: "R$ 8.500/mês",
      monthlyPrice: "R$ 8.500",
      type: "Aluguel",
      location: "Barra da Tijuca, Rio de Janeiro",
      bedrooms: 4,
      bathrooms: 3,
      area: 250,
      image: "/modern-house-gated-community.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "Cobertura com Vista para o Mar",
      price: "R$ 4.200.000",
      monthlyPrice: null,
      type: "Venda",
      location: "Ipanema, Rio de Janeiro",
      bedrooms: 4,
      bathrooms: 4,
      area: 300,
      image: "/penthouse-ocean-view-ipanema.jpg",
      featured: true,
    },
    {
      id: 4,
      title: "Loft Moderno no Centro",
      price: "R$ 1.800.000",
      monthlyPrice: null,
      type: "Venda",
      location: "Centro, Rio de Janeiro",
      bedrooms: 2,
      bathrooms: 2,
      area: 85,
      image: "/modern-loft-downtown.jpg",
      featured: false,
    },
    {
      id: 5,
      title: "Casa de Luxo em Condomínio",
      price: "R$ 12.000/mês",
      monthlyPrice: "R$ 12.000",
      type: "Aluguel",
      location: "Recreio, Rio de Janeiro",
      bedrooms: 5,
      bathrooms: 4,
      area: 400,
      image: "/luxury-house-gated-community.jpg",
      featured: false,
    },
    {
      id: 6,
      title: "Apartamento com Vista Panorâmica",
      price: "R$ 3.800.000",
      monthlyPrice: null,
      type: "Venda",
      location: "Leblon, Rio de Janeiro",
      bedrooms: 3,
      bathrooms: 3,
      area: 180,
      image: "/apartment-panoramic-view-leblon.jpg",
      featured: true,
    },
    {
      id: 7,
      title: "Studio Elegante em Ipanema",
      price: "R$ 4.200/mês",
      monthlyPrice: "R$ 4.200",
      type: "Aluguel",
      location: "Ipanema, Rio de Janeiro",
      bedrooms: 1,
      bathrooms: 1,
      area: 45,
      image: "/elegant-studio-ipanema.jpg",
      featured: false,
    },
    {
      id: 8,
      title: "Casa Duplex com Jardim",
      price: "R$ 2.800.000",
      monthlyPrice: null,
      type: "Venda",
      location: "Tijuca, Rio de Janeiro",
      bedrooms: 4,
      bathrooms: 3,
      area: 220,
      image: "/duplex-house-garden-tijuca.jpg",
      featured: false,
    },
    {
      id: 9,
      title: "Cobertura Duplex Premium",
      price: "R$ 18.000/mês",
      monthlyPrice: "R$ 18.000",
      type: "Aluguel",
      location: "Botafogo, Rio de Janeiro",
      bedrooms: 4,
      bathrooms: 4,
      area: 350,
      image: "/premium-duplex-penthouse-botafogo.jpg",
      featured: true,
    },
  ]

  const totalPages = Math.ceil(properties.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProperties = properties.slice(startIndex, endIndex)

  const PropertyCard = ({ property, isListView = false }: { property: any; isListView?: boolean }) => (
    <Card
      className={`overflow-hidden border-border hover:shadow-xl transition-all duration-300 group ${
        isListView ? "flex flex-row" : ""
      }`}
    >
      <div className={`relative ${isListView ? "w-80 flex-shrink-0" : ""}`}>
        <img
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
            isListView ? "w-full h-full" : "w-full h-64"
          }`}
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge
            variant={property.type === "Venda" ? "default" : "secondary"}
            className={
              property.type === "Venda" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
            }
          >
            {property.type}
          </Badge>
          {property.featured && <Badge className="bg-accent text-accent-foreground">Destaque</Badge>}
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-2 bg-background/80 rounded-full hover:bg-background transition-colors">
            <Heart className="h-4 w-4 text-muted-foreground hover:text-accent" />
          </button>
          <button className="p-2 bg-background/80 rounded-full hover:bg-background transition-colors">
            <Eye className="h-4 w-4 text-muted-foreground hover:text-accent" />
          </button>
        </div>
      </div>

      <CardContent className={`p-6 ${isListView ? "flex-1" : ""}`}>
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          {property.location}
        </div>

        <h3 className={`font-semibold text-foreground mb-2 text-balance ${isListView ? "text-xl" : "text-lg"}`}>
          {property.title}
        </h3>

        <div className="flex items-center justify-between mb-4">
          <span className={`font-bold text-accent ${isListView ? "text-3xl" : "text-2xl"}`}>{property.price}</span>
        </div>

        <div
          className={`flex items-center justify-between text-sm text-muted-foreground mb-4 ${isListView ? "mb-6" : ""}`}
        >
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            {property.bedrooms} quartos
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            {property.bathrooms} banheiros
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            {property.area}m²
          </div>
        </div>

        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Ver Detalhes</Button>
      </CardContent>
    </Card>
  )

  return (
    <div>
      {/* Header with sorting and view options */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <p className="text-muted-foreground">
            Mostrando {startIndex + 1}-{Math.min(endIndex, properties.length)} de {properties.length} imóveis
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Select defaultValue="relevancia">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevancia">Mais Relevantes</SelectItem>
              <SelectItem value="preco-menor">Menor Preço</SelectItem>
              <SelectItem value="preco-maior">Maior Preço</SelectItem>
              <SelectItem value="area-maior">Maior Área</SelectItem>
              <SelectItem value="recentes">Mais Recentes</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex border border-border rounded-lg">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={viewMode === "grid" ? "bg-primary text-primary-foreground" : ""}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={viewMode === "list" ? "bg-primary text-primary-foreground" : ""}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Properties Grid/List */}
      <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
        {currentProperties.map((property) => (
          <PropertyCard key={property.id} property={property} isListView={viewMode === "list"} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="border-border"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(page)}
              className={currentPage === page ? "bg-primary text-primary-foreground" : "border-border"}
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="border-border"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
