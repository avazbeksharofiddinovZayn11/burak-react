import { ProductCollection, ProductSize, ProductStatus } from "../enums/product.enum";


export interface Product {
  _id: string; 
  productStatus: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize: ProductSize;
  productVolemu: number;
  productDesc?: string;
  productImages: string[];
  productViews: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductInquiry  {
  order: String;
  page: number;
  limit: number;
  productCollection?: ProductCollection;
  search?: string;
}