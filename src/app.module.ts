import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexModule } from 'nest-knexjs';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/prodcut.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true }),
    KnexModule.forRootAsync({
      useFactory: () => ({
        config: {
          client: 'pg',
          // debug: true,
          useNullAsDefault: true,
          connection: {
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT || '5433', 10),
            user: process.env.USERNAME,
            password: process.env.PASSWORD,
            database: process.env.DB_NAME,
            statement_timeout: 120000, // 2 minutes
            idle_in_transaction_session_timeout: 120000, // 2 minutes
          },
          pool: {
            min: 2,
            max: 10,
            idleTimeoutMillis: 30000,
            acquireTimeoutMillis: 30000,
            reapIntervalMillis: 1000,
            createRetryIntervalMillis: 200,
          },
          acquireConnectionTimeout: 10000,
          debug: process.env.DEBUG === 'true',
        },
      }),
    }),

    JwtModule,
    UserModule,
    ProductModule,
    AuthenticationModule


  ],
  controllers: [AppController],
  providers: [ AppService]
  
})
export class AppModule { }
