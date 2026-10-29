import React, { useState, useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import DocTabs from '../components/DocTabs';
import {
  carouselSlidesData,
  apiSpecificationsData
} from '../data/monouiData';
import '../styles/carousel.scss';
import '../styles/documentation.scss';

const htmlCarouselCode = `<!-- 1. Carousel Container Frame -->
<div class="gh-carousel-viewport-frame">
  <!-- Slide 1 (Active) -->
  <div class="gh-carousel-slide-item gh-active" style="background-image: url('https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80')">
    <div class="gh-slide-content-overlay">
      <span class="gh-slide-tag-badge">FEATURED EXHIBITION</span>
      <h2 class="gh-slide-title-text">The Geometry of Light &amp; Concrete</h2>
      <p class="gh-slide-desc-text">Exploring brutalist architectural curves through high-contrast monochrome digital photography.</p>
    </div>
  </div>

  <!-- Slide 2 -->
  <div class="gh-carousel-slide-item" style="background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80')">
    <div class="gh-slide-content-overlay">
      <span class="gh-slide-tag-badge">ARCHITECTURAL ARCHIVE</span>
      <h2 class="gh-slide-title-text">Monolithic Glass &amp; Steel Verticals</h2>
      <p class="gh-slide-desc-text">Structural rhythm and structural cantilever dynamics in urban high-density spaces.</p>
    </div>
  </div>

  <!-- Navigation Arrow Buttons -->
  <button type="button" class="gh-carousel-arrow-btn gh-prev" aria-label="Previous Slide">
    <i class="gh-icon gh-icon-chevrons-left gh-size-20" aria-hidden="true"></i>
  </button>
  <button type="button" class="gh-carousel-arrow-btn gh-next" aria-label="Next Slide">
    <i class="gh-icon gh-icon-chevrons-right gh-size-20" aria-hidden="true"></i>
  </button>

  <!-- Indicators Dash Bar -->
  <div class="gh-carousel-indicators-bar">
    <div class="gh-indicator-dash gh-active"></div>
    <div class="gh-indicator-dash"></div>
    <div class="gh-indicator-dash"></div>
  </div>
</div>

<!-- 2. Bottom Telemetry Bar -->
<div class="gh-carousel-status-bar">
  <div class="gh-status-info">
    <span>Slide 1 of 3</span>
    <span>•</span>
    <span>Auto-playing (5s interval)</span>
  </div>
  <button type="button" class="gh-status-action-btn">
    <i class="gh-icon gh-icon-ban gh-size-13" aria-hidden="true"></i>
    <span>Pause</span>
  </button>
</div>`;

const scssCarouselSnippets = {
  'carousel.scss': `/* ==========================================================================
   MonoUI Kit - Carousel Component Styles (SCSS)
   Matches brutalist architecture slideshow, controls, and indicators
   All classes use the "gh-" prefix.
   ========================================================================== */
.gh-carousel-preview-container {
  margin-top: 24px;
  margin-bottom: 40px;

  /* Outer Grey Framed Canvas */
  .gh-carousel-viewport-frame {
    position: relative;
    width: 100%;
    height: 380px;
    background-color: #636363;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

    @media (max-width: 640px) {
      height: 300px;
    }
  }

  /* Slide Content Area */
  .gh-carousel-slide-item {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 32px 36px;
    background-size: cover;
    background-position: center;

    &.gh-active {
      opacity: 1;
      z-index: 2;
    }

    /* Subtle Vignette Gradient for Readability */
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.82) 0%,
        rgba(0, 0, 0, 0.45) 50%,
        rgba(0, 0, 0, 0.2) 100%
      );
      z-index: 1;
    }
  }
}`,

  'carousel/_slide.scss': `/* Slide Typography & Content Overlays */
.gh-slide-content-overlay {
  position: relative;
  z-index: 2;
  max-width: 680px;

  .gh-slide-tag-badge {
    display: inline-block;
    background-color: #fadb14;
    color: #000000;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 3px 8px;
    border-radius: 3px;
    margin-bottom: 10px;
  }

  .gh-slide-title-text {
    font-size: 24px;
    font-weight: 800;
    color: #ffffff;
    letter-spacing: -0.02em;
    line-height: 1.25;
    margin: 0 0 6px 0;

    @media (max-width: 640px) {
      font-size: 19px;
    }
  }

  .gh-slide-desc-text {
    font-size: 13px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.85);
    margin: 0;

    @media (max-width: 640px) {
      font-size: 12px;
    }
  }
}`,

  'carousel/_controls.scss': `/* Navigation Arrows, Dash Indicators, & Telemetry Bar */
.gh-carousel-arrow-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #ffffff;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
    transform: translateY(-50%) scale(1.05);
  }

  &.gh-prev { left: 20px; }
  &.gh-next { right: 20px; }
}

.gh-carousel-indicators-bar {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 10;

  .gh-indicator-dash {
    width: 24px;
    height: 3px;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 0.4);
    transition: all 0.2s ease;
    cursor: pointer;

    &.gh-active {
      background-color: #ffffff;
      width: 32px;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
}

.gh-carousel-status-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  font-size: 12.5px;
  color: #8c8c8c;

  .gh-status-info {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .gh-status-action-btn {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: #595959;
    font-weight: 500;
    cursor: pointer;
    background: none;
    border: none;
    transition: color 0.2s ease;

    &:hover {
      color: #111827;
    }
  }
}`
};

const carouselApiContent = (
  <div className="gh-specs-table-wrapper">
    <h3 style={{ fontSize: '15px', fontWeight: 700, margin: '0 0 12px 0', color: '#111827' }}>
      Carousel Component API Specifications
    </h3>
    <table className="gh-specs-table">
      <thead>
        <tr>
          <th style={{ width: '20%' }}>Property</th>
          <th style={{ width: '42%' }}>Description</th>
          <th style={{ width: '22%' }}>Type</th>
          <th style={{ width: '16%' }}>Default</th>
        </tr>
      </thead>
      <tbody>
        {apiSpecificationsData.map((spec) => (
          <tr key={spec.property}>
            <td><code>{spec.property}</code></td>
            <td>{spec.description}</td>
            <td><code>{spec.type}</code></td>
            <td><code>{spec.default}</code></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/**
 * MonoUI Kit - Carousel Component Overview Page
 * Faithfully matches the exact design, typography, and interactive features from the screenshot
 * All class names are prefixed with "gh-" as requested.
 */
const Dashboard = () => {
  const context = useOutletContext() || {};
  const activeComponent = context.activeComponent || 'Carousel';

  // Carousel State
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const autoPlayTimerRef = useRef(null);
  const totalSlides = carouselSlidesData.length;

  // Autoplay Effect (5s interval)
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, 5000);
    } else {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isAutoPlaying, totalSlides]);

  // Navigate slides
  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying((prev) => !prev);
  };

  return (
    <div className="gh-doc-page">
      {/* 1. Breadcrumbs */}
      <div className="gh-doc-breadcrumbs">
        <span>Components</span>
        <span className="gh-breadcrumb-sep">/</span>
        <span>Data Display</span>
      </div>

      {/* 2. Main Title & Subtitle */}
      <h1 className="gh-doc-header-title">{activeComponent}</h1>
      <p className="gh-doc-header-desc">
        A slideshow component for cycling through elements—images or cards of featured content—like a carousel.
      </p>

      {/* 3. Universal 4-Tab Documentation System */}
      <DocTabs
        previewTabLabel="Interactive Preview"
        htmlCode={htmlCarouselCode}
        scssSnippets={scssCarouselSnippets}
        apiContent={carouselApiContent}
        previewContent={
          <div className="gh-carousel-preview-container">
            {/* Outer Viewport Canvas */}
            <div className="gh-carousel-viewport-frame">
              {carouselSlidesData.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`gh-carousel-slide-item ${index === currentSlideIndex ? 'gh-active' : ''}`}
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="gh-slide-content-overlay">
                    <span className="gh-slide-tag-badge">{slide.tag}</span>
                    <h2 className="gh-slide-title-text">{slide.title}</h2>
                    <p className="gh-slide-desc-text">{slide.subtitle}</p>
                  </div>
                </div>
              ))}

              {/* Previous Arrow Button */}
              <button
                type="button"
                className="gh-carousel-arrow-btn gh-prev"
                onClick={handlePrevSlide}
                aria-label="Previous Slide"
              >
                <i className="gh-icon gh-icon-chevrons-left gh-size-20" aria-hidden="true" />
              </button>

              {/* Next Arrow Button */}
              <button
                type="button"
                className="gh-carousel-arrow-btn gh-next"
                onClick={handleNextSlide}
                aria-label="Next Slide"
              >
                <i className="gh-icon gh-icon-chevrons-right gh-size-20" aria-hidden="true" />
              </button>

              {/* Indicators Dash Bar */}
              <div className="gh-carousel-indicators-bar">
                {carouselSlidesData.map((slide, idx) => (
                  <div
                    key={slide.id}
                    className={`gh-indicator-dash ${idx === currentSlideIndex ? 'gh-active' : ''}`}
                    onClick={() => setCurrentSlideIndex(idx)}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="gh-carousel-status-bar">
              <div className="gh-status-info">
                <span>Slide {currentSlideIndex + 1} of {totalSlides}</span>
                <span>•</span>
                <span>{isAutoPlaying ? 'Auto-playing (5s interval)' : 'Autoplay paused'}</span>
              </div>

              <button
                type="button"
                className="gh-status-action-btn"
                onClick={toggleAutoPlay}
              >
                {isAutoPlaying ? (
                  <>
                    <i className="gh-icon gh-icon-ban gh-size-13" aria-hidden="true" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <i className="gh-icon gh-icon-refresh-cw gh-size-13" aria-hidden="true" />
                    <span>Play</span>
                  </>
                )}
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Dashboard;
