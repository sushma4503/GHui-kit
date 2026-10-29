import React, { useState } from 'react';
import DocTabs from '../components/DocTabs';
import '../styles/dropdown.scss';

const htmlDropdownCode = `<!-- 1. Standard Popover Action Dropdown with Triangle -->
<div class="gh-popover-card-container">
  <div class="gh-popover-triangle-arrow"></div>
  <ul class="gh-popover-menu-list">
    <li class="gh-popover-menu-item"><span>Action Item 1</span></li>
    <li class="gh-popover-menu-item gh-is-active"><span>Active Action</span></li>
    <li class="gh-popover-menu-item"><span>Action Item 3</span></li>
  </ul>
</div>

<!-- 2. Searchable Filter Dropdown -->
<div class="gh-search-dropdown-card">
  <div class="gh-search-input-header">
    <i class="gh-icon gh-icon-search gh-size-14" aria-hidden="true"></i>
    <input type="text" class="gh-search-input-field" placeholder="Search Users" />
  </div>
  <ul class="gh-search-results-list">
    <li class="gh-search-result-item"><span>User 1</span></li>
    <li class="gh-search-result-item"><span>User 2</span></li>
  </ul>
</div>`;

const scssDropdownSnippets = {
  'dropdown.scss': `/* ==========================================================================
   MonoUI Kit - Dropdown Component SCSS
   ========================================================================== */

.gh-popover-card-container {
  position: relative;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid #f0f0f0;
  width: 220px;
  padding: 6px 0;

  .gh-popover-triangle-arrow {
    position: absolute;
    top: -5px;
    left: 20px;
    width: 10px;
    height: 10px;
    background: #ffffff;
    transform: rotate(45deg);
    border-top: 1px solid #f0f0f0;
    border-left: 1px solid #f0f0f0;
  }

  .gh-popover-menu-item {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    font-size: 13px;
    color: #262626;
    cursor: pointer;
    transition: background-color 0.15s ease;

    &:hover,
    &.gh-is-active {
      background-color: #f5f5f5;
      color: #000000;
    }
  }
}`
};

const dropdownApiContent = (
  <div>
    <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: '0 0 4px 0' }}>
      Dropdown Component API
    </h2>
    <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 16px 0' }}>
      Properties and configuration options for popover, checklist, and searchable dropdowns.
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
            <td><code>trigger</code></td>
            <td><code>'hover' | 'click' | 'contextMenu'</code></td>
            <td><code>'click'</code></td>
            <td>Interaction mode that opens the dropdown menu overlay.</td>
          </tr>
          <tr>
            <td><code>placement</code></td>
            <td><code>'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'</code></td>
            <td><code>'bottomLeft'</code></td>
            <td>Positioning alignment of the popover relative to anchor.</td>
          </tr>
          <tr>
            <td><code>arrow</code></td>
            <td><code>boolean</code></td>
            <td><code>true</code></td>
            <td>Whether to render the pointing triangle arrow indicator.</td>
          </tr>
          <tr>
            <td><code>disabled</code></td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
            <td>Disables dropdown trigger interaction.</td>
          </tr>
          <tr>
            <td><code>searchable</code></td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
            <td>Renders integrated real-time text filter bar within header.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

/**
 * MonoUI Kit - Dropdown Design System Specification Page
 * Faithfully matches the exact layout, popover triangles, filter checkboxes,
 * cascader submenus, and searchable dropdowns from the design specification sheet.
 * All class names are prefixed with "gh-" as requested.
 */
