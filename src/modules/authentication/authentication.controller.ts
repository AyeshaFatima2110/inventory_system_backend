import { Controller, Post, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthenticationService } from "./authentication.service";
@ApiTags('Authentication')
@Controller('authentication')

export class  AuthenticationController{
  constructor(
    private authenticationService: AuthenticationService
  ){}

  @Post('signIn')
  async SignInByEmail(@Query('email') email: string , @Query('password')password: string){
    return await this.authenticationService.SignInByEmail(email,password);
  }

}