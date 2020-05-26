import React, { Component } from 'react'
import ItemCart from './ItemCart'
import styles from "./styles.module.scss"


class Cards extends Component {
    state = {
        list: getList()
    }
    render() {
    const {list} = this.state
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
}

export  default Cards

//Mock data

 function getList() {
    return [
        {   id: 1,
            heading: "HEADING",
            text: "Consectetur adipisicing elit. Ad aliquam amet deleniti dolor dolorem doloremque ducimus eaque fuga fugiat impedit incidunt inventore iste magnam nemo, quod sint, suscipit tempora veniam!",
        },
        {   id: 2,
            heading: "HEADING",
            text: "Consectetur adipisicing elit. Ad aliquam amet deleniti dolor dolorem doloremque ducimus eaque fuga fugiat impedit incidunt inventore iste magnam nemo, quod sint, suscipit tempora veniam!",
        }
        // ,
        // {   id: 3,
        //     heading: "HEADING",
        //     text: "Consectetur adipisicing elit. Ad aliquam amet deleniti dolor dolorem doloremque ducimus eaque fuga fugiat impedit incidunt inventore iste magnam nemo, quod sint, suscipit tempora veniam!",
        // },
        // {   id: 4,
        //     heading: "HEADING",
        //     text: "Consectetur adipisicing elit. Ad aliquam amet deleniti dolor dolorem doloremque ducimus eaque fuga fugiat impedit incidunt inventore iste magnam nemo, quod sint, suscipit tempora veniam!",
        // },
        // {   id: 5,
        //     heading: "HEADING",
        //     text: "Consectetur adipisicing elit. Ad aliquam amet deleniti dolor dolorem doloremque ducimus eaque fuga fugiat impedit incidunt inventore iste magnam nemo, quod sint, suscipit tempora veniam!",
        // }
    ]
}