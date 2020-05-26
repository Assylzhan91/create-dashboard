import React, { Component } from 'react'
import ItemCart from './ItemCart'
import { Container } from 'react-bootstrap'

class Cart extends Component {
  render() {
    return (
      <div>
        <ul>
            <ItemCart num={1}/>
            <ItemCart num={2}/>
            <ItemCart num={3}/>
        </ul>
      </div>
    )
  }
}

export  default Cart