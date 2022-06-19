const openLoginModalBtn = document.querySelector("#loginModalBtn");
const loginModal = document.querySelector(".login-modal");
const closeLoginModalBtn = document.querySelector("#closeLoginModal");
const loginForm = document.querySelector("#loginForm");

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phoneNumber");

let newArr = [];

openLoginModalBtn.addEventListener("click", () => {
  loginModal.style.display = "block";
});

const handleDisplay = () => {
  loginModal.style.display = "none";
};

closeLoginModalBtn.addEventListener("click", () => {
  handleDisplay();
});

window.onclick = (event) => {
  if (event.target === loginModal) {
    handleDisplay();
  }
};

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  //   let userName = username.value;
  //   let pwd = password.value;

  //   console.log(userName);
  //   console.log(pwd);

  //   const formData = new FormData(loginForm);
  //   const formProps = Object.fromEntries(formData);

  let formData = {
    username: username.value,
    password: password.value,
    contactDetails: {
      email: email.value,
      phoneNumber: phoneNumber.value,
    },
  };

  newArr.push(formData);
  console.log(newArr);
});
