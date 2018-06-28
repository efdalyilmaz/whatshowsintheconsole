import React, {Component} from 'react';
import './App.css';
import AnswerButton from '../components/AnswerButton';
import {Row, Col} from 'antd';
import CodeMirror from "react-codemirror";

class App extends Component {


    render() {
        let question = `class ParentClass {
                            getCount() {
                                return 20;
                            }
                        }
                        
                        class ChildClass extends ParentClass {
                            getCount() {
                                return 30;
                            }
                        }
                        
                        let c = new ChildClass();
                        console.log(c.getCount());
                        
                        let c = new ChildClass();
                        console.log(c.getCount());
                        
                        let c = new ChildClass();
                        console.log(c.getCount());
                        
                        let c = new ChildClass();
                        console.log(c.getCount());
                        
                        
                        let c = new ChildClass();
                        console.log(c.getCount());
                        `;
        var options = {
            lineNumbers: true,
            readOnly: true,
            mode: "javascript",
            theme:"darcula"
        };

        return (
            <div className="questionCard">
                <Row className="question">
                    <CodeMirror value={question}
                                options={options}/>
                </Row>
                <Row>
                    What shows in the console?
                </Row>
                <Row>
                    <Col span={12}>
                        <AnswerButton text="Answer A"/>
                    </Col>
                    <Col span={12}>
                        <AnswerButton text="Answer B"/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
