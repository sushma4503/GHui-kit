import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { monoNavSections } from '../data/monouiData';
import '../styles/sidebar.scss';

// Route path lookup map for components
const componentPathMap = {
  'Carousel': '/carousel',
  'Dashboard': '/dashboard',
  'Button': '/buttons',
  'Icon': '/icons',
  'Typography': '/typography',
  'Space': '/space',
  'Spacing': '/space',
  'Grid': '/grid',
  'Breadcrumb': '/breadcrumb',
  'Dropdown': '/dropdown',
  'Switch': '/switch',
  'Radio': '/radio',
  'Alert': '/alert',
  'Message': '/alert',
  'Notification': '/alert',
};

/**
 * MonoUI Kit Sidebar Navigation
 * Matches the exact design specifications from the MonoUI Kit documentation screenshot
 * All class names are prefixed with "gh-" as requested.
 */
const Sidebar = ({
  activeComponent = 'Carousel',
  onSelectComponent,
  mobileOpen = false,
  onCloseMobile
}) => {
  const activeItemRef = useRef(null);

  // Auto-scroll the active navigation item into view when activeComponent changes
  useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [activeComponent]);

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 90
          }}
          onClick={onCloseMobile}
        />
      )}

      <aside className={`gh-monoui-sidebar ${mobileOpen ? 'gh-mobile-open' : ''}`}>
        {/* Brand Header */}
        <div className="gh-monoui-brand">
          <div className="gh-monoui-logo-icon">M</div>
          <span className="gh-monoui-logo-text">MonoUI Kit</span>
        </div>

        {/* Categorized Navigation */}
        <nav className="gh-monoui-sidebar-nav">
          {monoNavSections.map((section) => (
            <div key={section.category} className="gh-sidebar-category-group">
              <div className="gh-sidebar-category-header">
                {section.category}
              </div>

              <div className="gh-sidebar-category-items">
                {section.items.map((item) => {
                  const isActive = activeComponent === item;
                  const targetPath = componentPathMap[item] || `/${item.toLowerCase()}`;

                  return (
                    <Link
                      to={targetPath}
                      key={`${section.category}-${item}`}
                      ref={isActive ? activeItemRef : null}
                      className={`gh-sidebar-nav-item ${isActive ? 'gh-active' : ''}`}
                      onClick={() => {
                        if (onSelectComponent) onSelectComponent(item);
                        if (onCloseMobile) onCloseMobile();
                      }}
                    >
                      {isActive && <span className="gh-active-indicator-dot" />}
                      <span>{item}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
