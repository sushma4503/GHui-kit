import React, { useState, useMemo } from 'react';
import DocTabs from '../components/DocTabs';
import '../styles/icons.scss';

// Icon library items mapping - pure class names, zero SVG elements
const iconList = [
  { name: 'Trash2', slug: 'trash-2' },
  { name: 'Home', slug: 'home' },
  { name: 'Info', slug: 'info' },
  { name: 'Pencil', slug: 'pencil' },
  { name: 'FileText', slug: 'file-text' },
  { name: 'Move', slug: 'move' },
  { name: 'Target', slug: 'target' },
  { name: 'Sun', slug: 'sun' },
  { name: 'RefreshCw', slug: 'refresh-cw' },
  { name: 'Menu', slug: 'menu' },
  { name: 'LayoutGrid', slug: 'layout-grid' },
  { name: 'Search', slug: 'search' },
  { name: 'User', slug: 'user' },
  { name: 'Plus', slug: 'plus' },
  { name: 'History', slug: 'history' },
  { name: 'Ban', slug: 'ban' },
  { name: 'Wifi', slug: 'wifi' },
  { name: 'Download', slug: 'download' },
  { name: 'Filter', slug: 'filter' },
  { name: 'CheckCircle2', slug: 'check-circle-2' },
  { name: 'Folder', slug: 'folder' },
  { name: 'MapPin', slug: 'map-pin' },
  { name: 'RotateCw', slug: 'rotate-cw' },
  { name: 'Camera', slug: 'camera' },
  { name: 'SkipForward', slug: 'skip-forward' },
  { name: 'FastForward', slug: 'fast-forward' },
  { name: 'ChevronsLeft', slug: 'chevrons-left' },
  { name: 'ChevronsRight', slug: 'chevrons-right' },
  { name: 'ChevronDown', slug: 'chevron-down' },
  { name: 'LogOut', slug: 'log-out' },
  { name: 'Pin', slug: 'pin' },
  { name: 'Cloud', slug: 'cloud' },
  { name: 'Copy', slug: 'copy' },
  { name: 'Upload', slug: 'upload' },
  { name: 'ExternalLink', slug: 'external-link' },
  { name: 'Bell', slug: 'bell' },
  { name: 'UserCheck', slug: 'user-check' },
  { name: 'Archive', slug: 'archive' },
  { name: 'Lock', slug: 'lock' },
  { name: 'Unlock', slug: 'unlock' },
  { name: 'Maximize2', slug: 'maximize-2' },
  { name: 'Minimize2', slug: 'minimize-2' },
  { name: 'Flag', slug: 'flag' },
  { name: 'Calendar', slug: 'calendar' },
  { name: 'Settings', slug: 'settings' },
  { name: 'ZoomIn', slug: 'zoom-in' },
  { name: 'ZoomOut', slug: 'zoom-out' },
  { name: 'EyeOff', slug: 'eye-off' },
  { name: 'Eye', slug: 'eye' },
  { name: 'Printer', slug: 'printer' },
  { name: 'ArrowRight', slug: 'arrow-right' },
  { name: 'ArrowLeft', slug: 'arrow-left' },
  { name: 'Paperclip', slug: 'paperclip' },
  { name: 'MessageSquare', slug: 'message-square' },
  { name: 'ShieldCheck', slug: 'shield-check' }
];

// 5 Optical Sizes defined in the design spec
const sizeSpecs = [
  { size: 12, label: '12x12' },
  { size: 14, label: '14x14' },
  { size: 16, label: '16x16' },
  { size: 20, label: '20x20' },
  { size: 24, label: '24x24' }
];

// 3 Color tokens defined in the design spec
const colorColumns = [
  { code: '646464', color: '#646464', title: '646464' },
  { code: 'CACACA', color: '#cacaca', title: 'CACACA' },
  { code: 'BDBDBD', color: '#bdbdbd', title: 'BDBDBD' }
];

