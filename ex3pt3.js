//Creating a listAllTasks function so that it:
//i. It iterates over all the tasks in the array.
//ii. It prints each array item in the console.

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
