// Redux Library
const createStore = (reducer) => {
    // The createStore should have four parts
    // 1. state
    // 2. Get the current state (getState)
    // 3. Listen to changes on the state (subscribe)
    // 4. Update the state (dispatch)

    let state;
    let listeners = [];

    const getState = () => state;

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter((l) => l !== listener);
        };
    };

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
    };

    return {
        getState,
        subscribe,
        dispatch,
    };
};
