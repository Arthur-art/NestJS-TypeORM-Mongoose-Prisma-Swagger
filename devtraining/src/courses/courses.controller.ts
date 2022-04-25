import { Body, Controller,Delete,Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';

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

    //Trabalhando com metodo Put
    @Patch(':id')
    update(@Param('id') id:string, @Body() body:CreateUserProps){
        return {
           curso: `Atualização do Curso #${id} - Trabalhando com parametros no nestjs`,
            object: body
        };
    }

    @Delete(':id')
    findDeleteAll(@Param('id') id:string){
       return `Exclusao do curso #${id}`
    }
}
