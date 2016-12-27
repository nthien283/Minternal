function validateAndSubmitForm() {
  if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('message').value == "" || document.getElementById('company').value == ""){
    document.getElementById('popup-message').innerText = "Please fill all fields";
    document.getElementById('thank-you').style.display = "block";
  } else {
    submitted=true;
    document.getElementById('form').submit();
  }
}
//Function To Display Popup
function showDemoForm() {
  document.getElementById('abc').style.display = "block";
}

function closeDemoForm(){
  document.getElementById('abc').style.display = "none";
}

function closeNotification(){
  document.getElementById('thank-you').style.display = "none";
}

function showSuccessfulMessage(){
  document.getElementById('abc').style.display = "none";
  document.getElementById('popup-message').innerText = "Thank you. Someone from the Summit Team will get in touch with you.";
  document.getElementById('thank-you').style.display = "block";
}
