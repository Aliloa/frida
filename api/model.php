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

function addReservations($prenom,$bom,$mail){
    $db=dbConnect();
    $query=$db->prepare("INSERT INTO reservation (prenom, nom, mail) VALUES ()");

    $url ='api/reservations.php';
    $data = array(
    'nom' => 'valeur_nom',
    'prenom' => 'valeur_prenom',
    'date' => 'valeur_date'
    );
    $options = array(
        'http' => array(
            'header' => "Content-type: application/x-www-form-utlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        )
        );
        $context = stream_context_create($options);
        $result = file_get_contents($url, false, $context);//CODE DU PROF
        header('Location: admin.php');

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