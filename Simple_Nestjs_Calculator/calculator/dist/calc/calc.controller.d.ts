import { CalcService } from './calc.service';
export declare class CalcController {
    private calcService;
    constructor(calcService: CalcService);
    addNumbers(numbers: {
        first: number;
        second: number;
    }): {
        sum: any;
    };
    subtractNumbers(numbers: {
        first: number;
        second: number;
    }): {
        sum: number;
    };
    multiplyNumbers(numbers: {
        first: number;
        second: number;
    }): {
        sum: number;
    };
    divideNumbers(numbers: {
        first: number;
        second: number;
    }): {
        sum: number;
    };
}
