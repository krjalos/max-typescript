import 'reflect-metadata';
import {plainToClass} from "class-transformer";

import Product from './product.module';

const loadedProducts = [
  {title: "Book", price: 12},
  {title: "Coffee", price: 4},
  {title: "Chocolate", price: 4}
]

const products = plainToClass(Product, loadedProducts);

for(const p in products){
  console.log(products[p].getInformation());
}