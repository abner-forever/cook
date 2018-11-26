import React, { Component } from "react";
import qs from "querystring";
import "./topiclist.scss";

import { ImgBox, TopicItem } from "./styleComponent";
class Template extends Component {
  constructor() {
    super();
    this.state = {
      topic_list: [],
      currentIndex: 1,
      tabLink: [
          {id:1,title:'优选课程',type:2},
          {id:2,title:'已兑换课程',type:1}
      ],
      type:2
    };
  }
  componentDidMount() {
      let {type} = this.state
    this.getTopiclist(type)
  }
  render() {
    let { topic_list,tabLink,currentIndex } = this.state;
    return (
      <div className="topic-list">
       <div className='content' >
            {
                tabLink.map(tab=>(
                    <span 
                        key = {tab.id}
                        className={currentIndex===tab.id ? 'active':''}
                        onClick={this.changeCurrent.bind(this,tab.id,tab.type)}
                    >{tab.title}</span>
                ))
            }
       </div>
        {topic_list!=='' ? topic_list.map(item => (
          <TopicItem key={item.topic_id}>
            <ImgBox topic_img={item.topic_img} >
                <div className="bgc" />
                <div className="title">
                <p>{item.topic_title}</p>
                <p className='desc'>共{item.unit_count}个课程</p>
                </div>
            </ImgBox>
          </TopicItem>
        )): <p>没有数据</p>}
      </div>
    );
  }
  changeCurrent=(id,type)=>{
    //修改当前选中id
    this.setState({
        currentIndex: id,
        type:type
    })
    //渲染对组件
    this.getTopiclist(type)
  }
  getTopiclist=(type)=>{
      console.log(type)
    this.axios({
        url: "/api/v1/get_topic_list",
        method: "post",
        data: qs.stringify({
          pageNumber: 1,
          pageSize: 100,
          type: type
        })
      }).then(res => {
        console.log(res.data.data,11)
          if( res.data.data!==null ){
            this.setState({
                topic_list: res.data.data
            });
        } 
            
            console.log(this.state.topic_list,999)
        
      });
  }
 
  shouldComponentUpdate(nextprops,nextstate){
      console.log(nextstate.topic_list,this.state.topic_list)
    if(nextstate.topic_list===this.state.topic_list){
        console.log('不渲染',this.state.courselist)
        return false
    }
    return true
}
}

export default Template;
