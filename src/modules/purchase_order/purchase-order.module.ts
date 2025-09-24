import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { PurchaseorderController } from "./purchase-order.controller";
import { PurchaseOrderService } from "./purchase-order.service";
import { PurchaseOrderRepository } from "./purchase-order.repository";

@Module({
    controllers : [PurchaseorderController],
    providers : [PurchaseOrderService, PurchaseOrderRepository]

})

export class PurchaseOrderModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        
    }
    
}

