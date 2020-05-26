import React, { Component } from 'react'
import {NavLink} from "react-router-dom";

class Main extends Component {

  render() {

    return (
        <div>
            <h1>AddCart</h1>
        <div>
          <NavLink to='/'>Back to Main</NavLink>
        </div>
      </div>
    )
  }
}

export  default Main