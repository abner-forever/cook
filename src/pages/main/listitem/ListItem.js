import React, {Component } from  'react'
import LazyLoad from 'react-lazyload'
import { withRouter } from 'react-router-dom'

class ListItem extends Component {

    render(){
        let { listitem } = this.props
        return (
            <li
                className='listitem'
                
            >
                <LazyLoad height={214}>
                    <img key={listitem.recipe_id} src={listitem.recipe_img || listitem.image} alt='' />
                </LazyLoad>
                <div className='title'>
                    <div className='big-title'>{listitem.recipe_name}</div>
                    <div className='desc'>{listitem.category_name}</div>
                </div>
                <div className='bgc'></div>
                <div className='collect'>
                    收藏{listitem.collect_num}<span> · </span>评论{listitem.comment_count}
                </div>
            </li>
        )
    }

}

export default withRouter(ListItem)