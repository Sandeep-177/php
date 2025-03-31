<?php
$conn = mysqli_connect('localhost', 'root', '', 'student');

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$iid = $_POST['iid'];
$iname = $_POST['iname'];
$igender = $_POST['igender'];
$iage = $_POST['iage'];

// Use prepared statements to avoid SQL injection
$query = "UPDATE dem SET name=?, gender=?, age=? WHERE id=?";
$stmt = mysqli_prepare($conn, $query);

if ($stmt === false) {
    die("Error preparing the statement: " . mysqli_error($conn));
}

// Bind parameters
mysqli_stmt_bind_param($stmt, "ssii", $iname, $igender, $iage, $iid);

// Execute the query
if (mysqli_stmt_execute($stmt)) {
    $affected_rows = mysqli_affected_rows($conn);
    if ($affected_rows > 0) {
        echo "Data updated successfully.";
    } else {
        echo "No records found with the provided ID. Data not updated.";
    }
} else {
    echo "Data updation failed: " . mysqli_error($conn);
}

mysqli_stmt_close($stmt);
mysqli_close($conn);
?>
