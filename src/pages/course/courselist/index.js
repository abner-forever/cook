import React, { Component } from 'react'
import "./courselist.scss"
import qs from 'qs'

import ListItem from '../listitem/listitem'
import ViewMore from '@c/common/viewmore'
class CourseList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courselist: [],
            pageNumber: 1,
            hasMore: true
        }
    }
    componentDidMount() {
        let num = 1;
        this.getCourseList(num)
    }
    render() {
        return (
            <div className="courselist">
                <ul className='content'>
                    {this.renderListItem()}
                </ul>
                {
                    this.state.hasMore ? <ViewMore onClick={this.getMore} /> : <p className='no-more'>没有更多教程了</p>
                }
            </div>
        )
    }
    renderListItem = () => {
        let { courselist } = this.state
        return courselist.map(item => (
            <ListItem 
                item = {item}
                key = {item.course_id}
            />
            // <li
            //     key={item.course_id}
            //     className='list-item'>
            //     <div className="img-box">
            //         <LazyLoad height={162}>
            //             <img src={item.course_img} alt="" />
            //         </LazyLoad>
            //         <div className="collect">
            //             <span>收藏 {item.collect_num}</span> · <span>评论 {item.comment_count}</span>
            //         </div>
            //         <div className='bac'></div>
            //     </div>
            //     <div className="title">
            //         <p>{item.course_title}</p>
            //     </div>
            //     <div className="info">
            //         <div className="level">
            //         </div>
            //     </div>
            // </li>
        ))
    }
    renderLevel = (lev) => {

        for (let i = 0; i < lev; i++) {
            console.log(i, 999, lev)
            // return <i className='active'></i>
        }
    }
    getCourseList = () => {
        if (!this.state.hasMore) {
            return false;
        }
        this.axios({
            url: '/bwl/api/v1/get_grow_course',
            method: 'post',
            data: qs.stringify({
                pageNumber: this.state.pageNumber,
                pageSize: 20,
                user_id: '4fbe2ab3165646c7b2ccbdd92a37953d'
            })
        })
            .then(res => {
                if (res.data.data === null) {
                    console.log('没有了')
                    this.setState({
                        hasMore: false
                    })
                    return false
                } else {

                    if (res.data.data.length < 20) {
                        this.setState({
                            hasMore: false
                        })
                    }
                    this.setState({
                        courselist: this.state.courselist.concat(res.data.data)
                    })
                }
            })

    }
    getMore = () => {
        console.log(this.state.hasMore)
        this.setState(()=>({
            pageNumber: 1 + this.state.pageNumber
        }))
        this.getCourseList()
    }
    shouldComponentUpdate(nextprops, nextstate) {
        if (nextstate.courselist === this.state.courselist) {
            console.log('不渲染', this.state.courselist)
            return false
        }
        return true
    }
}

export default CourseList