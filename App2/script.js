const createButton = document.getElementsByName("buttonCreate")[0]
const removeAll_button = document.getElementsByName("buttonRemoveAll")[0]
const inputName = document.getElementsByName("nameTask")[0]
const taskList = document.getElementsByName("tasksList")[0]
const showTasks = document.getElementsByName("showTasks")[0]
const tasks = new Array()

function isText(str){
    if(typeof str != "string"){
        return false
    }
    for(let i = 0; i < str.length; i++){
        if(str[i] != " "){
            return true
        }
    }
    return false
}
function getTextNoSpace(tex){    
    let a = true;
    let tex2 = ""
    for(let i = 0; i < tex.length; i++){
        if(!(tex[i] == " " && a)){
            tex2 += tex[i]
        }
    }
    return tex2
}
function createTask(){
    let taskN = inputName.value
    if(!isText(taskN)){
        inputName.style.borderColor = "red"
        return
    }
    inputName.value = getTextNoSpace(taskN)
    const taskk = document.createElement("task")
    taskk.value = "1"
    taskk.innerHTML ="<div>"+ taskN + " <select>\n<option value = \"1\">В процессе</option>\n<option value = \"2\"n>Выполнено</option>\n</select>\n<input name=\"deleteButton\" type=\"button\" value=\"Удалить\"></div>"
    const deleteButton = taskk.getElementsByTagName("input")[0]
    deleteButton.addEventListener("click",(task)=>{
        const taskk =task.originalTarget.parentElement.parentElement
        for(let i = 0; i < tasks.length; i++){
            if(taskk == tasks[i]){
                tasks.splice(i,1);
                break;
            }
        }
        taskk.remove();
    })
    const statusTask = taskk.getElementsByTagName("select")[0]
    statusTask.addEventListener("click",(cl,stTask = statusTask)=>{
        const taskk = stTask.parentElement.parentElement
        const selectStatus = stTask
        console.log(selectStatus)
        taskk.value = selectStatus.selectedOptions[0].value
    })
    tasks.push(taskk)
    updateList()
    
}
function updateList(){
    
    taskList.innerHTML = ""

    for(let i = 0; i < tasks.length;i++){
        
        if((tasks[i].value === showTasks.value)||(showTasks.value === "0")){
            taskList.appendChild(tasks[i])
        }
    }
}
function removeAllTasks(){
    tasks.splice(0,tasks.length);
    updateList()
}


createButton.addEventListener("click",createTask)
showTasks.addEventListener("click",updateList)
removeAll_button.addEventListener("click",removeAllTasks)