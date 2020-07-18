import React from 'react';
import GlobalRoutes from './Routes';
import { GlobalProvider } from './globalContext/globalState';
function App() {
  return (
    <GlobalProvider>
      <GlobalRoutes />
    </GlobalProvider>
  );
}

export default App;
