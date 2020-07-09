import React, { Component } from 'react'
import { connect } from 'react-redux'
import ViewMore from '@c/common/viewmore'
import { Route, Switch} from 'react-router-dom'
import ListItem from '@/pages/main/listitem/ListItem'
import Detail from '@/pages/detail/Detail'

import './showlist.scss'
class ShowList extends Component {
    constructor(props) {
        super(props)
        this.state={
            page : 1
        }
    }

    render() {
        let {addPage } = this.props
        console.log('render')
        return (
            <div className="showlist">
                <ul className='content'>
                    
                    {this.renderShowItem()}
                    <ViewMore onClick = {addPage.bind(this)} />
                </ul>
                <Switch>
                <Route path='/detail' component={Detail} />
                </Switch>
            </div>
        )
    }
    renderShowItem = () => {
        let { recipelist } = this.props
        console.log('recipelist',recipelist)
        return recipelist.map((item,index) => (
                <ListItem listitem = {item} key={index} to ='/detail' recipe_id={item.recipe_id}  />
        ))
    }
    componentDidMount(){
       
    }

}
//订阅store状态 可以获取到数据
const mapStateToProps = (state) => {
    //相当于vuex的getter //ui组件就可以直接从props中去取
    return {
        recipelist: state.showlist.recipe_list,
    }
}

export default connect(mapStateToProps)(ShowList)