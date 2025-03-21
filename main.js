
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
  const genderVal = formTarget.gender.value;

  //create a data structure to contain the data collected

  const studentData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    gender: genderVal,

  }

  //resetting the form after inputting details

  form.reset();

  //saving data to db.json
  //CRUD- Create

  function saveDataToDb(studentData){
    //post method-posting the data to the url
    // fetch takes two arguments, the resource and the type of content you want to send
    const configObj =  {
      method: "POST",
      Headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(studentData), //makes it a json object from javascript object

    }


    fetch(`${baseUrl}/students`, configObj)
     .then((rensponse) => rensponse.json())
      .then ((data) => console.log(data)) ;



  } 

  //fetching all students

  function fetchAllStudents() {
    //GET

    fetch (`${baseUrl}/students`)
    .then((rensponse) => rensponse.json())
    .then((data) => console.log(data));
  }

  //fetch one student

  function fetchOneStudent(){
    fetch(`${baseUrl}/student/${id}`)
    .then((rensponse) => rensponse.json())
    .then((studentInfo) => console.log(studentInfo));

  }

})