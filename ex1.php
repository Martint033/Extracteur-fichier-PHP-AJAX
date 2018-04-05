<?php

echo '<?xml version"1.0" encoding="UTF-8" standalone="yes" ?>';
echo '<response>';

// if($dossier = opendir ('fichiers-externe')){
//     while(false !== ($elements= readdir($dossier))){
//         if($elements != '.' && $elements != '..' && $elements != 'index.php')
//         {
//             echo'<br><a href="fichiers-externe/'.$elements.'">'.$elements.'</a>' ;
//         }
//     }
//     closedir($dossier);
// } else {
//     echo 'Dossier introuvable';
// } 
//  echo '</response>';


$folderContent = array("listFiles"=>"", "listDir" =>"");
$folderContent["listFiles"] = array_filter (glob("*"), "is_file");
$folderContent["listDir"] = array_filter (glob("*"), "is_dir");
echo json_encode ($folderContent);

?>