function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName("close")[0];

//CONST FORMULAIRE
const inscription = document.querySelector('#inscription');

const email = document.getElementById("email");
const last  = document.getElementById("last");
const quantity = document.getElementById("quantity");
const checkCG = document.querySelector(".checkbox-icon");
const checkbox1 = document.getElementById("checkbox1");


///////////////////VALIDATION PRENOM///////////////

function isValidFirst(){
  const prenomRegex = new RegExp(/^([A-Z][A-Za-z ,.'`-]{3,30})$/gm);
  const prenomManquant = document.getElementById("prenomManquant");
  const first = document.getElementById("first");
  //test de regex
  if (first.validity.valueMissing){
    prenomManquant.textContent = "Merci de renseigner votre prénom";  
    prenomManquant.style.color ="red";
    return false;
  }
  else if (prenomRegex.test(first.value)===false){
    prenomManquant.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    prenomManquant.style.color ="red";
    return false;
  } 
  else {
    prenomManquant.textContent ="Prénom Valide";
    prenomManquant.style.color ="green";
    return true;
}};

///////////////////VALIDATION NOM///////////////
function isValidLast(){
  const last  = document.getElementById("last");
  const nomManquant = document.getElementById("nomManquant");
  const nomRegex = /^[a-zA-Z][a-zéèêçîï]+([-'\s][a-zA-Z][a-zéèêçîï]+)?/;

  if (last.validity.valueMissing){
    nomManquant.textContent = "Merci de renseigner votre nom";  
    nomManquant.style.color ="red";
    return false;
  } 
  if (nomRegex.test(last.value)===false){
    nomManquant.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    nomManquant.style.color ="red";
    return false;
  }
    nomManquant.textContent ="nom Valide";
    nomManquant.style.color ="green";
    return true;
  }

///////////////////VALIDATION EMAIL///////////////

function isValidEmail(){
  const email = document.getElementById("email");
  const mailManquant = document.getElementById("mailManquant");
  const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (email.validity.valueMissing){
    e.preventDefault();
    mailManquant.textContent = "Merci de renseigner votre e-mail";  
    mailManquant.style.color ="red";
    return false;
  } 
  if (mailRegex.test(email.value)===false){
    e.preventDefault();
    mailManquant.textContent = "format incorrect";
    mailManquant.style.color ="red";
    return false;
  }
    mailManquant.textContent ="e-mail Valide";
    mailManquant.style.color ="green";
    return true;
  }  

  ///////////////////VALIDATION DATE DE NAISSANCE///////////////

function isValidDate(){
  //const dateRegex = new RegExp( /^(0[1-9]|1[0-2])-([1-9]|[12][0-9]|3[01])-(19[1-9][0-9]|20[0-4][0-9]|2015)$/);
  const dateManquante = document.getElementById("dateManquante");
  const birthdate = document.getElementById("birthdate")

  //test de regex
  if(!birthdate.value==""){
    dateManquante.textContent ="date Valide";
    dateManquante.style.color ="green";
    return true;
  
  } else {
    dateManquante.textContent = "Merci de renseigner votre date de naissance";  
    dateManquante.style.color ="red";
    return false;
  }};

  ///////////////////VALIDATION QUANTITE///////////////

  const isValidQuantity = function(inputQuantity){
    const quantityRegex = new RegExp( /^[0-9]+$/);
    const quantiteManquante = document.getElementById("quantiteManquante");
    const quantity = document.getElementById("quantity");

    if(!quantity.value==""){
      quantiteManquante.textContent ="quantité Valide";
      quantiteManquante.style.color ="green";
      return false;    
    } 
    else if (quantityRegex.test(inputQuantity.value)){
      quantiteManquante.textContent ="quantité Valide";
      quantiteManquante.style.color ="green";
      return true;
    }
    else {
      quantiteManquante.textContent = "Merci de renseigner le nombre de tournois";  
      quantiteManquante.style.color ="red";
      return false;
    }};

    ///////////////////VALIDATION CHECK CG///////////////

  const isValidCheckCG = function(){
    const checkbox1 = document.getElementById("checkbox1");
    const checkboxError = document.getElementById("checkboxError");
  
    if(checkbox1.checked== false){
      checkboxError.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
      checkboxError.style.color ="red";
      return false;    
    } 
    else {
      checkboxError.textContent = "Vous avez accepté les conditions d'utilisation";
      checkboxError.style.color ="green";
      return true;
    }};


//////////////////ADDEVENTLISTENER/////////////////////////

//ecouter la modification du prenom
inscription.first.addEventListener('change', function(){
  isValidFirst(this); 
});
//ecouter la modification du prénom
inscription.last.addEventListener('change', function(){
  isValidLast (this);
});
//ecouter la modification du mail
inscription.email.addEventListener('change', function(){
  isValidEmail (this);
});
//ecouter la modification de la date
inscription.birthdate.addEventListener('change', function(){
  isValidDate (this);
});
//ecouter la modification du nombre de tournois
inscription.quantity.addEventListener('change', function(){
  isValidQuantity (this);
});
//ecouter le check des CG
inscription.checkbox1.addEventListener('change', function(){
  isValidCheckCG (this);
});
//ecouter la soumission du formulaire
const submit = document.getElementById("btn-submit");

inscription.addEventListener('submit', function(e){
  e.preventDefault();
  if ((isValidFirst)&&(isValidLast)&&(isValidEmail)&&(isValidDate)&&(isValidQuantity)&&(isValidCheckCG)){
  inscription.submit();
 // form.style.display = "none";
  alert("merci");
}});

         //FERMER LA FENETRE FORM AVEC X
closeBtn.onclick = function(){
  modalBg.style.display = "none";
}
 //FERMER LA FENETRE FORM PARTOUT DANS WINDOW 
window.onclick = function (fermer) {
  if (fermer.target == modalBg) {
    modalBg.style.display = "none";
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

