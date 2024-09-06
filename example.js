//javascript program structures example practice

//Triangle

let a = "";
for (let i = 0; i < 7; i++) {
    a=a + "#";
  console.log(a);
}



/*
for (let i=1;i<=100;i++) {
    if (i %3==0 && i%5==0) {
        console.log("FizzBizz")
    } else if (i%3==0) {
        console.log("Fizz")
    } else if (i%5==0) {
        console.log("Bizz")

    } else {
        console.log(i)
    }
}
*/



//chessboard
/*
let size = 8;
let board = "";

for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    if ((row + col) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n"; 
}

console.log(board);
*/











//roundto
/*
const roundTo = function(n, step) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
  };
  
  console.log(roundTo(23, 10));
*/





//Functions Chapter Exercises

//We can write a function like that ourselves now. Define the function min that takes two arguments and returns their minimum.
/*
function min(a,b) {
  if (a<b) {
    return a
  } else {
    return b
  }

}
console.log(min(1,-10))
console.log(min(10,20))
*/

//Recursive iseven function
/*
function isEven(n) {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else if (n < 0) {
    return isEven(-n); 
  } else {
    return isEven(n - 2);
  }
}

console.log(isEven(50));
console.log(isEven(75));  
console.log(isEven(-1));  
*/


//Another example
/*
function countChar(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }
  return count;
}
function countBs(string) {
  return countChar(string, 'B');
}
console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));
*/
  





