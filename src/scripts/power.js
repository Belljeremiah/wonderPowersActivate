// document.querySelector("#activate-flight").addEventListener("click");

// Attempting to Write a flightHandlerFunction that will remove the disabled class on corresponding Id
/* This is my variable key 
*/
const myFlight = document.getElementById("flight");
const myMindReading = document.getElementById("mindreading");
const myXray = document.getElementById("xray");
const myAll = document.getElementsByClassName("powers");
const myDeactivate = document.getElementById("powerList");
const i = document.querySelectorAll('.powers');
// 

document.querySelector("#activate-flight").addEventListener("click", 
 flightHandlerFunction = () => {
    myFlight.classList.add("enabled");
    myFlight.classList.remove("disabled");
    
});

// flightHandlerFunction();

document.querySelector("#activate-mindreading").addEventListener("click", 
 mindReadingFunction = () => {
    myMindReading.classList.add("enabled");
    myMindReading.classList.remove("disabled");
    
});

// mindReadingFunction();

document.querySelector("#activate-xray").addEventListener("click", 
 xrayVisionFunction = () => {
    myXray.classList.add("enabled");
    myXray.classList.remove("disabled");
    
});

// xrayVisionFunction();

document.querySelector("#activate-all").addEventListener("click", 
 activateAllFunction = () => {
    myAll.classList.add("enabled");
    myAll.classList.remove("disabled");
    
});

// activateAllFunction();

document.querySelector("#deactivate-all").addEventListener("click", 
 deactivateAllFunction = () => {
    myDeactivate.classList.add("disabled");
    myDeactivate.classList.remove("removed");
    
});


// deactivateAllFunction();