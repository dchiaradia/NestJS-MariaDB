import { MyResponseEntity } from 'src/core/myResponse';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private userModel;
    constructor(userModel: typeof User);
    create(createUserDto: CreateUserDto): Promise<MyResponseEntity>;
    findAll(): Promise<MyResponseEntity>;
    findOne(id: number): Promise<MyResponseEntity>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<MyResponseEntity>;
    remove(id: number): Promise<MyResponseEntity>;
    query(query: string): Promise<MyResponseEntity>;
}
