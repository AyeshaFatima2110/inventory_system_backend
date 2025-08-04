import { BaseModel } from "./base.model";

export class Product extends BaseModel{

  static tableName: string = 'products';
  static idColumn: string = 'product_id';

  productId : number;
  name : string;
  sku : string; // stock keeping unit
  quantityInStock : number;
  price : number;

}