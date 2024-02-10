import { tareas } from './todo_.js';

function cargar_tareas() {
    let cuadro_de_tareas = document.querySelector(".root");

    tareas.forEach(cada_tarea => {
        let div_tarea = document.createElement("div");
        div_tarea.classList.add("div_tareas");

        div_tarea.innerHTML = `
            <p class="text">${cada_tarea.texto}</p>
            <div class="estado">${cada_tarea.estado ? '[X]' : '[_]'}</div>
        `;
        
        cuadro_de_tareas.appendChild(div_tarea);
    });
}

cargar_tareas();

function cargar_botones() {
    let caja_btn = document.querySelector(".botones");
    
    caja_btn.innerHTML = `<div class="btn_mas"> + </div>`;
}

cargar_botones();
