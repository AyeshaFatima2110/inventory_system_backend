import { Model, ModelOptions, QueryContext, snakeCaseMappers } from "objection";
import { DBErrors } from "objection-db-errors";
import {v4 as uuidv4} from 'uuid';


export class BaseModel extends DBErrors(Model){
  static get columnNameMappers(){
    return snakeCaseMappers();
  }

  
  $beforeInsert(queryContext: QueryContext): Promise<any> | void {
    const now = new Date().toISOString()
    this.uuid = uuidv4();
    this.createdAt = now;
    this.updatedAt = now;
    }

  $beforeUpdate(opt: ModelOptions, queryContext: QueryContext): Promise<any> | void {
      this.updatedAt = new Date().toISOString();
  }

  uuid! : string;
  createdAt: string;
  updatedAt: string;
}