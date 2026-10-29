import React from 'react';
import DocTabs from '../components/DocTabs';
import '../styles/grid.scss';

const htmlGridCode = `<!-- 1. 12-Column Responsive Row -->
<div class="gh-grid-row">
  <div class="gh-col gh-col-6">Span 6 (50%)</div>
  <div class="gh-col gh-col-6">Span 6 (50%)</div>
</div>

<!-- 2. Three Equal Columns (Span 4) -->
<div class="gh-grid-row">
  <div class="gh-col gh-col-4">Span 4</div>
  <div class="gh-col gh-col-4">Span 4</div>
  <div class="gh-col gh-col-4">Span 4</div>
</div>

<!-- 3. Four Column Grid (Span 3) with Gutters -->
<div class="gh-grid-row gh-gutter-24">
  <div class="gh-col gh-col-3">Column 1</div>
  <div class="gh-col gh-col-3">Column 2</div>
  <div class="gh-col gh-col-3">Column 3</div>
  <div class="gh-col gh-col-3">Column 4</div>
</div>`;

const scssGridSnippets = {
  'grid.scss': `/* ==========================================================================
   MonoUI Kit - 12-Column Responsive Grid System SCSS
   ========================================================================== */

$grid-columns: 12;
$grid-gutter: 24px;

.gh-grid-row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -($grid-gutter / 2);
  margin-right: -($grid-gutter / 2);
  box-sizing: border-box;

  .gh-col {
    position: relative;
    padding-left: ($grid-gutter / 2);
    padding-right: ($grid-gutter / 2);
    box-sizing: border-box;
  }

  /* 12-Column Percentage Spans */
  @for $i from 1 through $grid-columns {
    .gh-col-#{$i} {
      flex: 0 0 percentage($i / $grid-columns);
      max-width: percentage($i / $grid-columns);
    }
  }
}

/* Responsive Breakpoints */
@media (max-width: 768px) {
  .gh-grid-row .gh-col {
    flex: 0 0 100%;
    max-width: 100%;
  }
}`
};

/**
 * MonoUI Kit - Grid & Responsive Columns Design System Specification Page
 */
