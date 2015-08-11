var THROTTLE_REDRAW = 100; // ms

Template.header.helpers({
  classNames: function () {
    var template = Template.instance();
    var isSticky = template.isSticky.get();

    return classNames({
      'main-header': true,
      'main-header--sticky': isSticky
    });
  },

  stickyContainerClassNames: function () {
    var template = Template.instance();
    var isAnimating = template.isStickyContainerAnimating.get();

    return classNames({
      'main-header__sticky-container': true,
      'main-header__sticky-container--animating': isAnimating
    });
  }
});

Template.header.events({
    //add your events here
});

Template.header.onCreated(function () {
  this.isSticky = new ReactiveVar(false);
  this.isStickyContainerAnimating = new ReactiveVar(false);
});

Template.header.onRendered(function () {
  var me = this;

  function redraw () {
    var enabled = true; // TODO: Set this to user preference
    var isSticky = enabled && document.body.scrollTop > me.height;

    me.isSticky.set(isSticky);

    if (isSticky) {
      me.isStickyContainerAnimating.set(true);
    }
  }

  function calcHeight () {
    me.height = $(me.firstNode).outerHeight();
  }

  function resize () {
    calcHeight();
    redraw();
  }

  me.redraw = _.throttle(redraw, THROTTLE_REDRAW);
  me.resize = _.throttle(resize, THROTTLE_REDRAW);

  $(document).on('scroll', me.redraw);
  $(window).on('resize', me.resize);

  resize();
});

Template.header.onDestroyed(function () {
  $(document).off('scroll', this.redraw);
  $(window).off('resize', this.resize);
});
