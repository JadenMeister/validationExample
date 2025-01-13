const signupForm = document.getElementById("signupForm");
const userId = document.getElementById("userId");
const email = document.getElementById("userEmail");
const password = document.getElementById("userPw");
const passwordCheck= document.getElementById("userPwCheck");
const checkbox = document.getElementById("personal")



const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")
const passwordCheckError = document.getElementById("PwCheckError")
const uesrIdError = document.getElementById("userIdError")



signupForm.addEventListener("submit", function (e){
  let isValid = true;

  const idRegex = /[ \{\}\[\]\/?.,;:|\)*~`!^\_+┼<>@\#$%&\'\"\\\(\=]/gi; 

  if(idRegex.test(userId.value)){
    uesrIdError.style.display = "block";
    isValid = false;

  } else{
    uesrIdError.style.display = "none";
  }




  //email Validation

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email.value)){
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
    
  }


  // password Validation
  const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[A-Za-z]).{8,}$/;
  if(!passwordRegex.test(password.value)){
    passwordError.style.display = "block";
    isValid = false;
  } else {
    passwordError.style.display = "none";
  }

  // password Check

  if(password.vaule !== passwordCheck.value){
    passwordCheckError.style.display ="block";
    isValid = false;
  } else{
    passwordCheckError.style.display = "none";
  }


    //checkbox

    if(checkbox.checked) {

    } else{
      alert("개인정보 수집에 동의해주세요")
      isValid = false;
    }
  

  if (!isValid) {
    e.preventDefault()
  }



});






