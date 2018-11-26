import React, {Component } from  'react'
import {connect } from 'react-redux'
import LazyLoad from 'react-lazyload'
import ViewMore from '@c/common/viewmore'

import './showlist.scss'
class ShowList extends Component {
    constructor(props){
        super(props)
        console.log(this.props.recipelist)
    }

    render(){
        return (
            <div className="showlist">
                <ul className='content'>
                     {this.renderShowItem()}
                    <ViewMore />
                </ul>
            </div>
        )
    }
    renderShowItem=()=>{
        let { recipelist } = this.props
        return recipelist.map(item=>(
            <li 
            key= {item.recipe_id||item.relation_ids}
                className = 'listitem'
            >   
                <LazyLoad height={214}>
                <img key = {item.recipe_id} src={item.recipe_img||item.image} alt=''/>
                </LazyLoad>
                <div className = 'title'>
                    <div className= 'big-title'>{item.recipe_name}</div>
                    <div className= 'desc'>{item.category_name}</div>
                </div>
                <div className='bgc'></div>
                <div className='collect'>
                    收藏{item.collect_num}<span> · </span>评论{item.comment_count}
                </div>
            </li>
        ))
    }
}

const mapStateToProps = (state)=>{
    //相当于vuex的getter //ui组件就可以直接从props中去取
    return {
        recipelist : state.showlist.recipe_list,
    }
}

export default connect(mapStateToProps)(ShowList)