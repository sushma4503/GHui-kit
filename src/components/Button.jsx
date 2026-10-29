import React from 'react';

/**
 * Reusable Button Component
 * All class names are prefixed with "gh-" as requested.
 * @param {string} variant - 'primary' | 'secondary' | 'outline' | 'danger' | 'icon'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {React.ReactNode} icon - Optional icon element
 * @param {Function} onClick - Click handler function
 * @param {boolean} disabled - Disabled state
 * @param {string} type - 'button' | 'submit' | 'reset'
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  ...props
}) => {
  const variantClass = `gh-btn-${variant}`;
  const sizeClass = variant === 'icon' ? 'gh-btn-icon' : `gh-btn-${size}`;
  const classes = `gh-btn ${variantClass} ${sizeClass} ${className}`.trim();

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="gh-btn-icon-wrapper">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
