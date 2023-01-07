<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="lfstylesheet.css">
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>
<script src="functions.js"></script>
<title>Staff Only</title>
</head>
<body id="body">

<?php
  $host_name = 'db5011453042.hosting-data.io';
  $database = 'dbs9662413';
  $user_name = 'dbu2115371';
  $password = 'walostandfound';

  $link = new mysqli($host_name, $user_name, $password, $database);

  if ($link->connect_error) {
    die('<p>Failed to connect to MySQL: '. $link->connect_error .'</p>');
  } else {
    echo '<p>Connection to MySQL server successfully established.</p>';
  }
?>

    <div class="topnav">
  <a href="index.php">Home</a>
  <a href="about.php">About</a>
  <a class="active" href="#itemadd">Add Items</a>
  <a href="contact.php">Contact</a>
    </div>

<h1>Password Please</h1>
<p>password here</p>

<script>

var percentLeft = 8;
var percentTop = 25;
var itemCount = 0;
var idForItem = "";

function itemadd(){
	const item = document.getElementById("itemClump").appendChild(document.createElement('div'));
	item.id = 'item' + itemCount;
	idForItem = item.id
	document.getElementById(idForItem).style.backgroundColor = "grey";
	document.getElementById(idForItem).style.width = "15%";
	document.getElementById(idForItem).style.height = "15%";
	document.getElementById(idForItem).style.position = "absolute";
		if (percentLeft !== 100){
			document.getElementById(idForItem).style.left = percentLeft + "%";
			document.getElementById(idForItem).style.top = percentTop + "%";
			percentLeft += 23
		} else {
			percentLeft = 8
			percentTop += 25
			document.getElementById(idForItem).style.left = percentLeft + "%";
			document.getElementById(idForItem).style.top = percentTop + "%";
			percentLeft += 23
		}
	itemCount +=1
}

</script>
<button id="submitbutton" onclick="itemadd()">Submit</button>

<div id="itemClump">

</div>

</body>
</html>