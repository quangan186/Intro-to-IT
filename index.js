const readMoreBtns = document.querySelectorAll(".read-more-btn");
const texts = document.querySelectorAll(".content");

readMoreBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    texts[index].classList.toggle("show-more");

    if (btn.innerText === "Read More") {
      btn.innerText = "Read Less";
    } else {
      btn.innerText = "Read More";
    }
  });
});


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
