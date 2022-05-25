import './App.css';
import React from 'react';
import MessageItems from './components/MessageItems.js';
import { useEffect, useState } from 'react/cjs/react.development';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [nextId, setNextId] = useState(0);
  const [intervalIndex, setIntervalIndex] = useState(0);

  const sendMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      id: nextId,
      text: messageInput,
    }
    setMessages([...messages, newMessage]);
    setNextId(nextId + 1);
    setMessageInput('');
  };

  const deleteMessage = (messageId) => {
    setMessages(messages.filter(({ id }) => id !== messageId));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIntervalIndex(intervalIndex => intervalIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (messages.length <= intervalIndex) {
      setIntervalIndex(0);
    }
  }, [intervalIndex]);

  return (
    <div className="App">
      {
        messages.length ?
          <div className='setTimeout'>
            <b>{messages[intervalIndex]?.text}</b>
          </div>
          :
          <div className='setTimeout'>Empty</div>
      }
      <div className='all_messages'>
        {messages?.map((item, i) => {
          return <MessageItems key={i} item={item} deleteMessage={deleteMessage} />
        })}
      </div>
      <form className='input_button' onSubmit={sendMessage}>
        <input
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          name="message" type="text"
          placeholder="Write a message.."
        />
        <button onClick={sendMessage}>Send</button>
      </form>
    </div>
  )
};

export default App;
