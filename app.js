function toggleImage(imageNumber) {
  var image = document.getElementById("description" + imageNumber);
  var toggleButton = document.getElementsByClassName("toggle-btn")[imageNumber - 1];
  
  if (toggleButton.classList.contains("active")) {
    image.style.display = "none";
    toggleButton.classList.remove("active");
  } else {
    image.style.display = "block";
    toggleButton.classList.add("active");
  }
}