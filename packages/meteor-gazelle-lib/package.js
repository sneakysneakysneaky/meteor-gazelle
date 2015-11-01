Package.describe({
  name: 'meteor-gazelle:lib',
  version: '0.0.1',
  summary: 'Provides mission critical packages and functionality.',
  git: 'https://github.com/meteor-gazelle/meteor-gazelle',
  documentation: 'README.md'
});


Package.onUse(function (api) {
  api.versionsFrom('1.2.0.2');

  var packages = [
    'standard-minifiers',
    'meteor-base',
    'mobile-experience',
    'mongo',
    'session',
    'jquery',
    'tracker',
    'logging',
    'reload',
    'random',
    'ejson',
    'check',
    'react@0.14.1_1',
    'ecmascript',
    'reactive-var',
    'kadira:flow-router@2.6.0',
    'kadira:react-layout@1.3.0',
    'accounts-password@1.1.1',
    'maxharris9:classnames@0.0.1',
    'aldeed:collection2@2.5.0',
    'aldeed:simple-schema@1.3.3',
    'matb33:collection-hooks@0.8.0',
    'meteorhacks:subs-manager@1.6.2',
    'ongoworks:security@1.2.0',
    'kadira:debug@2.2.3'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'lib/config.js',
    'lib/callbacks.js',
    'lib/util.js',
    'lib/router.js'
  ]);

  api.export('Gazelle');
  api.export('AppState');
  api.export('Router');
  api.export('Components');

});
