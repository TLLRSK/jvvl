export type LinkType = {
  href: string;
  label: string;
}

export type Product = {
  id: string;
  name: string;
  description: string;
  featured: boolean;
  image: string,
  price: number,
  attributes: string[];
}