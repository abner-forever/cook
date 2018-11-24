import React, {Component } from  'react'

class LinkItem extends Component {
    render(){
        return (
            <div className="link_item">
                <div className="content">
                    <a >最近</a>
                    <a >胖友圈</a>
                    <a >热门</a>
                </div>
            </div>
        )
    }
}

export default LinkItem