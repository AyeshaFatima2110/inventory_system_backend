import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PurchaseOrderService } from "./purchase-order.service";
import { CreatePurchaseOrderDTO } from "./dto/create-purchase-order.dto";
import { UpdatePurchaseOrderDTO } from "./dto/update-purchase-order.dto";


@ApiTags('Purchase-Order')
@Controller('purchase-order')

export class PurchaseorderController{
    constructor(
        private purchaseOrderService : PurchaseOrderService
    ){}

    @Get('')
    async getAllPurchaseOrder(){
        return await this.purchaseOrderService.getAllPurchaseOrders();
    }

    @Post('')
    async createPurchaseOrder(@Body() dto: CreatePurchaseOrderDTO){
        return await this.purchaseOrderService.createPurchaseOrder(dto);
    }

    @Patch('/:purchaseOrderUUID')
    async updatePurchaseOrder(@Body() dto: UpdatePurchaseOrderDTO , @Param('purchaseOrderUUID') purchaseOrderUUID: string){
        return await this.purchaseOrderService.updatePurchaseOrder(dto, purchaseOrderUUID);
    }

    @Delete('/:purchaseOrderUUID')
    async deletePurchaseOrder(@Param('purchaseOrderUUID') purchaseOrderUUID: string){
        return await this.purchaseOrderService.deletePurchaseOrder(purchaseOrderUUID);
    }

    @Get('/:purchaseOrderUUID')
    async getPurchaseOrderByUUID(@Param('purchaseOrderUUID') purchaseOrderUUID: string){
        return await this.purchaseOrderService.getPurchaseOrderByUUID(purchaseOrderUUID);

    }
}