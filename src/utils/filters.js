export const getCompletedTasks = (tasks) => tasks.filter(({ done }) => done);
export const getActiveTasks = (tasks) => tasks.filter(({ done }) => !done);
