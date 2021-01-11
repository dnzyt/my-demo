import React, { Fragment } from 'react';

import PubSub from 'pubsub-js';
import { nanoid } from 'nanoid';

class Person extends React.Component {


    sendMessage = (msg) => {
        PubSub.publish('User Talked', {
            mId: nanoid(),
            content: msg,
            sender: this.props.username
        });
        this.input1.value = '';
    }

    onBlur = (event) => {
        if (event.target.value) {
            this.sendMessage(event.target.value);
        }
    }

    keyPressed = (event) => {
        if(event.keyCode == 13 && event.target.value){
            this.sendMessage(event.target.value);
         }
    }

    render() {
        return (
            <div className="person-box">
                <h4 className="person-header">I'm {this.props.username}</h4>
                <input ref={e => this.input1 = e}
                        type="text"
                        onKeyDown={this.keyPressed}
                        onBlur={this.onBlur}
                        placeholder="Say something..." />

            </div>
        );
    }

}

export default Person;