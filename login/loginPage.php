<?php 
session_start();
$username = $_POST['username'];
$password = $_POST['password'];
$_SESSION['username'] = $_POST['username'];

$data = array(
    'username' => $username,
    'password' => $password,
    'message' => "Login",
);

$cURLConnection = curl_init('https://afsaccess4.njit.edu/~nk569/CS490/main.php');
curl_setopt($cURLConnection, CURLOPT_POST, true);
curl_setopt($cURLConnection, CURLOPT_POSTFIELDS, $data);
curl_setopt($cURLConnection, CURLOPT_RETURNTRANSFER, true);

$apiResponse = curl_exec($cURLConnection);
curl_close($cURLConnection);

$response = json_decode($apiResponse, true);

$fetchReturnData = array(
    'isValidLogin' => $response["isValidLogin"],
    'role' => $response["role"],
);

die(json_encode([
  'data' => $fetchReturnData,
]));
?>