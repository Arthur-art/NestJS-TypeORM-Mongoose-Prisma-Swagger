import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {

    constructor(
        @InjectRepository(Course)
        private readonly courseRepositoy: Repository<Course>
        ){}

    /*Estrutura de dados em memória
    private courses: Course[] = [
        {
            id: 1,
            name: "Fundamentos do Framework NestJS",
            description: "Trabalhando com NestJS",
            tags: ["node.js", "nestjs", "javascript"]
        }
    ];
    */

    findAll(){
        return this.courseRepositoy.find();
    }

    findOne(id:string){

        const course = this.courseRepositoy.findOne(id)

        if(!course){
            throw new NotFoundException(`Course ID ${id} not found`)
        }else{
            return course;
        }
    }

    create(createCourseDto: CreateCourseDto){
        const course = this.courseRepositoy.create(createCourseDto)
        return this.courseRepositoy.save(course);
    }

  async update(id:string,updateCourseDto: UpdateCourseDto){
       const course = await this.courseRepositoy.preload({
           id: +id,
           ...updateCourseDto
       })

       if(!course){
           throw new NotFoundException(`Course ID ${id} not found`)
       }

       return this.courseRepositoy.save(course)
    }

   async remove(id:string){
        const course = await this.courseRepositoy.findOne(id)

        if(!course){
            throw new NotFoundException(`Course ID ${id} not found`)
        }
 
        return this.courseRepositoy.remove(course)

    }
}
