import React, {Component } from  'react'
import { Nocourse } from "./styleComponent";

class NoCourse extends Component {
    render(){
        return (
            <Nocourse>
                <p className='nocourse-title'>还没有已兑换的课程哦</p>
                <p className='flowing'>关注微博@焙忘录的主页君就有机会获得兑换码哦~</p>
                <p>已有兑换码？~</p>
                <span className='btn'>去兑换</span>
            </Nocourse>
        )
    }
}

export default NoCourse