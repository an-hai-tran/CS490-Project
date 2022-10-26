<?php 
session_start();
$question = $_POST['question'];
$input = $_POST['input'];
$output = $_POST['output'];

$data = array(
    'username' => $_SESSION['username'],
    'question' => $question,
    'input' => $input,
    'output' => $output,
    'message' => "NewQuestion",
);

$cURLConnection = curl_init('https://afsaccess4.njit.edu/~nk569/CS490/main.php');
curl_setopt($cURLConnection, CURLOPT_POST, true);
curl_setopt($cURLConnection, CURLOPT_POSTFIELDS, $data);
curl_setopt($cURLConnection, CURLOPT_RETURNTRANSFER, true);

$apiResponse = curl_exec($cURLConnection);
curl_close($cURLConnection);

$response = json_decode($apiResponse, true);

$fetchReturnData = array(
    'isValidQuestion' => $response["isValidQuestion"],
);

die(json_encode([
  'data' => $fetchReturnData,
]));
?>