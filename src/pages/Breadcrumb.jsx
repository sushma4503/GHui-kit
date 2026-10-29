import React, { useState } from 'react';
import DocTabs from '../components/DocTabs';
import '../styles/breadcrumb.scss';

const htmlBreadcrumbCode = `<!-- 1. Standard Slash Separator Breadcrumb -->
<nav aria-label="Breadcrumb">
  <ol class="gh-monoui-breadcrumb">
    <li class="gh-breadcrumb-item">
      <a href="#home" class="gh-breadcrumb-link">Home</a>
      <span class="gh-breadcrumb-separator">/</span>
    </li>
    <li class="gh-breadcrumb-item">
      <a href="#app" class="gh-breadcrumb-link">Application Center</a>
      <span class="gh-breadcrumb-separator">/</span>
    </li>
    <li class="gh-breadcrumb-item gh-is-current" aria-current="page">
      <span>An Application</span>
    </li>
  </ol>
</nav>

<!-- 2. Breadcrumb With Optical Icons -->
<nav aria-label="Breadcrumb">
  <ol class="gh-monoui-breadcrumb">
    <li class="gh-breadcrumb-item">
      <a href="#home" class="gh-breadcrumb-link">
        <i class="gh-icon gh-icon-home gh-size-14 gh-item-icon" aria-hidden="true"></i>
        <span>Home</span>
      </a>
      <span class="gh-breadcrumb-separator">/</span>
    </li>
    <li class="gh-breadcrumb-item gh-is-current" aria-current="page">
      <span>Application List</span>
    </li>
  </ol>
</nav>`;

const scssBreadcrumbSnippets = {
  'breadcrumb.scss': `/* ==========================================================================
   MonoUI Kit - Breadcrumb Component SCSS
   ========================================================================== */

.gh-monoui-breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
  line-height: 22px;
  color: #595959;

  .gh-breadcrumb-item {
    display: inline-flex;
    align-items: center;

    .gh-breadcrumb-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #595959;
      text-decoration: none;
      transition: color 0.15s ease;
      cursor: pointer;

      &:hover {
        color: #1677ff;
      }
    }

    .gh-breadcrumb-separator {
      margin: 0 8px;
      color: #bfbfbf;
      user-select: none;
    }

    &.gh-is-current {
      font-weight: 600;
      color: #1f1f1f;
    }
  }
}`
};

/**
 * MonoUI Kit - Breadcrumb Design System Specification Page
 */
