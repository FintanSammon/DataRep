const tasksArray = [];

const addTasks = (myValue) => {
    tasksArray.push(myValue);
    console.log("Task: " + myValue + " has been added to our Array");
    return tasksArray.length;
};

