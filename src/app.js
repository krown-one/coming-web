import "./sass/main.scss";

//---------------[wow init]---------------------------------
import WOW from 'wowjs';
window.wow = new WOW.WOW({ live: false });
window.wow.init();

//---------[Send message fornt]---------------------------
var inputContactMe = document.getElementById("input_contact_me");
var btnContactMe = document.getElementById("button_contact_me");
var infoContactMe = document.getElementById("info__contact_me");

function errorContactMe(message){
  infoContactMe.innerHTML = message
  inputContactMe.classList.add('error')
}

function clearContactMe(){
  infoContactMe.innerHTML = ''
  inputContactMe.classList.remove('error')
}

window.submitContactMe = ()=>{
  clearContactMe()

  const email = inputContactMe.value
  const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

  try {
    // email is empy
    if(!email) throw new Error('tienes que envar un correo')
    // email no is email
    if(!filter.test(email)) throw new Error(`${email} no es un correo valido`)

    return true
   
  } catch (error) {
    errorContactMe(error.message)
    return false
  }
}