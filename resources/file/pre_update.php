<?php
	$id = $_GET['id'];
	require_once("root.php");
	echo $list -> pre_update_userController($id);
?>