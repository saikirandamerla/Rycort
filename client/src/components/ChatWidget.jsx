// src/components/ChatWidget.js
import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ChatWidget({ onClose }) {
  const [messages, setMessages] = useState([]); // No default messages
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { from: 'student', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '90px',
      right: '20px',
      width: '320px',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      zIndex: 1050,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#2196f3',
        color: 'white',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <strong>Mrs. Smith</strong>
          
        </div>
        <i
          className="bi bi-x-lg"
          onClick={onClose}
          style={{ cursor: 'pointer', fontSize: '1.2rem' }}
        ></i>
      </div>

      {/* Messages */}
      <div style={{
        padding: '10px',
        backgroundColor: '#f7f7f7',
        height: '200px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column-reverse'
      }}>
        {[...messages].reverse().map((msg, index) => (
          <div key={index} style={{
            alignSelf: msg.from === 'student' ? 'flex-end' : 'flex-start',
            backgroundColor: msg.from === 'student' ? '#d4f5d4' : '#e1ecf4',
            color: 'black',
            padding: '8px 12px',
            borderRadius: '15px',
            marginBottom: '8px',
            maxWidth: '75%'
          }}>
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div style={{ display: 'flex', padding: '8px', borderTop: '1px solid #ccc' }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            padding: '8px'
          }}
        />
        <button
          onClick={handleSend}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: '#007bff',
            fontSize: '1.5rem',
            padding: '0 8px'
          }}
        >
          <i className="bi bi-send-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default ChatWidget;
