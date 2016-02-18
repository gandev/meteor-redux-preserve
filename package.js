Package.describe({
  name: 'gandev:redux-preserve',
  version: '0.1.0',
  summary: 'Preserve redux store state across page reloads.',
  git: 'https://github.com/gandev/meteor-redux-preserve.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-beta.11');
  api.use('ecmascript');
  api.use('reload');

  api.mainModule('redux-preserve.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('gandev:redux-preserve');

  api.mainModule('redux-preserve-tests.js', 'client');
});
