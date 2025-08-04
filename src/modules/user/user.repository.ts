import { Knex } from "knex";
import { User } from "src/models/user.model";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";

export class UserRepository{

  async getAllUsers(trx : Knex.Transaction){
    const users = await User.query(trx)
    .select(
      'users.first_name as firstName',
      'users.last_name as lastName',
      'users.username as userName',
      'users.email',
      'roles.role_name as userRole'
    )
    .distinct()
    .join('roles' , 'roles.role_id' , 'users.role_id')
    .whereNull('users.deleted_at');
    return users;

  }

  async createUser(trx: Knex.Transaction, dto: CreateUserDTO){
    return await User.query(trx).insert(dto);
  }

  async updateUser(trx: Knex.Transaction , dto: UpdateUserDTO , userUUID: string){
    return await User.query(trx).update(dto).where('uuid' , userUUID);
  }

  async deleteUser(trx: Knex.Transaction , userUUID: string){
    return await User.query(trx).update({deletedAt: trx.fn.now()}).where('uuid',userUUID);
  }


  async findByUserName(trx : Knex.Transaction, userName: string){
    return await User.query(trx).select().where('username', userName);
   }

  async findByEmail(trx : Knex.Transaction, email: string){
    return await User.query(trx).select().where('email' , email);
  }

  

}