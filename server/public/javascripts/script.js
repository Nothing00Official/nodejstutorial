window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.boxShadow = "0 0 15px rgba(0,0,0,0.30)";
  } else {
    document.getElementById("header").style.boxShadow = "none";
  }
}
