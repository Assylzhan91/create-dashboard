import React, { Component } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import  Cards from '../Cards'
import  Header from '../Header'

class Main extends Component {
  render() {
    return (
        <div className='main'>
          <Header/>
            <DndProvider backend={HTML5Backend}>
                <Cards list={this.props.list}/>
            </DndProvider>
      </div>
    )
  }
}

export  default Main