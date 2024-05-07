<?php
$host = 'db';
$user = 'user';
$pass = 'password';
 
$conn = new mysqli($host, $user, $pass);
if ($conn->connect_error) {
    echo "Connection failed";
} else {
    echo "Connected to MySQL server successfully!";
}
?>