import React from 'react';

/**
 * Message / Toast Pill Status Icons
 */
export const MessageStatusIcon = ({ type }) => {
  switch (type) {
    case 'info':
      return (
        <span className="gh-message-icon gh-msg-info">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="8" cy="8" r="8" fill="#1890ff" />
            <path d="M8 7v4M8 5h.01" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      );
    case 'warning':
      return (
        <span className="gh-message-icon gh-msg-warning">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="8" cy="8" r="8" fill="#faad14" />
            <path d="M8 4.8v4.2M8 11.2h.01" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      );
    case 'success':
      return (
        <span className="gh-message-icon gh-msg-success">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="8" cy="8" r="8" fill="#52c41a" />
            <path d="M4.5 8.2L6.8 10.5L11.5 5.8" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      );
    case 'error':
      return (
        <span className="gh-message-icon gh-msg-error">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="8" cy="8" r="8" fill="#ff4d4f" />
            <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      );
    case 'loading':
      return (
        <span className="gh-message-icon gh-msg-loading">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="8" cy="8" r="6.5" stroke="#91d5ff" strokeWidth="2" opacity="0.3" />
            <path d="M8 1.5A6.5 6.5 0 0 1 14.5 8" stroke="#1890ff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      );
    default:
      return null;
  }
};

/**
 * Reusable Message / Toast Pill Component
 */
const Message = ({
  type = 'info',
  children = 'This is a message',
  className = '',
  style,
  ...props
}) => {
  return (
    <div
      className={`gh-message-pill ${className}`.trim()}
      role="status"
      style={style}
      {...props}
    >
      <MessageStatusIcon type={type} />
      <span className="gh-message-text">{children}</span>
    </div>
  );
};

export default Message;
