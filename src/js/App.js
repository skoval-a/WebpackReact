import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './../styles/style.scss'

import Header from './Components/Header'

import Home from './Containers/Home'
import Contacts from './Containers/Contacts'
import Company from './Containers/Company'
import Products from './Containers/Products'
import Services from './Containers/Services'
import About from './Containers/About'


export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/company" component={Company} />
                    <Route path="/products" component={Products} />
                    <Route path="/services" component={Services} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        )
    }
}
