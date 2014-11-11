### About

This is the 3CS company homepage

### Requirements

* [Node](http://nodejs.org)
* [Grunt](http://gruntjs.com)

### Contributing

For first time use, run `npm install -g grunt-cli`

Then install project build dependencies: `npm install`

Run `grunt --help` for a list of available tasks.

For first time use, you should run `grunt-curl` to fetch third party dependencies.

### Generating Pages

Run `grunt clean staticHandlebars replace`, the pages will appear in the `gen` directory.

Pages live in `templates/html` and each page has context data provided by a `.json` file of the same name.
Data common to all pages belongs in `base.json`.

Pages are made up of [Handlebars](http://handlebarsjs.com/) partials.
These live in the `templates/html/partials` directory.

### CSS

There are some overrides against some of the selectors contained within `core.css`.  These can be found at the bottom of
`templates/assets/css/common.css`.

### Local

To serve the web pages locally:

    grunt connect watch

Navigate to the following URL: `http://localhost:8000`

Generated pages are in `/gen`

Making changes to the files automatically rebuilds the site and if you are using a browser
with the [livereload](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-) extension the changes will automatically be seen in the pages.

### Links

* https://www.maxcdn.com
* https://www.yammer.com
* http://www.bloggermint.com/2011/06/pure-css3-multi-level-drop-down-navigation-menu

