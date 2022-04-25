import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {

    //Estrutura de dados em memória
    private courses: Course[] = [
        {
            id: 1,
            name: "Fundamentos do Framework NestJS",
            description: "Trabalhando com NestJS",
            tags: ["node.js", "nestjs", "javascript"]
        }
    ];

    findAll(){
        return this.courses;
    }

    findOne(id:string){
        return this.courses.find((value)=>{
            return value.id === Number(id);
        })
    }

    create(createCourseDto:Course){
        return this.courses.push(createCourseDto);
    }

    update(id:string,updateCourseDto:Course){
        const indexCourse = this.courses.findIndex((value)=>{
            return value.id === Number(id);
        })

        return this.courses[indexCourse] = updateCourseDto;
    }

    remove(id:string){
        const indexCourse = this.courses.findIndex((value)=>{
            return value.id === Number(id);
        })

        if(indexCourse >= 0){
            this.courses.splice(indexCourse, 1);
        }
    }
}
