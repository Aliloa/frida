<?php

require('api_model.php');

$request_method = $_SERVER["REQUEST_METHOD"];

switch ($request_method) {

    case 'GET':
       if (isset($_GET["id"])){
        $result=getOneReservation($_GET["id"]);
       } else {
        $result=getAllReservations();
       }
       header('Content-Type: application/json');
        echo json_encode($result);
        break;
};

?>