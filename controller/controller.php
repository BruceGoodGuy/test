<?php
	require_once("../../model/database.php");
	class controller extends database
	{
		public function homeController(){
			$sql = "SELECT * FROM user ORDER BY first_name";
			$getList = parent::getList($sql);
			return "{\"users\":".json_encode($getList)."}";
		}
		public function productController(){
			$sql = "SELECT * FROM product ORDER BY name";
			$getProduct = parent::getList($sql);
			return "{\"product\":".json_encode($getProduct)."}";
		}
		public function pre_update_userController($id){
			$sql = "SELECT * FROM user WHERE id = $id";
			$getPreUpdate = parent::getOneRow($sql);
			return "{\"user\":".json_encode($getPreUpdate)."}";
		}
		public function process_update($id, $first, $last, $email){
			$sql = "UPDATE user SET first_name = '$first', last_name = '$last', email = '$email' WHERE id = $id";
			$getUpdate = parent::getUpdate($sql);
			return $getUpdate;
		}

	}
?>