const htmlIconsCode = `<!-- 1. Pure Class-Based Icon Usage (Zero SVGs in DOM) -->
<i class="gh-icon gh-icon-search gh-size-16" aria-hidden="true"></i>
<i class="gh-icon gh-icon-home gh-size-20" aria-hidden="true"></i>
<i class="gh-icon gh-icon-pencil gh-size-14" aria-hidden="true"></i>
<i class="gh-icon gh-icon-trash-2 gh-size-12" aria-hidden="true"></i>

<!-- 2. Optical Sizes Matrix (12px, 14px, 16px, 20px, 24px) -->
<i class="gh-icon gh-icon-settings gh-size-12" aria-hidden="true"></i>
<i class="gh-icon gh-icon-settings gh-size-14" aria-hidden="true"></i>
<i class="gh-icon gh-icon-settings gh-size-16" aria-hidden="true"></i>
<i class="gh-icon gh-icon-settings gh-size-20" aria-hidden="true"></i>
<i class="gh-icon gh-icon-settings gh-size-24" aria-hidden="true"></i>

<!-- 3. Monochrome & Brand Color Tokens -->
<i class="gh-icon gh-icon-file-text gh-size-16" style="color: #646464;" aria-hidden="true"></i>
<i class="gh-icon gh-icon-file-text gh-size-16" style="color: #cacaca;" aria-hidden="true"></i>
<i class="gh-icon gh-icon-file-text gh-size-16" style="color: #bdbdbd;" aria-hidden="true"></i>
<i class="gh-icon gh-icon-sun gh-size-16" style="color: #fa8c16;" aria-hidden="true"></i>

<!-- 4. Inside Action Buttons & Form Controls -->
<button type="button" class="gh-btn gh-btn-medium gh-btn-primary">
  <i class="gh-icon gh-icon-download gh-size-14" aria-hidden="true"></i>
  <span>Download Export</span>
</button>`;

const scssIconsSnippets = {
  'icons.scss': `/* ==========================================================================
   MonoUI Kit - Icons Design System Specifications (SCSS)
   Matches the exact optical size matrix (12x12, 14x14, 16x16, 20x20, 24x24)
   across core color tokens (646464, CACACA, BDBDBD).
   All classes use the "gh-" prefix.
   ========================================================================== */
@use 'icon_classes';

.gh-icons-spec-page {
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;

  /* Toolbar Filter & Search Controls */
  .gh-icons-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 36px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f0f0f0;
    flex-wrap: wrap;

    .gh-search-input-wrapper {
      position: relative;
      width: 280px;

      .gh-search-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: #9ca3af;
        pointer-events: none;
      }

      .gh-search-input {
        width: 100%;
        height: 38px;
        padding: 0 14px 0 36px;
        border-radius: 8px;
        border: 1px solid #e5e7eb;
        background-color: #fafafa;
        font-size: 13px;
        color: #111827;
        transition: all 0.15s ease;

        &:focus {
          outline: none;
          background-color: #ffffff;
          border-color: #fa8c16;
          box-shadow: 0 0 0 3px rgba(250, 140, 22, 0.12);
        }
      }
    }

    .gh-size-filter-tabs {
      display: flex;
      align-items: center;
      gap: 6px;
      background-color: #f3f4f6;
      padding: 3px;
      border-radius: 8px;

      .gh-size-filter-btn {
        padding: 6px 12px;
        font-size: 12px;
        font-weight: 600;
        border: none;
        background: transparent;
        color: #4b5563;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.15s ease;

        &.gh-active {
          background-color: #ffffff;
          color: #111827;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }
      }
    }
  }

  /* Optical Sizes Matrix Grid */
  .gh-icons-matrix-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .gh-matrix-size-section {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);

    .gh-color-columns-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;

      @media (max-width: 900px) {
        grid-template-columns: 1fr;
      }
    }

    .gh-color-group-column {
      display: flex;
      flex-direction: column;
      gap: 14px;

      .gh-group-meta-header {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 700;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        color: #374151;
        padding-bottom: 8px;
        border-bottom: 1px solid #f3f4f6;

        .gh-color-dot-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
      }

      .gh-icons-grid-canvas {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(36px, 1fr));
        gap: 8px;
        background-color: #fafafa;
        border: 1px solid #f3f4f6;
        border-radius: 8px;
        padding: 12px;
        min-height: 180px;

        .gh-icon-tile-cell {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.15s ease;
          background-color: #ffffff;
          border: 1px solid #f0f0f0;

          &:hover {
            background-color: #fff7e6;
            border-color: #ffd591;
            transform: scale(1.15);
            box-shadow: 0 4px 10px rgba(250, 140, 22, 0.15);
            z-index: 2;
          }
        }
      }
    }
  }
}`,

  '_icon_classes.scss': `/* ==========================================================================
   MonoUI Kit - Class-Based Icons System (No SVGs in DOM)
   All classes use the "gh-" prefix.
   Usage: <i class="gh-icon gh-icon-[name] gh-size-[12|14|16|20|24]"></i>
   ========================================================================== */

.gh-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  background-color: currentColor;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  vertical-align: -0.15em;
  line-height: 1;
  flex-shrink: 0;
  speak: never;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  box-sizing: content-box;

  /* Optical Size Tokens */
  &.gh-size-10 { width: 10px; height: 10px; }
  &.gh-size-12 { width: 12px; height: 12px; }
  &.gh-size-14 { width: 14px; height: 14px; }
  &.gh-size-16 { width: 16px; height: 16px; }
  &.gh-size-20 { width: 20px; height: 20px; }
  &.gh-size-24 { width: 24px; height: 24px; }
  &.gh-size-32 { width: 32px; height: 32px; }

  /* Core Design System Color Tokens */
  &.gh-color-646464 { color: #646464; }
  &.gh-color-cacaca { color: #cacaca; }
  &.gh-color-bdbdbd { color: #bdbdbd; }
  &.gh-color-amber  { color: #fa8c16; }

  /* Vector SVG Masks (55+ System Icons) */
  &.gh-icon-search {
    mask-image: url("data:image/svg+xml,...");
    -webkit-mask-image: url("data:image/svg+xml,...");
  }
  &.gh-icon-home {
    mask-image: url("data:image/svg+xml,...");
    -webkit-mask-image: url("data:image/svg+xml,...");
  }
  &.gh-icon-pencil {
    mask-image: url("data:image/svg+xml,...");
    -webkit-mask-image: url("data:image/svg+xml,...");
  }
  &.gh-icon-trash-2 {
    mask-image: url("data:image/svg+xml,...");
    -webkit-mask-image: url("data:image/svg+xml,...");
  }
  /* (55+ total mask icons generated into _icon_classes.scss) */
}`
};