const Grid = () => {
  // 12 desktop columns
  const desktopColumns = Array.from({ length: 12 }, (_, i) => i + 1);

  // 4 mobile columns
  const mobileColumns = Array.from({ length: 4 }, (_, i) => i + 1);

  // Responsive breakpoints data
  const breakpointSpecs = [
    { device: 'Desktop Large', width: '>= 1440px', cols: '12 Columns', gutter: '24px', margin: '80px', usage: 'Primary desktop viewport layout' },
    { device: 'Desktop / Laptop', width: '1024px - 1439px', cols: '12 Columns', gutter: '20px', margin: '40px', usage: 'Standard laptop & compact monitor' },
    { device: 'Tablet Portrait', width: '768px - 1023px', cols: '8 Columns', gutter: '16px', margin: '32px', usage: 'Tablets and split-screen desktop views' },
    { device: 'Mobile Device', width: '375px - 767px', cols: '4 Columns', gutter: '16px', margin: '16px', usage: 'Smartphones & compact touch devices' },
  ];

  const gridApiContent = (
    <div>
      <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: '0 0 4px 0' }}>
        Responsive Breakpoints Specification
      </h2>
      <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 16px 0' }}>
        Standard target breakpoints, margins, and column layouts.
      </p>

      <div className="gh-specs-table-wrapper">
        <table className="gh-specs-table">
          <thead>
            <tr>
              <th>Device Viewport</th>
              <th>Target Width</th>
              <th>Column Count</th>
              <th>Gutter Width</th>
              <th>Outer Margins</th>
              <th>Layout Application</th>
            </tr>
          </thead>
          <tbody>
            {breakpointSpecs.map((item) => (
              <tr key={item.device}>
                <td><strong>{item.device}</strong></td>
                <td><code>{item.width}</code></td>
                <td>{item.cols}</td>
                <td>{item.gutter}</td>
                <td>{item.margin}</td>
                <td>{item.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: '32px 0 4px 0' }}>
        Row &amp; Col Component API
      </h2>
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
              <td><code>gutter</code></td>
              <td><code>number | [number, number]</code></td>
              <td><code>24</code></td>
              <td>Spacing between grid columns (horizontal and vertical).</td>
            </tr>
            <tr>
              <td><code>span</code></td>
              <td><code>number (1 to 12)</code></td>
              <td><code>12</code></td>
              <td>Number of grid column units spanned by this element.</td>
            </tr>
            <tr>
              <td><code>offset</code></td>
              <td><code>number (0 to 11)</code></td>
              <td><code>0</code></td>
              <td>Number of cells to offset column from the left edge.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="gh-grid-spec-page">
      {/* Breadcrumb Header */}
      <div className="gh-spec-header-breadcrumbs">
        LAYOUT &bull; DESIGN SYSTEM V1.0
      </div>

      {/* Main Title */}
      <h1 className="gh-grid-main-title">Grid &amp; Responsive Columns</h1>

      {/* Unified Documentation Tabs System */}
      <DocTabs
        previewTabLabel="Design Matrix Preview"
        htmlCode={htmlGridCode}
        scssSnippets={scssGridSnippets}
        apiContent={gridApiContent}
        previewContent={
          <>
            {/* ====================================================================
                1. Desktop Grid · 1440px Canvas
                ==================================================================== */}
            <section className="gh-grid-section-block">
        <div className="gh-grid-block-header">
          <h2 className="gh-grid-block-title">Desktop Grid &bull; 1440px Canvas</h2>
          <span className="gh-grid-block-meta">12 Columns &bull; 24px Gutters &bull; 80px Outer Margins</span>
        </div>

        <div className="gh-desktop-grid-canvas">
          <div className="gh-columns-12-wrapper">
            {desktopColumns.map((colNum) => (
              <div key={colNum} className="gh-grid-column-cell" title={`Column ${colNum} of 12`}>
                <span>{colNum}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. Mobile Grid · 375px Representation
          ==================================================================== */}
      <section className="gh-mobile-grid-section-block">
        <div className="gh-mobile-block-header">
          <h2 className="gh-mobile-block-title">Mobile Grid &bull; 375px Representation</h2>
          <span className="gh-mobile-block-meta">4 Columns &bull; 16px Gutters</span>
        </div>

        <div className="gh-mobile-device-canvas">
          <div className="gh-columns-4-wrapper">
            {mobileColumns.map((colNum) => (
              <div key={colNum} className="gh-mobile-column-cell" title={`Column ${colNum} of 4`}>
                <span>{colNum}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. Column Spanning System Showcase
          ==================================================================== */}
      <section className="gh-spanning-examples-card">
        <h2 className="gh-spanning-card-title">Column Spanning Layouts</h2>
        <p className="gh-spanning-card-desc">
          Common compositional layouts built using fractional column spans across the 12-column grid.
        </p>

        <div className="gh-spanning-stack">
          {/* Span 12 */}
          <div className="gh-span-row">
            <div className="gh-span-pill gh-col-12">Span 12 (Full Width Hero / Content)</div>
          </div>

          {/* Span 6 + 6 */}
          <div className="gh-span-row">
            <div className="gh-span-pill gh-col-6">Span 6 (50%)</div>
            <div className="gh-span-pill gh-col-6">Span 6 (50%)</div>
          </div>

          {/* Span 4 + 4 + 4 */}
          <div className="gh-span-row">
            <div className="gh-span-pill gh-col-4">Span 4 (33.3%)</div>
            <div className="gh-span-pill gh-col-4">Span 4 (33.3%)</div>
            <div className="gh-span-pill gh-col-4">Span 4 (33.3%)</div>
          </div>

          {/* Span 8 + 4 */}
          <div className="gh-span-row">
            <div className="gh-span-pill gh-col-8">Span 8 (Main Content 66.6%)</div>
            <div className="gh-span-pill gh-col-4">Span 4 (Sidebar 33.3%)</div>
          </div>

          {/* Span 3 * 4 */}
          <div className="gh-span-row">
            <div className="gh-span-pill gh-col-3">Span 3</div>
            <div className="gh-span-pill gh-col-3">Span 3</div>
            <div className="gh-span-pill gh-col-3">Span 3</div>
            <div className="gh-span-pill gh-col-3">Span 3</div>
          </div>
        </div>
      </section>
          </>
        }
      />
    </div>
  );
};

export default Grid;
