import { Type } from "class-transformer";
import { IsDate } from "class-validator";

export class UpdatePurchaseOrderDTO{
    supplier_id: number;
    ordered_by : number;
    @IsDate()
    @Type(()=>Date)
    order_date : Date;
}