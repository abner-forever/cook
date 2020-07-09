import React, {Component } from  'react'
import { ActiveOwnNavLink } from '../link'
 import './tab.css'
class TabSelect extends Component {
    constructor(){
        super()
        this.state = {
            tabs:[
                {id:1,title:'发现',path:'/home',icon:'/images/icons/find.png',icon_active:'/images/icons/find-active.png'},
                {id:2,title:'课程',path:'/course',icon:'/images/icons/course.png',icon_active:'/images/icons/course-active.png'},
                {id:3,title:'工具',path:'/tool',icon:'/images/icons/tool.png',icon_active:'/images/icons/tool-active.png'},
                {id:4,title:'我的',path:'/mine',icon:'/images/icons/mine.png',icon_active:'/images/icons/mine-active.png'},
            ]
        }
    }
    render(){
        return (
            <div className="tab">
                <ul className='tab-select'>
                     {this.renderTabItem()}
                </ul>
            </div>
        )
    }
    renderTabItem=()=>{
        let { tabs } = this.state;
        return tabs.map(tab=>(
            <ActiveOwnNavLink
                tag='li'
                key={tab.id}
                to={tab.path}
                icon= {tab.icon}
                icon_active= {tab.icon_active}
            >
                <i></i>
                { tab.title }
            </ActiveOwnNavLink>
        ))
    }
}

export default TabSelect