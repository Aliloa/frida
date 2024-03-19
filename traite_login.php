<?php
// Retrieve form data
$login = $_POST['login'];
$password = $_POST['mdp'];

session_start();
$db = new PDO('mysql:host=localhost;dbname=expo_frida;port=3306','root','');
$requete =" SELECT * FROM user WHERE login=:login";
$stmt=$db->prepare($requete);
$stmt->bindValue(':login', $login, PDO::PARAM_STR);
$stmt->execute();

if ($stmt->rowCount() == 1){
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    if (password_verify($password, $result["mdp"])){
        $_SESSION["login"] = $result["login"];
        echo json_encode(["success" => true]);
        header("Location: /back");
        exit();
    } else {
        echo json_encode(["success" => false, "error" => "Incorrect password"]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Invalid username"]);
}
?>
