import React, { useState, useEffect, useRef } from 'react';
import './Chat.css'; // Ensure you have the corresponding CSS file

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendClick = () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: 'user' };
      setMessages([...messages, newMessage]);
      setInput('');

      setTimeout(() => {
        const botResponse = { text: 'This is an automated response for testing.', sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 1000);
    }
  };

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={toggleChat} className="chat-toggle">
        {isOpen ? '▼ Close Chat' : '▲ Chat with us!'}
      </button>

      {isOpen && (
        <div className="chat-container">
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendClick()}
            />
            <button onClick={handleSendClick}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
