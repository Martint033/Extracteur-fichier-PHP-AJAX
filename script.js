<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Ajax - Load</title>
  </head>
  
  <body>
    <input type="text" id="ref">
    <button id="action">Afficher</button><br />
    <div id="r">Entrez un nombre compris entre 1 et 10 pour afficher un proverbe chinois</div>

    <script src="jquery.js"></script>
    <script>
      $(function() {
        $('#action').click(function() {
          var param = 'l=' + $('#ref').val();
          $('#r').load('http://www.proverbes.php',param);
        });  
      });
      </script>
  </body>
</html>
