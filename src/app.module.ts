import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FitroDeExcecaoHttp } from './core/filtro-de-excecao-http.filter';
import { TransformaRespostaInterceptor } from './core/http/transforma-resposta.interceptor';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `./env/${ENV}.env`, isGlobal: true }), //configuracao do arquivo de configuracoes

    SequelizeModule.forRoot({
      dialect: process.env.DB_CONNECTION as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [User],
      autoLoadModels: true,
      synchronize: true,
      sync: {
        alter: true,
        //  force: true
      },
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: FitroDeExcecaoHttp,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformaRespostaInterceptor,
    },
  ],
})
export class AppModule {}
