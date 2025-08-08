import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('user')
@Controller('user')

export class UserController{
  constructor(
    private userService : UserService
  ){}

  @Get('/')
  async getAllUsers(){
    return await this.userService.getAllUsers();

  }

  @Patch('/:userUUID')
  async updateUser(@Body() dto: UpdateUserDTO , @Param('userUUID') userUUID: string){
    return await this.userService.updateUser(dto, userUUID);
   }

  @Delete(':userUUID')
  async deleteUser(@Param('userUUID') userUUID: string){
    return await this.userService.deleteUser(userUUID);
  }

  @Post('/register')
  async createUser(@Body() dto: CreateUserDTO){
    return await this.userService.createUser(dto);

  }

 


}