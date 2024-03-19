document.addEventListener('DOMContentLoaded', () => {
    const API = 'http://localhost/frida/api/reservations.php';

    const reservationForm = document.getElementById('billeterie-formulaire');
    reservationForm.addEventListener('submit', handleSubmit);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log(data)


        fetch(API, {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la requête.');
            }
            return response.text(); // Récupérer le corps complet de la réponse
        })
        .then(text => {
            // Afficher le contenu complet de la réponse dans la console
            console.log('Réponse du serveur:', text);
        })
        .catch(error => {
            // Gestion des erreurs lors de l'envoi de la requête ou de la réception de la réponse
            console.error('Erreur lors de la requête:', error);
        });
    }
});
