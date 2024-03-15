<?php
require('model.php');

$request_method = $_SERVER["REQUEST_METHOD"];

switch ($request_method) {
    case 'GET':
        if (isset($_GET["id"])) {
            $result = getOneReservation($_GET["id"]);
        } else {
            $result = getAllReservations();
        }
        header('Content-Type: application/json');
        echo json_encode($result);
        break;

        case 'POST':
            var_dump('methode post detecté');

    $url = 'reservations.php';
    $data = json_decode(file_get_contents('php://input'), true);
    var_dump($data);

                // addReservations($_POST['nom'], $_POST['prenom'], $_POST['mail'], $_POST['date'], $_POST['heure'], $_POST['billet_adulte'], $_POST['billet_enfant']);
                $data = json_decode(file_get_contents('php://input'), true);
                var_dump($data);
                $id = addReservations($data);
                http_response_code(201);
                echo json_encode ([
                    'message' => 'Billet reservé',
                    'id' => $id
                ]);
                
                //A QUOI CA SERT 
    // $data = array(
    //     'nom' => $nom,
    //     'prenom' => $prenom,
    //     'mail' => $mail,
    //     'date' => $date,
    //     'heure' => $heure,
    //     'adulte' => $billet_adulte,
    //     'enfant' => $billet_enfant,
    // );

    $options = array(
        'http' => array(
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        )
    );

    // $context = stream_context_create($options);
    // $result = file_get_contents($url, false, $context); 
    // if ($result === false) {
    //     echo "Error: Failed to fetch data from API";
    //     // or handle the error in another appropriate way
    // } else {
    //     // Debugging: Display API response
    //     var_dump($result);
    // }
            break;

        case 'DELETE':
            // $id = intval($_GET['id']);
            // deleteReservation($id);
            echo "pd";
            break;
            //DEMANDER AU PROF COMMENT FAIRE POUR PRENDRE EN COMPTE LA METHODE DELETE PARCE QUE DANS LES FORM HTML Y A QUE GET ET POST QUI EXISTE
            default:
            http_response_code(405);
            header('Allow: GET, POST, DELETE');
            echo json_encode([
                'message' => 'method not allowed'
            ]);
}

?>