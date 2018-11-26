import React ,{ Component } from 'react'
import  Header from '@/components/common/header'
import  Swiper from '@/components/common/swiper'
import TabLink from './tab_link'
import ShowList from './showlist'
import './home.scss'
class Home extends Component {
    render(){
        return (
            <div className="home-container">
                <Header>焙忘录</Header>
                <Swiper/>
                <TabLink/>
                <ShowList/>
            </div>
        )
    }
}

export default Home

