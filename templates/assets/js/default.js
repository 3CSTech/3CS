function toggle(name) {
    $('section.active').removeClass('active');
    $(name).addClass('active');
}

function toggleMenu() {
    document.location.href = '#';
    if ($('nav').hasClass('active')) {
        $('nav, section.main').removeClass('active');
    } else {
        $('nav, section.main').addClass('active');
    }
}

var Router = Backbone.Router.extend({
    initialized: true,
    routes: {
        'overview':         'overview',
        'prerequisites':    'prerequisites',
        'hazard/:id':       'hazard',
        'safety':           'safety',
        'menu':             'menu'
    },
    overview: function() {
        toggle('.job-overview');
    },
    prerequisites: function() {
        toggle('.prerequisites');
    },
    hazard: function(id) {
        toggle('.hazard-' + id);
    },
    safety: function() {
        toggle('.safety');
    },
    menu: function() {
        toggleMenu();
    }
});

function moveBack() {
    var active = $('section.active');
    var index = $('section.content').index(active);

    if (index > 0) {
        var prev = active.prev();
        $('section.active').removeClass('active');
        prev.addClass('active');
    } else {
        console.log('Reached beginning');
    }
}

function moveNext() {
    var content = $('section.content');
    var active = $('section.active');
    var index = content.index(active);

    if (index < content.size() - 1) {
        var next = active.next();
        $('section.active').removeClass('active');
        next.addClass('active');
    } else {
        console.log('Reached end');
    }
}

$(document).ready(function () {
    new Router();
    Backbone.history.start();
    toggle('.job-overview');
    $('#back').click(moveBack);
    $('#next').click(moveNext);
});
