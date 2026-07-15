// app.js - Main application entry point
console.log('Server starting...');

import {formatDate, validateTask, mergeTaskUpdate} from './utils.js';

const task = { title: "Finish project", dueDate: new Date("2026-07-22") };
console.log(task);

// Example of formatDate
console.log(formatDate(new Date("2026-07-22")));

// Examples of validateTask
console.log(validateTask(task));
console.log(validateTask({}));

// Example of mergeTaskUpdate
const updatedTask = mergeTaskUpdate(task, { title: "Updated Title", dueDate: formatDate(new Date("2026-07-28")) });
console.log(updatedTask);