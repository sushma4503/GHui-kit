import React, { useState } from 'react';
import Switch from '../components/Switch';
import DocTabs from '../components/DocTabs';
import '../styles/switch.scss';

const htmlSwitchCode = `<!-- 1. Standard Switch (Active & Default) -->
<button type="button" role="switch" aria-checked="true" class="gh-switch gh-switch-large gh-switch-checked">
  <span class="gh-switch-handle"></span>
</button>

<button type="button" role="switch" aria-checked="false" class="gh-switch gh-switch-large gh-switch-unchecked">
  <span class="gh-switch-handle"></span>
</button>

<!-- 2. Small Size (28px) -->
<button type="button" role="switch" aria-checked="true" class="gh-switch gh-switch-small gh-switch-checked">
  <span class="gh-switch-handle"></span>
</button>

<!-- 3. Disabled Switch -->
<button type="button" role="switch" aria-checked="true" disabled class="gh-switch gh-switch-large gh-switch-checked gh-switch-disabled">
  <span class="gh-switch-handle"></span>
</button>

<!-- 4. Loading Switch -->
<button type="button" role="switch" aria-checked="true" class="gh-switch gh-switch-large gh-switch-checked gh-switch-loading">
  <span class="gh-switch-handle">
    <span class="gh-switch-loading-icon" aria-hidden="true"></span>
  </span>
</button>`;

const scssSwitchSnippets = {
  'switch.scss': `/* ==========================================================================
   MonoUI Kit - Switch Design System Main SCSS Entry
   Each switch concern has its own separate SCSS file in src/styles/switch/:
     - switch/_base.scss     (Base toggle switch reset, layout, and structure)
     - switch/_sizes.scss    (Large 44px and Small 28px size modifiers)
     - switch/_states.scss   (Active amber, Unchecked grey, and Disabled states)
     - switch/_matrix.scss   (Showcase matrix layout, playground, and anatomy)
   ========================================================================== */
@use 'switch/base';
@use 'switch/sizes';
@use 'switch/states';
@use 'switch/matrix';`,

  'switch/_base.scss': `.gh-switch {
  position: relative;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
  border: 0;
  border-radius: 9999px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.25s cubic-bezier(0.2, 0, 0, 1),
              box-shadow 0.25s cubic-bezier(0.2, 0, 0, 1);

  .gh-switch-handle {
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    transition: left 0.25s cubic-bezier(0.2, 0, 0, 1);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(250, 140, 22, 0.35);
  }
}`,

  'switch/_sizes.scss': `.gh-switch-large {
  width: 44px;
  height: 24px;
  .gh-switch-handle { width: 20px; height: 20px; }
  &.gh-switch-checked .gh-switch-handle { left: calc(100% - 22px); }
}

.gh-switch-small {
  width: 28px;
  height: 16px;
  .gh-switch-handle { width: 12px; height: 12px; }
  &.gh-switch-checked .gh-switch-handle { left: calc(100% - 14px); }
}`,

  'switch/_states.scss': `.gh-switch-checked {
  background-color: #fa8c16;
}

.gh-switch-unchecked {
  background-color: #9ca3af;
}

.gh-switch-disabled {
  cursor: not-allowed;
  opacity: 0.6;
  background-color: #e5e7eb !important;
  .gh-switch-handle { background-color: #8c8c8c; }
}`
};

