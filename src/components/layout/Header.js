import React, { Component } from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
import Hamburger from "../../img/2020-assets/hamburger.svg";
import Logo_small from "../../img/aiva_logo_small.png";
import HeaderG from "../../img/2020-assets/header-graphic-bg.png";
import HeaderGs from "../../img/2020-assets/header-graphic-shapes.png";
import HeaderGg from "../../img/2020-assets/header-graphic-girl.png";
import { Link } from "react-router-dom";
// import { Drawer } from 'antd';
// import { VscListSelection, VscClose } from "react-icons/vsc";
export class Header extends Component {
    constructor(props){
        super(props)
        this.state = { visible: false, placement: 'left' };
    }

       // Menu Scrolled 
       componentDidMount(){
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if(isTop !== true){
                this.setState({ scrolled: true });
            } else {
                this.setState({ scrolled: false })
            }
        });
    }

    render() {
        // const styles ={
        //     padding: "0px",
        //     fontSize: "32px",
        //     paddingLeft: "5px",
        //     paddingRight: "5px",
        //     // border: none,
        //   }
        return (
            <div classNameName={this.state.scrolled ? 'nav scrolled' : 'nav'}>
                <section  classNameName="header_area">
                <nav id="mainNav" classNameName="navbar navbar-default navbar-fixed-top ">
                    <div classNameName="container">
                    <div classNameName="row mail_div_row">
                        <div classNameName="col-lg-12">
                            <div classNameName="navbar-header">
                                <button type="button" classNameName="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" style={{padding: "0px",fontSize: "32px",paddingLeft: "5px",paddingRight: "5px", border: "none",}}>
                                <img src={Hamburger} alt=""></img>
                                </button>
                                <button type="button" classNameName="navbar-toggle collapsed mobile-sign-up-button" onclick="location.href='aiva-create/index.html#/register'">
                                SIGN UP NOW
                                </button>
                                <Link classNameName="navbar-brand page-scroll hide_on_small" href="..html">
                                {/* <img src="assets/" classNameName="aiva_logo" alt="Aiva Logo" /> */}
                                <img src={Logo_small} classNameName="aiva_logo" alt="Aiva Logo"></img>
                                </Link>
                                <Link classNameName="navbar-brand page-scroll show_on_small" href="..html"><img src="assets/img/aiva_logo_small.png" classNameName="aiva_logo" alt="Aiva Logo" /></Link>
                            </div>
                            <div classNameName="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul classNameName="nav navbar-nav navbar-right">
                                <li>
                                    <Link classNameName="page-scroll btn-xl btn-signup" href="pricing/index.html">Pricing </Link>
                                </li>
                                <li classNameName="nav-item dropdown hidden-xs hidden-md hidden-sm">
                                    <Link classNameName="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Features&nbsp;  <i classNameName="fa fa-angle-down fa-lg" aria-hidden="true"></i>
                                    </Link>
                                    <div classNameName="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <Link classNameName="dropdown-item" href="features-overview/index.html">Overview </Link><br />
                                        <Link classNameName="dropdown-item" href="features-website-stories/index.html">Website Stories </Link><br />
                                        <Link classNameName="dropdown-item" href="features-display-types/index.html">Display Types </Link><br />
                                        <Link classNameName="dropdown-item" href="features-triggering-targeting/index.html">Triggers and Targetting </Link>
                                    </div>
                                </li>
                                <li classNameName="hidden-lg">
                                    <Link classNameName="page-scroll btn-xl btn-signup" href="../apps.shopify.com/aiva-labs.html">Shopify App </Link>
                                </li>
                                <li classNameName="hidden-lg">
                                    <Link classNameName="page-scroll btn-xl btn-signup" href="features-overview/index.html">Features Overview </Link>
                                </li>
                                <li classNameName="hidden-lg">
                                    <Link classNameName="page-scroll btn-xl btn-signup" href="features-website-stories/index.html">Website Stories </Link>
                                </li>
                                <li classNameName="hidden-lg">
                                    <Link classNameName="page-scroll btn-xl btn-signup" href="features-display-types/index.html">Display Types </Link>
                                </li>
                                <li classNameName="hidden-lg">
                                    <Link classNameName="page-scroll btn-xl btn-signup" href="features-triggering-targeting/index.html">Triggers and Targetting </Link>
                                </li>
                                <li>
                                    <Link classNameName="page-scroll btn-xl btn-signup" href="https://blog.aivalabs.com">Blog </Link>
                                </li>
                                <li>
                                    <Link classNameName="page-scroll btn-xl btn-signup" href="academy/index.html">ACADEMY </Link>
                                </li>
                                <li classNameName="hide-on-small" style={{width: "200px",}}>
                                    &nbsp;
                                </li>
                                <li>
                                    <Link href="aiva-create/index.html" classNameName="green_machine btn-xl btn-signup white-link-2020 sign-in-2020">
                                        <img style={{marginRight:"5px"}} src="assets/img/lock-icon-none.png" classNameName="lock_icon" width="24px" height="24px" alt="Log In Icon" />Log In </Link>
                                </li>
                                <li>
                                    <Link href="aiva-create/index.html#/register" classNameName="page-scroll btn-xl btn-signup green_machine2 green-nav-signup-2020 black-shadow-2020 no-shadow-affix sign-up-2020">SIGN UP FREE </Link>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </nav>






                <header className="header-2020">
            <div className="container">
               <div className="row" style={{paddingTop:"155px"}}>
                  <div className="col-lg-6 text-left  text-center-xs text-center-md text-center-sm ">
                     <div className="hide_on_small">
                        <h1 className="header-heading-big">Boost Website Leads & _____ </h1>
                        <h2 className="header-subheading">Grow your email lists ___ increase your website sales ____ our powerful lead gen, ________ and upsell campaigns </h2>
                     </div>
                     <div className="show_on_small">
                        <img src="assets/img/2020-assets/header-graphic-mobile.png" className="center-block img-responsive" alt="Happy Aiva Client" style={{marginTop:"-75px"}} />
                        <h1 className="header-heading-small">Boost Website Leads & _____ </h1>
                        <h2 className="header-subheading-small">Grow your email lists ___ increase your website sales ____ our powerful lead gen, ________ and upsell campaigns </h2>
                     </div>
                     <a href="aiva-create/index.html#/register" role="button" data-toggle="modal" className="page-scroll btn btn-default big-cta-2020 green-shadow-2020">Get Started&nbsp;&nbsp;  <img src="assets/img/2020-assets/cta-arrow-white.png" className="img-responsive" style={{float:"right"}} alt="Register" /></a>
                     <br /><br />
                     <div className="hide_on_small"><br /><br /><br /><br /><br /><br /><br /></div>
                  </div>
                  <div className="col-lg-6 header_devices_new hide_on_small">
                     {/* <img src={HeaderG} alt="Header Background" className="header-graphic-big"> </img>
                     <img src={HeaderGs} alt="Header Shapes" className="header-graphic-big"> </img>
                     <img src={HeaderGg} alt="Happy Aiva Client" className="header-graphic-big"> </img> */}

                     <img src={HeaderG} className="header-graphic-big" alt=""></img>
                     <img src={HeaderGs} className="header-graphic-big" alt=""></img>
                     <img src={HeaderGg} className="header-graphic-big" alt=""></img>
                  </div>
                  <div className="col-lg-6 show_on_small text-center">
                  </div>
               </div>
            </div>
         </header>




                </section>
            </div>
        )
    }
}

export default Header



