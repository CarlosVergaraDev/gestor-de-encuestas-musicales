document.addEventListener('DOMContentLoaded', () => {

    // ESTADO GLOBAL DE LA APLICACIÓN
    const MAX_PERSONAS = 6;
    let personas = [];

    // REFERENCIAS A ELEMENTOS DEL DOM
    const btnVistaAgregar = document.getElementById('btn-vista-agregar');
    const btnVistaBuscar = document.getElementById('btn-vista-buscar');
    const vistaAgregar = document.getElementById('vista-agregar');
    const vistaBuscar = document.getElementById('vista-buscar');

    // Elementos del formulario
    const formulario = document.getElementById('formulario-persona');
    const contadorPersonas = document.getElementById('contador');
    const cancionesContainer = document.getElementById('canciones-container');
    const btnAddCancion = document.getElementById('btn-add-cancion');
    const btnGuardar = document.getElementById('btn-guardar');
    
    // Elementos de búsqueda
    const inputBusqueda = document.getElementById('input-busqueda');
    const btnBuscar = document.getElementById('btn-buscar');
    const resultadoBusqueda = document.getElementById('resultado-busqueda');

    const btnReiniciarApp = document.getElementById('btn-reiniciar-app');
    
    // LÓGICA DE NAVEGACIÓN DE VISTAS 
    function cambiarVista(vistaActiva) {
        if (vistaActiva === 'agregar') {
            vistaAgregar.classList.remove('vista-oculta');
            vistaBuscar.classList.add('vista-oculta');
            btnVistaAgregar.classList.add('activo');
            btnVistaBuscar.classList.remove('activo');
        } else {
            vistaAgregar.classList.add('vista-oculta');
            vistaBuscar.classList.remove('vista-oculta');
            btnVistaAgregar.classList.remove('activo');
            btnVistaBuscar.classList.add('activo');
        }
    }

    // LÓGICA PARA AGREGAR PERSONA

    function agregarCampoCancion() {
        const numCanciones = cancionesContainer.getElementsByClassName('grupo-cancion').length;
        if (numCanciones >= 3) {
            alert("Puedes agregar un máximo de 3 canciones.");
            return;
        }

        const nuevoGrupo = document.createElement('div');
        nuevoGrupo.className = 'grupo-cancion';
        nuevoGrupo.innerHTML = `
            <div>
                <label>Artista ${numCanciones + 1}</label>
                <input type="text" class="artista" placeholder="Nombre del artista">
            </div>
            <div>
                <label>Título ${numCanciones + 1}</label>
                <input type="text" class="titulo" placeholder="Título de la canción">
            </div>
        `;
        cancionesContainer.appendChild(nuevoGrupo);
        if (numCanciones + 1 === 3) {
            btnAddCancion.disabled = true;
        }
    }

    function guardarPersona(event) {
        event.preventDefault(); // Evita que el formulario recargue la página.

        if (personas.length >= MAX_PERSONAS) {
            alert("Ya has registrado el máximo de 6 personas.");
            return;
        }

        const persona = {
            nombre: document.getElementById('nombre').value,
            cedula: document.getElementById('cedula').value,
            fechaNacimiento: document.getElementById('fecha-nacimiento').value,
            email: document.getElementById('email').value,
            ciudadResidencia: document.getElementById('ciudad-residencia').value,
            ciudadOrigen: document.getElementById('ciudad-origen').value,
            canciones: []
        };
        
        // Recopilar canciones
        const gruposCanciones = cancionesContainer.getElementsByClassName('grupo-cancion');
        for (const grupo of gruposCanciones) {
            const artista = grupo.querySelector('.artista').value;
            const titulo = grupo.querySelector('.titulo').value;
            if (artista && titulo) {
                persona.canciones.push({ artista, titulo });
            }
        }
        
        personas.push(persona);
        alert(`¡Persona "${persona.nombre}" guardada con éxito!`);
        actualizarContador();
        limpiarFormulario();
    }
    
    function limpiarFormulario() {
        formulario.reset(); // Limpia todos los inputs del formulario.
        cancionesContainer.innerHTML = ''; // Elimina los campos de canciones.
        btnAddCancion.disabled = false; // Habilita de nuevo el botón de añadir canción.
    }
    
    function actualizarContador() {
        contadorPersonas.textContent = `Personas registradas: ${personas.length} de ${MAX_PERSONAS}`;
        if(personas.length >= MAX_PERSONAS){
            btnGuardar.disabled = true;
            btnAddCancion.disabled = true;
        }
    }

    // LÓGICA PARA BUSCAR PERSONA
    function buscarPersona() {
        const posicion = parseInt(inputBusqueda.value);
        resultadoBusqueda.innerHTML = ''; // Limpia resultados anteriores.

        if (isNaN(posicion) || posicion < 1 || posicion > personas.length) {
            resultadoBusqueda.innerHTML = `<p class="error">Posición inválida o no encontrada. Hay ${personas.length} persona(s) registrada(s).</p>`;
            return;
        }

        const persona = personas[posicion - 1]; // -1 porque los arrays empiezan en 0.
        mostrarFicha(persona);
    }

    function mostrarFicha(persona) {
        let cancionesHTML = '';
        if (persona.canciones.length > 0) {
            cancionesHTML = '<ul class="lista-canciones">';
            persona.canciones.forEach(c => {
                cancionesHTML += `<li><strong>${c.artista}</strong> - ${c.titulo}</li>`;
            });
            cancionesHTML += '</ul>';
        } else {
            cancionesHTML = '<p>No se registraron canciones favoritas.</p>';
        }

        resultadoBusqueda.innerHTML = `
            <div class="ficha-persona">
                <h4>${persona.nombre}</h4>
                <p><strong>Nº Identificación:</strong> ${persona.cedula}</p>
                <p><strong>Fecha de Nacimiento:</strong> ${persona.fechaNacimiento}</p>
                <p><strong>Correo Electrónico:</strong> ${persona.email}</p>
                <p><strong>Ciudad de Residencia:</strong> ${persona.ciudadResidencia}</p>
                <p><strong>Ciudad de Origen:</strong> ${persona.ciudadOrigen}</p>
                <br>
                <h4>Canciones Favoritas</h4>
                ${cancionesHTML}
            </div>
        `;
    }
    
    //LÓGICA DE REINICIO GLOBAL
    function reiniciarAplicacion() {
        if (confirm("¿Estás seguro de que deseas borrar todos los datos y empezar de nuevo?")) {
            personas = [];
            limpiarFormulario();
            actualizarContador();
            resultadoBusqueda.innerHTML = '';
            inputBusqueda.value = '';
            btnGuardar.disabled = false;
            cambiarVista('agregar');
            alert("Aplicación reiniciada.");
        }
    }

    // INICIALIZACIÓN Y ASIGNACIÓN DE EVENTOS
    btnVistaAgregar.addEventListener('click', () => cambiarVista('agregar'));
    btnVistaBuscar.addEventListener('click', () => cambiarVista('buscar'));
    btnAddCancion.addEventListener('click', agregarCampoCancion);
    formulario.addEventListener('submit', guardarPersona);
    btnBuscar.addEventListener('click', buscarPersona);
    btnReiniciarApp.addEventListener('click', reiniciarAplicacion);
    
    // Estado inicial de la aplicación
    agregarCampoCancion(); // Añadimos el primer campo de canción por defecto.
});