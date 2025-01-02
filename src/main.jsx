import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext.jsx';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <CssBaseline>
    <BrowserRouter>
      <UserProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </UserProvider>
    </BrowserRouter>
  </CssBaseline>
);
