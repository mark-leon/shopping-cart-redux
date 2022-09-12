//import rootReducer from "../rootReducer";

// create our first middleware
const myLogger = () => (next) => (action) => {
  // console.log(`Action: ${JSON.stringify(action)}`);
  // console.log(`Before: ${JSON.stringify(store.getState())}`);
  //let upcomingState = store.getState();
  //console.log(upcomingState[0].quantity);
  // let upcomingState = [action].reduce(rootReducer, store.getState());
  // console.log(upcomingState[0].quantity);
  // for (let i = 0; i < upcomingState.length; i++) {
  //   if (upcomingState[i].quantity == 0) {
  //     break;
  //   } else {
  //     return next(action);
  //   }
  // }
  // console.log(typeof upcomingState);
  //console.log(upcomingState[i].quantity);

  // console.log(`Upcoming State: ${JSON.stringify(upcomingState)}`);
  // console.log(action);
  return next(action);

  // pass action
};

export default myLogger;
