import React from 'react'
import { withRouter } from 'react-router-dom'

import styled from 'styled-components'

const OwnLinkItem = (props)=>{
    //渲染的目标tag
    let Tag = props.tag || 'a'
    //要加的类类名
    let _class = props.className || ''
    let _activeClassName = props.activeClassName || 'active'
    //判断是否加active
    let isActive = props.exact ? props.location.pathname === props.to : props.location.pathname.startsWith(props.to)
    let className = (props.nav && isActive ) ? _class + ' ' + _activeClassName : _class

    return <Tag className= {className} onClick = { ()=>{props.history.push(props.to)}}>{props.children}</Tag>

}

export const OwnLink = props =>{
    let Item = withRouter(OwnLinkItem)
    return (
        <Item {...props}  />
    )
}

export const OwnNavLink = props =>{
    let Item = withRouter(OwnLinkItem)
    return (
        <Item {...props} nav />
    )
}

export const ActiveOwnNavLink = styled(OwnNavLink)`
    i{
        width:.64rem;
        height:.666667rem;
        background:url(${props=>props.icon}) top center no-repeat;
        background-size:100%;
    }
    &.active{
        color: ${props=> props.index ? '#969696' : '#987A57'}
        i{
            background:url(${props=>props.icon_active}) top center no-repeat;
            background-size:100%;
        }
    }
    width:25%;
    display:flex;
    justify-content: center;
    flex-direction:column;
    height:100%;
    align-items:center;
    color:#969696;
    
`