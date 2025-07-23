
import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || '127.0.0.1', 
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
      extension : 'sql'
    }
    
    
  },

  
};

module.exports = config;

