import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  Inject,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { ParseIdPipe } from './pipes/parseIdPipes';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { createPropertySchema } from './dto/createPropertyZod.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-headers';
import { PropertyService } from './property.service';


// interface Service{
//   findAll();
//   findOne();
//   create();
//   update();
// }

// this endpoit start at ip:port/property
@Controller('property')
export class PropertyController {

  // propertyService: PropertyService;
  // // agora pode ser passado o tipo Interface, permitindo alterar sem ter q mudar esta parte do codigo
  // constructor(propertyService: Service){
  //   // Dont create your dependency, intead use Dependency Injection DI in NestJS
  //   // this.propertyService = new PropertyService();
    
  //   // Do not create it own depency, get dependency from outside
  //   this.propertyService = propertyService;
  // }
  
  // Nestjs automatiza isso
  constructor(private propertyService: PropertyService){}

  @Get()
  findAll() {
    return 'All Properties';
  }

  @Get(':id')
  //ParseIntPipe transforma um valor para inteiro automaticamente
  findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    return this.propertyService.findOne();
  }

  @Get(':id/:slug')
  getObjectPassed(@Param() objeto) {
    return this.propertyService.getObjectPassed();
  }

  @Get('sum/:id/:slug')
  findById(@Param('id') id: string, @Param('slug') slug: string) {
    const sum = Number.parseInt(id) + Number.parseInt(slug);
    return `id: ${id}, slug: ${slug}, sum: ${sum}`;
  }

  @Post('/name')
  @HttpCode(202) // Customiza o return code
  create(@Body('name') name: string) {
    return name;
  }

  // @Post()
  // // Customiza o return code
  // @HttpCode(202)
  // //whitelist ignora valores nao pertencentes
  // //forbidNonWhitelisted nao aceita quando esta com campos nao pertencentes
  // //@UsePipes(new ValidationPipe({whitelist: true, forbidNonWhitelisted:true})) // para todo o metodo
  // //para validar dentro de cada body particularmente
  // createDto(@Body(new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted:false,
  //     groups: ['create']})) body: CreatePropertyDto
  // ){
  //     return body;
  // }

  @UsePipes(new ZodValidationPipe(createPropertySchema))
  @Post(':id')
  @HttpCode(202)
  createDto(@Body() body: CreatePropertyDto) {
    return this.propertyService.create();
  }

  // @Patch(":id")
  // update(
  //     @Param() param: IdParamDto, //manualmente
  //     @Body() body:CreatePropertyDto
  // ){
  //     return body;
  // }

  // @Patch(":id")
  // update(
  //     @Param(){id}: IdParamDto, //manualmente
  //     @Body() body:CreatePropertyDto
  // ){
  //     return body;
  // }

  // // custom transform pipe
  // @Patch(':id')
  // update(
  //   @Param('id', ParseIdPipe) id, //manualmente
  //   @Body() body: CreatePropertyDto,
  //   @Headers('host') header: HeadersDto,
  // ) { 
  //   return header;
  // }
  @Patch(':id')
  update(
    @Param('id', ParseIdPipe) id,
    @Body() 
    body: CreatePropertyDto,
    @RequestHeader(HeadersDto) 
    header: HeadersDto,
  ) { 
    return this.propertyService.update();
  }

}
 