$(document).ready(function() {
    $('form').submit(function(event) {
        console.log("formulaire soumis");
        // Empêcher le comportement par défaut du formulaire
        event.preventDefault();

        // Récupérer les données du formulaire
        var data = {
            nom: $('#nom').val(),
            prenom: $('#prenom').val(),
            mail: $('#mail').val(),
            date: $('#date_calendrier').val(),
            heure: $('input[name="heure"]:checked').val(),
            billet_adulte: $('.billet_adulte').val(),
            billet_enfant: $('.billet_enfant').val(),
        };

        // Envoyer les données JSON à la page PHP
        $.ajax({
            type: 'POST',
            url: 'api/reservations.php',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function(response) {
                // Traiter la réponse ici si nécessaire
                console.log(response);
            },
            error: function(xhr, status, error) {
                // Gérer les erreurs ici si nécessaire
                console.error(error);
            }
        });
    });
});
