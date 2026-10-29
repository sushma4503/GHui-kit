import React, { useState } from 'react';
import Radio from '../components/Radio';
import DocTabs from '../components/DocTabs';
import '../styles/radio.scss';

const htmlRadioCode = `<!-- 1. Basic Radio Buttons (Checked & Default) -->
<label class="gh-radio-wrapper gh-radio-large">
  <span class="gh-radio gh-radio-checked">
    <input type="radio" checked class="gh-radio-input" />
    <span class="gh-radio-inner"></span>
  </span>
  <span>Active Large</span>
</label>

<label class="gh-radio-wrapper gh-radio-medium">
  <span class="gh-radio">
    <input type="radio" class="gh-radio-input" />
    <span class="gh-radio-inner"></span>
  </span>
  <span>Default Default</span>
</label>

<!-- 2. Disabled Radio -->
<label class="gh-radio-wrapper gh-radio-disabled">
  <span class="gh-radio gh-radio-disabled">
    <input type="radio" disabled class="gh-radio-input" />
    <span class="gh-radio-inner"></span>
  </span>
  <span>Disabled Option</span>
</label>

<!-- 3. Segmented Button Style -->
<div class="gh-radio-group gh-radio-group-solid">
  <label class="gh-radio-button-wrapper gh-radio-button-checked">
    <input type="radio" checked class="gh-radio-button-input" />
    <span>Daily</span>
  </label>
  <label class="gh-radio-button-wrapper">
    <input type="radio" class="gh-radio-button-input" />
    <span>Weekly</span>
  </label>
  <label class="gh-radio-button-wrapper">
    <input type="radio" class="gh-radio-button-input" />
    <span>Monthly</span>
  </label>
</div>`;

const scssRadioSnippets = {
  'radio.scss': `/* ==========================================================================
   MonoUI Kit - Radio Design System Main SCSS Entry
   Each radio concern has its own separate SCSS file in src/styles/radio/:
     - radio/_base.scss     (Base radio circle reset, inner dot, focus ring)
     - radio/_sizes.scss    (Large 20px, Default 16px, Small 14px size modifiers)
     - radio/_states.scss   (Checked amber, unselected, and disabled styling)
     - radio/_matrix.scss   (Showcase matrix layout, group styles, and cards)
   ========================================================================== */
@use 'radio/base';
@use 'radio/sizes';
@use 'radio/states';
@use 'radio/matrix';`,

  'radio/_base.scss': `.gh-radio {
  position: relative;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  vertical-align: sub;
  outline: none;
  cursor: pointer;

  .gh-radio-inner {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50%;
    border: 1px solid #d1d5db;
    background-color: #ffffff;
    transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      border-radius: 50%;
      background-color: #fa8c16;
      transition: transform 0.2s cubic-bezier(0.2, 0, 0, 1);
    }
  }

  &.gh-radio-checked .gh-radio-inner {
    border-color: #fa8c16;
    &::after {
      transform: translate(-50%, -50%) scale(1);
    }
  }
}`,

  'radio/_sizes.scss': `.gh-radio-large .gh-radio-inner {
  width: 20px;
  height: 20px;
  &::after { width: 10px; height: 10px; }
}

.gh-radio-medium .gh-radio-inner {
  width: 16px;
  height: 16px;
  &::after { width: 8px; height: 8px; }
}

.gh-radio-small .gh-radio-inner {
  width: 14px;
  height: 14px;
  &::after { width: 6px; height: 6px; }
}`
};

