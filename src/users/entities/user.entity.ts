import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Model, Column, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'user' })
export class User extends Model {
  @Column({ type: DataType.STRING })
  @ApiProperty({
    description: 'Campo nome do usuário',
  })
  @IsString({ message: 'O Campo nome do usuário deve ser uma string.' })
  nome: string;

  @Column
  @ApiProperty({
    description: 'Data de Nascimento',
  })
  dtNasc: Date;

  @Column
  @ApiProperty({
    description: 'Email',
  })
  email: string;

  @Column
  @ApiProperty({
    description: 'Senha',
  })
  senha: string;
}
