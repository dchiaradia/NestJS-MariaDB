import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Column } from 'sequelize-typescript';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {}
