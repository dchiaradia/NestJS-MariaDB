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
exports.MyResponse = exports.MyResponseEntity = void 0;
const nest_response_builder_1 = require("./http/nest-response-builder");
const class_validator_1 = require("class-validator");
class MyResponseEntity {
    constructor(status = 'OK', httpCode = 200, description = '', headers, data) {
        this.status = status;
        this.httpCode = httpCode;
        this.description = description;
        this.headers = headers;
        this.data = data;
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MyResponseEntity.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MyResponseEntity.prototype, "httpCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MyResponseEntity.prototype, "description", void 0);
exports.MyResponseEntity = MyResponseEntity;
class MyResponse {
    http(response) {
        const result = {
            status: response.status == undefined ? 'OK' : response.status,
            description: response.description == undefined ? '' : response.description,
            data: response.data == undefined ? {} : response.data,
        };
        return new nest_response_builder_1.NestResponseBuilder()
            .status(response.httpCode == undefined ? 200 : response.httpCode)
            .headers(response.headers == undefined ? {} : response.headers)
            .body(result)
            .build();
    }
}
exports.MyResponse = MyResponse;
//# sourceMappingURL=myResponse.js.map