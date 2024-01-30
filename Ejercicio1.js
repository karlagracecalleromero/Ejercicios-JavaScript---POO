function datos()
{
    while(true)
    {
        serie=parseInt(prompt("Ingrese la cantidad de la serie que quiere ver:"));
        if(!isNaN(serie)){ break;}
        else{ alert("Ingrese un valor numérico")}

    }

    var fibArray = [0, 1];

    for (var i = 2; i < serie; i++) 
    {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    console.log(fibArray);
    }
    var mensaje = "Esta es la serie: " + fibArray;
        document.getElementById("mensaje").textContent = mensaje;

}