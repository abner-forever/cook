import React , { Component } from 'react'
import { withRouter } from 'react-router-dom'
import LazyLoad from 'react-lazyload'

class ListItem extends Component { 
    constructor(props){
        super(props)
        this.goToDetail = this.goToDetail.bind(this)
    }
    render(){
        let { item } = this.props
        return (
                <li
                key={item.course_id}
                className='list-item'
                onClick = { ()=>this.goToDetail()}
                >
                <div className="img-box">
                    <LazyLoad height={162}>
                        <img src={item.course_img} alt="" />
                    </LazyLoad>
                    <div className="collect">
                        <span>收藏 {item.collect_num}</span> · <span>评论 {item.comment_count}</span>
                    </div>
                    <div className='bac'></div>
                </div>
                <div className="title">
                    <p>{item.course_title}</p>
                </div>
                <div className="info">
                    <div className="level">
                    </div>
                </div>
            </li>
        )
    }
    goToDetail(){
        // console.log('跳转详情页')
        let { item } = this.props
        console.log(this.props)
        this.props.history.push({pathname: `/detail/${item.course_id}`,state: {item}})
    }
}
export default withRouter(ListItem)