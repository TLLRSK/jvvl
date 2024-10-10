import { NavLink } from "./types";

export const links: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/products", label: "products" },
  { href: "/admin/sales", label: "dashboard" },
];

export const userLinks: NavLink[] = [
  { href: "/orders", label: "my orders"},
]

export const dashboardLinks: NavLink[] = [
  { href: '/admin/sales', label: 'sales' },
  { href: '/admin/products', label: 'my products' },
  { href: '/admin/products/create', label: 'create product' },
];
