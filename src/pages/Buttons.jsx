import React from 'react';
import DocTabs from '../components/DocTabs';
import '../styles/buttons.scss';

const htmlButtonCode = `<!-- 1. Standard Button Sizes & Types -->
<button type="button" class="gh-btn gh-btn-large gh-btn-primary">Primary Button</button>
<button type="button" class="gh-btn gh-btn-large gh-btn-secondary">Secondary Button</button>
<button type="button" class="gh-btn gh-btn-large gh-btn-tertiary">Tertiary Button</button>

<button type="button" class="gh-btn gh-btn-medium gh-btn-primary">Medium Button</button>
<button type="button" class="gh-btn gh-btn-small gh-btn-primary">Small Button</button>

<!-- 2. Disabled States -->
<button type="button" class="gh-btn gh-btn-medium gh-btn-primary" disabled>Disabled Button</button>

<!-- 3. Semantic Status Buttons -->
<button type="button" class="gh-btn gh-btn-medium gh-btn-error">Delete Action</button>
<button type="button" class="gh-btn gh-btn-medium gh-btn-success">Confirm Success</button>
<button type="button" class="gh-btn gh-btn-medium gh-btn-warning">Warning Alert</button>

<!-- 4. Link & Square Icon Buttons -->
<a href="#link" class="gh-btn gh-btn-link">Text Link</a>
<button type="button" class="gh-btn gh-btn-small gh-btn-icon gh-btn-primary" aria-label="Edit">
  <i class="gh-icon gh-icon-pencil gh-size-14" aria-hidden="true"></i>
</button>`;

const scssButtonSnippets = {
  'buttons.scss': `/* ==========================================================================
   Button Design System - Main SCSS Entry
   Each button type has its own separate SCSS file in src/styles/buttons/:
     - buttons/_base.scss      (Base button reset & sizes: gh-btn-large/medium/small)
     - buttons/_primary.scss   (Primary button: gh-btn-primary)
     - buttons/_secondary.scss (Secondary button: gh-btn-secondary)
     - buttons/_tertiary.scss  (Tertiary button: gh-btn-tertiary)
     - buttons/_link.scss      (Link button: gh-btn-link)
     - buttons/_semantic.scss  (Error, Success, Warning: gh-btn-error/success/warning)
     - buttons/_icon.scss      (Square icon buttons: gh-btn-icon)
     - buttons/_matrix.scss    (Matrix page layout & grid)
   ========================================================================== */
@use 'buttons/base';
@use 'buttons/primary';
@use 'buttons/secondary';
@use 'buttons/tertiary';
@use 'buttons/link';
@use 'buttons/semantic';
@use 'buttons/icon';
@use 'buttons/matrix';`,

  'buttons/_base.scss': `.gh-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-weight: 500;
  border-radius: 4px;
  border: 1px solid transparent;
  user-select: none;
  transition: all 0.15s ease;
  cursor: pointer;
  white-space: nowrap;

  &.gh-btn-large  { height: 38px; padding: 0 16px; font-size: 13px; }
  &.gh-btn-medium { height: 32px; padding: 0 12px; font-size: 12px; }
  &.gh-btn-small  { height: 28px; padding: 0 10px; font-size: 11px; }
}`,

  'buttons/_primary.scss': `.gh-btn-primary {
  background-color: #FFAA23;
  color: #121212;
  border-color: #FFAA23;

  &:hover {
    background-color: #E89100;
    border-color: #E89100;
  }
  &:active {
    background-color: #BD7200;
    border-color: #BD7200;
  }
  &:disabled {
    background-color: #F2DBAC;
    border-color: #F2DBAC;
    color: #A3A3A3;
    cursor: not-allowed;
  }
}`,

  'buttons/_secondary.scss': `.gh-btn-secondary {
  background-color: #FFFFFF;
  color: #121212;
  border-color: #D4D4D4;

  &:hover {
    background-color: #F5F5F5;
    border-color: #A3A3A3;
  }
  &:disabled {
    background-color: #F5F5F5;
    border-color: #E5E5E5;
    color: #A3A3A3;
    cursor: not-allowed;
  }
}`,

  'buttons/_tertiary.scss': `.gh-btn-tertiary {
  background-color: transparent;
  color: #525252;
  border-color: transparent;

  &:hover {
    background-color: #F5F5F5;
    color: #121212;
  }
  &:disabled {
    color: #A3A3A3;
    cursor: not-allowed;
  }
}`
};

