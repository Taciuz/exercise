// Test funzioni e FizzBuzz

function add7(number){
    return number + 7;
}

function multiply(firstNumber, secondNumber){
    return firstNumber*secondNumber;
}

function capitalize(string){
    return string[0].toUpperCase();
}

function lastLetter(stringExample){
    let strLength = stringExample.length;
    return stringExample[strLength-1];
}

// Scelgo un numero, sostituisco i multipli di 3 con "Fizz" e i multipli di 5 con "Buzz"
// Se multipli sia di 3 che di 5 sostituisco con "FizzBuzz"

function fizzBuzz(number){
    for (let i = 1; i <= number; i++){
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else{
            console.log(i);
        }    
    }
}