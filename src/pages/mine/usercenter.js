import React, {Component } from  'react'

import {ContentFram } from './styledcomponents'

class UserInfo extends Component {
    constructor(){
        super()
        this.state = {
            user_center:[
                {title:[
                    {id:1,content:'我的收藏'},
                    {id:2,content:'我的作品'},
                ]},
                {title:[{id:3,content:'消息中心'}]},
                {title:[
                    {id:4,content:'手机号',status:false},
                    {id:5,content:'修改密码'},
                    {id:6,content:'微博',status:true},
                ]}
            ]
        }
    }
    render(){
        return (
            <div>
                {this.renderContent()}
            </div>
            
        )
    }
    renderContent=()=>{
       let {user_center} = this.state
       console.log(user_center)
       return user_center.map((item,index)=>(
           <ContentFram 
            key={index}
           >
           {
               item.title.map((cont)=>(
                <li
                    key ={cont.id}
                >
                {cont.content}
                {cont.status===false? <span className='phone-status'>未绑定</span>: ''}
                {cont.content==='微博'? <div className='weibo-status'><div className='weibo-btn'></div> </div>: <i className='icon'>›</i>}

                
                </li>
               ))
           }
           </ContentFram>
       ))
   } 
}

export default UserInfo