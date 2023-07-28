import { version } from '../package.json';

/* Amplitude Browser 2.0 SDK begin */
!function(){"use strict";!function(e,t){var n=e.amplitudeGTM||{_q:[],_iq:{}};if(n.invoked)e.console&&console.error&&console.error("Amplitude snippet has been loaded.");else{var r=function(e,t){e.prototype[t]=function(){return this._q.push({name:t,args:Array.prototype.slice.call(arguments,0)}),this}},s=function(e,t,n){return function(r){e._q.push({name:t,args:Array.prototype.slice.call(n,0),resolve:r})}},o=function(e,t,n){e[t]=function(){if(n)return{promise:new Promise(s(e,t,Array.prototype.slice.call(arguments)))}}},i=function(e){for(var t=0;t<m.length;t++)o(e,m[t],!1);for(var n=0;n<g.length;n++)o(e,g[n],!0)};n.invoked=!0;var a=t.createElement("script");a.type="text/javascript",a.integrity="sha384-JgGhMqE+JXsvjPMgPoI507H0dZ02IX50VHbmLsoC6hYCH5llQgn5JtEDH6O3vIrv",a.crossOrigin="anonymous",a.async=!0,a.src="https://cdn.amplitude.com/libs/analytics-browser-gtm-2.1.3-min.js.gz",a.onload=function(){e.amplitudeGTM.runQueuedFunctions||console.log("[Amplitude] Error: could not load SDK")};var u=t.getElementsByTagName("script")[0];u.parentNode.insertBefore(a,u);for(var c=function(){return this._q=[],this},l=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove","getUserProperties"],p=0;p<l.length;p++)r(c,l[p]);n.Identify=c;for(var d=function(){return this._q=[],this},v=["getEventProperties","setProductId","setQuantity","setPrice","setRevenue","setRevenueType","setEventProperties"],f=0;f<v.length;f++)r(d,v[f]);n.Revenue=d;var m=["getDeviceId","setDeviceId","getSessionId","setSessionId","getUserId","setUserId","setOptOut","setTransport","reset","extendSession"],g=["init","add","remove","track","logEvent","identify","groupIdentify","setGroup","revenue","flush"];i(n),n.createInstance=function(e){return n._iq[e]={_q:[]},i(n._iq[e]),n._iq[e]},e.amplitudeGTM=n,e.amplitude||(e.amplitude=e.amplitudeGTM)}}(window,document)}();
/* Amplitude Browser 2.0 SDK end */

/* Amplitude Wrapper begin */
(function(a,p) {
  // If window.amplitudeGTM doesn't exist, return
  const globalAmplitude = a.amplitudeGTM;
  if (!globalAmplitude || typeof globalAmplitude.init !== 'function') return;

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

      var identifyInstance = new globalAmplitude.Identify();

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

      var revenue = new globalAmplitude.Revenue()
          .setProductId(args.productId)
          .setQuantity(args.quantity || 1)
          .setPrice(args.price)
          .setRevenueType(args.revenueType || '')
          .setEventProperties(args.eventProperties || {})
          .setRevenue(args.revenue || (args.price * (args.quantity || 1)));
      client.revenue(revenue);
  };

  var gtmLibraryPlugin = () => {
      return {
          name: 'gtm-library-enrichment',
          type: 'enrichment',
          setup: async () => undefined,
          execute: async (event) => {
              event['library'] = `amplitude-ts-gtm/${version}`;
              return event;
          },
      };
  };

  var init = function(client, args) {
      const argsLength = args.length;
      const configuration =  args[argsLength - 1];
      const userAgentEnrichmentOptions = configuration['userAgentEnrichmentOptions'];
      if (userAgentEnrichment) {
        client.add(userAgentEnrichmentPlugin(userAgentEnrichmentOptions));
      }
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
      var client = !name ? globalAmplitude : globalAmplitude._iq[name];
      if (!client) {
        client = globalAmplitude.createInstance(name);
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
