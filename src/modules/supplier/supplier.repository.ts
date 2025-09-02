import { Knex } from "knex";
import { Supplier } from "src/models/supplier.model";
import { CreateSupplierDTO } from "./dto/create-supplier.dto";
import { UpdateSupplierDTO } from "./dto/update-supplier.dto";

export class SupplierRepository{
  
  async getAllSuppliers(trx: Knex.Transaction){
    return await Supplier.query(trx).select().whereNull('deleted_at');
  }

  async createSupplier(trx: Knex.Transaction, dto:CreateSupplierDTO){
    return await Supplier.query(trx).insert(dto);
  }

  async updateSupplier(trx:Knex.Transaction, dto: UpdateSupplierDTO, supplierUUID: string){
    return await Supplier.query(trx).update(dto).where('uuid',supplierUUID);
  }

  async deleteSupplier(trx:Knex.Transaction, supplierUUID: string){
    return await Supplier.query(trx).update({deletedAt:trx.fn.now()}).where('uuid',supplierUUID);
  }

  async getSupplierByUUID(trx:Knex.Transaction,supplierUUID: string){
    return await Supplier.query(trx)
      .select()
      .where('uuid',supplierUUID)
      .whereNull('deleted_at');

  }
}