export const myLogger = (store) => (next) => (action) => {
  if (!action.type) {
    next(action);
  }

  console.log("type", action.type);
  console.log("current state", store.getState());

  next(action);
  console.log("next state", store.getState());
};
