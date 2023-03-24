import { Injectable } from '@nestjs/common';

@Injectable()
export class CalcService {
  addNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  }

  divideNumbers(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
  }

  multiplyNumbers(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
  }

  subtractNumbers(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
  }
}
