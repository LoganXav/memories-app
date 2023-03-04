import React, { createContext, useState } from 'react';

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <FormContext.Provider value={{ user, setUser }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;