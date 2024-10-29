import { NavLinkProps } from "./types";

export const signedOutLinks: NavLinkProps[] = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/products", label: "products" },
  { href: "/admin/sales", label: "dashboard" },
];
export const signedInLinks: NavLinkProps[] = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/products", label: "products" },
  { href: "/favorites", label: "favorites" },
  { href: "/admin/sales", label: "dashboard" },
];

export const userLinks: NavLinkProps[] = [
  { href: "/orders", label: "my orders"},
]

export const dashboardLinks: NavLinkProps[] = [
  { href: '/admin/sales', label: 'sales' },
  { href: '/admin/products', label: 'my products' },
  { href: '/admin/products/create', label: 'create product' },
];
