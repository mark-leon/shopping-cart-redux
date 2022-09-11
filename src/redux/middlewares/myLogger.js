import rootReducer from "../rootReducer";

// create our first middleware
const myLogger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(store.getState())}`);
  let v = store.getState();
  console.log(v[0].quantity);
  const upcomingState = [action].reduce(rootReducer, store.getState());

  console.log(`Upcoming State: ${JSON.stringify(upcomingState)}`);
  console.log(action);

  // pass action
  return next(action);
};

export default myLogger;
