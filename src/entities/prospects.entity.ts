import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {IsNotEmpty} from 'class-validator';

@Entity('prospects')
@Unique(['rfc'])
export class ProspectEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    nombre: string;

    @Column()
    @IsNotEmpty()
    apellidop: string;

    @Column()
    apellidom: string;

    @Column()
    @IsNotEmpty()
    calle: string;

    @Column()
    @IsNotEmpty()
    numero: string;

    @Column()
    @IsNotEmpty()
    colonia: string;

    @Column()
    @IsNotEmpty()
    cp: string;

    @Column()
    @IsNotEmpty()
    telefono: string;

    @Column()
    @IsNotEmpty()
    rfc: string;

    @Column()
    documento: string;

    @Column()
    @IsNotEmpty()
    estatus: string;

    @Column()
    observacion: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}