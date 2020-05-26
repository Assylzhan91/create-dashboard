import React, { Component } from 'react'
import  Header from '../Header'
import  Cards from '../Cards'


class Main extends Component {
  render() {
    return (
        <div className='main'>
          <Header/>
          <Cards list={this.props.list}/>
      </div>
    )
  }
}

export  default Main