import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import { BrowserRouter } from 'react-router-dom'
import ThemeSwitcher from '../components/theme-switcher/ThemeSwitcher';


/** 
 This course is not designed to teach Test Driven Development. 
 Feel free to use this file to test your application, but it 
 is not required.
**/

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <ThemeSwitcher defaultTheme='light'>
        <App />
      </ThemeSwitcher>
    </BrowserRouter>,
    div
  )
})


