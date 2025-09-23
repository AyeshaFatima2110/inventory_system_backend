import { NumberQueryBuilder } from "objection";
import { BaseModel } from "./base.model";

export class PurchaseOrder extends BaseModel{
    static tableName: string = 'purchase_orders';
    static idColumn: string = 'purchase_order_id';

    supplier_id : number;
    ordered_by : Number; //userId
    order_date : Date;

}