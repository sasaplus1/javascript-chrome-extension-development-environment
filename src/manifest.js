'use strict';

const {
  author,
  description,
  name,
  version,
} = require('../package');

module.exports = function() {
  const manifest = {
    manifest_version: 2,
    name,
    version,

    description,
    icons: {
      '128': '128.png',
    },

    browser_action: {
      default_title: name,
      default_icon: {
        '16': '128.png',
        '24': '128.png',
        '32': '128.png',
      },
      default_popup: 'popup.html',
    },

    author,
    background: {
      scripts: [
        'background.js',
      ],
      persistent: false,
    },

    content_scripts: [
      {
        matches: [
          '*://*/*',
        ],
        js: [
          'content_script.js',
        ],
        run_at: 'document_start',
      },
    ],
    permissions: [
      'tabs',
    ],
    web_accessible_resources: [
      'web_accessible_resource.js',
    ],
  };

  return {
    code: JSON.stringify(manifest, null, 2),
  };
};
