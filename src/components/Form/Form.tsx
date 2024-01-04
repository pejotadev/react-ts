import React, { Reducer, useReducer } from 'react';
import Input from '../utils/Input';

type State = {
  nome: string;
  email: string;
};

type Action = { type: 'setName'; payload: string; } | 
{ type: 'setEmail'; payload: string; };

const initialState: State = {
  nome: '',
  email: '',
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'setName':
      return { ...state, nome: action.payload };
    case 'setEmail':
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const Form: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Input
        type="text"
        label={`Nome: ${state.nome}`}
        labelId='nome'
        value={state.nome}
        onChange={({target}) => dispatch({ type: 'setName', payload: target.value })}
      />
      <br />
      <Input
        type="text"
        label={`Email: ${state.email}`}
        labelId='email'
        value={state.email}
        onChange={({target}) => dispatch({ type: 'setEmail', payload: target.value })}
      />
    </div>
  );
};

export default Form;
