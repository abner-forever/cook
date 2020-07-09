import React, { Component } from 'react'
import Header from '@/components/common/header'
import Swiper from '@/components/common/swiper'
import TabLink from './tab_link'
import ShowList from './showlist'
import './home.scss'


class Home extends Component {
    constructor() {
        super()
        this.state = {
            page: 1
        }
    }
    render() {
        return (
            <div className="home-container"  >
                <Header>焙忘录</Header>
                <Swiper />
                <TabLink page={this.state.page} />
                <ShowList
                    page={this.state.page}
                    addPage={this.addPage}
                />
            </div>
        )
    }
    addPage = () => {
        console.log('点了')
        this.setState({
            page: 1 + this.state.page
        })
    }
}

export default Home

