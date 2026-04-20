export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  emoji: string;
  tagline: string;
  image: string;
  items: MenuItem[];
}

import beers from "@/assets/beers.jpg";
import drinks from "@/assets/drinks.jpg";
import desserts from "@/assets/desserts.jpg";

export const categories: MenuCategory[] = [
  {
    id: "cervejas",
    title: "Cervejas",
    emoji: "🍺",
    tagline: "Geladas, sempre prontas para acompanhar a noite.",
    image: beers,
    items: [
      { name: "Original 600ml", price: "R$ 10,00" },
      { name: "Corona Long Neck", price: "R$ 19,00" },
      { name: "Heineken Long Neck", price: "R$ 13,00" },
      { name: "Skol Beats 313ml", price: "R$ 18,00" },
      { name: "Smirnoff Long Neck", price: "R$ 10,00" },
    ],
  },
  {
    id: "drinks",
    title: "Drinks & Caipirinhas",
    emoji: "🍹",
    tagline: "Da clássica caipirinha às criações exclusivas da casa.",
    image: drinks,
    items: [
      { name: "Marguerita" },
      { name: "Vinho Leite", description: "Vinho doce com limão e guaraná" },
      { name: "Frozen", description: "Tequila, mix de limão, gelo ou frutas" },
      { name: "Sex On The Beach", description: "Licor de pêssego, vodka e Del Valle" },
      { name: "Mojito" },
      { name: "Mojito com Rum", description: "Rum Carta Ouro, Big Apple, gelo, licor fino e guaraná" },
      { name: "Submarino", description: "Cerveja e Tequila", price: "R$ 30,00" },
      { name: "Doçura Loka", description: "Amarula, whisky, sorvete" },
      { name: "Stock", price: "R$ 25,00" },
      { name: "Saquerinha", description: "Sabores: morango, abacaxi ou limão", price: "R$ 40,00" },
      { name: "Jack Daniel's", description: "Dose", price: "R$ 30,00" },
      { name: "Blue's", description: "Dose", price: "R$ 20,00" },
      { name: "Cîroc Beach", description: "Dose", price: "R$ 40,00" },
      { name: "Cîroc Pineapple", description: "Dose", price: "R$ 30,00" },
      { name: "Gin Tropical", description: "Red Bull tropical e Gin", price: "R$ 35,00" },
      { name: "Gin de Pitaya" },
    ],
  },
  {
    id: "sobremesas",
    title: "Sobremesas",
    emoji: "🍰",
    tagline: "O final perfeito para uma noite memorável.",
    image: desserts,
    items: [
      { name: "Cocada Cremosa 150g", price: "R$ 14,00" },
      { name: "Torta de Mousse de Chocolate", price: "R$ 14,00" },
      { name: "Petit Gateau", price: "R$ 18,00" },
    ],
  },
];
