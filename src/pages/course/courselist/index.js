import React, {Component } from  'react'
import "./courselist.scss"
import qs from 'qs'
class Template extends Component {
    constructor(props){
        super(props)
        this.state = {
            courselist : []
        }
    }
    async componentWillMount(){
       await this.axios({
            url:'/api/v1/get_grow_course',
            method:'post',
            data: qs.stringify({
                pageNumber: 1,
                pageSize: 20,
                user_id: '4fbe2ab3165646c7b2ccbdd92a37953d'
            })
        })
        .then(res=>{
            this.setState({
                courselist: res.data.data
            })
        })
        if(!this.state.courselist){
            return false
        }
    }
    

    render(){
        this.renderListItem()
        return (
            <div className="courselist">
                <ul className='content'>
                    <li className='list-item'>
                        <div className="img-box">
                            <img src="http://beile.bakelulu.com.cn/course/o_1c2gprasf1dps1e0a1ubl1jsjugn9.png?imageView2/1/w/720/h/540" alt=""/>
                            <div className="collect">
                                <span>收藏 35</span> · <span>评论 2</span> 
                            </div>
                        </div>
                        <div className="titl">
                            <p>视频教程：面团的分割与滚圆</p>
                        </div>
                        <div className="info">
                            <div className="level">
                                <i>⭐</i>
                            </div>
                        </div>
                    </li>
                    <li className='list-item'>
                        <div className="img-box">
                            <img src="http://beile.bakelulu.com.cn/course/o_1c2gprasf1dps1e0a1ubl1jsjugn9.png?imageView2/1/w/720/h/540" alt=""/>
                            <div className="collect">
                                <span>收藏 35</span> · <span>评论 2</span> 
                            </div>
                        </div>
                        <div className="title">
                            <p>视频教程：面团的分割与滚圆</p>
                        </div>
                        <div className="info">
                            <div className="level">
                                <i>⭐</i>
                            </div>
                        </div>
                    </li>
                    <li className='list-item'>
                        <div className="img-box">
                            <img src="http://beile.bakelulu.com.cn/course/o_1c2gprasf1dps1e0a1ubl1jsjugn9.png?imageView2/1/w/720/h/540" alt=""/>
                            <div className="collect">
                                <span>收藏 35</span> · <span>评论 2</span> 
                            </div>
                        </div>
                        <div className="title">
                            <p>视频教程：面团的分割与滚圆</p>
                        </div>
                        <div className="info">
                            <div className="level">
                                <i>⭐</i>
                            </div>
                        </div>
                    </li>
                    <li className='list-item'>
                        <div className="img-box">
                            <img src="http://beile.bakelulu.com.cn/course/o_1c2gprasf1dps1e0a1ubl1jsjugn9.png?imageView2/1/w/720/h/540" alt=""/>
                            <div className="collect">
                                <span>收藏 35</span> · <span>评论 2</span> 
                            </div>
                        </div>
                        <div className="title">
                            <p>视频教程：面团的分割与滚圆</p>
                        </div>
                        <div className="info">
                            <div className="level">
                                <i>⭐</i>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
    renderListItem=()=>{
        console.log(this.state)
    }
}

export default Template