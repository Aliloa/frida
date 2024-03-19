<?php
session_start();

// Vérifiez les identifiants et définissez une variable de session si l'authentification réussit
if ($_POST['username'] === 'utilisateur' && $_POST['password'] === 'motdepasse') {
    $_SESSION['user'] = $_POST['username'];
    echo json_encode(array("success" => true));
} else {
    echo json_encode(array("success" => false));
}
?>