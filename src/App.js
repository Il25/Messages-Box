import './App.css';
import React from 'react';
import MessageItems from './components/MessageItems.js';
import { useState } from 'react/cjs/react.development';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [nextId, setNextId] = useState(0);

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
    setMessages(messages.filter(({ id }) => id !== messageId))
  };

  return (
    <div className="App">
      <div className='setTimeout'>hi</div>
      <div className='all_messages'>
        {messages?.map((item) => {
          return <MessageItems item={item} deleteMessage={deleteMessage} />
        })}
      </div>
      <form className='input_button' onSubmit={sendMessage}>
        <input
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          name="message" type="text"
          placeholder="Write a message"
        />
        <button onClick={sendMessage}>Send</button>
      </form>
    </div>
  )
};

export default App;
