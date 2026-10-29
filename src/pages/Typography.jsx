import React, { useState } from 'react';
import DocTabs from '../components/DocTabs';
import '../styles/typography.scss';

const htmlTypographyCode = `<!-- 1. Headings Hierarchy -->
<h1 class="gh-spec-heading gh-h1-spec">H1 Display Heading (38px)</h1>
<h2 class="gh-spec-heading gh-h2-spec">H2 Section Heading (30px)</h2>
<h3 class="gh-spec-heading gh-h3-spec">H3 Subsection Heading (24px)</h3>
<h4 class="gh-spec-heading gh-h4-spec">H4 Component Title (20px)</h4>
<h5 class="gh-spec-heading gh-h5-spec">H5 Small Header (18px)</h5>

<!-- 2. Body Text & Muted Variations -->
<p class="gh-text-primary">Primary high-contrast body reading text.</p>
<p class="gh-text-secondary">Secondary supporting description copy.</p>
<span class="gh-text-muted">Tertiary subtle metadata or placeholder text.</span>

<!-- 3. Monospace Code & Caption -->
<code>const theme = 'mono-ui';</code>
<small class="gh-text-footnote">Footnote / Caption 12px description</small>`;

const scssTypographySnippets = {
  'typography.scss': `/* ==========================================================================
   MonoUI Kit - Typography Design System Main SCSS Entry
   Each typography concern has its own separate SCSS file:
     - typography/_foundational.scss
     - typography/_headings.scss
     - typography/_body.scss
     - typography/_matrix.scss
   ========================================================================== */
@use 'typography/foundational';
@use 'typography/headings';
@use 'typography/body';
@use 'typography/matrix';`,

  'typography/_headings.scss': `.gh-spec-heading {
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  color: #121212;
  margin: 0;

  &.gh-h1-spec { font-size: 38px; line-height: 46px; }
  &.gh-h2-spec { font-size: 30px; line-height: 40px; }
  &.gh-h3-spec { font-size: 24px; line-height: 32px; }
  &.gh-h4-spec { font-size: 20px; line-height: 28px; }
  &.gh-h5-spec { font-size: 18px; line-height: 22px; }
}`,

  'typography/_body.scss': `.gh-text-primary {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 14px;
  line-height: 22px;
  color: #121212;
}

.gh-text-secondary {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 14px;
  line-height: 22px;
  color: #525252;
}

.gh-text-footnote {
  font-size: 12px;
  line-height: 18px;
  color: #737373;
}`
};

const typographyApiContent = (
  <div>
    <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: '0 0 4px 0' }}>
      Typography Scale &amp; Font Hierarchy
    </h2>
    <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 16px 0' }}>
      Font family pairings, line heights, and weights across the typography scale.
    </p>

    <div className="gh-specs-table-wrapper">
      <table className="gh-specs-table">
        <thead>
          <tr>
            <th>Element</th>
            <th>Font Family</th>
            <th>Size / Line Height</th>
            <th>Weight</th>
            <th>Application</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>Display</code></td>
            <td>Rubik</td>
            <td>48px / 1.1</td>
            <td>Bold (700)</td>
            <td>Marketing hero headlines</td>
          </tr>
          <tr>
            <td><code>Heading 1</code></td>
            <td>Rubik</td>
            <td>38px / 46px</td>
            <td>Bold (700)</td>
            <td>Top-level page titles</td>
          </tr>
          <tr>
            <td><code>Heading 2</code></td>
            <td>Rubik</td>
            <td>30px / 40px</td>
            <td>Bold (700)</td>
            <td>Major section headers</td>
          </tr>
          <tr>
            <td><code>Heading 3</code></td>
            <td>Rubik</td>
            <td>24px / 32px</td>
            <td>Semi-Bold (600)</td>
            <td>Card and panel headers</td>
          </tr>
          <tr>
            <td><code>Heading 4</code></td>
            <td>Rubik</td>
            <td>20px / 28px</td>
            <td>Semi-Bold (600)</td>
            <td>Group subheaders</td>
          </tr>
          <tr>
            <td><code>Heading 5</code></td>
            <td>Rubik</td>
            <td>18px / 22px</td>
            <td>Semi-Bold (600)</td>
            <td>Modal and popup titles</td>
          </tr>
          <tr>
            <td><code>Body Regular</code></td>
            <td>Source Sans 3</td>
            <td>14px / 22px</td>
            <td>Regular (400)</td>
            <td>Standard reading copy</td>
          </tr>
          <tr>
            <td><code>Footnote / Caption</code></td>
            <td>Source Sans 3</td>
            <td>12px / 18px</td>
            <td>Regular (400)</td>
            <td>Auxiliary notes and labels</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

