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
            activeindex:0,
            isActive:false
        }
    }
    render(){
        // this.getShowList()
        return (
            <div className="tab-link">
                <div className="content">
                    {this.renderLinkItem()}
                </div>
            </div>
        )
    }
    renderLinkItem=()=>{
        let { tablinks } = this.state
        return tablinks.map(tab=>(
            <div 
                key={tab.id}
                className={'link-item'}
                onClick={this.getShowList}
                index={tab.id}
            >
                {tab.title}
            </div>
        ))
    }
	getShowList =(e)=>{
        if(e.target.index === this.state.activeindex){
            console.log(222)
        }
        console.log(2,e.target.index)
        console.log('req data')
        this.props.getShowlist()
        // this.setState({
        //     activeindex: th
        // })
	}
}

const mapDispatchToProps =(dispatch)=>{
	return {
		getShowlist(){
			dispatch(actionCreators.getRecipeList())
		}
	}
}

export default connect(null,mapDispatchToProps)(TabLink)

