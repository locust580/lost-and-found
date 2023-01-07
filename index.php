<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="lfstylesheet.css">

    <!-- Grabs item list from itemadd.html and puts them inside the #items div; put in head to avoid hoisting-->
    <script>
      function itemGrab() {
        $("#items").load("itemadd.html #itemClump");
      };
    </script>

    <script src="functions.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
    <link rel="icon" type="image/x-icon" href="lffavicon.ico">
    <title>Westlake Academy Lost and Found</title>
  </head>
  <body onload="itemGrab">
 
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
  <a class="active" href="#home">Home</a>
  <a href="about.php">About</a>
  <a href="itemadd.php">Add Items</a>
  <a href="contact.php">Contact</a>
    </div>

    <h1>WA Lost and Found</h1>
    <p>This is the home page for the Westlake Academy lost and found.</p>
    
    <div id="items">

    </div>
    

  </body>
</html>