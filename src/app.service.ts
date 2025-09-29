import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! nao há nada para ver aqui';
  }

  getList(): Array<string> {
    const users = ["paula", "tejano"]
    return users;
  }
}
