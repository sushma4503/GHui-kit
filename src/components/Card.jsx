import React from 'react';

// Icon mapping helper for statistic cards using class names (NO SVG)
const getStatIcon = (iconName) => {
  switch (iconName) {
    case 'Users':
      return <i className="gh-icon gh-icon-users gh-size-22" aria-hidden="true" />;
    case 'Package':
      return <i className="gh-icon gh-icon-package gh-size-22" aria-hidden="true" />;
    case 'ShoppingBag':
      return <i className="gh-icon gh-icon-shopping-bag gh-size-22" aria-hidden="true" />;
    case 'IndianRupee':
      return <i className="gh-icon gh-icon-indian-rupee gh-size-22" aria-hidden="true" />;
    default:
      return null;
  }
};

/**
 * Reusable Card Component
 * All class names are prefixed with "gh-" as requested.
 * Can be used as a Statistic Card or generic container
 */
const Card = ({
  title,
  value,
  change,
  isPositive = true,
  description,
  icon,
  children,
  className = '',
  headerAction = null,
  ...props
}) => {
  // If value is provided, render as Statistic Card
  if (value !== undefined) {
    const iconElement = typeof icon === 'string' ? getStatIcon(icon) : icon;

    return (
      <div className={`gh-stat-card ${className}`} {...props}>
        <div className="gh-stat-card-top">
          <span className="gh-stat-card-title">{title}</span>
          {iconElement && <div className="gh-stat-icon-box">{iconElement}</div>}
        </div>

        <div className="gh-stat-card-value">{value}</div>

        <div className="gh-stat-card-footer">
          {change && (
            <span className={`gh-stat-change ${isPositive ? 'gh-positive' : 'gh-negative'}`}>
              {isPositive ? (
                <i className="gh-icon gh-icon-trending-up gh-size-16" aria-hidden="true" />
              ) : (
                <i className="gh-icon gh-icon-trending-down gh-size-16" aria-hidden="true" />
              )}
              {change}
            </span>
          )}
          {description && <span className="gh-stat-desc">{description}</span>}
        </div>
      </div>
    );
  }

  // Generic Card container
  return (
    <div className={`gh-card ${className}`} {...props}>
      {(title || headerAction) && (
        <div className="gh-card-header">
          {title && <h3 className="gh-card-title">{title}</h3>}
          {headerAction && <div className="gh-card-action">{headerAction}</div>}
        </div>
      )}
      <div className="gh-card-body">{children}</div>
    </div>
  );
};

export default Card;
