var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'Gacha Impact',
  // App id
  id: 'com.gacha-impact.ikkoy',
  //define themes
  theme: 'md',
  // Enable swipe panel
  panel: {
    swipe: false,
    visibleBreakpoint: 768,
  },
  // ... other parameters
});

var mainView = app.views.create('.view-main');

