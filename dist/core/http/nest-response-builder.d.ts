import { NestResponse } from './nest-response';
export declare class NestResponseBuilder {
    private resposta;
    status(status: number): this;
    headers(headers: any): this;
    body(body: any): this;
    build(): NestResponse;
}
