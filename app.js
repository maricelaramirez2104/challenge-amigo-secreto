// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

function agregarAmigo(){
    //En esta función vamos agregar en un arreglo los nombres que se escriban en el campo de texto
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    //Si no se agregado un nombre manda una alerta
    if (!nombreAmigo){
        alert("Debes ingresar un nombre");
        return;
    }

    //Agrega el nombre a la lista
    amigo.push(nombreAmigo);
    //Limpia el campo de texto
    inputAmigo.value = "";
    //Se posiciona en el campo de texto
    inputAmigo.focus();
    //agregamos la función renderizarAmigos() para que sea llamada cada que agregamos un nombre
    renderizarAmigos();
}

function renderizarAmigos(){
    //En esta función vamos agregar en la lista listaamigos los nombres de los amigos unicos
    //que no se repitan los nombres que ya estan en el arreglo cuando se escriban en el campo de texto
    let listaAmigos = document.getElementById("listaAmigos");
    //Limpiamos la lista de amigos
    listaAmigos.innerHTML = "";

    //En este for vamos agregar todos los nombres a nuestra listaAmigos que tiene nuestro arreglo amigos[]
    for(let i = 0; i < amigo.length; i++){
        //Crea un elemento li por cada nombre que se encuentra en mi arreglo amigo[]
        let item = document.createElement("li");
        item.textContent = amigo[i];
        //llamamos a la Ul listaAmigos los hijos que se encuentra en cada li item
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    //Valido si no he escrito amigos en el campo de texto mande una alerta
    if(amigo.length === 0 ){
        alert("No hay amigos para sortear");
        return;
    }
    //Vamos a sortear a los amigos agregados en la lista
    let amigoSorteado = amigos[Math.floor(Math.random()*amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    //Se limpia la lista de amigos
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}