var fruits = ["apples", "oranges", "bananas"];
console.log(fruits);

fruits.splice(0,1);
console.log("splice(0,1) removes apples.");
console.log(fruits);

fruits.push("mangoes", "durians");
console.log("push adds mangoes and durians.");
console.log(fruits);

fruits.reverse();
console.log("reverse the order.");
console.log(fruits);

fruits.sort();
console.log("sort in alphabetical order.");
console.log(fruits);

var fruitsCount = fruits.length;
console.log("number of fruits: " + fruitsCount.toString());