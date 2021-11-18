import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MyResponse } from 'src/core/myResponse';
export declare class UsersController {
    private readonly usersService;
    private response;
    constructor(usersService: UsersService, response: MyResponse);
    create(createUserDto: CreateUserDto): Promise<import("../core/http/nest-response").NestResponse>;
    findAll(): Promise<import("src/core/myResponse").MyResponseEntity>;
    findOne(id: string): Promise<import("src/core/myResponse").MyResponseEntity>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("src/core/myResponse").MyResponseEntity>;
    remove(id: string): Promise<import("src/core/myResponse").MyResponseEntity>;
    query(query: string): Promise<import("../core/http/nest-response").NestResponse>;
}
