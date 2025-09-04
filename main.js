// console.log(6 - "2");
// console.log("3" + 2 - 1);
// console.log(6 - "2");
// let x = 1;
// x++;
// console.log(x);
// let y = 1;
// y--;
// console.log(y);

// console.log(++y);
// let counter = 1;

// console.log(2 * ++counter);
// console.log(2 * counter++);

// let hi = "He said,  'hello!' ";
// console.log(0 === false);

// let day = "s";
// switch (day) {
//   case "monday":
//     console.log("today  is monday ");

//     break;

//   default:
//     console.log("invalid day");

//     break;
// }

// function capitalize(string) {
//   return typeof string === "string" && string.length > 0
//     ? string[0].toUpperCase() + string.slice(1)
//     : string;
// }

// console.log(capitalize("shuhrat"));

function lastLetter(string) {
  return string[string.length - 1];
}

console.log(lastLetter("Shuhrat"));
console.log(lastLetter("sherzod"));
console.log(lastLetter("hilo"));
console.log(lastLetter("shodi"));
console.log(lastLetter("shahzo"));
console.log(lastLetter("sherzod zik    sadsadadasvcc"));
