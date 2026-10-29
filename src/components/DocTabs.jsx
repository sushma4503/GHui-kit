import React, { useState } from 'react';

/**
 * Universal Documentation Tabs Component
 * Standardizes:
 *   1. Preview Tab (Interactive Matrix / Showcase)
 *   2. HTML Code Tab (Formatted markup with copy button)
 *   3. Modular SCSS Tab (Modular SCSS subtabs with copy button)
 *   4. Component API Tab (Specifications / Props table)
 */
const DocTabs = ({
  activeTab: controlledTab,
  onTabChange,
  previewTabLabel = 'Design Matrix Preview',
  previewContent,
  htmlCode = '',
  scssSnippets = {},
  apiContent = null,
}) => {
  const [internalTab, setInternalTab] = useState('preview');
  const activeTab = controlledTab !== undefined ? controlledTab : internalTab;
  const setActiveTab = onTabChange || setInternalTab;

  // SCSS subtabs
  const scssKeys = Object.keys(scssSnippets);
  const [scssModule, setScssModule] = useState(scssKeys[0] || 'all');

  // Copy indicators
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedScss, setCopiedScss] = useState(false);

  const handleCopyHtml = () => {
    if (!htmlCode) return;
    navigator.clipboard?.writeText(htmlCode);
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2000);
  };

  const handleCopyScss = () => {
    const textToCopy = scssSnippets[scssModule] || scssSnippets[scssKeys[0]] || '';
    if (!textToCopy) return;
    navigator.clipboard?.writeText(textToCopy);
    setCopiedScss(true);
    setTimeout(() => setCopiedScss(false), 2000);
  };

  return (
    <div className="gh-doc-tabs-system">
      {/* 1. Universal Tabs Navigation Header */}
      <div className="gh-tabs-header">
        <button
          type="button"
          className={`gh-tab-btn ${activeTab === 'preview' ? 'gh-active' : ''}`}
          onClick={() => setActiveTab('preview')}
        >
          {previewTabLabel}
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

      {/* 2. Interactive Preview */}
      {activeTab === 'preview' && previewContent}

      {/* 3. HTML Code */}
      {activeTab === 'html' && (
        <div className="gh-doc-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: 0 }}>
                Standard HTML Markup
              </h2>
              <p style={{ fontSize: '13px', color: '#6b7280', margin: '4px 0 0 0' }}>
                Semantic HTML elements with <code>gh-</code> prefixed classes.
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
            <pre><code>{htmlCode}</code></pre>
          </div>
        </div>
      )}

      {/* 4. Modular SCSS */}
      {activeTab === 'scss' && (
        <div className="gh-doc-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: 0 }}>
                Modular SCSS Style Sheets
              </h2>
              <p style={{ fontSize: '13px', color: '#6b7280', margin: '4px 0 0 0' }}>
                Styles are organized into separate files by concern for high maintainability.
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
          {scssKeys.length > 1 && (
            <div className="gh-scss-subtabs">
              {scssKeys.map((key) => (
                <button
                  key={key}
                  type="button"
                  className={`gh-subtab-btn ${scssModule === key ? 'gh-active' : ''}`}
                  onClick={() => setScssModule(key)}
                >
                  {key}
                </button>
              ))}
            </div>
          )}

          <div className="gh-code-snippet-box">
            <button type="button" className="gh-code-copy-btn" onClick={handleCopyScss}>
              {copiedScss ? 'Copied!' : 'Copy'}
            </button>
            <pre><code>{scssSnippets[scssModule] || scssSnippets[scssKeys[0]] || ''}</code></pre>
          </div>
        </div>
      )}

      {/* 5. Component API */}
      {activeTab === 'api' && (
        <div className="gh-doc-card">
          {apiContent}
        </div>
      )}
    </div>
  );
};

export default DocTabs;
