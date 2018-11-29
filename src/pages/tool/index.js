import React, {Component } from  'react'
import Header from '@c/common/header'
import UnitConversion from './utilconversion'
class Template extends Component {
    render(){
        return (
            <div className="container">
                <Header>工具箱</Header>
                <UnitConversion></UnitConversion>
            </div>
        )
    }
}

export default Template