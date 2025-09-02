import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { SupplierService } from "./supplier.service";
import { CreateSupplierDTO } from "./dto/create-supplier.dto";
import { UpdateSupplierDTO } from "./dto/update-supplier.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Supplier')
@Controller('supplier')

export class SupplierController{
    constructor(
        private supplierService:SupplierService
    ){}

    @Get('')
    async getAllSuppliers(){
        return await this.supplierService.getAllSuppliers();
    }
    
    @Post('')
    async createSupplier(@Body() dto: CreateSupplierDTO){
        return await this.supplierService.createSupplier(dto);
    }

    @Patch('/:supplierUUID')
    async updateSupplier(@Body() dto: UpdateSupplierDTO,@Param('supplierUUID') supplierUUID:string){
        return await this.supplierService.updateSupplier(dto,supplierUUID)
    }

    @Delete('/:supplierUUID')
    async deleteSupplier(@Param('supplierUUID') supplierUUID:string){
        return await this.supplierService.deleteSupplier(supplierUUID);
    }

    @Get('/:supplierUUID')
    async getSupplierByUUID(@Param('supplierUUID') supplierUUID:string){
        return await this.supplierService.getSupplierByUUID(supplierUUID);

    }

    }