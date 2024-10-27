import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/get')
  getSomething(): string {
    return this.appService.getSomething();
  }

  @Get('/get/another')
  getAnotherThing(): string {
    return this.appService.getAnotherThing();
  }
}
