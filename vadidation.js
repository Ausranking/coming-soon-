// Code for valdiation of user emailfrom the html form
const validEmails = {
  email1: "austinnze1000@gmail.com",
  email2: "austranking@gmaii.com",
};

validateForm =()=>{
  let x = document.forms["userform"]
  ["email"].value;
  if(x === ""){
    alert("Please fill email")     
    return false
  }
}

