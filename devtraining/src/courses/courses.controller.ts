import { Body, Controller,Delete,Get,Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
@Controller('courses')
export class CoursesController {

    constructor(private readonly coursesService: CoursesService){}

    @Get('list')
    findAll(){
       return this.coursesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.coursesService.findOne(id);
    }

    @Post()
    create(@Body() createCourseDto:CreateCourseDto){
        return this.coursesService.create(createCourseDto);
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body:UpdateCourseDto){
        return this.coursesService.update(id, body)
    }

    @Delete(':id')
    findDeleteAll(@Param('id') id:string){
       return this.coursesService.remove(id)
    }
}
