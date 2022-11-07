'use strict';
const inputTemp = document.querySelector(".temp");
const btnCompute = document.querySelector(".btn-compute");
const result = document.querySelector(".result");
const radios = document.querySelectorAll(".rdo");
const btnMode = document.querySelector(".btn-mode");
const divMain = document.querySelector(".site-main-content-container");
const lblF = document.querySelector(".lblF");
const lblC = document.querySelector(".lblC");
const lblTitle = document.querySelector(".title");
const chkSwitch = document.getElementById("switch");

let convertType = 0;//0 is toFa ; 1 is toCe

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

 

radios.forEach(e => {
    
    e.onclick = function () {
        convertType = parseInt(e.value);
    }
})



btnCompute.onclick = function () {
   
    compute(inputTemp.value.trim());
}

btnMode.onclick = function () {
   
    if (btnMode.innerText === "Light mode") {
        btnMode.innerText = "Dark mode";
        divMain.classList = "site-main-content-container lightmode";
        lblF.classList = "textcolor-black";
        lblC.classList = "textcolor-black";
        lblTitle.classList = "textcolor-black";
        inputTemp.classList = "input-cls  input-lightmode";
        result.classList = "input-cls  input-lightmode";
        
    }
    else {
        btnMode.innerText = "Light mode";
        divMain.classList = "site-main-content-container darkmode";
        lblF.classList = "textcolor-white";
        lblC.classList = "textcolor-white";
        lblTitle.classList = "textcolor-white"; 
        inputTemp.classList = "input-cls  input-darkmode";
        result.classList = "input-cls  input-darkmode";
    }
}