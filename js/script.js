// NAVBAR SCROLL FUNCTION
let scrollTimeout;

window.addEventListener("scroll", function () {
  clearTimeout(scrollTimeout);

  const navbar = document.querySelector(".navbar");
  const scrollY = window.scrollY;

  const scrollThreshold = 100;

  if (scrollY > scrollThreshold) {
    navbar.style.borderColor = "#ffF";
  } else {
    navbar.style.borderColor = "#173884";
  }

  scrollTimeout = setTimeout(function () {
    navbar.style.borderColor = "#173884";
  }, 50);
});

// TOGGLE KELAS ACTIVE
const navbarNav = document.querySelector(".navbar-nav");

// KETIKA HAMBURGER MENU DI KLIK
document.querySelector("#hard-drive").onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

// KLIK DILUAR SIDEBAR UNTUK MENGHILANGKAN NAV
const hamburger = document.querySelector("#hard-drive");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    e.preventDefault;
  }
});

// FORM VALIDATION EMAIL, NAMA, DAN PHONE

var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

var phonePattern = /^0\d{9,11}$/;

var namaPattern = /^[a-zA-Z]{3,}$/;

// FUNCTION VALIDASI

function validateForm(event) {
  // DEKLARASI VARIABEL
  let emailInput = document.querySelector('input[placeholder="Masukkan E-Mail"]');
  let phoneInput = document.querySelector('input[placeholder="No.Telepon"]');
  let nameInput = document.querySelector('input[placeholder="Masukkan Nama"]');
  let inputgroup1 = document.querySelector(".input-group1");
  let inputgroup2 = document.querySelector(".input-group2");
  let inputgroup3 = document.querySelector(".input-group3");
  let errorParagraph = document.querySelector(".error-message");
  let successParagraph = document.querySelector(".success-message");

  //  RESET CLASS ERROR

  inputgroup1.classList.remove("error");
  inputgroup2.classList.remove("error");
  inputgroup3.classList.remove("error");
  inputgroup1.style.border = "";
  inputgroup2.style.border = "";
  inputgroup3.style.border = "";

  let isValid = true;
  let errorMessage = "";

  // NAME IMPUT VALIDATION
  if (nameInput.value === "") {
    inputgroup1.style.border = "1px solid red";
    isValid = false;
    errorMessage += "Nama Kosong. ";
  } else if (!namaPattern.test(nameInput.value)) {
    inputgroup1.style.border = "1px solid red";
    isValid = false;
    errorMessage += "Nama tidak valid. ";
  }

  // EMAIL IMPUT VALIDATION
  if (emailInput.value.trim() === "") {
    inputgroup2.style.border = "1px solid red";
    isValid = false;
    errorMessage += "Email Kosong. ";
  } else if (!emailPattern.test(emailInput.value)) {
    inputgroup2.style.border = "1px solid red";
    isValid = false;
    errorMessage += "Email Tidak Valid. ";
  }

  // PHONE INPUT VALIDATION
  if (phoneInput.value.trim() === "") {
    inputgroup3.style.border = "1px solid red";
    isValid = false;
    errorMessage += "Nomor Telepon Kosong. ";
  } else if (!phonePattern.test(phoneInput.value)) {
    inputgroup3.style.border = "1px solid red";
    isValid = false;
    errorMessage += "Nomor Telepon Tidak Valid. ";
  }

  if (!isValid) {
    errorParagraph.textContent = errorMessage;
    errorParagraph.style.display = "block";
    event.preventDefault();
    successParagraph.style.display = "none";
  } else {
    errorParagraph.style.display = "none";
    successParagraph.textContent = "Terima Kasih Telah Mengisi Form Ini!";
    event.preventDefault();
    successParagraph.style.display = "block";
  }
}
// SOLVING OUT COMPLETE PROBLEM
function handleAutofill(input) {
  // Check if the input field is autofilled
  if (input.value !== input.defaultValue) {
    input.style.backgroundColor = "transparent";
    input.style.color = "inherit";
  }
}

function continuouslyUpdateStyles() {
  // Function to continuously apply custom styling to input fields
  const inputFields = document.querySelectorAll("input");

  inputFields.forEach((input) => {
    handleAutofill(input);
  });

  setTimeout(continuouslyUpdateStyles, 100); // Update styles every 100 milliseconds
}

continuouslyUpdateStyles(); // Start the continuous style update process
