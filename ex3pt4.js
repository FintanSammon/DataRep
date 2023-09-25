let tasksArray = [];

let addTask = (task) => {
    tasksArray.push(task);
    console.log("Task: " + task + " has been added to our Array");
    return tasksArray.length;
}

let listAllTasks = () => {
    for (let i = 0; i < tasksArray.length; i++) {
        console.log(tasksArray[i]);
    }

    tasksArray.forEach((item) => {
        console.log(item);
    });
    


}

let deleteTask = (task)=>{
    let index = tasksArray.indexOf(task);
    if(index > -1){
        tasksArray.splice(index, 1);
        console.log("Task: "+task+" has been removed from the array");
    }
    return tasksArray.length;
}

addTask("Learn JS");
addTask("Learn React");

listAllTasks();
