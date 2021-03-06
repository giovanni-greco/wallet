// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: ['BRL'],
  expenses: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:

    return { ...state,
      expenses: action.payload,
    };

  case 'FETCH_THUNK':
    return { ...state };

  default:
    return state;
  }
};

export default reducer;
