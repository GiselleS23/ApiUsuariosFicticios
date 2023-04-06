
/* API PARA PRUEBA DE USUARIOS */
fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(json => {
    console.log(json.data);
    const markup = json.data.map(el => {
        return `
        <li class="card-container">
            <div class="image-container">
              <img class="round" src="${el.avatar}">
            </div>

             <div class="name-container"> 
                 <span class="firstName">${el.first_name}</span>
                 <span class="lastName">${el.last_name}</span>
             </div> 
            </li>
        `
    });
    console.log(markup);
    document.querySelector('.list-container').innerHTML = markup.join('');
  
})

/* Este código utiliza la API pública de reqres.in para obtener una lista de usuarios ficticios y luego mostrarlos en una página web. A continuación, se explica paso a paso lo que hace cada línea del código:

1)La primera línea utiliza la función fetch() para realizar una solicitud GET a la URL de la API de reqres.in para obtener una lista de usuarios ficticios: fetch('https://reqres.in/api/users').
2)La función fetch() devuelve una promesa, por lo que encadenamos dos llamadas .then() para manejar la respuesta.
3)La primera llamada .then() convierte la respuesta de la solicitud en formato JSON utilizando el método json(): .then(response => response.json()).
4)La segunda llamada .then() utiliza el objeto JSON devuelto por la llamada anterior para crear una lista HTML que se mostrará en la página. Primero, el código utiliza el método map() para iterar sobre el array json.data que contiene los datos de los usuarios ficticios.
5)Para cada elemento del array, se crea un bloque de código HTML utilizando los datos del usuario. Este bloque de código se almacena en la variable markup.
6)Finalmente, el código muestra la lista HTML completa en la página utilizando el método join() para convertir el array de bloques HTML en una sola cadena y luego establece el contenido de un elemento HTML con la clase list-container utilizando el método innerHTML.

En resumen, este código utiliza la API de reqres.in para obtener una lista de usuarios ficticios y luego muestra estos usuarios en una lista HTML en la página web.
 */