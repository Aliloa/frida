document.addEventListener("DOMContentLoaded", function() {

    $(document).ready(function() {
        // Cacher la partie 2 (Billets) au chargement de la page
        $('#part_2').hide();
        
        // Lorsque le bouton "Suivant" est cliqué
        $(".button-form").click(function() {
            // Valider la première partie du formulaire
            var isValid = validatePart1();
            
            // Si la première partie du formulaire est valide
            if (isValid) {
                // Cacher la partie 1
                $('#part_1').hide();
                // Afficher la partie 2
                $('#part_2').fadeIn(1000);
                // Mettre à jour le chemin de navigation
                $('#chemin_date').removeClass('chemin_active');
                $('#chemin_billet').addClass('chemin_active');
            }
        });
        
        // Fonction pour valider la première partie du formulaire
        function validatePart1() {
            // Vérifier si la date est sélectionnée
            var date = $('#date').val();
            if (date === '') {
                $('.error-1').text('Veuillez choisir une date.');
                return false;
            }
            
            // Vérifier si un horaire est sélectionné
            var horaire = $("input[name='horaire']:checked").val();
            if (!horaire) {
                $('.error-2').text('Veuillez choisir un horaire.');
                return false;
            }
            
            // Si tout est valide, retourner true
            return true;
        }
    });
    
});










