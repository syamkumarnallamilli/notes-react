import React, { useState } from "react";

function ChatApp() {
  // State to manage messages
  const [chat, setChat] = useState({
    messages: [
      { sender: "Alice", text: "Hello!", timestamp: "10:00 AM" },
      { sender: "Bob", text: "Hi Alice!", timestamp: "10:02 AM" }
    ]
  });

  // State for new message input
  const [newMessage, setNewMessage] = useState("");

  // Function to add a new message
  const sendMessage = () => {
    if (newMessage.trim() === "") return; // Prevent empty messages

    const newMsgObj = {
      sender: "You", // Assume current user
      text: newMessage,
      timestamp: new Date().toLocaleTimeString() // Get current time
    };

    // Update the chat state (preserve old messages)
    setChat((prevChat) => ({
      messages: [...prevChat.messages, newMsgObj]
    }));

    setNewMessage(""); // Clear input after sending
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", width: "300px" }}>
      <h3>Chat</h3>
      <div style={{ height: "200px", overflowY: "auto", border: "1px solid #ccc", padding: "5px" }}>
        {chat.messages.map((msg, index) => (
          <p key={index}><strong>{msg.sender}:</strong> {msg.text} <small>({msg.timestamp})</small></p>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        style={{ width: "100%", padding: "5px", marginTop: "5px" }}
      />
      <button onClick={sendMessage} style={{ marginTop: "5px", width: "100%" }}>
        Send
      </button>
    </div>
  );
}

export default ChatApp;
