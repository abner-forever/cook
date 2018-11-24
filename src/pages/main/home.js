import React ,{ Component } from 'react'
import  Header from '@/components/common/header'
import  Swiper from '@/components/common/swiper'
import TabLink from './tab_link'

class Home extends Component {
    render(){
        return (
            <div className="home-container">
                <Header/>
                <Swiper/>
                <TabLink/>
            </div>
        )
    }
}

export default Home

