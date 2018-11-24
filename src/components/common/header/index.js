import React, {Component } from  'react'
import './head.scss'
class Header extends Component {
    render(){
        return (
            <header className="header">
                <div className="left">
                    <i></i>
                </div>
                <div className="center">
                    焙忘录
                </div>
                <div className="right">
                    <i></i>
                </div>
            </header>
        )
    }
}

export default Header