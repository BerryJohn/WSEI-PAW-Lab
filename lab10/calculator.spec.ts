import { Calculator } from "./calculator";

describe('Calc', () => {
    let calc: Calculator;

    beforeEach(() => {
        calc = new Calculator();
    });

    it('should return correct sum of two number', () => {
        expect(calc).toBeInstanceOf(Calculator);
        expect(calc.Add(2,2)).toEqual(4);

    });

    it('should return correct divide of two number', () => {
        expect(calc).toBeInstanceOf(Calculator);
        expect(calc.Divide(10,5)).toEqual(2);
    });

    it('should return correct multipky of two number', () => {
        expect(calc).toBeInstanceOf(Calculator);
        expect(calc.Multiply(69,2)).toEqual(138);
    });

    it('should return correct substract of two number', () => {
        expect(calc).toBeInstanceOf(Calculator);
        expect(calc.Substract(10,4)).toEqual(6);
    });

});