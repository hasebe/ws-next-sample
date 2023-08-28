"use client";

import { useState } from "react";

const RandomMessages = () => {
  const [messages, setMessages] = useState("");

  const fetchMessages = async () => {
    const response = await fetch("/api/random-messages");
    const { message } = await response.json();
    setMessages(message);
  };

  return (
    <div>
      <p className="mb-4">{messages}</p>
      <button
        className="bg-blue-800 text-white rounded-lg px-4 py-2"
        onClick={fetchMessages}
      >
        Generate messages
      </button>
    </div>
  );
};

export default RandomMessages;
