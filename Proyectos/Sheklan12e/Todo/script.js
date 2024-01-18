const tareaInput = document.getElementById('tarea');
const agregarButton = document.querySelector('button');
const listaTarea = document.getElementById('listaTarea');



agregarButton.addEventListener('click', agregarTarea);

function agregarTarea() {
    const tareaTexto = tareaInput.value;

    if (tareaTexto.trim() !== '') {
        const nuevaTarea = document.createElement('li');
        nuevaTarea.classList.add('tareas');
        nuevaTarea.innerText = tareaTexto;

        const botonEliminar = document.createElement('button');
        const botonEditar = document.createElement('button');

        botonEliminar.classList.add('Eliminar');
        botonEliminar.innerText = 'Eliminar';

        botonEliminar.addEventListener('click', () => {
            let respuesta = confirm('¿Estás seguro de querer eliminar esto?');
            if (respuesta) {
                alert('Se eliminó exitosamente');
                listaTarea.removeChild(nuevaTarea);
            } else {
                alert('Ok, no hay problema');
            }
        });

        botonEditar.classList.add('Editar');
        botonEditar.innerText = 'Editar';

        botonEditar.addEventListener('click', () => {
            editarTarea(nuevaTarea);
        });

        nuevaTarea.appendChild(botonEliminar);
        nuevaTarea.appendChild(botonEditar);
        listaTarea.appendChild(nuevaTarea);

        tareaInput.value = '';
    }
}


function editarTarea(tarea) {
    const textoOriginal = tarea.innerText;

    const campoEdicion = document.createElement('input');
    campoEdicion.type = 'text';
    campoEdicion.value = textoOriginal;

    const botonConfirmar = document.createElement('button');
    botonConfirmar.innerText = 'Confirmar';

    botonConfirmar.addEventListener('click', () => {
        const nuevoTexto = campoEdicion.value;
        tarea.innerText = nuevoTexto;


        if (tarea.contains(campoEdicion) && tarea.contains(botonConfirmar)) {
            tarea.removeChild(campoEdicion);
            tarea.removeChild(botonConfirmar);
        }
    });

   
    tarea.innerText = '';

    tarea.appendChild(campoEdicion);
    tarea.appendChild(botonConfirmar);
}



