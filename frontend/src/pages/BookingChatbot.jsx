import React, { useState, useEffect, useRef } from 'react';
import {museumsData, packagesData } from '../assets/assets.js'; // Make sure this path is correct
import '../css files/BookingChatbot.css';

// A helper to format the date nicely
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default function BookingChatbot() {
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState('INIT'); // INIT, AWAIT_MUSEUM, AWAIT_PACKAGE, etc.
  const [selections, setSelections] = useState({
    museum: null,
    pkg: null,
    date: '',
    tickets: 1,
    name: '',
  });
  const chatEndRef = useRef(null);

  // Function to add a message to the chat
  const addMessage = (text, sender, options = []) => {
    setMessages((prev) => [...prev, { text, sender, options }]);
  };

  // The "brain" of the chatbot that reacts to step changes
  useEffect(() => {
    switch (step) {
      case 'INIT':
        addMessage('Hello! Welcome to the Museum Booking Assistant. 🏛');
        addMessage('Which museum would you like to visit?', 'bot', museumsData);
        setStep('AWAIT_MUSEUM');
        break;
      case 'MUSEUM_SELECTED':
        const selectedMuseum = selections.museum;
        const availablePackages = packagesData.filter(p => selectedMuseum.packages.includes(p._id));
        addMessage(`Great choice! Now, please select a package for ${selectedMuseum.name}.`, 'bot', availablePackages);
        setStep('AWAIT_PACKAGE');
        break;
      case 'PACKAGE_SELECTED':
        addMessage(`🎉 Congratulations! You've selected the "${selections.pkg.name}" package at ${selections.museum.name}.`);
        addMessage('Please select your visit date.', 'bot');
        setStep('AWAIT_DATE');
        break;
      case 'DATE_SELECTED':
        addMessage('How many tickets would you like to book?', 'bot');
        setStep('AWAIT_TICKETS');
        break;
      case 'TICKETS_SELECTED':
         addMessage(`🎉 Congratulations! You have selected ${selections.tickets} ticket(s) for ${formatDate(selections.date)}.`, 'bot');
         addMessage('To complete the booking, please provide your full name.', 'bot');
         setStep('AWAIT_NAME');
        break;
       case 'NAME_SUBMITTED':
        const totalPrice = selections.pkg.price * selections.tickets;
        addMessage(`Thank you, ${selections.name}! Your booking is almost complete.`);
        addMessage(`Total Price: ₹${totalPrice.toFixed(2)}`, 'bot');
        setStep('AWAIT_PAYMENT');
        break;
      default:
        break;
    }
  }, [step, selections.museum, selections.pkg]);
  
  // Effect to auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  const handleOptionClick = (option) => {
    if (step === 'AWAIT_MUSEUM') {
      addMessage(option.name, 'user');
      setSelections({ ...selections, museum: option });
      setStep('MUSEUM_SELECTED');
    } else if (step === 'AWAIT_PACKAGE') {
      addMessage(option.name, 'user');
      setSelections({ ...selections, pkg: option });
      setStep('PACKAGE_SELECTED');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    if (step === 'AWAIT_DATE') {
        const date = formData.get('date');
        addMessage(formatDate(date), 'user');
        setSelections({ ...selections, date });
        setStep('DATE_SELECTED');
    } else if (step === 'AWAIT_TICKETS') {
        const tickets = parseInt(formData.get('tickets'), 10);
        addMessage(`${tickets} ticket(s)`, 'user');
        setSelections({ ...selections, tickets });
        setStep('TICKETS_SELECTED');
    } else if (step === 'AWAIT_NAME') {
        const name = formData.get('name');
        addMessage(name, 'user');
        setSelections({ ...selections, name });
        setStep('NAME_SUBMITTED');
    }
  };
  
  const handlePayment = () => {
    alert("Redirecting to the payment page...");
    // In a real app, you would use React Router or window.location to navigate
    // e.g., window.location.href = '/payment';
  }

  // Gets the current set of actions (buttons or forms) based on the step
  const renderActions = () => {
    const currentMessage = messages[messages.length - 1];
    if (currentMessage?.sender === 'bot' && currentMessage.options?.length > 0) {
      return (
        <div className="options-container">
          {currentMessage.options.map((option) => (
            <button key={option._id} onClick={() => handleOptionClick(option)} className="option-button">
              {option.name} {option.price > 0 ? (`₹${option.price}`) : ''}
            </button>
          ))}
        </div>
      );
    }
    
    switch (step) {
      case 'AWAIT_DATE':
        return (
          <form onSubmit={handleFormSubmit} className="input-form">
            <input type="date" name="date" required min={new Date().toISOString().split("T")[0]} />
            <button type="submit">Select Date</button>
          </form>
        );
      case 'AWAIT_TICKETS':
        return (
          <form onSubmit={handleFormSubmit} className="input-form">
            <input type="number" name="tickets" defaultValue="1" min="1" max="20" required />
            <button type="submit">Confirm Tickets</button>
          </form>
        );
      case 'AWAIT_NAME':
         return (
          <form onSubmit={handleFormSubmit} className="input-form">
            <input type="text" name="name" placeholder="Enter your full name" required />
            <button type="submit">Submit Name</button>
          </form>
        );
      case 'AWAIT_PAYMENT':
        return <button onClick={handlePayment} className="payment-button">Proceed to Payment</button>;
      default:
        return null;
    }
  };


  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="chat-actions">
        {renderActions()}
      </div>
    </div>
  );
}