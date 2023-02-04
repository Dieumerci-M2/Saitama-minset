import React, { createContext, useState, useEffect } from 'react';

const BookContext = createContext();

const BookProvider = ( { children } ) => {
    
    const [ user, setUser ] = useState();
    
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('InfoUser'));
    setUser(userInfo);
  }, []);

  return (
    <BookContext.Provider
      value={{
        // All state can be exported here
      }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext };
export default BookProvider;
