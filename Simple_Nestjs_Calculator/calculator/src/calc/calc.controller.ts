import { Controller, Req, Post, Body } from '@nestjs/common';
import { CalcService } from './calc.service';

@Controller('api')
export class CalcController {
  constructor(private calcService: CalcService) {}

  @Post('add')
  addNumbers(@Body() numbers: { first: number; second: number }) {
    const result = this.calcService.addNumbers(numbers.first, numbers.second);
    return { sum: result };
  }

  @Post('subtract')
  subtractNumbers(@Body() numbers: { first: number; second: number }) {
    const result = this.calcService.subtractNumbers(
      numbers.first,
      numbers.second,
    );
    return { sum: result };
  }

  @Post('multiply')
  multiplyNumbers(@Body() numbers: { first: number; second: number }) {
    const result = this.calcService.multiplyNumbers(
      numbers.first,
      numbers.second,
    );
    return { sum: result };
  }

  @Post('divide')
  divideNumbers(@Body() numbers: { first: number; second: number }) {
    const result = this.calcService.divideNumbers(
      numbers.first,
      numbers.second,
    );
    return { sum: result };
  }
}
