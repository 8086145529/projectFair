import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min (4).css'
import { BrowserRouter } from 'react-router-dom';
import ContextShare from './Contexts/ContextShare';
import TokenAuth from './Contexts/TokenAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ContextShare>
    <TokenAuth>
       <BrowserRouter>
       <App />
       </BrowserRouter>
    </TokenAuth>
  </ContextShare>
  </React.StrictMode>
);

