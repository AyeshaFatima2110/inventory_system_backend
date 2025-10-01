import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AuthenticationController } from "./authentication.controller";
import { AuthenticationService } from "./authentication.service";
import { UserRepository } from "../user/user.repository";
import { JwtModule} from "@nestjs/jwt";
import { JwtAuthStrategy } from "../strategies/jwt.strategy";

@Module({
  imports:[
    JwtModule.register({
      global:true,
      secret:process.env.JWT_SECRET,
      signOptions: {expiresIn:'36000s'}

    })
  ],
  controllers: [AuthenticationController],
  providers:[AuthenticationService, UserRepository , JwtAuthStrategy ],
  exports: [JwtModule , AuthenticationService]
  

})

export class AuthenticationModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
  }
  
}