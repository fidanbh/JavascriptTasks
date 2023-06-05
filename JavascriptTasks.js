// 1. Declare a function printFullName and it prints out your full name.

function printFullName(name, surname) {
  console.log(`My name is ${name} ${surname}`);
}
printFullName("Fidan", "Hasanova");

// 2. Declare an arrow function printFullNameWithParam and now it takes firstName, lastName as a parameter and returns your full name.

const printFullNameWithParam = (firstName, lastName) => {
  return `My name is ${firstName} ${lastName}`;
};

console.log(printFullNameWithParam("Fidan", "Hasanova"));

//3. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function that calculates perimeterOfRectangle.

function getPerimeterOfRectangle(length, width) {
  let perimeter;
  perimeter = 2 * (length + width);
  return perimeter;
}

getPerimeterOfRectangle(5, 7);

//4. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function that calculates BMI. BMI is used to broadly define different weight groups in adults 20 years old or older. Check if a person is underweight, normal, overweight, or obese based on the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal Weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function checkBodyMass(weight, height) {
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "This person is underweight.";
  } else if ((bmi >= 18.5) & (bmi <= 24.9)) {
    return "This person has normal weight.";
  } else if ((bmi >= 25) & (bmi <= 29.99)) {
    return "This person is overweight.";
  } else {
    return "This person is obese.";
  }
}

checkBodyMass(44.5, 159);

//5. Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) -> 3*3 = 9
// pow(3, 3) -> 3 * 3 * 3 = 27
// pow(1, 100) -> 1 * 1 * ...* 1 = 1

function getPow(x, n) {
  let pow = 1;
  for (let i = 1; i <= n; i++) {
    pow *= x;
  }
  console.log(pow);
}

getPow(2, 4);
