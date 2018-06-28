import React, {Component} from 'react';

export default class AnswerButton extends Component {

    render() {
        return (
            <div className="answerButton" onClick={() => this.props.onClick(this.props.type)}>
                {this.props.text}
            </div>
        );
    }
}

