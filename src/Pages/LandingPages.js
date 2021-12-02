import React, {Component} from 'react' 

import Header from "../Parts/Header"

export default class LandingPages extends Component {
    render() {
        return <>
           <Header {...this.props}></Header> 
        </>
    }
}