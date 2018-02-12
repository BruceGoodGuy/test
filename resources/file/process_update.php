<?php
	require_once("root.php");
	$id = strip_tags($_GET["id"]);
	$first = strip_tags($_GET["first"]);
	$last = strip_tags($_GET["last"]);
	$email = strip_tags($_GET["email"]);
	if($list->process_update($id,$first,$last,$email))
		echo "Updated";
	else
		echo "Error";
?>