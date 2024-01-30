  // Función para ordenar números de mayor a menor
  function ordenarNumeros() {

    
    // Arreglo de prueba
    var arr = ["unacadena", 300, 9, 11, 10, 500, 150, 10,9,6,2, true];
    // Filtrar solo los números del arreglo
    var numeros = arr.filter(item => typeof item === 'number');

    // Implementar un algoritmo de ordenación (por ejemplo, el algoritmo de burbuja)
    for (var i = 0; i < numeros.length - 1; i++) {
      for (var j = 0; j < numeros.length - i - 1; j++) {
        if (numeros[j] < numeros[j + 1]) {
          // Intercambiar los elementos si están en el orden incorrecto
          var temp = numeros[j];
          numeros[j] = numeros[j + 1];
          numeros[j + 1] = temp;
        }
      }
    }

    console.log( numeros);
    console.log("serie ordenada" + numeros);
    var mensaje = "Esta es el vector inicial: " + arr;
    document.getElementById("mensaje").textContent = mensaje;

    var mensaje2 = "Este es el vector ordenado  :  " + numeros ;
    document.getElementById("mensaje2").textContent = mensaje2;
  }

  