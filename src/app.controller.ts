import { Controller, Get} from '@nestjs/common';
import { AppService } from './app.service';

@Controller("list")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // se nao tem nada dentro é root
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('all')
  getList(): Array<string> {
    return this.appService.getList();
  }
}
