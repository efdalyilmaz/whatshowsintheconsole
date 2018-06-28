import React, {Component} from 'react';
import './App.css';
import {Row} from 'antd';
import QuestionCard from '../components/QuestionCard';
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

        return (
            <div>


                <Row>
                    <QuestionCard text={questionText} optionsA={optionsA} optionsB={optionsB} />
                </Row>
            </div>);
    }
}

export default App;
