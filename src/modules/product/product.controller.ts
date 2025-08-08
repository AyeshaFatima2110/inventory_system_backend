import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ProductService } from "./product.service";
import { CreateProductDTO } from "./dto/create-product.dto";
import { UpdateProductDTO } from "./dto/update-product.dto";

@ApiTags('Product')
@Controller('product')

export class ProductController{
  constructor(
    private productService: ProductService
  ){}

  @Get('/')
  async getAllProducts(){
    return await this.productService.getAllProduct();
  }

  @Post('/')
  async createProduct(@Body() dto: CreateProductDTO){
    return await this.productService.createProduct(dto);
   }

  @Patch('/:productUUID')
  async updateProduct(@Body() dto: UpdateProductDTO, @Param('productUUID') productUUID: string){
    return await this.productService.updateProduct(dto, productUUID);
  }

  @Delete('/:productUUID')
  async deleteProdct(@Param('productUUID') productUUID: string){
    return await this.productService.deleteProduct(productUUID);
  }

  @Get('/:productUUID')
  async getProductByUUID(@Param('productUUID') productUUID: string){
    return await this.productService.getProductByUUID(productUUID);

  }
}