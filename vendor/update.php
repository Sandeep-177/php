<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Student Information</title>
</head>
<body>
    <h1>Update Student Information</h1>
    
    <form action="post.php" method="post">
        <label for="iid">ID:</label>
        <input type="text" id="iid" name="iid" required><br><br>

        <label for="iname">Name:</label>
        <input type="text" id="iname" name="iname" required><br><br>

        <label for="igender">Gender:</label>
        <input type="text" id="igender" name="igender" required><br><br>

        <label for="iage">Age:</label>
        <input type="number" id="iage" name="iage" required><br><br>

        <button type="submit">UPDATE</button>
    </form>
</body>
</html>
