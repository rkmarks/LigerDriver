<?php
	$db_user = "Serv";  //MySql Username
	$db_pw = "MUA[0lEu-hN+"; //MySql Password
	$db_host = "localhost"; //MySql Server
	$db_tblName = "ligerDriverDB"; //Mysql Tablename
	$db_name = 'serverQueue';

	//Create mysql connection
try {
	$conn = new PDO("mysql:host=$db_host;db_name=$db_name", $db_user, $db_pw);
	//set PDO error mode exception
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	echo "Connected successfully";
	}
catch(PDOException $e)
	{
		echo "Connection Failed: " . $e->getMessage();
	}
?>
