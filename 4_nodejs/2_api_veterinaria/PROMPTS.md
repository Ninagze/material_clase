1. Actúa como diseñador de bases de datos MySQL.
 
Crea la sentencia CREATE TABLE para una tabla llamada `mascota` de una clínica veterinaria.
Ya existe una tabla `dueno` con clave primaria `id` (INT).
 
Campos requeridos, en este orden:
- id: identificador entero autoincremental, clave primaria.
- id_dueno: entero, clave foránea a dueno(id).
- nombre: texto de hasta 50 caracteres.
- especie: texto de hasta 20 caracteres (perro, gato, etc.).
- raza: texto de hasta 50 caracteres.
- sexo: un único carácter ('M' o 'H').
- fecha_nacimiento: fecha.
- peso_kg: peso en kilos con 2 decimales, máximo 999,99.
- microchip: código de longitud fija de 15 caracteres.
- color: texto de hasta 30 caracteres.
- esterilizado: valor booleano.
- fecha_alta: fecha en que se registra en la clínica.
- fecha_fallecimiento: fecha, vacía si la mascota sigue viva.
- observaciones: texto libre sin límite práctico de longitud.
 
Restricciones:
- Usa exactamente esos nombres de columna (sin tildes ni ñ).
- No añadas columnas, índices ni restricciones que no se pidan.
- Devuelve solo el SQL, sin explicaciones.



2. Siguiendo estos modelos de datos 
 
CREATE TABLE dueno (
  id              INT AUTO_INCREMENT PRIMARY KEY,
  dni                   CHAR(9),
  nombre                VARCHAR(50),
  apellidos             VARCHAR(100),
  fecha_nacimiento      DATE,
  telefono              CHAR(9),
  email                 VARCHAR(100),
  direccion             VARCHAR(150),
  localidad             VARCHAR(60),
  codigo_postal         CHAR(5),
  acepta_comunicaciones BOOLEAN,
  fecha_alta            DATE
);
 
CREATE TABLE mascota (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  id_dueno            INT,
  nombre              VARCHAR(50),
  especie             VARCHAR(20),
  raza                VARCHAR(50),
  sexo                CHAR(1),
  fecha_nacimiento    DATE,
  peso_kg             DECIMAL(5,2),
  microchip           CHAR(15),
  color               VARCHAR(30),
  esterilizado        BOOLEAN,
  fecha_alta          DATE,
  fecha_fallecimiento DATE,
  observaciones       TEXT,
  FOREIGN KEY (id_dueno) REFERENCES dueno(id)
);
 
dame 10 insert para crear dueños y 10 insert para crear mascotas