import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../guards/jwt.guard";

@ApiTags('user')
@Controller('user')

export class UserController{
  constructor(
    private userService : UserService
  ){}

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get('/')
  async getAllUsers(){
    return await this.userService.getAllUsers();

  } 

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Patch('/:userUUID')
  async updateUser(@Body() dto: UpdateUserDTO , @Param('userUUID') userUUID: string){
    return await this.userService.updateUser(dto, userUUID);
   }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Delete(':userUUID')
  async deleteUser(@Param('userUUID') userUUID: string){
    return await this.userService.deleteUser(userUUID);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Post('/')
  async createUser(@Body() dto: CreateUserDTO){
    return await this.userService.createUser(dto);

  }

 


}