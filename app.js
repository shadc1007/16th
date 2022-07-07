


//get rid of preloader after specific time
setTimeout(function () {
    FetchData();
  }, 5000);
  function FetchData() {
    const preload = document.querySelector(".preload");
    preload.classList.add("preload-finish");

    const cardContainer = document.querySelector(".card-container");
    cardContainer.style.opacity = "1";


  }