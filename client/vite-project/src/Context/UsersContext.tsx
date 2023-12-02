import { createContext, useContext, useState, useEffect } from 'react';
import { getUsers } from '../services/users';

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState<any>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersArray = await getUsers();
        setUsers(usersArray);
      } catch (error) {
        setError('Error loading users')
      }
    }

    fetchData();
  }, [])
  
  return ( 
    <UsersContext.Provider value={{ users, error }}>
      {children}
    </UsersContext.Provider>
  )
}

export const useUsers = () => {
  return useContext(UsersContext);
}