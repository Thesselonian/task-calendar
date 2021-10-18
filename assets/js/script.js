//variable for tasks object in javascript
var tasks = [];
//set current date at top of app
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))

var appendLocalStorage = function() {
    $(".append-item").click(function() {
        var text = $(this).siblings(".col-10").val()
        var id = $(this).siblings(".col-10").attr("id")
        localStorage.setItem(id, text);

    })
}

var populateFromStorage = function() {
    for(i=6; i<18; i++) {
        // var stringI = toString(i)
        var task = localStorage.getItem(i) || false
        if(task){
            $("#"+i).val(task)
        }
    }
}

//for loop that iterates through time blocks to color them based on relation to current hour of day
for(i=6; i<18; i++) {
    //add class for before
    if (i<moment().format("H")) {
        $("#"+i).addClass("bg-danger")
    }

    //add class for equal to
    else if (moment().format("H")==i) {
        $("#"+i).addClass("bg-warning")
    } 

    //add class for after
    else {
        $("#"+i).addClass("bg-success")
    } 
}

appendLocalStorage();
populateFromStorage();
