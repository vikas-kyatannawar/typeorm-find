import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {User} from "./User";

@Entity()
export class Photo {
    
    @PrimaryGeneratedColumn({name: 'photo_id'})
    public id: number;
    
    @Column()
    public name: string;
    
    @ManyToOne(type => User, user => user.photos)
    @JoinColumn({name: 'user_id'})
    public user: User; 
}