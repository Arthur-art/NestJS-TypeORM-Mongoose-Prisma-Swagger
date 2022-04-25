import { Body, Controller,Get, Param, Post } from '@nestjs/common';

type CreateUserProps = {
    name: string;
    description:string;
    price: number;
}

@Controller('courses')
export class CoursesController {
    @Get('list')
    findAll(){
        return 'Listagem de cursos';
    }

    //Trabalhando com parametros courses/:id
    @Get(':id')
    findOne(@Param('id') id:string){
        return `Curso #${id} - Trabalhando com parametros no nestjs`;
    }

    //Trabalhando com metodo Post
    @Post()
    createUser(@Body() body:CreateUserProps){
        return body.description;
    }
}
