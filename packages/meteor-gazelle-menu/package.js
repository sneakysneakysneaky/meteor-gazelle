Package.describe({
  name: 'meteor-gazelle:menu',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Navigation menu libraries & templates',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'reactive-var',
    'underscore',
    'maxharris9:classnames',
    'meteor-gazelle:lib'
  ]);

  api.addFiles([
    'client/lib/menu.js',
    'client/templates/menu/menu.html',
    'client/templates/menu/menu.js',
    'client/templates/menuItem/menuItem.html',
    'client/templates/menuItem/menuItem.js',
    'client/templates/menuList/menuList.html',
    'client/templates/menuList/menuList.js',
    'client/startup.js'
  ], 'client');
});
