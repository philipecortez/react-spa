import React from 'react'
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom'
import Home from './Home'
import Stuff from './Stuff'
import Contact from './Contact'

const Main = () => (
  <HashRouter>
    <>
      <h1>Simple SPA</h1>
      <ul className='header'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/stuff'>Stuff</NavLink></li>
        <li><NavLink to='/contact'>contact</NavLink></li>
      </ul>
      <div className='content'>

      </div>
    </>
  </HashRouter>
)

export default Main