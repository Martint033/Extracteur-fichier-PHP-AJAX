

// function exploration(source){
//     console.log(source);
//     method : 'GET'; 
//     xhr.open("GET", "ex1.php?url=" + source, true);
//     xhr.send(null);
    
fetch("ex1.php").then( // on attend d'avoir complètement chargé le fichier, PUIS (then)on effectue la fonction 
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

document.querySelector('body').addEventListener('click', function(event){
        event.preventDefault();
        console.log(event.target.innerText);

});
    


