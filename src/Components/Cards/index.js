import React from 'react'
import ItemCart from './ItemCart'
import styles from "./styles.module.scss"
import {connect} from 'react-redux'

export  const  Cards = ({list}) =>{

    return (
      <div>
        <ul className={styles.list}>
            {
                list.map(item => (
                    <ItemCart key={item.id} itemProps={item} />
                ))
            }
        </ul>
      </div>
    )
}

const mapStateToProps = ({reducerAddCard})=>{
  return {
      list: reducerAddCard.list
  }
}

export  default connect(mapStateToProps)(Cards)
