# API alumnos y profesores de Hogwarts 🏰

Con esta API se pretende crear una base de datos en la que los alumnos tengan a su disposición toda la información sobre sus asignaturas y sus notas. Y los profesores por su parte puedan publicar las calificaciones de todos sus alumnos.

## Librerías instaladas para el desarrollo del proyecto 📚

- DOTENV: para el uso de las variables de entorno
- EXPRESS: para el correcto funcionamiento del servidor
- MONGOOSE: para la conexión y uso de la BBDD MongoDB
- BCRYPT: para encriptar la contraseña de los distintos usuarios que pueden acceder
- JSONWEBTOKEN: para generar y comprobar el token, que permitirá que las diferentes rutas puedan abrirs
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
- Users: en esta colección se almacena toda la información personal de cada usuario de esta web, que en este caso serán tanto profesores como alumnos
  "/api/v1/users"

> Note: Teniendo en cuenta esta información, dentro de los usuarios necesitaremos 3 perfiles diferentes y cada uno por su condición de estudiante o profesor accederá a unos datos diferentes.
> Los perfiles serán: <"admin", "user", "teacher">.  
> Cada uno de ellos podrá acceder, modificar y borrar información restringida dependiendo de sus funciones."

Partiendo de las rutas anteriores, estos son cada uno de los controladores que se han creado para cada colección:

> Colección SCORES

- GET: "/", para acceder a todas las calificaciones de los alumnos, a lo que sólo está autorizado el administrador de la web.
- POST: "/", para crear una calificación con todos sus datos. Podrán hacerlo solo los usuarios con rol de profesor y cuyo asignatura impartida coincida con la calificación que se pretende crear.
- PUT: "/:id", para modificar cualquier dato de la calificación. Cuyos permisos funcionan igual que la ruta anterior.
- DELETE: "/:id", para borrar una calificación. Cuyos permisos funcionan igual que la ruta POST.

> Colección SUBJECT

- GET: "/" y "/:id", para acceder en el primer caso a todos los datos de todas las asignaturas y en el segundo caso a los datos de una determinada asignatura, siempre y cuando se haya hecho login en la web.
- POST: "/", para crear una asignatura. Podrán hacerlo solo los usuarios con rol de profesor y cuyo nombre coincida con el del profesor que debe impartir la asignatura.
- PUT: "/:id", para modificar una asignatura. Cuyos permisos funcionan igual que la ruta anterior.
- DELETE: "/:id", para eliminar por completo una asignatura. Podrá hacerlo únicamente el administrador de la web.

> Colección USERS

- GET: "/" y "/:id", en la primera ruta con método get se puede acceder a todos los datos de todos los usuarios de la web, para lo cual únicamente tiene el permiso el administrador de la web. En la segunda ruta, cada usuario que previamente haya hecho login en la web, podrá ver todos sus datos personales. Los estudiantes verán además sus asignaturas y calificaciones de las mismas y los profesores por su parte, las calificaciones de todos sus alumnos.
- POST: "/register" y "/login", para que cada usuario pueda registrarse y loguearse en la web respectivamente.
- PUT: "/:id", para poder modificar cualquier dato de los usuarios, a lo cual únicamente tiene autorización el administrador de la web.
- DELETE: "/:id", para eliminar a un usuario de la web, cuya autorización es igual a la ruta anterior.

> Note: Se han relacionado las colecciones SCORES y SUBJECTS respectivamente, con la colección USERS. Para que los alumnos y profesores tengan disponible en un sólo lugar toda su información.

## Autores ✒️

Desarrolladora: Altea Segura Cáliz para Rock The Code
Documentación: https://harrypotter.fandom.com/es/wiki/HarryPotter_Wiki

## License

**Free Software, Hell Yeah!**
