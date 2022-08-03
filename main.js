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


// Add to business card
function addToCard(formInput, appendText){
  // // Authentication of empty input
  // if(formInput.value === ''){
  //   const redAlert = document.querySelector('.red-alert');
  //   redAlert.classList.remove('display-none');

  //   // Remove red alert
  //   setTimeout(() => {
  //     redAlert.classList.add('display-none');
  //   }, 1000);

  //   main.classList.remove('display-none');
  //   invoicePage.classList.add('display-none');
  // } else {
  //   main.classList.add('display-none');
  //   invoicePage.classList.remove('display-none')
  // }

  // Make sure nothing is in text before hand
  if (appendText.innerText !== ''){
    appendText.appendChild = 'none'
    // appendText.classList.add('display-none')
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