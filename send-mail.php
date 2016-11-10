<?php $name = $_POST['name']; $email = $_POST['email']; $phone =
$_POST['telephone']; $message = $_POST['comments']; $from = 'From:
huerta.com.ar'; $to = 'hola@la-huerta.co'; $subject = 'Nuevo Mensaje de la Web';
$body = "From: $name\n E-Mail: $email\n Teléfono: $phone\n Message:\n $message";

     $headers = 'From: '.$email."\r\n".

     'Reply-To: '.$email."\r\n" .

     'X-Mailer: PHP/' . phpversion();

     mail($to, $subject, $body, $headers);


$user_name = "huerta_decaro";
$password = "huerta1986";
$database = "huerta_bbdd";
$server = "10.0.10.19";

mysql_connect("$server","$user_name","$password");

mysql_select_db("$database");

$order = mysql_query("INSERT INTO contactos (name, email, phone, comments) VALUES ('$name', '$email','$phone','$message')");

mysql_query($order);
?>
