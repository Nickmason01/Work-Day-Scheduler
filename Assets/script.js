var timeDisplayEl = $('#showTime');
var storebutton1 = document.getElementById("button-addon1")
var storebutton2 = document.getElementById("button-addon2")
var storebutton3 = document.getElementById("button-addon3")
var storebutton4 =document.getElementById("button-addon4")
var storebutton5 =document.getElementById("button-addon5")
var storebutton6 =document.getElementById("button-addon6")
var storebutton7 = document.getElementById("button-addon7")
var storebutton8 = document.getElementById("button-addon8")
var storebutton9 = document.getElementById("button-addon9")


function displayTime() {
    var currentTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(currentTime);
}

setInterval(displayTime, 1000);

function saveuserInput () {
    var userInput = document.querySelector(".schedInput");
    userInput.textContent = ("")

    localStorage.setItem("userInput",JSON.stringify(userInput));
    
}



storebutton1.addEventListener("click", function(event) {
event.preventDefault();
saveuserInput();
console.log(localStorage)
})







