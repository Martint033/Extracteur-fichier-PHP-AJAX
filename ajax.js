

// function exploration(source){
//     console.log(source);
//     method : 'GET'; 
//     xhr.open("GET", "ex1.php?url=" + source, true);
//     xhr.send(null);

var url = ["*"];
var i = 0;

function explorateur(url){
    fetch("ex1.php"+"?dir="+url).then( // on attend d'avoir complètement chargé le fichier, PUIS (then)on effectue la fonction 
        function (response){
        console.log(response);
        return response.json();
    }).then(function(response){
        for (element in response){
            console.log(element);
            for (value in response[element]){ 
                if (element == 'listFiles'){ //si c'est un fichier
                    console.log(element);
                    document.getElementById('listAjax').innerHTML += response[element][value] +'<br>';
                } 
                else if (element == 'listDir') { // si c'est un dossier
                    console.log(element);
                    document.getElementById('listAjax').innerHTML += '<a href="/' + response[element][value] + ' "> '+ response[element][value] + '</a><br>';
                }           
            } 
        }
    })
}
explorateur(url);


function displayRetour(){
    if (document.querySelector('p.back')){
    document.getElementById('back').innerHTML = '<a href=""> retour </a> ';
    }
}


document.querySelector('div').addEventListener('click', function(event){
   if (event.target.tagName == "A"){
        console.log(document.getElementsByTagName);
        event.preventDefault();
        url = event.target.innerText+"/*";
        document.getElementById('listAjax').innerHTML = "";
        explorateur(url);
        
    }
    else {
        event.preventDefault();
    }

});
    


