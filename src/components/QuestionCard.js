import React, {Component} from 'react';
import AnswerButton from './AnswerButton';
import {Row, Col} from 'antd';
import CodeMirror from "react-codemirror";
import 'codemirror/mode/javascript/javascript'

export default class QuestionCard extends Component {
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
                        <AnswerButton text={this.props.optionsA}/>
                    </Col>
                    <Col span={12}>
                        <AnswerButton text={this.props.optionsB}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

