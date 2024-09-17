import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import { useUserInfo } from '../hook/useUserInfo';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get('poshcoder'));

  useEffect(() => {
    if (token) {
      Cookies.set('poshcoder', token);
    } else {
      Cookies.remove('poshcoder');
    }
  }, [token]);


  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
