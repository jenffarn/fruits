var fruits = ["apples", "oranges", "bananas", "jackfruits"];
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

var fruitsCount = fruits.length;
console.log("number of fruits: " + fruitsCount.toString());

for (var i = 0; i < fruits.length; i = i + 1) {
    console.log(fruits[i]);
}

fruits.sort();
console.log("sort in alphabetical order.");
console.log(fruits);

var j = 0;
while (j < fruits.length) {
    console.log(fruits[j]);
    j = j + 1;
}
