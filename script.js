document.getElementById('addTask').onclick = function(){ //function to add new task
var task = document.getElementById("newTask").value; //gets the value inserted into the
textbox by the user
if(task == ''){ //checks if any task has been entered or the "Add button" has been pressed
accidentally
alert("You haven't entered a task yet!");
return;
}
document.getElementById("newTask").value = null; //removes the text entered in the
textbpx
document.getElementById('listHeader').style.display = 'block'; //displays the list elements
var newTaskElement = document.createElement("LI");
var newTaskElementContent = document.createTextNode(task);
newTaskElement.appendChild(newTaskElementContent);
document.getElementById('tasksList').appendChild(newTaskElement);

}
document.getElementById('deleteTask').onclick = function() { //function to delete task
var deleteList = document.getElementById('tasksList');
deleteList.removeChild(deleteList.childNodes[deleteList.childElementCount]);
if(deleteList.childElementCount == 0) {
document.getElementById('listHeader').style.display = 'none';
}
}
document.getElementById('tasksList').addEventListener("click", function(ev) { //function to
mark task as done
if (ev.target.tagName == 'LI') {
ev.target.classList.toggle("selectTask");
}
});
