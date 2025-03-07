<h1>Challenge Amigo Secreto</h1>
<h2>Alura Latam</h2>

- Estado del proyecto: En construcción.
- Se crea el index.html con la información mínima necesaria para crear el proyecto de agregar un amigo secreto
- Se agrega el código al archivo app.js para agregar las funciones necesarias para ingresar los nombres de los amigos
- Se agrega la carpeta de imágenes assets

## Se agregan las dos imagenes
### amigo-secreto.png
![](https://github.com/maricelaramirez2104/challenge-amigo-secreto/blob/main/assets/amigo-secreto.png)
### play_circle_outline.png
![](https://github.com/maricelaramirez2104/challenge-amigo-secreto/blob/main/assets/play_circle_outline.png)
### principal-amigo-secreto
![](https://github.com/maricelaramirez2104/challenge-amigo-secreto/blob/main/assets/principal-amigo-secreto.png)

## Agregamos las funciones en el archivo app.js para que realice la captura de los nombres de los amigos

### Se crea la función agregarAmigo();
- En esta función vamos agregar en un arreglo los nombres que se escriban en el campo de texto
- Si no se a agregado un nombre manda una alerta
### Debes ingresar el nombre de un amigo
![](https://github.com/maricelaramirez2104/challenge-amigo-secreto/blob/main/assets/ingresa-nombre.png)
- Agrega el nombre a la lista
- Limpia el campo de texto
- Se posiciona en el campo de texto

### Se crea la función renderizarAmigos();
- En esta función vamos agregar en la lista listaAmigos los nombres de los amigos unicos
- que no se repitan los nombres que ya estan en el arreglo cuando se escriban en el campo de texto
- Limpiamos la lista de amigos
- En un for vamos agregar todos los nombres a nuestra listaAmigos que tiene nuestro arreglo amigos[]
- Crea un elemento li por cada nombre que se encuentra en mi arreglo amigo[]
- llamamos a la Ul listaAmigos los hijos que se encuentra en cada li item
### Lista amigos
![](https://github.com/maricelaramirez2104/challenge-amigo-secreto/blob/main/assets/lista-amigos.png)

### Se crea la función sortearAmigo();
- Se valida si no se ha escrito amigos en el campo de texto mande una alerta
### No hay amigos para sortear
![](https://github.com/maricelaramirez2104/challenge-amigo-secreto/blob/main/assets/no-hay-amigos.png)
- Vamos a sortear a los amigos agregados en la lista
### Amigo sorteado
![](https://github.com/maricelaramirez2104/challenge-amigo-secreto/blob/main/assets/amigo-sorteado.png)
- Se limpia la lista de amigos