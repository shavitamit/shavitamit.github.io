/*
 AngularJS v1.5.0-beta.1
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(y,f,z){'use strict';function A(a){var d=[];t(d,f.noop).chars(a);return d.join("")}function g(a,d){var b={},c=a.split(","),k;for(k=0;k<c.length;k++)b[d?f.lowercase(c[k]):c[k]]=!0;return b}function B(a,d){null===a||a===z?a="":"string"!==typeof a&&(a=""+a);e.innerHTML=a;var b=5;do{if(0===b)throw u("uinput");b--;11>=document.documentMode&&n(e);a=e.innerHTML;e.innerHTML=a}while(a!==e.innerHTML);for(b=e.firstChild;b;){switch(b.nodeType){case 1:d.start(b.nodeName.toLowerCase(),C(b.attributes));
break;case 3:d.chars(b.textContent)}var c;if(!(c=b.firstChild)&&(1==b.nodeType&&d.end(b.nodeName.toLowerCase()),c=b.nextSibling,!c))for(;null==c;){b=b.parentNode;if(b===e)break;c=b.nextSibling;1==b.nodeType&&d.end(b.nodeName.toLowerCase())}b=c}for(;b=e.firstChild;)e.removeChild(b)}function C(a){for(var d={},b=0,c=a.length;b<c;b++){var k=a[b];d[k.name]=k.value}return d}function v(a){return a.replace(/&/g,"&amp;").replace(D,function(a){var b=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(b-55296)+
(a-56320)+65536)+";"}).replace(E,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(a,d){var b=!1,c=f.bind(a,a.push);return{start:function(a,e){a=f.lowercase(a);!b&&G[a]&&(b=a);b||!0!==r[a]||(c("<"),c(a),f.forEach(e,function(b,e){var g=f.lowercase(e),F="img"===a&&"src"===g||"background"===g;!0!==H[g]||!0===w[g]&&!d(b,F)||(c(" "),c(e),c('="'),c(v(b)),c('"'))}),c(">"))},end:function(a){a=f.lowercase(a);b||!0!==r[a]||!0===x[a]||(c("</"),c(a),c(">"));a==
b&&(b=!1)},chars:function(a){b||c(v(a))}}}function n(a){if(a.nodeType===Node.ELEMENT_NODE)for(var d=a.attributes,b=0,c=d.length;b<c;b++){var f=d[b],e=f.name.toLowerCase();if("xmlns:ns1"===e||0===e.indexOf("ns1:"))a.removeAttributeNode(f),b--,c--}(d=a.firstChild)&&n(d);(d=a.nextSibling)&&n(d)}var u=f.$$minErr("$sanitize"),D=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,E=/([^\#-~ |!])/g,x=g("area,br,col,hr,img,wbr"),h=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),m=g("rp,rt"),s=f.extend({},m,h),h=f.extend({},
h,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),m=f.extend({},m,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),I=g("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use"),
G=g("script,style"),r=f.extend({},x,h,m,s),w=g("background,cite,href,longdesc,src,usemap,xlink:href"),s=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),m=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0),H=f.extend({},w,m,s),e;(function(a){if(a.document&&a.document.implementation)a=a.document.implementation.createHTMLDocument("inert");else throw u("noinert");var d=(a.documentElement||a.getDocumentElement()).getElementsByTagName("body");1===d.length?e=d[0]:(d=a.createElement("html"),e=a.createElement("body"),d.appendChild(e),a.appendChild(d))})(y);f.module("ngSanitize",[]).provider("$sanitize",function(){var a=!1;this.$get=["$$sanitizeUri",function(d){a&&f.extend(r,I);return function(a){var c=
[];B(a,t(c,function(a,b){return!/^unsafe:/.test(d(a,b))}));return c.join("")}}];this.enableSvg=function(d){return f.isDefined(d)?(a=d,this):a}});f.module("ngSanitize").filter("linky",["$sanitize",function(a){var d=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,b=/^mailto:/i;return function(c,e){function g(a){a&&p.push(A(a))}function m(a,b){p.push("<a ");f.isDefined(e)&&p.push('target="',e,'" ');p.push('href="',a.replace(/"/g,"&quot;"),'">');g(b);p.push("</a>")}
if(!c)return c;for(var l,q=c,p=[],h,n;l=q.match(d);)h=l[0],l[2]||l[4]||(h=(l[3]?"http://":"mailto:")+h),n=l.index,g(q.substr(0,n)),m(h,l[0].replace(b,"")),q=q.substring(n+l[0].length);g(q);return a(p.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map