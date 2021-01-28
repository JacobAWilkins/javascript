// ***For all the exercises, be sure to log the output of the function to the console.***

        /************************************************************************************/
        // Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

        //your code...
        function tekCamp() {
            for (var i = 1; i < 101; i++) {
                if (i % 15 == 0) {
                    console.log("TEKcamp");
                } else if (i % 3 == 0) {
                    console.log("TEK");
                } else if (i % 5 == 0) {
                    console.log("camp");
                } else {
                    console.log(i);
                }
            }
        }
        // tekCamp();



        /************************************************************************************/
        //Write a function that converts the current temperature from Fahrenheit to Celsius. 

        //your code...
        function farenheitCelsius(f) {
            return (f - 32) * 5 / 9;
        }




        /************************************************************************************/
        //Write a function that converts the Celsius temperature back to Fahrenheit. 

        //your code...
        function celsiusFarenheit(c) {
            return 1.8 * c + 32;
        }





        /************************************************************************************/
        // Write a function to determine if someone is old enough to vote.  The function should return a boolean of true or false.

        //your code...
        function canVote(age) {
            if (age > 17)
                return true;
            return false;
        }







        /************************************************************************************/
        // Write a function that converts a string to an array. It should return an array.  

        //your code...
        function strToArr(str) {
            return str.split("");
        }







        /************************************************************************************/
        // Write a function that reverses your telephone number.  It should return the reversed telephone number.

        //your code...
        function reversePhone(number) {
            return number.split("").reverse().join("");
        }





        /************************************************************************************/
        // Write a function that returns a car object using some given info about your car. Required inputs are the make, model, year, and color.

        //your code...
        function carObject(make, model, year, color) {
            return {make: make, model: model, year: year, color: color};
        }


        /************************************************************************************/
        // Write a function that accepts a list of numbers.  The function should identify each number as being even or odd.  The function should output a set of key value pairs, with the key being the number, and the value being the string "even" or "odd".

        //example : [10,23,3,4] => function() => {10 : 'even', 23 : 'odd', 3 : 'odd', 4 : 'even'}

        //your code...
        function oddOrEven(arr) {

        }



        /************************************************************************************/
        const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
        // Write a "for" loop that console.log()'s the first value in the  array, and every 3rd number, i.e. 0, 3, 6, 9: the zeroth, third, sixth, and ninth values.

        //your code...
        for (i = 0; i < numbers.length; i = i + 3) {
            console.log(numbers[i]);
        }


        /************************************************************************************/
        const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {program : 'TEKcamp'} ];
        //access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.


        const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
        // Using both the foodArray and the adjectiveArray, write "for" loop that console.log()'s a sentence for each corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  i.e. "Potatoes are salty", "Lemon is sour".


        /************************************************************* */
        // Refactor the for() loop to be a while loop.


        for(let i=0; i<10; i++) {
            // console.log(" the value of i in the loop is : " + i);
        }


        //your code...
        while(i < 10) {
            i++;
        }



        /************************************************************* */
        //Multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
        //use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.
        
        //your code...
        function multiply(a, b) { return a * b; }
        function divide(a, b) { return a / b; }
        function add(a, b) { return a + b; }
        function power(a, b) { return a ** b; }

        console.log(divide(multiply(add(30, 2), 20), power(10, 2)));


        /************************************************************* */
        //Determine whether the following values are "truthy" or "falsey".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation values : 

        // ex : 3 is truthy, because it is a number, and numbers are type coerced as 'true' when performing logical (boolean) operations.

        console.log("20 is truthy, because it is a number, and numbers are type coerced as 'true' when performing logical operations");
        console.log("0 is falsey, because it is 0, and 0 is always false in boolean logic");
        console.log("\"zero\" is truthy, because it is a nonempty string, and nonempty strings are type coerced as 'true' when performing logical operations");
        console.log("const zero = 20) is truthy, because it is a veriable with the value of 20, refer to the earlier explanation of why numbers are truthy");
        console.log("null is falsey, because null is type coerced as 'fakse' when performing logical operations");
        console.log("\"0\" is truthy, because it is a nonempty string, and nonempty strings are type coerced as 'true' when performing logical operations");
        console.log("!\"\" is truthy, because it is the opposite of an empty string, which is falsey");
        console.log("{} is truthy, because {} is type coerced as 'true' when performing logical operations");
        console.log("() => {console.log(\"hello TEKcamp!\"); is truthy, because functions are type coerced as 'true' when performing logical operations");
        console.log("125 is truthy, because numbers that aren't 0 or -0 are type coerced as 'true' when performing logical operations");
        console.log("undefined is falsey, because undefined is type coerced as 'false' when performing logical operations");
        console.log("\"\" is falsey, because it is an empty string, and empty strings are type coerced as 'false' when performing logical operations");

        /************************************************************* */
        // Refactor the following code using a switch statement:

        const day = "friday";

        switch(day) {
            case "monday":
                console.log("we got a long week ahead of us...");
                break;
            case "tuesday":
                console.log("tuesday's are still beterr than mondays, but LONG way to go still");
                break;
            case "wednesday":
                console.log("We are smack dab in the middle of the week");
                break;
            case "thursday":
                console.log("Thursday night... the mood is right");
                break;
            case "friday":
                console.log("TGIF.  Friday truly is the best day of the week!");
                break;
            default:
                console.log("It's a weekend!");
        }



        /************************************************************* */
        // Refactor the following statements to use ternary expressions:

        const age = 10;
        console.log(age > 21 ? "adult" : "minor");

        console.log(age > 13 && age < 19 ? "teen" : "not a teenager");

        console.log(age > 65 ? "retired" : "still working...");

        /************************************************************* */
        //Create an object literal representing yourself.  Set it equal to a variable that appropriately describes the object.  Include the following properties:
        /*
        -name
        -age
        -gender
        -healthy ? (yes or no)
        -hobbies
        -profession
        -education

        -add a method on your object, entitled 'learn'.  The learn method should print out the message : "[your name] is learning JavaScript".  The learn method should print the value of the name property using the 'this' keyword.

        -add another method on your object of any action you want to perform, using some property that exists on your object.  Make sure to reference any properties on your objedct using the 'this' keyword.
        */

        //your code...
        var myself = {
            name: "Jacob",
            age: "24",
            gender: "male",
            healthy: "yes",
            hobbies: "playing video games and collecting pokemon cards",
            profession: "software developer",
            education: "bachelor degree",
            learn: function() {
                return this.name + " is learning JavaScript";
            },
            enjoy: function() {
                return this.name + " enjoys " + this.hobbies;
            }
        };


        /************************************************************* */

        {
            const year = 2021;
            const nums = [1,2,3,4,5];
            let sum = 0;
            let i = 0;
            const doubled = [];

            //Refactor the following statements into expressions


            // 1.
            if(year > 2000 && year < 2100) {
                console.log("welcome to the 21st century");
            }
            
            // 2.
            for(let i=0; i<nums.length; i++) {
                sum += nums[i];
            }
            console.log(sum);
            
            
            // 3.
            while(i < nums.length) {
                doubled.push(nums[i]*2);
                i++;
            }
            
            console.log(doubled);
        }


        /************************************************************* */
        // Use array methods to solve the following problems.

        const nums = [1,2,3,4,5];
        // Square every number in the array.  Store the squares in a new array.

        //your code...
        var nums2 = [];
        nums.forEach((num, index) => {
            nums2[index] = num * num;
        });
        // console.log("testing... " + nums2);


        const fivePlus = [1,3,5,7,9,1,3,5,2,3,1,23,4,232,3,4,1,2,2,2,3,4,4,1,12,11,23,3,4,5];
        //Remove all numbers that are less than 5.  Store the results in a new array.

        //your code...
        var fivePlus2 = [];
        fivePlus.forEach((num2) => {
            if (num2 > 4) { fivePlus2.push(num2) }
        });
        // console.log("testing... " + fivePlus2);


        // Create an array of 20 randomly generated integers.  Calculate the sum of the elements in the array.

        //your code...
        var arr = Array.from({length: 20}, () => 
            Math.floor(Math.random() * 10));
        var sum = arr.reduce((a, b) => a + b, 0);
        //console.log("testing... " + arr);
        //console.log("testing... " + sum);


        const showNums = [12,22,33,44,55,66,77,88,99,101];
        //Print out the value of each number divided by 2.  There is no need to store the output in an array.
        showNums.forEach((num3) => {
            console.log(num3 / 2);
        });


        /************************************************************* */
        /* Chess pieces have point values associated with them.  

        Pawn = 1, Rook = 5, Bishop = 3, Knight = 3, Queen = 9, King = N/A 

        Write a function that calculates the total point value of any given input list of Chess pieces.  
        ex : ['king','queen','pawn','pawn','pawn','bishop'] => chessCalc() => 15

        If there are invalid chess pieces, discard those elements.
        ex : ['iPhone','queen','pawn'] => chessCalc() => 10
        ['android'] => chessCalc() => null

        */

        function chessCalc(pieces) {
            //your code here
            var tot = 0;
            pieces.forEach((piece) => {
                switch(piece) {
                    case 'pawn':
                        tot += 1;
                        break;
                    case 'rook':
                        tot += 5;
                        break;
                    case 'bishop':
                        tot += 3;
                        break;
                    case 'knight':
                        tot += 3;
                        break;
                    case 'queen':
                        tot += 9;
                        break;
                    case 'king':
                        tot += 0;
                        break;
                    default:
                        tot += 0;
                }
            });
            if (tot > 0) { return tot; }
            return null;
        }
        //console.log("testing... " + chessCalc(['king','queen','pawn','pawn','pawn','bishop']));
        //console.log("testing... " + chessCalc(['iPhone','queen','pawn']));
        //console.log("testing... " + chessCalc(['android']));


        /************************************************************* */

        const ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
        //reverse the array, without modifying / `mutating` the ones array.
        var onesNew = ones.slice().reverse();


        /************************************************************* */
        //create a function called performer(cb) that takes in a callback function and runs that callback function.  The function should return the output of the callback function.

        function performer(cb) {
            //code goes here
            return cb();
        }


        /************************************************************* */
        // For the given list of developers : 
        const devs = [
            {
                name: 'Cameron',
                age: 23,
                gender: 'm',
                "tech_stack" : ['html','css','js','React']
            },
            {
                name: 'Liz',
                age: 20,
                gender: 'f',
                "tech_stack" : ['java','spring-boot','MySql']
            },
            {
                name: 'Chris',
                age: 102,
                gender: 'm',
                "tech_stack" : ['react','express','python']
            },
            {
                name: 'Rashid',
                age: 27,
                gender: 'm',
                "tech_stack" : ['thymeleaf','postgres','js','Angular']
            },
            {
                name: 'Annie',
                age: 30,
                gender: 'F',
                "tech_stack" : ['html','scss','less','DynamoDB','GraphQL']
            },
            {
                name: 'Dr. Patel',
                age: 52,
                gender: 'M',
                "tech_stack" : null
            },
            {
                name: 'Isaiah',
                age: 48,
                gender: 'M',
                "tech_stack" : ['Java','','less','DynamoDB','GraphQL']
            },
            {
                name: 'Saima',
                age: 33,
                gender: 'F',
                "tech_stack" : ['MongoDB','Route53','Jenkins','Terraform','Kubernetes']
            },
            {
                name: 'Omar',
                age: 33,
                gender: 'm',
                "tech_stack" : ['c++']
            },
            {
                name: 'Mariam',
                age: 32,
                gender: 'f',
                "tech_stack" : null
            },
        ];

        /************************** */  
        // Find all devs older than 24

        //your code here...
        var olderThan24 = [];
        devs.forEach((dev) => {
            if (dev.age > 24) { olderThan24.push(dev); }
        });


        /************************** */  
        // Remove all people who are not developers (i.e. no tech stack)

        //your code here...
        var onlyDevelopers = [];
        devs.forEach((dev) => {
            if (dev.tech_stack != null) { onlyDevelopers.push(dev); }
        });


        /************************** */  
        // Calculate the total age of all the devs

        //your code here...
        var totalAge = 0;
        devs.forEach((dev) => {
            totalAge += dev.age;
        });
        // console.log("testing... " + totalAge);


        /************************** */  
        // Find all female devs

        //your code here...
        var onlyFemales = [];
        devs.forEach((dev) => {
            if (dev.gender.toLowerCase() == 'f') { onlyFemales.push(dev); }
        });


        /************************** */  
        // lowercase the genders of every dev

        //your code here...
        devs.forEach((dev) => {
            dev.gender = dev.gender.toLowerCase();
        });


        /************************** */  
        // Sort the developers by name

        //your code here
        var sortByName = devs.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
            if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
            return 0;
        });
        // sortByName.forEach((dev) => { console.log("testing... " + dev.name); });


        /************************** */  
        // Sort the devs by age in descending order

        //your code here
        var sortByAge = devs.sort((a, b) => {
            return a.age - b.age;
        });
        // sortByAge.forEach((dev) => { console.log("testing... " + dev.age); });


        /************************** */  
        // Sort the male coders by age

        //your code here
        var onlyMales = [];
        devs.forEach((dev) => {
            if (dev.gender.toLowerCase() == 'm') { onlyMales.push(dev); }
        });
        var sortMaleByAge = onlyMales.sort((a, b) => {
            return a.age - b.age;
        });
        // sortMaleByAge.forEach((dev) => { console.log("testing... " + dev.age); });


        /************************** */  
        // For the list of devs, print out sentences including the name and tech stack of each dev, leaving out other information.  Example output is provided below : 

        /*
        Liz specializes in Java, Spring Boot, and MySql.
        Chris specializes in React, Express, and Python.
        Dr. Patel is not a developer.
        */

        //your code here
        devs.forEach((dev) => {
            if (dev.tech_stack == null) {
                console.log(dev.name + " is not a developer.");
            } else {
                var specs = dev.tech_stack[0];
                for (i = 1; i < dev.tech_stack.length; i++) {
                    if (i == dev.tech_stack.length - 1) { specs += ", and "; }
                    else { specs += ", "; }
                    specs += dev.tech_stack[i];
                }
                console.log(dev.name + " specializes in " + specs + ".");
            }
        });


        /************************************************************* */
        // Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
        const numbersMixed = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:"val"},20000,19999,1878,140,23,4,true,true,"sk","true-dat","nice","one","two","three","3","tea",[]];

        var numbers2 = numbersMixed.filter((item) => {
            if (typeof item == 'number' || typeof item == 'string') {
                return item;
            }
        });
    numbers2.forEach((num4, index, obj) => {
            if (typeof num4 == 'string') {
                switch(num4) {
                    case 'zero' || '0':
                        numbers2[index] = 0;
                        break;
                    case 'one' || '1':
                        numbers2[index] = 1;
                        break;
                    case 'two' || '2':
                        numbers2[index] = 2;
                        break;
                    case 'three' || '3':
                        numbers2[index] = 3;
                        break;
                    case 'four' || '4':
                        numbers2[index] = 4;
                        break;
                    case 'five' || '5':
                        numbers2[index] = 5;
                        break;
                    case 'six' || '6':
                        numbers2[index] = 6;
                        break;
                    case 'seven' || '7':
                        numbers2[index] = 7;
                        break;
                    case 'eight' || '8':
                        numbers2[index] = 8;
                        break;
                    case 'nine' || '9':
                        numbers2[index] = 9;
                        break;
                    case 'ten' || '10':
                        numbers2[index] = 10;
                        break;
                    default:
                        numbers2.splice(index, 1);
                        break;
                }
            }
        });
        console.log("testing... " + numbers2);
        function maxNumber(numbers2) {
            //your code...
            
        }

        //After the numbers array has been cleaned up to only have numbers in it, Write a function that sorts the modified numbers array.  Allow the function to sort the array in descending order as well.

        function sortNums(numbers,desc=false) {
            //your code...
        };



        /************************************************************* */
        //Research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.


            //your code...



        /************************************************************* */
        //Add an example of the 5 primary JavaScript data types to the given mapObj.  The key is an example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

        const mapObj = new Map();
        mapObj.set({company : "TEKsystems"},"object");
        mapObj.set("This is a string","string");
        mapObj.set(128,"number");
        mapObj.set(true,"boolean");
        mapObj.set(["one", "two", "three"],"array");
        mapObj.set(null,"null");
        mapObj.set(undefined,"undefined");

        console.log(mapObj.has({company : "TEKsystems"}));

        //The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code `mapObj.set()`, so the code : `mapObj.has() returns true.  The goal is to successfully check and see if {company : "TEKsystems"} exists in the mapObj.

        //your code...


        //loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']


        /************************************************************* */
        //Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly selects one of the mathematical operations whenever it is invoked.  The doMath() function should print to the console the mathetmatical function that was carried out.  The doMath() function should return the computed value of any operation performed.

        // ex : 2,3 => doMath(2,3) => adding : 5
        const operations = [add, subtract, multiply, divide];
        function doMath(x,y) {
            var rand = Math.floor((Math.random() * 4) + 1);
            switch(rand) {
                case 1:
                    console.log("The add() function was carried out.");
                    break;
                case 2:
                    console.log("The subtract() function was carried out.");
                    break;
                case 3:
                    console.log("The multiply() function was carried out.");
                    break;
                case 4:
                    console.log("The divide() function was carried out.");
                    break;
            }
            return operations[rand - 1](x, y);
        };

        //your code...
        function subtract(a, b) { return a - b }
        // (Other operation were programmed in an earlier exercise)
        // console.log("testing... " + doMath(2, 3));


        /************************************************************* */
        //- Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that accepts another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

        //your code...


        //- Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

        //your code


        // Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

        //your code...



// DO NOT DELETE THIS EXPORT
module.exports = {
    tekCamp,
    canVote
}


//*************************************** */



