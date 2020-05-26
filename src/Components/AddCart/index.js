import React from 'react'
import {NavLink} from "react-router-dom";
import FieldsText from "./FieldsText";
import {Button} from "react-bootstrap";
import styles from "./styles.module.scss"
import {connect} from 'react-redux'

export const AddCard = ({addCardHandler})=> {

    return (
        <div className={styles.addCart}>
            <h1 className='text-center'>Add a card</h1>
            <FieldsText/>
            <Button variant="outline-success"
            >
                <NavLink to='/'>Back to Main</NavLink>
            </Button>
            <Button variant="outline-secondary">
                <NavLink to='/'>Cancel</NavLink>
            </Button>
      </div>
    )

}

const mapStateToProps = state =>{
    return state
}

const mapDispatchToProps = {

}


export  default connect(mapStateToProps, mapDispatchToProps)(AddCard)