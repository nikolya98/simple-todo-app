export const taskListReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const task = { id: state.length, text: action.text, done: false };
      return [...state, task];
    }

    case "edit": {
      return state.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        }
        return task;
      });
    }

    case "delete": {
      return state.filter(({ id }) => id !== action.id);
    }

    case "clear": {
      return [];
    }

    default:
      return state;
  }
};
