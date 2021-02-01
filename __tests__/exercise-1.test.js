const exerciseOne = require('../exercise-1');

test("test", () => {
    expect(true).toBe(true);
} );

// Add testing code for all the remaining functions you wrote in the exercise-1.js file

describe("tekCamp()", () => {

    test("existence of tekcamp()", () => {
        expect(exerciseOne.tekCamp()).toBe(undefined);        
    });

    test("tekCamp() console.logs with TEK at least once", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        // expect(console.log).toBeCalledTimes(10);
        expect(console.log).toHaveBeenCalledWith("TEK");
    });

    test("tekCamp() last console.log() is camp", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenLastCalledWith("camp");
    })

    test("tekCamp() on 3, console.log() TEK", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenNthCalledWith(3,"TEK");
    });

    test("tekCamp() on 4 console.logs 4", () => {
        console.log= jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenNthCalledWith(4,4);
    });

    test("tekCamp() on 1 console.logs 1 ", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenNthCalledWith(1,1);
    });

    test.skip("tekCamp() on 2 console.logs 2", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenNthCalledWith(2,"2");
    });

    test("tekCamp() on 15 console.logs 'TEKcamp' ", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenNthCalledWith(15,"TEKcamp");
    });

});


describe("canVote()", () => {

    test("canVote() returns false", () => {
        expect(exerciseOne.canVote(17)).toBe(false);
    });

    test("canVote(age = 21) returns true", () => {
        expect(exerciseOne.canVote(21)).toBe(true);
    });

    test("canVote() without an age argument returns false", () => {
        expect(exerciseOne.canVote()).toBe(false);
    });


});


// YOUR CODE HERE.  follow the template below to flush out your tests.

describe("farenheitCelsius()", () => {

    test("farenheitCelsius(50) returns 10", () => {
        expect(exerciseOne.farenheitCelsius(50)).toBe(10);
    });

    test("farenheitCelsius(-40) returns -40", () => {
        expect(exerciseOne.farenheitCelsius(-40)).toBe(-40);
    });

});

describe("celsiusFarenheit()", () => {

    test("celsiusFarenheit(10) returns 50", () => {
        expect(exerciseOne.celsiusFarenheit(10)).toBe(50);
    });

    test("celsiusFarenheit(-10) returns 14", () => {
        expect(exerciseOne.celsiusFarenheit(-10)).toBe(14);
    });

});

describe("strToArr()", () => {

    test("strToArr('Testing')", () => {
        expect(exerciseOne.strToArr('Testing')).toStrictEqual(['T', 'e', 's', 't', 'i', 'n', 'g']);
    });

    test("strToArr() returns an empty array", () => {
        expect(exerciseOne.strToArr('')).toStrictEqual([]);
    });

});

describe("reversePhone()", () => {

    test("reversePhone('8177848827') return '7288487718'", () => {
        expect(exerciseOne.reversePhone('8177848827')).toBe('7288487718');
    });

});

describe("carObject()", () => {

    test("carObject() returns ", () => {
        expect(exerciseOne.carObject('Ford', 'Escape', '2011', 'White')).toStrictEqual({ make: 'Ford', model: 'Escape', year: '2011', color: 'White'});
    });

});

describe("multiply()", () => {

    test("multiply(2, 5) returns 10", () => {
        expect(exerciseOne.multiply(2, 5)).toBe(10);
    });

});

describe("divide()", () => {

    test("divide(10, 2) returns 5", () => {
        expect(exerciseOne.divide(10, 2)).toBe(5);
    });

});

describe("add()", () => {

    test("add(2, 5) returns 7", () => {
        expect(exerciseOne.add(2, 5)).toBe(7);
    });

});

describe("subtract()", () => {

    test("subtract(5, 2) returns 3", () => {
        expect(exerciseOne.subtract(5, 2)).toBe(3);
    });

});

describe("power()", () => {

    test("power(5, 2) returns 25", () => {
        expect(exerciseOne.power(5, 2)).toBe(25);
    });

});

describe("oddOrEven()", () => {

    test("oddOrEven([10,23,3,4]) returns {10 : 'even', 23 : 'odd', 3 : 'odd', 4 : 'even'}", () => {
        expect(exerciseOne.oddOrEven([10,23,3,4])).toStrictEqual({10 : 'even', 23 : 'odd', 3 : 'odd', 4 : 'even'});
    });

});

describe("chessCalc()", () => {

    test("chessCalc(['iPhone','queen','pawn']) returns 10", () => {
        expect(exerciseOne.chessCalc(['iPhone','queen','pawn'])).toBe(10);
    });

    test("chessCalc(['android']) returns null", () => {
        expect(exerciseOne.chessCalc(['android'])).toBe(null);
    });

});

describe("cleanArr()", () => {
    
    test("cleanArr(numbersMixed) returns numbers2", () => {
        const numbersMixed = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:"val"},20000,19999,1878,140,23,4,true,true,"sk","true-dat","nice","one","two","three","3","tea",[]];
        const numbers2 = [2,23,1,2,1,1,1,2,2.5,20,200,2000,20000,19999,1878,140,23,4,1,2,3,3];
        expect(exerciseOne.cleanArr(numbersMixed)).toEqual(numbers2);
    });

});

describe("maxNumber()", () => {
    
    test("maxNumber(numbersMixed) returns 20000", () => {
        const numbersMixed = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:"val"},20000,19999,1878,140,23,4,true,true,"sk","true-dat","nice","one","two","three","3","tea",[]];
        expect(exerciseOne.maxNumber(numbersMixed)).toBe(20000);
    });

});

describe("sortNums()", () => {

    test("sortNums(numbersMixed) returns [1,1,1,1,1,2,2,2,2,2,3,3,4,20,23,23,140,200,1878,2000,19999,20000]", () => {
        const numbersMixed = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:"val"},20000,19999,1878,140,23,4,true,true,"sk","true-dat","nice","one","two","three","3","tea",[]];
        expect(exerciseOne.sortNums(numbersMixed)).toStrictEqual([1,1,1,1,1,2,2,2,2,2,3,3,4,20,23,23,140,200,1878,2000,19999,20000]);
    });

    test("sortNums(numbersMixed) returns [1,1,1,1,1,2,2,2,2,2,3,3,4,20,23,23,140,200,1878,2000,19999,20000]", () => {
        const numbersMixed = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:"val"},20000,19999,1878,140,23,4,true,true,"sk","true-dat","nice","one","two","three","3","tea",[]];
        expect(exerciseOne.sortNums(numbersMixed, true)).toStrictEqual([20000,19999,2000,1878,200,140,23,23,20,4,3,3,2,2,2,2,2,1,1,1,1,1]);
    });

});

describe("multiple()", () => {

    test("multiple(4)(2) returns 8", () => {
        expect(exerciseOne.multiple(4)(2)).toBe(8);
    });

});

