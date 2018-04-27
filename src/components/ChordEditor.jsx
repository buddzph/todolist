import React, { Component } from 'react';
import ChordSheetJS from 'chordsheetjs';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './ChordEditor.css';

export default class ChordEditor extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: 'Type some lyrics here' };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    getChordMarkup() {
        var formatter = new ChordSheetJS.HtmlDivFormatter,
            parser = new ChordSheetJS.ChordProParser(),
            song = parser.parse(this.state.value);

        return { __html: formatter.format(song) };
    }

    render(){
        return (
            <div>
                <Image src="assets/house.jpg" className="header-image" />
                <Grid>
                    <h2>Song List</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                            <div className="chord-editor">
                                <div className="panel">
                                    <h3>Input</h3>
                                    <textarea 
                                        style={{width: '100%', height: '100%'}}
                                        onChange={this.handleChange}
                                        defaultValue={this.state.value} />
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                            <Image src="assets/person-2.jpg" />
                            <div className="panel">
                                <h3>Output</h3>
                                <div
                                    style={{width: '100%', height: '100%'}}
                                    className='chord-output'
                                    dangerouslySetInnerHTML={this.getChordMarkup()}/>
                            </div>
                        </Col>  
                    </Row>
                </Grid>
            </div>
        )
    }
}