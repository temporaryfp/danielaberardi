export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  description: string;
  materials: string[];
  images: ProjectImage[];
}

// Projects data matching the actual images in /public/progetti/
export const projects: Record<string, Project> = {
  "sa-tanca-vella": {
    id: "sa-tanca-vella",
    title: "Sa Tanca Vella",
    location: "Formentera, Spain",
    year: "2022",
    description: "Interior design isolano e mediterraneo",
    materials: [
      "Wood",
      "Natural Stone",
      "Linen",
      "Rattan",
      "Resin",
      "White-Sand",
      "Red",
      "Gray"
    ],
    images: [
      { src: "/progetti/sa tanca vella/2.jpeg", alt: "Sa Tanca Vella exterior view" },
      { src: "/progetti/sa tanca vella/8.jpeg", alt: "Sa Tanca Vella exterior view" },
      { src: "/progetti/sa tanca vella/5.jpeg", alt: "Sa Tanca Vella exterior view" },
      { src: "/progetti/sa tanca vella/1.jpeg", alt: "Sa Tanca Vella exterior view" },
      { src: "/progetti/sa tanca vella/3.jpeg", alt: "Sa Tanca Vella exterior view" },
      { src: "/progetti/sa tanca vella/4.jpeg", alt: "Sa Tanca Vella exterior view" },
      { src: "/progetti/sa tanca vella/6.jpeg", alt: "Sa Tanca Vella exterior view" },
      { src: "/progetti/sa tanca vella/7.jpeg", alt: "Sa Tanca Vella exterior view" },
      { src: "/progetti/sa tanca vella/9.jpeg", alt: "Sa Tanca Vella exterior view" },
    ]
  },
  "ca-nostra": {
    id: "ca-nostra",
    title: "Ca' Nostra",
    location: "Formentera, Spain",
    year: "2007",
    description: "Versione tex-mex di una vivienda anni 70",
    materials: [
      "Resin",
      "Glass",
      "Corten",
      "Wood",
      "Kilim",
      "Terre di Siena",
      "Golden, Bronze finishings",
    ],
    images: [
      { src: "/progetti/ca nostra/2.jpeg", alt: "Ca' Nostra interior details" },
      { src: "/progetti/ca nostra/4.jpeg", alt: "Ca' Nostra front view" },
      { src: "/progetti/ca nostra/1.jpeg", alt: "Ca' Nostra interior details" },
      { src: "/progetti/ca nostra/3.jpeg", alt: "Ca' Nostra interior details" },
      { src: "/progetti/ca nostra/5.jpeg", alt: "Ca' Nostra interior details" },
    ]
  },
  "laquila": {
    id: "laquila",
    title: "L'Aquila",
    location: "Abruzzo, Italy",
    year: "2023",
    description: "Restyling da fine '800 a design contemporaneo declinato nei colori del territorio",
    materials: [
      "Wood",
      "Leather",
      "Steel",
      "Plexiglass",
      "Techno-plastic",
      "Crystal",
      "Copper, Silver, Bronze finishings",
    ],
    images: [
      { src: "/progetti/laquila/1.jpeg", alt: "L'Aquila restoration project" },
      { src: "/progetti/laquila/9.jpeg", alt: "L'Aquila restoration project" },
      { src: "/progetti/laquila/10.jpeg", alt: "L'Aquila restoration project" },
      { src: "/progetti/laquila/7.jpeg", alt: "L'Aquila restoration project" },
      { src: "/progetti/laquila/5.jpeg", alt: "L'Aquila restoration project" },
      { src: "/progetti/laquila/6.jpeg", alt: "L'Aquila restoration project" },
      { src: "/progetti/laquila/2.jpeg", alt: "L'Aquila restoration project" },
      { src: "/progetti/laquila/8.jpeg", alt: "L'Aquila restoration project" },
      { src: "/progetti/laquila/3.jpeg", alt: "L'Aquila restoration project" },
      { src: "/progetti/laquila/4.jpeg", alt: "L'Aquila restoration project" },
      { src: "/progetti/laquila/11.jpeg", alt: "L'Aquila restoration project" },
      { src: "/progetti/laquila/14.jpeg", alt: "L'Aquila restoration project" },

    ]
  },
  "bologna": {
    id: "bologna",
    title: "Bologna",
    location: "Emilia Romagna, Italy",
    year: "2012",
    description: "Interior e outdoor design villino anni 40 con arredi in stile contemporaneo",
    materials: [
      "Wood",
      "Steel",
      "Leather",
      "Velvet",
      "Plexiglass",
      "Crystal",
      "Golder, Silver, Bronze finishings",
    ],
    images: [
      { src: "/progetti/bologna/10.jpeg", alt: "Bologna property details" },
      { src: "/progetti/bologna/2.jpeg", alt: "Bologna property details" },
      { src: "/progetti/bologna/12.jpeg", alt: "Bologna property details" },
      { src: "/progetti/bologna/1.jpeg", alt: "Bologna property main view" },
      { src: "/progetti/bologna/3.jpeg", alt: "Bologna property details" },
      { src: "/progetti/bologna/15.jpeg", alt: "Bologna property details" },
      { src: "/progetti/bologna/13.jpeg", alt: "Bologna property details" },
      { src: "/progetti/bologna/6.jpeg", alt: "Bologna property details" },
      { src: "/progetti/bologna/9.jpeg", alt: "Bologna property details" },
      { src: "/progetti/bologna/11.jpeg", alt: "Bologna property details" },
      { src: "/progetti/bologna/16.jpeg", alt: "Bologna property details" },
      { src: "/progetti/bologna/17.jpeg", alt: "Bologna property details" },
      { src: "/progetti/bologna/19.jpeg", alt: "Bologna property details" },
      { src: "/progetti/bologna/20.jpeg", alt: "Bologna property details" },
      { src: "/progetti/bologna/22.jpeg", alt: "Bologna property details" },
    ]
  },
  "milano": {
    id: "milano",
    title: "Milano",
    location: "Lombardia, Italy",
    year: "2024",
    description: "Restyling Porta Romana anni 60 in blu Place Vendôme",
    materials: [
      "Glass",
      "Steel",
      "Rattan",
      "Velvet",
      "Rothko Inspired",
      "Cyan Blue (Place Vendôme)",
      "Ultramarine Blue",
      "White",
      "Lime"
    ],
    images: [
      { src: "/progetti/milano/1.jpg", alt: "Milano property main view" },
      { src: "/progetti/milano/4.jpg", alt: "Milano property details" },
      { src: "/progetti/milano/3.jpg", alt: "Milano property details" },
      { src: "/progetti/milano/2.jpg", alt: "Milano property details" },
    ]
  },
  "cervia": {
    id: "cervia",
    title: "Cervia",
    location: "Emilia Romagna, Italy",
    year: "2018",
    description: "Restyling zona notte villa anni 60",
    materials: [
      "Linen",
      "Cotton",
      "Plexiglass",
      "Wall paintings",
      "Ultramarine and Uttanium Blue",
      "Peacock Green"
    ],
    images: [
      { src: "/progetti/cervia/1.jpeg", alt: "Cervia property main view" },
      { src: "/progetti/cervia/2.jpeg", alt: "Cervia property details" },
      { src: "/progetti/cervia/3.jpeg", alt: "Cervia property details" }
    ]
  },
}; 