const buttonApiContent = (
  <div>
    <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: '0 0 4px 0' }}>
      Button Component API
    </h2>
    <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 16px 0' }}>
      Properties and configuration options for MonoUI Button elements.
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
            <td><code>'primary' | 'secondary' | 'tertiary' | 'link' | 'error' | 'success' | 'warning'</code></td>
            <td><code>'secondary'</code></td>
            <td>Visual hierarchy and color variant.</td>
          </tr>
          <tr>
            <td><code>size</code></td>
            <td><code>'large' (38px) | 'medium' (32px) | 'small' (28px)</code></td>
            <td><code>'medium'</code></td>
            <td>Optical height and internal padding.</td>
          </tr>
          <tr>
            <td><code>disabled</code></td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
            <td>Prevents pointer interaction and applies muted color tokens.</td>
          </tr>
          <tr>
            <td><code>icon</code></td>
            <td><code>ReactNode</code></td>
            <td><code>null</code></td>
            <td>Icon displayed inside or as square optical button.</td>
          </tr>
          <tr>
            <td><code>onClick</code></td>
            <td><code>(event) =&gt; void</code></td>
            <td><code>-</code></td>
            <td>Click event callback handler.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

/**
 * Button Design System Specification Page
 */
const Buttons = () => {
  return (
    <div className="gh-buttons-page">
      {/* Breadcrumb Header */}
      <div className="gh-page-breadcrumbs">
        COMPONENTS &bull; DESIGN SYSTEM V1.0
      </div>

      {/* Main Title & Description */}
      <h1 className="gh-page-title">Buttons</h1>
      <p className="gh-page-description">
        Standard button hierarchy covering sizes (Large 38px, Medium 32px, Small 28px), states (Active, Hover/OnClick, Disabled), link styling, semantic status variants, and optical square icon buttons.
      </p>

      {/* Unified Documentation Tabs System */}
      <DocTabs
        previewTabLabel="Design Matrix Preview"
        htmlCode={htmlButtonCode}
        scssSnippets={scssButtonSnippets}
        apiContent={buttonApiContent}
        previewContent={
          <div className="gh-button-matrix-card">

        {/* ==================================================================
            1. LARGE BUTTONS (38px)
            ================================================================== */}
        <section className="gh-matrix-group">
          {/* Column Headers */}
          <div className="gh-column-headers">
            <div className="gh-col-spacer"></div>
            <div className="gh-col-header">Primary</div>
            <div className="gh-col-header">Secondary</div>
            <div className="gh-col-header">Tertiary</div>
          </div>

          <div className="gh-group-title">Large (38)</div>

          {/* Active State */}
          <div className="gh-matrix-row">
            <div className="gh-row-label">Active</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-primary gh-state-active">
                Button Title
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-secondary gh-state-active">
                Button Title
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-tertiary gh-state-active">
                Button Title
              </button>
            </div>
          </div>

          {/* Hover / OnClick State */}
          <div className="gh-matrix-row">
            <div className="gh-row-label">Hover/ OnClick</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-primary gh-state-hover">
                Button Title
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-secondary gh-state-hover">
                Button Title
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-tertiary gh-state-hover">
                Button Title
              </button>
            </div>
          </div>

          {/* Disabled State */}
          <div className="gh-matrix-row">
            <div className="gh-row-label">Disable</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-primary gh-state-disabled" disabled>
                Button Title
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-secondary gh-state-disabled" disabled>
                Button Title
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-tertiary gh-state-disabled" disabled>
                Button Title
              </button>
            </div>
          </div>
        </section>

        {/* ==================================================================
            2. MEDIUM BUTTONS (32px)
            ================================================================== */}
        <section className="gh-matrix-group">
          {/* Column Headers */}
          <div className="gh-column-headers">
            <div className="gh-col-spacer"></div>
            <div className="gh-col-header">Primary</div>
            <div className="gh-col-header">Secondary</div>
            <div className="gh-col-header">Tertiary</div>
          </div>

          <div className="gh-group-title">Medium (32)</div>

          {/* Active State */}
          <div className="gh-matrix-row">
            <div className="gh-row-label">Active</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-medium gh-btn-primary gh-state-active">
                Button Title
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-medium gh-btn-secondary gh-state-active">
                Button Title
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-medium gh-btn-tertiary gh-state-active">
                Button Title
              </button>
            </div>
          </div>

          {/* Hover / OnClick State */}
          <div className="gh-matrix-row">
            <div className="gh-row-label">Hover/ OnClick</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-medium gh-btn-primary gh-state-hover">
                Button Title
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-medium gh-btn-secondary gh-state-hover">
                Button Title
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-medium gh-btn-tertiary gh-state-hover">
                Button Title
              </button>
            </div>
          </div>

          {/* Disabled State */}
          <div className="gh-matrix-row">
            <div className="gh-row-label">Disable</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-medium gh-btn-primary gh-state-disabled" disabled>
                Button Title
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-medium gh-btn-secondary gh-state-disabled" disabled>
                Button Title
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-medium gh-btn-tertiary gh-state-disabled" disabled>
                Button Title
              </button>
            </div>
          </div>
        </section>

        {/* ==================================================================
            3. SMALL BUTTONS (28px)
            ================================================================== */}
        <section className="gh-matrix-group">
          {/* Column Headers */}
          <div className="gh-column-headers">
            <div className="gh-col-spacer"></div>
            <div className="gh-col-header">Primary</div>
            <div className="gh-col-header">Secondary</div>
            <div className="gh-col-header">Tertiary</div>
          </div>

          <div className="gh-group-title">Small (28)</div>

          {/* Active State */}
          <div className="gh-matrix-row">
            <div className="gh-row-label">Active</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-small gh-btn-primary gh-state-active">
                Button Title
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-small gh-btn-secondary gh-state-active">
                Button Title
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-small gh-btn-tertiary gh-state-active">
                Button Title
              </button>
            </div>
          </div>

          {/* Hover / OnClick State */}
          <div className="gh-matrix-row">
            <div className="gh-row-label">Hover/ OnClick</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-small gh-btn-primary gh-state-hover">
                Button Title
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-small gh-btn-secondary gh-state-hover">
                Button Title
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-small gh-btn-tertiary gh-state-hover">
                Button Title
              </button>
            </div>
          </div>

          {/* Disabled State */}
          <div className="gh-matrix-row">
            <div className="gh-row-label">Disable</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-small gh-btn-primary gh-state-disabled" disabled>
                Button Title
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-small gh-btn-secondary gh-state-disabled" disabled>
                Button Title
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-small gh-btn-tertiary gh-state-disabled" disabled>
                Button Title
              </button>
            </div>
          </div>
        </section>

        {/* ==================================================================
            4. LINK BUTTON
            ================================================================== */}
        <section className="gh-matrix-group gh-single-row-group">
          <div className="gh-matrix-row">
            <div className="gh-group-title gh-inline-label">Link</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-link">
                Button Title
              </button>
            </div>
          </div>
        </section>

        {/* ==================================================================
            5. SEMANTIC STATUS BUTTONS (Error, Success, Warning)
            ================================================================== */}
        {/* Error */}
        <section className="gh-matrix-group gh-single-row-group">
          <div className="gh-column-headers gh-two-columns">
            <div className="gh-col-spacer"></div>
            <div className="gh-col-header">Primary</div>
            <div className="gh-col-header">Secondary</div>
          </div>

          <div className="gh-matrix-row gh-two-columns">
            <div className="gh-group-title gh-inline-label">Error</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-error">
                Button Title
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-error-outline">
                Button Title
              </button>
            </div>
          </div>
        </section>

        {/* Success */}
        <section className="gh-matrix-group gh-single-row-group">
          <div className="gh-column-headers gh-two-columns">
            <div className="gh-col-spacer"></div>
            <div className="gh-col-header">Primary</div>
            <div className="gh-col-header">Secondary</div>
          </div>

          <div className="gh-matrix-row gh-two-columns">
            <div className="gh-group-title gh-inline-label">Success</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-success">
                Button Title
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-success-outline">
                Button Title
              </button>
            </div>
          </div>
        </section>

        {/* Warning */}
        <section className="gh-matrix-group gh-single-row-group">
          <div className="gh-column-headers gh-two-columns">
            <div className="gh-col-spacer"></div>
            <div className="gh-col-header">Primary</div>
            <div className="gh-col-header">Secondary</div>
          </div>

          <div className="gh-matrix-row gh-two-columns">
            <div className="gh-group-title gh-inline-label">Warning</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-warning">
                Button Title
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-warning-outline">
                Button Title
              </button>
            </div>
          </div>
        </section>

        {/* ==================================================================
            6. LARGE SQUARE ICON BUTTONS (38px)
            ================================================================== */}
        <section className="gh-matrix-group">
          <div className="gh-column-headers">
            <div className="gh-col-spacer"></div>
            <div className="gh-col-header">Primary</div>
            <div className="gh-col-header">Secondary</div>
            <div className="gh-col-header">Tertiary</div>
          </div>

          <div className="gh-group-title">Large Icon (38)</div>

          {/* Active */}
          <div className="gh-matrix-row">
            <div className="gh-row-label">Active</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-icon gh-btn-primary gh-state-active" aria-label="Large Icon Primary Active">
                <i className="gh-icon gh-icon-pencil gh-size-16" aria-hidden="true" />
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-icon gh-btn-secondary gh-state-active" aria-label="Large Icon Secondary Active">
                <i className="gh-icon gh-icon-pencil gh-size-16" aria-hidden="true" />
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-icon gh-btn-tertiary gh-state-active" aria-label="Large Icon Tertiary Active">
                <i className="gh-icon gh-icon-pencil gh-size-16" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Hover / OnClick */}
          <div className="gh-matrix-row">
            <div className="gh-row-label">Hover/ OnClick</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-icon gh-btn-primary gh-state-hover" aria-label="Large Icon Primary Hover">
                <i className="gh-icon gh-icon-pencil gh-size-16" aria-hidden="true" />
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-icon gh-btn-secondary gh-state-hover" aria-label="Large Icon Secondary Hover">
                <i className="gh-icon gh-icon-pencil gh-size-16" aria-hidden="true" />
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-icon gh-btn-tertiary gh-state-hover" aria-label="Large Icon Tertiary Hover">
                <i className="gh-icon gh-icon-pencil gh-size-16" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Disable */}
          <div className="gh-matrix-row">
            <div className="gh-row-label">Disable</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-icon gh-btn-primary gh-state-disabled" disabled aria-label="Large Icon Primary Disabled">
                <i className="gh-icon gh-icon-pencil gh-size-16" aria-hidden="true" />
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-icon gh-btn-secondary gh-state-disabled" disabled aria-label="Large Icon Secondary Disabled">
                <i className="gh-icon gh-icon-pencil gh-size-16" aria-hidden="true" />
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-large gh-btn-icon gh-btn-tertiary gh-state-disabled" disabled aria-label="Large Icon Tertiary Disabled">
                <i className="gh-icon gh-icon-pencil gh-size-16" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        {/* ==================================================================
            7. MEDIUM SQUARE ICON BUTTONS (32px)
            ================================================================== */}
        <section className="gh-matrix-group">
          <div className="gh-column-headers">
            <div className="gh-col-spacer"></div>
            <div className="gh-col-header">Primary</div>
            <div className="gh-col-header">Secondary</div>
            <div className="gh-col-header">Tertiary</div>
          </div>

          <div className="gh-group-title">Medium (32)</div>

          {/* Active */}
          <div className="gh-matrix-row">
            <div className="gh-row-label">Active</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-medium gh-btn-icon gh-btn-primary gh-state-active" aria-label="Medium Icon Primary Active">
                <i className="gh-icon gh-icon-pencil gh-size-14" aria-hidden="true" />
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-medium gh-btn-icon gh-btn-secondary gh-state-active" aria-label="Medium Icon Secondary Active">
                <i className="gh-icon gh-icon-pencil gh-size-14" aria-hidden="true" />
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-medium gh-btn-icon gh-btn-tertiary gh-state-active" aria-label="Medium Icon Tertiary Active">
                <i className="gh-icon gh-icon-pencil gh-size-14" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Hover / OnClick */}
          <div className="gh-matrix-row">
            <div className="gh-row-label">Hover/ OnClick</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-medium gh-btn-icon gh-btn-primary gh-state-hover" aria-label="Medium Icon Primary Hover">
                <i className="gh-icon gh-icon-pencil gh-size-14" aria-hidden="true" />
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-medium gh-btn-icon gh-btn-secondary gh-state-hover" aria-label="Medium Icon Secondary Hover">
                <i className="gh-icon gh-icon-pencil gh-size-14" aria-hidden="true" />
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-medium gh-btn-icon gh-btn-tertiary gh-state-hover" aria-label="Medium Icon Tertiary Hover">
                <i className="gh-icon gh-icon-pencil gh-size-14" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Disable */}
          <div className="gh-matrix-row">
            <div className="gh-row-label">Disable</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-medium gh-btn-icon gh-btn-primary gh-state-disabled" disabled aria-label="Medium Icon Primary Disabled">
                <i className="gh-icon gh-icon-pencil gh-size-14" aria-hidden="true" />
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-medium gh-btn-icon gh-btn-secondary gh-state-disabled" disabled aria-label="Medium Icon Secondary Disabled">
                <i className="gh-icon gh-icon-pencil gh-size-14" aria-hidden="true" />
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-medium gh-btn-icon gh-btn-tertiary gh-state-disabled" disabled aria-label="Medium Icon Tertiary Disabled">
                <i className="gh-icon gh-icon-pencil gh-size-14" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        {/* ==================================================================
            8. SMALL SQUARE ICON BUTTONS (28px)
            ================================================================== */}
        <section className="gh-matrix-group">
          <div className="gh-column-headers">
            <div className="gh-col-spacer"></div>
            <div className="gh-col-header">Primary</div>
            <div className="gh-col-header">Secondary</div>
            <div className="gh-col-header">Tertiary</div>
          </div>

          <div className="gh-group-title">Small (28)</div>

          {/* Active */}
          <div className="gh-matrix-row">
            <div className="gh-row-label">Active</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-small gh-btn-icon gh-btn-primary gh-state-active" aria-label="Small Icon Primary Active">
                <i className="gh-icon gh-icon-pencil gh-size-12" aria-hidden="true" />
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-small gh-btn-icon gh-btn-secondary gh-state-active" aria-label="Small Icon Secondary Active">
                <i className="gh-icon gh-icon-pencil gh-size-12" aria-hidden="true" />
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-small gh-btn-icon gh-btn-tertiary gh-state-active" aria-label="Small Icon Tertiary Active">
                <i className="gh-icon gh-icon-pencil gh-size-12" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Hover / OnClick */}
          <div className="gh-matrix-row">
            <div className="gh-row-label">Hover/ OnClick</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-small gh-btn-icon gh-btn-primary gh-state-hover" aria-label="Small Icon Primary Hover">
                <i className="gh-icon gh-icon-pencil gh-size-12" aria-hidden="true" />
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-small gh-btn-icon gh-btn-secondary gh-state-hover" aria-label="Small Icon Secondary Hover">
                <i className="gh-icon gh-icon-pencil gh-size-12" aria-hidden="true" />
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-small gh-btn-icon gh-btn-tertiary gh-state-hover" aria-label="Small Icon Tertiary Hover">
                <i className="gh-icon gh-icon-pencil gh-size-12" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Disable */}
          <div className="gh-matrix-row">
            <div className="gh-row-label">Disable</div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-small gh-btn-icon gh-btn-primary gh-state-disabled" disabled aria-label="Small Icon Primary Disabled">
                <i className="gh-icon gh-icon-pencil gh-size-12" aria-hidden="true" />
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-small gh-btn-icon gh-btn-secondary gh-state-disabled" disabled aria-label="Small Icon Secondary Disabled">
                <i className="gh-icon gh-icon-pencil gh-size-12" aria-hidden="true" />
              </button>
            </div>
            <div className="gh-btn-cell">
              <button type="button" className="gh-btn gh-btn-small gh-btn-icon gh-btn-tertiary gh-state-disabled" disabled aria-label="Small Icon Tertiary Disabled">
                <i className="gh-icon gh-icon-pencil gh-size-12" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
          </div>
        }
      />
    </div>
  );
};

export default Buttons;
