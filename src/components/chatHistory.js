import React, { Component } from 'react';


import PubSub from 'pubsub-js';


class ChatHistory extends Component {
    state = {
        messages: [
            {
                mId: 1,
                content: 'Hello World!',
                sender: 'Tom'
            },
            {
                mId: 2,
                content: 'Hi CAST Team!',
                sender: 'John'
            },
            {
                mId: 3,
                content: 'Welcome',
                sender: 'Tom'
            }
        ]
    }

    componentDidMount() {
        this.token = PubSub.subscribe('User Talked', (msg, data) => {
            this.setState({
                messages: [...this.state.messages, data]
            })
        });
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }


    render() {
        return <div className="chat-box">
            {this.state.messages.map(msg => <p key={msg.mId}>{msg.sender}: {msg.content}</p>)}
        </div>

    }
}

export default ChatHistory;