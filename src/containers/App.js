import React, {Component} from 'react';
import './App.css';
import AnswerButton from '../components/AnswerButton';
import {Row, Col} from 'antd';
import CodeMirror from "react-codemirror";
const jsonData = require('../data/Questions.json');

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            Questions : jsonData.Questions
        };
    }


    render() {
        let questionText =  this.state.Questions[0] ? this.state.Questions[0].text: "";
        let optionsA =  this.state.Questions[0] ? this.state.Questions[0].optionsA: "";
        let optionsB =  this.state.Questions[0] ? this.state.Questions[0].optionsB: "";

        console.log(questionText.toString());

        var options = {
            lineNumbers: true,
            readOnly: true,
            mode: "javascript",
            theme:"darcula"
        };

        return (
            <div className="questionCard">
                <Row className="question">
                    <CodeMirror value={questionText}
                                options={options}/>
                </Row>
                <Row>
                    What shows in the console?
                </Row>
                <Row>
                    <Col span={12}>
                        <AnswerButton text={optionsA}/>
                    </Col>
                    <Col span={12}>
                        <AnswerButton text={optionsB}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
