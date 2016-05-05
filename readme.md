Este repositorio corresponde a una POC para:

- Crear un mapa mostrando un listado de trabajadores y sus ubicaciones.
- Crear un sistema CRUD para poder insertar marcas en un mapa (texto, un link y ubicación de la marca), y una página
donde se puedan mostrar esas marcas.


### Sistema de ficheros
#####Back
En esta carpeta encontramos la parte de servidor.

#####Front
######CRUD
Tenemos dos vistas html:
- new.html: Para añadir una marca clickando en el mapa y rellenando los campos del formulario.
- list.html: Para consultar las marcas introducidas desde la vista new.html.

######workers_list:
Ejecutando el index.html podremos ver el mapa con todos los trabajadores. Todas las imágenes están dentro de la carpeta
img.


###Tecnologías usadas
####Back
El sistema back es una API Rest desarrollada en node.js usando Express.js como framework. Utiliza monk para conectarse
a la base de datos.

La base de datos debe ser mongodb y se espera que esté levantada en localhost:27017 y el squema sea test (localhost:27017/test)

Para iniciar el servidor, escribe "npm start" desde tu terminal dentro del folder "back" y se levantará un servidor de node
en el puerto  (localhost:3000)

####Front
Todos los archivos de front utilizan html5 + css3 + javascript puro + jQuery para llamadas REST.

En el listado de workers todas las marcas están insertadas directamente en el archivo.
En el CRUD se consume la API utilizando jQuery.

Cualquier duda o pregunta, escribe a NachoNavarroReus@gmail.com y estaré encantado de atenderos.

Un saludo.