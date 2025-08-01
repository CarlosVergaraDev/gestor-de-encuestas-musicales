# 🎵 Registro de Personas y Canciones Favoritas

Aplicación web SPA (Single Page Application) desarrollada para registrar hasta 6 personas con sus datos personales y una lista dinámica de hasta 3 canciones favoritas. Ofrece una navegación intuitiva entre vistas, validaciones básicas, presentación clara de datos y opción de reinicio global.

---

## ✨ Descripción General

Esta aplicación permite:

- Registrar datos personales (nombre, cédula, fecha de nacimiento, correo, ciudad de residencia y ciudad de origen).
- Añadir hasta 3 canciones favoritas por persona.
- Consultar personas por su posición de registro.
- Visualizar los datos en una ficha estructurada.
- Reiniciar la aplicación para comenzar un nuevo ciclo de encuestas.

---

## 🚀 Características Principales

- **SPA sin recarga de página**: Dos vistas dinámicas (`Agregar Persona` y `Buscar Persona`) alternan con clases de visibilidad y estados activos.
- **Formulario dinámico de canciones**: Se generan campos de canción a demanda hasta un máximo de 3.
- **Validación nativa HTML5**: Campos `required`, validaciones de tipo (`email`, `date`, etc.) y control de límites desde JavaScript.
- **Base de datos en memoria**: La información se almacena en un array de objetos `personas` como una base de datos temporal.
- **Búsqueda por índice**: El usuario puede buscar por el número de registro (posición).
- **Visualización estructurada**: Los resultados se muestran con estilo en una tarjeta detallada, incluyendo una lista formateada de canciones.
- **Reinicio de la app**: El botón `Reiniciar Aplicación` borra todos los datos y limpia la interfaz.

---

## 🧠 Arquitectura y Lógica Central

### Estado Global
```js
let personas = [];
const MAX_PERSONAS = 6;


### Vistas SPA
function cambiarVista(vistaActiva) {
    // Muestra u oculta vistas dinámicamente con clases CSS
}

### Formulario Dinámico de Canciones
function agregarCampoCancion() {
    // Crea hasta 3 bloques de inputs para artista y título
}

### Guardado de Personas
function guardarPersona(event) {
    // Captura los datos del formulario y los almacena en el array personas[]
}

### Visualización de Datos
function mostrarFicha(persona) {
    // Muestra los datos en una tarjeta HTML estructurada
}

### Búsqueda por Posición
function buscarPersona() {
    // Recupera a una persona desde el array por índice (posición)
}

### Reinicio Total
function reiniciarAplicacion() {
    // Restaura el estado inicial de la aplicación y limpia el DOM
}

```

## 📂 Estructura del Proyecto

```
├── README.md
└── public
    ├── css
    │   └── style.css
    ├── favicon.ico
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    ├── index.html
    ├── js
    │   └── script.js
    └── site.webmanifest
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica.
- **CSS3**: Diseño moderno, modo oscuro, diseño responsive con Flexbox y Grid.
- **JavaScript (ES6+)**: Lógica, manipulación del DOM, eventos, validaciones, gestión de estado.

---

## ✅ Cómo Usar

1. Clona el repositorio o descarga los archivos.
2. Asegúrate de mantener la estructura de carpetas `css/`, `js/`, etc.
3. Abre `index.html` en tu navegador.

---

## 📌 Notas

- No requiere servidor ni backend: 100% estático.
- Ideal para enseñanza de lógica de formularios, validaciones, manipulación DOM y estructuras de datos.
- Extensible a almacenamiento local (`localStorage`) o backend con mínima refactorización.

---

## 🧑‍💻 Autor

**Carlos Vergara**
