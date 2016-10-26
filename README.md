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
1. [Generating responsive images in build process]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/2e6ebe23c5df9b81536ebc55449394c500bd3a9c)
1. [Automatically add srcset to dist artifacts]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/fa3b202ac174a9e813234ce020d4dc52a6e2b441)
1. [Google Analytics should asynchronously load]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/1025b7980298842f8060f1339722aa64ebaff318)
    * [Also fix it for all pages]
    (https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/5975f3e7a4e3cdd658482a5ca091ebcfade42a2f)
1. [Defer load of CSS after visible content]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/44f83fee1179acf47e8c05e310339b08385a3723)
1. [Minify images in build process]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/88624ee3e2e0279bdfb0be09d210df0fd813b4b8)
1. [Minify HTML]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/0a8e5cc4009cce203fcde4e01521737b22facfe0)
    * [I put main style in CRP but took it back out later]
    (https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/5b3c2972d0a0113ba4d2ec786c609048596ce133)
1. [Minify CSS]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/2bc0186f7d65da34f5e88d95385619b89c50b28d)
1. [Uglify Javascript]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/e44ff669a47806a59b7f448539ac317a899e5b98)
1. [Require responsive pizzeria.jpg in index.html]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/0a3f7b50b3362f69c16c8619eac169667e7c6de9)
1. [print.css should only be used for print media]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/ae389551bca30c55b2aedc81081638432405aa53)
1. [Add 100px pizzeria index img, remove Google font]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/979b3aa2115bde623b4c4609ad1056446af2d5de)
1. [Move styles to head / inline style.css]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/d3df83eb815572f9105d7e0f97c4e6b20b787d14)

## Getting Rid of Jank

### Frame Rate
1. [Get movingPizzas parent using getElementById instead of selector]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/1fc384f2a79d42af995c92e2e133d6d81072646a)
1. [Read scrollTop before modifying pizza styles to avoid forced 
synchronous layout](https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/3a44c2c04cedd969dc95d7358bd880be55d4b32d)
1. [Schedule position updates with requestAnimationFrame and debounce 
scroll handler](https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/fefdcafd99a483784b93b07a9aad28be50e285d2) 
see also:
[this commit](https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/20066a41bd8256ec21237d2ff5f66d84405b8adc)
1. [Get pizza position outside of update loop]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/0e1924cae7cf1ad440bca4d49fe1339683f96261)
1. [Fix .mover width and move to CSS]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/c91e248c8274a048bb696d8d14cce30bcff97cb9)
1. [Use transform instead of modifying the left style]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/bf910d9bde8003840141858573d752dfcb43e137)
1. [Calculate how many pizzas should be created]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/2dfb88cace24ed4c6ae1f01c9d9710fa1e2ed062)
1. [Hold reference to static movingPizzas1]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/3965f172853cfb8f21011c73785fc6ac422fc6ac)

### Computational Efficiency
1. [Extract randomPizzaContainers NodeList variable]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/076bfa95c750a6e6c75133a47fcbfc6e6afba17e)
1. [Avoid force sync layout by calculating size once]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/1978b3409811b61185d9eb996ec3e34daea61ec0)
1. [requestAnimationFrame for painting of size/pizzas]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/d81657694347f939585d2b32ce3748717ad71cdf)

### General Corrections
1. [Change querySelectors to getElementById/getElementByClassName]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/8c3c97bd21ec6c000c8288f545277b0885ea0ac4)
1. [Move getElementById call out of tight loop]
(https://github.com/justinharringa/frontend-nanodegree-perf-optimization/commit/0a638745f09fc51e2a6b1e685b45e1621933fd3a)

## Automation

1. [Using npm to manage packages](package.json)
1. [Using grunt to automate build and optimization of images / artifacts](Gruntfile.js)
1. [Using grunt to automatically add srcset attributes for images in HTML](Gruntfile.js)
1. [Using grunt to hook up ngrok task](Gruntfile.js)
1. [Using Travis-CI for an automated build w/ linting (via jshint/grunt)](.travis.yml)

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
