<?php
function dbConnect()
{
    $db = new PDO('mysql:host=localhost;dbname=expo_frida;port=3306','root','');
    return $db;
}

function getAllReservations()
{
    $db=dbConnect();
    $query=$db->query("SELECT * FROM reservation");

    return $query->fetchAll(PDO::FETCH_ASSOC);
}

function getOneReservation($id)
{

    $db = dbConnect();
    $query = $db->query("SELECT * FROM reservation WHERE id=$id");
    return $query->fetchAll(PDO::FETCH_ASSOC);
}

function addReservation($data) {
    $db = dbConnect();
    $query = "INSERT INTO reservation (nom, prenom, mail, date, heure, adulte, enfant) VALUES (:nom, :prenom, :mail, :date, :heure, :adulte, :enfant)";

    $stmt = $db->prepare($query);
    $stmt->bindValue(':nom', $data['nom'], PDO::PARAM_STR);
    $stmt->bindValue(':prenom', $data['prenom'], PDO::PARAM_STR);
    $stmt->bindValue(':mail', $data['mail'], PDO::PARAM_STR);
    $stmt->bindValue(':date', $data['date'], PDO::PARAM_STR);
    $stmt->bindValue(':heure', $data['heure'], PDO::PARAM_STR);
    $stmt->bindValue(':adulte', $data['billet_adulte'], PDO::PARAM_INT);
    $stmt->bindValue(':enfant', $data['billet_enfant'], PDO::PARAM_INT); 

    // Exécutez la requête préparée
    $stmt->execute();

    // Si vous souhaitez rediriger l'utilisateur après l'insertion, vous pouvez le faire ici
    // header('Location: ../admin.php?succes');
    // exit;
}



function deleteReservation($id)
{
    $db = dbConnect();
    $query = $db->prepare("DELETE FROM reservation WHERE id=:id");
    $query->bindValue(':id', $id, PDO::PARAM_INT);
    $query->execute();
    header('Location: admin.php');
    exit(); // Exit after redirect to prevent further execution

}
?>
