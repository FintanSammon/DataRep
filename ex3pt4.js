//Creating a deleteTask function so that it is able to:
//i. It receives a string as a parameter called task.
//ii. It removes that string from the array.
//iii. It prints in console a message indicating the deletion.
//iv. It returns the number of elements in the array after the deletion.


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
