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
const fermer = document.querySelector(".btn-submit");

//CONST FORMULAIRE
const inscription = document.querySelector('#inscription');

///////////////////VALIDATION PRENOM///////////////

function isValidFirst(){
  const prenomRegex = new RegExp(/^[a-zA-Z][a-zéèêçîï]+([-'\s][a-zA-Z][a-zéèêçîï]+)?/);
  const prenomManquant = document.getElementById("prenomManquant");
  const first = document.getElementById("first");
 
  if (first.value==""){
    prenomManquant.textContent = "Merci de renseigner votre prénom";  
    prenomManquant.style.color ="red";
    prenomManquant.style.fontSize = "14px";
    first.style.border = "1px solid red";
    return false;
  }
  if (prenomRegex.test(first.value)===false){
    prenomManquant.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    prenomManquant.style.color ="red";
    prenomManquant.style.fontSize = "14px";
    first.style.border = "1px solid red";
    return false;
  } 
    prenomManquant.textContent ="Prénom Valide";
    prenomManquant.style.color ="green";
    prenomManquant.style.fontSize = "14px";
    first.style.border = "1px solid green";
    return true;
};

///////////////////VALIDATION NOM///////////////
function isValidLast(){
  const last  = document.getElementById("last");
  const nomManquant = document.getElementById("nomManquant");
  const nomRegex = /^[a-zA-Z][a-zéèêçîï]+([-'\s][a-zA-Z][a-zéèêçîï]+)?/;

  if (last.value==""){
    nomManquant.textContent = "Merci de renseigner votre nom";  
    nomManquant.style.color ="red";
    nomManquant.style.fontSize = "14px";
    last.style.border = "1px solid red";
    return false;
  } 
  if (nomRegex.test(last.value)===false){
    nomManquant.textContent = "Votre nom doit contenir au moins deux caractères";
    nomManquant.style.color ="red";
    nomManquant.style.fontSize = "14px";
    last.style.border = "1px solid red";
    return false;
  }
    nomManquant.textContent ="nom Valide";
    nomManquant.style.color ="green";
    nomManquant.style.fontSize = "14px";
    last.style.border = "1px solid green";
    return true;
  }

///////////////////VALIDATION EMAIL///////////////
function isValidEmail(){
  const email = document.getElementById("email");
  const mailManquant = document.getElementById("mailManquant");
  const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (email.value==""){
    mailManquant.textContent = "Merci de renseigner votre e-mail";  
    mailManquant.style.color ="red";
    mailManquant.style.fontSize = "14px";
    email.style.border = "1px solid red";
    return false;
  } 
  if (mailRegex.test(email.value)===false){
    mailManquant.textContent = "format incorrect";
    mailManquant.style.color ="red";
    mailManquant.style.fontSize = "14px";
    email.style.border = "1px solid red";
    return false;
  }
    mailManquant.textContent ="e-mail Valide";
    mailManquant.style.color ="green";
    mailManquant.style.fontSize = "14px";
    email.style.border = "1px solid green";
    return true;
  }  

  ///////////////////VALIDATION DATE DE NAISSANCE///////////////

function isValidDate(){
  //const dateRegex = new RegExp( /^(0[1-9]|1[0-2])-([1-9]|[12][0-9]|3[01])-(19[1-9][0-9]|20[0-4][0-9]|2015)$/);
  const dateManquante = document.getElementById("dateManquante");
  const birthdate = document.getElementById("birthdate")

  if(birthdate.value==""){
    dateManquante.textContent = "Merci de renseigner votre date de naissance";  
    dateManquante.style.color ="red";
    dateManquante.style.fontSize = "14px";
    birthdate.style.border = "1px solid red";
    return false;
  }
    dateManquante.textContent ="date Valide";
    dateManquante.style.color ="green";
    dateManquante.style.fontSize = "14px";
    birthdate.style.border = "1px solid green";
    return true;
  };

  ///////////////////VALIDATION QUANTITE///////////////

  function isValidQuantity(){
    const quantiteManquante = document.getElementById("quantiteManquante");
    const quantity = document.getElementById("quantity");

    if(quantity.value==""){
      quantiteManquante.textContent = "Merci de renseigner le nombre de tournois";  
      quantiteManquante.style.color ="red";
      quantiteManquante.style.fontSize = "14px";
      quantity.style.border = "1px solid red";
      return false;    
    } 
      quantiteManquante.textContent ="quantité Valide";
      quantiteManquante.style.color ="green";
      quantiteManquante.style.fontSize = "14px";
      quantity.style.border = "1px solid green";
      return true;
    };

    ///////////////////VALIDATION CHECK CG///////////////
  const isValidCheckCG = function(){
    const checkboxError = document.getElementById("checkboxError");
    const checkbox1 = document.getElementById("checkbox1");

    if(checkbox1.checked== false){
      checkboxError.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
      checkboxError.style.color ="red";
      checkboxError.style.fontSize = "14px";
      checkbox1.style.border = "1px solid red";
      return false;    
    } 
      checkboxError.textContent = "Vous avez accepté les conditions d'utilisation";
      checkboxError.style.color ="green";
      checkboxError.style.fontSize = "14px";
      checkbox1.style.border = "1px solid green";
      return true;
    };

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
inscription.addEventListener('submit', function(e){
const success = document.getElementById("success");
const successContainer = document.querySelector(".successContainer");

  e.preventDefault();
  if 
  (isValidFirst()
  &&isValidLast()
  &&isValidEmail()
  &&isValidDate()
  &&isValidQuantity()
  &&isValidCheckCG())
  {

  successContainer.style.display="block";  
  inscription.style.display = "none";
  success.innerHTML ="Merci !<br/> Votre réservation a été reçue.<br/>";
  success.style.fontSize = "22px";
}});

////FERMER LA MODAL AVEC LE BOUTON "FERMER" QUAND LE FORMULAIRE A ETE SOUMIS///
  fermer.onclick = function(){
  modalBg.style.display = "none";
}

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