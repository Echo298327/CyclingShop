import b1 from "../assets/bicycles/b1.jpg";
import b2 from "../assets/bicycles/b2.jpg";
import b3 from "../assets/bicycles/b3.jpg";
import b4 from "../assets/bicycles/b4.jpg";
import type { Product, Feature } from "../types";

export const products: Product[] = [
  {
    id: 1,
    name: "Classic E-City",
    description: "Vintage-inspired electric city bike with elegant copper accents",
    image: b1,
  },
  {
    id: 2,
    name: "Retro E-Step",
    description: "Traditional step-through frame with modern electric assist",
    image: b2,
  },
  {
    id: 3,
    name: "E-Commuter",
    description: "Classic commuter design with hidden electric technology",
    image: b3,
  },
  {
    id: 4,
    name: "E-Cargo",
    description: "Electric cargo bike with traditional bamboo carrier",
    image: b4,
  },
  {
    id: 5,
    name: "E-Explorer",
    description: "Retro adventure e-bike with vintage leather accessories",
    image: b1,
  },
  {
    id: 6,
    name: "E-Folding",
    description: "Compact electric folder with classic design elements",
    image: b2,
  },
];
export const features: Feature[] = [
  {
    icon: "fas fa-tools",
    title: "Expert Service",
    description: "Professional maintenance and repair services for all types of bicycles with certified technicians",
  },
  {
    icon: "fas fa-star",
    title: "Quality Products",
    description: "High-quality bicycles and accessories from trusted brands worldwide",
  },
  {
    icon: "fas fa-handshake",
    title: "Personal Consultation",
    description: "One-on-one consultation to find the perfect cycling solution for your needs",
  },
];
