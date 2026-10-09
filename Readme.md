# Back-End REST API - Gestión de Colaboradores (`nom-wa-datosempleado-be`)
 
API RESTful desarrollada utilizando **Node.js**, **Express.js** y **Prisma ORM**.
Esta api tiene como finalidad listar los colaboradores almacenados en la base de datos.
Nota: para esta aplicacion se utilizo Prisma ORM, pero no se utilizaron las migraciones, por lo que se adjunta una carpeta con los scripts de la base de datos en la carpeta db. 

--
## Tecnologias Usadas
- **Node.js**: Entorno de ejecución para JavaScript.
- **Express.js**: Framework web para la construcción de la API REST.
- **Prisma ORM**: ORM para el modelado, migraciones y consultas a la base de datos.
- **MySQL / PostgreSQL**: Sistema de gestión de base de datos relacional.
- **CORS**: Middleware para habilitar solicitudes desde el frontend Angular (`http://localhost:4200`).
- **dotenv**: Gestión de variables de entorno.

--
## Requisitos Previos del entorno

- [Node.js](v18.x)
- [npm] (Incluido con Node.js)
- Servidor de base de datos **Postgresql** activo y accesible.

---

 **Clona el repositorio:**
   desde la terminal
   git clone [https://github.com/joshuamich/nom-wa-datosempleado-be.git](https://github.com/joshuamich/nom-wa-datosempleado-be.git)
   cd nom-wa-datosempleado-be

## Configuración del Entorno (`.env`)

Crea un archivo llamado `.env` en la raíz del proyecto :
 
PORT=3000
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/test?schema=public"


npm install

npx prisma generate


## Ejecucion del proyecto

npm run dev

el servidor debe estar cargando en http://localhost:3000

rutas: 
Colaboradores - http://localhost:3000/api/colaboradores


