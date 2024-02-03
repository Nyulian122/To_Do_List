let tareas= [
    {
        estado : true,
        id : 1,
        texto : "Quitar todos lo tornillos de la tapa" 
    },
    {
        estado : false,
        id : 2,
        texto : "Levantar la tapa con cuidado" 
    },
    {
        estado : true,
        id : 3,
        texto : "Desconectar la bateria" 
    },
    {
        estado : false,
        id : 4,
        texto : "Identificar componentes" 
    },
]

function cargar_tareas(){
    let cuadro_de_tareas = document.querySelector(".root")
    tareas.forEach((cada_tarea) => {

        let div_tarea = document.createElement("div")
        div_tarea.classList.add("div_tareas")
        if(cada_tarea.estado){

        div_tarea.innerHTML = `
        <p class="text">${cada_tarea.texto}</p>
        <div class="estado">[X]</div>
        `;}else{

            div_tarea.innerHTML = `
        <p class="text">${cada_tarea.texto}</p>
        <div class="estado">[X]</div>
        `;

        }

        cuadro_de_tareas.appendChild(div_tarea);

    })
}

cargar_tareas();