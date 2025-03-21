
//start with declaring the baseurl of .json
const baseUrl ="http://localhost:3000";

//getting accesse to the form

document.querySelector('form');

//getting access to the elements and getting the values
//preventDefault- prevents the default of refreshing and loosing inputs

FormData.addEventListener('submit', (event) =>{
  event.preventDefault();

  //form target - allows getting access to all inputs in the form
  //.value - narrows down to collect the value itself

  const formTarget = event.target;

  const firstName = formTarget.firstName.value;
  const lastName = formTarget.lastName.value;
  const email = formTarget.email.value;

  //create a data structure to contain the data collected

  const data = {
    firstName: firstName,
    lastName: lastName,
    email: email,

  }

})