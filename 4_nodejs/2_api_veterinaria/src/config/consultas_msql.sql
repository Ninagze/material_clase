use veterinaria ;

CREATE TABLE DUENO (
id INT auto_increment primary key ,
dni  CHAR(9),
nombre VARCHAR(40),
apellidos VARCHAR(100),
fecha_nacimiento DATE,
telefono CHAR(9),
email VARCHAR(100),
direccion VARCHAR(150),
localidad VARCHAR(60),
codigo_postal CHAR(5),
acepta_comunicaciones BOOLEAN,
fecha_alta DATE 
);