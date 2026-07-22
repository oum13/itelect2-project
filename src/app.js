// app.js - Main application entry point
console.log('Server starting...');

import {formatDate, validateTask, mergeTaskUpdate, createTask} from './utils.js';
import { fetchSampleUsers, fetchSampleUsersPromise } from './api.js';

const task = { title: "Finish project", dueDate: new Date("2026-07-22") };
console.log(task);

console.log(); 

// Example of formatDate
console.log(formatDate(new Date("2026-07-22")));

console.log(); 

// Examples of validateTask
console.log(validateTask(task));
console.log(validateTask({}));

console.log(); 

// Example of mergeTaskUpdate
const updatedTask = mergeTaskUpdate(task, { title: "Updated Title", dueDate: formatDate(new Date("2026-07-28")) });
console.log(updatedTask);

console.log(); 

// Example of fetchSampleUsers() 
const users = await fetchSampleUsers();
console.log(users);

console.log(); 

// Example of fetchSampleUsersPromise()
const usersPromise = await fetchSampleUsersPromise();
console.log(usersPromise);

console.log(); 

// function to call fetchSampleUsers and createTask with try/catch
async function main() {
    try {
        const users = await fetchSampleUsers();
        console.log(users);

        console.log(); 

        const task = createTask({ title: "GT 4", dueDate: formatDate(new Date("2026-08-13")) });
        console.log(task);
    } catch (err) {
        console.error("Error:", err.message);
    }
}

main();