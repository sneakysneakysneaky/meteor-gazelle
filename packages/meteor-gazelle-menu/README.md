Navigation menu libraries & templates.

## Usage

```javascript
Gazelle.Menu.addItems([
  new Gazelle.Menu.MenuItem({ // Top-level item
    id: 'eba88e7f-0704-402d-abbf-88ad24745462',
    menuId: 'main-nav',
    title: 'Torrents',
    url: '/torrents',
    priority: 10
  }),

  new Gazelle.Menu.MenuItem({ // Child of Torrents
    id: '17ae7615-c055-478f-b823-78b3a74c09a7',
    parentId: 'eba88e7f-0704-402d-abbf-88ad24745462',
    title: 'All Torrents',
    url: '/torrents/all',
    priority: 10
  }),

  new Gazelle.Menu.MenuItem({ // Top-level item
    id: '1b5e6df3-8558-49c7-821e-b24ba3721b42',
    menuId: 'main-nav',
    title: 'Help',
    url: '/help',
    priority: 20
  })
]);
```

## API

### Gazelle.Menu.MenuItem

A item in a navigation menu.

#### Constructor
`new MenuItem(params)`

##### Parameters:

| Name                | Type     | Attributes | Default   | Description                                                                               |
| ------------------- | -------- | ---------- | --------- | ----------------------------------------------------------------------------------------- |
| `params`            | `Object` |            |           |                                                                                           |
| `params.id`         | `String` |            |           | The ID of the menu item.                                                                  |
| `params.title`      | `String` |            |           | The title of this menu item.                                                              |
| `params.url`        | `String` |            |           | The URL of this menu item.                                                                |
| `params.menuId`     | `String` | *optional* |           | The ID of the menu that this item belongs to is required if `params.parentId` is not set. |
| `params.parentId`   | `String` | *optional* |           | The ID of this menu item's parent menu item. Is required if `params.menuId` is not set.   |
| `params.priority`   | `Number` | *optional* | 0x7ffffff | The sort key of this meny item.                                                           |
| `params.badgeCount` | `Number` | *optional* | 0         | The count to display in this item's badge.                                                |

#### Members

##### `badgeCount :Number`
The count to display in this menu item's badge

##### `(readonly) id :String`
The ID of this menu item

##### `(readonly, nullable) menuId :String`
The ID of the menu that this item belongs to.

##### `(readonly, nullable) parentId :String`
The ID of this item's parent menu item

##### `(readonly) priority :Number`
The sort key of this menu item

##### `(readonly) title :String`
The title of this menu item

##### `(readonly) url :String`
The URL of this menu item

#### *(static)* Gazelle.Menu.addItems(items)
Adds items to a navigation Menu

#### Parameters:

| Name    | Type                                                        | Description           |
| ------- | ----------------------------------------------------------- | --------------------- |
| `items` | `Gazelle.Menu.MenuItem`&#124;`Array<Gazelle.Menu.MenuItem>` | The menu items to add |

#### *(static)* Gazelle.Menu.getItems(menuId)
Get the navigation items of a given menu.

#### Parameters:

| Name     | Type   | Description                   |
| -------- | ------ | ----------------------------- |
| `menuId` | String | The ID of the menu to return. |

##### Returns
`Array<Gazelle.Menu.MenuItem>`|`null`
