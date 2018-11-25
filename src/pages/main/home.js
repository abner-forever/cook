import React ,{ Component } from 'react'
import  Header from '@/components/common/header'
import  Swiper from '@/components/common/swiper'
import TabLink from './tab_link'
import ShowList from './showlist'

class Home extends Component {
    render(){
        return (
            <div className="home-container">
                <Header/>
                <Swiper/>
                <TabLink/>
                <ShowList/>
            </div>
        )
    }
}

export default Home

