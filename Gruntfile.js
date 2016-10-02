'use strict';

var ngrok = require('ngrok');

module.exports = function (grunt) {

    // Load grunt tasks
    require('load-grunt-tasks')(grunt);

    // Grunt configuration
    grunt.initConfig({
        pagespeed: {
            options: {
                nokey: true,
                locale: "en_US",
                threshold: 40
            },
            local: {
                options: {
                    strategy: "desktop"
                }
            },
            mobile: {
                options: {
                    strategy: "mobile"
                }
            }
        },
        'http-server': {
            'dev': {
                // the server root directory
                root: "dist",

                // the server port
                // can also be written as a function, e.g.
                // port: function() { return 8282; }
                port: 8080,

                // the host ip address
                // If specified to, for example, "127.0.0.1" the server will
                // only be available on that ip.
                // Specify "0.0.0.0" to be available everywhere
                host: "0.0.0.0",

                cache: "300",
                showDir: true,
                autoIndex: true,

                // server default file extension
                ext: "html"
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/', src: ['**'], dest: 'dist/'}
                ]
            }
        },
        clean: ['dist'],
        responsive_images: {
            main: {
                options: {
                    engine: 'im'
                },
                files: [{
                    expand: true,
                    src: ['img/**/*.{gif,png,jpg,jpeg}',
                        'views/**/*.{gif,png,jpg,jpeg}',
                        '!img/profilepic.jpg'],
                    cwd: 'src/',
                    dest: 'dist/'
                }]
            }
        },
        responsive_images_extender: {
            main: {
                options: {
                    ignore: ['.hosted']
                },
                files: [{
                    expand: true,
                    src: ['**/*.{html,htm}'],
                    cwd: 'dist/',
                    dest: 'dist/'
                }]
            }
        }
    });

    // Register customer task for ngrok
    grunt.registerTask('psi-ngrok', 'Run pagespeed with ngrok', function () {
        var done = this.async();
        var port = 9292;

        ngrok.connect(port, function (err, url) {
            if (err !== null) {
                grunt.fail.fatal(err);
                return done();
            }
            grunt.config.set('pagespeed.options.url', url);
            grunt.task.run('pagespeed');
            done();
        });
    });

    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-responsive-images-extender');

    // Register default tasks
    grunt.registerTask('default', ['clean', 'copy', 'responsive_images', 'responsive_images_extender']);
};
