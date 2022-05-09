import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./course.entity";

@Entity('tags')
export class TagEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @ManyToMany(()=> Course, (course)=> course.tags)
    courses: Course[]
}
