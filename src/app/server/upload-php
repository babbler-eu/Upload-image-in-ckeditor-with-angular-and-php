<?php
header('Access-Control-Allow-Origin: *');

$base_dir = $_SERVER['DOCUMENT_ROOT'];  
$base_host = "http://localhost/";
$base_dir_img = $base_dir."/server/image/";
$base_host_img = $base_host."server/image/";

$target_path = $base_dir_img . $_FILES['upload']['name'];

if ( move_uploaded_file($_FILES['upload']['tmp_name'], $target_path) )
{
	$dati = array();
	$dati['url'] = $base_host_img . $_FILES['upload']['name'];
   	echo json_encode($dati);
}

?>