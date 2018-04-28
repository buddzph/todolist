import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './assets/Home.css';

export default class Home extends Component {
    render(){
        return (
            <Grid>
                <div className="top-space">&nbsp;</div>
                <Jumbotron>
                    <h2>Welcome to FredDG React App</h2>
                    <p>This is an example of the web page created using React.</p>
                    <Link to="/about">
                        <Button bsStyle="primary"><i className="fas fa-arrow-right"></i> Read More</Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    {/* <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-1.jpg" circle className="profile-pic" />
                        <h3>FredDG Dev</h3>
                        <p>Pig filet mignon ribeye picanha, capicola pancetta flank bresaola. Sirloin brisket spare ribs, prosciutto doner filet mignon shoulder shank.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-2.jpg" circle className="profile-pic" />
                        <h3>Beverly Love's</h3>
                        <p>Andouille buffalo tenderloin sirloin meatball beef ribs. Filet mignon biltong ball tip jowl.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-3.jpg" circle className="profile-pic" />
                        <h3>KateFayeTipen Girl</h3>
                        <p>Pork loin biltong porchetta short ribs, venison rump leberkas. Ground round landjaeger buffalo ribeye ham hock.</p>
                    </Col> */}
                </Row>
            </Grid>
        )
    }
}