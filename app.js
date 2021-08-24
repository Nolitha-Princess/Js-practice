//FUNCTIONS

//1
function yours(word){
    let mine = "Happy" + " birthday" + " " +word + " Princess:)";
    console.log(mine);
}
yours("my");

//2
function multiplyFive(num) {
return num * 5
}

console.log(multiplyFive(6))
console.log(multiplyFive(7))
console.log(multiplyFive(8))

let test = prompt()



// Example of call back functions

//1
function useCallback(callback){
    callback(1);
    callback(2);
    callback(3);
}

function callback(sentence){
    console.log(sentence);
}

useCallback(callback)

// one parameter function

function example(name){
    console.log("I am " + name + "!")
}

example("Nolitha!")


// Arrow functions

const greet = (surname) => {return "hello " + surname + "!"}

document.write(greet("Magagula")

/* Define an arrow function divideByTwo which accepts a number and returns 
that number divided by 2 */

const divide = (num) => {return num / 2};

document.write(divideByTwo(8));


//LOOPS

//1
const names = ["tree", "ground", "ground", "rock", "people"]

for(word of names) {
    console.log(word);
    if (word === "ground") {
        console.log("The list will stop");
        break;
    }

    }

//2    
    let loopCount = 0;
    const wordArray = [];

do {
    wordArray.push("Welcome to my house");
    loopCount = loopCount + 1;
    } while (loopCount < 0);
    alert(done);

console.log(wordArray);



//3
document.write("starting loop" + "<BR>")
let count = 0;
while (count < 10) {
    document.write("Current count : " + count + "<BR>");

    count++;
}
document.write ("stop loop");


//4
document.write ("Beginning of loop" + "<BR>");
let count = 0;

do {
    document.write("Number :" + count + "<BR>");
    
    count++;
}

while(count < 10);
document.write("Stop!")


if(hungry) {
    console.log("i will go eat");
  } else {
    console.log("i will not eat")
  }




//Is Div by Five 
/* Write a method is div_by_5(number) that takes in a number and returns the boolean true if the 
given number is divisible by 5, false otherwise. */

function byFive(num){
    if (num % 5 == 0) {
        return true;
    }
    return false; 
}

console.log(byFive(21))

//  either only 
/* write a method either_only(number) that takes in a number and returns true if the number
is divisible by either 3 or 5 but not both. The method should return false otherwise */

function threeOrFive(num){
       if (num % 3 === 0 && num % 5 === 0){
           return false;
       } else if (num % 3 === 0 || num % 5 === 0){
           return true;
       } else {
       return false;
   }
}

console.log(threeOrFive(6))


// Larger number
/* Write a method larger_number(num1, num2) that takes in two numbers and returns the larger of the 
two numbers */

 function largerNumber(num1, num2){
    if (num1 > num2){
        return num1;
    } else {
        return num2;
    }
}

console.log(largerNumber(2, 3))

// word check
/* Write a method word check(word) that takes in a word and returns a string. The method should return 
the string "long" if the word is longer that six charecters, "short" if it is less than 6 charecters,
and "medium" if it is exactly 6 charecters long */

let x = "catnip"
let y = x.length 

function wordCheck(){
if (y > 6){
    return "long";
} else if (y < 6){
    return "short";
} else if (y == 6){
     return "medium";
}
}

console.log(wordCheck())

// Count E
/* Write a method count_e(word) that takes in a string word and returns the number of e's in the word*/

function wordCount(word) {
    let find = "e";
    let count = word.split("e").length - 1;
    console.log(count);
}

wordCount("elephant") 

// Count A
/* Write a method count_a(word) that takes in a string and returns the number of a's in the word. The method should count both 
lowercase and uppercase a's */

function wordCount_a(word) {
    let count = word.split("A").length - 1;
    console.log(count);
}

wordCount_a("Alphabetical") 





/* sum nums
write a method sum_nums(max) that takes in a number max and returns the sum of all numbers from 1 up to and including num. */

let q = [1, 2, 3, 4, 5, 6, 7]

let a = q.reduce(function max(num1, num2){
   return num1 + num2; 
}, 0);

console.log(a) 


/* Write a method that factorial(num) that takes in a number num and returns the product of all numbers from 1 up to and including num 
HINT* use let product = 1, then product *= 1 somewhere in the solution */

function factorial(num){
    product = 1; 
    for(let i=1; i <= num; i++){
        product *= i;
    }
    return product;
}

console.log(factorial(4))
/* Reverse 
write a reverse(word) that takes in a string word and returns the word with its letters in reverse order 
HINT* search for reverse method that you can use to manipulate strings in JS */

function reverse(s){
    return s.split("").reverse().join("");
}
console.log(reverse("desserts"))

/* Goodbye 
Write a method that goodbye(word) that takes in a string name and returns a string saying goodbye to that name. 
see the example calls. */

function goodBye(word){
    let w = word + " nolitha."
    console.log(w)
}
 
goodBye("Goodbye")

//Count vowels 
/* write a method that counts vowels(word) that takes in a string and returns the number of vowels in the word. Vowels are letters
a, e, i, o, u. */

function vowelsCount(word){
    let count = 0;
    let vowels = 'aeiou';
    for(let i = 0; i < word.length; i++){
        if(vowels.indexOf(word[i].toLowerCase()) > -1){
                count++;
        }
        }
        return count;
       }
      
console.log(vowelsCount('How many vowels are here'))

// indexOf shows the index of the letter in the string
// whenever the letter is not included in the string, it shows a -1 but when the letter is there it will show the index position of that
// letter which is from zero to 4 i.e aeiou (0-4), therefore whenever the number is above -1, the counter will add 1/go up by 1


