const icon = document.querySelectorAll(".fa-chevron-down");
const answers = document.querySelector(".answer");
const question = document.querySelectorAll(".ques");

icon.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const show = e.currentTarget.parentElement.parentElement;
    show.classList.toggle("show-text");
   
  });
});

icon.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.currentTarget.classList.toggle("fa-chevron-up");
  });
});
