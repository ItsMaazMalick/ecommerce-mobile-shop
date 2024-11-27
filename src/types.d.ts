interface Product {
  id: string;
  name: string;
  price: number;
  storage: string;
}

interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  estimatedTime: string;
  Product?: {
    name: string;
  };
}

interface Order {
  id: string;
  email: string;
  contactNumber: string;
  price: number;
  orderStatus: "paid" | "pending" | "processing";
}

interface DashboardProps {
  products: Product[];
  services: Service[];
  orders: Order[];
  totalOrdersLength: number;
  pendingOrders: number;
  paidOrders: number;
}
