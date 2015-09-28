
Template.menu.helpers({
  maxDepth: function () { return Template.instance().maxDepth; },
  cssClassPrefix: function () { return Template.instance().cssClassPrefix; },

  items: function () {
    var menuId = Template.currentData().id;
    var items = Gazelle.Menu.getItems(menuId);

    if (items) {
      items = items.sort(compare);
    }

    return items;
  }
});

Template.menu.onCreated(function () {
  this.maxDepth = this.data.maxDepth || 0x7ffffff;
  this.cssClassPrefix = this.data.id.toLowerCase().replace(/[^a-z0-9\-]/g, '');
});

function compare (a, b) {
  var aItem = a.menuItem;
  var bItem = b.menuItem;

  if (aItem.priority !== bItem.priority) {
    return aItem.priority - bItem.priority;
  }

  return aItem.title.toLowerCase().localeCompare(bItem.title.toLowerCase());
}
