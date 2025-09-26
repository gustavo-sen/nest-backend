import { Controller, Get} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // se nao tem nada dentro é root
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('mesma-merda') // se nao tem nada dentro é root
  getLixo(): string {
    return this.appService.getLixo();
  }
}
