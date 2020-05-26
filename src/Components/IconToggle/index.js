import React, { Component } from 'react'
import style from './iconToggle.module.scss'
import {useState} from "react";

class IconToggle extends Component {
    state = {
        toggleView: false
    }

    toggleHandler = ()=>{
        this.setState({
            toggleView: !this.state.toggleView
        })
    }

    render() {
        return (
            <>
                <div className={style.icon} onClick={this.toggleHandler}>
                    <span className={style.off}>off</span>
                    <span className={style.on}>on</span>
                </div>
                <p className='some'>{String(this.state.toggleView)}</p>
            </>
    )
  }
}

export  default IconToggle