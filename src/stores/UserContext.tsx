import React from 'react';
import useFetch from '../hooks/useFetch';

type User = {
  id: number;
  nome: string;
  idade: number;
  aulas: number;
  cursos: number;
  preferencias: {
    playback: number;
    volume: number;
    qualidade: string;
  };
}

type IUserContext = {
  data: null | User,
  loading: boolean,
};

const UserContext = React.createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) 
    throw new Error('UserContext/useContext Ui deve estar dentro do Provider');
  return context;
};

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const user = useFetch<User>('https://data.origamid.dev/usuarios/1');
  

  return (
    <UserContext.Provider
      value={
           user
      }
    >
      {children}
    </UserContext.Provider>
  );
};
