/*global module:false, require:false*/
module.exports = function (grunt) {

    var assetsRoot = 'templates/assets';
    var staticRoot = 'static';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            main: {
                src: assetsRoot + '/js/*.js'
            },
            test: {
                src: 'test/*.js'
            }
        },
        csslint: {
            main: {
                options: {
                    csslintrc: '.csslintrc',
                    excludeList: 'elusive-webfont.css'
                },
                src: [assetsRoot + '/css/*.css']
            }
        },
        cssmin: {
            main: {
                options: {
                    banner: '/* HSS CSS - v<%= pkg.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> */ ',
                    report: 'gzip'
                },
                files: {
                    'gen/css/3cs-all.css': [assetsRoot + '/css/*.css']
                }
            }
        },
        clean: ['gen'],
        staticHandlebars: {
            main: {
                options: {
                    assets: {
                        partialPath: 'templates/html/partials/*.html'
                    }
                },
                files: [
                    {'gen/*.html': 'templates/html/*.html'},
                    {'gen/contact/*.html': 'templates/html/contact/*.html'},
                    {'gen/partners/*.html': 'templates/html/partners/*.html'},
                    {'gen/values/*.html': 'templates/html/values/*.html'},
                    {'gen/engineering/*.html': 'templates/html/engineering/*.html'}
                ]
            }
        },
        watch: {
            options: {
                livereload: true
            },
            default: {
                files: [assetsRoot + '/**/*.*', 'templates/html/**/*.*', 'templates/js/**/*.*', 'test/**/*.*'],
                tasks: ['build']
            }
        },
        connect: {
            server: {
                options: {
                    hostname: '*',
                    port: 8000,
                    base: 'gen'
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: [staticRoot + '/css/**/*.*'],
                        dest: 'gen/css',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [assetsRoot + '/images/**/*.*'],
                        dest: 'gen/images',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [assetsRoot + '/js/*.js'],
                        dest: 'gen/js',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [assetsRoot + '/js/lib/*.js'],
                        dest: 'gen/js/lib',
                        filter: 'isFile'
                    }
                ]
            }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', [
        'jshint:gruntfile',
        'jshint:main',
        'jshint:test',
        'csslint:main',
        'staticHandlebars',
        'cssmin',
        'copy'
    ]);

    grunt.registerTask('build', [
        'jshint:gruntfile',
        'jshint:main',
        'jshint:test',
        'csslint:main',
        'staticHandlebars',
        'cssmin',
        'copy'
    ]);
};
