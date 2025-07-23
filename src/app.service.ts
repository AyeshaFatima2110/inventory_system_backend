import { Injectable, OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { Model } from 'objection';

@Injectable()
export class AppService implements OnApplicationBootstrap , OnApplicationShutdown{

  constructor(
    @InjectConnection() private readonly knex : Knex
  ){}

  async onApplicationShutdown() {
    Model.knex(this.knex);
    
  }
  async onApplicationBootstrap() {
    await this.knex.destroy();
  }
  getHello(): string {
    return 'Hello World!';
  }
}
