import React, { Component } from 'react'
import  { NavLink } from 'react-router-dom'

import  Cart from '../Cart'


class Main extends Component {

  render() {

    return (
      <div>
          <div>
              <NavLink to='/add-cart'>Add a cart</NavLink>
          </div>
            <h1>Main</h1>
          <Cart/>
      </div>
    )
  }
}

export  default Main