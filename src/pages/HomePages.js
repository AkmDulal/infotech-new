import React, { Component } from 'react'
// import AboutComponent from '../components/AboutComponent'
// import CliendComponent from '../components/CliendComponent'
// import ServicesComponent from '../components/ServicesComponent'
import SliderComponent from '../components/SliderComponent'

export class HomePages extends Component {
    render() {
        return (
            <div className="mail_div">
                <SliderComponent />
                {/* 
                <AboutComponent />
                <ServicesComponent />
                <CliendComponent /> */}
            </div>
        )
    }
}

export default HomePages
