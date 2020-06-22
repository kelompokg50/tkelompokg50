function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "main-container") {
    x.className += " main-container";
  } else {
    x.className = "main-container";
  }
}
