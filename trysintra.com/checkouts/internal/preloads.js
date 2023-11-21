
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.d6f1148781551c57b1d9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/116.latest.en.82a3448aad802fa532cb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/441.latest.en.04eff29e3df2d466c911.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/598.latest.en.5149eb8562553e5715a2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.11a05e04d13716c43e1a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/731.latest.en.13d4de92b88330e8fea9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/645.latest.en.b10e2fe4a010601fcc22.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/844.latest.en.7fcd45ae446a9a5574e8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/Redesign.latest.en.22eb550d8c102629a078.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/116.latest.en.7341d5192b49fd01d11c.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.e73cab4b1bb1fcdbd393.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/645.latest.en.dce299bdb7ac046d46b5.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/661.latest.en.696642ac24d7e1c1c56c.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0716/1200/6702/files/text_x320.png?v=1674909736"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  