const Dropdown = () => {
  // Filter checkboxes state
  const [filterState, setFilterState] = useState({
    loading: true,
    blasting: false,
    backfill: false,
    bolting1: true,
  });

  // Group filter sub-checkboxes state
  const [groupSubChecks, setGroupSubChecks] = useState({
    bolting2: false,
    longSupport: false,
    rehab: false,
    onDemand: false,
    hauling: false,
  });

  // Cascader active category and selected sub-item
  const [cascaderActiveCategory, setCascaderActiveCategory] = useState('Down');
  const [cascaderSelectedItem, setCascaderSelectedItem] = useState('012PEDF');

  // Search input state
  const [searchQuery, setSearchQuery] = useState('');

  // Cascader data mapping
  const cascaderCategories = [
    { id: 'Active', label: 'Active' },
    { id: 'Delay', label: 'Delay' },
    { id: 'Down', label: 'Down' },
    { id: 'Standby', label: 'Standby' },
    { id: 'Planned Down', label: 'Planned Down' },
    { id: 'Utilitywork', label: 'Utilitywork' },
  ];

  const cascaderSubItems = {
    Active: ['101ACT', '102ACT', '103ACT', '104ACT'],
    Delay: ['201DLY', '202DLY', '203DLY'],
    Down: ['45SGFD', '435DFF', '456FDS', '5345GF', '012PEDF', '34DFA53'],
    Standby: ['301STB', '302STB', '303STB'],
    'Planned Down': ['401PLN', '402PLN'],
    Utilitywork: ['501UTL', '502UTL', '503UTL'],
  };

  // Search users mock list
  const userResults = [
    'Gravida sea nulla',
    'Gravida sea nulla',
    'Gravida sea nulla',
    'Gravida sea nulla',
    'Gravida sea nulla',
  ];

  const filteredUserResults = userResults.filter((u) =>
    u.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="gh-dropdown-spec-page">
      {/* Breadcrumb Header */}
      <div className="gh-spec-header-breadcrumbs">
        NAVIGATION &bull; DESIGN SYSTEM V1.0
      </div>

      {/* Main Title */}
      <h1 className="gh-dropdown-main-title">Dropdown</h1>

      {/* Description */}
      <p className="gh-dropdown-description">
        Dropdown menus display a contextual list of actions, options, or navigation destinations. They trigger from buttons, inputs, or selection surfaces, supporting single actions, multi-select filters, cascader hierarchies, and searchable filters.
      </p>

      {/* Unified Documentation Tabs System */}
      <DocTabs
        previewTabLabel="Design Matrix Preview"
        htmlCode={htmlDropdownCode}
        scssSnippets={scssDropdownSnippets}
        apiContent={dropdownApiContent}
        previewContent={
          <>
            {/* ====================================================================
                1. Popover Menu Dropdowns (Pointer Triangle & Scaled Heights)
                ==================================================================== */}
            <h2 className="gh-dropdown-section-title">Popover Menu Dropdowns</h2>
            <p className="gh-dropdown-section-desc">
              Standard popover action lists with top alignment pointer triangles across varying item heights and scroll overflow states.
            </p>

      <div className="gh-popover-dropdowns-matrix">
        <div className="gh-popover-row-grid">
          {/* Card 1: 2 items */}
          <div className="gh-popover-card">
            <ul className="gh-popover-menu-list">
              <li className="gh-popover-item gh-is-highlighted">1st menu item</li>
              <li className="gh-popover-item">2nd menu item</li>
            </ul>
          </div>

          {/* Card 2: 6 items (3rd highlighted) */}
          <div className="gh-popover-card">
            <ul className="gh-popover-menu-list">
              <li className="gh-popover-item">1st menu item</li>
              <li className="gh-popover-item">2nd menu item</li>
              <li className="gh-popover-item gh-is-bold">3rd menu item</li>
              <li className="gh-popover-item">4th menu item</li>
              <li className="gh-popover-item">5th menu item</li>
              <li className="gh-popover-item">6th menu item</li>
            </ul>
          </div>

          {/* Card 3: 8 items scrollable */}
          <div className="gh-popover-card">
            <ul className="gh-popover-menu-list gh-scrollable-list">
              <li className="gh-popover-item">1st menu item</li>
              <li className="gh-popover-item">2nd menu item</li>
              <li className="gh-popover-item">3rd menu item</li>
              <li className="gh-popover-item">4th menu item</li>
              <li className="gh-popover-item">5th menu item</li>
              <li className="gh-popover-item">6th menu item</li>
              <li className="gh-popover-item">7th menu item</li>
              <li className="gh-popover-item">8th menu item</li>
            </ul>
          </div>

          {/* Card 4: 8 items */}
          <div className="gh-popover-card">
            <ul className="gh-popover-menu-list">
              <li className="gh-popover-item gh-is-highlighted">1st menu item</li>
              <li className="gh-popover-item gh-is-bold">2nd menu item</li>
              <li className="gh-popover-item">3rd menu item</li>
              <li className="gh-popover-item">4th menu item</li>
              <li className="gh-popover-item">5th menu item</li>
              <li className="gh-popover-item">6th menu item</li>
              <li className="gh-popover-item">7th menu item</li>
              <li className="gh-popover-item">8th menu item</li>
            </ul>
          </div>

          {/* Card 5: 8 items with scrollbar */}
          <div className="gh-popover-card">
            <ul className="gh-popover-menu-list gh-scrollable-list">
              <li className="gh-popover-item gh-is-highlighted">1st menu item</li>
              <li className="gh-popover-item">2nd menu item</li>
              <li className="gh-popover-item">3rd menu item</li>
              <li className="gh-popover-item">4th menu item</li>
              <li className="gh-popover-item">5th menu item</li>
              <li className="gh-popover-item">6th menu item</li>
              <li className="gh-popover-item">7th menu item</li>
              <li className="gh-popover-item">8th menu item</li>
            </ul>
          </div>

          {/* Card 6: 3 items */}
          <div className="gh-popover-card">
            <ul className="gh-popover-menu-list">
              <li className="gh-popover-item gh-is-highlighted">1st menu item</li>
              <li className="gh-popover-item">2nd menu item</li>
              <li className="gh-popover-item">3rd menu item</li>
            </ul>
          </div>

          {/* Card 7: 8 items scrollable */}
          <div className="gh-popover-card">
            <ul className="gh-popover-menu-list gh-scrollable-list">
              <li className="gh-popover-item gh-is-highlighted">1st menu item</li>
              <li className="gh-popover-item">2nd menu item</li>
              <li className="gh-popover-item gh-is-bold">3rd menu item</li>
              <li className="gh-popover-item">4th menu item</li>
              <li className="gh-popover-item">5th menu item</li>
              <li className="gh-popover-item">6th menu item</li>
              <li className="gh-popover-item">7th menu item</li>
              <li className="gh-popover-item">8th menu item</li>
            </ul>
          </div>

          {/* Card 8: 7 items */}
          <div className="gh-popover-card">
            <ul className="gh-popover-menu-list">
              <li className="gh-popover-item gh-is-highlighted">1st menu item</li>
              <li className="gh-popover-item">2nd menu item</li>
              <li className="gh-popover-item">3rd menu item</li>
              <li className="gh-popover-item">4th menu item</li>
              <li className="gh-popover-item">5th menu item</li>
              <li className="gh-popover-item">6th menu item</li>
              <li className="gh-popover-item">7th menu item</li>
            </ul>
          </div>

          {/* Card 9: 4 items */}
          <div className="gh-popover-card">
            <ul className="gh-popover-menu-list">
              <li className="gh-popover-item gh-is-highlighted">1st menu item</li>
              <li className="gh-popover-item">2nd menu item</li>
              <li className="gh-popover-item">3rd menu item</li>
              <li className="gh-popover-item">4th menu item</li>
            </ul>
          </div>

          {/* Card 10: 8 items with scrollbar */}
          <div className="gh-popover-card">
            <ul className="gh-popover-menu-list gh-scrollable-list">
              <li className="gh-popover-item gh-is-highlighted">1st menu item</li>
              <li className="gh-popover-item gh-is-bold">2nd menu item</li>
              <li className="gh-popover-item">3rd menu item</li>
              <li className="gh-popover-item">4th menu item</li>
              <li className="gh-popover-item">5th menu item</li>
              <li className="gh-popover-item">6th menu item</li>
              <li className="gh-popover-item">7th menu item</li>
              <li className="gh-popover-item">8th menu item</li>
            </ul>
          </div>

          {/* Card 11: 5 items */}
          <div className="gh-popover-card">
            <ul className="gh-popover-menu-list">
              <li className="gh-popover-item gh-is-highlighted">1st menu item</li>
              <li className="gh-popover-item">2nd menu item</li>
              <li className="gh-popover-item">3rd menu item</li>
              <li className="gh-popover-item">4th menu item</li>
              <li className="gh-popover-item">5th menu item</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ====================================================================
          2. Checkbox & Multi-Select Filter Dropdowns
          ==================================================================== */}
      <h2 className="gh-dropdown-section-title">Checkbox &amp; Multi-Select Filter Dropdowns</h2>
      <p className="gh-dropdown-section-desc">
        Interactive multi-selection filter popovers with action controls and nested group categorization.
      </p>

      <div className="gh-checkbox-filter-matrix">
        {/* Left: Compact Filter Popover */}
        <div className="gh-filter-popover-card">
          <div className="gh-filter-items-list">
            {/* LOADING */}
            <div
              className="gh-filter-checkbox-item"
              onClick={() => setFilterState({ ...filterState, loading: !filterState.loading })}
            >
              <div className={`gh-filter-checkbox-box ${filterState.loading ? 'gh-checked-orange' : 'gh-border-orange'}`}>
                {filterState.loading && <i className="gh-icon gh-icon-check gh-size-11" aria-hidden="true" />}
              </div>
              <span className="gh-filter-item-text">LOADING</span>
            </div>

            {/* BLASTING */}
            <div
              className="gh-filter-checkbox-item"
              onClick={() => setFilterState({ ...filterState, blasting: !filterState.blasting })}
            >
              <div className={`gh-filter-checkbox-box ${filterState.blasting ? 'gh-checked-orange' : 'gh-border-orange'}`}>
                {filterState.blasting && <i className="gh-icon gh-icon-check gh-size-11" aria-hidden="true" />}
              </div>
              <span className="gh-filter-item-text">BLASTING</span>
            </div>

            {/* BACKFILL */}
            <div
              className="gh-filter-checkbox-item"
              onClick={() => setFilterState({ ...filterState, backfill: !filterState.backfill })}
            >
              <div className={`gh-filter-checkbox-box ${filterState.backfill ? 'gh-checked-orange' : 'gh-border-grey'}`}>
                {filterState.backfill && <i className="gh-icon gh-icon-check gh-size-11" aria-hidden="true" />}
              </div>
              <span className="gh-filter-item-text">BACKFILL</span>
            </div>

            {/* BOLTING 1 */}
            <div
              className="gh-filter-checkbox-item"
              onClick={() => setFilterState({ ...filterState, bolting1: !filterState.bolting1 })}
            >
              <div className={`gh-filter-checkbox-box ${filterState.bolting1 ? 'gh-checked-orange' : 'gh-border-orange'}`}>
                {filterState.bolting1 && <i className="gh-icon gh-icon-check gh-size-11" aria-hidden="true" />}
              </div>
              <span className="gh-filter-item-text">BOLTING 1</span>
            </div>
          </div>

          {/* Action Bar: Reset & OK */}
          <div className="gh-filter-action-bar">
            <button
              type="button"
              className="gh-btn-filter-reset"
              onClick={() => setFilterState({ loading: false, blasting: false, backfill: false, bolting1: false })}
            >
              Reset
            </button>
            <button
              type="button"
              className="gh-btn-filter-ok"
              onClick={() => alert('Filter applied')}
            >
              OK
            </button>
          </div>
        </div>

        {/* Right: Hierarchical Group Filter */}
        <div className="gh-group-filter-card">
          <div className="gh-group-header-row">
            <span>BLASTING</span>
          </div>

          <div className="gh-group-items-list">
            <div className="gh-group-plain-item">LOADING</div>
            <div className="gh-group-plain-item">BACKFILL</div>
            <div className="gh-group-plain-item">BOLTING 1</div>

            {/* Sub-checkbox items */}
            {Object.entries({
              bolting2: 'BOLTING 2',
              longSupport: 'BOLTING - LONG SUPPORT',
              rehab: 'BOLTING - REHAB',
              onDemand: 'BOLTING ON-DEMAND',
              hauling: 'HAULING',
            }).map(([key, label]) => {
              const isChecked = groupSubChecks[key];
              return (
                <div
                  key={key}
                  className="gh-group-sub-checkbox-item"
                  onClick={() => setGroupSubChecks({ ...groupSubChecks, [key]: !isChecked })}
                >
                  <div className={`gh-sub-checkbox-box ${isChecked ? 'gh-is-checked' : ''}`}>
                    {isChecked && <i className="gh-icon gh-icon-check gh-size-10" aria-hidden="true" />}
                  </div>
                  <span className="gh-sub-item-text">{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ====================================================================
          3. Cascader Submenu & Searchable List Dropdowns
          ==================================================================== */}
      <h2 className="gh-dropdown-section-title">Cascader Submenu &amp; Searchable Dropdowns</h2>
      <p className="gh-dropdown-section-desc">
        Multi-level category exploration with active trigger indicators, and integrated text search filtration.
      </p>

      <div className="gh-advanced-dropdowns-matrix">
        {/* Left: Cascader Submenu */}
        <div className="gh-cascader-column">
          {/* Status Trigger Pill */}
          <div className="gh-status-input-trigger" role="button" tabIndex={0}>
            <span className="gh-status-dot"></span>
            <span className="gh-status-text">{cascaderActiveCategory}</span>
          </div>

          {/* Cascader Dual-Pane Card */}
          <div className="gh-cascader-panel">
            {/* Left Pane (Parents) */}
            <ul className="gh-cascader-left-pane">
              {cascaderCategories.map((cat) => (
                <li
                  key={cat.id}
                  className={`gh-cascader-parent-item ${cascaderActiveCategory === cat.id ? 'gh-is-active' : ''}`}
                  onMouseEnter={() => setCascaderActiveCategory(cat.id)}
                  onClick={() => setCascaderActiveCategory(cat.id)}
                >
                  <span>{cat.label}</span>
                  <i className="gh-icon gh-icon-chevron-right gh-size-11 gh-chevron-arrow" aria-hidden="true" />
                </li>
              ))}
            </ul>

            {/* Right Pane (Children) */}
            <ul className="gh-cascader-right-pane">
              {(cascaderSubItems[cascaderActiveCategory] || []).map((code) => (
                <li
                  key={code}
                  className={`gh-cascader-child-item ${cascaderSelectedItem === code ? 'gh-is-selected' : ''}`}
                  onClick={() => setCascaderSelectedItem(code)}
                >
                  <span>{code}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Searchable User List Dropdown */}
        <div className="gh-searchable-column">
          <div className="gh-search-dropdown-card">
            {/* Search Input Bar */}
            <div className="gh-search-input-header">
              <i className="gh-icon gh-icon-search gh-size-14 gh-search-icon" aria-hidden="true" />
              <input
                type="text"
                className="gh-search-input-field"
                placeholder="Search Users"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filtered User Results */}
            <ul className="gh-search-results-list">
              {filteredUserResults.map((item, idx) => (
                <li
                  key={`${item}-${idx}`}
                  className={`gh-search-result-item ${idx === 0 ? 'gh-is-active' : ''}`}
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
          </>
        }
      />
    </div>
  );
};

export default Dropdown;
