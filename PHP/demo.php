<html>
  <head>
    <title>PHP</title>
  </head>
  <body>
    <form action="demo.php" method="get">
      <p>Name: <input name="name" /></p>
      <p><input type="submit" value="Submit" /></p>
    </form>
    <p>Welcome to this website. Your name is <?php echo $_GET["name"]; ?>. If you don't see your name, enter your name in the name feild and click Submit.</p>
  </body>
</html>
