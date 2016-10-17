# Project Requirements

## Install Node.js 5
You should install Node.js AND update npm following 
[these instructions](https://docs.npmjs.com/getting-started/installing-node).

**NOTE**: Node.js 6 won't work properly with grunt-responsive-images-extender 
([see issue](https://github.com/stephanmax/grunt-responsive-images-extender/issues/12))

## Install Dependencies
You will just need to run `npm install` to download the dependencies so 
long as you have installed Node.js and updated npm as per the 
instructions referenced above.

## Usage 

### Build the project
Running `grunt` will clean and copy files to the `dist` directory and 
will also generate responsive files for all images.

### Check PageSpeed Insights
Simply run `grunt psi-ngrok` to get PageSpeed Insights output

### Load via HTTP server to profile
If you'd like the local code accessible on the web, run the following 
command from the root directory of the project to be able to load via 
an HTTP Server:

```grunt http-server:dev```

# My Optimizations

## PageSpeed Score: Critical Rendering Path 

## Getting Rid of Jank

### Frame Rate

### Computational Efficiency

## Automation

1. Using npm to manage packages
1. Using grunt to automate build and optimization of images / artifacts
1. Using Travis-CI for an automated build with linting

# Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

# Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
