<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $conn=mysqli_connect('localhost','root','','student');
    $data= "select * from test";
    $query=mysqli_query($conn,$data);
    $count=mysqli_num_rows($query);
    echo $count;
    // if ($count>0) {
    //     for ($i=0; $i < $count ; $i++) { 
    //         $save=mysqli_fetch_assoc($query);
    //         echo $save['Complain_No'].$save['Category'].$save['Subcategory'].$save['Location'].$save['Address'].$save['Landmark'].$save['Customer Name'].$save['Email Id'].$save['Contact_No'].$save['Order Date'].$save['Order Status'].$save['Action'];
    //     }
    // }
    // mysqli_close($conn);
    ?>
    <table border="2">
        <tr>
            <th>Complian No</th>
            <th>Category</th>
            <th>Sub-category</th>
            <th>Location</th>
            <th>Address</th>
            <th>Landmark</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Contact No</th>
            <th>Order Date</th>
            <th>Order Status</th><?php  ?>
            <th>Action</th>
        </tr>
        <?php
        if ($count>0) {
            for ($i=0; $i < $count ; $i++) { 
                $save=mysqli_fetch_assoc($query);
        ?>
        <tr>
            <td><?php echo $save['Complain_No'] ?></td>
            <td><?php echo $save['Category'] ?></td>
            <td><?php echo $save['Subcategory'] ?></td>
            <td><?php echo $save['Location'] ?></td>
            <td><?php echo $save['Address'] ?></td>
            <td><?php echo $save['Landmark'] ?></td>
            <td><?php echo $save['Customer Name'] ?></td>
            <td><?php echo $save['Email Id'] ?></td>
            <td><?php echo $save['Contact_No'] ?></td>
            <td><?php echo $save['Order Date'] ?></td>
            <td><?php echo $save['Order Status'] ?></td>
            <td><?php echo $save['Action'] ?></td>
        </tr>
        <!-- <tr>
            <td><?php echo $save['Complain_No'] ?></td>
            <td>tw0</td>
            <td>three</td>
            <td>four</td>
            <td>five</td>
            <td>six</td>
            <td>seven</td>
            <td>eight</td>
            <td>nine</td>
            <td>ten</td>
            <td>eleven</td>
            <td>12</td>
        </tr> -->
        <?php } } ?>
    </table>
    <?php mysqli_close($conn); ?>
</body>
</html>