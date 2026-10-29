import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

// Global MonoUI Kit SCSS Foundations
import './styles/global.scss';

/**
 * Root Application Component
 * MonoUI Kit Documentation Experience
 */
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
