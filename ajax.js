

// function exploration(source){
//     console.log(source);
//     method : 'GET'; 
//     xhr.open("GET", "ex1.php?url=" + source, true);
//     xhr.send(null);

var url = ["*"];
console.log(url);
var i = 0;
function explorateur(url){
    console.log(url);
    fetch("ex1.php"+"?dir="+url).then( // on attend d'avoir complètement chargé le fichier, PUIS (then)on effectue la fonction 
        function (response){
        return response.json();
    }).then(function(response){
        for (element in response){
            for (value in response[element]){ 
                if (element == 'listFiles'){ //si c'est un fichier
                    document.getElementById('listAjax').innerHTML += response[element][value] +'<br>';
                } 
                else if (element == 'listDir') { // si c'est un dossier
                    document.getElementById('listAjax').innerHTML += '<a href="/' + response[element][value] + ' "> '+ response[element][value] + '</a><br>';
                }           
            } 
        }
    })
}

explorateur(url[0]);

function creerBouton() {
            var button = document.createElement("input" ) ;
            button.type = "button" ;
            button.setAttribute("value","retour") ;
            button.setAttribute("id","display") ;
            document.getElementById('retour').appendChild(button) ;
    }




document.querySelector('body').addEventListener('click', function(event){
    if (event.target.tagName == "A"){
        event.preventDefault();
        i++;
        url[i] = event.target.innerText+"/*";
        document.getElementById("listAjax").innerHTML = "";
        explorateur(url[i]);   
        
    }

    else if (event.target.tagName == "INPUT") {
        event.preventDefault();
        if (i > 0){
            url.pop();
            i--;
            document.getElementById("listAjax").innerHTML = "";
            explorateur(url[i]);
            console.log(url.length);    
        }
    }
    else {
        event.preventDefault();
    }
    if (url.length >1){
           
        document.getElementById("retour").innerHTML = "";
        creerBouton();
    }
    else if (url.length ===1){   
        document.getElementById("retour").innerHTML = "";
    }
});
    


