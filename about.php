<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="lfstylesheet.css">
<script src="functions.js"></script>
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>
<title>About</title>
</head>
<body>

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
  <a class="active" href="#about">About</a>
  <a href="itemadd.php">Add Items</a>
  <a href="contact.php">Contact</a>
    </div>

<h1>About this website</h1>
<p>This is a project created by Locust for school. It houses the entire collection of the Westlake Academy Lost and Found with associated timers and tags and labels and blah.</p>

</body>
</html>