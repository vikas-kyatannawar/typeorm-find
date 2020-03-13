import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Photo} from "./Photo";

@Entity()
export class User {

    @PrimaryGeneratedColumn({name: 'user_id'})
    public id: number;

    @OneToMany(type => Photo, photo => photo.user, {cascade: true})
    public photos: Photo[];

}