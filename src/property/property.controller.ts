import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

// this endpoit start at ip:port/property
@Controller('property')
export class PropertyController {
    
    @Get()
    findAll(){
        return "All Properties";
    }

    @Get(":id") 
    //ParseIntPipe transforma um valor para inteiro automaticamente
    findOne(@Param("id", ParseIntPipe) id, @Query("sort", ParseBoolPipe) sort){


        return id;
    }

    @Get(":id/:slug") 
    getObjectPassed(@Param() obje to){
        return objeto;
    }

    @Get("sum/:id/:slug") 
    findById(@Param('id') id: string, @Param('slug') slug: string){
        let sum = (Number.parseInt(id) + Number.parseInt(slug));
        return `id: ${id}, slug: ${slug}, sum: ${sum}`;
    }

    @Post("/name")
    @HttpCode(202) // Customiza o return code
    create(@Body("name") name: string){
        return name;
    }

    @Post()
    // Customiza o return code
    @HttpCode(202) 
    //whitelist ignora valores nao pertencentes
    //forbidNonWhitelisted nao aceita quando esta com campos nao pertencentes
    //@UsePipes(new ValidationPipe({whitelist: true, forbidNonWhitelisted:true})) // para todo o metodo
    //para validar dentro de cada body particularmente
    createDto(@Body(new ValidationPipe({whitelist: true, forbidNonWhitelisted:false, groups: ['create']})) body: CreatePropertyDto){
        return body;
    }


    @Patch(":id")
    update(@Body(new ValidationPipe({whitelist: true, forbidNonWhitelisted:false, groups: ['create']})) body:CreatePropertyDto){
        return body;
    }
    
}