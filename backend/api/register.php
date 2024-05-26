<?php
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json");
    http_response_code(200); // OK
    exit;
}
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

session_start();

include_once "../controller/userController.php";

$userController = new UserController();

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->username, $data->email, $data->password)) {
    echo json_encode(["message" => "Invalid input."]);
    exit;
}

$password_length = strlen($data->password);
if ($password_length < 6) {
    echo json_encode(["message" => "Password is too short."]);
    exit;
}

echo $userController->register($data);
