/* Amplitude Browser 2.0 SDK begin */
!function(){"use strict";!function(e,t){var r=e.amplitudeGTM||{_q:[],_iq:{}};if(r.invoked)e.console&&console.error&&console.error("Amplitude snippet has been loaded.");else{var n=function(e,t){e.prototype[t]=function(){return this._q.push({name:t,args:Array.prototype.slice.call(arguments,0)}),this}},s=function(e,t,r){return function(n){e._q.push({name:t,args:Array.prototype.slice.call(r,0),resolve:n})}},o=function(e,t,r){e._q.push({name:t,args:Array.prototype.slice.call(r,0)})},i=function(e,t,r){e[t]=function(){if(r)return{promise:new Promise(s(e,t,Array.prototype.slice.call(arguments)))};o(e,t,Array.prototype.slice.call(arguments))}},a=function(e){for(var t=0;t<g.length;t++)i(e,g[t],!1);for(var r=0;r<y.length;r++)i(e,y[r],!0)};r.invoked=!0;var c=t.createElement("script");c.type="text/javascript",c.integrity="sha384-QQzLtB74EgBbntDs4qfdADKdpgjUX5KWFrvlBU4HdE2xvvAZsXDc9lm7wuXPtOmb",c.crossOrigin="anonymous",c.async=!0,c.src="https://cdn.amplitude.com/libs/analytics-browser-gtm-2.9.3-min.js.gz",c.onload=function(){e.amplitudeGTM.runQueuedFunctions||console.log("[Amplitude] Error: could not load SDK")};var u=t.getElementsByTagName("script")[0];u.parentNode.insertBefore(c,u);for(var l=function(){return this._q=[],this},p=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove","getUserProperties"],d=0;d<p.length;d++)n(l,p[d]);r.Identify=l;for(var v=function(){return this._q=[],this},f=["getEventProperties","setProductId","setQuantity","setPrice","setRevenue","setRevenueType","setEventProperties"],m=0;m<f.length;m++)n(v,f[m]);r.Revenue=v;var g=["getDeviceId","setDeviceId","getSessionId","setSessionId","getUserId","setUserId","setOptOut","setTransport","reset","extendSession"],y=["init","add","remove","track","logEvent","identify","groupIdentify","setGroup","revenue","flush"];a(r),r.createInstance=function(e){return r._iq[e]={_q:[]},a(r._iq[e]),r._iq[e]},e.amplitudeGTM=r,e.amplitude||(e.amplitude=e.amplitudeGTM)}}(window,document)}();
/* Amplitude Browser 2.0 SDK end */

/* Amplitude Page View V1 Enrichment Plugin begin */
var amplitudePageViewV1EnrichmentPlugin=function(e){"use strict";var t=function(){return t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},t.apply(this,arguments)};function n(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}l((r=r.apply(e,t||[])).next())}))}function r(e,t){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(u=0)),u;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){u.label=a[1];break}if(6===a[0]&&u.label<i[1]){u.label=i[1],i=a;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(a);break}i[2]&&u.ops.pop(),u.trys.pop();continue}a=t.call(e,u)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}var i=function(){var e=this;return{name:"@amplitude/plugin-page-view-v1-enrichment-browser",type:"enrichment",setup:function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){return e.loggerProvider.log("Installing @amplitude/plugin-page-view-v1-enrichment-browser."),[2]}))}))},execute:function(i){return n(e,void 0,void 0,(function(){var e,n,o,u,a,l;return r(this,(function(r){return"[Amplitude] Page Viewed"==i.event_type&&(e=i.event_properties||{},n=e["[Amplitude] Page Domain"],o=e["[Amplitude] Page Location"],u=e["[Amplitude] Page Path"],a=e["[Amplitude] Page Title"],l=e["[Amplitude] Page URL"],(i=t(t({},i),{event_type:"Page View",event_properties:t(t({},i.event_properties),{page_domain:null!=n?n:"",page_location:null!=o?o:"",page_path:null!=u?u:"",page_title:null!=a?a:"",page_url:null!=l?l:""})})).event_properties&&(delete i.event_properties["[Amplitude] Page Domain"],delete i.event_properties["[Amplitude] Page Location"],delete i.event_properties["[Amplitude] Page Path"],delete i.event_properties["[Amplitude] Page Title"],delete i.event_properties["[Amplitude] Page URL"])),[2,i]}))}))}}};return e.pageViewV1EnrichmentPlugin=i,e.plugin=i,Object.defineProperty(e,"__esModule",{value:!0}),e}({});
/* Amplitude Page View V1 Enrichment Plugin end */

