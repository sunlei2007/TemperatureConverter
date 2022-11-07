'use strict';
// Celsius to Fahrenheit 
function toFa(temp) {
    let tempResult = temp * 1.8 + 32;
    return tempResult.toFixed(1);
}
// Fahrenheit to Celsius 
function toCe(temp) {
    let tempResult = (temp - 32) / 1.8;
    return tempResult.toFixed(1);
}
 
 