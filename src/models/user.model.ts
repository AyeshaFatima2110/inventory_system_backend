import { BaseModel } from "./base.model";

export class User extends BaseModel{
  static tableName: string = 'users';
  static idColumn: string = 'user_id';

  userId: number;
  firstName : string;
  lastName : string;
  username : string;
  password : string;
  email : string; 
  roleId : string;
  


}