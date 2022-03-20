export const mockTaks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

export const getMockTasks = (delay = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockTaks), Math.random() * delay);
  });
};
