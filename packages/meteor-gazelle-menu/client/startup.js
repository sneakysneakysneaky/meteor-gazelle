var menuItems = Meteor.settings.public.site.menuItems;

Meteor.startup(function () {
  if (_.isArray(menuItems)) {
    Gazelle.Menu.addItems(menuItems.map(function (item) {
      return new Gazelle.Menu.MenuItem(item);
    }));
  }

  Gazelle.Menu.addItems([
    new Gazelle.Menu.MenuItem({
      id: 'eba88e7f-0704-402d-abbf-88ad24745462',
      menuId: 'main-nav',
      title: 'Torrents',
      url: '/torrents',
      priority: 10,
      badgeCount: 3
    }),

    new Gazelle.Menu.MenuItem({
      id: '17ae7615-c055-478f-b823-78b3a74c09a7',
      parentId: 'eba88e7f-0704-402d-abbf-88ad24745462',
      title: 'All Torrents',
      url: '/torrents/all',
      priority: 10,
      badgeCount: 1
    }),

    new Gazelle.Menu.MenuItem({
      id: '67c13bf7-9c3f-4f10-8124-7a3214b70f3d',
      parentId: '17ae7615-c055-478f-b823-78b3a74c09a7',
      title: 'Music',
      url: '/torrents/music',
      priority: 10
    }),

    new Gazelle.Menu.MenuItem({
      id: '1b5e6df3-8558-49c7-821e-b24ba3721b42',
      menuId: 'main-nav',
      title: 'Help',
      url: '/help',
      priority: 30
    }),

    new Gazelle.Menu.MenuItem({
      id: '1b88ba25-9fac-443d-9e79-7256c1b79e73',
      menuId: 'main-nav',
      title: 'Forums',
      url: '/forums',
      priority: 20
    })
  ]);
});
