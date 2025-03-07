// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    //En esta función vamos agregar en un arreglo los nombres que se escriban en el campo de texto
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    //Si no se agregado un nombre manda una alerta
    if (!nombreAmigo){
        alert("Debes ingresar un nombre");
        return;
    }

    // Si el nombre ya esta incluido en la lista
    if (amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo}, ya esta incluido en la lista`)

        //Limpia el campo de texto
        inputAmigo.value = "";

        //Se posiciona en el campo de texto
        inputAmigo.focus();
        return;
    } else {
        //Agrega el nombre a la lista
        amigos.push(nombreAmigo);

        //Limpia el campo de texto
        inputAmigo.value = "";
    
        //Se posiciona en el campo de texto
        inputAmigo.focus();

        //agregamos la función renderizarAmigos() para que sea llamada cada que agregamos un nombre
        renderizarAmigos();
    }

}

function renderizarAmigos(){
    //En esta función vamos agregar en la lista listaamigos los nombres de los amigos unicos
    //que no se repitan los nombres que ya estan en el arreglo cuando se escriban en el campo de texto
    let listaAmigos = document.getElementById("listaAmigos");

    //Limpiamos la lista de amigos
    listaAmigos.innerHTML = "";

    //En este for vamos agregar todos los nombres a nuestra listaAmigos que tiene nuestro arreglo amigos[]
    for(let i = 0; i < amigos.length; i++){
        //Crea un elemento li por cada nombre que se encuentra en mi arreglo amigo[]
        let item = document.createElement("li");
        item.textContent = amigos[i];

        //llamamos a la Ul listaAmigos los hijos que se encuentra en cada li item
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    //Valido si no he escrito amigos en el campo de texto mande una alerta
    if(amigos.length === 0 ){
        alert("No hay amigos para sortear");
        return;
    }
    //Vamos a sortear a los amigos agregados en la lista
    let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    //Se limpia la lista de amigos
    let limpiarLista = document.getElementById("listaAmigos");

    // Deshabilita el botón sorteo amigo
    document.querySelector('#sortear').setAttribute('disabled','true');

    // Se habilita el botón Nuevo sorteo
    document.getElementById('reiniciar').removeAttribute('disabled');
    limpiarLista.innerHTML = "";
}

function limpiarCaja(){
    // Se limpia el texto del amigo sorteado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '';

    // Se limpia el campo de texto
    let inputAmigo = document.getElementById("amigo");
    inputAmigo.innerHTML = '';
    inputAmigo.focus();

    // Se inicializa el arreglo
    amigos = [];
}

function reiniciarSorteo(){
    // Se reinicia para crear una nueva lista de amigo secreto
    // Limpia la caja de texto
    limpiarCaja();

    // Deshabilita el botón nuevo sorteo
    document.querySelector('#reiniciar').setAttribute('disabled','true');

    // Se habilita el botón Nuevo sorteo
    document.getElementById('sortear').removeAttribute('disabled');
    limpiarLista.innerHTML = "";

}