<?php
	class database
	{
		private $__conn;
		public function connect(){
			$dbname = "home";
			$user = "root";
			$password = "";
			$server = "localhost";
			if(!$this -> __conn)
			{
				$this -> __conn = mysqli_connect($server,$user,$password,$dbname) or die(" Cant connect database");
				mysqli_query($this->__conn, "SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");
			}
		}
		public function disconnect(){
			if ($this->__conn){
		        mysqli_close($this->__conn);
		    }
		}

		//QUERY
		//getList
		public function getList($sql)
		{
			$this -> connect();
			$return = [];
			$result = mysqli_query($this->__conn,$sql);
			while($row = mysqli_fetch_assoc($result))
			{
				$return [] = $row;	
			}
			mysqli_free_result($result);
			$this -> disconnect();
			return $return;
		}
		public function getOneRow($sql){
			$this -> connect();
			$return = [];
			$result = mysqli_query($this->__conn,$sql);
			$return = mysqli_fetch_assoc($result);
			mysqli_free_result($result);
			$this -> disconnect();
			return $return;	 
		}
		public function getUpdate($sql){
			$this -> connect();
			$result = mysqli_query($this->__conn,$sql);
			if($result)
				return true;
			$this -> disconnect();
			return false;
		}
	}
?>