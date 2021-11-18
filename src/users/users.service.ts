import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import sequelize from 'sequelize';
import { MyResponseEntity } from 'src/core/myResponse';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async create(createUserDto: CreateUserDto): Promise<MyResponseEntity> {
    let response: MyResponseEntity;

    try {
      const data = await this.userModel.create(createUserDto);
      response = {
        status: 'OK',
        httpCode: 201,
        description: 'CREATED USER SUCCESS',
        data: data,
      };
    } catch (e) {
      response = {
        status: 'FAILED',
        httpCode: 500,
        description: e,
        data: e,
      };
    }

    return response;
  }

  async findAll(): Promise<MyResponseEntity> {
    let response: MyResponseEntity;
    try {
      const data = await this.userModel.findAll();
      response = {
        status: 'OK',
        httpCode: 200,
        description: 'FIND ALL SUCCESS',
        data: data,
      };
    } catch (e) {
      response = {
        status: 'FAILED',
        httpCode: 500,
        description: e,
        data: e,
      };
    }
    return response;
  }

  async findOne(id: number): Promise<MyResponseEntity> {
    let response: MyResponseEntity;
    try {
      const data = await this.userModel.findByPk(id);
      response = {
        status: 'OK',
        httpCode: 200,
        description: 'FIND ONE SUCCESS',
        data: data,
      };
    } catch (e) {
      response = {
        status: 'FAILED',
        httpCode: 500,
        description: e,
        data: e,
      };
    }
    return response;
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<MyResponseEntity> {
    let response: MyResponseEntity;
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
    } catch (e) {
      response = {
        status: 'FAILED',
        httpCode: 500,
        description: e,
        data: e,
      };
    }
    return response;
  }

  async remove(id: number): Promise<MyResponseEntity> {
    let response: MyResponseEntity;
    try {
      const data = await this.userModel.destroy({ where: { id: id } });
      response = {
        status: 'OK',
        httpCode: 200,
        description: 'REMOVE USER SUCCESS',
        data: { registerCount: data },
      };
    } catch (e) {
      response = {
        status: 'FAILED',
        httpCode: 500,
        description: e,
        data: e,
      };
    }
    return response;
  }

  async query(query: string): Promise<MyResponseEntity> {
    let response: MyResponseEntity;
    try {
      const data = await this.userModel.sequelize.query(query);
      response = {
        status: 'OK',
        httpCode: 200,
        description: 'QUERY EXECUTED',
        data: data,
      };
    } catch (e) {
      response = {
        status: 'FAILED',
        httpCode: 500,
        description: e,
        data: e,
      };
    }
    return response;
  }
}
