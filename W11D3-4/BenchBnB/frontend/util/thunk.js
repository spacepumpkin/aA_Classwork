
// takes in Store
const thunk = function ({ dispatch, getState }) {
  return function (nextMiddleWare) {
    return function (action) {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }
      return nextMiddleWare(action);
    }
  }
};

export default thunk;