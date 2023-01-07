<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="lfstylesheet.css">
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>
<script src="functions.js"></script>
<title>Contact</title>
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
  <a href="about.php">About</a>
  <a href="itemadd.php">Add Items</a>
  <a class="active" href="#contact">Contact</a>
    </div>

<h1>Issues? This is the place!</h1>
<p>Here is accepted both comments for the creator of this website and a bug report page. Please don't spam this (I will find you) and if you have anything else related to the website just put it here too. Thanks.</p>
<p></p>
<a href="https://forms.gle/ekhz4gXsqt1q3w5h8" target="_blank">Google Form</a>

</body>
</html>