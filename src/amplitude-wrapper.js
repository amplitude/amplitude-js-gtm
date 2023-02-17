
/* Amplitude JavaScript SDK begin */
!function(){"use strict";!function(e,t){var n=e.amplitude||{_q:[],_iq:{}};if(n.invoked)e.console&&console.error&&console.error("Amplitude snippet has been loaded.");else{var r=function(e,t){e.prototype[t]=function(){return this._q.push({name:t,args:Array.prototype.slice.call(arguments,0)}),this}},s=function(e,t,n){return function(r){e._q.push({name:t,args:Array.prototype.slice.call(n,0),resolve:r})}},o=function(e,t,n){e[t]=function(){if(n)return{promise:new Promise(s(e,t,Array.prototype.slice.call(arguments)))}}},i=function(e){for(var t=0;t<m.length;t++)o(e,m[t],!1);for(var n=0;n<y.length;n++)o(e,y[n],!0)};n.invoked=!0;var a=t.createElement("script");a.type="text/javascript",a.integrity="sha384-D3GO8BuPsJOXpw91yAMykYKOR35cmmZ15qHBaEcl5aU3po1Xnyw2m+J4lL2+Cs1t",a.crossOrigin="anonymous",a.async=!0,a.src="https://cdn.amplitude.com/libs/marketing-analytics-browser-0.4.0-min.js.gz",a.onload=function(){e.amplitude.runQueuedFunctions||console.log("[Amplitude] Error: could not load SDK")};var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(a,c);for(var u=function(){return this._q=[],this},l=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove","getUserProperties"],p=0;p<l.length;p++)r(u,l[p]);n.Identify=u;for(var d=function(){return this._q=[],this},f=["getEventProperties","setProductId","setQuantity","setPrice","setRevenue","setRevenueType","setEventProperties"],v=0;v<f.length;v++)r(d,f[v]);n.Revenue=d;var m=["getDeviceId","setDeviceId","getSessionId","setSessionId","getUserId","setUserId","setOptOut","setTransport","reset"],y=["init","add","remove","track","logEvent","identify","groupIdentify","setGroup","revenue","flush"];i(n),n.createInstance=function(e){return n._iq[e]={_q:[]},i(n._iq[e]),n._iq[e]},e.amplitude=n}}(window,document)}();
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
  var identify = function(client, args, group) {
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

      client.identify(identifyInstance);
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
  var groupIdentify = function(client, args) {
      // Validate the arguments
      if (args.length < 3) return;
      if (typeof args[0] !== 'string' || typeof args[1] !== 'string') return;
      if (!Array.isArray(args[2]) || args[2].length === 0) return;

      // Get the Identify instance object
      var groupIdentifyInstance = identify(client, [args[2]], true);

      client.groupIdentify(args[0], args[1], groupIdentifyInstance);
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
  var revenue = function(client, args) {
      args = args.shift();
      // Validate revenue args
      if (!args.price || !args.productId)  return;

      var revenue = new a.amplitude.Revenue()
          .setProductId(args.productId)
          .setQuantity(args.quantity || 1)
          .setPrice(args.price)
          .setRevenueType(args.revenueType || '')
          .setEventProperties(args.eventProperties || {});

      client.revenue(revenue);
  };

  var gtmLibraryPlugin = () => {
      return {
          name: 'gtm-library-enrichment',
          type: 'enrichment',
          setup: async () => undefined,
          execute: async (event) => {
              event['library'] = `amplitude-ts-gtm/1231`;
              return event;
          },
      };
  };

  var init = function(client, args) {
      // as plugin order cannot be adjusted, init first then add library plugin to overwrite the library value
      let promise = client.init(...args).promise;
      promise.then(
          () => client.add(gtmLibraryPlugin())
      );
      return promise;
  };


  // Build the command wrapper logic
  a[p] = a[p] || function() {
      // Build array out of arguments
      var args = [].slice.call(arguments, 0);

      // Pick the first argument as the instance name
      var name = args.shift();
      var client = name ? a.amplitude : a.amplitude._iq[name];
      if (!client) {
        client = a.amplitude.createInstance(name);
      }

      // Pick the first argument as the command
      var cmd = args.shift();

      // If cmd is not one of the available ones, return
      if (eventEnum.indexOf(cmd) === -1) return;

      // Handle Revenue separately
      if (cmd === 'revenue') return revenue(client, args);

      // Handle Identify separately
      if (cmd === 'identify') return identify(client, args);

      // Handle GroupIdentify separately
      if (cmd === 'groupIdentify') return groupIdentify(client, args);

      if (cmd === 'init') return init(client, args);

      // Otherwise call the method and pass the arguments
      return client[cmd].apply(this, args);
  };
})(window, '_amplitude')
/* Amplitude wrapper end */
