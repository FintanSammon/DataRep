const tasksArray = [];

const addTasks = (task) => {
    tasksArray.push(task);
    console.log("Task: " + task + " has been added to our Array");
    return tasksArray.length;
};

addTasks("Learn JS");
addTasks("Learn React");