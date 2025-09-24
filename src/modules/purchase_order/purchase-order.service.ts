import { Injectable } from "@nestjs/common";
import { Knex } from "knex";
import { InjectConnection } from "nest-knexjs";
import { PurchaseOrderRepository } from "./purchase-order.repository";
import { CreatePurchaseOrderDTO } from "./dto/create-purchase-order.dto";
import { UpdatePurchaseOrderDTO } from "./dto/update-purchase-order.dto";

@Injectable()
export class PurchaseOrderService{
    constructor(
      @InjectConnection() private  readonly knex : Knex,
      private purchaseOrderRepository : PurchaseOrderRepository
    ){}

    async getAllPurchaseOrders(){
        const trx = await this.knex.transaction({readOnly:true});
        try{
            const purchaseOrders = await this.purchaseOrderRepository.getAllPurchaseOrders(trx);
            await trx.commit();
            return {purchaseOrders: purchaseOrders};
            

        }catch(err){
            await trx.rollback();
            throw err;
        }
    }

    async createPurchaseOrder(dto: CreatePurchaseOrderDTO){
        const trx = await this.knex.transaction();
        try{
            await this.purchaseOrderRepository.createPurchaseOrder(trx , dto);
            await trx.commit();
            return 'ok';

        }catch(err){
            await trx.rollback();
            throw err;
        }
    }

    async updatePurchaseOrder(dto: UpdatePurchaseOrderDTO, purchaseOrderUUID: string){
        const trx = await this.knex.transaction();
        try{
            await this.purchaseOrderRepository.updatePurchaseOrder(trx, dto, purchaseOrderUUID);
            trx.commit();
            return 'ok';

        }catch(err){
            await trx.rollback();
            throw err;
        }
    }

    async deletePurchaseOrder(purchaseOrderUUID: string){
        const trx = await this.knex.transaction();
        try{
             await this.purchaseOrderRepository.deletePurchaseOrder(trx,purchaseOrderUUID);
            trx.commit();
            return 'ok';

        }catch(err){

        }

    }

    async getPurchaseOrderByUUID(purchaseOrderUUID: string){
        const trx = await this.knex.transaction({readOnly:true});
        try{
            const purchaseOrder = await this.purchaseOrderRepository.getPurchaseOrderByUUID(trx,purchaseOrderUUID);
            await trx.commit();
            return {purchaseOrder: purchaseOrder};
            

        }catch(err){
            await trx.rollback();
            throw err;
        }
    }


    
}

