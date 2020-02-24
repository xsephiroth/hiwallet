import React, { createContext, useReducer } from 'react';

const initialState = {
  billings: [],
  accounts: []
};
try {
  const wallet = JSON.parse(window.localStorage.getItem('wallet'));
  initialState.billings = wallet?.billings ?? [];
  initialState.accounts = wallet?.accounts ?? [];
} catch (e) {
  console.error(e);
}

const withLocalStorage = reducer => (state, action) => {
  const newState = reducer(state, action);
  window.localStorage.setItem('wallet', JSON.stringify(newState));
  return newState;
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ACCOUNT':
      return { ...state, accounts: [...state.accounts, action.payload] };
    default:
      return state;
  }
};

const store = createContext();
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(withLocalStorage(reducer), initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
