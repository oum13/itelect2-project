export const formatDate = (date) => `Due: ${date.toLocaleDateString()}`;

export const validateTask = (task = {}) => {
    const { title, dueDate } = task;
    return Boolean(title && dueDate);
};

export const mergeTaskUpdate = (original, ...updates) => {
    return updates.reduce((merged, update) => ({ ...merged, ...update }), original);
}

class TaskValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "TaskValidationError";
    }
}

export const createTask = (task) => {
    if (!validateTask(task)) {
        throw new TaskValidationError("Invalid task data");
    }

    return {
        id: Date.now(),
        completed: false,
        ...task
    };
};

export const task = [
    { id: 1, title: "Task 1", dueDate: new Date("2026-07-22"), completed: false },
    { id: 2, title: "Task 2", dueDate: new Date("2026-07-23"), completed: false },
    { id: 3, title: "Task 3", dueDate: new Date("2026-07-24"), completed: false }
];