const switchApiContent = (
  <div>
    <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: '0 0 4px 0' }}>
      Switch Component API &amp; Props
    </h2>
    <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 16px 0' }}>
      Reference guide for integrating the reusable Switch component.
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
            <td><code>checked</code></td>
            <td><code>boolean</code></td>
            <td><code>undefined</code></td>
            <td>Controlled checked state of the switch.</td>
          </tr>
          <tr>
            <td><code>defaultChecked</code></td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
            <td>Initial checked state for uncontrolled usage.</td>
          </tr>
          <tr>
            <td><code>onChange</code></td>
            <td><code>(checked, event) =&gt; void</code></td>
            <td><code>-</code></td>
            <td>Callback triggered when toggle state changes.</td>
          </tr>
          <tr>
            <td><code>disabled</code></td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
            <td>Disables user interaction and applies muted styling.</td>
          </tr>
          <tr>
            <td><code>size</code></td>
            <td><code>'large' | 'small'</code></td>
            <td><code>'large'</code></td>
            <td>Specifies size variation (Large 44px or Small 28px).</td>
          </tr>
          <tr>
            <td><code>loading</code></td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
            <td>Displays an animated loading spinner within the knob.</td>
          </tr>
          <tr>
            <td><code>checkedChildren</code></td>
            <td><code>ReactNode</code></td>
            <td><code>null</code></td>
            <td>Content displayed inside the track when checked.</td>
          </tr>
          <tr>
            <td><code>unCheckedChildren</code></td>
            <td><code>ReactNode</code></td>
            <td><code>null</code></td>
            <td>Content displayed inside the track when unchecked.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: '32px 0 4px 0' }}>
      Anatomy &amp; Token Specifications
    </h2>
    <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 16px 0' }}>
      Figma design token mappings and measurements.
    </p>

    <div className="gh-specs-table-wrapper">
      <table className="gh-specs-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Token / Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Large Track Dimension</td>
            <td><code>44px &times; 24px</code></td>
            <td>Standard default height and width bounds</td>
          </tr>
          <tr>
            <td>Large Knob Diameter</td>
            <td><code>20px &times; 20px</code></td>
            <td>Circular sliding thumb with 2px inner padding</td>
          </tr>
          <tr>
            <td>Small Track Dimension</td>
            <td><code>28px &times; 16px</code></td>
            <td>Compact height and width bounds for dense tables</td>
          </tr>
          <tr>
            <td>Small Knob Diameter</td>
            <td><code>12px &times; 12px</code></td>
            <td>Circular sliding thumb with 2px inner padding</td>
          </tr>
          <tr>
            <td>Active Accent Color</td>
            <td><code>#fa8c16</code></td>
            <td>Brand Amber orange background when checked</td>
          </tr>
          <tr>
            <td>Default Track Color</td>
            <td><code>#9ca3af</code></td>
            <td>Neutral slate grey background when unchecked</td>
          </tr>
          <tr>
            <td>Disabled Track Color</td>
            <td><code>#e5e7eb</code></td>
            <td>Soft muted grey track with not-allowed cursor</td>
          </tr>
          <tr>
            <td>Disabled Knob Color</td>
            <td><code>#8c8c8c</code></td>
            <td>Low-contrast slate grey handle for inactive control</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

/**
 * Switch Design System Specification Page
 */
