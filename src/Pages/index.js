import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Main from '../Components/Main'
import AddCart from '../Components/AddCart'

export default function PagesRouter() {
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