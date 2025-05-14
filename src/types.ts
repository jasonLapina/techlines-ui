export interface Review {
  name: string;
  rating: number;
  comment: string;
  title: string;
  user: string;
  _id: string;
  createdAt: string; // Date as ISO string
  updatedAt: string; // Date as ISO string
}

export interface Product {
  _id: string;
  name: string;
  subtitle: string;
  images: string[]; // Array of strings for image URLs
  description: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  numberOfReviews: number;
  productIsNew: boolean;
  reviews: Review[]; // Array of reviews
  stock: number;
  stripeId: string;
  __v: number;
  updatedAt: string; // Date as ISO string
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  name: string;
  email: string;
  active: boolean;
  isAdmin: boolean;
  googleId?: string;
  googleImage?: string;
  _id: string;
  firstLogin: boolean;
}

export interface Order {
  user: string;
  items: {
    name: string;
    quantity: number;
    price: number;
    id: string;
  }[];
  shippingInformation: string;
  totalPrice: number;
  isDelivered: boolean;
  deliveredAt?: Date;
}
