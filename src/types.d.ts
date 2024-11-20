import { OrderStatus, Role } from "@prisma/client";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  emailVerified: Date | null;
  isApproved: boolean;
  categories: Category[];
  createdAt: Date;
  updatedAt: Date;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  products: Product[];
  user: User | null;
  userId: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string | null;
  storage: string;
  image: string | null;
  variants: Variant[];
  category: Category;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
  OrderItem: OrderItem[];
};

export type RepairProduct = {
  id: string;
  name: string;
  slug: string;
  RepairServices: RepairServices[];
  createdAt: Date;
  updatedAt: Date;
};

export type RepairServices = {
  id: string;
  name: string;
  price: number;
  description: string | null;
  estimatedTime: string | null;
  Product: RepairProduct | null;
  productId: string | null;
  createdAt: Date;
  updatedAt: Date;
  OrderServicesItem: OrderServicesItem[];
};

export type Variant = {
  id: string;
  name: string;
  price: number;
  discount: number | null;
  product: Product;
  productId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Order = {
  id: string;
  contactNumber: string;
  email: string | null;
  orderStatus: OrderStatus;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  OrderServicesItem: OrderServicesItem[];
  orderProducts: OrderItem[];
};

export type OrderItem = {
  id: string;
  products: Product;
  productId: string;
  quantity: number;
  Order: Order;
  orderId: string;
};

export type OrderServicesItem = {
  id: string;
  services: RepairServices;
  serviceId: string;
  orderId: string;
  order: Order;
  quantity: number;
};
