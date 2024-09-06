import React from 'react';
import './Message.css';

/**
 * Message component for displaying notifications or alerts.
 * 
 * @param {string} type - The type of message (e.g., 'success', 'error'). This determines the styling.
 * @param {string} text - The text content of the message.
 * @param {function} [onClose] - Optional function to call when the close button is clicked. This allows the message to be dismissed.
 * 
 * @returns {JSX.Element} The Message component.
 */
const Message = ({ type, text, onClose }) => {
    return (
        <div className={`message message-${type}`}>
            {/* Display the message text */}
            <span>{text}</span>
            {/* Conditionally render the close button if onClose function is provided */}
            {onClose && <button onClick={onClose}>&times;</button>}
        </div>
    );
};

export default Message;
