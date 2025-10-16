import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { SnackbarProvider } from 'notistack';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      autoHideDuration={2000}
      preventDuplicate
      variant="default"
      classes={{
        containerRoot: 'z-[9999]',
      }}
    >
      <App />
    </SnackbarProvider>
  </StrictMode>
);