const Breadcrumb = () => {
  const [collapsedExpanded, setCollapsedExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState('An Application');

  const breadcrumbApiContent = (
    <div>
      <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: '0 0 4px 0' }}>
        Breadcrumb Component API
      </h2>
      <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 16px 0' }}>
        Hierarchy navigation props and configuration properties.
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
              <td><code>separator</code></td>
              <td><code>string | ReactNode</code></td>
              <td><code>'/'</code></td>
              <td>Custom separator character or chevron glyph between items.</td>
            </tr>
            <tr>
              <td><code>items</code></td>
              <td><code>Array&lt;&#123; title, href, icon &#125;&gt;</code></td>
              <td><code>[]</code></td>
              <td>Navigation node hierarchy configuration list.</td>
            </tr>
            <tr>
              <td><code>maxItems</code></td>
              <td><code>number</code></td>
              <td><code>undefined</code></td>
              <td>Collapses middle crumbs into an ellipsis icon if exceeded.</td>
            </tr>
            <tr>
              <td><code>aria-label</code></td>
              <td><code>string</code></td>
              <td><code>'Breadcrumb'</code></td>
              <td>Accessible Landmark region label for screen readers.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: '32px 0 4px 0' }}>
        Anatomy &amp; Token Specifications
      </h2>
      <div className="gh-specs-grid" style={{ marginTop: '16px' }}>
        <div className="gh-spec-card-item">
          <div className="gh-spec-item-title">TYPOGRAPHY</div>
          <p className="gh-spec-item-desc">
            Inter Regular 14px / 22px line height. Active current page item rendered in Semi-Bold <code>600</code>.
          </p>
        </div>
        <div className="gh-spec-card-item">
          <div className="gh-spec-item-title">SPACING &amp; GAPS</div>
          <p className="gh-spec-item-desc">
            <code>8px</code> margin between link and separator. <code>6px</code> gap between icon and text label.
          </p>
        </div>
        <div className="gh-spec-card-item">
          <div className="gh-spec-item-title">INTERACTIONS</div>
          <p className="gh-spec-item-desc">
            Ancestor links hover to Primary Blue <code>#1677FF</code> with smooth 150ms ease transitions.
          </p>
        </div>
        <div className="gh-spec-card-item">
          <div className="gh-spec-item-title">ACCESSIBILITY (WCAG)</div>
          <p className="gh-spec-item-desc">
            Wraps in <code>&lt;nav aria-label="breadcrumb"&gt;</code> with <code>aria-current="page"</code> on current item.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="gh-breadcrumb-spec-page">
      {/* Header Breadcrumbs */}
      <div className="gh-spec-header-breadcrumbs">
        NAVIGATION &bull; DESIGN SYSTEM V1.0
      </div>

      {/* Main Title */}
      <h1 className="gh-breadcrumb-main-title">Breadcrumb</h1>

      {/* Description */}
      <p className="gh-breadcrumb-description">
        A breadcrumb displays the current location within a hierarchy and allows navigation back up to parent levels. It provides secondary navigation and spatial context for deep information architectures.
      </p>

      {/* Unified Documentation Tabs System */}
      <DocTabs
        previewTabLabel="Design Matrix Preview"
        htmlCode={htmlBreadcrumbCode}
        scssSnippets={scssBreadcrumbSnippets}
        apiContent={breadcrumbApiContent}
        previewContent={
          <div className="gh-spec-card-panel">
        <div className="gh-panel-header">
          <h2 className="gh-panel-title">Breadcrumb Variations</h2>
          <p className="gh-panel-desc">
            Core presentation patterns including standard slash separators, optical icons, chevron glyphs, and overflow collapsing.
          </p>
        </div>

        <div className="gh-breadcrumb-showcase-list">
          {/* Example 1: Standard Slash Separator */}
          <div className="gh-breadcrumb-example-row">
            <span className="gh-example-label">1. Basic Breadcrumb (Slash Separator)</span>
            <div className="gh-breadcrumb-nav-box">
              <nav aria-label="Basic Breadcrumb">
                <ol className="gh-monoui-breadcrumb">
                  <li className="gh-breadcrumb-item">
                    <span className="gh-breadcrumb-link" onClick={() => setActiveItem('Home')}>Home</span>
                    <span className="gh-breadcrumb-separator">/</span>
                  </li>
                  <li className="gh-breadcrumb-item">
                    <span className="gh-breadcrumb-link" onClick={() => setActiveItem('Application Center')}>Application Center</span>
                    <span className="gh-breadcrumb-separator">/</span>
                  </li>
                  <li className="gh-breadcrumb-item">
                    <span className="gh-breadcrumb-link" onClick={() => setActiveItem('Application List')}>Application List</span>
                    <span className="gh-breadcrumb-separator">/</span>
                  </li>
                  <li className="gh-breadcrumb-item gh-is-current" aria-current="page">
                    <span>{activeItem}</span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Example 2: With Icons */}
          <div className="gh-breadcrumb-example-row">
            <span className="gh-example-label">2. With Optical Icons</span>
            <div className="gh-breadcrumb-nav-box">
              <nav aria-label="Icon Breadcrumb">
                <ol className="gh-monoui-breadcrumb">
                  <li className="gh-breadcrumb-item">
                    <span className="gh-breadcrumb-link">
                      <i className="gh-icon gh-icon-home gh-size-14 gh-item-icon" aria-hidden="true" />
                      <span>Home</span>
                    </span>
                    <span className="gh-breadcrumb-separator">/</span>
                  </li>
                  <li className="gh-breadcrumb-item">
                    <span className="gh-breadcrumb-link">
                      <i className="gh-icon gh-icon-layers gh-size-14 gh-item-icon" aria-hidden="true" />
                      <span>Application List</span>
                    </span>
                    <span className="gh-breadcrumb-separator">/</span>
                  </li>
                  <li className="gh-breadcrumb-item gh-is-current" aria-current="page">
                    <span className="gh-breadcrumb-link" style={{ cursor: 'default' }}>
                      <i className="gh-icon gh-icon-folder gh-size-14 gh-item-icon" aria-hidden="true" />
                      <span>An Application</span>
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Example 3: Chevron Separator */}
          <div className="gh-breadcrumb-example-row">
            <span className="gh-example-label">3. Chevron Separator</span>
            <div className="gh-breadcrumb-nav-box">
              <nav aria-label="Chevron Breadcrumb">
                <ol className="gh-monoui-breadcrumb">
                  <li className="gh-breadcrumb-item">
                    <span className="gh-breadcrumb-link">Home</span>
                    <span className="gh-breadcrumb-separator gh-chevron-sep">
                      <i className="gh-icon gh-icon-chevron-right gh-size-13" aria-hidden="true" />
                    </span>
                  </li>
                  <li className="gh-breadcrumb-item">
                    <span className="gh-breadcrumb-link">Components</span>
                    <span className="gh-breadcrumb-separator gh-chevron-sep">
                      <i className="gh-icon gh-icon-chevron-right gh-size-13" aria-hidden="true" />
                    </span>
                  </li>
                  <li className="gh-breadcrumb-item">
                    <span className="gh-breadcrumb-link">Navigation</span>
                    <span className="gh-breadcrumb-separator gh-chevron-sep">
                      <i className="gh-icon gh-icon-chevron-right gh-size-13" aria-hidden="true" />
                    </span>
                  </li>
                  <li className="gh-breadcrumb-item gh-is-current" aria-current="page">
                    <span>Breadcrumb</span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Example 4: Collapsed / Overflow State */}
          <div className="gh-breadcrumb-example-row">
            <span className="gh-example-label">4. Collapsed Overflow (Ellipsis Expansion)</span>
            <div className="gh-breadcrumb-nav-box">
              <nav aria-label="Collapsed Breadcrumb">
                <ol className="gh-monoui-breadcrumb">
                  <li className="gh-breadcrumb-item">
                    <span className="gh-breadcrumb-link">Home</span>
                    <span className="gh-breadcrumb-separator">/</span>
                  </li>
                  {!collapsedExpanded ? (
                    <li className="gh-breadcrumb-item">
                      <button
                        type="button"
                        className="gh-ellipsis-chip"
                        onClick={() => setCollapsedExpanded(true)}
                        title="Click to expand hidden levels"
                        aria-label="Expand collapsed breadcrumbs"
                      >
                        <i className="gh-icon gh-icon-more-horizontal gh-size-14" aria-hidden="true" />
                      </button>
                      <span className="gh-breadcrumb-separator">/</span>
                    </li>
                  ) : (
                    <>
                      <li className="gh-breadcrumb-item">
                        <span className="gh-breadcrumb-link">Workspace</span>
                        <span className="gh-breadcrumb-separator">/</span>
                      </li>
                      <li className="gh-breadcrumb-item">
                        <span className="gh-breadcrumb-link">Projects</span>
                        <span className="gh-breadcrumb-separator">/</span>
                      </li>
                    </>
                  )}
                  <li className="gh-breadcrumb-item">
                    <span className="gh-breadcrumb-link">Release 2.4</span>
                    <span className="gh-breadcrumb-separator">/</span>
                  </li>
                  <li className="gh-breadcrumb-item gh-is-current" aria-current="page">
                    <span>Change Log</span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    }
  />
    </div>
  );
};

export default Breadcrumb;
