import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { TagEntity } from "./tag.entity";

@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @JoinTable()
    @ManyToMany(() => TagEntity, (course) => course.courses,{
        cascade: true
    })
    tags: TagEntity[];
}