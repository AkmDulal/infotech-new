import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
// import Logo from "../../images/icon.png";
// import { Link } from "react-router-dom";
// import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube  } from "react-icons/io";

export class Footer extends Component {
    render() {
        return (
            <div>
                <section className="footer_area">
                    <div className="divider"></div>
                    <div className="footer_contant_area">
                        <Container>
                            <Row>
                                <Col sm={12} md={4} lg={4}>
                                    
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </section>
            </div>
        )
    }
}

export default Footer
