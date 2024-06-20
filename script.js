const imageElement = document.querySelector("#imageGenerator");
const nameElement = document.querySelector("#myName");
const emailElement = document.querySelector("#emailMe");
const phoneElement = document.querySelector("#contactMe");
const addressElement = document.querySelector("#findMe");

const generateBtn = document.querySelector("#generateMe");
const emailField = document.querySelector("#emailField");
const phoneField = document.querySelector("#phoneField");
const addressField = document.querySelector("#addressField");
const nameField = document.querySelector("#nameField");

function apiFetch() {
  fetch("https://randomuser.me/api")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      showUserUI(data);
    })
    .catch((error) => {
      console.warn("fetch error:", error);
    });
}

apiFetch();

function showUserUI(data) {
  //Assign custom API names to the variables.
  const nameApi = `${data.results[0].name.first} ${data.results[0].name.last}`;
  const emailApi = `${data.results[0].email}`;
  const phoneApi = `${data.results[0].phone} `;
  const locationApi = `${
    data.results[0].location.city + ", " + data.results[0].location.country
  }`;

  //name,email,phone #,location, profile pic are assign to the API variables
  document.querySelector("#imageGenerator").src = data.results[0].picture.large;
  document.querySelector("#myName").textContent = nameApi;
  document.querySelector("#emailMe").textContent = emailApi;
  document.querySelector("#contactMe").textContent = phoneApi;
  document.querySelector("#findMe").textContent = locationApi;
}

function nameOnly() {
  nameField.style.display = "block";
  emailField.style.display = "none";
  phoneField.style.display = "none";
  addressField.style.display = "none";
}

function emailOnly() {
  nameField.style.display = "none";
  emailField.style.display = "block";
  phoneField.style.display = "none";
  addressField.style.display = "none";
}

function phoneOnly() {
  nameField.style.display = "none";
  emailField.style.display = "none";
  phoneField.style.display = "block";
  addressField.style.display = "none";
}

function locationOnly() {
  nameField.style.display = "none";
  emailField.style.display = "none";
  phoneField.style.display = "none";
  addressField.style.display = "block";
}

generateBtn.addEventListener("click", apiFetch);
document.querySelector("#nameIcon").addEventListener("click", nameOnly);
document.querySelector("#emailIcon").addEventListener("click", emailOnly);
document.querySelector("#phoneIcon").addEventListener("click", phoneOnly);
document.querySelector("#locationIcon").addEventListener("click", locationOnly);
