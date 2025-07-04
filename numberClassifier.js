// Number Classifier
// Make a function that checks a number. First, check if the number is positive or negative. Then, check if the number is even or odd.

const numberClassifier = (number) => {
  if (number > 0) {
    if (number % 2 == 0) {
      console.log("This number is positive and even");
    } else {
      console.log("This number is positive and odd");
    }
  } else if (number < 0) {
    if (number % 2 == 0) {
      console.log("This number is negative and even");
    } else{
        console.log("This number is negative and odd");
    }
  } else {
    console.log("This number is zero");
  }
};
console.log(numberClassifier(34));
console.log(numberClassifier(35));
console.log(numberClassifier(-34));
console.log(numberClassifier(-35));
console.log(numberClassifier(0));
console.log(numberClassifier());
