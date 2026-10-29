import React from 'react';

/**
 * MonoUI Kit - Class-Based Icon Component
 * Renders an <i> element with CSS class names (ZERO inline SVG elements).
 *
 * @param {string} name - Icon identifier (e.g. 'pencil', 'Trash2', 'search', 'home')
 * @param {number|string} size - Optical size (10, 11, 12, 13, 14, 16, 18, 20, 22, 24, 28, 32)
 * @param {string} color - Optional color token or hex (#646464, #cacaca, #bdbdbd, etc.)
 * @param {string} className - Optional additional CSS class names
 */
const Icon = ({ name, size, color, className = '', style, ...props }) => {
  if (!name) return null;

  // Convert PascalCase / camelCase to kebab-case
  const slug = String(name)
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([a-zA-Z])([0-9]+)/g, '$1-$2')
    .toLowerCase();

  const sizeClass = size ? `gh-size-${size}` : '';
  const inlineStyle = color ? { color, ...style } : style;

  return (
    <i
      className={`gh-icon gh-icon-${slug} ${sizeClass} ${className}`.trim()}
      style={inlineStyle}
      aria-hidden="true"
      {...props}
    />
  );
};

export default Icon;
