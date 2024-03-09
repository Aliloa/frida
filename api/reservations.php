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
            echo "fdp";
             break;
   

        case 'DELETE':
            // $id = intval($_GET['id']);
            // deleteReservation($id);
            echo "pd";
            break;
            //DEMANDER AU PROF COMMENT FAIRE POUR PRENDRE EN COMPTE LA METHODE DELETE PARCE QUE DANS LES FORM HTML Y A QUE GET ET POST QUI EXISTE
};

?>
    case 'POST':
        if (isset($_POST['name_first'], $_POST['name_sec'], $_POST['email'], $_POST['date'], $_POST['horraire'])) {
            addReservations($_POST['name_first'], $_POST['name_sec'], $_POST['email'], $_POST['date'], $_POST['horraire']);
        }
        break;
}
?>
