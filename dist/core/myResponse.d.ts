export declare class MyResponseEntity {
    status: string;
    httpCode: number;
    description: string;
    headers?: any;
    data?: any;
    constructor(status?: string, httpCode?: number, description?: string, headers?: any, data?: any);
}
export declare class MyResponse {
    http(response: MyResponseEntity): import("./http/nest-response").NestResponse;
}
