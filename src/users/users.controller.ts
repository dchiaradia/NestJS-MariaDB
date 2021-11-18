import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MyResponse } from 'src/core/myResponse';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private response: MyResponse,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const data = await this.usersService.create(createUserDto);
    return this.response.http(data);
  }

  @Get()
  async findAll() {
    const data = await this.usersService.findAll();
    return this.response.http(data);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.usersService.findOne(+id);
    return this.response.http(data);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const data = await this.usersService.update(+id, updateUserDto);
    return this.response.http(data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await  this.usersService.remove(+id);
    return this.response.http(data);
  }

  @Post('query')
  async query(@Body() query: string) {
    const data = await this.usersService.query(query);
    return this.response.http(data);
  }
}
