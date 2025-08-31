import { BaseModel } from "./base.model";

export class Supplier extends BaseModel{
  static tableName: string = 'suppliers';
  static idColumn: string = 'supplier_id';


  
  supplierId: string;
  name: string;
  phoneNumber: string;
  email: string;

}