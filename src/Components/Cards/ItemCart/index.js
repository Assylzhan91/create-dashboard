import React, {useState} from 'react'
import {Card, Modal, Button} from 'react-bootstrap'
import style from './styles.module.scss'

const ItemCart = ({itemProps}) => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(!show)
    const handleShow = () => setShow(!show)
    return (
      <Card className={style.itemCart}>
          <Card.Body>
              <Card.Title>{`${itemProps.heading} ${String(itemProps.id)}`}</Card.Title>
              <Card.Text>
                  {itemProps.text}
              </Card.Text>
              <Button onClick={handleShow}>
                  Details
              </Button>
          </Card.Body>


          <Modal show={show} onHide={()=>{}}>
              <Modal.Header>
                  <Modal.Title>{`${itemProps.heading} ${String(itemProps.id)}`}</Modal.Title>
              </Modal.Header>
              <Modal.Body> {itemProps.text}</Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                      Close
                  </Button>
              </Modal.Footer>
          </Modal>
      </Card>
  )
}

export default ItemCart
