<?php

session_start();

$code = rand(0000,9999);
$_SESSION['captcha_code'] = $code;

header("Content-Type: image/png");

$img = imagecreatetruecolor(120,40);
$txt = imagecolorallocate($img,240,240,240);

imagestring($img,5,35,14,$code,$txt);

imagepng($img);
imagedestroy($img);