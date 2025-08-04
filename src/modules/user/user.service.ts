import { HttpException, Injectable } from "@nestjs/common";
import { Knex } from "knex";
import { InjectConnection } from "nest-knexjs";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/create-user.dto";
import * as bcrypt from 'bcrypt';
import { UpdateUserDTO } from "./dto/update-user.dto";

@Injectable()
export class UserService{
  constructor(
    @InjectConnection() private readonly knex : Knex,
    private userRepository: UserRepository
  ){}


  async getAllUsers(){
    const trx = await this.knex.transaction();
    try{
      const users = await this.userRepository.getAllUsers(trx);
      await trx.commit();
      return {users: users};

    }catch(err){
      await trx.rollback();
      throw err;

    }
  }

  async createUser(dto : CreateUserDTO){
    const trx = await this.knex.transaction();
    try{
      const [userName] = await this.userRepository.findByUserName(trx , dto.username);
      if(userName){
        throw new HttpException('Username Already Exists', 400);
      }

      const [email] = await this.userRepository.findByEmail(trx , dto.email);
      if(email){
         throw new HttpException('Email Already Exists', 400);
      }
      const salt = await bcrypt.genSalt(10);
      dto.password = await bcrypt.hash(dto.password , salt);

      await this.userRepository.createUser(trx, dto);
      await trx.commit();
      return 'ok';
    


    }catch(err){
      await trx.rollback();
      throw err;

    }

  }

  async updateUser(dto: UpdateUserDTO , userUUID: string){
    const trx  = await this.knex.transaction();
    try{
      await this.userRepository.updateUser(trx, dto , userUUID);
      await trx.commit();
      return 'ok';

    }catch(err){
      await trx.rollback();
      throw err;

    }

  }

  async deleteUser(userUUID: string){
    const trx = await this.knex.transaction();
    try{
      await this.userRepository.deleteUser(trx , userUUID);
      await trx.commit();
      return 'ok';

    }catch(err){
      await trx.rollback();
      throw err;

    }

  }
}