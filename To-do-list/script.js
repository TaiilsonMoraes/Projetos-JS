const btn = document.querySelector(".add");


function addTask(){


    //CLONANDO LOYALT
    let loyalt = document.querySelector(".loyalt-task");
    let loyaltclone = loyalt.cloneNode(true);
    //

    //ADICIONANDO O TITULO DA TASK AO CLONE
    let task = document.querySelector("#tarefa").value;
    let taskscontainer = document.querySelector(".tasks");
    loyaltclone.value = task;

    //REMOVENDO CLASSES
    loyaltclone.classList.remove("hide");
    loyaltclone.classList.remove("done");
    //

    //FUNCIONALIDADE DO BOTÃO DE DELETAR
    loyaltclone.querySelector(".delete-btn").addEventListener("click",function(e){
        e.target.closest(".loyalt-task").remove();
    });
    //


    //FUNCIONALIDADE DO BOTÃO DE CONCLUIR
    loyaltclone.querySelector(".done-btn").addEventListener("click", function(e){
        e.target.closest(".loyalt-task").classList.toggle("done");
    })

    //


    //ADICIONANDO TASK
    taskscontainer.appendChild(loyaltclone);


    console.log(loyaltclone)

}

btn.addEventListener("click",(e) =>{
    e.preventDefault();
    addTask();
})


