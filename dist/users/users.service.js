"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const myResponse_1 = require("../core/myResponse");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(createUserDto) {
        let response;
        try {
            const data = await this.userModel.create(createUserDto);
            response = {
                status: 'OK',
                httpCode: 201,
                description: 'CREATED USER SUCCESS',
                data: data,
            };
        }
        catch (e) {
            response = {
                status: 'FAILED',
                httpCode: 500,
                description: e,
                data: e,
            };
        }
        return response;
    }
    async findAll() {
        let response;
        try {
            const data = await this.userModel.findAll();
            response = {
                status: 'OK',
                httpCode: 200,
                description: 'FIND ALL SUCCESS',
                data: data,
            };
        }
        catch (e) {
            response = {
                status: 'FAILED',
                httpCode: 500,
                description: e,
                data: e,
            };
        }
        return response;
    }
    async findOne(id) {
        let response;
        try {
            const data = await this.userModel.findByPk(id);
            response = {
                status: 'OK',
                httpCode: 200,
                description: 'FIND ONE SUCCESS',
                data: data,
            };
        }
        catch (e) {
            response = {
                status: 'FAILED',
                httpCode: 500,
                description: e,
                data: e,
            };
        }
        return response;
    }
    async update(id, updateUserDto) {
        let response;
        try {
            const data = await this.userModel.update(updateUserDto, {
                where: { id: id },
            });
            response = {
                status: 'OK',
                httpCode: 200,
                description: 'USER UPDATE SUCCESS',
                data: { registerCount: data, data: updateUserDto },
            };
        }
        catch (e) {
            response = {
                status: 'FAILED',
                httpCode: 500,
                description: e,
                data: e,
            };
        }
        return response;
    }
    async remove(id) {
        let response;
        try {
            const data = await this.userModel.destroy({ where: { id: id } });
            response = {
                status: 'OK',
                httpCode: 200,
                description: 'REMOVE USER SUCCESS',
                data: { registerCount: data },
            };
        }
        catch (e) {
            response = {
                status: 'FAILED',
                httpCode: 500,
                description: e,
                data: e,
            };
        }
        return response;
    }
    async query(query) {
        let response;
        try {
            const data = await this.userModel.sequelize.query(query);
            response = {
                status: 'OK',
                httpCode: 200,
                description: 'QUERY EXECUTED',
                data: data,
            };
        }
        catch (e) {
            response = {
                status: 'FAILED',
                httpCode: 500,
                description: e,
                data: e,
            };
        }
        return response;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_entity_1.User)),
    __metadata("design:paramtypes", [Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map