// Define global variable
const formFullName = document.getElementById('full-name');
const formJobTitle = document.getElementById('job-title');
const formCompanyName = document.getElementById('company-name');
const formPhoneNumber = document.getElementById('phone-number');
const formEmailAddress = document.getElementById('email-address');
const formOfficeAddress = document.getElementById('office-address');


// CardItself
const companyName = document.querySelector('.company-name');
const personName = document.querySelector('.person-name');
const jobTitle = document.querySelector('.job-title')
const phoneNumber = document.querySelector('.phone-number');
const emailAddress = document.querySelector('.email-address');
const companyAddress = document.querySelector('.address')


// Validate number
const validPhoneNumber = document.querySelector('.valid-phone-num');
const phoneNumberLength = document.querySelector('.phone-num-length');
// Add event listener
formPhoneNumber.addEventListener('keyup', ()=>{
  // Confirm phone number is digits
  function confirmNumber(number, regex){
  const matches = number.match(regex) || [];

  if (matches.length === 0) {
    // alert('You have no numbers');
    formPhoneNumber.value = '';
    validPhoneNumber.classList.remove('display-none');
    } else {
    validPhoneNumber.classList.add('display-none');
    }

     // Check that phone number is not greater than 11
    if (matches.length !== 11){
    phoneNumberLength.classList.remove('display-none');
    } else {
    phoneNumberLength.classList.add('display-none');
    }
  }
  confirmNumber(formPhoneNumber.value, /[0-9]/g)
})

// Validate email address
const validEmailAddress = document.querySelector('.valid-email-address');

function validateEmail(email) {
  const validation = /^[^\$@]+@[^\$@]+[^\$@]+$/;
  if (validation.test(email.value) === true) {
    validEmailAddress.classList.add('display-none')
    // return true;  
  } else {
    validEmailAddress.classList.remove('display-none')
  }
}

validateEmail(formEmailAddress);

// Add to business card
function addToCard(formInput, appendText){
  // // Authentication of empty input
  if(formInput.value === ''){
    const redAlert = document.querySelector('.red-alert');
    redAlert.classList.remove('display-none');
    appendText.value = '';

    // Remove red alert
    setTimeout(() => {
      redAlert.classList.add('display-none');
    }, 1000);
  }

  // Make sure nothing is in text before adding anything
  if (appendText.innerText !== ''){
    appendText.appendChild = 'none'
    formInput.value = '';

    // Create another form here
    // ============================
    // ===========================

  } else {
    // Add input value to an element
    const createParagraph = document.createElement('p');
    createParagraph.innerText = formInput.value;

    appendText.appendChild(createParagraph);
    formInput.value = '';
  }
  
}

// Create card
const createCard = document.querySelector('.create-card');
createCard.addEventListener('click', ()=> {
  addToCard(formFullName, personName);
  addToCard(formCompanyName, companyName);
  addToCard(formJobTitle, jobTitle);
  addToCard(formPhoneNumber, phoneNumber);
  addToCard(formEmailAddress, emailAddress);
  addToCard(formOfficeAddress, companyAddress);
})