import React, {Component } from  'react'
import './header.scss'
import { ActiveOwnNavLink } from '@c/common/link'

class CourseHeader extends Component {
    render(){
        return (
            <div className="header">
                <div className= 'left'>
                    <i></i>
                </div>
                <div className ='center course'>
                <ActiveOwnNavLink to='/course/courselist'>教程</ActiveOwnNavLink>
                <ActiveOwnNavLink to='/course/topiclist'>课程包</ActiveOwnNavLink>
                </div>
            </div>
        )
    }
}

export default CourseHeader