// convert fahrenheit to celsius

function convertFhahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5/9);
    return celsius;
}
// This function takes one argument fahrenheit:

const celsius = convertFhahrenheitToCelsius(280);
console.log(Math.floor(celsius));