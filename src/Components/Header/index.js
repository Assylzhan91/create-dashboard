import React from 'react'
import {Alert, Button} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import styles from "./styles.module.scss"
import IconToggle from "../IconToggle"


const Header = props => {

  return (
    <Alert variant='primary' className={styles.header}>
        <IconToggle/>
        <Button variant="outline-dark">
            <NavLink to='/add-cart'>Add a card product</NavLink>
        </Button>
    </Alert>
  )
}



export default Header