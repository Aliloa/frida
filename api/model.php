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
    // $query = $db->prepare("INSERT INTO reservation (nom, prenom, mail, date, heure, adulte, enfant) VALUES (:nom, :prenom, :mail, :date, :heure, :adulte, :enfant)");

    // $query->bindValue(':nom', $nom, PDO::PARAM_STR);
    // $query->bindValue(':prenom', $prenom, PDO::PARAM_STR);
    // $query->bindValue(':mail', $mail, PDO::PARAM_STR);
    // $query->bindValue(':date', $date, PDO::PARAM_STR);
    // $query->bindValue(':heure', $heure, PDO::PARAM_STR);
    // $query->bindValue(':adulte', $billet_adulte, PDO::PARAM_INT);
    // $query->bindValue(':enfant', $billet_enfant, PDO::PARAM_INT); 

    // $query->execute();
//A QUOI CA SERT 
    $url = 'reservations.php';
    $data = array(
        'nom' => $nom,
        'prenom' => $prenom,
        'mail' => $mail,
        'date' => $date,
        'heure' => $heure,
        'adulte' => $billet_adulte,
        'enfant' => $billet_enfant,
    );

    $options = array(
        'http' => array(
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        )
    );

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context); 
    if ($result === false) {
        echo "Error: Failed to fetch data from API";
        // or handle the error in another appropriate way
    } else {
        // Debugging: Display API response
        var_dump($result);
    }

    // var_dump($data);

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
