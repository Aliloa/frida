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
    $db=dbConnect();
    $query=$db->query("SELECT * from reservation WHERE id=$id");
    return $query->fetchAll(PDO::FETCH_ASSOC);
}

?>