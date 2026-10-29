import React, { useState } from 'react';
import Alert from '../components/Alert';
import Message from '../components/Message';
import '../styles/alert.scss';

/**
 * MonoUI Kit - Alert & Message Design System Specification Page
 * Faithfully matches the exact Figma design specification from the provided screenshot.
 * SCSS is split into separate files by concern under src/styles/alert/:
 *   - alert/_base.scss
 *   - alert/_variants.scss
 *   - alert/_banner.scss
 *   - alert/_message.scss
 *   - alert/_matrix.scss
 * All classes use the "gh-" prefix.
 */
const AlertPage = () => {
  // Navigation Tabs: 'preview' | 'html' | 'scss' | 'api'
  const [activeTab, setActiveTab] = useState('preview');

  // Active subtab for SCSS modules
  const [scssModule, setScssModule] = useState('all');

  // Copy status indicators
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedScss, setCopiedScss] = useState(false);

  // Dismissal states for interactive alerts
  const [dismissedItems, setDismissedItems] = useState({});

  // Live floating toast stack
  const [liveToasts, setLiveToasts] = useState([]);

  // Trigger live toast
  const triggerToast = (type, text = 'This is a message') => {
    const id = Date.now() + Math.random();
    const newToast = { id, type, text };
    setLiveToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setLiveToasts((prev) => prev.filter((item) => item.id !== id));
    }, 3000);
  };

  // Handle dismiss
  const handleDismiss = (key) => {
    setDismissedItems((prev) => ({ ...prev, [key]: true }));
  };

  // Restore all dismissed alerts
  const handleRestoreAlerts = () => {
    setDismissedItems({});
  };

  // Clean raw HTML markup string for copying
  const htmlMarkupCode = `<!-- ======================================================== -->
<!-- MonoUI Kit - Alert & Message Component HTML Specification -->
<!-- ======================================================== -->

<!-- 1. Basic Alerts (No Icons) -->
<div class="gh-alert gh-alert-success">
  <span class="gh-alert-text">Success Text</span>
</div>
<div class="gh-alert gh-alert-info">
  <span class="gh-alert-text">Info Text</span>
</div>
<div class="gh-alert gh-alert-warning">
  <span class="gh-alert-text">Warning Text</span>
</div>
<div class="gh-alert gh-alert-error">
  <span class="gh-alert-text">Error Text</span>
</div>

<!-- 2. Compact Alerts with Status Icons -->
<div class="gh-alert gh-alert-success">
  <span class="gh-alert-icon-left">
    <svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#52c41a"/><path d="M4.5 8.2L6.8 10.5L11.5 5.8" stroke="#fff" stroke-width="1.8"/></svg>
  </span>
  <span class="gh-alert-text">Success Tips</span>
</div>

<div class="gh-alert gh-alert-warning">
  <span class="gh-alert-icon-left">
    <svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#faad14"/><path d="M8 4.8v4.2M8 11.2h.01" stroke="#fff" stroke-width="1.8"/></svg>
  </span>
  <span class="gh-alert-text">Warning</span>
  <button type="button" class="gh-alert-close-btn" aria-label="Close">
    <svg viewBox="0 0 12 12"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" stroke-width="1.5"/></svg>
  </button>
</div>

<!-- 3. Detailed Alerts with Title & Description -->
<div class="gh-alert gh-alert-warning gh-alert-with-description">
  <div class="gh-alert-header-row">
    <span class="gh-alert-title">Warning Text</span>
    <button type="button" class="gh-alert-close-btn" aria-label="Close">✕</button>
  </div>
  <p class="gh-alert-description">Warning Text Warning Text Warning Text Warning Text</p>
</div>

<!-- 4. Large Icon Alert Cards -->
<div class="gh-alert gh-alert-success gh-alert-large-card">
  <span class="gh-alert-large-icon-wrapper">
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#52c41a" stroke-width="2"/><path d="M7.5 12.5l3 3 6-6.5" stroke="#52c41a" stroke-width="2"/></svg>
  </span>
  <div class="gh-alert-card-body">
    <div class="gh-alert-card-title">Success Tips</div>
    <p class="gh-alert-card-desc">Detailed description and advice about successful copywriting.</p>
  </div>
</div>

<!-- 5. Floating Message / Toast Pills -->
<div class="gh-message-pill">
  <span class="gh-message-icon gh-msg-info">
    <svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#1890ff"/><path d="M8 7v4M8 5h.01" stroke="#fff" stroke-width="1.8"/></svg>
  </span>
  <span class="gh-message-text">This is a message</span>
</div>`;

  // SCSS snippets mapped by module
  const scssSnippets = {
    all: `/* ==========================================================================
   MonoUI Kit - Alert & Message Design System Main SCSS Entry
   Each concern is split into separate modular SCSS files:
     - alert/_base.scss     (Base container, typography, close action, flex layout)
     - alert/_variants.scss (Semantic status colors: Success, Info, Warning, Error)
     - alert/_banner.scss   (Detailed title + description, large icon cards)
     - alert/_message.scss  (Toast pills with elevation shadows, loading spinner)
     - alert/_matrix.scss   (Figma showcase layout, 2-column frame, responsiveness)
   All classes use the "gh-" prefix.
   ========================================================================== */

@use 'alert/base';
@use 'alert/variants';
@use 'alert/banner';
@use 'alert/message';
@use 'alert/matrix';`,

    base: `/* ==========================================================================
   alert/_base.scss
   ========================================================================== */
.gh-alert {
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 16px;
  font-size: 14px;
  line-height: 1.5714;
  border-radius: 4px;
  border: 1px solid transparent;
  word-break: break-word;
  transition: all 0.25s cubic-bezier(0.2, 0, 0, 1);

  .gh-alert-text {
    flex: 1;
    font-size: 14px;
    font-weight: 400;
    color: #1f1f1f;
  }

  .gh-alert-icon-left {
    display: inline-flex;
    margin-right: 8px;
    flex-shrink: 0;
    svg { width: 16px; height: 16px; display: block; }
  }

  .gh-alert-close-btn {
    background: transparent;
    border: none;
    margin-left: 12px;
    color: rgba(0, 0, 0, 0.45);
    cursor: pointer;
    &:hover { color: rgba(0, 0, 0, 0.85); transform: scale(1.1); }
    svg { width: 12px; height: 12px; display: block; }
  }
}`,

    variants: `/* ==========================================================================
   alert/_variants.scss
   ========================================================================== */
.gh-alert-success {
  background-color: #f6ffed;
  border-color: #b7eb8f;
  .gh-alert-icon-left svg,
  .gh-alert-large-icon-wrapper svg { color: #52c41a; fill: currentColor; }
}

.gh-alert-info {
  background-color: #e6f7ff;
  border-color: #91d5ff;
  .gh-alert-icon-left svg,
  .gh-alert-large-icon-wrapper svg { color: #1890ff; fill: currentColor; }
}

.gh-alert-warning {
  background-color: #fffbe6;
  border-color: #ffe58f;
  .gh-alert-icon-left svg,
  .gh-alert-large-icon-wrapper svg { color: #faad14; fill: currentColor; }
}

.gh-alert-error {
  background-color: #fff1f0;
  border-color: #ffccc7;
  .gh-alert-icon-left svg,
  .gh-alert-large-icon-wrapper svg { color: #ff4d4f; fill: currentColor; }
}`,

    banner: `/* ==========================================================================
   alert/_banner.scss
   ========================================================================== */
.gh-alert-with-description {
  flex-direction: column;
  align-items: stretch;
  padding: 14px 18px 16px 18px;

  .gh-alert-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
    width: 100%;

    .gh-alert-title {
      font-size: 14px;
      font-weight: 600;
      color: #1f1f1f;
    }
  }

  .gh-alert-description {
    font-size: 13px;
    color: #4b5563;
    line-height: 1.55;
  }
}

.gh-alert-large-card {
  display: flex;
  align-items: flex-start;
  padding: 16px 20px;
  border-radius: 4px;
  border: 1px solid transparent;

  .gh-alert-large-icon-wrapper {
    width: 26px;
    height: 26px;
    margin-right: 14px;
    margin-top: 1px;
    flex-shrink: 0;
    svg { width: 26px; height: 26px; }
  }

  .gh-alert-card-body {
    flex: 1;
    .gh-alert-card-title {
      font-size: 14.5px;
      font-weight: 600;
      color: #1f1f1f;
      margin-bottom: 4px;
    }
    .gh-alert-card-desc {
      font-size: 13px;
      color: #4b5563;
      line-height: 1.5;
    }
  }
}`,

    message: `/* ==========================================================================
   alert/_message.scss
   ========================================================================== */
.gh-message-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04);
  color: #262626;
  font-size: 13.5px;
  font-weight: 500;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    transform: translateY(-1px);
  }

  .gh-message-icon {
    display: inline-flex;
    svg { width: 16px; height: 16px; }
    &.gh-msg-info svg { color: #1890ff; fill: currentColor; }
    &.gh-msg-warning svg { color: #faad14; fill: currentColor; }
    &.gh-msg-success svg { color: #52c41a; fill: currentColor; }
    &.gh-msg-error svg { color: #ff4d4f; fill: currentColor; }
    &.gh-msg-loading svg {
      color: #1890ff;
      animation: gh-spin 1s linear infinite;
    }
  }
}

@keyframes gh-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`
  };

  const handleCopyHtml = () => {
    navigator.clipboard?.writeText(htmlMarkupCode);
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2000);
  };

  const handleCopyScss = () => {
    const textToCopy = scssSnippets[scssModule] || scssSnippets.all;
    navigator.clipboard?.writeText(textToCopy);
    setCopiedScss(true);
    setTimeout(() => setCopiedScss(false), 2000);
  };

  return (
    <div className="gh-alert-spec-page">
      {/* Floating Live Toast Portal */}
      {liveToasts.length > 0 && (
        <div className="gh-floating-toast-container">
          {liveToasts.map((toast) => (
            <div key={toast.id} className="gh-floating-toast-item">
              <Message type={toast.type}>{toast.text}</Message>
            </div>
          ))}
        </div>
      )}

      {/* 1. Header Breadcrumbs */}
      <div className="gh-page-breadcrumbs">
        FEEDBACK &bull; DESIGN SYSTEM V1.0
      </div>

      {/* 2. Main Title & Description */}
      <h1 className="gh-page-title">Alert &amp; Message</h1>
      <p className="gh-page-description">
        Alert components provide prominent feedback messages for typical user actions, system notifications, warnings, and confirmations. Featuring compact single-line banners, icon status badges, detailed multi-line cards with descriptions, and elevated floating message pills.
      </p>

      {/* 3. Navigation Tabs */}
      <div className="gh-tabs-header">
        <button
          type="button"
          className={`gh-tab-btn ${activeTab === 'preview' ? 'gh-active' : ''}`}
          onClick={() => setActiveTab('preview')}
        >
          Design Matrix Preview
        </button>
        <button
          type="button"
          className={`gh-tab-btn ${activeTab === 'html' ? 'gh-active' : ''}`}
          onClick={() => setActiveTab('html')}
        >
          HTML Code
        </button>
        <button
          type="button"
          className={`gh-tab-btn ${activeTab === 'scss' ? 'gh-active' : ''}`}
          onClick={() => setActiveTab('scss')}
        >
          Modular SCSS
        </button>
        <button
          type="button"
          className={`gh-tab-btn ${activeTab === 'api' ? 'gh-active' : ''}`}
          onClick={() => setActiveTab('api')}
        >
          Component API
        </button>
      </div>

      {/* 4. Tab 1: Design Matrix Showcase (Exact replication of Figma Screenshot) */}
      {activeTab === 'preview' && (
        <div className="gh-alert-matrix-card">
          <div className="gh-card-section-header">
            <div>
              <div className="gh-card-section-title">Design Specification Matrix</div>
              <div className="gh-card-section-subtitle">
                Exact reproduction of the MonoUI Alert and Message design system specification.
              </div>
            </div>

            <div className="gh-card-actions">
              <button
                type="button"
                className="gh-action-btn"
                onClick={handleRestoreAlerts}
                title="Restore all dismissed alerts"
              >
                Restore Alerts
              </button>
              <button
                type="button"
                className="gh-action-btn gh-primary-action"
                onClick={() => triggerToast('info', 'Live test feedback message triggered!')}
                title="Trigger a live floating notification"
              >
                Test Toast
              </button>
            </div>
          </div>

          {/* Outer Figma Mockup Frame Canvas */}
          <div className="gh-figma-mockup-wrapper">
            <div className="gh-figma-canvas">

              {/* ==============================================================
                  LEFT COLUMN
                  1. Basic Alerts (Top Left)
                  2. Detailed Description Alerts (Middle & Bottom Left)
                  ============================================================== */}
              <div className="gh-canvas-column">

                {/* 1. Basic Single-Line Alerts */}
                <div className="gh-alert-stack">
                  {!dismissedItems['basic-success'] && (
                    <Alert
                      type="success"
                      message="Success Text"
                    />
                  )}

                  {!dismissedItems['basic-info'] && (
                    <Alert
                      type="info"
                      message="Info Text"
                    />
                  )}

                  {!dismissedItems['basic-warning'] && (
                    <Alert
                      type="warning"
                      message="Warning Text"
                    />
                  )}

                  {!dismissedItems['basic-error'] && (
                    <Alert
                      type="error"
                      message="Error Text"
                    />
                  )}
                </div>

                {/* 2. Detailed Description Alerts (With Title, Description, and Close '✕') */}
                <div className="gh-alert-stack" style={{ marginTop: '12px' }}>
                  {!dismissedItems['desc-warn-1'] && (
                    <Alert
                      type="warning"
                      message="Warning Text"
                      description="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
                      closable={true}
                      onClose={() => handleDismiss('desc-warn-1')}
                    />
                  )}

                  {!dismissedItems['desc-err-1'] && (
                    <Alert
                      type="error"
                      message="Error Text"
                      description="Error Description Error Description Error Description Error Description Error Description Error Description"
                      closable={true}
                      onClose={() => handleDismiss('desc-err-1')}
                    />
                  )}

                  {!dismissedItems['desc-info-1'] && (
                    <Alert
                      type="info"
                      message="Info Text"
                      description="Info Description Info Description Info Description Info Description"
                      closable={true}
                      onClose={() => handleDismiss('desc-info-1')}
                    />
                  )}

                  {!dismissedItems['desc-warn-2'] && (
                    <Alert
                      type="warning"
                      message="Warning Text"
                      description="Warning Description Warning Description Warning Description Warning Description"
                      closable={true}
                      onClose={() => handleDismiss('desc-warn-2')}
                    />
                  )}

                  {!dismissedItems['desc-err-2'] && (
                    <Alert
                      type="error"
                      message="Error Text"
                      description="Error Description Error Description Error Description Error Description"
                      closable={false}
                    />
                  )}
                </div>

              </div>

              {/* ==============================================================
                  RIGHT COLUMN
                  1. Compact Icon Alerts (Top Right)
                  2. Large Icon Alert Cards (Middle Right)
                  3. Floating Message / Toast Pills (Bottom Right)
                  ============================================================== */}
              <div className="gh-canvas-column">

                {/* 1. Compact Alerts with Status Icons */}
                <div className="gh-alert-stack">
                  {!dismissedItems['icon-success'] && (
                    <Alert
                      type="success"
                      message="Success Tips"
                      showIcon={true}
                    />
                  )}

                  {!dismissedItems['icon-info'] && (
                    <Alert
                      type="info"
                      message="Informational Notes"
                      showIcon={true}
                    />
                  )}

                  {!dismissedItems['icon-warning'] && (
                    <Alert
                      type="warning"
                      message="Warning"
                      showIcon={true}
                      closable={true}
                      onClose={() => handleDismiss('icon-warning')}
                    />
                  )}

                  {!dismissedItems['icon-error'] && (
                    <Alert
                      type="error"
                      message="Error"
                      showIcon={true}
                    />
                  )}
                </div>

                {/* 2. Large Icon Alert Cards */}
                <div className="gh-alert-stack" style={{ marginTop: '12px' }}>
                  {!dismissedItems['large-card-success'] && (
                    <Alert
                      type="success"
                      message="Success Tips"
                      description="Detailed description and advice about successful copywriting."
                      iconSize="large"
                      showIcon={true}
                    />
                  )}

                  {!dismissedItems['large-card-info'] && (
                    <Alert
                      type="info"
                      message="Informational Notes"
                      description="Additional description and information about copywriting."
                      iconSize="large"
                      showIcon={true}
                    />
                  )}

                  {!dismissedItems['large-card-warning'] && (
                    <Alert
                      type="warning"
                      message="Warning"
                      description="This is a warning notice about copywriting."
                      iconSize="large"
                      showIcon={true}
                    />
                  )}

                  {!dismissedItems['large-card-error'] && (
                    <Alert
                      type="error"
                      message="Error"
                      description="This is a warning notice about copywriting."
                      iconSize="large"
                      showIcon={true}
                    />
                  )}
                </div>

                {/* 3. Floating Message / Toast Pills */}
                <div style={{ marginTop: '16px' }}>
                  <div className="gh-message-pills-matrix">
                    {/* Row 1: Info & Warning */}
                    <div
                      onClick={() => triggerToast('info', 'Informational message toast')}
                      style={{ cursor: 'pointer' }}
                      title="Click to trigger toast"
                    >
                      <Message type="info">This is a message</Message>
                    </div>

                    <div
                      onClick={() => triggerToast('warning', 'Warning message toast')}
                      style={{ cursor: 'pointer' }}
                      title="Click to trigger toast"
                    >
                      <Message type="warning">This is a message</Message>
                    </div>

                    {/* Row 2: Success & Error */}
                    <div
                      onClick={() => triggerToast('success', 'Operation completed successfully!')}
                      style={{ cursor: 'pointer' }}
                      title="Click to trigger toast"
                    >
                      <Message type="success">This is a message</Message>
                    </div>

                    <div
                      onClick={() => triggerToast('error', 'Operation failed, please retry.')}
                      style={{ cursor: 'pointer' }}
                      title="Click to trigger toast"
                    >
                      <Message type="error">This is a message</Message>
                    </div>

                    {/* Row 3: Loading */}
                    <div
                      onClick={() => triggerToast('loading', 'Loading data asynchronously...')}
                      style={{ cursor: 'pointer' }}
                      title="Click to trigger toast"
                    >
                      <Message type="loading">This is a message</Message>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

      {/* 5. Tab 2: HTML Code */}
      {activeTab === 'html' && (
        <div className="gh-alert-matrix-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: 0 }}>
                Standard HTML Markup
              </h2>
              <p style={{ fontSize: '13px', color: '#6b7280', margin: '4px 0 0 0' }}>
                Semantic HTML elements with gh- prefixed classes for all alert and message variations.
              </p>
            </div>
            <button
              type="button"
              className="gh-action-btn gh-primary-action"
              onClick={handleCopyHtml}
            >
              {copiedHtml ? 'Copied HTML!' : 'Copy HTML'}
            </button>
          </div>

          <div className="gh-code-snippet-box">
            <button type="button" className="gh-code-copy-btn" onClick={handleCopyHtml}>
              {copiedHtml ? 'Copied!' : 'Copy'}
            </button>
            <pre><code>{htmlMarkupCode}</code></pre>
          </div>
        </div>
      )}

      {/* 6. Tab 3: Modular SCSS (Separated like buttons & switch) */}
      {activeTab === 'scss' && (
        <div className="gh-alert-matrix-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: 0 }}>
                Modular SCSS Style Sheets
              </h2>
              <p style={{ fontSize: '13px', color: '#6b7280', margin: '4px 0 0 0' }}>
                Each concern is split into dedicated files under <code>src/styles/alert/</code> and imported into <code>src/styles/alert.scss</code>.
              </p>
            </div>
            <button
              type="button"
              className="gh-action-btn gh-primary-action"
              onClick={handleCopyScss}
            >
              {copiedScss ? 'Copied SCSS!' : 'Copy SCSS'}
            </button>
          </div>

          {/* Module Selector Sub-tabs */}
          <div className="gh-scss-subtabs">
            <button
              type="button"
              className={`gh-subtab-btn ${scssModule === 'all' ? 'gh-active' : ''}`}
              onClick={() => setScssModule('all')}
            >
              alert.scss (Main Entry)
            </button>
            <button
              type="button"
              className={`gh-subtab-btn ${scssModule === 'base' ? 'gh-active' : ''}`}
              onClick={() => setScssModule('base')}
            >
              alert/_base.scss
            </button>
            <button
              type="button"
              className={`gh-subtab-btn ${scssModule === 'variants' ? 'gh-active' : ''}`}
              onClick={() => setScssModule('variants')}
            >
              alert/_variants.scss
            </button>
            <button
              type="button"
              className={`gh-subtab-btn ${scssModule === 'banner' ? 'gh-active' : ''}`}
              onClick={() => setScssModule('banner')}
            >
              alert/_banner.scss
            </button>
            <button
              type="button"
              className={`gh-subtab-btn ${scssModule === 'message' ? 'gh-active' : ''}`}
              onClick={() => setScssModule('message')}
            >
              alert/_message.scss
            </button>
          </div>

          <div className="gh-code-snippet-box">
            <button type="button" className="gh-code-copy-btn" onClick={handleCopyScss}>
              {copiedScss ? 'Copied!' : 'Copy'}
            </button>
            <pre><code>{scssSnippets[scssModule] || scssSnippets.all}</code></pre>
          </div>
        </div>
      )}

      {/* 7. Tab 4: Component API Reference */}
      {activeTab === 'api' && (
        <div className="gh-alert-matrix-card" style={{ padding: '24px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: '0 0 4px 0' }}>
            Alert Component API
          </h2>
          <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 16px 0' }}>
            Props and configurations supported by the <code>&lt;Alert /&gt;</code> and <code>&lt;Message /&gt;</code> components.
          </p>

          <div className="gh-specs-table-wrapper">
            <table className="gh-specs-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>type</code></td>
                  <td><code>'success' | 'info' | 'warning' | 'error'</code></td>
                  <td><code>'info'</code></td>
                  <td>Specifies the semantic status tone and color palette of the alert.</td>
                </tr>
                <tr>
                  <td><code>message</code></td>
                  <td><code>string | ReactNode</code></td>
                  <td><code>-</code></td>
                  <td>Primary text or title of the alert banner.</td>
                </tr>
                <tr>
                  <td><code>description</code></td>
                  <td><code>string | ReactNode</code></td>
                  <td><code>undefined</code></td>
                  <td>Optional auxiliary explanation or detailed description text.</td>
                </tr>
                <tr>
                  <td><code>showIcon</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>Whether to render the corresponding semantic status icon on the left.</td>
                </tr>
                <tr>
                  <td><code>iconSize</code></td>
                  <td><code>'normal' | 'large'</code></td>
                  <td><code>'normal'</code></td>
                  <td>Standard compact icon or prominent 26px circle icon card.</td>
                </tr>
                <tr>
                  <td><code>closable</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>Renders an interactive close cross icon on the right edge.</td>
                </tr>
                <tr>
                  <td><code>onClose</code></td>
                  <td><code>(event) =&gt; void</code></td>
                  <td><code>-</code></td>
                  <td>Callback triggered when the dismiss close button is clicked.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: '32px 0 4px 0' }}>
            Message Component API
          </h2>
          <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 16px 0' }}>
            Floating notification toast pill properties.
          </p>

          <div className="gh-specs-table-wrapper">
            <table className="gh-specs-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>type</code></td>
                  <td><code>'info' | 'warning' | 'success' | 'error' | 'loading'</code></td>
                  <td><code>'info'</code></td>
                  <td>Status indicator icon type, including animated spinning loader.</td>
                </tr>
                <tr>
                  <td><code>children</code></td>
                  <td><code>ReactNode</code></td>
                  <td><code>'This is a message'</code></td>
                  <td>Text content displayed inside the floating message pill.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};

export default AlertPage;
