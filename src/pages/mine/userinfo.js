import React, {Component } from  'react'

import {UserInfoWrapper } from './styledcomponents'

class UserInfo extends Component {
    
    render(){
        return (
            <UserInfoWrapper>
                <div className='head-imgbox'>
                    <img src='http://tvax4.sinaimg.cn/crop.0.0.48.48.50/006ewXo3ly1fx7vibgoqgg301c01c0kk.gif' alt=''/>
                </div>
                <p className='user-name'>不知名网友 </p>
                <div className='weibo'>
                    <span className='flowing'>关注 0</span>
                    <span className='fans'>粉丝 0</span>
                </div>
            </UserInfoWrapper>
        )
    }
}

export default UserInfo