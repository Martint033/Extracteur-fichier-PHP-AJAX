<?php


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
 
// echo json_encode ($dossier);


if (isset($_GET["url"])){
    $folderContent = array("listFiles" =>"", "listDir" =>"");
    $folderContent["listFiles"] = array_filter (glob("*"), "is_file");
    $folderContent["listDir"] = array_filter (glob("*"), "is_dir");
    echo json_encode($folderContent);
}

// var_dump($_GET);
?>