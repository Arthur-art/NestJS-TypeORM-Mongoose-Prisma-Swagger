import { Body, Controller,Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

type CreateUserProps = {
    name: string;
    description:string;
    price: number;
}

@Controller('courses')
export class CoursesController {
    @Get('list')
    findAll(@Res() response){
       return response.status(200).send('Listagem de cursos');
    }

    //Trabalhando com parametros courses/:id
    @Get(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    findOne(@Param('id') id:string){
        return `Curso #${id} - Trabalhando com parametros no nestjs`;
    }

    //Trabalhando com metodo Post
    @Post()
    @HttpCode(HttpStatus.ACCEPTED)
    createUser(@Body() body:CreateUserProps){
        return body.description;
    }
}
