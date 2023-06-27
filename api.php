<?php
require 'aws/aws-autoloader.php';
// echo 'Hello';
// exit(0);
$conn = new PDO("mysql:dbname=app;host=database-app.c3xbyobc3hvt.eu-north-1.rds.amazonaws.com", "admin", "admin123") or exit(-1);


if ($_SERVER["REQUEST_METHOD"] === 'POST') {
    $token = $_POST["token"];
    $id = $_POST["id"];
    $value = $_POST["value"];
    if (! isset($token)) {
        echo "<h1>Sin autorizar</h1>";
        exit(-1);
    }
    // echo "Hello";
    $results = $conn->query("insert into measurements (device_id, time, value) values (" . $id . ", now(), " . $value . ")");
    echo json_encode($results);
}

else {
    $token = $_GET["token"];
    $id = $_GET["id"];
    $results = $conn->query("select m.* from measurements m inner join devices d on m.device_id = d.id where d.id = ". $id)->fetchAll();
    echo json_encode($results);
}


?>