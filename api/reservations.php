<?php
// Allow requests from any origin
header("Access-Control-Allow-Origin: http://localhost:3000");

// Allow the specified methods
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");

// Allow the specified headers
header("Access-Control-Allow-Headers: Content-Type");

// Respond to OPTIONS requests with a 200 OK status
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

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

                $data = json_decode(file_get_contents('php://input'), true);
                if (!empty($data)) {
                    // Extraire les données de la requête
                    $nom = $data['nom'];
                    $prenom = $data['prenom'];
                    $mail = $data['mail'];
                    $date = $data['date'];
                    $heure = $data['heure'];
                    $adulte = $data['billet_adulte'];
                    $enfant = $data['billet_enfant'];

 // Répondre avec un code de succès et les données JSON
 http_response_code(201);
 header('Content-Type: application/json');
 echo json_encode([
     'message' => 'Réservation ajoutée avec succès',
 ]);
} else {
 // Répondre avec un code d'erreur si les données de la requête sont vides
 http_response_code(400);
 echo json_encode(['message' => 'Les données de la requête sont vides']);
}
                break;

        case 'DELETE':
            $id = intval($_GET['id']);
            deleteReservation($id);
            // Respond with success message
            http_response_code(200);
            echo json_encode(['message' => 'Reservation supprimée avec succès']);
            break;

            default:
            http_response_code(405);
            header('Allow: GET, POST, DELETE');
            echo json_encode([
                'message' => 'method not allowed'
            ]);
}

?>