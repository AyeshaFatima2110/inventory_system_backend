import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ProductService } from "./product.service";
import { CreateProductDTO } from "./dto/create-product.dto";
import { UpdateProductDTO } from "./dto/update-product.dto";
import { JwtAuthGuard } from "../guards/jwt.guard";

@ApiTags('Product')
@Controller('product')

export class ProductController{
  constructor(
    private productService: ProductService
  ){}

 
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get('/')
  async getAllProducts(){
    return await this.productService.getAllProduct();
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Post('/')
  async createProduct(@Body() dto: CreateProductDTO){
    return await this.productService.createProduct(dto);
   }
 
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Patch('/:productUUID')
  async updateProduct(@Body() dto: UpdateProductDTO, @Param('productUUID') productUUID: string){
    return await this.productService.updateProduct(dto, productUUID);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Delete('/:productUUID')
  async deleteProdct(@Param('productUUID') productUUID: string){
    return await this.productService.deleteProduct(productUUID);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get('/:productUUID')
  async getProductByUUID(@Param('productUUID') productUUID: string){
    return await this.productService.getProductByUUID(productUUID);

  }
}