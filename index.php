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

$nbf = 0;

if($dossier = opendir('fichiers-externe'))
{
    while(false !== ($fichier = readdir($dossier))){
        if($fichier != '.' && $fichier != '..' && $fichier != 'index.php'){
            echo$fichier;
        $nbf++;
        }
        
    }
    echo 'nb fichiers'; echo "$nbf";
}


if ($monfichier = fopen('fichiers-externe/fichier1.txt', 'r')){
    echo fgets($monfichier);
    fclose($monfichier);
}


closedir($dossier);
?>

</body>
</html>
