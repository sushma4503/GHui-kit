import React, { createContext, useContext, useState } from 'react';

const RadioGroupContext = createContext(null);

/**
 * Reusable Radio Component
 * All class names are prefixed with "gh-" as requested.
 *
 * @param {boolean} checked - Controlled checked state
 * @param {boolean} defaultChecked - Uncontrolled initial state
 * @param {any} value - Value used when rendered inside Radio.Group
 * @param {boolean} disabled - Whether the radio button is disabled
 * @param {string} size - 'large' | 'medium' | 'small'
 * @param {function} onChange - Change callback
 * @param {React.ReactNode} children - Label text or element
 */
const Radio = ({
  checked: controlledChecked,
  defaultChecked = false,
  value,
  disabled = false,
  size,
  onChange,
  name,
  id,
  className = '',
  children,
  ...props
}) => {
  const group = useContext(RadioGroupContext);
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  // Group context takes precedence
  const isChecked = group
    ? group.value === value
    : controlledChecked !== undefined
    ? controlledChecked
    : internalChecked;

  const isDisabled = group?.disabled || disabled;
  const radioSize = size || group?.size || 'medium';
  const radioName = name || group?.name;

  const handleChange = (e) => {
    if (isDisabled) return;

    if (group) {
      if (group.onChange) {
        group.onChange(value, e);
      }
    } else {
      if (controlledChecked === undefined) {
        setInternalChecked(e.target.checked);
      }
      if (onChange) {
        onChange(e);
      }
    }
  };

  const sizeClass = `gh-radio-${radioSize}`;
  const wrapperSizeClass = `gh-radio-wrapper-${radioSize}`;
  const checkedClass = isChecked ? 'gh-radio-checked' : '';
  const disabledClass = isDisabled ? 'gh-radio-disabled' : '';

  return (
    <label
      className={`gh-radio-wrapper ${wrapperSizeClass} ${disabledClass ? 'gh-radio-wrapper-disabled' : ''} ${className}`.trim()}
    >
      <span className={`gh-radio ${sizeClass} ${checkedClass} ${disabledClass}`.trim()}>
        <input
          type="radio"
          name={radioName}
          id={id}
          value={value}
          checked={isChecked}
          disabled={isDisabled}
          onChange={handleChange}
          className="gh-radio-input"
          {...props}
        />
        <span className="gh-radio-inner" />
      </span>
      {children && <span className="gh-radio-label">{children}</span>}
    </label>
  );
};

/**
 * Radio.Button Variant
 */
const RadioButton = ({
  value,
  disabled = false,
  size,
  children,
  className = '',
  ...props
}) => {
  const group = useContext(RadioGroupContext);
  const isChecked = group ? group.value === value : false;
  const isDisabled = group?.disabled || disabled;
  const buttonSize = size || group?.size || 'medium';
  const buttonStyle = group?.buttonStyle || 'outline';

  const handleChange = (e) => {
    if (isDisabled) return;
    if (group?.onChange) {
      group.onChange(value, e);
    }
  };

  const sizeClass = buttonSize === 'large' ? 'gh-radio-button-large' : buttonSize === 'small' ? 'gh-radio-button-small' : '';
  const checkedClass = isChecked ? `gh-radio-button-checked ${buttonStyle === 'solid' ? 'gh-radio-button-solid' : ''}` : '';
  const disabledClass = isDisabled ? 'gh-radio-button-disabled' : '';

  return (
    <label className={`gh-radio-button-wrapper ${sizeClass} ${checkedClass} ${disabledClass} ${className}`.trim()}>
      <input
        type="radio"
        name={group?.name}
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleChange}
        className="gh-radio-button-input"
        {...props}
      />
      <span>{children}</span>
    </label>
  );
};

/**
 * Radio.Group Component
 */
const RadioGroup = ({
  value: controlledValue,
  defaultValue,
  onChange,
  disabled = false,
  size = 'medium',
  direction = 'horizontal',
  buttonStyle = 'outline',
  name,
  options = null,
  className = '',
  children,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = controlledValue !== undefined ? controlledValue : internalValue;

  const handleGroupChange = (val, e) => {
    if (controlledValue === undefined) {
      setInternalValue(val);
    }
    if (onChange) {
      onChange(val, e);
    }
  };

  const groupClasses = [
    'gh-radio-group',
    `gh-radio-group-${direction}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <RadioGroupContext.Provider
      value={{
        value: currentValue,
        onChange: handleGroupChange,
        disabled,
        size,
        name,
        buttonStyle
      }}
    >
      <div className={groupClasses} role="radiogroup" {...props}>
        {options
          ? options.map((opt) => {
              const optVal = typeof opt === 'object' ? opt.value : opt;
              const optLabel = typeof opt === 'object' ? opt.label : opt;
              const optDisabled = typeof opt === 'object' ? opt.disabled : false;
              return (
                <Radio key={String(optVal)} value={optVal} disabled={optDisabled}>
                  {optLabel}
                </Radio>
              );
            })
          : children}
      </div>
    </RadioGroupContext.Provider>
  );
};

Radio.Group = RadioGroup;
Radio.Button = RadioButton;

export default Radio;
