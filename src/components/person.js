import React, { Fragment } from 'react';

import PubSub from 'pubsub-js';
import { nanoid } from 'nanoid';

class Person extends React.Component {


    sendMessage = (event) => {

        PubSub.publish('User Talked', {
            mId: nanoid(),
            content: event.target.value,
            sender: this.props.username
        });
        this.input1.value = '';
    }

    render() {
        return (
            <Fragment>
                <h4>I'm {this.props.username}</h4>
                <input ref={e => this.input1 = e} type="text" onBlur={this.sendMessage} placeholder="What do you want to say?" />

            </Fragment>
        );
    }

}

export default Person;