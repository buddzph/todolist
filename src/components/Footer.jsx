import React, { Component } from 'react'
import { Nav, NavItem, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

export default class About extends Component {
    render(){
        return (
            <footer id="myFooter">
                <div className="container">
                    <Row>
                        <Col sm={3} className="text-center">
                            <Link to="/">
                                <Image src="assets/fdg.png" className="footerlogo" rounded />
                            </Link>
                        </Col>
                        <Col sm={2}>
                            <h5>Get started</h5>
                            <Nav>
                                <NavItem eventKey={1} componentClass={Link} href="/" to="/">Home</NavItem>
                                <NavItem eventKey={2} componentClass={Link} href="#" to="#">Sign Up</NavItem>
                                <NavItem eventKey={3} componentClass={Link} href="#" to="#">Downloads</NavItem>
                            </Nav>
                        </Col>
                        <Col sm={2}>
                            <h5>About us</h5>
                            <ul>
                                <li><Link to="#">Company Information</Link></li>
                                <li><Link to="#">Contact us</Link></li>
                                <li><Link to="#">Reviews</Link></li>
                            </ul>
                        </Col>
                        <Col sm={2}>
                            <h5>Support</h5>
                            <ul>
                                <li><Link to="#">FAQ</Link></li>
                                <li><Link to="#">Help desk</Link></li>
                                <li><Link to="#">Forums</Link></li>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <div className="social-networks">
                                <Link to="#" className="twitter"><i className="fab fa-twitter"></i></Link>
                                <Link to="#" className="facebook"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#" className="google"><i className="fab fa-google-plus-g"></i></Link>
                            </div>
                            <Link to="#">
                                <Button bsStyle="primary"><i className="fas fa-phone"></i> Contact Us</Button>
                            </Link>
                        </Col>
                    </Row>
                </div>
                <div className="footer-copyright">
                    <p>© 2018 Copyright <Link to="http://freddg.com">fredDG.com</Link></p>
                </div>
            </footer>
        )
    }
}