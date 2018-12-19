//ENABLES THE USER TO SCROLL
window.onscroll = function() {scrollFunction()};
//INITIATING THE BUTTON THAT ALLOWS THE USER TO SCROLL TO THE TOP OF THE PAGE ONCE THE BUTTON IS CLICKED.
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
