import React, { Component } from 'react'
import { Switch } from 'antd'
import style from './iconToggle.module.scss'

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
            <div className={style.icon}>
                <Switch
                    checkedChildren="OFF"
                    unCheckedChildren="ON" defaultChecked
                    onClick={this.toggleHandler}
                />
            </div>
    )
  }
}

export  default IconToggle