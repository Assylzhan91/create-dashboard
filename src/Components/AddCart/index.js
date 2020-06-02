import React from 'react'
import {NavLink} from "react-router-dom";

import {Button, Form} from "react-bootstrap";
import {connect} from 'react-redux'
import {inputChange,textAreaChange, addCard, clearFields} from "../../actions/actions";
import {getValues} from "../../selectors/selectors";
import styles from "./styles.module.scss"
import {COUNT_LIMIT_INPUT} from "../../constants/constants"
import {withRouter} from "react-router-dom";

export const AddCard = (props)=> {
    const { values, addCard,
            history, clearFields,
            inputChange, textAreaChange
    } = props
    const submitHandler = (e)=> {
        e.preventDefault()
        addCard(values.value, values.text)
        history.goBack()
    }

    const isGreatFourCharacter = ()=>{
        if (!values.isValid && values.value.length) {
            return (
                <Form.Text className="text-danger">
                    Please, enter {COUNT_LIMIT_INPUT} or greater character
                </Form.Text>
            )
        }
    }
    const isFillAllFields = values.isValid && !!values.text.length
    return (
        <div className={styles.addCart}>
            <h1 className='text-center'>Add a card</h1>
            <Form onSubmit={(e)=> submitHandler(e)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text"
                                  placeholder="Please, enter a heading"
                                  value={values.value}
                                  onChange={(e)=>inputChange(e.target.value.trim())} />
                    {
                        isGreatFourCharacter()
                    }

                </Form.Group>

                <Form.Group controlId="text">
                    <Form.Control as="textarea"
                                  rows="3"
                                  onChange={(e)=>textAreaChange(e.target.value)}
                                  placeholder="Enter text"
                                  value={values.text}
                    />
                </Form.Group>
                <Button variant="outline-success"
                        disabled={!isFillAllFields}
                        type={"submit"}
                >
                   Add to list
                </Button>
                <Button variant="outline-secondary" onClick={()=>clearFields(values.value, values.text)}>
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
        addCard: (value, text) => dispatch(addCard(value, text)),
        clearFields: (value, text)=> dispatch(clearFields(value, text))
    }
}



export  default connect(mapStateToProps, mapDispatchToProps)(
    withRouter(AddCard))