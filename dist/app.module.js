"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const sequelize_1 = require("@nestjs/sequelize");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const filtro_de_excecao_http_filter_1 = require("./core/filtro-de-excecao-http.filter");
const transforma_resposta_interceptor_1 = require("./core/http/transforma-resposta.interceptor");
const user_entity_1 = require("./users/entities/user.entity");
const users_module_1 = require("./users/users.module");
const ENV = process.env.NODE_ENV;
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: `./env/${ENV}.env`, isGlobal: true }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: process.env.DB_CONNECTION,
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                models: [user_entity_1.User],
                autoLoadModels: true,
                synchronize: true,
                sync: {
                    alter: true,
                },
            }),
            users_module_1.UsersModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_FILTER,
                useClass: filtro_de_excecao_http_filter_1.FitroDeExcecaoHttp,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: transforma_resposta_interceptor_1.TransformaRespostaInterceptor,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map