import React from 'react';

import { AuthContextProvider } from './contexts/auth.context';
import { Routes } from './routes';
import './styles/global.css';

function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}

export default App;
