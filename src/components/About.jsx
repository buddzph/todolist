import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render(){
        return (
            <div>
                <Image src="assets/banner.jpg" className="header-image" />
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/person-1.jpg" className="about-profile-pic" rounded />
                        <h3>Buddz the Tank</h3>
                        <p>Bacon ipsum dolor amet turducken burgdoggen hamburger kielbasa brisket chuck. Biltong chicken brisket flank buffalo fatback cow, porchetta pork chop pastrami. Cow venison tail doner fatback turkey swine boudin short loin, pork belly hamburger landjaeger. Capicola ball tip bacon turkey andouille chicken meatball.</p>
                        <p>Tongue meatloaf venison tri-tip kevin filet mignon. Biltong brisket shoulder chicken cow porchetta meatloaf meatball turducken pastrami hamburger. Hamburger corned beef kevin tongue pork chop jerky, leberkas venison chuck porchetta biltong swine andouille spare ribs shank. Tail jowl meatloaf ribeye kielbasa pork belly. Tri-tip prosciutto pastrami pork loin buffalo short ribs porchetta ham hock jerky burgdoggen capicola. Pig kevin corned beef bresaola shankle salami kielbasa. Picanha jowl pig short loin.</p>
                        <p>Short loin spare ribs tri-tip turducken tenderloin. Shoulder pork loin prosciutto shankle hamburger rump pastrami short loin andouille frankfurter pig ribeye t-bone. Sirloin ball tip shoulder jerky. Short ribs capicola sirloin, venison andouille ground round doner brisket salami jowl strip steak cupim biltong kevin.</p>
                    </Col>
                </Grid>
            </div>
        )
    }
}