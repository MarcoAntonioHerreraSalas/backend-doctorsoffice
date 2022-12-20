# Backend-NodeJs-Angular-Barber-Shop

Este es el backend del aplicativo Angular DoctorsOffice 
la conexión se realiza a la base de datos NoSQL MoongoDB.

# Conexión

En el archivo .env  colocar los siguientes datos  con su respectivo usuario contraseña y base de datos asi mismo generar un token secreto el cual se utilizara para el bearer token 

**Estos datos se obtienen del MoongoDB al momento de crear la cuenta y generar una nueva colecíon.**

`USER=admin`
`PASSWORD=ceH7aAU9v9HCR0QI`
`DBNAME=pharmacy`
`TOKEN_SECRET= adceH7aAU9v9HCR0QImin`

# Instalación

Una vez creado esto instalar las dependencias con el comando `npm install`

# Ejecución del Backend

Para ejecutar la aplicación trabaja con una dependecia llamada nodemon por lo tanto para correr el backend deberás de ejecutar el comando `nodemon index` en  la ruta del backend.

Y se inicializara el sistema 

se vera de la siguiente forma: 

<img src="./1.PNG">

# Testing

Puedes realizar prueabas con Postman 

<img src="./2.PNG">