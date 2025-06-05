// MY SOLUTION: I get the same answer as the more complex solution
// const fs = require("fs");

// const file = fs.readFileSync("./input.txt");
// const encoded = file.toString("utf8");

// santa = 0;

// for (let i = 0; i < encoded.length; i++) {
//   if (encoded[i] === "(") {
//     santa = santa + 1;
//   } else if (encoded[i] === ")") {
//     santa = santa - 1;
//   }
// }

// console.log("santa is on floor: ", santa);

const fs = require("fs");

function question1() {
  fs.readFile("./input.txt", (err, data) => {
    console.time("santa-time");

    const directions = data.toString();
    const directionsArr = directions.split("");
    const answer = directionsArr.reduce((acc, currentValue) => {
      if (currentValue === "(") {
        return (acc += 1);
      } else if (currentValue === ")") {
        return (acc -= 1);
      }
    }, 0);
    console.timeEnd("santa-time");
    console.log("santa floor: ", answer);
  });
}

question1();

// tell us when santa reaches a negative floor(basement floor)
function question2() {
  fs.readFile("./input.txt", (err, data) => {
    console.time("santa-time");
    const directions = data.toString();
    const directionsArr = directions.split("");

    let accumulator = 0;
    let counter = 0;
    // if finds some-thing that matches, stops looping
    const answer = directionsArr.some((currentItem) => {
      if (currentItem === "(") {
        accumulator += 1;
      } else if (currentItem === ")") {
        accumulator -= 1;
      }
      counter++;
      return accumulator < 0;
    });

    console.log("basement entered at floor: ", counter);
  });
}

question2();

/*

question 2 process: 
    convert data to string
    split string
    create an accumulator variable counter
    create a counter counter
    loop over directions array of the split string
    some() -> if some match "("" or ")" 
        do something increment or decrement
    after this increment or decrement, increase the counter 
        return the accumulator IFFFFFF it's less than 0
    * Interesting part: is using both an accumulator and counter and how they work together
*/
