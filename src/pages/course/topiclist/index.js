import React, { Component } from "react";
import qs from "querystring";
import "./topiclist.scss";
import NoCourse  from './nocourse'
import { ImgBox, TopicItem } from "./styleComponent";
//无状态组件 以函数形式存在 主要用来渲染数据
 
class Template extends Component {
	constructor() {
		super();
		this.state = {
			topic_list: [],
			currentIndex: 1,
			tabLink: [
				{ id: 1, title: "优选课程", type: 2 },
				{ id: 2, title: "已兑换课程", type: 1 }
			],
			type: 2
		};
	}
	componentDidMount() {
		let { type } = this.state;
		this.getTopiclist(type);
	}
	render() {
		let {tabLink, currentIndex } = this.state;
		return (
			<div className="topic-list">
				<div className="content">
					{tabLink.map(tab => (
						<span
							key={tab.id}
							className={currentIndex === tab.id ? "active" : ""}
							onClick={this.changeCurrent.bind(this, tab.id, tab.type)}
						>
							{tab.title}
						</span>
					))}
				</div>
				{
					this.renderTopicList()
				}
			</div>
		);
	}

	renderTopicList = ()=>{
		let {topic_list} = this.state
		if(topic_list.length!==undefined) {
			   return topic_list.map((item,index) => (
				<TopicItem key={index}>
					<ImgBox topic_img={item.topic_img}>
						<div className="bgc" />
						<div className="title">
							<p>{item.topic_title}</p>
							<p className="desc">共{item.unit_count}个课程</p>
						</div>
					</ImgBox>
				</TopicItem>
			   ))
		   }else{
			return <NoCourse/>
		   }
	}
	changeCurrent = (id, type) => {
		//修改当前选中id
		this.setState({
			currentIndex: id,
			type: type,
		});
		//渲染对组件
		this.getTopiclist(type);
	};
	getTopiclist = type => {
		this.axios({
			url: "/bwl/api/v1/get_topic_list",
			method: "post",
			data: qs.stringify({
				pageNumber: 1,
				pageSize: 100,
				type: type,
				sign: "df90bcb9d7f0cd8c4c915cf2f6b5f663",
				user_id: "4fbe2ab3165646c7b2ccbdd92a37953d"
			})
		}).then(res => {
				this.setState({
					topic_list: res.data.data
			})
		});
	};

	shouldComponentUpdate(nextprops, nextstate) {
		if (nextstate.topic_list === this.state.topic_list) {
			return false;
		}else{
			return true;
		}
		 
	}
}

export default Template;
