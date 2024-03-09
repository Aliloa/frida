// document.addEventListener("DOMContentLoaded", function() {
// // Pour la partie interactif du calendrier:

// // Obtention de la date d'aujourd'hui
// var today = new Date();

// // Obtention du jour, du mois et de l'année
// var day = today.getDate(); 
// var month = today.getMonth() + 1; // Janvier est 0, donc +1
// var year = today.getFullYear(); 

// if (day < 10) {
//     day = '0' + day; //ajout un zéro devant
// }
// if (month < 10) {
//     month = '0' + month; //  ajoute un zéro devant
// }

// // Selection de la date minimale dans le champ
// document.getElementById("date_calendrier").setAttribute("min", year + '-' + month + '-' + day);

// $(document).ready(function() {
//     // Cacher la partie 2 (Billets) au chargement de la page
//     $('#part_2').hide();
    
//     // Lorsque le bouton "Suivant" est cliqué
//     $(".button-form").click(function() {
//         // Valider la première partie du formulaire
//         var isValid = validatePart1();
        
//         // Si la première partie du formulaire est valide
//         if (isValid) {
//             // Cacher la partie 1
//             $('#part_1').hide();
//             // Afficher la partie 2
//             $('#part_2').fadeIn(1000);
//             // Mettre à jour le chemin de navigation
//             $('#chemin_date').removeClass('chemin_active');
//             $('#chemin_billet').addClass('chemin_active');
//         }
//     });
    
//     // Fonction pour valider la première partie du formulaire
//     function validatePart1() {
//         // Vérifier si la date est sélectionnée
//         var date = $('#date_calendrier').val();
//         if (date === '') {
//             $('.error-1').text('Veuillez choisir une date.');
//             return false;
//         }
        
//         // Vérifier si un horaire est sélectionné
//         var horaire = $("input[name='horaire']:checked").val();
//         if (!horaire) {
//             $('.error-2').text('Veuillez choisir un horaire.');
//             return false;
//         }
        
//         // Si tout est valide, retourner true
//         return true;
//     }
// });

// // le compteur 


// let countAdulte = document.getElementById('countAdulte');
// let countEnfant = document.getElementById('countEnfant');
// let addButtonAdulte = document.getElementById('addAdulte');
// let substractButtonAdulte = document.getElementById('substractAdulte');
// let addButtonEnfant = document.getElementById('addEnfant');
// let substractButtonEnfant = document.getElementById('substractEnfant');
// let countAdulteValue = 0;
// let countEnfantValue = 0;

// addButtonAdulte.addEventListener('click', () => {
//     if (countAdulteValue < 10) {
//         countAdulteValue++;
//         countAdulte.innerText = countAdulteValue;
//     }
// });

// substractButtonAdulte.addEventListener('click', () => {
//     if (countAdulteValue > 0) {
//         countAdulteValue--;
//         countAdulte.innerText = countAdulteValue;
//     }
// });

// addButtonEnfant.addEventListener('click', () => {
//     if (countEnfantValue < 10) {
//         countEnfantValue++;
//         countEnfant.innerText = countEnfantValue;
//     }
// });

// substractButtonEnfant.addEventListener('click', () => {
//     if (countEnfantValue > 0) {
//         countEnfantValue--;
//         countEnfant.innerText = countEnfantValue;
//     }
// });
   
    
// });

//----------VERIFIER SI LES CHAMPS SONT BIEN ENTRES AVANT DE FAIRE SUIVANT
var dateInput = document.getElementById('date_calendrier');
var heureInputs = document.querySelectorAll('input[name="heure"]');
var suivantButtonOne = document.querySelector('.suivant1');

// fonction qui vérifie si les input sont bien entrés
function checkInputs() {
    var dateFilled = dateInput.value.trim() !== '';
    var heureFilled = Array.from(heureInputs).some(input => input.checked);
    suivantButtonOne.disabled = !(dateFilled && heureFilled);
}

// verification
dateInput.addEventListener('input', checkInputs);
heureInputs.forEach(input => input.addEventListener('change', checkInputs));

// -----------------------------------------------------------------------PARTIE 2

var adulte = document.querySelector('.billet_adulte');
var enfant = document.querySelector('.billet_enfant');
var suivantButtonTwo = document.querySelector('.suivant2');

// fonction qui vérifie si les input sont bien entrés
function checkInputsTwo() {
    var adulteFilled = adulte.value.trim() !== '' && parseInt(adulte.value.trim()) >= 1;
    var enfantFilled = enfant.value.trim() !== '';
    var totalTickets = parseInt(adulte.value.trim()) + parseInt(enfant.value.trim()); //vérifier si il n'y a pas plus de 10 visiteurs au total
    suivantButtonTwo.disabled = !(adulteFilled && enfantFilled) || totalTickets > 10;
}

// verification
adulte.addEventListener('input', checkInputsTwo);
enfant.addEventListener('input', checkInputsTwo);

    //---------------------------------------------------------------------------- SLIDER AVC GSAP
    suivantButtonOne.addEventListener('click', function() {
        gsap.to("form", {
          x: "-100%",
          ease: "none"
        });
        document.getElementById('etape1').classList.remove('etape_active');
        document.getElementById('etape2').classList.add('etape_active');        
      });

      suivantButtonTwo.addEventListener('click', function() {
        gsap.to("form", {
          x: "-200%",
          ease: "none"
        });
        document.getElementById('etape2').classList.remove('etape_active');
        document.getElementById('etape3').classList.add('etape_active');

      });
      
      
    
