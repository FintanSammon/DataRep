let tasksArray = [];

let addTask = (task) => {
    tasksArray.push(task);
    console.log("Task: " + task + " has been added to our Array");
    return tasksArray.length;
};

let listAllTasks = () => {
    for (let i = 0; i < tasksArray.length; i++) {
        console.log(tasksArray[i]);
    }


}

addTask("Learn JS");
addTask("Learn React");

listAllTasks();
