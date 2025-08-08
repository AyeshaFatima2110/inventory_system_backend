import { Injectable } from "@nestjs/common";
import { Knex } from "knex";
import { InjectConnection } from "nest-knexjs";
import { CreateProductDTO } from "./dto/create-product.dto";
import { ProductRespository } from "./product.repository";
import { UpdateProductDTO } from "./dto/update-product.dto";

@Injectable()

export class ProductService{

  constructor(
    @InjectConnection() private readonly knex : Knex,
    private productRepository: ProductRespository
  ){}
  async getAllProduct(){
    const trx = await this.knex.transaction({readOnly: true});
    try{
      const products = await this.productRepository.getAllProducts(trx);
      await trx.commit();
      return {products: products};


    }catch(err){
      await trx.rollback();
      throw err;
    }
  }

  async createProduct(dto: CreateProductDTO){
    const trx = await this.knex.transaction();
    try{
      await this.productRepository.createProduct(trx,dto);
      await trx.commit();
      return 'ok';


    }catch(err){
      await trx.rollback();
      throw err;
    }

  }

  async updateProduct(dto: UpdateProductDTO, productUUID:string){
    const trx = await this.knex.transaction();
    try{
      await this.productRepository.updateProduct(trx,dto,productUUID);
      await trx.commit();
      return 'ok';
     }catch(err){
      await trx.rollback();
      throw err;
     }
    }

  async deleteProduct(productUUID:string){
    const trx = await this.knex.transaction();
    try{
      await this.productRepository.deleteProduct(trx,productUUID);
      await trx.commit();
      return 'ok';
     }catch(err){
      await trx.rollback();
      throw err;
     }


  }

  async getProductByUUID(productUUID: string){
    const trx = await this.knex.transaction({readOnly: true});
    try{
      const product = await this.productRepository.getProductByUUID(trx,productUUID);
      await trx.commit();
      return {product: product};


    }catch(err){
      await trx.rollback();
      throw err;
    }


  }

}