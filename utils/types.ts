export type NavLink = {
  href: string;
  label: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  featured: boolean;
  thumbnailImage: string;
  modelImage: string;
  galleryImages: string[];
  price: number;
  attributes: string[];
  sizes: string[];
  createdAt: Date;
  updatedAt: Date;
  clerkId: string;
};

export type FormProduct = {
  id?: string;
  name: string;
  description: string;
  featured: boolean;
  thumbnailImage: File | string | null;
  modelImage: File | string | null;
  galleryImages: Array<File | string> | null;
  price: number;
  attributes: string[];
  sizes: string[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export type formInputProps = {
  type: string;
  name: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TextAreaInputProps = {
  name: string;
  label: string;
  defaultValue?: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

export type SingleImageInputProps = {
  name: string;
  label?: string;
  onChange: (name: string, value: File | null) => void;
};

export type ListInputProps = {
  name: string;
  label: string;
  defaultValue?: string[];
  placeholder?: string;
  onChange: (name: string, value: string[]) => void;
};

export type CheckboxInputProps = {
  name: string;
  label: string;
  defaultChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type UpdateSingleImageInputProps = {
  image: File | string | null;
  name: string;
  onChange: (name: string, value: File | null) => void;
};
export type UpdateMultipleImageInputProps = {
  name: string;
  label: string;
  images: Array<string | File>;
  updateInput: (name: string, value: Array<string | File>) => void;
};

export type CartProps = {
  cartItems: Product[];
  cartTotal: string;
  id: string;
  numItemsInCart: string;
  orderTotal: string;
  shipping: string;
};

export type CartItemProduct = {
  id: string;
  productId: string;
  cartId: string;
  size: string;
  createdAt: Date;
  updatedAt: Date;
  product: Product;
};
