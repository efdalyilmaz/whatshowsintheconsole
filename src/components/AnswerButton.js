import React, {Component} from 'react';

export default class AnswerButton extends Component {

    render() {
        return (
            <div className="answerButton">
                {this.props.text}
            </div>
        );
    }
}

