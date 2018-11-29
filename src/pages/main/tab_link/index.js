import React, {Component } from  'react'
import './tab_link.scss'
import {connect} from 'react-redux'
import actionCreators from '@/store/showlist/actionCreators';

class TabLink extends Component {
    constructor(props){
        super(props)
        this.state = {
            tablinks:[
                {id: 1,title:'最近',link:'get_recipe_list'},
                {id: 2,title:'胖友圈',link:'get_yard_recipe_list'},
                {id: 3,title:'热门',link:'get_week_top'}
            ],
            activeindex:1,
            isActive:false,
            link_url:'get_recipe_list',
        }
    }
    render(){
        return (
            <div className="tab-link">
                <div className="content">
                    {this.renderLinkItem()}
                </div>
            </div>
        )
    }
    componentDidMount(){
        let { activeindex,link_url} = this.state
        
        this.getShowList(activeindex,link_url)
    }
    renderLinkItem=()=>{
        let { tablinks , activeindex} = this.state
        
        return tablinks.map(tab=>(
            <div 
                key={tab.id}
                className={activeindex===tab.id ? 'link-item active' : 'link-item'}
                onClick={this.getShowList.bind(this,tab.id,tab.link)}
                index={tab.id}
            >
                {tab.title}
            </div>
        ))
    }
	getShowList =(id,link_url)=>{
        let {page } = this.props
        this.props.getShowlist(page,link_url)
        this.setState({
            activeindex: id
        })
	}
}

const mapDispatchToProps =(dispatch)=>{
	return {
		getShowlist(page,link_url){
			dispatch(actionCreators.getRecipeList(page,link_url))
		}
	}
}

export default connect(null,mapDispatchToProps)(TabLink)

