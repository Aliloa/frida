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

function addReservations($name_first,$name_sec,$email){
    $db=dbConnect();
    $query=$db->prepare("INSERT INTO reservation (prenom, nom, mail) VALUES ()");

    if ($query->execute([$prenom, $nom, $mail])){
        $response = array(
            'status' => 1,
            'status_message' =>'Booking Added Successfully.'
        ); 
    }else{
        $response = array(
            'status' => 0,
            'status_message' =>'Booking Addition Failed.'
        );
}
}

function deletereservation($id)
{
    $db=dbConnect();
    $query=$db->prepare("DELETE FROM reservation WHERE id=$id");
    if ($query->execute()){
        $response = array(
            'status' => 1,
            'status_message' => 'Booking Delete Successfully'
        );
    } else {
        $response = array(
            'status' => 0,
            'status_message' => 'Booking Delete Failed'
        );
    }
    header('Content-Type: application:json');
    echo json_encode($response);
}
?>