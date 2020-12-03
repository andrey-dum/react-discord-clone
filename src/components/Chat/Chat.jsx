import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './index.css'

import { selectChannelName, selectChannelId } from '../../features/appSlice';
import { selectUser } from '../../features/userSlice';

import ChatHeader from '../ChatHeader/ChatHeader';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from '../Message/Message';
import db from '../../firebase';
import firebase from 'firebase';


const Chat = () => {
    const channelName = useSelector(selectChannelName);
    const channelId = useSelector(selectChannelId);
    const user = useSelector(selectUser);

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    useEffect(() => {
        if (channelId) {
            db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => (
                setMessages(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                })))
            ));
        }
       
    }, [channelId]);

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                user,
            })
        
        setInput('');
    }

    return (
        <div className="chat">
            <ChatHeader 
                channelName={channelName}
                channelId={channelId}
             />

            <div className="chat__messages">
               { messages.map(message => (
                    <Message 
                        key={message.id} 
                        message={message.message} 
                        user={message.user}
                        timestamp={message.timestamp}
                    />
               )) }
            </div>

            <div className="chat__input">
                <AddCircleIcon />
                <form>
                    <input 
                        onChange={handleChange}
                        value={input}
                        disabled={!channelId}
                        placeholder={`Message to #${channelName || ''}`}
                        placeholer={`Message #TESTCHANNEL`}
                    />
                    <button 
                        disabled={!channelId}
                        className="chat__inputButton" 
                        type="submit"
                        onClick={sendMessage}
                    >
                        Send Message
                    </button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />
                </div>
            </div>

        </div>
    );
}

export default Chat;
