function toggleMenu() {
    document.location.href = '#';
    var container = $('.menu-container');
    var menu = container.find('> ul');
    if (menu.hasClass('active')) {
        menu.removeClass('active');
        container.addClass('menu-closed');
        container.removeClass('menu-open');
    } else {
        menu.addClass('active');
        container.addClass('menu-open');
        container.removeClass('menu-closed');
    }
}

var Router = Backbone.Router.extend({
    initialized: true,
    routes: {
        'hazard/:id':       'hazard',
        'menu':             'menu'
    },
    menu: function() {
        toggleMenu();
    }
});

$(document).ready(function () {
    new Router();
    Backbone.history.start();
});
