import { Body, Controller,Delete,Get,Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';

type CreateUserProps = {
    id: number;
    name: string;
    description: string;
    tags: string[];
}

@Controller('courses')
export class CoursesController {

    constructor(private readonly coursesService: CoursesService){}

    @Get('list')
    findAll(){
       return this.coursesService.findAll();
    }

    //Trabalhando com parametros courses/:id
    @Get(':id')
    findOne(@Param('id') id:string){
        return this.coursesService.findOne(id);
    }

    //Trabalhando com metodo Post
    @Post()
    createUser(@Body() body:any){
        return this.coursesService.create(body);
    }

    //Trabalhando com metodo Put
    @Patch(':id')
    update(@Param('id') id:string, @Body() body:CreateUserProps){
        return this.coursesService.update(id, body)
    }

    @Delete(':id')
    findDeleteAll(@Param('id') id:string){
       return this.coursesService.remove(id)
    }
}
