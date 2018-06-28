import React, {Component} from 'react';
import AnswerButton from './AnswerButton';
import {Row, Col} from 'antd';
import CodeMirror from "react-codemirror";
import 'codemirror/mode/javascript/javascript'

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

        var options = {
            lineNumbers: false,
            readOnly: true,
            mode: "javascript",
            theme:"darcula"
        };

        return (
            <div className="questionCard">
                <Row className={"whatshowsintheconsole"}>
                    What shows in the console?
                </Row>
                <Row className="question">
                    <CodeMirror value={this.props.text}
                                options={options}/>
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

