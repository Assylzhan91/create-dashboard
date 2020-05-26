import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Main from '../Components/Main'
import AddCart from '../Components/AddCart'

 class PagesRouter extends Component{

    render() {
        return (
          <div className="pages">
              <Switch>
                  <Route path="/" exact>
                      <Main/>
                  </Route>
                  <Route path="/add-cart">
                      <AddCart/>
                  </Route>
              </Switch>
          </div>
        );
  }
 }

 export default PagesRouter


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