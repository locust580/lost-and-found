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