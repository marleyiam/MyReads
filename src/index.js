import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './components/interceptor/xhrInterceptor';
import ThemeSwitcher from './components/theme-switcher/ThemeSwitcher';

ReactDOM.render(
  <BrowserRouter>
    <ThemeSwitcher defaultTheme='light'>
      <App />
    </ThemeSwitcher>
  </BrowserRouter>, 
  document.getElementById('root')
);
