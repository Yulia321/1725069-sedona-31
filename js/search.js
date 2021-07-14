const loginLink = document.querySelector(".hotel-button");
const loginPopup = document.querySelector(".modal-search");

const loginForm = loginPopup.querySelector(".search-form");

loginLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.toggle("modal-show");
  });

    loginForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
});

