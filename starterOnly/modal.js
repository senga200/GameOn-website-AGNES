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
const erreur = document.getElementsByClassName("erreur")
const first = document.getElementById("first");
const last  = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkCG = document.querySelector(".checkbox-icon");

//MESSAGES D ERREUR PERSONNALISES 
if (first == ""){
first.setCustomValidity("votre nom comporte plus de 2 lettres");
} else {
  alert('formulaire envoyé');
}


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




