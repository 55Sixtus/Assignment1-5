// convert kilometer to mile 

function convertKilometersToMiles(kilometer){
    const miles = kilometer / 1.609;
    return miles;
}
const miles = convertKilometersToMiles(200);
console.log(Math.floor(miles));