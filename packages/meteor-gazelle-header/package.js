Package.describe({
  name: 'meteor-gazelle:header',
  version: '0.0.1',
  summary: 'The site header.',
  documentation: 'README.md',
  git: 'https://github.com/meteor-gazelle/meteor-gazelle.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  var packages = [
    'meteor-gazelle:lib@0.0.1',
    'jquery@1.11.3_2',
    'reactive-var@1.0.5',
    'underscore@1.0.3',
    'maxharris9:classnames@0.0.1',
    'meteor-gazelle:lib@0.0.1',
    'meteor-gazelle:menu@0.0.1'
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles([
    'lib/methods.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/userMenu/userMenu.html',
    'lib/client/userMenu/userMenu.js',
    'lib/client/header/header.html',
    'lib/client/header/header.js',
    'lib/client/searchBox/searchBox.html',
    'lib/client/searchBox/searchBox.js'
  ], ['client']);

});

Package.onTest(function (api) {
});
