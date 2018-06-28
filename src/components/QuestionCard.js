import React, {Component} from 'react';
import AnswerButton from './AnswerButton';
import {Row, Col} from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { darcula } from 'react-syntax-highlighter/styles/prism';

export default class QuestionCard extends Component {

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(optionsType){
        console.log(optionsType);
        this.props.onAnswered(this.props.onAnswered(optionsType === this.props.answer));
    }

    render() {

        return (
            <div className="questionCard">
                <Row className={"whatshowsintheconsole"}>
                    What shows in the console?
                </Row>
                <Row className="question">
                    <SyntaxHighlighter language='javascript' style={darcula}>{this.props.text}</SyntaxHighlighter>
                </Row>
                <Row>
                    <Col span={12}>
                        <AnswerButton onClick={this.onClick} text={this.props.optionsA} type="A"/>
                    </Col>
                    <Col span={12}>
                        <AnswerButton onClick={this.onClick} text={this.props.optionsB} type="B"/>
                    </Col>
                </Row>
            </div>
        );
    }
}

