import * as React from 'react';
import MyProvider from './MyProvider';
import MyConsumer from './MyConsumer';



function App() {
 

  return (
    <>
    <MyProvider>
    <MyConsumer />
    </MyProvider>
    </>
  )
}

export default App




