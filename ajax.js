// function request (callback){
//     var xmlhttp = new XMLHttpRequest();
//     console.log(xmlhttp);
//     xmlhttp.onreadystatechange = function() {
//         if (xmlhttp.readyState == 4 && (xmlhttp.status == 200 || xmlhttp.status == 0)) {
//            callback(xmlhttp.response);
//         }
//     };
//     xmlhttp.open("GET", "ex1.php", true);
//     xmlhttp.send(null);
// }

// function reponse(data){
//     document.getElementById('listAjax').innerHTML = data;
// }

// window.addEventListener('load', function() {
// request(reponse);

// });

// fetch('ex1.php').then( // on attend d'avoir complètement chargé le fichier, PUIS (then)on effectue la fonction
//     function (response){
//         return response.text();
//     }
// ).then(function(response){
//      console.log(response);
// });

function refresh() {
    $.ajax({
        url: "ex1.php", // Ton fichier ou se trouve ton chat
        success:
            function(retour){
            $('listAjax').html(retour); // rafraichi toute ta DIV "bien sur il lui faut un id "
        }
    });

    }

    setInterval(refresh(), 10000) // Répète la fonction toutes les 10 sec



    fetch ("ex1.php").then (function (response)) {
        
    }
