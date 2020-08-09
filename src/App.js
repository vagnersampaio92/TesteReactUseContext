import React from 'react';

import GlobalStyle from './styles/global'


import Home from './components/Home';
import SideProvider from './contexts/context'

const App = () => {
  return (
    <>
      <GlobalStyle />
     
    <SideProvider>
      <Home></Home>
    </SideProvider>


    </>

  );
}


export default App;
