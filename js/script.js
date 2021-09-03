/* --------------------- REUSABLE VARIABLES & FUNCTIONS --------------------- */
const container = document.getElementById("container");
const photoGallery = document.getElementById("gallery");
const notifyText = document.getElementById("notify-text");
const spinner = `<div class="sk-chase mx-auto mt-4">
                 <div class="sk-chase-dot"></div>
                 <div class="sk-chase-dot"></div>
                 <div class="sk-chase-dot"></div>
                 <div class="sk-chase-dot"></div>
                 <div class="sk-chase-dot"></div>
                 <div class="sk-chase-dot"></div>
                 </div> `;
let searchResult;

/* ------------------------ LOAD DATA FUNCTIONALLITY ------------------------ */
const loadData = (Str) => {
  container.innerHTML = "";
  let searchText = Str;
  const inputField = document.getElementById("input-field");
  inputField.value != "" ? (searchText = inputField.value) : (searchText = Str);
  searchResult = searchText;
  inputField.value = "";
  const url = `https://api.unsplash.com/search/photos/?query=${searchText}&per_page=50&client_id=pl7Dj4uX_pWVpe-j4D7OQxNcOXnZgdHS5wvdBAA7ZAc
  `;
  notifyText.innerHTML = `Please wait for a moment.. <br>
                         ${spinner} `;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayImages(data.results.map((ele) => ele.urls.regular)));
};
loadData("kashmir");

/* ---------------------- DISPLAY IMAGE FUNCTIONALLITY ---------------------- */
const displayImages = (images) => {
  photoGallery.innerHTML = "";

  if (searchResult && images.length !== 0) {
    images.forEach((image) => {
      const photoPosition = Math.ceil(Math.random() * 4);
      const diffClass = `nor-${photoPosition}`;

      const newPhoto = document.createElement("div");
      newPhoto.classList.add("photo", `${diffClass}`);
      newPhoto.innerHTML = `<img src="${image}" alt="" />`;

      photoGallery.appendChild(newPhoto);
      notifyText.innerHTML = `Result : <span class="text-warning">${searchResult}</span>`;
      container.appendChild(photoGallery);
    });
  } else {
    console.log(searchResult);
    searchResult === undefined
      ? (notifyText.innerText = `Please write specific name to get photos`)
      : (notifyText.innerHTML = `Sorry <span class="fw-bold text-danger">${searchResult}</span> is not found.`);
    container.innerHTML = ` <img class="d-block mx-auto w-50" src="images/not-found.png" alt="" />`;
  }
};
