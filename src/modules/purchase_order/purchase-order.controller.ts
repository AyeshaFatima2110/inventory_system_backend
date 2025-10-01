import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { PurchaseOrderService } from "./purchase-order.service";
import { CreatePurchaseOrderDTO } from "./dto/create-purchase-order.dto";
import { UpdatePurchaseOrderDTO } from "./dto/update-purchase-order.dto";
import { JwtAuthGuard } from "../guards/jwt.guard";


@ApiTags('Purchase-Order')
@Controller('purchase-order')

export class PurchaseorderController{
    constructor(
        private purchaseOrderService : PurchaseOrderService
    ){}

    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard)
    @Get('')
    async getAllPurchaseOrder(){
        return await this.purchaseOrderService.getAllPurchaseOrders();
    }
     
    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard)
    @Post('')
    async createPurchaseOrder(@Body() dto: CreatePurchaseOrderDTO){
        return await this.purchaseOrderService.createPurchaseOrder(dto);
    }

    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard)
    @Patch('/:purchaseOrderUUID')
    async updatePurchaseOrder(@Body() dto: UpdatePurchaseOrderDTO , @Param('purchaseOrderUUID') purchaseOrderUUID: string){
        return await this.purchaseOrderService.updatePurchaseOrder(dto, purchaseOrderUUID);
    }

    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard)
    @Delete('/:purchaseOrderUUID')
    async deletePurchaseOrder(@Param('purchaseOrderUUID') purchaseOrderUUID: string){
        return await this.purchaseOrderService.deletePurchaseOrder(purchaseOrderUUID);
    }

    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard)
    @Get('/:purchaseOrderUUID')
    async getPurchaseOrderByUUID(@Param('purchaseOrderUUID') purchaseOrderUUID: string){
        return await this.purchaseOrderService.getPurchaseOrderByUUID(purchaseOrderUUID);

    }
}