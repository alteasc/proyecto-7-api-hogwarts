# API alumnos y profesores de Hogwarts 🏰


Con esta API se pretende crear una base de datos en la que los alumnos tengan a su disposición toda la información sobre sus asignaturas y sus notas. Y los profesores por su parte puedan publicar las calificaciones de todos sus alumnos.


## Librerías instaladas para el desarrollo del proyecto 📚

- DOTENV: para el uso de las variables de entorno
- EXPRESS: para el correcto funcionamiento del servidor
- MONGOOSE: para la conexión y uso de la BBDD MongoDB
- NODEMON: para poder ver los cambios y desarrollar el proyecto más cómodamente, como dependencia del desarrollador.

Ejemplo de instalación de estas librerías
```sh
cd proyecto-7-api-hogwarts
npm i jsonwebtoken bcrypt
```

## Instalación 🔧

Para trabajar, en el archivo `${package.json.version}` se crean tres scripts, dos de ellos al comienzo para poder trabajar cómodamente y el tercero referente a la "semilla" de una de las colecciones de la BBDD:

```sh
"dev": "nodemon index.js"
"seed": "node ./src/utils/seeds/subjects.js"
```


## Desarrollo del proyecto ⚙️

Se ha levantado el servidor en: http://localhost:3000
Se han realizado cuatro colecciones de datos:

- Scores:aquí se almacenan los datos de las calificaciones de los alumnos
"/api/v1/scores"
- Subject: se almacena toda la información relativa a una misma asignatura
"/api/v1/subjects"
- Teachers: se almacena la información de acceso de cada profesor
"/api/v1/teachers"
- Users: en este caso hacen referencia a la información personal de cada alumno
"/api/v1/users"

> Note: Teniendo en cuenta esta información, para el acceso a la información se ha diferenciado entre 3 perfiles, que serán <"admin", "user", "teacher">. Cada uno de ellos podrá acceder, modificar y borrar información restringida dependiendo de sus funciones."

Partiendo de las rutas anteriores, para las colecciones de SUBJECT y SCORES se ha realizado el CRUD completo y básico. 
Por su parte, además de esto, para la colección "SCORE" cabe destacar:

- La necesidad de crear un método GET para acceder a todas las calificaciones de una determinada asignatura. Al que sólo tienen acceso los usuarios que registren con el rol "teacher".
"/asignatura/:asignatura"

Por otro lado, para las colecciones "TEACHERS" y "USERS", se ha creado un CRUD pero con la particularidad de que ambos tendrán la posibilidad de hacer "register" y "login" para poder acceder a su información personal. 
Por su parte, además de esto, para la colección "USERS" cabe destacar:

- La necesidad de crear un método GET para acceder de forma individual a toda la información de un sólo alumno. Al que sólo tiene acceso cada alumno de forma individual. Sin que un alumno, pueda ver información de otro que no sea él mismo. 


> Note: Se han relacionado las colecciones SCORES y SUBJECTS respectivamente, con la colección USERS. Para que los alumnos tengan disponible en un sólo lugar toda su información.

## Autores ✒️

Desarrolladora: Altea Segura Cáliz para Rock The Code
Documentación: https://harrypotter.fandom.com/es/wiki/HarryPotter_Wiki

## License

**Free Software, Hell Yeah!**
