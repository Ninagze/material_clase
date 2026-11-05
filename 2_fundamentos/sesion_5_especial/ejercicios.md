# Ejercicios para el miercoles.

1. Gestión de inventario (push y pop)
Dado un array básico, añade "Monitor" al final de la lista. Después, elimina ese último elemento y guárdalo en una variable llamada ultimoElemento. (investigacion)

JavaScript
const equipo = ["Teclado", "Ratón", "Auriculares"];

2. Extracción de propiedades (map)
Tienes un array de objetos JSON representando usuarios. Crea un nuevo array que contenga únicamente los correos electrónicos.

JavaScript
const usuarios = [
  { id: 1, nombre: "Ana", email: "ana@ejemplo.com" },
  { id: 2, nombre: "Luis", email: "luis@ejemplo.com" },
  { id: 3, nombre: "Marta", email: "marta@ejemplo.com" }
];

3. Filtrado de datos (filter)
Dado un catálogo de productos, genera un nuevo array que incluya solo los productos con un precio superior a 50 y que tengan la propiedad enStock como true.

JavaScript
const productos = [
  { id: 1, nombre: "SSD 1TB", precio: 90, enStock: true },
  { id: 2, nombre: "Cable HDMI", precio: 15, enStock: true },
  { id: 3, nombre: "Silla Ergonomica", precio: 200, enStock: false },
  { id: 4, nombre: "Webcam", precio: 60, enStock: true }
];

4. Búsqueda exacta (find)
Busca en el array y devuelve el objeto completo del proyecto cuyo codigo sea exactamente "PROY-003".

JavaScript
const proyectos = [
  { codigo: "PROY-001", estado: "Completado" },
  { codigo: "PROY-002", estado: "En progreso" },
  { codigo: "PROY-003", estado: "Pendiente" }
];



5. Combinación de métodos (filter, map y push)
Encuentra a los estudiantes que tengan una nota mayor o igual a 7. Extrae solo sus nombres en un nuevo array y, finalmente, inserta el string "Fin de lista" al final de ese nuevo array.

JavaScript
const estudiantes = [
  { nombre: "Carlos", nota: 5 },
  { nombre: "Elena", nota: 9 },
  { nombre: "Javier", nota: 8 },
  { nombre: "Sara", nota: 6 }
];
// Tu código aquí