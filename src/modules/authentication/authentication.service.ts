import { HttpException, Injectable } from "@nestjs/common";
import { Knex } from "knex";
import { UserRepository } from "../user/user.repository";
import * as bycrpt from 'bcrypt';
import { InjectConnection } from "nest-knexjs";
import {JwtService} from '@nestjs/jwt';


@Injectable()

export class AuthenticationService{
  constructor(
    @InjectConnection() private knex: Knex,
    private userRepository:UserRepository,
    private readonly jwtService: JwtService
  ){}
  

  async SignInByEmail(email: string , password: string){

    const trx = await this.knex.transaction();
    try{
      const [user] = await this.userRepository.findByEmail(trx,email);
      if(!user){
        throw new HttpException('Invalid email or passward!', 400);
      }
      const isValidPassword = await bycrpt.compare(password , user.password);
      if(!isValidPassword){
        throw new HttpException('Invalid email or password!',400);
      }
      const payload = {
        userUUID: user.uuid,
        userEmail: user.email,
        userRole: user.roleId
      }
      const accessToken = await this.jwtService.signAsync(payload);
      return {accessToken: accessToken};
      }catch(err){
      trx.rollback();
      throw err;

    }

  }

}


