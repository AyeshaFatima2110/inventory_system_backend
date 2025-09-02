import { Injectable } from "@nestjs/common";
import { Knex } from "knex";
import { InjectConnection } from "nest-knexjs";
import { SupplierRepository } from "./supplier.repository";
import { CreateSupplierDTO } from "./dto/create-supplier.dto";
import { UpdateSupplierDTO } from "./dto/update-supplier.dto";

@Injectable()

export class SupplierService{
  constructor(
    @InjectConnection() private readonly knex: Knex,
    private supplierRepository: SupplierRepository
  ){}

  async getAllSuppliers(){
    const trx = await this.knex.transaction({readOnly:true});
    try{
      const suppliers = await this.supplierRepository.getAllSuppliers(trx);
      await trx.commit();
      return {suppliers:suppliers};

    }catch(err){
      await trx.rollback();
      throw err;

    }
  }

  async createSupplier(dto: CreateSupplierDTO){
    const trx  = await this.knex.transaction();
    try{
      await this.supplierRepository.createSupplier(trx,dto);
      await trx.commit();
      return 'ok';

    }catch(err){
      await trx.commit();
      throw err;
    }
  }

  async updateSupplier(dto:UpdateSupplierDTO, supplierUUID:string){
    const trx  = await this.knex.transaction();
    try{
      await this.supplierRepository.updateSupplier(trx, dto, supplierUUID);
      await trx.commit();
      return 'ok';

    }catch(err){
      await trx.commit();
      throw err;
    }

  }

  async deleteSupplier(supplierUUID: string){
    const trx  = await this.knex.transaction();
    try{
      await this.supplierRepository.deleteSupplier(trx,supplierUUID);
      await trx.commit();
      return 'ok';

    }catch(err){
      await trx.commit();
      throw err;
    }
    
  }
  
  async getSupplierByUUID(supplierUUID:string){
    const trx = await this.knex.transaction({readOnly:true});
    try{
      const supplier = await this.supplierRepository.getSupplierByUUID(trx,supplierUUID);
      await trx.commit();
      return {supplier:supplier};

    }catch(err){
      await trx.rollback();
      throw err;

    }
  }




}