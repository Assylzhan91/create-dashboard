import React from 'react'
import {NavLink} from "react-router-dom";

import {Button, Form} from "react-bootstrap";
import styles from "./styles.module.scss"
import {connect} from 'react-redux'
import {inputChange,textAreaChange, addCard} from "../../actions/actions";
import {getValues} from "../../selectors/selectors";
import {withRouter} from "react-router-dom";

export const AddCard = (props)=> {

    const submitHandler = (e)=> {
        e.preventDefault()
        props.addCard(props.values.value, props.values.text)
        props.history.goBack()
    }

    const isGreatFourCharacter = ()=>{
        if (!props.values.isValid && props.values.value.length) {
            console.log(!props.values.isValid)
            return (
                <Form.Text className="text-danger">
                    Please, enter 4 or greater character
                </Form.Text>
            )
        }
    }
    const isFillAllFields = props.values.isValid && !!props.values.text.length
    return (
        <div className={styles.addCart}>
            <h1 className='text-center'>Add a card</h1>
            <Form onSubmit={(e)=> submitHandler(e)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text"
                                  placeholder="Please, enter a heading"
                                  value={props.values.value}
                                  onChange={(e)=>props.inputChange(e.target.value.trim())} />
                    {
                        isGreatFourCharacter()
                    }

                </Form.Group>

                <Form.Group controlId="text">
                    <Form.Control as="textarea"
                                  rows="3"
                                  onChange={(e)=>props.textAreaChange(e.target.value)}
                                  placeholder="Enter text"
                                  value={props.values.text}
                    />
                </Form.Group>
                <Button variant="outline-success"
                        disabled={!isFillAllFields}
                        type={"submit"}
                >
                   Add to list
                </Button>
                <Button variant="outline-secondary">
                    <NavLink to='/'>Cancel</NavLink>
                </Button>
            </Form>

      </div>
    )

}
const mapStateToProps = (state)=>{
    return {
        values: getValues(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        inputChange: (value) => dispatch(inputChange(value)),
        textAreaChange: (text) => dispatch(textAreaChange(text)),
        addCard: (value, text) => dispatch(addCard( value, text))
    }
}



export  default connect(mapStateToProps, mapDispatchToProps)(
    withRouter(AddCard))