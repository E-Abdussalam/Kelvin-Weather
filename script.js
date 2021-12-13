// Set the temperature in kelvin
const Kelvin = 50;

// convert the temperture from kelvin to celsius.
const Celsius = Kelvin - 273;
console.log(Celsius);

// converting the temperture from celsius to Fahrenheit .
let fahrenheit = Celsius * (9 / 5) + 32;
console.log(fahrenheit);
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// convert to Newton
let newTon = Celsius * (33 / 100);
newTon = Math.floor(newTon);
console.log(`The temperature is ${newTon} degrees Newton.`);
