import React, {Component} from 'react';
import './App.css';
import AnswerButton from '../components/AnswerButton';
import {Row, Col} from 'antd';

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
                        console.log(c.getCount())
                        `;

        return (
            <div className="questionCard">
                <Row className="question">
                    Burada kod var
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

    // render() {
    //     let actions = [<AnswerButton text="Answer A"/>, <AnswerButton text="Answer B"/>];
    //     return (
    //         <div className="questionCard" style={{width: 600}}>
    //             <Card
    //                 cover={<img alt="example"
    //                             src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
    //             >
    //                 <Meta title="What shows in the console?"/>
    //             </Card>
    //             <div className="antd-card-action">
    //                 <AnswerButton text="Answer A"/>
    //                 <AnswerButton text="Answer B"/>
    //             </div>
    //         </div>
    //     );
    // }
}

export default App;
