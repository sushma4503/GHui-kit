import React, { useState } from 'react';

/**
 * Reusable Switch (Toggle) Component
 * All class names are prefixed with "gh-" as requested.
 *
 * @param {boolean} checked - Controlled checked state
 * @param {boolean} defaultChecked - Uncontrolled initial state (default: false)
 * @param {function} onChange - Callback invoked on toggle: (checked, event) => void
 * @param {boolean} disabled - Whether the switch is interactive (default: false)
 * @param {string} size - 'large' | 'small' | 'default' (default: 'large')
 * @param {boolean} loading - Loading indicator inside knob (default: false)
 * @param {React.ReactNode} checkedChildren - Content inside track when active
 * @param {React.ReactNode} unCheckedChildren - Content inside track when inactive
 * @param {string} className - Additional CSS class names
 */
const Switch = ({
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = 'large',
  loading = false,
  checkedChildren = null,
  unCheckedChildren = null,
  className = '',
  id,
  name,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isControlled = controlledChecked !== undefined;
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = isControlled ? controlledChecked : internalChecked;

  const handleToggle = (event) => {
    if (disabled || loading) return;

    const nextChecked = !isChecked;
    if (!isControlled) {
      setInternalChecked(nextChecked);
    }
    if (onChange) {
      onChange(nextChecked, event);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      handleToggle(event);
    }
  };

  // Derive class names
  const sizeClass = size === 'small' ? 'gh-switch-small' : 'gh-switch-large';
  const stateClass = isChecked ? 'gh-switch-checked' : 'gh-switch-unchecked';
  const disabledClass = disabled ? 'gh-switch-disabled' : '';
  const loadingClass = loading ? 'gh-switch-loading' : '';

  const classes = [
    'gh-switch',
    sizeClass,
    stateClass,
    disabledClass,
    loadingClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      aria-disabled={disabled}
      aria-label={ariaLabel || (isChecked ? 'Active switch' : 'Inactive switch')}
      id={id}
      name={name}
      disabled={disabled}
      className={classes}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {/* Sliding Knob */}
      <span className="gh-switch-handle">
        {loading && <span className="gh-switch-loading-icon" aria-hidden="true" />}
      </span>

      {/* Inner Track Content (optional) */}
      {(checkedChildren || unCheckedChildren) && (
        <span className="gh-switch-inner">
          {isChecked ? checkedChildren : unCheckedChildren}
        </span>
      )}
    </button>
  );
};

export default Switch;
