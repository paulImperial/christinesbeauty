/* curator-feed-facebook-layout */
(function () {
  var i,
    e,
    d = document,
    s = 'script',
    i = d.createElement('script');
  i.async = 1;
  i.src = (function () {
    // Loader
    var loader = new (function () {
      this.rC = -1;
      this.r = [];
      this.add = function (src) {
        this.r.push(src);
      };
      this.addTag = function (src, callback) {
        var head = document.getElementsByTagName('head')[0],
          tag = src.indexOf('.js') > 0 ? 'script' : 'link',
          s = document.createElement(tag);
        head.appendChild(s);
        s.onload = callback;
        if (tag === 'script') {
          s.type = 'text/javascript';
          s.src = src;
        } else if (tag === 'link') {
          s.rel = 'stylesheet';
          s.href = src;
        }
      };
      this.loadNext = function () {
        this.rC++;
        if (this.rC >= this.r.length) {
          this.done();
        } else {
          var r = this.r[this.rC];
          this.addTag(r, this.loadNext.bind(this));
        }
      };
      this.done = function () {
        this.onResourcesLoaded(window.Curator);
      };
      this.load = function (cb) {
        this.onResourcesLoaded = cb;
        this.loadNext();
      };
    })();

    // Config
    var config = {
      lang: 'en',
      debug: 0,
      hidePoweredBy: false,
      forceHttps: false,
      feed: {
        id: '8da633df-06eb-40e2-96c3-7359d5a417f8',
        apiEndpoint: 'https://api.curator.io/v1.1',
        postsPerPage: 5,
        params: {},
        limit: 25,
        showAds: false,
      },
      widget: {
        autoLoadNew: false,
        template: 'widget-waterfall',
        colWidth: 250,
        colGutter: 0,
        showLoadMore: true,
        continuousScroll: true,
        postsPerPage: 5,
        animate: false,
        progressiveLoad: false,
        lazyLoad: false,
      },
      post: {
        template: 'post-general',
        showTitles: true,
        showShare: true,
        showComments: true,
        showLikes: true,
        autoPlayVideos: false,
        clickAction: 'open-popup',
        clickReadMoreAction: 'open-popup',
        animate: true,
        maxHeight: 0,
      },
      popup: { template: 'popup', templateWrapper: 'popup-wrapper', autoPlayVideos: false, deepLink: false },
      filter: {
        template: 'filter',
        showNetworks: false,
        showSources: false,
        showAll: false,
        default: 'all',
        limitPosts: false,
        limitPostNumber: 0,
        period: '',
      },
      container: '#curator-feed-facebook-layout',
      type: 'Waterfall',
      theme: 'sydney',
    };
    let colours = {
      widgetBgColor: 'transparent',
      bgColor: '#ffffff',
      borderColor: '#cccccc',
      iconColor: '#222222',
      textColor: '#222222',
      linkColor: '#999999',
    };
    let styles = {};

    // Bootstrap
    function loaderCallback() {
      window.Curator.loadWidget(config, colours, styles);
    }

    // Run Loader
    loader.add('https://cdn.curator.io/4.0/css/curator.css');
    loader.add('https://cdn.curator.io/published-css/8da633df-06eb-40e2-96c3-7359d5a417f8.css');

    loader.add('https://cdn.curator.io/4.0/js/curator.embed.min.js');

    loader.load(loaderCallback);
  })();
  e = d.getElementsByTagName(s)[0];
  e.parentNode.insertBefore(i, e);
})();
