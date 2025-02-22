'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Image from 'next/image';

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'received',
      text: 'Hallo! 👋 Wie kann ich Ihnen helfen?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      type: 'sent',
      text: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulierte Antwort nach 1 Sekunde
    setTimeout(() => {
      const response = {
        type: 'received',
        text: 'Danke für Ihre Nachricht! Einer unserer Mitarbeiter wird sich in Kürze bei Ihnen melden.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <>
      {/* WhatsApp Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-0 rounded-full shadow-lg hover:opacity-90 transition-opacity z-50"
      >
        <Image
          src="/whatsapp.svg"
          alt="WhatsApp"
          width={60}
          height={60}
          className="w-[60px] h-[60px]"
        />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-50">
          {/* Header */}
          <div className="bg-[#128C7E] p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/CONSULTING.svg"
                alt="Company Logo"
                width={40}
                height={40}
                className="rounded-full bg-white p-1"
              />
              <div className="ml-3 text-white">
                <h3 className="font-semibold">NextMove Consulting</h3>
                <p className="text-xs opacity-90">Üblicherweise antworten wir innerhalb 1 Stunde</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:opacity-80"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-[#E5DDD5]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  message.type === 'sent' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === 'sent'
                      ? 'bg-[#DCF8C6] text-black'
                      : 'bg-white text-black'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-right text-xs text-gray-600 mt-1">
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 bg-white rounded-b-2xl border-t">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Schreiben Sie eine Nachricht..."
                className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:border-[#128C7E] text-black placeholder-gray-500"
              />
              <button
                type="submit"
                className="bg-[#128C7E] p-2 rounded-full text-white hover:bg-[#0C6B5D]"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
} 