const iconsApiContent = (
  <div className="gh-specs-table-wrapper">
    <h3 style={{ fontSize: '15px', fontWeight: 700, margin: '0 0 12px 0', color: '#111827' }}>
      Class Architecture & Attributes
    </h3>
    <table className="gh-specs-table">
      <thead>
        <tr>
          <th style={{ width: '25%' }}>Class / Attribute</th>
          <th style={{ width: '40%' }}>Description</th>
          <th style={{ width: '20%' }}>Type / Values</th>
          <th style={{ width: '15%' }}>Default</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>.gh-icon</code></td>
          <td>Base icon container with SVG mask clipping and currentColor fill.</td>
          <td><code>CSS Class</code></td>
          <td>Required</td>
        </tr>
        <tr>
          <td><code>.gh-icon-[name]</code></td>
          <td>Specific glyph selector (e.g. <code>gh-icon-search</code>, <code>gh-icon-home</code>, <code>gh-icon-pencil</code>).</td>
          <td><code>string (slug)</code></td>
          <td>Required</td>
        </tr>
        <tr>
          <td><code>.gh-size-[size]</code></td>
          <td>Explicit optical size constraint: <code>gh-size-12</code>, <code>gh-size-14</code>, <code>gh-size-16</code>, <code>gh-size-20</code>, <code>gh-size-24</code>.</td>
          <td><code>12 | 14 | 16 | 20 | 24</code></td>
          <td><code>gh-size-16</code></td>
        </tr>
        <tr>
          <td><code>style="color: ..."</code></td>
          <td>Direct color fill inheritance via CSS currentColor. Supports any hex, hsl, or rgb value.</td>
          <td><code>CSS Color</code></td>
          <td><code>currentColor</code></td>
        </tr>
        <tr>
          <td><code>aria-hidden="true"</code></td>
          <td>Accessibility attribute to hide purely decorative iconography from screen readers.</td>
          <td><code>boolean</code></td>
          <td><code>true</code></td>
        </tr>
      </tbody>
    </table>

    <h3 style={{ fontSize: '15px', fontWeight: 700, margin: '28px 0 12px 0', color: '#111827' }}>
      Optical Size Tokens Specification
    </h3>
    <table className="gh-specs-table">
      <thead>
        <tr>
          <th style={{ width: '20%' }}>Token Class</th>
          <th style={{ width: '20%' }}>Dimensions</th>
          <th style={{ width: '60%' }}>Recommended UI Usage Context</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>.gh-size-12</code></td>
          <td>12 &times; 12 px</td>
          <td>Compact badge tags, micro inline counters, dense table status icons.</td>
        </tr>
        <tr>
          <td><code>.gh-size-14</code></td>
          <td>14 &times; 14 px</td>
          <td>Dense form controls, input prefix icons, dropdown menu item affixes.</td>
        </tr>
        <tr>
          <td><code>.gh-size-16</code></td>
          <td>16 &times; 16 px</td>
          <td>Standard button icons, table row actions, breadcrumb delimiters.</td>
        </tr>
        <tr>
          <td><code>.gh-size-20</code></td>
          <td>20 &times; 20 px</td>
          <td>Card headers, toolbar primary triggers, navigation rail icons.</td>
        </tr>
        <tr>
          <td><code>.gh-size-24</code></td>
          <td>24 &times; 24 px</td>
          <td>Hero banner icons, modal dialog headings, empty state illustrations.</td>
        </tr>
      </tbody>
    </table>
  </div>
);

