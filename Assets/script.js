//created variables for my time and date, my table to store the inputs,the buttons for saving inputs, and the current hour 
var timeDisplayEl = $('#showTime');
var table = document.querySelector(".table");
var btn = $(".btn");
var currentHour = moment().hour();
//this function displays the time in the timeDisplayEl in the jumbotron
function displayTime() {
    var currentTime = moment().format('MMM DD, YYYY');
    timeDisplayEl.text(currentTime);
}
displayTime();
//this function grabs our stored items from Localstorage and allows them to persist on screen when refreshed as well as color codes the input elements to display different colors dependent on the current hour
function colortimeBlock () {
    for(var i=9; i<18; i++){
        var text = localStorage.getItem(i)
        $('#'+i).val(text);
        if(currentHour > i){
            $('#'+i).addClass("past");
        }
        if(currentHour === i){
            $('#'+i).addClass("present");
        }
        if(currentHour < i){
            $('#'+i).addClass("future");
        }
    }
} console.log("test")
colortimeBlock();


//this function saves the users inputs into the localstroage for retrieval 
function saveuserInput(){
    var id =$(this).attr("data-id");
    var text =$("#"+id);
    localStorage.setItem(id, text.val());
}
btn.on("click",saveuserInput);











