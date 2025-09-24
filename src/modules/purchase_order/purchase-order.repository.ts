import { Knex } from "knex";
import { PurchaseOrder } from "src/models/purchase_order.model";
import { CreatePurchaseOrderDTO } from "./dto/create-purchase-order.dto";
import { UpdatePurchaseOrderDTO } from "./dto/update-purchase-order.dto";

export class PurchaseOrderRepository{

    async getAllPurchaseOrders(trx: Knex.Transaction){
        return await PurchaseOrder.query(trx).select().whereNull('deleted_at');
    }

    async createPurchaseOrder(trx: Knex.Transaction , dto : CreatePurchaseOrderDTO){
        return await PurchaseOrder.query(trx).insert(dto);
    }

    async updatePurchaseOrder(trx: Knex.Transaction, dto: UpdatePurchaseOrderDTO , purchaseOrderUUID: string){
        return await PurchaseOrder.query(trx).update(dto).where('uuid',purchaseOrderUUID);
    }

    async deletePurchaseOrder(trx: Knex.Transaction , purchaseOrderUUID: string){
        return await PurchaseOrder.query(trx).update({deletedAt:trx.fn.now()}).where('uuid',purchaseOrderUUID);
    }

    async getPurchaseOrderByUUID(trx: Knex.Transaction , purchaseOrderUUID: string){
        return await PurchaseOrder.query(trx).select().where('uuid',purchaseOrderUUID).whereNull('deleted_at');

    }



    
}