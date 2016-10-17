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
1. [Generating responsive images in build process](2e6ebe23c5df9b81536ebc55449394c500bd3a9c)
1. [Automatically add srcset to dist artifacts](commit/fa3b202ac174a9e813234ce020d4dc52a6e2b441)
1. [Google Analytics should asynchronously load](commit/1025b7980298842f8060f1339722aa64ebaff318)
    * [Also fix it for all pages](commit/5975f3e7a4e3cdd658482a5ca091ebcfade42a2f)
1. [Defer load of CSS after visible content](commit/44f83fee1179acf47e8c05e310339b08385a3723)
1. [Minify images in build process](commit/88624ee3e2e0279bdfb0be09d210df0fd813b4b8)
1. [Minify HTML](commit/0a8e5cc4009cce203fcde4e01521737b22facfe0)
    * [I put main style in CRP but took it back out later](commit/5b3c2972d0a0113ba4d2ec786c609048596ce133)
1. [Minify CSS](commit/2bc0186f7d65da34f5e88d95385619b89c50b28d)
1. [Uglify Javascript](commit/e44ff669a47806a59b7f448539ac317a899e5b98)
1. [Require responsive pizzeria.jpg in index.html](commit/0a3f7b50b3362f69c16c8619eac169667e7c6de9)
1. [print.css should only be used for print media](commit/ae389551bca30c55b2aedc81081638432405aa53)

## Getting Rid of Jank

### Frame Rate
1. [Get movingPizzas parent using getElementById instead of selector](commit/1fc384f2a79d42af995c92e2e133d6d81072646a)
1. [Read scrollTop before modifying pizza styles to avoid forced 
synchronous layout](commit/3a44c2c04cedd969dc95d7358bd880be55d4b32d)
1. [Schedule position updates with requestAnimationFrame and debounce 
scroll handler](commit/fefdcafd99a483784b93b07a9aad28be50e285d2) see also:
[this commit](commit/20066a41bd8256ec21237d2ff5f66d84405b8adc)
1. [Get pizza position outside of update loop](commit/0e1924cae7cf1ad440bca4d49fe1339683f96261)
1. [Only render 50 pizzas](commit/316be58758c56418773c04385f3d1ce8dc7c2d05)
1. [Fix .mover width and move to CSS](commit/c91e248c8274a048bb696d8d14cce30bcff97cb9)
1. [Use transform instead of modifying the left style](commit/bf910d9bde8003840141858573d752dfcb43e137)

### Computational Efficiency
1. [Extract randomPizzaContainers NodeList variable](commit/076bfa95c750a6e6c75133a47fcbfc6e6afba17e)
1. [Avoid force sync layout by calculating size once](commit/1978b3409811b61185d9eb996ec3e34daea61ec0)
1. [requestAnimationFrame for painting of size/pizzas](commit/d81657694347f939585d2b32ce3748717ad71cdf)

## Automation

1. Using npm to manage packages
1. Using grunt to automate build and optimization of images / artifacts
1. Using grunt to hook up ngrok task
1. Using Travis-CI for an automated build w/ linting (via jshint/grunt)

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
