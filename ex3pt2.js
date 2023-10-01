//Creating an addTask function so that it:
//i. It receives a string as a parameter called task.
//ii. It adds the task to the array.
//iii. It prints a message in the console indicating the insertion.
//iv. It returns the number of elements in the array after the insertion.const tasksArray = [];

const addTasks = (task) => {
    tasksArray.push(task);
    console.log("Task: " + task + " has been added to our Array");
    return tasksArray.length;
};

addTasks("Learn JS");
addTasks("Learn React");