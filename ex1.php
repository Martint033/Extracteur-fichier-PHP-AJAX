<?php
$path = $_GET['dir'];

if (isset ($path)){
    $folderContent = array("listFiles" =>"", "listDir" =>"");
    $folderContent["listFiles"] = array_filter(glob($path), "is_file");
    $folderContent["listDir"] = array_filter(glob($path), "is_dir");
}
echo json_encode($folderContent);

?>