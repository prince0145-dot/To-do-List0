const taskInput = document.getElementById("task-Input");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if (taskInput.value === ''){
        alert("You must write something!");

    }
    else {
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    taskInput.value = "";
    savedata();

}
listcontainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML);

}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();


