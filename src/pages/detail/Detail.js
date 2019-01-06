import React, {Component } from  'react'

class Detail extends Component {
    render(){
        console.log(this.props,'1')
        let { item }  = this.props.location.state
        return (
            <div className="container">
               详情页{item.course_title}
            </div>
        )
    }
}

export default Detail