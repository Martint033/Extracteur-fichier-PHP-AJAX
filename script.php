<?php

$nbf = 0;

echo basename($dossier);

if($dossier = opendir('fichiers-externe'))
{
    while(false !== ($fichier = readdir($dossier))){
        if($fichier != '.' && $fichier != '..' && $fichier != 'index.php'){
           // echo "<a href=\"fichiers-externe/$fichier\"> $fichier </a>";
            $nbf++;
        }

    }
    echo 'Il y a'; echo "$nbf"; echo 'fichiers';
}


// if ($monfichier = fopen('fichiers-externe')){
  //  echo fgets($monfichier);
    // fclose($monfichier);
// }


closedir($dossier);
?>