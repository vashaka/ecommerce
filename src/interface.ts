export interface Clothe {
  id: string;
  title: string;
  desc: string;
  price: number;
  category: string;
  isInSale: boolean;
  oldPrice: number;
  imageArr: string[];
  image: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
}
