/*
  FizzBuzz Programming Test
  Language: Node.js
*/
var range = Array(100).keys();
for(i of range){
  if((i % 3 == 0) && (i % 5 == 0)){
    console.log("FizzBuzz");
  } else {
    if((i % 3) == 0){
      console.log("Fizz");
    } else if((i % 5) == 0){
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// @ Source https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp