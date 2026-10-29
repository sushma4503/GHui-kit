import React, { useState } from 'react';
import DocTabs from '../components/DocTabs';
import '../styles/spacing.scss';

const htmlSpaceCode = `<!-- 1. Inline Space Gap Utilities -->
<div class="gh-space-row gh-gap-8">
  <button type="button" class="gh-btn gh-btn-small">Button 1</button>
  <button type="button" class="gh-btn gh-btn-small">Button 2</button>
</div>

<!-- 2. Standard 16px Component Container Padding -->
<div class="gh-card gh-p-16">
  <h3 class="gh-m-0">Card Header</h3>
  <p class="gh-mt-8">Card content using $space-8 vertical rhythm.</p>
</div>

<!-- 3. Section Margins ($space-32 / 2rem) -->
<section class="gh-section gh-mb-32">
  <div class="gh-flex gh-gap-16">
    <div class="gh-col">Column A</div>
    <div class="gh-col">Column B</div>
  </div>
</section>`;

const scssSpaceSnippets = {
  'spacing.scss': `/* ==========================================================================
   MonoUI Kit - Spacing System Design Tokens (8-Point Base System)
   ========================================================================== */

/* 8-Point Spacing Tokens */
$space-0: 0;
$space-2: 0.125rem; // 2px
$space-4: 0.25rem;  // 4px
$space-8: 0.5rem;   // 8px
$space-12: 0.75rem; // 12px
$space-16: 1rem;    // 16px (Base standard)
$space-20: 1.25rem; // 20px
$space-24: 1.5rem;  // 24px
$space-32: 2rem;    // 32px
$space-40: 2.5rem;  // 40px
$space-48: 3rem;    // 48px
$space-64: 4rem;    // 64px

/* CSS Custom Properties */
:root {
  --space-0: #{$space-0};
  --space-2: #{$space-2};
  --space-4: #{$space-4};
  --space-8: #{$space-8};
  --space-12: #{$space-12};
  --space-16: #{$space-16};
  --space-20: #{$space-20};
  --space-24: #{$space-24};
  --space-32: #{$space-32};
  --space-40: #{$space-40};
  --space-48: #{$space-48};
  --space-64: #{$space-64};
}`,

  '_utilities.scss': `/* Spacing Utility Classes */
.gh-gap-8  { gap: var(--space-8); }
.gh-gap-12 { gap: var(--space-12); }
.gh-gap-16 { gap: var(--space-16); }
.gh-gap-24 { gap: var(--space-24); }

.gh-p-8  { padding: var(--space-8); }
.gh-p-16 { padding: var(--space-16); }
.gh-p-24 { padding: var(--space-24); }

.gh-m-0  { margin: 0; }
.gh-mt-8 { margin-top: var(--space-8); }
.gh-mb-16 { margin-bottom: var(--space-16); }
.gh-mb-32 { margin-bottom: var(--space-32); }`
};

/**
 * MonoUI Kit - Spacing Design System Specification Page
 */
const Space = () => {
  // Active selected spacing value for interactive preview
  const [selectedSpacing, setSelectedSpacing] = useState(16);

  // Spacing scale tokens defined in the design spec
  const spacingTokens = [
    { value: 0, label: '0px', barWidth: 0, isNone: true, rem: '0', token: '$space-0', usage: 'Reset padding & margin' },
    { value: 2, label: '2px', barWidth: 6, rem: '0.125rem', token: '$space-2', usage: 'Micro offsets, borders & dividers' },
    { value: 4, label: '4px', barWidth: 12, rem: '0.25rem', token: '$space-4', usage: 'Tight gap, badges & pill chips' },
    { value: 8, label: '8px', barWidth: 24, rem: '0.5rem', token: '$space-8', usage: 'Icon-text spacing, compact button gap' },
    { value: 12, label: '12px', barWidth: 36, rem: '0.75rem', token: '$space-12', usage: 'Form inputs & medium card padding' },
    { value: 16, label: '16px', barWidth: 48, rem: '1rem', token: '$space-16', usage: 'Standard component padding & grid gutter' },
    { value: 20, label: '20px', barWidth: 60, rem: '1.25rem', token: '$space-20', usage: 'Header padding & card inner spacing' },
    { value: 24, label: '24px', barWidth: 72, rem: '1.5rem', token: '$space-24', usage: 'Section gutters & column spacing' },
    { value: 32, label: '32px', barWidth: 96, rem: '2rem', token: '$space-32', usage: 'Large cards, major block separation' },
    { value: 40, label: '40px', barWidth: 120, rem: '2.5rem', token: '$space-40', usage: 'Hero section vertical rhythm' },
    { value: 48, label: '48px', barWidth: 144, rem: '3rem', token: '$space-48', usage: 'Page section spacing' },
    { value: 64, label: '64px', barWidth: 192, rem: '4rem', token: '$space-64', usage: 'Top-level layout & footer margins' },
  ];

  const spaceApiContent = (
    <div>
      <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: '0 0 4px 0' }}>
        Tokens Specification Reference
      </h2>
      <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 16px 0' }}>
        The 8-point spatial system scales in linear and geometric increments.
      </p>

      <div className="gh-specs-table-wrapper">
        <table className="gh-specs-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Pixel</th>
              <th>REM Value</th>
              <th>Relative Scale</th>
              <th>Common Usage</th>
            </tr>
          </thead>
          <tbody>
            {spacingTokens.map((item) => (
              <tr key={item.label}>
                <td><code>{item.token}</code></td>
                <td><strong>{item.label}</strong></td>
                <td>{item.rem}</td>
                <td>
                  {item.isNone ? (
                    <span style={{ color: '#9ca3af', fontStyle: 'italic' }}>0x</span>
                  ) : (
                    <span>{item.value / 8}x base</span>
                  )}
                </td>
                <td>{item.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="gh-spacing-spec-page">
      {/* Breadcrumb Header */}
      <div className="gh-spec-header-breadcrumbs">
        LAYOUT &bull; DESIGN SYSTEM V1.0
      </div>

      {/* Main Title */}
      <h1 className="gh-spacing-main-title">Spacing</h1>

      {/* Unified Documentation Tabs System */}
      <DocTabs
        previewTabLabel="Design Matrix Preview"
        htmlCode={htmlSpaceCode}
        scssSnippets={scssSpaceSnippets}
        apiContent={spaceApiContent}
        previewContent={
          <>
            {/* ====================================================================
                1. Core 2-Column Spacing Scale Layout (Exact Match to Mockup)
                ==================================================================== */}
            <div className="gh-spacing-hero-layout">
        {/* Left Column: Description */}
        <div className="gh-spacing-description-col">
          <p className="gh-spacing-lead-text">
            Our 8-point spatial system defines spacing layout, margins, and padding. It ensures consistent visual rhythm and hierarchy.
          </p>
          <div className="gh-spacing-spec-highlight">
            <span>Grid Base: 8px Multiples</span>
          </div>
        </div>

        {/* Right Column: Spacing Scale Bars */}
        <div className="gh-spacing-scale-col">
          {spacingTokens.map((item) => (
            <div
              key={item.label}
              className={`gh-spacing-scale-row ${selectedSpacing === item.value ? 'gh-active-row' : ''}`}
              onClick={() => setSelectedSpacing(item.value)}
              title={`Click to preview ${item.label} (${item.token})`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedSpacing(item.value);
                }
              }}
            >
              {/* Spacing Label (e.g. 0px, 2px, 4px...) */}
              <span className="gh-spacing-label">{item.label}</span>

              {/* Bar or None indicator */}
              <div className="gh-spacing-bar-container">
                {item.isNone ? (
                  <span className="gh-spacing-none-text">None</span>
                ) : (
                  <div
                    className="gh-spacing-bar"
                    style={{ width: `${item.barWidth}px` }}
                    aria-label={`Spacing bar ${item.label}`}
                  />
                )}
              </div>

              {/* Token metadata badge visible on hover */}
              <span className="gh-spacing-meta-badge">
                {item.token} &bull; {item.rem}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ====================================================================
          2. Interactive Spatial System Demonstration
          ==================================================================== */}
      <div className="gh-spacing-demo-card">
        <h2 className="gh-demo-card-title">Interactive Spacing Playground</h2>
        <p className="gh-demo-card-subtitle">
          Select any spacing token below to see how it shapes container padding and visual breathing room in real time.
        </p>

        <div className="gh-demo-interactive-stage">
          <div className="gh-demo-canvas">
            <div
              className="gh-demo-preview-box"
              style={{ padding: `${selectedSpacing}px` }}
            >
              <div className="gh-preview-inner-chip">
                <span>Padding: {selectedSpacing}px</span>
              </div>
            </div>
          </div>

          <div className="gh-demo-controls-bar">
            {spacingTokens.map((item) => (
              <button
                type="button"
                key={item.label}
                className={`gh-control-pill ${selectedSpacing === item.value ? 'gh-active' : ''}`}
                onClick={() => setSelectedSpacing(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
          </>
        }
      />
    </div>
  );
};

export default Space;
