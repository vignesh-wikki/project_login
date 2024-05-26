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


include_once "../models/user.php";
include_once "../config/dbConfig.php";

class UserController
{
    public function register($data)
    {
        $database = new Database();
        $db = $database->getConnection();

        $user = new User($db);
        $user->username = $data->username;
        $user->email = $data->email;
        $user->password = $data->password;

        if ($user->register()) {
            return json_encode(["message" => "Registration successful."]);
        } else {
            return json_encode(["message" => "Error: Could not register user."]);
        }
    }

    public function login($data)
    {
        $database = new Database();
        $db = $database->getConnection();

        $user = new User($db);
        $user->email = $data->email; // Allows login with email or username
        $user->password = $data->password;
        
        if ($user->login()) {
            if (session_status() == PHP_SESSION_NONE) {
                session_start();
            }
            
            $_SESSION['email']=$user->email;
            return json_encode(["message" => "Login successful."]);
        } else {
            return json_encode(["message" => "Invalid username or password."]);
        }
    }

    public function logout()
    {
        session_start();
        session_unset();
        session_destroy();
        return json_encode(["message" => "Logout successful."]);
    }
}
