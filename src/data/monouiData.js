// MonoUI Kit Component Navigation and Documentation Data

export const monoNavSections = [
  {
    category: 'GENERAL',
    items: ['Button', 'Icon', 'Typography', 'Space', 'Grid', 'Alert']
  },
  {
    category: 'LAYOUT',
    items: ['Grid', 'Divider', 'Layout', 'Space']
  },
  {
    category: 'NAVIGATION',
    items: ['Breadcrumb', 'Dropdown', 'Menu', 'PageHeader', 'Pagination', 'Steps']
  },
  {
    category: 'DATA ENTRY',
    items: [
      'AutoComplete', 'Cascader', 'Checkbox', 'DatePicker', 'Form', 'Input',
      'InputNumber', 'Radio', 'Rate', 'Select', 'Slider', 'Switch',
      'TimePicker', 'Transfer', 'TreeSelect', 'Upload'
    ]
  },
  {
    category: 'DATA DISPLAY',
    items: [
      'Badge', 'Avatar', 'Calendar', 'Card', 'Carousel', 'Collapse',
      'Comment', 'Descriptions', 'Empty', 'Image', 'List', 'Popover',
      'Segmented', 'Statistic', 'Table', 'Tabs', 'Tag', 'Timeline',
      'Tooltip', 'Tree'
    ]
  },
  {
    category: 'FEEDBACK',
    items: [
      'Alert', 'Drawer', 'Message', 'Modal', 'Notification',
      'Popconfirm', 'Progress', 'Result', 'Skeleton'
    ]
  },
  {
    category: 'OTHER',
    items: ['Anchor']
  }
];

export const carouselSlidesData = [
  {
    id: 1,
    tag: 'FEATURED EXHIBITION',
    title: 'The Geometry of Light & Concrete',
    subtitle: 'Exploring brutalist architectural curves through high-contrast monochrome digital photography. Curated design resources volume 12.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 2,
    tag: 'CURATED ARCHIVE',
    title: 'Monolithic Shadows & Texture',
    subtitle: 'Architectural minimalism through geometric volume, shadow cast, and raw tactile surfaces.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 3,
    tag: 'DESIGN JOURNAL',
    title: 'Linear Perspective & Void',
    subtitle: 'Studies in spatial compression and negative space in contemporary urban structures.',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 4,
    tag: 'PHOTO ESSAY',
    title: 'Tectonic Rhythm & Scale',
    subtitle: 'Symmetric cantilevered forms engineered for functional endurance and aesthetic clarity.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80'
  }
];

export const apiSpecificationsData = [
  {
    property: 'autoplay',
    description: 'Whether to scroll slides automatically based on the speed interval',
    type: 'boolean',
    default: 'false'
  },
  {
    property: 'dotPosition',
    description: 'Placement configuration for pagination dots relative to the wrapper bounds',
    type: "'top' | 'bottom' | 'left' | 'right'",
    default: "'bottom'"
  },
  {
    property: 'dots',
    description: 'Whether to show navigation indicators / page indicators',
    type: 'boolean',
    default: 'true'
  },
  {
    property: 'effect',
    description: 'Animation transition behavior configuration when cycling slides',
    type: "'scrollx' | 'fade'",
    default: "'scrollx'"
  },
  {
    property: 'speed',
    description: 'Slide animation transition duration configuration in milliseconds',
    type: 'number',
    default: '500'
  },
  {
    property: 'easing',
    description: 'Easing transition functional formula for customized pacing dynamics',
    type: 'string',
    default: "'ease-in-out'"
  }
];
