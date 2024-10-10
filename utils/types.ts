export type NavLink = {
  href: string;
  label: string;
}

export type Product = {
  id: string;
  name: string;
  description: string;
  featured: boolean;
  thumbnail_image: string,
  model_image: string,
  images_gallery: string[],
  price: number,
  attributes: string[];
}

export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;