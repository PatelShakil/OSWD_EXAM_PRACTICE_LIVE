<?php

$curl = curl_init("http://localhost:5000/product/get");
curl_setopt($curl,CURLOPT_POST,false);
curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
curl_setopt($curl,CURLOPT_HTTPHEADER,["Content-Type: application/json"]);

$res = curl_exec($curl);
$products = json_decode($res);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Products</title>
</head>

<body>
    <h3>Products</h3>

    <table>
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <?php 
            foreach($products as $element){ ?>
                <tr>
                    <td><img src="http://localhost:5000/<?php echo $element->photo; ?>" width="100" height="100" /></td>
                    <td>
                        <?php echo $element->name; ?>
                    </td>
                    <td>
                       <?php echo $element->category->name; ?>
                    </td>
                    <td>
<?php echo $element->price; ?>                    </td>
                    <td>
                        <a href="/product/delete/<?php echo $element->_id; ?>">Delete</a>
                    </td>
                </tr>

                <?php } ?>
        </tbody>
    </table>
</body>

</html>