const radioApiContent = (
  <div>
    <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: '0 0 4px 0' }}>
      Radio Component API &amp; Props
    </h2>
    <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 16px 0' }}>
      Reference guide for integrating Radio and Radio.Group.
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
            <td>Controlled selected state of the radio button</td>
          </tr>
          <tr>
            <td><code>value</code></td>
            <td><code>any</code></td>
            <td><code>-</code></td>
            <td>Value identifier when used within a Radio.Group</td>
          </tr>
          <tr>
            <td><code>disabled</code></td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
            <td>Disables user interaction and applies muted styling</td>
          </tr>
          <tr>
            <td><code>size</code></td>
            <td><code>'large' | 'medium' | 'small'</code></td>
            <td><code>'medium'</code></td>
            <td>Sets the optical size of the radio circle or button</td>
          </tr>
          <tr>
            <td><code>direction</code></td>
            <td><code>'horizontal' | 'vertical'</code></td>
            <td><code>'horizontal'</code></td>
            <td>Layout alignment of the Radio.Group options</td>
          </tr>
          <tr>
            <td><code>buttonStyle</code></td>
            <td><code>'outline' | 'solid'</code></td>
            <td><code>'outline'</code></td>
            <td>Visual presentation style for Radio.Button</td>
          </tr>
          <tr>
            <td><code>onChange</code></td>
            <td><code>(value, event) =&gt; void</code></td>
            <td><code>-</code></td>
            <td>Callback triggered when selection changes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: '32px 0 4px 0' }}>
      Anatomy &amp; Token Specifications
    </h2>
    <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 16px 0' }}>
      Design token variables, dimensions, radii, and state timings.
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
            <td>Large Outer Ring</td>
            <td><code>20px &times; 20px</code></td>
            <td>Outer circular ring for large forms</td>
          </tr>
          <tr>
            <td>Large Inner Dot</td>
            <td><code>10px &times; 10px</code></td>
            <td>Centered active indicator dot</td>
          </tr>
          <tr>
            <td>Default Outer Ring</td>
            <td><code>16px &times; 16px</code></td>
            <td>Standard default diameter</td>
          </tr>
          <tr>
            <td>Default Inner Dot</td>
            <td><code>8px &times; 8px</code></td>
            <td>Centered active indicator dot</td>
          </tr>
          <tr>
            <td>Small Outer Ring</td>
            <td><code>14px &times; 14px</code></td>
            <td>Compact diameter for dense layouts</td>
          </tr>
          <tr>
            <td>Active Accent Color</td>
            <td><code>#fa8c16</code></td>
            <td>Brand Amber orange border and inner dot</td>
          </tr>
          <tr>
            <td>Default Border Color</td>
            <td><code>#d1d5db</code></td>
            <td>Neutral grey border when unselected</td>
          </tr>
          <tr>
            <td>Disabled Background</td>
            <td><code>#f3f4f6</code></td>
            <td>Muted grey fill with disabled cursor</td>
          </tr>
          <tr>
            <td>Focus Ring</td>
            <td><code>box-shadow: 0 0 0 3px rgba(250,140,22,0.28)</code></td>
            <td>WCAG AA compliant focus indicator</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

/**
 * Radio Design System Specification Page
 */