/**
 * MonoUI Kit - Icons Design System Specification Page
 * Renders icons strictly using CSS class names (gh-icon gh-icon-[name]),
 * with zero SVG elements in the markup.
 * All class names are prefixed with "gh-" as requested.
 */
const Icons = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSizeFilter, setSelectedSizeFilter] = useState('ALL');
  const [copiedSnippet, setCopiedSnippet] = useState(null);

  // Filter icons by search query
  const filteredIcons = useMemo(() => {
    if (!searchQuery.trim()) return iconList;
    const q = searchQuery.toLowerCase();
    return iconList.filter(
      (item) => item.name.toLowerCase().includes(q) || item.slug.includes(q)
    );
  }, [searchQuery]);

  // Filter sizes based on active tab
  const visibleSizes = useMemo(() => {
    if (selectedSizeFilter === 'ALL') return sizeSpecs;
    return sizeSpecs.filter((s) => s.label === selectedSizeFilter);
  }, [selectedSizeFilter]);

  // Copy icon snippet handler
  const handleCopy = (item) => {
    const classSnippet = `<i className="gh-icon gh-icon-${item.slug}"></i>`;
    navigator.clipboard?.writeText(classSnippet);
    setCopiedSnippet(classSnippet);
    setTimeout(() => setCopiedSnippet(null), 2500);
  };

  return (
    <div className="gh-icons-spec-page">
      {/* 1. Breadcrumbs */}
      <div className="gh-spec-header-breadcrumbs">
        COMPONENTS &bull; DESIGN SYSTEM V1.0
      </div>

      {/* 2. Main Title & Description */}
      <h1 className="gh-spec-title">Icons</h1>
      <p className="gh-spec-description">
        Standard iconography matrix across optical sizes (12px, 14px, 16px, 20px, 24px) and core token shades (#646464, #CACACA, #BDBDBD). All icons are rendered strictly with class names (<code>.gh-icon .gh-icon-[name]</code>) without inline SVGs.
      </p>

      {/* 3. Universal 4-Tab Documentation System */}
      <DocTabs
        previewTabLabel="Design Matrix Preview"
        htmlCode={htmlIconsCode}
        scssSnippets={scssIconsSnippets}
        apiContent={iconsApiContent}
        previewContent={
          <div className="gh-doc-card">
            {/* Toolbar: Search & Size Filter */}
            <div className="gh-icons-toolbar">
              <div className="gh-search-input-wrapper">
                <i className="gh-icon gh-icon-search gh-size-16 gh-search-icon" aria-hidden="true" />
                <input
                  type="text"
                  className="gh-search-input"
                  placeholder="Search icon classes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="gh-size-filter-tabs">
                <button
                  type="button"
                  className={`gh-size-filter-btn ${selectedSizeFilter === 'ALL' ? 'gh-active' : ''}`}
                  onClick={() => setSelectedSizeFilter('ALL')}
                >
                  All Sizes
                </button>
                {sizeSpecs.map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    className={`gh-size-filter-btn ${selectedSizeFilter === s.label ? 'gh-active' : ''}`}
                    onClick={() => setSelectedSizeFilter(s.label)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Optical Sizes Matrix Grid */}
            <div className="gh-icons-matrix-container">
              {visibleSizes.map((sizeSpec) => (
                <section key={sizeSpec.label} className="gh-matrix-size-section">
                  <div className="gh-color-columns-grid">
                    {colorColumns.map((col) => (
                      <div key={`${sizeSpec.label}-${col.code}`} className="gh-color-group-column">
                        {/* Column Header Label (e.g. 12x12 ( 646464 )) */}
                        <div className="gh-group-meta-header">
                          <span
                            className="gh-color-dot-indicator"
                            style={{ backgroundColor: col.color }}
                          />
                          <span>
                            {sizeSpec.label} ( {col.code} )
                          </span>
                        </div>

                        {/* Icons Grid Canvas */}
                        <div className={`gh-icons-grid-canvas gh-size-${sizeSpec.size}`}>
                          {filteredIcons.map((item) => (
                            <div
                              key={`${sizeSpec.label}-${col.code}-${item.name}`}
                              className="gh-icon-tile-cell"
                              title={`gh-icon gh-icon-${item.slug} (${sizeSpec.label}, #${col.code}) - Click to copy`}
                              onClick={() => handleCopy(item)}
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  handleCopy(item);
                                }
                              }}
                            >
                              <i
                                className={`gh-icon gh-icon-${item.slug} gh-size-${sizeSpec.size}`}
                                style={{ color: col.color }}
                                aria-hidden="true"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Copy Toast Feedback */}
            {copiedSnippet && (
              <div className="gh-copy-toast">
                Copied <strong>{copiedSnippet}</strong> to clipboard
              </div>
            )}
          </div>
        }
      />
    </div>
  );
};

export default Icons;
