import { Product } from "./models"

export interface ProductInCart extends Product {
  quantity: number;
}

