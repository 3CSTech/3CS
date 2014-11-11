function toggleMenu() {
    document.location.href = '#';
    var menu = $('.menu-container > ul');
    if (menu.hasClass('active')) {
        menu.removeClass('active');
    } else {
        menu.addClass('active');
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
