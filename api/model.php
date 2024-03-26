<?php

require 'vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function dbConnect()
{
    $db = new PDO('mysql:host=localhost;dbname=expo_frida;port=3306','root','');
    return $db;
}

function authenticateRequest() {
    $token = $_SERVER['HTTP_AUTHORIZATION'] ?? null;

    // var_dump($_SERVER['HTTP_AUTHORIZATION']);
    // echo $token;

    if (!$token) {
        http_response_code(401);
        echo json_encode(["message" => "Pas de token"]);
        exit();
    }

    try {
        $key='mlpkfz8bal';
        $decoded = JWT::decode($token, new Key($key, 'HS256'));
        // $decoded = JWT::decode($token, 'mlpkfz8bal', ['HS256']);
        // echo json_encode(["decoded_token" => $decoded]);
    } catch (Exception $e) {
        http_response_code(401);
        echo json_encode(["message" => "Invalid token: " . $e->getMessage()]);
        exit();
    }
}

function getAllReservations()
{
    $db=dbConnect();
    $query = $db->query("SELECT * FROM reservation ORDER BY date ");

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
}



function deleteReservation($id)
{
    $db = dbConnect();
    $query = $db->prepare("DELETE FROM reservation WHERE id=:id");
    $query->bindValue(':id', $id, PDO::PARAM_INT);
    $query->execute();
    exit(); 
}

function envoiMail($data)
{
    $mailTo = $data['mail'];
    $mailFrom = "exhibition@iconicfridakahlo.fr";
    
    $subject = "Réservation exposition Frida Kahlo";

    $headers = "From: $mailFrom\r\n";
    $headers .= "Reply-To: $mailFrom\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Message HTML pour le client
    $message = "Merci de votre réservation" . $data['prenom'] . " " . $data['nom'] . "Récapitulatif:<br> date:" . $data['date'] . "<br>heure:" . $data['heure'] . "<br>billets enfant:" . $data['billet_enfant'] . "<br>billets adulte:" . $data['billet_adulte'];

    // Envoyer l'e-mail
    mail($mailTo, $subject, $message, $headers);
}
?>
