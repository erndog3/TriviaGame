$(document).ready(function()) {

}	

	document.querySelector(".btn btn-primary btn-lg").addEventListener("click", function(){
    document.querySelector(".hidden").style.display = "block";
}



//Gloabal variables


//Start Game Functions

	/*function startGame() {
		(document).ready;
		function startTimer(){
				function startTimer(duration, display) {
		    var timer = duration, minutes, seconds;
		    setInterval(function () {
		        minutes = parseInt(timer / 60, 10)
		        seconds = parseInt(timer % 60, 10);

		        minutes = minutes < 10 ? "0" + minutes : minutes;
		        seconds = seconds < 10 ? "0" + seconds : seconds;

		        display.textContent = minutes + ":" + seconds;

		        if (--timer < 0) {
		            timer = duration;
		        }
		    }, 1000);
		}

window.onload = function () {
    var thirtySeconds = 30 * 1,
        display = document.querySelector('#time');
    startTimer(thirtySeconds, display);
};
	}

	function countDown()	{
		$('.timer').html(timeLeft)
		if(timeLeft < 1)
			gameOver() {
				alert(Times Up Game Over);
				stopTimer()
			}


	}*/

	///Declaring stop timer when time runs out
	
$(function() {
$("button").click(function() {
    var counter = 30;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    if (counter === 0) {
        alert('sorry, out of time');
        clearInterval(counter);
    }
  }, 1000);
}
$("#startClock").click(function(){
    startTimer();
 });
        $("button").append('<div>.container</div>')
        function showDIV() 
            
                
  
	




//SHOW CORRECT ANSWERS//
function handleClick()
  {         
var amountCorrect = 0;          
for(var i = 1; i <= 7; i++) {
  var radios = document.getElementsByName('group'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "correct" && radio.checked) {
      amountCorrect++;
    }
  }
 }                   
    alert("Correct Responses: " + amountCorrect);
  }


startGame();