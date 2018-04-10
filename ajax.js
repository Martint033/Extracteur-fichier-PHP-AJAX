

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
                    document.getElementById('listAjax').innerHTML += `<div class="oneFile"><div class="test"><img data-type="fichier"src="file-icone.png" width="70" height="70" alt="texte si l'image n'est pas affichée">
                    <p class="displayFichiers"><span> ${response[element][value]} </span><p></div>
                    </div>`;
                } 
                else if (element == 'listDir') { // si c'est un dossier
                    document.getElementById('listAjax').innerHTML += '<div class="oneFile"> <a href="' + response[element][value]+'"><img data-type="dossier" class="imgfolder" src="folder-icone.png" width="70" height="70" alt=""><p><span>' + response[element][value] + '</span></p></a><br></div>';
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
        element = event.target;
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
        }
    }
    else if (event.target.tagName == "IMG") {
        var data = event.target.getAttribute("data-type");
        if (data == "dossier"){
            event.preventDefault();
            element = event.target.parentNode;
            i++;
            url[i] = element.getAttribute("href")+"/*";
            console.log(url[i]);
            document.getElementById("listAjax").innerHTML = "";
            explorateur(url[i]);  
        }
        else if (data == "fichier"){
            event.preventDefault();
        }

    }
    if (url.length >1){
           
        document.getElementById("retour").innerHTML = "";
        creerBouton();
    }
    else if (url.length ===1){   
        document.getElementById("retour").innerHTML = "";
    }
});
    


