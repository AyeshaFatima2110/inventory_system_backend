import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { SupplierService } from "./supplier.service";
import { CreateSupplierDTO } from "./dto/create-supplier.dto";
import { UpdateSupplierDTO } from "./dto/update-supplier.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../guards/jwt.guard";

@ApiTags('Supplier')
@Controller('supplier')

export class SupplierController{
    constructor(
        private supplierService:SupplierService
    ){}

    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard)
    @Get('')
    async getAllSuppliers(){
        return await this.supplierService.getAllSuppliers();
    }

    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard)
    @Post('')
    async createSupplier(@Body() dto: CreateSupplierDTO){
        return await this.supplierService.createSupplier(dto);
    }

    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard)
    @Patch('/:supplierUUID')
    async updateSupplier(@Body() dto: UpdateSupplierDTO,@Param('supplierUUID') supplierUUID:string){
        return await this.supplierService.updateSupplier(dto,supplierUUID)
    }

    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard)
    @Delete('/:supplierUUID')
    async deleteSupplier(@Param('supplierUUID') supplierUUID:string){
        return await this.supplierService.deleteSupplier(supplierUUID);
    }

    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard)
    @Get('/:supplierUUID')
    async getSupplierByUUID(@Param('supplierUUID') supplierUUID:string){
        return await this.supplierService.getSupplierByUUID(supplierUUID);
    }

 }