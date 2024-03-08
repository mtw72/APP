// toggle class for bolder header text
const header = document.querySelectorAll("#accordion div.card-header a");
for (var i = 0; i < header.length; i++) {
  header[i].addEventListener("click", function () {
    this.classList.toggle("bolder");
  });
}
