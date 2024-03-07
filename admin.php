<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administration</title>
</head>
<body>
    <h1>Liste des réservations</h1>
    <table id="reservationsTable">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Email</th>
                <!-- Ajoutez d'autres colonnes au besoin -->
            </tr>
        </thead>
        <tbody id="reservationsBody">
            <!-- Les données récupérées de l'API seront insérées ici -->
        </tbody>
    </table>

    <script>
        // Fonction pour effectuer une requête à l'API et afficher les données
        function afficherReservations() {
            fetch('https://divartapi.noamsebahoun.fr/controller.php')
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
                            <!-- Ajoutez d'autres colonnes au besoin -->
                        `;
                        reservationsBody.appendChild(row);
                    });
                })
                .catch(error => console.error('Erreur lors de la récupération des données :', error));
        }

        // Appel de la fonction pour afficher les réservations lors du chargement de la page
        afficherReservations();
    </script>
</body>
</html>
