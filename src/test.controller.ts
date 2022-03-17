import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('/api')
export class TestController {
  constructor(private testService: TestService) {}

  @Get('/get')
  getData() {
    return this.testService.getData();
  }
}
