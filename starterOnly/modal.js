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

//NOMMER LES CONST DU FORMULAIRE
const inscription = document.getElementById("inscription");
const birthdate = document.getElementById("birthdate");
const checkCG = document.querySelector(".checkbox-icon");

const champValide= document.getElementsByClassName("champValide");
const submit = document.getElementById("btn-submit");

//CONST CHAMPS MANQUANTS -- CONST REGEX 

//PRENOM MANQUANT - FORMAT INCORRECT - CHAMP VALIDE
function isFirstValid(){
  const first = document.getElementById("first");
  const prenomManquant = document.getElementById("prenomManquant");
  const prenomRegex = /^[a-zA-Z][a-zéèêçîï]+([-'\s][a-zA-Z][a-zéèêçîï]+)?/;

  if (first.validity.valueMissing){
    e.preventDefault();
    prenomManquant.textContent = "Merci de renseigner votre prénom";  
    prenomManquant.style.color ="red";
    return false;
  }
  if (prenomRegex.test(first.value)===false){
    e.preventDefault();
    prenomManquant.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    prenomManquant.style.color ="red";
    return false;
  } 
    prenomManquant.textContent ="Prénom Valide";
    prenomManquant.style.color ="green";
    return true;
}

//NOM MANQUANT - FORMAT INCORRECT - CHAMP VALIDE
function isLastValid(){
  const last  = document.getElementById("last");
  const nomManquant = document.getElementById("nomManquant");
  const nomRegex = /^[a-zA-Z][a-zéèêçîï]+([-'\s][a-zA-Z][a-zéèêçîï]+)?/;

  if (last.validity.valueMissing){
    e.preventDefault();
    nomManquant.textContent = "Merci de renseigner votre nom";  
    nomManquant.style.color ="red";
    return false;
  } 
  if (nomRegex.test(last.value)===false){
    e.preventDefault();
    nomManquant.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    nomManquant.style.color ="red";
    return false;
  }
    nomManquant.textContent ="nom Valide";
    nomManquant.style.color ="green";
    return true;
  }

//EMAIL MANQUANT - FORMAT INCORRECT - CHAMP VALIDE
function isMailValid(){
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

    //         //DATE DE NAISSANCE MANQUANTE - FORMAT INCORRECT
    // const dateManquante = document.getElementById("dateManquante");
    // const dateRegex = /^(0[1-9]|1[1-9]|2[0-9]|3[01]).(0[1-9]|1[012]).([19]{2})?([1-9]{2})/;

    // if (birthdate.validity.valueMissing){
    //   e.preventDefault();
    //   dateManquante.textContent = "date manquante";  
    //   dateManquante.style.color ="red";
    //   } else if (dateRegex.test(birthdate.value)==false){
    //     e.preventDefault();
    //     dateManquante.textContent = "format incorrect";
    //     dateManquante.style.color ="red";
    //   }



//QUANTITE MANQUANTE - FORMAT INCORRECT - CHAMP VALIDE

function isQuantityValid(){
  const quantity = document.getElementById("quantity");
  const quantiteManquante = document.getElementById("quantiteManquante");
  const quantiteRegex = /^[1-9]?[0-9]{1}$|^100$/;

  if (quantity.validity.valueMissing){
    e.preventDefault();
    quantiteManquante.textContent = "Merci de compléter le nombre de tournois";  
    quantiteManquante.style.color ="red";
    return false;
  } 
  if (quantiteRegex.test(quantity.value)==false){
    e.preventDefault();
    quantiteManquante.textContent = "format incorrect";
    quantiteManquante.style.color ="red";
    return false;
  }
    quantiteManquante.textContent ="quantité Valide";
    quantiteManquante.style.color ="green";
    return true;
  }

//CG CHECK - UNCHECKED - CHECKED
function isCGChecked(){
  const checkbox1 = document.getElementById("checkbox1");
  const checkboxError = document.getElementById("checkboxError");


   if (checkbox1.checked== false){
      e.preventDefault();
      checkboxError.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";  
      checkboxError.style.color ="red";
      return false;

    } else { 
      checkboxError.textContent = "Vous avez accepté les conditions d'utilisation";
      checkboxError.style.color ="green";
      return true;
    }
} 




function btnValid(e){
if (isFirstValid()===true 
&& isLastValid()===true 
&& isMailValid()===true 
&& isQuantityValid()===true 
&& isCGChecked()===true){
  alert("yes");
} else{
  e.preventDefault();
  alert("no");
}
}

submit.addEventListener("click", btnValid);





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



