import React, {Component} from 'react'
import ItemCart from './ItemCart'
import styles from "./styles.module.scss"
import {connect} from 'react-redux'
import {getListItem} from '../../selectors/selectors'

export class  Cards extends Component {

    render() {
        const {listItem} = this.props
        console.log(listItem)
        return (
            <div>

                <ul className={styles.list}>
                    {
                        listItem.map(item => (
                            <ItemCart key={item.id} itemProps={item} />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
  return {
      listItem: getListItem(state)
  }
}



export  default connect(mapStateToProps)(Cards)
