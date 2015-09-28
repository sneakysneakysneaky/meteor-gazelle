Template.menuItem.helpers({
  children: getChildren,
  hasChildren: hasChildren,
  badgeCount: getBadgeCount,
  hasBadgeCount: hasBadgeCount,

  title: function () { return getMenuItem().title; },
  url: function () { return getMenuItem().url; },

  childDepth: function () {
    return Template.currentData().depth + 1;
  },

  classNames: function () {
    var prefix = getCssPrefix() + '__item';
    var template = Template.instance();
    var isAnimating = template.isAnimating.get();
    var isExpanded = template.isExpanded.get();
    var result = {};

    result[prefix] = true;
    result[prefix + '--submenu'] = hasChildren();
    result[prefix + '--animating'] = isAnimating;
    result[prefix + '--expanded'] = isExpanded;
    result[prefix + '--badge-count'] = hasBadgeCount();

    return classNames(result);
  },

  linkClassNames: function () {
    return getCssPrefix() + '__link';
  },

  submenuClassNames: function () {
    return getCssPrefix() + '__submenu';
  },

  badgeCountClassNames: function () {
    return getCssPrefix() + '__badge-count';
  }
});

Template.menuItem.events({
  mouseover: function () {
    var template = Template.instance();
    template.isExpanded.set(true);
    template.isAnimating.set(true);
  },

  mouseout: function () {
    var template = Template.instance();
    template.isExpanded.set(false);
  }
});

Template.menuItem.onCreated(function () {
  this.isAnimating = new ReactiveVar(false);
  this.isExpanded = new ReactiveVar(false);
});

function getMenuItemNode () {
  return Template.currentData().menuItemNode;
}

function getMenuItem () {
  return getMenuItemNode().menuItem;
}

function getChildren () {
  return getMenuItemNode().children;
}

function getBadgeCount (menuItemNode) {
  menuItemNode = menuItemNode || getMenuItemNode();
  var result = menuItemNode.menuItem.reactiveBadgeCount.get();

  menuItemNode.children.forEach(function (childNode) {
    result += getBadgeCount(childNode);
  });

  return result;
}

function hasBadgeCount () {
  return Template.currentData().showBadges && getBadgeCount() > 0;
}

function getCssPrefix () {
  var data = Template.currentData();
  var cssClassPrefix = data.cssClassPrefix;
  var depth = data.depth;
  var prefix = data.cssClassPrefix + '__level' + depth;
  return prefix;
}

function hasChildren () {
  var data = Template.currentData();
  var depth = data.depth;
  var maxDepth = data.maxDepth;
  var children = getChildren();
  return _.isArray(children) && children.length > 0 && depth < maxDepth;
}
