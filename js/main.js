import {
    tareas
} from './data_todo.js';

function cargar_tareas() {

    let cuadro_de_tareas = document.querySelector(".lista_tareas");

    tareas.forEach((cada_tarea) => {

        let div_tarea = document.createElement("div");
        div_tarea.classList.add("div_tareas");

        if (cada_tarea.estado) {
            div_tarea.innerHTML = `
            <p class="texto">${cada_tarea.texto}</p>
            <div class="estado">[/]</div>
        `;
        } else {
            div_tarea.innerHTML = `
            <p class="texto">${cada_tarea.texto}</p>
            <div class="estado">[X]</div>
        `;
        }
        cuadro_de_tareas.appendChild(div_tarea);
    });
}
cargar_tareas();

function cargar_botones() {
    let caja_btn = document.querySelector(".btn");

    caja_btn.innerHTML = ` <div class="btn_mas"> + </div>`;
}
cargar_botones();

function cargar_formulario() {
    let ventana_formulario = document.querySelector(".formulario");
    ventana_formulario.classList.add("activar_b")
    ventana_formulario.innerHTML = `
        <div class="div_controles">
            <div class="btn_cerrar">X</div>
        </div>

        <div class="div_formulario">
            <h2>Crear Tarea</h2>
            <input type="txt" class="entrada-tarea">
            <select id="categoria" name="categoria">
                <option>Categoría</option>
                <option>Casa</option>
                <option>Escuela</option>
                <option>Trabajo</option>
            </select>
        </div>

        <div class="btn-crear">Crear</div>
    `;

    let btn_cerrar2 = document.querySelector(".btn_cerrar");
    btn_cerrar2.addEventListener("click", () => {
        ventana_formulario.classList.remove("activar_b")
    });




    let btn_crear = document.querySelector(".btn-crear");

    btn_crear.addEventListener("click", () => {


        let tarea = document.querySelector(".entrada-tarea").value;



        let estructura_de_tarea = {
            estado: true,
            id: tarea,
            texto: tarea,
        };


        tareas.push(estructura_de_tarea)


        let cuadro_de_tareas = document.querySelector(".lista_tareas");
        cuadro_de_tareas.innerHTML = "";


        cargar_tareas();


        ventana_formulario.classList.remove("activar_b")





    })
}

let btn_formulario = document.querySelector(".btn_mas");
btn_formulario.addEventListener("click", cargar_formulario)