(this["webpackJsonpgeoapp-front"]=this["webpackJsonpgeoapp-front"]||[]).push([[0],{168:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return o}));var r=n(16),a=n(56),o=(n(38),function(t,e,n,o,i){var c=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:n,onMove:function(t){var e=t.deltaX/c.innerWidth;o(e)},onEnd:function(t){var e=t.deltaX,n=c.innerWidth,a=e/n,o=t.velocityX,u=n/2,s=o>=0&&(o>.2||t.deltaX>u),p=(s?1-a:a)*n,f=0;if(p>5){var d=p/Math.abs(o);f=Math.min(d,540)}i(s,a<=0?.01:Object(r.j)(0,a,.9999),f)}})})}}]);
//# sourceMappingURL=0.c2f0ecb7.chunk.js.map