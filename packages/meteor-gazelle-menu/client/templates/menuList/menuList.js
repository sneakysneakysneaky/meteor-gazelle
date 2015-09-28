Template.menuList.helpers({
  classNames: function () {
    var data = Template.currentData();
    var cssClassPrefix = data.cssClassPrefix;
    var depth = data.depth;

    return cssClassPrefix + '__level' + depth;
  }
});
