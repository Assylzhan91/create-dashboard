import React from 'react'
import {Card} from 'react-bootstrap'
import style from './styles.module.scss'

const ItemCart = ({itemProps}) => {

  return (
    <>
      <Card className={style.itemCart}>
          <Card.Body>
              <Card.Title>{`${itemProps.heading} ${String(itemProps.id)}`}</Card.Title>
              <Card.Text>
                  {itemProps.text}
              </Card.Text>
          </Card.Body>
      </Card>
    </>
  )
}

export default ItemCart

