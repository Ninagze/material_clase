# Arquitectura de un API REST con node.

API REST de una veterinaria construida con Node.js, Express 5 y MySQL.

## Estructura de carpetas

```
2_api_veterinaria/
├── index.js                      # Crea el servidor HTTP y escucha en PORT
├── package.json
├── .env / .env.example           # DB_*, SECRET_JWT, PORT
├── requests.http                 # Pruebas de los endpoints
├── README.md
└── src/
    ├── app.js                    # Express: json, cors, rutas, 404 y errores
    ├── config/
    │   ├── db.js                 # Pool de conexión mysql2
    │   └── veterinaria.sql       # Esquema y datos (dueno, mascota)
    ├── routes/
    │   ├── api.routes.js         # Router raíz /api
    │   ├── mascotas.routes.js    # /api/mascotas
    │   └── usuarios.routes.js    # /api/usuarios
    ├── middlewares/
    │   ├── usuarios.middleware.js   # authToken, checkAdmin, checkRole
    │   └── mascotas.middleware.js   # checkId
    ├── controllers/
    │   ├── mascotas.controller.js   # getAll, getById, create, edit, remove
    │   └── usuarios.controller.js   # registro, login
    └── models/
        ├── mascotas.model.js        # Consultas SQL de mascota
        └── usuarios.model.js        # Consultas SQL de usuario
```

# Patrón de arquitectura (sistema de carpetas)

Arquitectura **por capas, al estilo MVC sin vistas**. Cada carpeta tiene una única responsabilidad y una capa solo habla con la siguiente.

```
Cliente → index.js → app.js → routes → middlewares → controllers → models → config/db.js → MySQL
```

| Capa | Responsabilidad |
|------|-----------------|
| `index.js` | Arranque del servidor HTTP |
| `app.js` | Configuración global de Express (JSON, CORS, 404, errores) |
| `routes` | Define endpoints y qué middlewares y controlador usa cada uno |
| `middlewares` | Autenticación, autorización por rol y validación de existencia |
| `controllers` | Lógica de la petición/respuesta HTTP |
| `models` | Consultas SQL parametrizadas |
| `config` | Conexión a la base de datos y esquema |


# Endpoints

| Método | Ruta | Acceso |
|--------|------|--------|
| GET | `/api/mascotas` | 
| GET | `/api/mascotas/:idMascota` | 


## Modelo de datos

- `dueno` 1 — N `mascota` (clave foránea `mascota.id_dueno`).

## Dependencias principales

`express`, `mysql2`, `jsonwebtoken`, `bcryptjs`, `cors`. Requiere Node ≥ 22.9.