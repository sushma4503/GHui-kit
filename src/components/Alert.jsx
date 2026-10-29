import React, { useState } from 'react';

/**
 * Solid Circle Icons for Compact Banner Alerts
 */
export const SolidStatusIcon = ({ type }) => {
  switch (type) {
    case 'success':
      return (
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="8" cy="8" r="8" fill="#52c41a" />
          <path d="M4.5 8.2L6.8 10.5L11.5 5.8" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'info':
      return (
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="8" cy="8" r="8" fill="#1890ff" />
          <path d="M8 7v4M8 5h.01" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'warning':
      return (
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="8" cy="8" r="8" fill="#faad14" />
          <path d="M8 4.8v4.2M8 11.2h.01" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'error':
      return (
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="8" cy="8" r="8" fill="#ff4d4f" />
          <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
};

/**
 * Large Outlined Status Icons for Card Alerts
 */
export const LargeOutlineStatusIcon = ({ type }) => {
  switch (type) {
    case 'success':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="#52c41a" strokeWidth="2" className="stroke-elem" />
          <path d="M7.5 12.5l3 3 6-6.5" stroke="#52c41a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-elem" />
        </svg>
      );
    case 'info':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="#1890ff" strokeWidth="2" className="stroke-elem" />
          <path d="M12 11v5M12 8h.01" stroke="#1890ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-elem" />
        </svg>
      );
    case 'warning':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="#faad14" strokeWidth="2" className="stroke-elem" />
          <path d="M12 7.5v6M12 16.5h.01" stroke="#faad14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-elem" />
        </svg>
      );
    case 'error':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="#ff4d4f" strokeWidth="2" className="stroke-elem" />
          <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="#ff4d4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-elem" />
        </svg>
      );
    default:
      return null;
  }
};

/**
 * Reusable Alert Component for MonoUI Kit
 * All classes prefixed with "gh-"
 */
const Alert = ({
  type = 'info',
  message,
  description,
  showIcon = false,
  iconSize = 'normal', // 'normal' | 'large'
  closable = false,
  onClose,
  className = '',
  style,
  ...props
}) => {
  const [closed, setClosed] = useState(false);

  if (closed) {
    return null;
  }

  const handleClose = (e) => {
    e.stopPropagation();
    setClosed(true);
    if (onClose) onClose(e);
  };

  const hasDescription = Boolean(description);
  const isLargeCard = iconSize === 'large';

  // 1. Large Icon Card Layout
  if (isLargeCard) {
    return (
      <div
        className={`gh-alert gh-alert-${type} gh-alert-large-card ${className}`.trim()}
        role="alert"
        style={style}
        {...props}
      >
        <span className="gh-alert-large-icon-wrapper">
          <LargeOutlineStatusIcon type={type} />
        </span>

        <div className="gh-alert-card-body">
          {message && <div className="gh-alert-card-title">{message}</div>}
          {description && <p className="gh-alert-card-desc">{description}</p>}
        </div>

        {closable && (
          <button
            type="button"
            className="gh-alert-close-btn"
            onClick={handleClose}
            aria-label="Close alert"
          >
            <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>
    );
  }

  // 2. Detailed Description Alert Layout (with header row & close)
  if (hasDescription) {
    return (
      <div
        className={`gh-alert gh-alert-${type} gh-alert-with-description ${className}`.trim()}
        role="alert"
        style={style}
        {...props}
      >
        <div className="gh-alert-header-row">
          <span className="gh-alert-title">{message}</span>
          {closable && (
            <button
              type="button"
              className="gh-alert-close-btn"
              onClick={handleClose}
              aria-label="Close alert"
            >
              <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>
        <p className="gh-alert-description">{description}</p>
      </div>
    );
  }

  // 3. Compact Banner Alert Layout
  return (
    <div
      className={`gh-alert gh-alert-${type} ${className}`.trim()}
      role="alert"
      style={style}
      {...props}
    >
      {showIcon && (
        <span className="gh-alert-icon-left">
          <SolidStatusIcon type={type} />
        </span>
      )}

      <span className="gh-alert-text">{message}</span>

      {closable && (
        <button
          type="button"
          className="gh-alert-close-btn"
          onClick={handleClose}
          aria-label="Close alert"
        >
          <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;
