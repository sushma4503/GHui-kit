import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

/**
 * MonoUI Kit Documentation Layout Wrapper
 * Features fixed left navigation and clean documentation viewport
 */
const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [customActive, setCustomActive] = useState(null);

  // Derive activeComponent from route pathname
  const getActiveComponent = () => {
    const path = location.pathname.toLowerCase();
    if (path.includes('icon')) {
      return 'Icon';
    }
    if (path.includes('typography')) {
      return 'Typography';
    }
    if (path.includes('button')) {
      return 'Button';
    }
    if (path.includes('space') || path.includes('spacing')) {
      return 'Space';
    }
    if (path.includes('breadcrumb')) {
      return 'Breadcrumb';
    }
    if (path.includes('dropdown')) {
      return 'Dropdown';
    }
    if (path.includes('grid')) {
      return 'Grid';
    }
    if (path.includes('switch')) {
      return 'Switch';
    }
    if (path.includes('radio')) {
      return 'Radio';
    }
    if (path.includes('alert') || path.includes('message') || path.includes('notification')) {
      return 'Alert';
    }
    if (path.includes('carousel') || path.includes('dashboard')) {
      return 'Carousel';
    }
    return customActive || 'Carousel';
  };

  const activeComponent = getActiveComponent();

  const handleSelectComponent = (comp) => {
    setCustomActive(comp);
    if (comp === 'Icon') {
      navigate('/icons');
    } else if (comp === 'Typography') {
      navigate('/typography');
    } else if (comp === 'Button') {
      navigate('/buttons');
    } else if (comp === 'Space' || comp === 'Spacing') {
      navigate('/space');
    } else if (comp === 'Breadcrumb') {
      navigate('/breadcrumb');
    } else if (comp === 'Dropdown') {
      navigate('/dropdown');
    } else if (comp === 'Grid') {
      navigate('/grid');
    } else if (comp === 'Radio') {
      navigate('/radio');
    } else if (comp === 'Switch') {
      navigate('/switch');
    } else if (comp === 'Alert' || comp === 'Message' || comp === 'Notification') {
      navigate('/alert');
    } else if (comp === 'Carousel') {
      navigate('/carousel');
    }
  };

  return (
    <div className="gh-monoui-app">
      {/* Sidebar Navigation */}
      <Sidebar
        activeComponent={activeComponent}
        onSelectComponent={handleSelectComponent}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      {/* Main Documentation Area */}
      <div className="gh-monoui-main-wrapper">
        {/* Mobile Header Toggle (Only visible on small viewports) */}
        <div className="gh-monoui-mobile-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div className="gh-monoui-logo-icon">M</div>
            <span className="gh-monoui-logo-text">MonoUI Kit</span>
          </div>

          <button
            type="button"
            className="gh-monoui-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <i className="gh-icon gh-icon-x gh-size-20" aria-hidden="true" />
            ) : (
              <i className="gh-icon gh-icon-menu gh-size-20" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Nested Page Route */}
        <main className="gh-monoui-main-viewport">
          <Outlet context={{ activeComponent, setActiveComponent: handleSelectComponent }} />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
