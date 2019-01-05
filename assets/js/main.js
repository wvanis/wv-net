var sAgree = document.getElementById('optSA');
var agree = document.getElementById('optA');
var disagree = document.getElementById('optD');
var sDisgree = document.getElementById('optSD');
var cNull = document.getElementById('optNull');

var next = document.getElementById('bttn2');
var prev = document.getElementById('bttn1');

next.addEventListener("click", function() {

  console.log(scale.value);

  if (scale.value === document.getElementById('optNull')) {
    alert("Choose a valid answer please.");
  } else {
    window.location.href="pages/1.html"
  }

});

prev.addEventListener("click", function() {

  window.location.href="../index.html"

});