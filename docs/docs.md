# MAGEO

## Introduction

### Get started with MAGEO

MAGEO (Marketing And Events Management for Organizations) is a comprehensive platform developed to oversee upcoming events and streamline coordination with Marketing and Operations departments, ensuring tasks are efficiently executed.

Operating within dynamic environments characterized by a multitude of activity requests, optimizing event management is critical for organizational success. Maintaining relevance and appeal to various stakeholders hinges on this efficiency. Recognizing this imperative, organizations have identified an opportunity to enhance their workflows by introducing MAGEO—a specialized digital platform tailored for event management and coordination.

## Getting started
### Installation

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/iamcarlosdaniel/MAGEO
   ```

2. Navigate to the project directory:

   ```sh
   cd MAGEO
   ```

3. Install the necessary dependencies:

   ```sh
   npm install
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```


## Quick start

### Request Format

HTTP requests to the API must follow the standard HTTP format. Here are some important guidelines to keep in mind:

- All requests must include the URL of the corresponding endpoint.
- For methods that require a request body (such as POST and PUT), the body must be included in JSON format in the request body.
- Headers should specify the content type (`Content-Type`) and, if necessary, authentication (`Authorization`).

### Response Format

API responses will follow a standard JSON format. Here's an example of the typical response format:

```json
{
   "id": "id",
   "username": "username",
   "role": "admin",
   "first_name": "first_name",
   "last_name": "last_name",
   "email": "email@domain.com",
}
```

The `success` object indicates whether the request was successful or not, and the `data` object contains the requested data (if the request was successful).

## Endpoints

Hemos desarrollado esta API usando las mejores practicas para ela, por lo que usamos versionamiento. Actualmente el repositorio cuenta con la version 1. Es la unica version disponible en el repositorio, por lo que detallaremos con accedemos a cada endpoint a continuacion.

Todas las solicitudes llegan a la siguiente direccion:

```
http://localhost:3000/api/v1
```

En el caso de estar desplegada se debera cambiar `localhost:3000`, por la direccion de dominio propia.

Como se aprecia se realiza la llamada primero a la direccion de domion, `localhost:3000` en este caso, seguido de la version, `v1` para la version base de la API.

### Usuario
Las operaciones basicas para el usuario son las siguientes: 
```
/register
```
Metodo: POST

Permite registrar un nuevo usuario. Todos los campos de registro son obligatorios, si se omite alguno respondera con un error y el registro no se llevara a cabo.

Ejemplo:

```json
{
    "id": "6611ae65ceb98e1f916d1c8e",
    "username": "ejemplo_usuario",
    "role": "admin",
    "first_name": "Juan",
    "last_name": "Pérez",
    "email": "email@email.com",
    "phone": 123456789,
    "date_of_birth": "1990-01-01T00:00:00.000Z",
    "gender": "masculino",
    "campus": "Campus principal",
    "department": "Departamento de Informática",
    "position": "Desarrollador",
    "createdAt": "2024-04-06T20:19:49.592Z",
    "updatedAt": "2024-04-06T20:19:49.592Z",
    "status": "Usuario encontrado"
}
```

```
/login
```

```
/logout
```
Metodo: POST

Permite cerrar la sesion actual del usuario. No requiere ningun cuerpo.