/**
 * MonoUI Kit - Typography Design System Specification Page
 * Faithfully matches the exact layout, font pairings (Rubik & Source Sans Pro),
 * headings scale, and body variations from the design system sheet.
 * All class names are prefixed with "gh-" as requested.
 */
const Typography = () => {
  const [editableText, setEditableText] = useState('Editable text');

  // Foundational Type Scale specification items matching the Inter design system sheet
  const foundationalScaleItems = [
    {
      id: 'display',
      name: 'Display',
      specs: '48px · Bold · LH 1.1',
      specimen: 'The quick brown fox jumps',
      className: 'gh-type-display',
    },
    {
      id: 'heading-1',
      name: 'Heading 1',
      specs: '32px · Bold · LH 1.2',
      specimen: 'The quick brown fox jumps over',
      className: 'gh-type-heading-1',
    },
    {
      id: 'heading-2',
      name: 'Heading 2',
      specs: '24px · Semi Bold · LH 1.3',
      specimen: 'The quick brown fox jumps over the lazy',
      className: 'gh-type-heading-2',
    },
    {
      id: 'heading-3',
      name: 'Heading 3',
      specs: '20px · Semi Bold · LH 1.4',
      specimen: 'The quick brown fox jumps over the lazy dog',
      className: 'gh-type-heading-3',
    },
    {
      id: 'heading-4',
      name: 'Heading 4',
      specs: '16px · Semi Bold · LH 1.4',
      specimen: 'The quick brown fox jumps over the lazy dog.',
      className: 'gh-type-heading-4',
    },
    {
      id: 'body-large',
      name: 'Body Large',
      specs: '16px · Regular · LH 1.5',
      specimen: 'The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.',
      className: 'gh-type-body-large',
    },
    {
      id: 'body',
      name: 'Body',
      specs: '14px · Regular · LH 1.5',
      specimen: 'The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.',
      className: 'gh-type-body',
    },
    {
      id: 'caption',
      name: 'Caption',
      specs: '12px · Regular · LH 1.5',
      specimen: 'The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.',
      className: 'gh-type-caption',
    },
    {
      id: 'overline',
      name: 'Overline',
      specs: '11px · Medium · LH 1',
      specimen: 'FOUNDATIONAL TYPE SCALE SPECIFICATION',
      className: 'gh-type-overline',
    },
  ];

  return (
    <div className="gh-typography-spec-page">
      {/* 1. Main Title */}
      <h1 className="gh-typography-main-title">
        TYPOGRAPHY - Rubik &amp; Source Sans Pro
      </h1>

      {/* Unified Documentation Tabs System */}
      <DocTabs
        previewTabLabel="Design Matrix Preview"
        htmlCode={htmlTypographyCode}
        scssSnippets={scssTypographySnippets}
        apiContent={typographyApiContent}
        previewContent={
          <>
            {/* 2. Headings Scale Showcase */}
            <div className="gh-headings-spec-group">
        <h1 className="gh-spec-heading gh-h1-spec">H1. Groundhog-38px/46</h1>
        <h2 className="gh-spec-heading gh-h2-spec">H2. Groundhog-30px/40</h2>
        <h3 className="gh-spec-heading gh-h3-spec">H3. Groundhog-24px/32</h3>
        <h4 className="gh-spec-heading gh-h4-spec">H4. Groundhog-20px/28</h4>
        <h5 className="gh-spec-heading gh-h5-spec">H5. Groundhog-18px/22</h5>
      </div>

      {/* 3. Body & Text Variations Matrix */}
      <div className="gh-body-spec-matrix">
        {/* Row 1: Regular (primary, secondary, button text, editable text) */}
        <div className="gh-spec-row">
          <div className="gh-spec-meta-label">
            Body - Regular -14px/22
          </div>
          <div className="gh-spec-value-col">
            <span className="gh-text-primary">Groundhog - primary</span>
            <span className="gh-text-secondary">Groundhog - secondary</span>
          </div>
          <div className="gh-spec-action-col">
            <span className="gh-spec-button-text">Button text</span>
          </div>
          <div className="gh-spec-editable-col">
            <span
              className="gh-spec-editable-text"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setEditableText(e.currentTarget.textContent || 'Editable text')}
            >
              {editableText}
            </span>
          </div>
        </div>

        {/* Row 2: Regular (danger, disabled, warning, mark) */}
        <div className="gh-spec-row">
          <div className="gh-spec-meta-label">
            Body - Regular -14px/22
          </div>
          <div className="gh-spec-value-col">
            <span className="gh-text-danger">Groundhog - danger</span>
            <span className="gh-text-disabled">Groundhog - disabled</span>
            <span className="gh-text-warning">Groundhog - warning</span>
            <span className="gh-text-mark">Groundhog - mark</span>
          </div>
          <div></div>
          <div></div>
        </div>

        {/* Row 3: Strong */}
        <div className="gh-spec-row">
          <div className="gh-spec-meta-label gh-strong-label">
            Body - Strong -14px/22
          </div>
          <div className="gh-spec-value-col">
            <span className="gh-text-strong">Groundhog - strong</span>
          </div>
          <div></div>
          <div></div>
        </div>

        {/* Row 4: Text Styles (underline, strikethrough, italic) */}
        <div className="gh-spec-row">
          <div className="gh-spec-meta-label">
            <div className="gh-label-stacked-list">
              <span>Body 14 - underline</span>
              <span>Body 14 - strikethrough</span>
              <span>Body 14 - italic</span>
            </div>
          </div>
          <div className="gh-spec-value-col">
            <span className="gh-text-underline">Groundhog</span>
            <span className="gh-text-strikethrough">Groundhog</span>
            <span className="gh-text-italic">Groundhog</span>
          </div>
          <div></div>
          <div></div>
        </div>

        {/* Row 5: Code */}
        <div className="gh-spec-row">
          <div className="gh-spec-meta-label">
            Body 14 - code
          </div>
          <div className="gh-spec-value-col">
            <span className="gh-text-code">Groundhog</span>
          </div>
          <div></div>
          <div></div>
        </div>

        {/* Row 6: Footnote */}
        <div className="gh-spec-row">
          <div className="gh-spec-meta-label gh-footnote-label">
            Footnote 12 - description
          </div>
          <div className="gh-spec-value-col">
            <span className="gh-text-footnote">Footnote 12 - description</span>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* ====================================================================
          4. Foundational Type Scale Specification (Inter Design System)
          ==================================================================== */}
      <section className="gh-foundational-type-scale-section">
        {/* Section Title */}
        <h2 className="gh-foundational-main-title">Typography</h2>

        {/* List of Type Specimen Rows */}
        <div className="gh-foundational-scale-list">
          {foundationalScaleItems.map((item) => (
            <div key={item.id} className="gh-foundational-scale-row">
              <div className="gh-scale-meta-col">
                <span className="gh-scale-item-name">{item.name}</span>
                <span className="gh-scale-item-specs">{item.specs}</span>
              </div>
              <div className="gh-scale-specimen-col">
                <div className={`gh-specimen-text ${item.className}`}>
                  {item.specimen}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
          </>
        }
      />
    </div>
  );
};

export default Typography;
