/**
 * @external Gazelle
 */

/**
 * Map of all menus by menu id
 * @private
 * @memberOf external:Gazelle.Menu
 * @type {Object.<String, external:Gazelle.Menu.MenuItemNode>}
 */
var allMenus = {};

/**
 * Map of all menu item nodes by id
 * @private
 * @memberOf external:Gazelle.Menu
 * @type {Object.<String, external:Gazelle.Menu.MenuItemNode>}
 */
var allNodes = {};

/**
 * @private
 * @class external:Gazelle.Menu.MenuItemNode
 * @classdesc A node in a navigation menu tree.
 * @param {external:Gazelle.Menu.MenuItem} menuItem The menu item to track in
 *                                                  this node.
 */
function MenuItemNode (menuItem) {
  Object.defineProperties(this, {

    /**
     * The menu item to track in this node.
     * @name external:Gazelle.Menu.MenuItemNode#menuItem
     * @type {external:Gazelle.Menu.MenuItem}
     * @readOnly
     */
    menuItem: {
      enumerable: true,
      writable: false,
      value: menuItem
    },

    /**
     * The children of this menu item.
     * @name external:Gazelle.Menu.MenuItemNode#children
     * @type {external.Gazelle.Menu.MenuItem[]}
     * @readOnly
     */
    children: {
      enumerable: true,
      writable: false,
      value: []
    }
  });
};

/**
 * @class external:Gazelle.Menu.MenuItem
 * @classdesc A item in a navigation menu.
 * @param {Object} params
 * @param {String} params.id The ID of the menu item.
 * @param {String} params.title The title of this menu item.
 * @param {String} params.url The URL of this menu item.
 * @param {String} [params.menuId] The ID of the menu that this item belongs.
 *                                 to. Is required if params.parentId is not
 *                                 set.
 * @param {String} [params.parentId] The ID of this menu item's parent menu
 *                                   item. Is requred if params.menuId is not
 *                                   set.
 * @param {Number} [params.priority=0x7ffffff] The sort key of this menu item.
 * @param {Number} [params.badgeCount=0] The count to display in this item's
 *                                       badge.
 */
function MenuItem (params) {
  if (!(this instanceof MenuItem)) {
    return new MenuItem(params);
  }

  var options = {
    menuId: null,
    parendId: null,
    priority: 0x7ffffff,
    badgeCount: 0
  };

  _.extend(options, params);

  var reactiveBadgeCount = new ReactiveVar(options.badgeCount);

  Object.defineProperties(this, {

    /**
     * The ID of this menu item
     * @name external:Gazelle.Menu.MenuItem#id
     * @type {String}
     * @readOnly
     */
    id: {
      enumerable: true,
      writable: false,
      value: options.id
    },

    /**
     * The ID of the menu that this item belongs to.
     * @name external:Gazelle.Menu.MenuItem#menuId
     * @type {?String}
     * @readOnly
     */
    menuId: {
      enumerable: true,
      writable: false,
      value: options.menuId
    },

    /**
     * The ID of this item's parent menu item
     * @name external:Gazelle.Menu.MenuItem#parentId
     * @type {?String}
     * @readOnly
     */
    parentId: {
      enumerable: true,
      writable: false,
      value: options.parentId
    },

    /**
     * The title of this menu item
     * @name external:Gazelle.Menu.MenuItem#title
     * @type {String}
     * @readOnly
     */
    title: {
      enumerable: true,
      writable: false,
      value: options.title
    },

    /**
     * The URL of this menu item
     * @name external:Gazelle.Menu.MenuItem#url
     * @type {String}
     * @readOnly
     */
    url: {
      enumerable: true,
      writable: false,
      value: options.url
    },

    /**
     * The sort key of this menu item
     * @name external:Gazelle.Menu.MenuItem#priority
     * @type {Number}
     * @readOnly
     */
    priority: {
      enumerable: true,
      writable: false,
      value: options.priority
    },

    /**
     * The count to display in this menu item's badge
     * @name external:Gazelle.Menu.MenuItem#badgeCount
     * @type {Number}
     */
    badgeCount: {
      enumerable: true,
      get: function () { return reactiveBadgeCount.get(); },
      set: function (value) { reactiveBadgeCount.set(value); }
    },

    reactiveBadgeCount: {
      enumerable: false,
      writable: false,
      value: reactiveBadgeCount
    }
  });
}

/**
 * Adds items to a navigation menu.
 * @memberOf external:Gazelle.Menu
 * @param {external:Gazelle.Menu.MenuItem|external:Gazelle.Menu.MenuItem[]}
 *                                                  items The menu items to add.
 */
function addItems (items) {
  if (!_.isArray(items) && items instanceof MenuItem) {
    items = [items];
  }

  items.forEach(function (item) {
    var node = new MenuItemNode(item);

    allNodes[item.id] = node;

    if (item.parentId) {
      allNodes[item.parentId].children.push(node);
    } else {
      if (!allMenus[item.menuId]) {
        allMenus[item.menuId] = [];
      }
      allMenus[item.menuId].push(node);
    }
  });
}

/**
 * Get the navigation items of a given menu.
 * @memberOf external:Gazelle.Menu
 * @param  {String} menuId The ID of the menu to return.
 * @return {external:Gazelle.Menu.MenuItem[]|null} The items that belong to the
 *                                                 given menu.
 */
function getItems (menuId) {
  return allMenus[menuId] || null;
}

/**
 * @namespace Menu
 * @memberOf external:Gazelle
 */
Gazelle.Menu = {
  MenuItem: MenuItem,
  addItems: addItems,
  getItems: getItems
};
