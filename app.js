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
}