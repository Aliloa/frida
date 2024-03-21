<?php
// Allow requests from any origin
header("Access-Control-Allow-Origin: http://localhost:3000");

// Allow the specified methods
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");

// Allow the specified headers
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Respond to OPTIONS requests with a 200 OK status
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

require('model.php');
require '../vendor/autoload.php'; // Assuming this is the path to your autoload.php for JWT library
use Firebase\JWT\JWT;

$request_method = $_SERVER["REQUEST_METHOD"];

switch ($request_method) {
    case 'GET':
        // authenticateRequest();
        
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
            // Appeler la fonction addReservation avec le tableau de données
            addReservation($data);
        
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
        // authenticateRequest();

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

function authenticateRequest() {
    $token = $_SERVER['HTTP_AUTHORIZATION'] ?? null;

    var_dump($_SERVER['HTTP_AUTHORIZATION']);
    var_dump($token);

    if (!$token) {
        http_response_code(401);
        echo json_encode(["message" => "Pas de token"]);
        exit();
    }

    try {
        $decoded = JWT::decode($token, 'mlpkfz8bal', array('HS256'));
        echo json_encode(["decoded_token" => $decoded]);
    } catch (Exception $e) {
        http_response_code(401);
        echo json_encode(["message" => "Invalid token: " . $e->getMessage()]);
        exit();
    }
}

?>
