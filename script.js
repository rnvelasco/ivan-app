document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector(".search-bar button");
  const searchInput = document.querySelector(".search-bar input");

  searchButton.addEventListener("click", function () {
    const searchTerm = searchInput.value;

    if (searchTerm.trim() !== "") {
      window.location.href =
        "search-results.html?query=" + encodeURIComponent(searchTerm);
    }
  });
});

function loginUser(username, password) {
  console.log("Login request sent to server");
}

function registerUser(username, password, email) {
  console.log("Registration request sent to server");
}
