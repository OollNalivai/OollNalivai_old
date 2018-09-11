var link = document.querySelector(".button-modal");
var popup = document.querySelector(".modal-view-window");
var close = document.querySelector(".modal-close");

var form = popup.querySelector("letter-form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
        }	
    }
});