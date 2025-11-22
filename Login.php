<?php
include "config.php";

$username  = $_POST['username'];
$birthdate = $_POST['birthdate'];
$email     = $_POST['email'];
$password  = password_hash($_POST['password'], PASSWORD_DEFAULT);

// Cek email sudah dipakai
$check = mysqli_query($conn, "SELECT * FROM users WHERE email='$email'");

if (mysqli_num_rows($check) > 0) {
    echo "<script>alert('Email already exists!'); window.location='signup.html';</script>";
    exit;
}

// Insert data
$query = "INSERT INTO users (username, birthdate, email, password)
          VALUES ('$username', '$birthdate', '$email', '$password')";

if (mysqli_query($conn, $query)) {
    echo "<script>alert('Account created successfully!'); window.location='login.html';</script>";
} else {
    echo "Error: " . mysqli_error($conn);
}
?>
