/**
 * grunt-pagespeed-ngrok
 * http://www.jamescryer.com/grunt-pagespeed-ngrok
 *
 * Copyright (c) 2014 James Cryer
 * http://www.jamescryer.com
 */
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

    grunt.initConfig({
        'http-server': {
            'dev': {
                // the server root directory
                root: ".",

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

        }
    });
    grunt.loadNpmTasks('grunt-http-server');

    // Register default tasks
    grunt.registerTask('default', ['psi-ngrok']);
};
