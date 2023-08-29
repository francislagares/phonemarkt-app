export interface Product {
  id: string;
  brand: string;
  model: string;
  price: string;
  imgUrl: string;
}

export interface Color {
  code: number;
  name: string;
}

export interface Storage {
  code: number;
  name: string;
}

export interface ProductDetail {
  brand: string;
  model: string;
  price: string;
  imgUrl: string;
  internalMemory: string[];
  displayResolution: string;
  primaryCamera: string[];
  options: any;
  battery: string;
  ram: string;
  os: string;
  weight: string;
  dimentions: string;
}
