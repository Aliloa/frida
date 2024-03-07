<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administration</title>
</head>
<body>
    <h1>Liste des réservations</h1>
    <table>
        <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <!-- Ajoutez d'autres colonnes au besoin -->
        </tr>
        <?php
            require('controller.php');

            // Appel à la fonction pour obtenir toutes les réservations
            $reservations = getAllReservations();

            // Parcourir chaque réservation et afficher les détails dans une ligne de tableau
            foreach ($reservations as $reservation) {
                echo "<tr>";
                echo "<td>" . $reservation['id'] . "</td>";
                // echo "<td>" . $reservation['nom'] . "</td>";
                // echo "<td>" . $reservation['email'] . "</td>";
                // Ajoutez d'autres colonnes au besoin
                echo "</tr>";
            }
        ?>
    </table>
</body>
</html>
