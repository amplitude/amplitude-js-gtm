(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),((e,i,t)=>{!function(e,i){var t=e.amplitudeGTM||{_q:[],_iq:{}};if(t.invoked)e.console&&console.error&&console.error("Amplitude snippet has been loaded.");else{var r=function(e,i){e.prototype[i]=function(){return this._q.push({name:i,args:Array.prototype.slice.call(arguments,0)}),this}},n=function(e,i,t){return function(r){e._q.push({name:i,args:Array.prototype.slice.call(t,0),resolve:r})}},o=function(e,i,t){e._q.push({name:i,args:Array.prototype.slice.call(t,0)})},a=function(e,i,t){e[i]=function(){if(t)return{promise:new Promise(n(e,i,Array.prototype.slice.call(arguments)))};o(e,i,Array.prototype.slice.call(arguments))}},s=function(e){for(var i=0;i<m.length;i++)a(e,m[i],!1);for(var t=0;t<g.length;t++)a(e,g[t],!0)};t.invoked=!0;var u=i.createElement("script");u.type="text/javascript",u.integrity="sha384-d7HWf0tMaRmRdc2Y3tRWkBSVBNMZW7mGv56Pl0uFPLFnSLhSoH1GCTgFb4Tz43JK",u.crossOrigin="anonymous",u.async=!0,u.src="https://cdn.amplitude.com/libs/analytics-browser-gtm-2.11.1-min.js.gz",u.onload=function(){e.amplitudeGTM.runQueuedFunctions||console.log("[Amplitude] Error: could not load SDK")};var l=i.getElementsByTagName("script")[0];l.parentNode.insertBefore(u,l);for(var c=function(){return this._q=[],this},d=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove","getUserProperties"],p=0;p<d.length;p++)r(c,d[p]);t.Identify=c;for(var b=function(){return this._q=[],this},w=["getEventProperties","setProductId","setQuantity","setPrice","setRevenue","setRevenueType","setEventProperties"],f=0;f<w.length;f++)r(b,w[f]);t.Revenue=b;var m=["getDeviceId","setDeviceId","getSessionId","setSessionId","getUserId","setUserId","setOptOut","setTransport","reset","extendSession"],g=["init","add","remove","track","logEvent","identify","groupIdentify","setGroup","revenue","flush"];s(t),t.createInstance=function(e){return t._iq[e]={_q:[]},s(t._iq[e]),t._iq[e]},e.amplitudeGTM=t,e.amplitude||(e.amplitude=e.amplitudeGTM)}}(window,document);var r=function(e){var i=function(){return i=Object.assign||function(e){for(var i,t=1,r=arguments.length;t<r;t++)for(var n in i=arguments[t])Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);return e},i.apply(this,arguments)};function t(e,i,t,r){return new(t||(t=Promise))((function(n,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var i;e.done?n(e.value):(i=e.value,i instanceof t?i:new t((function(e){e(i)}))).then(a,s)}u((r=r.apply(e,i||[])).next())}))}function r(e,i){var t,r,n,o,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(u){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(t=1,r&&(n=2&s[0]?r.return:s[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((n=(n=a.trys).length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){a.label=s[1];break}if(6===s[0]&&a.label<n[1]){a.label=n[1],n=s;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(s);break}n[2]&&a.ops.pop(),a.trys.pop();continue}s=i.call(e,a)}catch(e){s=[6,e],r=0}finally{t=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}var n=function(){var e=this;return{name:"@amplitude/plugin-page-view-v1-enrichment-browser",type:"enrichment",setup:function(e){return t(this,void 0,void 0,(function(){return r(this,(function(i){return e.loggerProvider.log("Installing @amplitude/plugin-page-view-v1-enrichment-browser."),[2]}))}))},execute:function(n){return t(e,void 0,void 0,(function(){var e,t,o,a,s,u;return r(this,(function(r){return"[Amplitude] Page Viewed"==n.event_type&&(e=n.event_properties||{},t=e["[Amplitude] Page Domain"],o=e["[Amplitude] Page Location"],a=e["[Amplitude] Page Path"],s=e["[Amplitude] Page Title"],u=e["[Amplitude] Page URL"],(n=i(i({},n),{event_type:"Page View",event_properties:i(i({},n.event_properties),{page_domain:null!=t?t:"",page_location:null!=o?o:"",page_path:null!=a?a:"",page_title:null!=s?s:"",page_url:null!=u?u:""})})).event_properties&&(delete n.event_properties["[Amplitude] Page Domain"],delete n.event_properties["[Amplitude] Page Location"],delete n.event_properties["[Amplitude] Page Path"],delete n.event_properties["[Amplitude] Page Title"],delete n.event_properties["[Amplitude] Page URL"])),[2,n]}))}))}}};return e.pageViewV1EnrichmentPlugin=n,e.plugin=n,Object.defineProperty(e,"__esModule",{value:!0}),e}({}),n=function(e){var i=function(){return i=Object.assign||function(e){for(var i,t=1,r=arguments.length;t<r;t++)for(var n in i=arguments[t])Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);return e},i.apply(this,arguments)};function r(e,i,t,r){return new(t||(t=Promise))((function(n,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var i;e.done?n(e.value):(i=e.value,i instanceof t?i:new t((function(e){e(i)}))).then(a,s)}u((r=r.apply(e,i||[])).next())}))}function n(e,i){var t,r,n,o,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(u){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(t=1,r&&(n=2&s[0]?r.return:s[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((n=(n=a.trys).length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){a.label=s[1];break}if(6===s[0]&&a.label<n[1]){a.label=n[1],n=s;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(s);break}n[2]&&a.ops.pop(),a.trys.pop();continue}s=i.call(e,a)}catch(e){s=[6,e],r=0}finally{t=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t.g?t.g:"undefined"!=typeof self?self:{},a={exports:{}};!function(e,i){!function(t,r){var n="function",o="undefined",a="object",s="string",u="model",l="name",c="type",d="vendor",p="version",b="architecture",w="console",f="mobile",m="tablet",g="smarttv",v="wearable",h="embedded",y="Amazon",x="Apple",k="ASUS",_="BlackBerry",A="Browser",P="Chrome",T="Firefox",I="Google",S="Huawei",q="LG",R="Microsoft",E="Motorola",O="Opera",N="Samsung",U="Sharp",z="Sony",j="Xiaomi",M="Zebra",V="Facebook",C=function(e){for(var i={},t=0;t<e.length;t++)i[e[t].toUpperCase()]=e[t];return i},L=function(e,i){return typeof e===s&&-1!==G(i).indexOf(G(e))},G=function(e){return e.toLowerCase()},D=function(e,i){if(typeof e===s)return e=e.replace(/^\s\s*/,""),typeof i===o?e:e.substring(0,350)},B=function(e,i){for(var t,o,s,u,l,c,d=0;d<i.length&&!l;){var p=i[d],b=i[d+1];for(t=o=0;t<p.length&&!l;)if(l=p[t++].exec(e))for(s=0;s<b.length;s++)c=l[++o],typeof(u=b[s])===a&&u.length>0?2===u.length?typeof u[1]==n?this[u[0]]=u[1].call(this,c):this[u[0]]=u[1]:3===u.length?typeof u[1]!==n||u[1].exec&&u[1].test?this[u[0]]=c?c.replace(u[1],u[2]):r:this[u[0]]=c?u[1].call(this,c,u[2]):r:4===u.length&&(this[u[0]]=c?u[3].call(this,c.replace(u[1],u[2])):r):this[u]=c||r;d+=2}},F=function(e,i){for(var t in i)if(typeof i[t]===a&&i[t].length>0){for(var n=0;n<i[t].length;n++)if(L(i[t][n],e))return"?"===t?r:t}else if(L(i[t],e))return"?"===t?r:t;return e},W={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},H={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[p,[l,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[p,[l,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[l,p],[/opios[\/ ]+([\w\.]+)/i],[p,[l,O+" Mini"]],[/\bopr\/([\w\.]+)/i],[p,[l,O]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[l,p],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[p,[l,"UC"+A]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[p,[l,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[p,[l,"WeChat"]],[/konqueror\/([\w\.]+)/i],[p,[l,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[p,[l,"IE"]],[/yabrowser\/([\w\.]+)/i],[p,[l,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[l,/(.+)/,"$1 Secure "+A],p],[/\bfocus\/([\w\.]+)/i],[p,[l,T+" Focus"]],[/\bopt\/([\w\.]+)/i],[p,[l,O+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[p,[l,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[p,[l,"Dolphin"]],[/coast\/([\w\.]+)/i],[p,[l,O+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[p,[l,"MIUI "+A]],[/fxios\/([-\w\.]+)/i],[p,[l,T]],[/\bqihu|(qi?ho?o?|360)browser/i],[[l,"360 "+A]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[l,/(.+)/,"$1 "+A],p],[/(comodo_dragon)\/([\w\.]+)/i],[[l,/_/g," "],p],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[l,p],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[l],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[l,V],p],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[l,p],[/\bgsa\/([\w\.]+) .*safari\//i],[p,[l,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[p,[l,P+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[l,P+" WebView"],p],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[p,[l,"Android "+A]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[l,p],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[p,[l,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[p,l],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[l,[p,F,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[l,p],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[l,"Netscape"],p],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[p,[l,T+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[l,p],[/(cobalt)\/([\w\.]+)/i],[l,[p,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[b,"amd64"]],[/(ia32(?=;))/i],[[b,G]],[/((?:i[346]|x)86)[;\)]/i],[[b,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[b,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[b,"armhf"]],[/windows (ce|mobile); ppc;/i],[[b,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[b,/ower/,"",G]],[/(sun4\w)[;\)]/i],[[b,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[b,G]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[u,[d,N],[c,m]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[u,[d,N],[c,f]],[/((ipod|iphone)\d+,\d+)/i],[u,[d,x],[c,f]],[/(ipad\d+,\d+)/i],[u,[d,x],[c,m]],[/\((ip(?:hone|od)[\w ]*);/i],[u,[d,x],[c,f]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[u,[d,x],[c,m]],[/(macintosh);/i],[u,[d,x]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[u,[d,S],[c,m]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[u,[d,S],[c,f]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[u,/_/g," "],[d,j],[c,f]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[u,/_/g," "],[d,j],[c,m]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[u,[d,"OPPO"],[c,f]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[u,[d,"Vivo"],[c,f]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[u,[d,"Realme"],[c,f]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[u,[d,E],[c,f]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[u,[d,E],[c,m]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[u,[d,q],[c,m]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[u,[d,q],[c,f]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[u,[d,"Lenovo"],[c,m]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[u,/_/g," "],[d,"Nokia"],[c,f]],[/(pixel c)\b/i],[u,[d,I],[c,m]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[u,[d,I],[c,f]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[u,[d,z],[c,f]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[u,"Xperia Tablet"],[d,z],[c,m]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[u,[d,"OnePlus"],[c,f]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[u,[d,y],[c,m]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[u,/(.+)/g,"Fire Phone $1"],[d,y],[c,f]],[/(playbook);[-\w\),; ]+(rim)/i],[u,d,[c,m]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[u,[d,_],[c,f]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[u,[d,k],[c,m]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[u,[d,k],[c,f]],[/(nexus 9)/i],[u,[d,"HTC"],[c,m]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],[d,[u,/_/g," "],[c,f]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[u,[d,"Acer"],[c,m]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[u,[d,"Meizu"],[c,f]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[u,[d,U],[c,f]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[d,u,[c,f]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[d,u,[c,m]],[/(surface duo)/i],[u,[d,R],[c,m]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[u,[d,"Fairphone"],[c,f]],[/(u304aa)/i],[u,[d,"AT&T"],[c,f]],[/\bsie-(\w*)/i],[u,[d,"Siemens"],[c,f]],[/\b(rct\w+) b/i],[u,[d,"RCA"],[c,m]],[/\b(venue[\d ]{2,7}) b/i],[u,[d,"Dell"],[c,m]],[/\b(q(?:mv|ta)\w+) b/i],[u,[d,"Verizon"],[c,m]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[u,[d,"Barnes & Noble"],[c,m]],[/\b(tm\d{3}\w+) b/i],[u,[d,"NuVision"],[c,m]],[/\b(k88) b/i],[u,[d,"ZTE"],[c,m]],[/\b(nx\d{3}j) b/i],[u,[d,"ZTE"],[c,f]],[/\b(gen\d{3}) b.+49h/i],[u,[d,"Swiss"],[c,f]],[/\b(zur\d{3}) b/i],[u,[d,"Swiss"],[c,m]],[/\b((zeki)?tb.*\b) b/i],[u,[d,"Zeki"],[c,m]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[d,"Dragon Touch"],u,[c,m]],[/\b(ns-?\w{0,9}) b/i],[u,[d,"Insignia"],[c,m]],[/\b((nxa|next)-?\w{0,9}) b/i],[u,[d,"NextBook"],[c,m]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[d,"Voice"],u,[c,f]],[/\b(lvtel\-)?(v1[12]) b/i],[[d,"LvTel"],u,[c,f]],[/\b(ph-1) /i],[u,[d,"Essential"],[c,f]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[u,[d,"Envizen"],[c,m]],[/\b(trio[-\w\. ]+) b/i],[u,[d,"MachSpeed"],[c,m]],[/\btu_(1491) b/i],[u,[d,"Rotor"],[c,m]],[/(shield[\w ]+) b/i],[u,[d,"Nvidia"],[c,m]],[/(sprint) (\w+)/i],[d,u,[c,f]],[/(kin\.[onetw]{3})/i],[[u,/\./g," "],[d,R],[c,f]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[u,[d,M],[c,m]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[u,[d,M],[c,f]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[d,u,[c,w]],[/droid.+; (shield) bui/i],[u,[d,"Nvidia"],[c,w]],[/(playstation [345portablevi]+)/i],[u,[d,z],[c,w]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[u,[d,R],[c,w]],[/smart-tv.+(samsung)/i],[d,[c,g]],[/hbbtv.+maple;(\d+)/i],[[u,/^/,"SmartTV"],[d,N],[c,g]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[d,q],[c,g]],[/(apple) ?tv/i],[d,[u,x+" TV"],[c,g]],[/crkey/i],[[u,P+"cast"],[d,I],[c,g]],[/droid.+aft(\w)( bui|\))/i],[u,[d,y],[c,g]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[u,[d,U],[c,g]],[/(bravia[\w ]+)( bui|\))/i],[u,[d,z],[c,g]],[/(mitv-\w{5}) bui/i],[u,[d,j],[c,g]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[d,D],[u,D],[c,g]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[c,g]],[/((pebble))app/i],[d,u,[c,v]],[/droid.+; (glass) \d/i],[u,[d,I],[c,v]],[/droid.+; (wt63?0{2,3})\)/i],[u,[d,M],[c,v]],[/(quest( 2)?)/i],[u,[d,V],[c,v]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[d,[c,h]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[u,[c,f]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[u,[c,m]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[c,m]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[c,f]],[/(android[-\w\. ]{0,9});.+buil/i],[u,[d,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[p,[l,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[p,[l,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[l,p],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[p,l]],os:[[/microsoft (windows) (vista|xp)/i],[l,p],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[l,[p,F,W]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[l,"Windows"],[p,F,W]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[p,/_/g,"."],[l,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[l,"Mac OS"],[p,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[p,l],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[l,p],[/\(bb(10);/i],[p,[l,_]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[p,[l,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[p,[l,T+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[p,[l,"webOS"]],[/crkey\/([\d\.]+)/i],[p,[l,P+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[l,"Chromium OS"],p],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[l,p],[/(sunos) ?([\w\.\d]*)/i],[[l,"Solaris"],p],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[l,p]]},Z=function(e,i){if(typeof e===a&&(i=e,e=r),!(this instanceof Z))return new Z(e,i).getResult();var n=e||(typeof t!==o&&t.navigator&&t.navigator.userAgent?t.navigator.userAgent:""),w=i?function(e,i){var t={};for(var r in e)i[r]&&i[r].length%2==0?t[r]=i[r].concat(e[r]):t[r]=e[r];return t}(H,i):H;return this.getBrowser=function(){var e,i={};return i[l]=r,i[p]=r,B.call(i,n,w.browser),i.major=typeof(e=i.version)===s?e.replace(/[^\d\.]/g,"").split(".")[0]:r,i},this.getCPU=function(){var e={};return e[b]=r,B.call(e,n,w.cpu),e},this.getDevice=function(){var e={};return e[d]=r,e[u]=r,e[c]=r,B.call(e,n,w.device),e},this.getEngine=function(){var e={};return e[l]=r,e[p]=r,B.call(e,n,w.engine),e},this.getOS=function(){var e={};return e[l]=r,e[p]=r,B.call(e,n,w.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=typeof e===s&&e.length>350?D(e,350):e,this},this.setUA(n),this};Z.VERSION="0.7.33",Z.BROWSER=C([l,p,"major"]),Z.CPU=C([b]),Z.DEVICE=C([u,d,c,w,f,g,m,v,h]),Z.ENGINE=Z.OS=C([l,p]),e.exports&&(i=e.exports=Z),i.UAParser=Z;var Q=typeof t!==o&&(t.jQuery||t.Zepto);if(Q&&!Q.ua){var $=new Z;Q.ua=$.getResult(),Q.ua.get=function(){return $.getUA()},Q.ua.set=function(e){$.setUA(e);var i=$.getResult();for(var t in i)Q.ua[t]=i[t]}}}("object"==typeof window?window:o)}(a,a.exports);var s=a.exports,u=function(e){var t=this;void 0===e&&(e={});var o,a=e.osName,u=void 0===a||a,l=e.osVersion,c=void 0===l||l,d=e.deviceManufacturer,p=void 0===d||d,b=e.deviceModel,w=void 0===b||b;return{name:"@amplitude/plugin-user-agent-enrichment-browser",type:"enrichment",setup:function(e){return r(this,void 0,void 0,(function(){var i;return n(this,(function(t){return"undefined"!=typeof navigator&&(i=navigator.userAgent),o=new s(i).getResult(),e.loggerProvider.log("Installing @amplitude/plugin-user-agent-enrichment-browser."),[2]}))}))},execute:function(e){return r(t,void 0,void 0,(function(){var t,r,a,s;return n(this,(function(n){return t=o.browser.name,r=o.browser.version,a=o.device.model||o.os.name,s=o.device.vendor,[2,i(i(i(i(i({},e),u&&{os_name:t}),c&&{os_version:r}),p&&{device_manufacturer:s}),w&&{device_model:a})]}))}))}}};return e.plugin=u,e.userAgentEnrichmentPlugin=u,Object.defineProperty(e,"__esModule",{value:!0}),e}({});!function(e,i){const t=e.amplitudeGTM;if(t&&"function"==typeof t.init){var o=["init","track","identify","setGroup","groupIdentify","revenue","flush","getUserId","setUserId","getSessionId","setSessionId","setDeviceId","getDeviceId","reset","setOptOut","setTransport"],a=["add","append","clearAll","prepend","set","setOnce","remove","preInsert","postInsert"],s=function(e,i,r){if(i=i.shift(),Array.isArray(i)&&0!==i.length){var n=new t.Identify;if(i.forEach((function(e){if(Array.isArray(e)){var i=e.shift();-1!==a.indexOf(i)&&n[i].apply(n,e)}})),!0===r)return n;e.identify(n)}},u=function(e,i){if(!(i.length<3)&&"string"==typeof i[0]&&"string"==typeof i[1]&&Array.isArray(i[2])&&0!==i[2].length){var t=s(e,[i[2]],!0);e.groupIdentify(i[0],i[1],t)}},l=function(e,i){if((i=i.shift()).price&&i.productId){var r=(new t.Revenue).setProductId(i.productId).setQuantity(i.quantity||1).setPrice(i.price).setRevenueType(i.revenueType||"").setEventProperties(i.eventProperties||{}).setRevenue(i.revenue||i.price*(i.quantity||1));e.revenue(r)}},c=function(e,i){const t=i[i.length-1];if(console.log("amplitude-wrapper | configuration before: ",t),console.log("amplitude-wrapper | args before: ",i),t.autocapture.attribution){const e=[...t.autocapture.attribution.excludeReferrersText||[],...t.autocapture.attribution.excludeReferrersRegex?.map((e=>new RegExp(e)))||[]];delete t.autocapture.attribution.excludeReferrersText,delete t.autocapture.attribution.excludeReferrersRegex,0!==e.length&&(t.autocapture.attribution.excludeReferrers=e)}if(t.autocapture.elementInteractions){const e=[...t.autocapture.elementInteractions.pageUrlAllowListString||[],...t.autocapture.elementInteractions.pageUrlAllowListRegex?.map((e=>new RegExp(e)))||[]];delete t.autocapture.elementInteractions.pageUrlAllowListString,delete t.autocapture.elementInteractions.pageUrlAllowListRegex,0!==e.length&&(t.autocapture.elementInteractions.pageUrlAllowList=e);const i=[...t.autocapture.elementInteractions.dataAttributePrefixString||[],...t.autocapture.elementInteractions.dataAttributePrefixRegex?.map((e=>new RegExp(e)))||[]];delete t.autocapture.elementInteractions.dataAttributePrefixString,delete t.autocapture.elementInteractions.dataAttributePrefixRegex,0!==i.length&&(t.autocapture.elementInteractions.dataAttributePrefix=i)}const o=t.userAgentEnrichmentOptions,a=t.pageViewLegacy;o&&e.add(n.userAgentEnrichmentPlugin(o)),a&&e.add(r.pageViewV1EnrichmentPlugin()),console.log("amplitude-wrapper | configuration after: ",t),console.log("amplitude-wrapper | args after: ",i);let s=e.init(...i).promise;return s.then((()=>e.add({name:"gtm-library-enrichment",type:"enrichment",setup:async()=>{},execute:async e=>(e.library="amplitude-ts-gtm/3.10.1",e)}))),s};e[i]=e[i]||function(){var e=[].slice.call(arguments,0),i=e.shift(),r=i?t._iq[i]:t;r||(r=t.createInstance(i));var n=e.shift();if(-1!==o.indexOf(n))return"revenue"===n?l(r,e):"identify"===n?s(r,e):"groupIdentify"===n?u(r,e):"init"===n?c(r,e):r[n].apply(this,e)}}}(window,"_amplitude")})(0,0,e)})();