  // default open first question modal
  $(document).ready(function () {
    $('#myModalBase').show();
});
// Get the modal
var modalBase = document.getElementById('myModalBase');
var modal = document.getElementById('myModal');
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
var modal5 = document.getElementById('myModal5');
var modal6 = document.getElementById('myModal6');
var modal7 = document.getElementById('myModal7');
var myModalLast = document.getElementById('myModalLast');

// Get the button that opens the modal
var btnAnswer = document.getElementById("btnanswer");
var btnAnswer1 = document.getElementById("btnanswer1");
var btnAnswer1_2 = document.getElementById("btnanswer1-2");
var btnAnswer2 = document.getElementById("btnanswer2");
var btnAnswer2_2 = document.getElementById("btnanswer2-2");
var btnAnswer3 = document.getElementById("btnanswer3");
var btnAnswer3_2 = document.getElementById("btnanswer3-2");
var btnAnswer4 = document.getElementById("btnanswer4");
var btnAnswer4_2 = document.getElementById("btnanswer4-2");
var btnAnswer5 = document.getElementById("btnanswer5");
var btnAnswer5_2 = document.getElementById("btnanswer5-2");
var btnAnswer6 = document.getElementById("btnanswer6");
var btnAnswer6_2 = document.getElementById("btnanswer6-2");
var btnAnswer7 = document.getElementById("btnanswer7");
var btnAnswer7_2 = document.getElementById("btnanswer7-2");
var btnanswer8 = document.getElementById("btnanswer8");
var btnanswer8_2 = document.getElementById("btnanswer8-2");

// When the user clicks the button, open the modal 
btnAnswer.onclick = function () {
    myModal.style.display = "block";
    modalBase.style.display = "none";
}
btnAnswer1.onclick = function () {
    modal1.style.display = "block";
    modal.style.display = "none";
}
btnAnswer1_2.onclick = function () {
    modal1.style.display = "block";
    modal.style.display = "none";
}
btnAnswer2.onclick = function () {
    modal2.style.display = "block";
    modal1.style.display = "none";
}
btnAnswer2_2.onclick = function () {
    modal2.style.display = "block";
    modal1.style.display = "none";
}
btnAnswer3.onclick = function () {
    modal3.style.display = "block";
    modal2.style.display = "none";
}
btnAnswer3_2.onclick = function () {
    modal3.style.display = "block";
    modal2.style.display = "none";
}
btnAnswer4.onclick = function () {
    modal4.style.display = "block";
    modal3.style.display = "none";
}
btnAnswer4_2.onclick = function () {
    modal4.style.display = "block";
    modal3.style.display = "none";
}
btnAnswer5.onclick = function () {
    modal5.style.display = "block";
    modal4.style.display = "none";
}
btnAnswer5_2.onclick = function () {
    modal5.style.display = "block";
    modal4.style.display = "none";
}
btnAnswer6.onclick = function () {
    modal6.style.display = "block";
    modal5.style.display = "none";
}
btnAnswer6_2.onclick = function () {
    modal6.style.display = "block";
    modal5.style.display = "none";
}
btnAnswer7.onclick = function () {
    modal7.style.display = "block";
    modal6.style.display = "none";
}
btnAnswer7_2.onclick = function () {
    modal7.style.display = "block";
    modal6.style.display = "none";
}

// When the user clicks on last modal, close the modal
btnanswer8.onclick = function () {
    myModalLast.style.display = "block"
    modal7.style.display = "none";
}
btnanswer8_2.onclick = function () {
    myModalLast.style.display = "block"
    modal7.style.display = "none";
}



// Timer
// Set the date we're counting down to
var countDownDate = new Date("Sep 5, 2018 15:41:78").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = minutes + "m " + seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);