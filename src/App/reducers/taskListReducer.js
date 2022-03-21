export const taskListReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const nextId = state.length === 0 ? 0 : state[state.length - 1].id + 1;
      return [...state, { id: nextId, text: action.text, done: false }];
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

    case "fetch": {
      return [...state, ...action.tasks];
    }

    default:
      return state;
  }
};
