<?php
function dbConnect()
{
    $db = new PDO('mysql:host=localhost;dbname=expo_frida;port=3306','root','');
    return $db;
}

function getAllReservations()
{
    $db = dbConnect();
    $query = $db->query("SELECT * FROM reservation");
    return $query->fetchAll(PDO::FETCH_ASSOC);
}

function getOneReservation($id)
{
    $db = dbConnect();
    $query = $db->query("SELECT * FROM reservation WHERE id=$id");
    return $query->fetchAll(PDO::FETCH_ASSOC);
}

function addReservations($name_first, $name_sec, $email, $date, $horraire)
{
    $db = dbConnect();
    $query = $db->prepare("INSERT INTO reservation (prenom, nom, mail, date, heure) VALUES (?, ?, ?, ?, ?)");

    if ($query->execute([$name_first, $name_sec, $email, $date, $horraire])) {
        $response = array(
            'status' => 1,
            'status_message' => 'Booking Added Successfully.'
        );
    } else {
        $response = array(
            'status' => 0,
            'status_message' => 'Booking Addition Failed.'
        );
    }
}
?>
