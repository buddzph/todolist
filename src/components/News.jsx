import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
    render(){
        return (
            <div>
                <Image src="assets/house.jpg" className="header-image" />
                <Grid>
                    <h2>News</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                            <p>Short loin spare ribs tri-tip turducken tenderloin. Shoulder pork loin prosciutto shankle hamburger rump pastrami short loin andouille frankfurter pig ribeye t-bone. Sirloin ball tip shoulder jerky. Short ribs capicola sirloin, venison andouille ground round doner brisket salami jowl strip steak cupim biltong kevin.</p>
                            <p>Venison landjaeger pork chop biltong, boudin ball tip picanha. Shoulder pig short ribs picanha. Corned beef chicken salami short ribs biltong spare ribs flank pastrami, alcatra landjaeger filet mignon cupim buffalo meatball capicola. Tongue burgdoggen tenderloin, jerky cow swine meatloaf tail. Pig kevin meatball pork belly andouille ham jerky capicola flank ball tip kielbasa chuck.</p>
                            <p>Tenderloin beef ribs shankle beef capicola brisket meatloaf buffalo landjaeger. Chicken landjaeger sirloin pork chop. Doner salami ham hock andouille. Tail meatball landjaeger jowl, venison meatloaf picanha pork loin pork bresaola corned beef bacon. Filet mignon tail shank tenderloin, beef ribs pancetta ham hock ribeye drumstick cupim pork loin leberkas. Sausage tri-tip chicken short ribs cupim sirloin cow jowl beef meatloaf buffalo bresaola. Sausage pig jerky burgdoggen.</p>
                            <p>Spicy jalapeno bacon ipsum dolor amet beef shank cow pork belly tail buffalo drumstick brisket tongue andouille tenderloin. Tri-tip turkey swine jerky, brisket short loin chuck shankle pork boudin cupim leberkas ball tip frankfurter. Tenderloin biltong cupim andouille jowl sirloin, fatback frankfurter bacon. Short loin prosciutto bresaola, tenderloin buffalo kielbasa landjaeger flank filet mignon tri-tip meatball turducken alcatra. Porchetta pork belly meatloaf jerky strip steak.</p>
                            <p>Tenderloin hamburger meatloaf pastrami. Spare ribs kielbasa biltong cow tri-tip capicola meatball shank. Frankfurter short loin rump spare ribs tenderloin pastrami, tail t-bone alcatra salami tongue pancetta porchetta. Filet mignon jowl ham hock, meatloaf pork chop spare ribs ball tip tail rump fatback flank.</p>
                            <p>Chuck flank drumstick porchetta. Biltong shankle frankfurter, ball tip rump ribeye bresaola drumstick landjaeger burgdoggen meatloaf sirloin chicken porchetta. Corned beef alcatra prosciutto, boudin ribeye buffalo rump burgdoggen pork belly strip steak ground round. T-bone doner tenderloin jerky salami shankle cupim tongue fatback boudin pig pancetta kielbasa leberkas ball tip. Pancetta chicken tenderloin strip steak, corned beef alcatra swine drumstick shankle leberkas. Chuck ball tip sausage shoulder ham.</p>
                            <p>Turducken burgdoggen tongue pancetta bacon, tri-tip chicken t-bone strip steak hamburger. Beef buffalo landjaeger turducken, bresaola cow biltong sirloin ribeye ham hock pork loin kielbasa drumstick corned beef shoulder. Drumstick sausage pancetta, flank jowl bacon kevin strip steak chicken. Doner cupim andouille shankle capicola landjaeger, sausage pig pancetta boudin chuck ribeye meatloaf swine.</p>
                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                            <Image src="assets/person-2.jpg" />
                            <p>Short loin spare ribs tri-tip turducken tenderloin. Shoulder pork loin prosciutto shankle hamburger rump pastrami short loin andouille frankfurter pig ribeye t-bone. Sirloin ball tip shoulder jerky. Short ribs capicola sirloin, venison andouille ground round doner brisket salami jowl strip steak cupim biltong kevin.</p>
                        </Col>  
                    </Row>
                </Grid>
            </div>
        )
    }
}