/* Amplitude JavaScript SDK begin */
! function() {
  "use strict";
  ! function(e, t) {
      var n = e.amplitude || {
          _q: [],
          _iq: []
      };
      if (n.invoked) e.console && console.error && console.error("Amplitude snippet has been loaded.");
      else {
          n.invoked = !0;
          var r = t.createElement("script");
          r.type = "text/javascript", r.integrity = "sha384-QhZkEQJe2NFJ4yDkn/RFnD+NP0FINrep4tUh958v8McXRqszeRUQWbwBCfFqZvnF", r.crossOrigin = "anonymous", r.async = !0, r.src = "https://cdn.amplitude.com/libs/marketing-analytics-browser-0.2.0-min.js.gz", r.onload = function() {
              e.amplitude.runQueuedFunctions || console.log("[Amplitude] Error: could not load SDK")
          };
          var s = t.getElementsByTagName("script")[0];

          function v(e, t) {
              e.prototype[t] = function() {
                  return this._q.push({
                      name: t,
                      args: Array.prototype.slice.call(arguments, 0)
                  }), this
              }
          }
          s.parentNode.insertBefore(r, s);
          for (var o = function() {
                  return this._q = [], this
              }, i = ["add", "append", "clearAll", "prepend", "set", "setOnce", "unset", "preInsert", "postInsert", "remove", "getUserProperties"], a = 0; a < i.length; a++) v(o, i[a]);
          n.Identify = o;
          for (var u = function() {
                  return this._q = [], this
              }, c = ["getEventProperties", "setProductId", "setQuantity", "setPrice", "setRevenue", "setRevenueType", "setEventProperties"], p = 0; p < c.length; p++) v(u, c[p]);
          n.Revenue = u;
          var l = ["getDeviceId", "setDeviceId", "getSessionId", "setSessionId", "getUserId", "setUserId", "setOptOut", "setTransport", "reset"],
              d = ["init", "add", "remove", "track", "logEvent", "identify", "groupIdentify", "setGroup", "revenue", "flush"];

          function f(e) {
              function t(t, n) {
                  e[t] = function() {
                      var r = {
                          promise: new Promise((n => {
                              e._q.push({
                                  name: t,
                                  args: Array.prototype.slice.call(arguments, 0),
                                  resolve: n
                              })
                          }))
                      };
                      if (n) return r
                  }
              }
              for (var n = 0; n < l.length; n++) t(l[n], !1);
              for (var r = 0; r < d.length; r++) t(d[r], !0)
          }
          f(n), n.createInstance = function() {
              var e = n._iq.push({
                  _q: []
              }) - 1;
              return f(n._iq[e]), n._iq[e]
          }, e.amplitude = n
      }
  }(window, document)
}();
/* Amplitude JavaScript SDK end */

/* Amplitude Wrapper begin */
(function(a,p) {
  
  // If window.amplitude doesn't exist, return
  if (!a.amplitude || typeof a.amplitude.init !== 'function') return;

  // Enumerate available events
  var eventEnum = [
      'init',
      'track',
      'identify',
      'setGroup',
      'groupIdentify',
      'revenue',
      'flush',
      'getUserId',
      'setUserId',
      'getSessionId',
      'setSessionId',
      'setDeviceId',
      'getDeviceId',
      'reset',
      'setOptOut',
      'setTransport'
  ];

  var identifyEnum = [
      'add',
      'append',
      'clearAll',
      'prepend',
      'set',
      'setOnce',
      'remove',
      'preInsert',
      'postInsert'
  ];

  /* To work with the identify API, pass an array of identify operations (each an array in itself)
   * with the command and parameters included.
   *
   * window._amplitude('identify', [
   *     ['add', 'someUserProp', 1],
   *     ['add', 'someOtherUserProp', 2],
   *     ['prepend', 'anotherUserProp', 'someValue']
   * ]);
   *
   */
  var identify = function(args, group) {
      args = args.shift();
      
      // Validate identify args
      if (!Array.isArray(args) || args.length === 0) return;

      var identifyInstance = new a.amplitude.Identify();

      // Loop through the commands array and execute each
      args.forEach(function(identifyParams) {
          // If the operation is not in array format, return
          if (!Array.isArray(identifyParams)) return;

          var cmd = identifyParams.shift();

          // If not a valid "identify" command, return
          if (identifyEnum.indexOf(cmd) === -1) return;
          
          identifyInstance[cmd].apply(identifyInstance, identifyParams);
      });

      // If this API is used with groupIdentify, return the Identify object
      if (group === true) return identifyInstance;

      a.amplitude.identify(identifyInstance);
  };

  /* The groupIdentify API is similar to identify, except you also need to collect
   * the group name and type in addition to the Identify array.
   *
   * window._amplitude(
   *   'groupIdentify',
   *   'groupType',
   *   'groupName',
   *   [
   *     ['add', 'someGroupUserProp', 1],
   *     ['prepend', 'someOtherGroupUserProp', 'someValue']
   *   ]
   * );
   * 
   */
  var groupIdentify = function(args) {
      // Validate the arguments
      if (args.length < 3) return;
      if (typeof args[0] !== 'string' || typeof args[1] !== 'string') return;
      if (!Array.isArray(args[2]) || args[2].length === 0) return;

      // Get the Identify instance object
      var groupIdentifyInstance = identify([args[2]], true);

      a.amplitude.groupIdentify(args[0], args[1], groupIdentifyInstance);
  };

  /* To send revenue, you need to pass an object to the command:
   *
   * {
   *   productId: 'product_id', // required
   *   price: 10.88, // required
   *   quantity: 1,
   *   revenueType: 'purchase',
   *   eventProperties: {'someKey': 'someValue}
   * }
   * 
   */
  var revenue = function(args) {
      args = args.shift();
      // Validate revenue args
      if (!args.price || !args.productId)  return;

      var revenue = new a.amplitude.Revenue()
          .setProductId(args.productId)
          .setQuantity(args.quantity || 1)
          .setPrice(args.price)
          .setRevenueType(args.revenueType || '')
          .setEventProperties(args.eventProperties || {});

      a.amplitude.revenue(revenue);
  };

  // Build the command wrapper logic
  a[p] = a[p] || function() {

      // Build array out of arguments
      var args = [].slice.call(arguments, 0);
      
      // Pick the first argument as the command
      var cmd = args.shift();

      // If cmd is not one of the available ones, return
      if (eventEnum.indexOf(cmd) === -1) return;

      // Handle Revenue separately
      if (cmd === 'revenue') return revenue(args);

      // Handle Identify separately
      if (cmd === 'identify') return identify(args);

      // Handle GroupIdentify separately
      if (cmd === 'groupIdentify') return groupIdentify(args);

      // Otherwise call the method and pass the arguments
      return a.amplitude[cmd].apply(this, args);

  };
})(window, '_amplitude')
/* Amplitude wrapper end */