/* Amplitude User Agent Enrichment Plugin begin */
var amplitudeUserAgentEnrichmentPlugin=function(i){"use strict";var e=function(){return e=Object.assign||function(i){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i},e.apply(this,arguments)};function o(i,e,o,r){return new(o||(o=Promise))((function(n,a){function t(i){try{b(r.next(i))}catch(i){a(i)}}function s(i){try{b(r.throw(i))}catch(i){a(i)}}function b(i){var e;i.done?n(i.value):(e=i.value,e instanceof o?e:new o((function(i){i(e)}))).then(t,s)}b((r=r.apply(i,e||[])).next())}))}function r(i,e){var o,r,n,a,t={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(b){return function(s){if(o)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(t=0)),t;)try{if(o=1,r&&(n=2&s[0]?r.return:s[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return t.label++,{value:s[1],done:!1};case 5:t.label++,r=s[1],s=[0];continue;case 7:s=t.ops.pop(),t.trys.pop();continue;default:if(!(n=t.trys,(n=n.length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){t=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){t.label=s[1];break}if(6===s[0]&&t.label<n[1]){t.label=n[1],n=s;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(s);break}n[2]&&t.ops.pop(),t.trys.pop();continue}s=e.call(i,t)}catch(i){s=[6,i],r=0}finally{o=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,b])}}}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a={exports:{}};!function(i,e){!function(o,r){var n="function",a="undefined",t="object",s="string",b="model",l="name",w="type",u="vendor",d="version",c="architecture",p="console",m="mobile",f="tablet",h="smarttv",v="wearable",g="embedded",x="Amazon",k="Apple",y="ASUS",_="BlackBerry",T="Browser",S="Chrome",q="Firefox",N="Google",z="Huawei",A="LG",E="Microsoft",O="Motorola",j="Opera",C="Samsung",P="Sharp",U="Sony",M="Xiaomi",R="Zebra",V="Facebook",B=function(i){for(var e={},o=0;o<i.length;o++)e[i[o].toUpperCase()]=i[o];return e},I=function(i,e){return typeof i===s&&-1!==D(e).indexOf(D(i))},D=function(i){return i.toLowerCase()},G=function(i,e){if(typeof i===s)return i=i.replace(/^\s\s*/,""),typeof e===a?i:i.substring(0,350)},W=function(i,e){for(var o,a,s,b,l,w,u=0;u<e.length&&!l;){var d=e[u],c=e[u+1];for(o=a=0;o<d.length&&!l;)if(l=d[o++].exec(i))for(s=0;s<c.length;s++)w=l[++a],typeof(b=c[s])===t&&b.length>0?2===b.length?typeof b[1]==n?this[b[0]]=b[1].call(this,w):this[b[0]]=b[1]:3===b.length?typeof b[1]!==n||b[1].exec&&b[1].test?this[b[0]]=w?w.replace(b[1],b[2]):r:this[b[0]]=w?b[1].call(this,w,b[2]):r:4===b.length&&(this[b[0]]=w?b[3].call(this,w.replace(b[1],b[2])):r):this[b]=w||r;u+=2}},F=function(i,e){for(var o in e)if(typeof e[o]===t&&e[o].length>0){for(var n=0;n<e[o].length;n++)if(I(e[o][n],i))return"?"===o?r:o}else if(I(e[o],i))return"?"===o?r:o;return i},L={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Z={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[d,[l,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[d,[l,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[l,d],[/opios[\/ ]+([\w\.]+)/i],[d,[l,j+" Mini"]],[/\bopr\/([\w\.]+)/i],[d,[l,j]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[l,d],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[d,[l,"UC"+T]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[d,[l,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[d,[l,"WeChat"]],[/konqueror\/([\w\.]+)/i],[d,[l,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[d,[l,"IE"]],[/yabrowser\/([\w\.]+)/i],[d,[l,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[l,/(.+)/,"$1 Secure "+T],d],[/\bfocus\/([\w\.]+)/i],[d,[l,q+" Focus"]],[/\bopt\/([\w\.]+)/i],[d,[l,j+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[d,[l,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[d,[l,"Dolphin"]],[/coast\/([\w\.]+)/i],[d,[l,j+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[d,[l,"MIUI "+T]],[/fxios\/([-\w\.]+)/i],[d,[l,q]],[/\bqihu|(qi?ho?o?|360)browser/i],[[l,"360 "+T]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[l,/(.+)/,"$1 "+T],d],[/(comodo_dragon)\/([\w\.]+)/i],[[l,/_/g," "],d],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[l,d],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[l],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[l,V],d],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[l,d],[/\bgsa\/([\w\.]+) .*safari\//i],[d,[l,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[d,[l,S+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[l,S+" WebView"],d],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[d,[l,"Android "+T]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[l,d],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[d,[l,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[d,l],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[l,[d,F,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[l,d],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[l,"Netscape"],d],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[d,[l,q+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[l,d],[/(cobalt)\/([\w\.]+)/i],[l,[d,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[c,"amd64"]],[/(ia32(?=;))/i],[[c,D]],[/((?:i[346]|x)86)[;\)]/i],[[c,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[c,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[c,"armhf"]],[/windows (ce|mobile); ppc;/i],[[c,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[c,/ower/,"",D]],[/(sun4\w)[;\)]/i],[[c,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[c,D]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[b,[u,C],[w,f]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[b,[u,C],[w,m]],[/((ipod|iphone)\d+,\d+)/i],[b,[u,k],[w,m]],[/(ipad\d+,\d+)/i],[b,[u,k],[w,f]],[/\((ip(?:hone|od)[\w ]*);/i],[b,[u,k],[w,m]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[b,[u,k],[w,f]],[/(macintosh);/i],[b,[u,k]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[b,[u,z],[w,f]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[b,[u,z],[w,m]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[b,/_/g," "],[u,M],[w,m]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[b,/_/g," "],[u,M],[w,f]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[b,[u,"OPPO"],[w,m]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[b,[u,"Vivo"],[w,m]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[b,[u,"Realme"],[w,m]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[b,[u,O],[w,m]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[b,[u,O],[w,f]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[b,[u,A],[w,f]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[b,[u,A],[w,m]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[b,[u,"Lenovo"],[w,f]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[b,/_/g," "],[u,"Nokia"],[w,m]],[/(pixel c)\b/i],[b,[u,N],[w,f]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[b,[u,N],[w,m]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[b,[u,U],[w,m]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[b,"Xperia Tablet"],[u,U],[w,f]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[b,[u,"OnePlus"],[w,m]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[b,[u,x],[w,f]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[b,/(.+)/g,"Fire Phone $1"],[u,x],[w,m]],[/(playbook);[-\w\),; ]+(rim)/i],[b,u,[w,f]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[b,[u,_],[w,m]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[b,[u,y],[w,f]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[b,[u,y],[w,m]],[/(nexus 9)/i],[b,[u,"HTC"],[w,f]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],[u,[b,/_/g," "],[w,m]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[b,[u,"Acer"],[w,f]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[b,[u,"Meizu"],[w,m]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[b,[u,P],[w,m]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[u,b,[w,m]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[u,b,[w,f]],[/(surface duo)/i],[b,[u,E],[w,f]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[b,[u,"Fairphone"],[w,m]],[/(u304aa)/i],[b,[u,"AT&T"],[w,m]],[/\bsie-(\w*)/i],[b,[u,"Siemens"],[w,m]],[/\b(rct\w+) b/i],[b,[u,"RCA"],[w,f]],[/\b(venue[\d ]{2,7}) b/i],[b,[u,"Dell"],[w,f]],[/\b(q(?:mv|ta)\w+) b/i],[b,[u,"Verizon"],[w,f]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[b,[u,"Barnes & Noble"],[w,f]],[/\b(tm\d{3}\w+) b/i],[b,[u,"NuVision"],[w,f]],[/\b(k88) b/i],[b,[u,"ZTE"],[w,f]],[/\b(nx\d{3}j) b/i],[b,[u,"ZTE"],[w,m]],[/\b(gen\d{3}) b.+49h/i],[b,[u,"Swiss"],[w,m]],[/\b(zur\d{3}) b/i],[b,[u,"Swiss"],[w,f]],[/\b((zeki)?tb.*\b) b/i],[b,[u,"Zeki"],[w,f]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[u,"Dragon Touch"],b,[w,f]],[/\b(ns-?\w{0,9}) b/i],[b,[u,"Insignia"],[w,f]],[/\b((nxa|next)-?\w{0,9}) b/i],[b,[u,"NextBook"],[w,f]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[u,"Voice"],b,[w,m]],[/\b(lvtel\-)?(v1[12]) b/i],[[u,"LvTel"],b,[w,m]],[/\b(ph-1) /i],[b,[u,"Essential"],[w,m]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[b,[u,"Envizen"],[w,f]],[/\b(trio[-\w\. ]+) b/i],[b,[u,"MachSpeed"],[w,f]],[/\btu_(1491) b/i],[b,[u,"Rotor"],[w,f]],[/(shield[\w ]+) b/i],[b,[u,"Nvidia"],[w,f]],[/(sprint) (\w+)/i],[u,b,[w,m]],[/(kin\.[onetw]{3})/i],[[b,/\./g," "],[u,E],[w,m]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[b,[u,R],[w,f]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[b,[u,R],[w,m]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[u,b,[w,p]],[/droid.+; (shield) bui/i],[b,[u,"Nvidia"],[w,p]],[/(playstation [345portablevi]+)/i],[b,[u,U],[w,p]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[b,[u,E],[w,p]],[/smart-tv.+(samsung)/i],[u,[w,h]],[/hbbtv.+maple;(\d+)/i],[[b,/^/,"SmartTV"],[u,C],[w,h]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[u,A],[w,h]],[/(apple) ?tv/i],[u,[b,k+" TV"],[w,h]],[/crkey/i],[[b,S+"cast"],[u,N],[w,h]],[/droid.+aft(\w)( bui|\))/i],[b,[u,x],[w,h]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[b,[u,P],[w,h]],[/(bravia[\w ]+)( bui|\))/i],[b,[u,U],[w,h]],[/(mitv-\w{5}) bui/i],[b,[u,M],[w,h]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[u,G],[b,G],[w,h]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[w,h]],[/((pebble))app/i],[u,b,[w,v]],[/droid.+; (glass) \d/i],[b,[u,N],[w,v]],[/droid.+; (wt63?0{2,3})\)/i],[b,[u,R],[w,v]],[/(quest( 2)?)/i],[b,[u,V],[w,v]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[u,[w,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[b,[w,m]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[b,[w,f]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[w,f]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[w,m]],[/(android[-\w\. ]{0,9});.+buil/i],[b,[u,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[d,[l,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[d,[l,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[l,d],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[d,l]],os:[[/microsoft (windows) (vista|xp)/i],[l,d],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[l,[d,F,L]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[l,"Windows"],[d,F,L]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[d,/_/g,"."],[l,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[l,"Mac OS"],[d,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[d,l],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[l,d],[/\(bb(10);/i],[d,[l,_]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[d,[l,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[d,[l,q+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[d,[l,"webOS"]],[/crkey\/([\d\.]+)/i],[d,[l,S+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[l,"Chromium OS"],d],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[l,d],[/(sunos) ?([\w\.\d]*)/i],[[l,"Solaris"],d],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[l,d]]},H=function(i,e){if(typeof i===t&&(e=i,i=r),!(this instanceof H))return new H(i,e).getResult();var n=i||(typeof o!==a&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:""),p=e?function(i,e){var o={};for(var r in i)e[r]&&e[r].length%2==0?o[r]=e[r].concat(i[r]):o[r]=i[r];return o}(Z,e):Z;return this.getBrowser=function(){var i,e={};return e[l]=r,e[d]=r,W.call(e,n,p.browser),e.major=typeof(i=e.version)===s?i.replace(/[^\d\.]/g,"").split(".")[0]:r,e},this.getCPU=function(){var i={};return i[c]=r,W.call(i,n,p.cpu),i},this.getDevice=function(){var i={};return i[u]=r,i[b]=r,i[w]=r,W.call(i,n,p.device),i},this.getEngine=function(){var i={};return i[l]=r,i[d]=r,W.call(i,n,p.engine),i},this.getOS=function(){var i={};return i[l]=r,i[d]=r,W.call(i,n,p.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(i){return n=typeof i===s&&i.length>350?G(i,350):i,this},this.setUA(n),this};H.VERSION="0.7.33",H.BROWSER=B([l,d,"major"]),H.CPU=B([c]),H.DEVICE=B([b,u,w,p,m,h,f,v,g]),H.ENGINE=H.OS=B([l,d]),i.exports&&(e=i.exports=H),e.UAParser=H;var $=typeof o!==a&&(o.jQuery||o.Zepto);if($&&!$.ua){var X=new H;$.ua=X.getResult(),$.ua.get=function(){return X.getUA()},$.ua.set=function(i){X.setUA(i);var e=X.getResult();for(var o in e)$.ua[o]=e[o]}}}("object"==typeof window?window:n)}(a,a.exports);var t=a.exports,s=function(i){var n=this;void 0===i&&(i={});var a,s=i.osName,b=void 0===s||s,l=i.osVersion,w=void 0===l||l,u=i.deviceManufacturer,d=void 0===u||u,c=i.deviceModel,p=void 0===c||c;return{name:"@amplitude/plugin-user-agent-enrichment-browser",type:"enrichment",setup:function(i){return o(this,void 0,void 0,(function(){var e;return r(this,(function(o){return"undefined"!=typeof navigator&&(e=navigator.userAgent),a=new t(e).getResult(),i.loggerProvider.log("Installing @amplitude/plugin-user-agent-enrichment-browser."),[2]}))}))},execute:function(i){return o(n,void 0,void 0,(function(){var o,n,t,s;return r(this,(function(r){return o=a.browser.name,n=a.browser.version,t=a.device.model||a.os.name,s=a.device.vendor,[2,e(e(e(e(e({},i),b&&{os_name:o}),w&&{os_version:n}),d&&{device_manufacturer:s}),p&&{device_model:t})]}))}))}}};return i.plugin=s,i.userAgentEnrichmentPlugin=s,Object.defineProperty(i,"__esModule",{value:!0}),i}({});
/* Amplitude User Agent Enrichment Plugin end */

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

      console.log("amplitude-wrapper.js, init, args: ", args);

      const argsLength = args.length;
      const configuration = args[argsLength - 1];

      console.log("amplitude-wrapper.js, init, configuration: ", configuration);
      console.log("amplitude-wrapper.js, init, excludeReferrersText: ", configuration.defaultTracking.attribution.excludeReferrersText);
      console.log("amplitude-wrapper.js, init, excludeReferrersRegex: ", configuration.defaultTracking.attribution.excludeReferrersRegex);

      const excludeReferrers = configuration.defaultTracking.attribution.excludeReferrersText;
      // Convert every item in configuration.defaultTracking.attribution.excludeReferrersRegex from string to regex
      const excludeReferrersRegex = configuration.defaultTracking.attribution.excludeReferrersRegex.map(item => new RegExp(item));
      // Append the converted regex items to excludeReferrers
      excludeReferrers.push(...excludeReferrersRegex);

      console.log("amplitude-wrapper.js, init, excludeReferrers: ", excludeReferrers);

      const userAgentEnrichmentOptions = configuration['userAgentEnrichmentOptions'];
      const pageViewLegacy = configuration['pageViewLegacy'];

      if (userAgentEnrichmentOptions) {
        client.add(amplitudeUserAgentEnrichmentPlugin.userAgentEnrichmentPlugin(userAgentEnrichmentOptions));
      }

      if (pageViewLegacy) {
        client.add(amplitudePageViewV1EnrichmentPlugin.pageViewV1EnrichmentPlugin())
      }

      console.log("amplitude-wrapper.js, init, args before: ", args);
      args[argsLength - 1].defaultTracking.attribution.excludeReferrers = excludeReferrers;
      console.log("amplitude-wrapper.js, init, args after : ", args);

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
