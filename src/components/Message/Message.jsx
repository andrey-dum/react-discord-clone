import React from 'react';

import './index.css';
import { Avatar } from '@material-ui/core';

const Message = () => {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>Johnny
                    <span className="message__timestamp">
                        timestamp
                    </span>
                </h4>
                <p>Hello. This is a message!</p>
            </div>
        </div>
    );
}

export default Message;
