//Closures

//example1 of closures

function wrapValue(n) {
    let local=n
    return () => local
}
let wrap1=wrapValue(1)
let wrap2=wrapValue(2)
console.log(wrap1())
console.log(wrap2())


//example 2 of closures

function multiplier(factor) {
    return number =>number*factor
}
let twice=multiplier(2)
console.log(twice(5))



//Recursion 
//example of recursion 

function power(base,exponent) {
    if (exponent ==0) {
        return 1
    } else {
        return base * power(base,exponent-1)
    }
}
console.log(power(2,5))
console.log(power(2,3))

//Example of recursion2

function findSolution(target) {
    function find(current, history) {
      if (current == target) {
        return history;
      } else if (current > target) {
        return null;
      } else {
        let addResult= find(current + 5, `(${history} + 5)`);
        if (addResult !=null) {
            return addResult
        }
        return find(current * 3, `(${history} * 3)`);
      }
    }
    return find(1, "1");
  }
  
  console.log(findSolution(24));


//Introducing functions using numbers

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
      string = "0" + string;
    }
    return string;
  }
  
  function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
  }
  
  printFarmInventory(7, 16, 3);



  
