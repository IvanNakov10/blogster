let btn = document.querySelector('.button1');
btn.addEventListener("click", myF);
function myF() {
  let answer = document.querySelector('#qu');
  
  
     if (answer == "Фъстъци") {
      location.href = "Drive.html";
    } else if (answer == "фъстъци") {
      location.href = "/blogter/carp3.html";
    } 
  }