/*global module:false, require:false*/
module.exports = function (grunt) {

    var templatesRoot = 'templates/assets';
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
                src: templatesRoot + '/js/*.js'
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
                src: [templatesRoot + '/css/*.css']
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
                    'gen/assets/css/3cs-all.css': [templatesRoot + '/css/*.css']
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
                files: {
                    'gen/*.html': 'templates/html/*.html'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            default: {
                files: [templatesRoot + '/**/*.*', 'templates/html/**/*.*', 'templates/js/**/*.*', 'test/**/*.*'],
                tasks: ['build']
            }
        },
        connect: {
            server: {
                options: {
                    hostname: '*',
                    port: 8000
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: [templatesRoot + '/css/PIE.htc'],
                        dest: 'gen/assets/css',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [staticRoot + '/css/**/*.*'],
                        dest: 'gen/assets/css',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [templatesRoot + '/images/**/*.*'],
                        dest: 'gen/assets/images',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [templatesRoot + '/js/*.js'],
                        dest: 'gen/assets/js',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [templatesRoot + '/js/lib/*.js'],
                        dest: 'gen/assets/js/lib',
                        filter: 'isFile'
                    }
                ]
            }
        },
        curl: {
            'gen/assets/js/libs/jquery.placeholder.js': 'https://raw.github.com/mathiasbynens/jquery-placeholder/master/jquery.placeholder.js',
            'test/helpers/jasmine-jquery.js': 'https://raw.github.com/velesin/jasmine-jquery/1.5.7/lib/jasmine-jquery.js'
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
