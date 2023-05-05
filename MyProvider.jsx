import React from 'react';


export const MyContext = React.createContext();


function MyProvider({ children }) {
  const myData = 
  {
    fname:"Suleman", 
    message: 'Hello, world!'
 };

  return <MyContext.Provider value={myData}>{children}</MyContext.Provider>;
}

export default MyProvider;
