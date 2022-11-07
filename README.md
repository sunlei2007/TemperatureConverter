# Temperature converter
## Description
  > Temperature converter API is used to convert Fahrenheit to Celsius and Celsius to Fahrenheit.
## Call the API
This allows you to include [converter.js](assets/script/convert.js),e.g:
```html
<script src="assets/script/converter.js"></script>
```
## Call function in API
#### 1. Convert fahrenheit to celsius
Use following way 
```js
toCe();
```
#### 2. Convert celsius to fahrenheit
Use following way 
```js
toFa();
```
## Use script
```js
function compute(tempValue) {
    
    if (tempValue === "") {
        
        result.value = "Temprature cann't be empty!";
        return;
    }
    if (isNaN(tempValue)) {
        result.value = "Number is required!";
        return;
    }
    
    if (chkSwitch.checked) {
        result.value = toCe(tempValue);
    }
    else {
        result.value = toFa(tempValue);
    }
}
```
## Demo
Click here(https://sunlei2007.github.io/TemperatureConverter/)