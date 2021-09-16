/* --------------------- REUSABLE VARIABLES & FUNCTIONS --------------------- */
const container = document.getElementById("container");
const photoGallery = document.getElementById("gallery");
const notifyText = document.getElementById("notify-text");
const searchBtn = document.getElementById("search-btn");
const inputField = document.getElementById("input-field");
const spinner = `<div class="sk-chase mx-auto mt-4">
                 <div class="sk-chase-dot"></div>
                 <div class="sk-chase-dot"></div>
                 <div class="sk-chase-dot"></div>
                 <div class="sk-chase-dot"></div>
                 <div class="sk-chase-dot"></div>
                 <div class="sk-chase-dot"></div>
                 </div> `;
let searchResult;

/* ------------------------- ENTER KEY PRESS ACTION ------------------------- */
inputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") searchBtn.click();
});

/* ------------------------ LOAD DATA FUNCTIONALLITY ------------------------ */
const loadData = (Str) => {
  container.innerHTML = "";
  let searchText = Str;
  inputField.value != "" ? (searchText = inputField.value) : (searchText = Str);
  searchResult = searchText;
  inputField.value = "";
  const url = `https://api.unsplash.com/search/photos/?query=${searchText}&per_page=50&client_id=pl7Dj4uX_pWVpe-j4D7OQxNcOXnZgdHS5wvdBAA7ZAc
  `;
  notifyText.innerHTML = `Please wait for a moment.. <br>
                         ${spinner} `;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayImages(data.results));
};
loadData("kashmir");

/* ---------------------- DISPLAY IMAGE FUNCTIONALLITY ---------------------- */
const displayImages = (elements) => {
  console.log(elements);
  photoGallery.innerHTML = "";

  if (searchResult && elements.length !== 0) {
    elements.forEach((ele) => {
      const newPhoto = document.createElement("div");

      const width = ele.width;
      const imgUrl = ele.urls.regular;
      let diffClass;
      if (width > 2500 && width < 4000) {
        diffClass = "nor-4";
      } else if (width > 5500) {
        diffClass = "nor-2";
      } else if (width < 2500) {
        diffClass = "nor-3";
      } else {
        diffClass = "nor-1";
      }
      newPhoto.classList.add("photo", `${diffClass}`);
      newPhoto.innerHTML = `<img src="${imgUrl}" alt="" />`;
      photoGallery.appendChild(newPhoto);
      notifyText.innerHTML = `Result : <span class="text-warning">${searchResult}</span>`;
      container.appendChild(photoGallery);
    });
  } else {
    console.log(searchResult);
    searchResult === undefined
      ? (notifyText.innerHTML = `<h3 class= "error-text">Please write specific name to get photos</h3>`)
      : (notifyText.innerHTML = `<h3 class="error-text">Sorry <span class="fw-bold text-danger">${searchResult}</span> is not found.</h3>`);
    container.innerHTML = ` <img class="d-block mx-auto w-50 full-width" src="images/not-found.png" alt="" />`;
  }
};
