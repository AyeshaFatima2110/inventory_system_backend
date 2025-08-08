import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { ProductRespository } from "./product.repository";

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductRespository]
})

export class ProductModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    
  }
  
}