import React, {Component} from 'react';
import './App.css';
import {Row} from 'antd';
import QuestionCard from '../components/QuestionCard';
const jsonData = require('../data/Questions.json');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Success: 0,
            Failed: 0,
            QuestionId: 0,
            Questions: jsonData.Questions
        };

        this.onAnswered = this.onAnswered.bind(this);
    }

    onAnswered(value) {
        let successCount = this.state.Success;
        let failCount = this.state.Failed;
        const questionId = this.state.QuestionId + 1;

        if (value) {
            successCount++;
        } else {
            failCount++;
        }

        this.setState({
            Success: successCount,
            Failed: failCount,
            QuestionId: questionId
        });
    }


    render() {
        let questionText = this.state.Questions[this.state.QuestionId] ? this.state.Questions[this.state.QuestionId].text : "";
        let optionsA = this.state.Questions[this.state.QuestionId] ? this.state.Questions[this.state.QuestionId].optionsA : "";
        let optionsB = this.state.Questions[this.state.QuestionId] ? this.state.Questions[this.state.QuestionId].optionsB : "";

        return (
            <div>


                <Row>
                    <QuestionCard onAnswered={this.onAnswered} text={questionText} optionsA={optionsA}
                                  optionsB={optionsB}/>
                </Row>
            </div>);
    }
}

export default App;
