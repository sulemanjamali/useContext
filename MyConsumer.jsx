import React, { useContext } from 'react';
import { MyContext } from './MyProvider';


function MyConsumer() {
  const myData = useContext(MyContext);

  return (
    <>
    <h1>{myData.message}</h1>
    <h2>{myData.fname}</h2>
    </>
  )
}

export default MyConsumer;
