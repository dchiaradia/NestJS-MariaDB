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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const sequelize_typescript_1 = require("sequelize-typescript");
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    (0, swagger_1.ApiProperty)({
        description: 'Campo nome do usuário',
    }),
    (0, class_validator_1.IsString)({ message: 'O Campo nome do usuário deve ser uma string.' }),
    __metadata("design:type", String)
], User.prototype, "nome", void 0);
__decorate([
    sequelize_typescript_1.Column,
    (0, swagger_1.ApiProperty)({
        description: 'Data de Nascimento',
    }),
    __metadata("design:type", Date)
], User.prototype, "dtNasc", void 0);
__decorate([
    sequelize_typescript_1.Column,
    (0, swagger_1.ApiProperty)({
        description: 'Email',
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    (0, swagger_1.ApiProperty)({
        description: 'Senha',
    }),
    __metadata("design:type", String)
], User.prototype, "senha", void 0);
User = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'user' })
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map