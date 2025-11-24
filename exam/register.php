<?php
session_start();

if($_SERVER["REQUEST_METHOD"] == "POST"){

    if($_SESSION["captcha_code"] != $_POST["captcha"]){
        echo "Incorrect captcha";
    }

    $data = [
        "email" => $_POST["email"],
        "password" => $_POST["password"]
    ];

    $curl = curl_init("http://localhost:5000/register");

    curl_setopt($curl,CURLOPT_POST,true);
    curl_setopt($curl,CURLOPT_POSTFIELDS,json_encode($data));
    curl_setopt($curl,CURLOPT_HTTPHEADER,["Content-Type: application/json"]);
    curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);

    $res = curl_exec($curl);

    $data = json_decode($res);
    echo $data->message;
}

?>


<form method="POST">
    Email : <input type="email" name="email"/><br>
    Password : <input type="password" name="password"/><br>
    <img src="captcha.php" /><br>
    Enter Captcha Code : <input name="captcha"/>
    <input type="submit" value="Register">
</form>