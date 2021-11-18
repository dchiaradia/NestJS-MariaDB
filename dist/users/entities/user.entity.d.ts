import { Model } from 'sequelize-typescript';
export declare class User extends Model {
    nome: string;
    dtNasc: Date;
    email: string;
    senha: string;
}
