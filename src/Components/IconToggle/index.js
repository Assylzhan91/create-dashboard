import React, { Component } from 'react'
import style from './iconToggle.module.scss'
import classNames from 'classnames'

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

        const styles = classNames(
            {[style.icon]: true},
            {'show': this.state.toggleView}
            )
        return (
            <>
                <div className={styles} onClick={this.toggleHandler}>
                    <span className={style.off}>off</span>
                    <span className={style.on}>on</span>
                </div>
                <p className='boolean-data'>{String(this.state.toggleView)}</p>
            </>
    )
  }
}

export  default IconToggle