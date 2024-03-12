// Fonction pour effectuer une requête à l'API et afficher les données
function afficherReservations() {
    fetch('api/reservations.php')
        .then(response => response.json())
        .then(data => {
            const reservationsBody = document.getElementById('reservationsBody');
            // Boucle à travers les données et crée des lignes de tableau pour chaque réservation
            data.forEach(reservation => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${reservation.id}</td>
                    <td>${reservation.nom}</td>
                    <td>${reservation.mail}</td>
                    <td> 
                <form action="api/reservations.php" method="DELETE">
                <input type='hidden' name='id' value='${reservation.id}'>
    <button type='submit' name='deleteBtn' class='deleteBtn'>Supprimer</button>
    </form></td>
                `; 
                reservationsBody.appendChild(row);
            });
            
        })
        .catch(error => console.error('Erreur lors de la récupération des données :', error));
}

// Appel de la fonction pour afficher les réservations lors du chargement de la page
afficherReservations();