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

const first = document.getElementById("first");
const last  = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkCG = document.querySelector(".checkbox-icon");
const checkbox1 = document.getElementById("checkbox1");
const checkboxError = document.getElementById("checkboxError");

const submit = document.getElementById("btn-submit");


submit.addEventListener('click',btnValid);

function btnValid(e){

//PRENOM MANQUANT - FORMAT INCORRECT
const prenomManquant = document.getElementById("prenomManquant");
const prenomRegex = /^[a-zA-Z][a-zéèêçîï]+([-'\s][a-zA-Z][a-zéèêçîï]+)?/;

  if (first.validity.valueMissing){
    e.preventDefault();
    prenomManquant.textContent = "Merci de renseigner votre prénom";  
    prenomManquant.style.color ="red";
  }else if (prenomRegex.test(first.value)==false){
    e.preventDefault();
    prenomManquant.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    prenomManquant.style.color ="red";
  }

    //NOM MANQUANT - FORMAT INCORRECT
  const nomManquant = document.getElementById("nomManquant");
  const nomRegex = /^[a-zA-Z][a-zéèêçîï]+([-'\s][a-zA-Z][a-zéèêçîï]+)?/;

    if (last.validity.valueMissing){
      e.preventDefault();
      nomManquant.textContent = "Merci de renseigner votre nom";  
      nomManquant.style.color ="red";
    } else if (nomRegex.test(last.value)==false){
      e.preventDefault();
      nomManquant.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
      nomManquant.style.color ="red";
    }

      //EMAIL MANQUANT - FORMAT INCORRECT
  const mailManquant = document.getElementById("mailManquant");
  const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (email.validity.valueMissing){
      e.preventDefault();
      mailManquant.textContent = "Merci de renseigner votre e-mail";  
      mailManquant.style.color ="red";
    } else if (mailRegex.test(email.value)==false){
      e.preventDefault();
      mailManquant.textContent = "format incorrect";
      mailManquant.style.color ="red";
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

            //QUANTITE MANQUANTE - FORMAT INCORRECT
  const quantiteManquante = document.getElementById("quantiteManquante");
  const quantiteRegex = /^[1-9]?[0-9]{1}$|^100$/;

    if (quantity.validity.valueMissing){
      e.preventDefault();
      quantiteManquante.textContent = "Merci de compléter le nombre de tournois";  
      quantiteManquante.style.color ="red";
    } else if (quantiteRegex.test(quantity.value)==false){
      e.preventDefault();
      quantiteManquante.textContent = "format incorrect";
      quantiteManquante.style.color ="red";
    }

          //CG CHECK 
  const checkboxError = document.getElementById("checkboxError");;
       
    if (checkbox1.checked== false){
      e.preventDefault();
      checkboxError.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";  
      checkboxError.style.color ="red";
    } else { 
      alert("merci")}

}














// inscription.addEventListener("submit", e =>{
//   e.preventDefault();
  
//   inputsValides();
// });


// //ERREUR CHAMP VIDE 
// const erreurChamp = (element, message) => {
//   const inputControl = element.parentElement;
//   const messageErreur = inputControl.querySelector(".erreur");

//   messageErreur.innerHTML = "Veuillez entrer votre nom";
//   inputControl.classList.add("erreur");
//   inputControl.classList.remove("succes");
// }


// const champValide = element => {
//   const inputControl = element.parentElement;
//   const messageErreur = inputControl.querySelector(".erreur");

//   messageErreur.innerText = "";
//   inputControl.classList.add("succes");
//   inputControl.classList.remove("erreur");
// }









// const emailValide = email => {
//   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }

// // const dateValide = date => {
// //   const regex = /(0[1-9]|1[1-9]|2[0-9]|3[01]).(0[1-9]|1[012]).([19]{2})?([1-9]{2})/;
// //   return regex.test(String(date).toLowerCase());
// // }













//let checkboxValidation = true;



// const inputsValides =() =>{
//   const firstValue = first.value.trim();
//   const lastValue = last.value.trim();
//   const emailValue = email.value.trim();
//   const birthdateValue = birthdate.value.trim();
//   const quantityValue = quantity.value.trim();
//   const checkCGValue = checkCG.value.trim();

//     if(firstValue === "") {
//       erreurChamp(first, "Veuillez renseigner votre prénom");
//     } else if(firstValue.length < 2){
//       erreurChamp(first, "Votre prénom doit comporter au moins 2 caractères");
//     } else {
//        champValide(first);
//     }
    
//     if(lastValue === "") {
//       erreurChamp(last, "Veuillez renseigner votre nom");
//     } else if(lastValue.length < 2){
//       erreurChamp(first, "Votre nom doit comporter au moins 2 caractères");
//     }else {
//       champValide(last);
//     }

//     if(emailValue === "") {
//       erreurChamp(email, "Veuillez renseigner votre email");
//     } else if(!emailValide(emailValue)){
//       erreurChamp(email, "Veuillez renseigner un email valide");
//     } else {
//       champValide(email);
//     }

//      if(birthdateValue === "") {
//      erreurChamp(birthdate, "Veuillez renseigner votre date de naissance");
//     } else if(!birthdateValue(birthdateValue)){
//       erreurChamp(birthdate, "Veuillez renseigner votre date de naissance");
//     } else {
//       champValide(birthdate);
//     }

//     if(quantityValue ==""){
//       erreurChamp(quantity, "Veuillez renseigner votre nom");
//     }else {
//       champValide(last);
//     }

//     if(!checkCGValue.checked){
//       checkboxError.innerHTML = "Les conditions doivent être acceptés.";
//     checkboxError.classList.add("errorCheckbox");
//     checkboxValidation = false;
//   } else {
//     checkboxError.innerHTML = "";
//     checkboxError.classList.remove("errorCheckbox");
//     checkboxValidation = true;
//     }
// }
















//MESSAGES D ERREUR PERSONNALISES 
// if (first == ""){
// first.setCustomValidity("votre nom comporte plus de 2 lettres");
// } else {
//   alert('formulaire envoyé');
// }


// first.addEventListener(function(e){
//   if(first.validity.typeMismatch){
//     first.setCustomValidity("votre nom");
//   }else {
//     first.setCustomValidity("");
//   }
// });

///////////////////

// fist.oninvalid = function(e) {
// 	e.target.setCustomValidity("");
// 	if (!e.target.validity.valid) {
// 		if (e.target.value.length == 0) {
// e.target.setCustomValidity("Ce champ est obligatoire");
// 		} else {
// e.target.setCustomValidity("Entrez une adresse valide. Exemple : contact@nom.com");
// 		}
// 	}
// };
////////////////////////

// if (!first.value){
//   erreur = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
// }

// if (erreur) {
//   e.preventDefault();
//   erreur.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
// } else {
// alert('formulaire envoyé');
// }

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




