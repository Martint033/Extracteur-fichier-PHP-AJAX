<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<?php
$nb-fichiers = 0

if($dossier = opendir('fichiers-externe'))
{
    while(false !== ($fichier = readdir($dossier))){
        echo$fichier;
        $nb-fichiers++;
        echo $nb-fichiers;
    }
}
?>

</body>
</html>
