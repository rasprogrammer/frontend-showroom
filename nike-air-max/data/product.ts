export interface Product {
  name: string;
  model: string;
  price: string;
  description: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const product: Product = {
  name: "AIR MAX",
  model: "NIKE AIR MAX 90",
  price: "$98",
  description:
    "Iconic  by Tinker Hatfield layered uppers,\na waffle outsole,  visible Max\nAir cushioning",
  image: "/images/air-max-90.png",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "Collection", href: "#collection" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