const RadioPage = () => {
  // Playground state
  const [playgroundSize, setPlaygroundSize] = useState('medium');
  const [playgroundDisabled, setPlaygroundDisabled] = useState(false);
  const [playgroundValue, setPlaygroundValue] = useState('react');
  const [direction, setDirection] = useState('horizontal');

  // Radio button group state
  const [segmentedValue, setSegmentedValue] = useState('daily');
  const [segmentedSolid, setSegmentedSolid] = useState('beijing');

  // Plan card selection
  const [selectedPlan, setSelectedPlan] = useState('pro');

  return (
    <div className="gh-radio-page">
      {/* Breadcrumb Header */}
      <div className="gh-page-breadcrumbs">
        DATA ENTRY &bull; DESIGN SYSTEM V1.0
      </div>

      {/* Main Title & Description */}
      <h1 className="gh-page-title">Radio</h1>
      <p className="gh-page-description">
        Used to select a single option from a mutually exclusive set of choices. Supporting multiple optical sizes (Large 20px, Default 16px, Small 14px), distinct disabled states, segmented button group styles, and full keyboard accessibility.
      </p>

      {/* Unified Documentation Tabs System */}
      <DocTabs
        previewTabLabel="Design Matrix Preview"
        htmlCode={htmlRadioCode}
        scssSnippets={scssRadioSnippets}
        apiContent={radioApiContent}
        previewContent={
          <>
            {/* ==================================================================
                1. SPECIFICATION MATRIX SHOWCASE
                ================================================================== */}
            <div className="gh-radio-matrix-card">
        <div className="gh-card-section-header">
          <div>
            <div className="gh-card-section-title">Design System Matrix</div>
            <div style={{ fontSize: '12.5px', color: '#6b7280', marginTop: '3px' }}>
              Standard radio states and size hierarchy across Large (20px), Default (16px), and Small (14px).
            </div>
          </div>
          <span className="gh-card-section-badge">Core Anatomy</span>
        </div>

        {/* Highlighted Figma Mockup Frame */}
        <div className="gh-figma-mockup-wrapper">
          <div className="gh-figma-mockup-frame">
            <div className="gh-figma-mockup-caption">
              <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#7c3aed' }}></span>
              Figma Design Mockup (Active &bull; Default &bull; Disabled)
            </div>

            <div className="gh-mockup-grid">
              {/* Row 1: Active / Checked */}
              <div>
                <Radio size="large" checked={true} readOnly>Active Large</Radio>
              </div>
              <div>
                <Radio size="medium" checked={true} readOnly>Active Default</Radio>
              </div>
              <div>
                <Radio size="small" checked={true} readOnly>Active Small</Radio>
              </div>

              {/* Row 2: Default / Unchecked */}
              <div>
                <Radio size="large" checked={false} readOnly>Default Large</Radio>
              </div>
              <div>
                <Radio size="medium" checked={false} readOnly>Default Default</Radio>
              </div>
              <div>
                <Radio size="small" checked={false} readOnly>Default Small</Radio>
              </div>

              {/* Row 3: Disabled */}
              <div>
                <Radio size="large" checked={true} disabled={true}>Disabled</Radio>
              </div>
              <div>
                <Radio size="medium" checked={true} disabled={true}>Disabled</Radio>
              </div>
              <div>
                <Radio size="small" checked={false} disabled={true}>Disabled</Radio>
              </div>
            </div>
          </div>
        </div>

        {/* Matrix Table */}
        <div className="gh-radio-matrix-table">
          <div className="gh-matrix-row gh-header-row">
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              State / Variant
            </div>
            <div className="gh-col-header">Large (20px)</div>
            <div className="gh-col-header">Default (16px)</div>
            <div className="gh-col-header">Small (14px)</div>
          </div>

          {/* Active Checked */}
          <div className="gh-matrix-row">
            <div className="gh-row-meta">
              <span className="gh-row-title">Active (Selected)</span>
              <span className="gh-row-desc">Brand Amber ring (#fa8c16), solid inner dot</span>
            </div>
            <div className="gh-radio-cell">
              <Radio size="large" checked={true} readOnly />
            </div>
            <div className="gh-radio-cell">
              <Radio size="medium" checked={true} readOnly />
            </div>
            <div className="gh-radio-cell">
              <Radio size="small" checked={true} readOnly />
            </div>
          </div>

          {/* Default Unchecked */}
          <div className="gh-matrix-row">
            <div className="gh-row-meta">
              <span className="gh-row-title">Default (Unselected)</span>
              <span className="gh-row-desc">Neutral border (#d1d5db), clear center</span>
            </div>
            <div className="gh-radio-cell">
              <Radio size="large" checked={false} readOnly />
            </div>
            <div className="gh-radio-cell">
              <Radio size="medium" checked={false} readOnly />
            </div>
            <div className="gh-radio-cell">
              <Radio size="small" checked={false} readOnly />
            </div>
          </div>

          {/* Disabled Checked */}
          <div className="gh-matrix-row">
            <div className="gh-row-meta">
              <span className="gh-row-title">Disabled (Selected)</span>
              <span className="gh-row-desc">Muted track (#f3f4f6), slate dot (#9ca3af)</span>
            </div>
            <div className="gh-radio-cell">
              <Radio size="large" checked={true} disabled={true} />
            </div>
            <div className="gh-radio-cell">
              <Radio size="medium" checked={true} disabled={true} />
            </div>
            <div className="gh-radio-cell">
              <Radio size="small" checked={true} disabled={true} />
            </div>
          </div>

          {/* Disabled Unchecked */}
          <div className="gh-matrix-row">
            <div className="gh-row-meta">
              <span className="gh-row-title">Disabled (Unselected)</span>
              <span className="gh-row-desc">Muted track (#f3f4f6), no dot</span>
            </div>
            <div className="gh-radio-cell">
              <Radio size="large" checked={false} disabled={true} />
            </div>
            <div className="gh-radio-cell">
              <Radio size="medium" checked={false} disabled={true} />
            </div>
            <div className="gh-radio-cell">
              <Radio size="small" checked={false} disabled={true} />
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
              Test mutually exclusive selections, sizes, layout orientation, and disabled modes.
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
            <span>Disable Options</span>
          </label>

          <div className="gh-control-divider" />

          <label className="gh-control-label">
            <input
              type="checkbox"
              checked={direction === 'vertical'}
              onChange={(e) => setDirection(e.target.checked ? 'vertical' : 'horizontal')}
            />
            <span>Vertical Orientation</span>
          </label>

          <div className="gh-control-divider" />

          <label className="gh-control-label">
            <span>Size:</span>
            <select
              value={playgroundSize}
              onChange={(e) => setPlaygroundSize(e.target.value)}
              style={{
                marginLeft: '6px',
                padding: '4px 8px',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                fontFamily: 'inherit',
                fontSize: '12.5px'
              }}
            >
              <option value="large">Large (20px)</option>
              <option value="medium">Default (16px)</option>
              <option value="small">Small (14px)</option>
            </select>
          </label>

          <div className="gh-control-divider" />

          <div className="gh-control-badge">
            Selected: <strong>{playgroundValue}</strong>
          </div>
        </div>

        {/* Playground Stage */}
        <div className="gh-playground-stage">
          <Radio.Group
            name="framework"
            value={playgroundValue}
            onChange={(val) => setPlaygroundValue(val)}
            size={playgroundSize}
            disabled={playgroundDisabled}
            direction={direction}
          >
            <Radio value="react">React.js Framework</Radio>
            <Radio value="vue">Vue.js 3</Radio>
            <Radio value="angular">Angular Enterprise</Radio>
            <Radio value="svelte">Svelte Kit</Radio>
          </Radio.Group>
        </div>
      </div>

      {/* ==================================================================
          3. SEGMENTED RADIO BUTTON STYLES
          ================================================================== */}
      <div className="gh-playground-card">
        <div className="gh-card-section-header">
          <div>
            <div className="gh-card-section-title">Radio.Button Segmented Styles</div>
            <div style={{ fontSize: '12.5px', color: '#6b7280', marginTop: '3px' }}>
              Used for compact view switchers, date range intervals, and segmented controls.
            </div>
          </div>
          <span className="gh-card-section-badge">Button Variant</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '12px 0' }}>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '10px' }}>
              Outline Button Style (Default):
            </div>
            <Radio.Group
              value={segmentedValue}
              onChange={(val) => setSegmentedValue(val)}
              buttonStyle="outline"
              size="medium"
            >
              <Radio.Button value="hourly">Hourly</Radio.Button>
              <Radio.Button value="daily">Daily</Radio.Button>
              <Radio.Button value="weekly">Weekly</Radio.Button>
              <Radio.Button value="monthly">Monthly</Radio.Button>
            </Radio.Group>
          </div>

          <div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '10px' }}>
              Solid Filled Active Style:
            </div>
            <Radio.Group
              value={segmentedSolid}
              onChange={(val) => setSegmentedSolid(val)}
              buttonStyle="solid"
              size="large"
            >
              <Radio.Button value="beijing">Beijing HQ</Radio.Button>
              <Radio.Button value="shanghai">Shanghai</Radio.Button>
              <Radio.Button value="tokyo">Tokyo</Radio.Button>
              <Radio.Button value="sydney" disabled>Sydney (Locked)</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>

      {/* ==================================================================
          4. CARD SELECTOR REAL-WORLD PATTERN
          ================================================================== */}
      <div className="gh-radio-cards-grid">
        <div
          className={`gh-radio-option-card ${selectedPlan === 'starter' ? 'gh-selected' : ''}`}
          onClick={() => setSelectedPlan('starter')}
        >
          <div className="gh-card-header-line">
            <Radio checked={selectedPlan === 'starter'} readOnly>
              <span className="gh-plan-title">Starter</span>
            </Radio>
            <span className="gh-plan-price">$19/mo</span>
          </div>
          <p className="gh-plan-desc">Essential tools for individual designers and solo engineers.</p>
        </div>

        <div
          className={`gh-radio-option-card ${selectedPlan === 'pro' ? 'gh-selected' : ''}`}
          onClick={() => setSelectedPlan('pro')}
        >
          <div className="gh-card-header-line">
            <Radio checked={selectedPlan === 'pro'} readOnly>
              <span className="gh-plan-title">Professional</span>
            </Radio>
            <span className="gh-plan-price">$49/mo</span>
          </div>
          <p className="gh-plan-desc">Advanced tokens, unlimited components, and real-time syncing.</p>
        </div>

        <div
          className={`gh-radio-option-card ${selectedPlan === 'enterprise' ? 'gh-selected' : ''}`}
          onClick={() => setSelectedPlan('enterprise')}
        >
          <div className="gh-card-header-line">
            <Radio checked={selectedPlan === 'enterprise'} readOnly>
              <span className="gh-plan-title">Enterprise</span>
            </Radio>
            <span className="gh-plan-price">$99/mo</span>
          </div>
          <p className="gh-plan-desc">Dedicated design systems support, SLA, and SSO security.</p>
        </div>
      </div>
    </>
  }
/>
    </div>
  );
};

export default RadioPage;
