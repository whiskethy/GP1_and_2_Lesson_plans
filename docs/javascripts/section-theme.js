// Section-based color theming for GP1 & GP2 Lesson Plans
// Detects the current page section from the URL path and applies
// the corresponding color scheme via CSS custom properties on :root.

document.addEventListener("DOMContentLoaded", function() {
  var path = window.location.pathname;
  var colors;

  // Determine section from URL path
  if (path.indexOf("/GP2/") !== -1 || path.indexOf("/GP2%20") !== -1) {
    // GP2: deep purple
    colors = {
      '--md-primary-fg-color': '#5c3d8f',
      '--md-primary-fg-color--light': '#7b5fbf',
      '--md-primary-fg-color--dark': '#422c68',
      '--md-accent-fg-color': '#7b5fbf',
      '--md-accent-fg-color--light': '#9b82d4'
    };
  } else if (path.indexOf("/Standards/") !== -1 || path.indexOf("/Standards%20") !== -1) {
    // Standards: warm amber/rust
    colors = {
      '--md-primary-fg-color': '#b5542a',
      '--md-primary-fg-color--light': '#d4713e',
      '--md-primary-fg-color--dark': '#8e3f1a',
      '--md-accent-fg-color': '#d4713e',
      '--md-accent-fg-color--light': '#e8935f'
    };
  } else {
    // GP1 (default): teal
    colors = {
      '--md-primary-fg-color': '#2b706d',
      '--md-primary-fg-color--light': '#3a918d',
      '--md-primary-fg-color--dark': '#1e5452',
      '--md-accent-fg-color': '#3a918d',
      '--md-accent-fg-color--light': '#4fb0ab'
    };
  }

  // Apply colors to :root so they cascade everywhere
  var root = document.documentElement;
  for (var prop in colors) {
    root.style.setProperty(prop, colors[prop]);
  }

  // Also set data-section for any CSS that needs it
  var section = path.indexOf("/GP2/") !== -1 || path.indexOf("/GP2%20") !== -1 ? 'gp2'
    : path.indexOf("/Standards/") !== -1 ? 'standards'
    : 'gp1';
  root.setAttribute('data-section', section);
});