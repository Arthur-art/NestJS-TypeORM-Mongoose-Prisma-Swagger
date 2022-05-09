import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { TagEntity } from './entities/tag.entity';

@Injectable()
export class CoursesService {

    constructor(
        @InjectRepository(Course)
        private readonly courseRepositoy: Repository<Course>,
        @InjectRepository(TagEntity)
        private readonly tagEntityRepository: Repository<TagEntity>
        ){}

    findAll(){
        return this.courseRepositoy.find({
            relations: ['tags']
        });
    }

    findOne(id:string){

        const course = this.courseRepositoy.findOne(id,{
            relations: ['tags']
        })

        if(!course){
            throw new NotFoundException(`Course ID ${id} not found`)
        }else{
            return course;
        }
    }

  async create(createCourseDto: CreateCourseDto){

        const tags = await Promise.all(
            createCourseDto.tags.map((name)=> this.preloadTagByName(name))
        );

        const course = this.courseRepositoy.create({
            ...createCourseDto,
            tags,
        });
        return this.courseRepositoy.save(course);
    }

  async update(id:string,updateCourseDto: UpdateCourseDto){

        const tags = updateCourseDto.tags && (
            await Promise.all(updateCourseDto.tags.map((name)=> this.preloadTagByName(name)))
        );

       const course = await this.courseRepositoy.preload({
         id: +id,
         ...updateCourseDto,
         tags
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

    private async preloadTagByName(name:string): Promise<TagEntity>{
        const tag = await this.tagEntityRepository.findOne({name});

        if(tag){
            return tag;
        }

        return this.tagEntityRepository.create({name});
    }
}
