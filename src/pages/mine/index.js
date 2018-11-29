import React, {Component } from  'react'
import UserInfo from './userinfo'
import UserCneter from './usercenter'
import {Logout } from './styledcomponents'
class Template extends Component {
    
    render(){
        return (
            <div className="container">
                <UserInfo >
                    
                </UserInfo>
                <UserCneter></UserCneter>
                <Logout>
                    <span className='btn'>退出登录</span>
                </Logout>
            </div>
        )
    }

}

export default Template