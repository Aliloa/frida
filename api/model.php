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

function addReservations($nom, $prenom, $mail, $date, $heure, $billet_adulte, $billet_enfant) {
    $db = dbConnect();
    $query = $db->prepare("INSERT INTO reservation (nom, prenom, mail, date, heure, adulte, enfant) VALUES (:nom, :prenom, :mail, :date, :heure, :adulte, :enfant)");

    $query->bindValue(':nom', $nom, PDO::PARAM_STR);
    $query->bindValue(':prenom', $prenom, PDO::PARAM_STR);
    $query->bindValue(':mail', $mail, PDO::PARAM_STR);
    $query->bindValue(':date', $date, PDO::PARAM_STR);
    $query->bindValue(':heure', $heure, PDO::PARAM_STR);
    $query->bindValue(':adulte', $billet_adulte, PDO::PARAM_INT);
    $query->bindValue(':enfant', $billet_enfant, PDO::PARAM_INT); 

    $query->execute();

    // header('Location: ../admin.php?succes');
    exit; 
}


function deleteReservation($id)
{
    $db=dbConnect();
    $query=$db->prepare("DELETE FROM reservation WHERE id=$id");
    $stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    header('Location: admin.php');

}
?>
