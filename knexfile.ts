
import type { Knex } from 'knex';
import * as dotenv from 'dotenv';
dotenv.config();

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST, 
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DB_NAME,
      port : parseInt(process.env.DB_PORT)
    },
    migrations: {
      directory: './migrations',
      tableName : 'knex_migrations',
      extension: 'ts',
    },
    seeds: {
      directory: './seeds',
      timestampFilenamePrefix : true,
      extension : 'ts'
    },
    pool: {
     min : 2,
     max : 10
    },
    acquireConnectionTimeout : 10000
    
  },

  
};

module.exports = config;

