// store => next => action
const thunk = ({ dispatch, getState }) => next => action => {
   //how the thunk lina plsss
   if (typeof action === 'function') {
      return action(dispatch, getState);
   }
   return next(action);
}; 

export default thunk;

