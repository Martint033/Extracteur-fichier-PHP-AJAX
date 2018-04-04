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
<<<<<<< HEAD
$nb-fichiers = 0

if($dossier = opendir('fichiers-externe'))
{
    while(false !== ($fichier = readdir($dossier))){
        echo$fichier;
        $nb-fichiers++;
        echo $nb-fichiers;
    }
}
=======

if($dossier = opendir('fichiers-externe')){
    while(false !== ($fichier = readdir($dossier))){
        if($fichier != '.' && $fichier != '..' && $fichier != 'index.php'){
            echo $fichier;
            echo ", ";
        }
    }
}   
else { echo "dossier introuvable"; }

<<<<<<< HEAD
else { echo"erreur ouverture dossier"; }
>>>>>>> 4cbd94d994b3c4a9f6c119dfa67eb6d5f5a0c72e
=======
closedir($dossier);
>>>>>>> 922fb5b034d277e9bb81b6a52e0c0f2f23ab1976
?>

</body>
</html>
