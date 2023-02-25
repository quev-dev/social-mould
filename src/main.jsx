import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import 'animate.css';

import './theme/sass/variables.scss';
import './theme/sass/index.scss';
import './theme/sass/defaults.scss';
import './theme/sass/pages.scss';
import './theme/sass/sections.scss';
import './theme/sass/previews.scss';
import './theme/sass/desktop.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)