const SwitchPage = () => {
  // Playground state
  const [playgroundLarge, setPlaygroundLarge] = useState(true);
  const [playgroundSmall, setPlaygroundSmall] = useState(true);
  const [playgroundDisabled, setPlaygroundDisabled] = useState(false);
  const [playgroundLoading, setPlaygroundLoading] = useState(false);
  const [playgroundWithIcons, setPlaygroundWithIcons] = useState(false);
  const [playgroundWithText, setPlaygroundWithText] = useState(false);

  // Settings list state
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  return (
    <div className="gh-switch-page">
      {/* Breadcrumb Header */}
      <div className="gh-page-breadcrumbs">
        DATA ENTRY &bull; DESIGN SYSTEM V1.0
      </div>

      {/* Main Title & Description */}
      <h1 className="gh-page-title">Switch</h1>
      <p className="gh-page-description">
        Switching Selector component for toggling between two opposing states (active/checked and inactive/unchecked). Featuring two proportional sizes (Large 44px and Small 28px), distinct disabled and loading states, fluid spring physics micro-animations, and full WCAG keyboard accessibility.
      </p>

      {/* Unified Documentation Tabs System */}
      <DocTabs
        previewTabLabel="Design Matrix Preview"
        htmlCode={htmlSwitchCode}
        scssSnippets={scssSwitchSnippets}
        apiContent={switchApiContent}
        previewContent={
          <>
            {/* ==================================================================
                1. FIGMA SPECIFICATION MATRIX SHOWCASE (Matches Design Screenshot)
                ================================================================== */}
            <div className="gh-switch-matrix-card">
        <div className="gh-card-section-header">
          <div>
            <div className="gh-card-section-title">Design System Matrix</div>
            <div style={{ fontSize: '12.5px', color: '#6b7280', marginTop: '3px' }}>
              Standard toggle states and size hierarchy across Large (44px) and Small (28px).
            </div>
          </div>
          <span className="gh-card-section-badge">Core Anatomy</span>
        </div>

        {/* Highlighted Figma Mockup Frame matching the exact screenshot */}
        <div className="gh-figma-mockup-wrapper">
          <div className="gh-figma-mockup-frame">
            <div className="gh-figma-mockup-caption">
              <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#7c3aed' }}></span>
              Figma Design Mockup (Active &bull; Default &bull; Disabled)
            </div>

            <div className="gh-mockup-grid">
              {/* Row 1: Orange Active (Large & Small) */}
              <div title="Active / Checked (Large)">
                <Switch size="large" checked={true} readOnly aria-label="Large Active Switch" />
              </div>
              <div title="Active / Checked (Small)">
                <Switch size="small" checked={true} readOnly aria-label="Small Active Switch" />
              </div>

              {/* Row 2: Grey Default (Large & Small) */}
              <div title="Default / Unchecked (Large)">
                <Switch size="large" checked={false} readOnly aria-label="Large Unchecked Switch" />
              </div>
              <div title="Default / Unchecked (Small)">
                <Switch size="small" checked={false} readOnly aria-label="Small Unchecked Switch" />
              </div>

              {/* Row 3: Light Grey Disabled Checked (Large & Small) */}
              <div title="Disabled Checked (Large)">
                <Switch size="large" checked={true} disabled={true} aria-label="Large Disabled Checked Switch" />
              </div>
              <div title="Disabled Checked (Small)">
                <Switch size="small" checked={true} disabled={true} aria-label="Small Disabled Checked Switch" />
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive States Table */}
        <div className="gh-switch-matrix-table">
          {/* Header Row */}
          <div className="gh-matrix-row gh-header-row">
            <div className="gh-col-spacer" style={{ fontSize: '12px', fontWeight: 700, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              State / Variant
            </div>
            <div className="gh-col-header">Large (44px)</div>
            <div className="gh-col-header">Small (28px)</div>
          </div>

          {/* Row 1: Active / Checked */}
          <div className="gh-matrix-row">
            <div className="gh-row-meta">
              <span className="gh-row-title">Active (Checked)</span>
              <span className="gh-row-desc">Brand Amber track (#fa8c16), pure white knob</span>
            </div>
            <div className="gh-switch-cell">
              <Switch size="large" checked={true} readOnly />
            </div>
            <div className="gh-switch-cell">
              <Switch size="small" checked={true} readOnly />
            </div>
          </div>

          {/* Row 2: Default / Unchecked */}
          <div className="gh-matrix-row">
            <div className="gh-row-meta">
              <span className="gh-row-title">Default (Unchecked)</span>
              <span className="gh-row-desc">Neutral Grey track (#9ca3af), pure white knob</span>
            </div>
            <div className="gh-switch-cell">
              <Switch size="large" checked={false} readOnly />
            </div>
            <div className="gh-switch-cell">
              <Switch size="small" checked={false} readOnly />
            </div>
          </div>

          {/* Row 3: Disabled (Checked) */}
          <div className="gh-matrix-row">
            <div className="gh-row-meta">
              <span className="gh-row-title">Disabled (Checked)</span>
              <span className="gh-row-desc">Muted track (#e5e7eb), slate knob (#8c8c8c)</span>
            </div>
            <div className="gh-switch-cell">
              <Switch size="large" checked={true} disabled={true} />
            </div>
            <div className="gh-switch-cell">
              <Switch size="small" checked={true} disabled={true} />
            </div>
          </div>

          {/* Row 4: Disabled (Unchecked) */}
          <div className="gh-matrix-row">
            <div className="gh-row-meta">
              <span className="gh-row-title">Disabled (Unchecked)</span>
              <span className="gh-row-desc">Muted track (#e5e7eb), slate knob at rest position</span>
            </div>
            <div className="gh-switch-cell">
              <Switch size="large" checked={false} disabled={true} />
            </div>
            <div className="gh-switch-cell">
              <Switch size="small" checked={false} disabled={true} />
            </div>
          </div>

          {/* Row 5: Loading State */}
          <div className="gh-matrix-row">
            <div className="gh-row-meta">
              <span className="gh-row-title">Loading Indicator</span>
              <span className="gh-row-desc">Micro spinning ring inside sliding handle</span>
            </div>
            <div className="gh-switch-cell">
              <Switch size="large" checked={true} loading={true} />
            </div>
            <div className="gh-switch-cell">
              <Switch size="small" checked={true} loading={true} />
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================================
          2. INTERACTIVE PLAYGROUND
          ================================================================== */}
      <div className="gh-playground-card">
        <div className="gh-card-section-header">
          <div>
            <div className="gh-card-section-title">Interactive Component Playground</div>
            <div style={{ fontSize: '12.5px', color: '#6b7280', marginTop: '3px' }}>
              Test real-time user click events, state transitions, keyboard controls, and configurations.
            </div>
          </div>
          <span className="gh-card-section-badge">Live Preview</span>
        </div>

        {/* Playground Controls */}
        <div className="gh-playground-controls">
          <label className="gh-control-label">
            <input
              type="checkbox"
              checked={playgroundDisabled}
              onChange={(e) => setPlaygroundDisabled(e.target.checked)}
            />
            <span>Disable Switches</span>
          </label>

          <div className="gh-control-divider" />

          <label className="gh-control-label">
            <input
              type="checkbox"
              checked={playgroundLoading}
              onChange={(e) => setPlaygroundLoading(e.target.checked)}
            />
            <span>Loading State</span>
          </label>

          <div className="gh-control-divider" />

          <label className="gh-control-label">
            <input
              type="checkbox"
              checked={playgroundWithIcons}
              onChange={(e) => {
                setPlaygroundWithIcons(e.target.checked);
                if (e.target.checked) setPlaygroundWithText(false);
              }}
            />
            <span>Show Icons</span>
          </label>

          <div className="gh-control-divider" />

          <label className="gh-control-label">
            <input
              type="checkbox"
              checked={playgroundWithText}
              onChange={(e) => {
                setPlaygroundWithText(e.target.checked);
                if (e.target.checked) setPlaygroundWithIcons(false);
              }}
            />
            <span>Show Text (ON/OFF)</span>
          </label>

          <div className="gh-control-divider" />

          <div className="gh-control-badge gh-badge-checked">
            Large: {playgroundLarge ? 'Checked' : 'Unchecked'}
          </div>

          <div className="gh-control-badge gh-badge-unchecked">
            Small: {playgroundSmall ? 'Checked' : 'Unchecked'}
          </div>
        </div>

        {/* Playground Interactive Stage */}
        <div className="gh-playground-stage">
          <div className="gh-playground-item">
            <Switch
              size="large"
              checked={playgroundLarge}
              onChange={(checked) => setPlaygroundLarge(checked)}
              disabled={playgroundDisabled}
              loading={playgroundLoading}
              checkedChildren={
                playgroundWithIcons ? (
                  <i className="gh-icon gh-icon-check gh-size-10" aria-hidden="true" />
                ) : playgroundWithText ? 'ON' : null
              }
              unCheckedChildren={
                playgroundWithIcons ? (
                  <i className="gh-icon gh-icon-x gh-size-10" aria-hidden="true" />
                ) : playgroundWithText ? 'OFF' : null
              }
            />
            <span className="gh-item-caption">Large (44px) &bull; Click to Toggle</span>
          </div>

          <div className="gh-playground-item">
            <Switch
              size="small"
              checked={playgroundSmall}
              onChange={(checked) => setPlaygroundSmall(checked)}
              disabled={playgroundDisabled}
              loading={playgroundLoading}
              checkedChildren={
                playgroundWithIcons ? (
                  <i className="gh-icon gh-icon-check gh-size-10" aria-hidden="true" />
                ) : playgroundWithText ? '1' : null
              }
              unCheckedChildren={
                playgroundWithIcons ? (
                  <i className="gh-icon gh-icon-x gh-size-10" aria-hidden="true" />
                ) : playgroundWithText ? '0' : null
              }
            />
            <span className="gh-item-caption">Small (28px) &bull; Click to Toggle</span>
          </div>
        </div>
      </div>

      {/* ==================================================================
          3. REAL-WORLD DASHBOARD SETTINGS EXAMPLE
          ================================================================== */}
      <div className="gh-settings-list-card">
        <div className="gh-card-section-header">
          <div>
            <div className="gh-card-section-title">Real-World Settings Integration</div>
            <div style={{ fontSize: '12.5px', color: '#6b7280', marginTop: '3px' }}>
              Example implementation inside a system preferences / security options list.
            </div>
          </div>
          <span className="gh-card-section-badge">Form Pattern</span>
        </div>

        <div className="gh-settings-item">
          <div className="gh-settings-info">
            <span className="gh-settings-name">Push &amp; Email Notifications</span>
            <span className="gh-settings-sub">Receive real-time alerts when team members mention your component drafts.</span>
          </div>
          <Switch
            size="large"
            checked={notifications}
            onChange={(checked) => setNotifications(checked)}
          />
        </div>

        <div className="gh-settings-item">
          <div className="gh-settings-info">
            <span className="gh-settings-name">Two-Factor Authentication (2FA)</span>
            <span className="gh-settings-sub">Require an OTP security code whenever signing in from unfamiliar browsers.</span>
          </div>
          <Switch
            size="large"
            checked={twoFactor}
            onChange={(checked) => setTwoFactor(checked)}
          />
        </div>

        <div className="gh-settings-item">
          <div className="gh-settings-info">
            <span className="gh-settings-name">Monochrome High-Contrast Mode</span>
            <span className="gh-settings-sub">Optimize typography and border contrast for low-light environments.</span>
          </div>
          <Switch
            size="large"
            checked={darkMode}
            onChange={(checked) => setDarkMode(checked)}
          />
        </div>

        <div className="gh-settings-item">
          <div className="gh-settings-info">
            <span className="gh-settings-name">Continuous Auto-Save</span>
            <span className="gh-settings-sub">Automatically save workspace changes every 30 seconds.</span>
          </div>
          <Switch
            size="small"
            checked={autoSave}
            onChange={(checked) => setAutoSave(checked)}
          />
        </div>

        <div className="gh-settings-item">
          <div className="gh-settings-info">
            <span className="gh-settings-name">Enterprise SSO Enforcement</span>
            <span className="gh-settings-sub">Managed by organization workspace administrator (Locked).</span>
          </div>
          <Switch
            size="large"
            checked={true}
            disabled={true}
          />
        </div>
      </div>
    </>
  }
/>
    </div>
  );
};

export default SwitchPage;
