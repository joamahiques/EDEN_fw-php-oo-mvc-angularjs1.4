<?php 
	
	$query="SELECT nombre from casas order by provincia";
	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
	$arr = array();
	if($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			$arr[] = $row;	
		}
	}
	
	echo $json_response = json_encode($arr);
