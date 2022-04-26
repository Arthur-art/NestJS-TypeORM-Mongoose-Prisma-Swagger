import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

        const course = this.courses.find((value)=>{
            return value.id === Number(id);
        })
        if(!course){
            throw new HttpException(`Course ID ${id} not found`, HttpStatus.NOT_FOUND)
        }else{
            return course;
        }
    }

    create(createCourseDto:any){
        this.courses.push(createCourseDto);
        return createCourseDto;
    }

    update(id:string,updateCourseDto:any){
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
            return this.findAll()
        }else{
            throw new HttpException(`Course ID ${id} not found`, HttpStatus.NOT_FOUND)
        }
    }
}
