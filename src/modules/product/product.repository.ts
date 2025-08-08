import { Knex } from "knex";
import { Product } from "src/models/product.model";
import { CreateProductDTO } from "./dto/create-product.dto";
import { UpdateProductDTO } from "./dto/update-product.dto";

export class ProductRespository{

  async getAllProducts(trx: Knex.Transaction){
    return await Product.query(trx).select().whereNull('deleted_at');
   }

  async createProduct(trx: Knex.Transaction , dto: CreateProductDTO){
    return await Product.query(trx).insert(dto);

  }

  async updateProduct(trx: Knex.Transaction, dto: UpdateProductDTO, productUUID: string){
    return await Product.query(trx).update(dto).where('uuid',productUUID);

  }

  async deleteProduct(trx: Knex.Transaction, productUUID: string){
    return await Product.query(trx).update({deletedAt : trx.fn.now()}).where('uuid',productUUID);
  }

  async getProductByUUID(trx: Knex.Transaction, productUUID){
    return await Product.query(trx).select().where('uuid',productUUID).whereNull('deleted_at');

  }
  
}