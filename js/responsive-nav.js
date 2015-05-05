!function(e,t,n){"use strict";var i=function(i,s){var o=!!t.getComputedStyle;o||(t.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return"float"===t&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this});var a,r,c,l,h,u,p=function(e,t,n,i){if("addEventListener"in e)try{e.addEventListener(t,n,i)}catch(s){if("object"!=typeof n||!n.handleEvent)throw s;e.addEventListener(t,function(e){n.handleEvent.call(n,e)},i)}else"attachEvent"in e&&("object"==typeof n&&n.handleEvent?e.attachEvent("on"+t,function(){n.handleEvent.call(n)}):e.attachEvent("on"+t,n))},d=function(e,t,n,i){if("removeEventListener"in e)try{e.removeEventListener(t,n,i)}catch(s){if("object"!=typeof n||!n.handleEvent)throw s;e.removeEventListener(t,function(e){n.handleEvent.call(n,e)},i)}else"detachEvent"in e&&("object"==typeof n&&n.handleEvent?e.detachEvent("on"+t,function(){n.handleEvent.call(n)}):e.detachEvent("on"+t,n))},v=function(e){if(e.children.length<1)throw new Error("The Nav container has no containing elements");for(var t=[],n=0;n<e.children.length;n++)1===e.children[n].nodeType&&t.push(e.children[n]);return t},f=function(e,t){for(var n in t)e.setAttribute(n,t[n])},m=function(e,t){0!==e.className.indexOf(t)&&(e.className+=" "+t,e.className=e.className.replace(/(^\s*)|(\s*$)/g,""))},g=function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/(^\s*)|(\s*$)/g,"")},y=function(e,t,n){for(var i=0;i<e.length;i++)t.call(n,i,e[i])},E=e.createElement("style"),_=e.documentElement,b=function(t,n){var i;this.options={animate:!0,transition:284,label:"Menu",insert:"before",customToggle:"navi_btn",closeOnNavClick:!1,openPos:"relative",navClass:"nav-collapse",navActiveClass:"js-nav-active",jsClass:"js",init:function(){},open:function(){},close:function(){}};for(i in n)this.options[i]=n[i];if(m(_,this.options.jsClass),this.wrapperEl=t.replace("#",""),e.getElementById(this.wrapperEl))this.wrapper=e.getElementById(this.wrapperEl);else{if(!e.querySelector(this.wrapperEl))throw new Error("The nav element you are trying to select doesn't exist");this.wrapper=e.querySelector(this.wrapperEl)}this.wrapper.inner=v(this.wrapper),r=this.options,a=this.wrapper,this._init(this)};return b.prototype={destroy:function(){this._removeStyles(),g(a,"closed"),g(a,"opened"),g(a,r.navClass),g(a,r.navClass+"-"+this.index),g(_,r.navActiveClass),a.removeAttribute("style"),a.removeAttribute("aria-hidden"),d(t,"resize",this,!1),d(t,"focus",this,!1),d(e.body,"touchmove",this,!1),d(c,"touchstart",this,!1),d(c,"touchend",this,!1),d(c,"mouseup",this,!1),d(c,"keyup",this,!1),d(c,"click",this,!1),r.customToggle?c.removeAttribute("aria-hidden"):c.parentNode.removeChild(c)},toggle:function(){l===!0&&(u?this.close():this.open())},open:function(){u||(g(a,"closed"),m(a,"opened"),m(_,r.navActiveClass),m(c,"active"),a.style.position=r.openPos,f(a,{"aria-hidden":"false"}),u=!0,r.open())},close:function(){u&&(m(a,"closed"),g(a,"opened"),g(_,r.navActiveClass),g(c,"active"),f(a,{"aria-hidden":"true"}),r.animate?(l=!1,setTimeout(function(){a.style.position="absolute",l=!0},r.transition+10)):a.style.position="absolute",u=!1,r.close())},resize:function(){"none"!==t.getComputedStyle(c,null).getPropertyValue("display")?(h=!0,f(c,{"aria-hidden":"false"}),a.className.match(/(^|\s)closed(\s|$)/)&&(f(a,{"aria-hidden":"true"}),a.style.position="absolute"),this._createStyles(),this._calcHeight()):(h=!1,f(c,{"aria-hidden":"true"}),f(a,{"aria-hidden":"false"}),a.style.position=r.openPos,this._removeStyles())},handleEvent:function(e){var n=e||t.event;switch(n.type){case"touchstart":this._onTouchStart(n);break;case"touchmove":this._onTouchMove(n);break;case"touchend":case"mouseup":this._onTouchEnd(n);break;case"click":this._preventDefault(n);break;case"keyup":this._onKeyUp(n);break;case"focus":case"resize":this.resize(n)}},_init:function(){this.index=n++,m(a,r.navClass),m(a,r.navClass+"-"+this.index),m(a,"closed"),l=!0,u=!1,this._closeOnNavClick(),this._createToggle(),this._transitions(),this.resize();var i=this;setTimeout(function(){i.resize()},20),p(t,"resize",this,!1),p(t,"focus",this,!1),p(e.body,"touchmove",this,!1),p(c,"touchstart",this,!1),p(c,"touchend",this,!1),p(c,"mouseup",this,!1),p(c,"keyup",this,!1),p(c,"click",this,!1),r.init()},_createStyles:function(){E.parentNode||(E.type="text/css",e.getElementsByTagName("head")[0].appendChild(E))},_removeStyles:function(){E.parentNode&&E.parentNode.removeChild(E)},_createToggle:function(){if(r.customToggle){var t=r.customToggle.replace("#","");if(e.getElementById(t))c=e.getElementById(t);else{if(!e.querySelector(t))throw new Error("The custom nav toggle you are trying to select doesn't exist");c=e.querySelector(t)}}else{var n=e.createElement("a");n.innerHTML=r.label,f(n,{href:"#","class":"nav-toggle"}),"after"===r.insert?a.parentNode.insertBefore(n,a.nextSibling):a.parentNode.insertBefore(n,a),c=n}},_closeOnNavClick:function(){if(r.closeOnNavClick){var e=a.getElementsByTagName("a"),t=this;y(e,function(n){p(e[n],"click",function(){h&&t.toggle()},!1)})}},_preventDefault:function(e){return e.preventDefault?(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.preventDefault(),e.stopPropagation(),!1):void(e.returnValue=!1)},_onTouchStart:function(e){Event.prototype.stopImmediatePropagation||this._preventDefault(e),this.startX=e.touches[0].clientX,this.startY=e.touches[0].clientY,this.touchHasMoved=!1,d(c,"mouseup",this,!1)},_onTouchMove:function(e){(Math.abs(e.touches[0].clientX-this.startX)>10||Math.abs(e.touches[0].clientY-this.startY)>10)&&(this.touchHasMoved=!0)},_onTouchEnd:function(e){if(this._preventDefault(e),h&&!this.touchHasMoved){if("touchend"===e.type)return void this.toggle();var n=e||t.event;3!==n.which&&2!==n.button&&this.toggle()}},_onKeyUp:function(e){var n=e||t.event;13===n.keyCode&&this.toggle()},_transitions:function(){if(r.animate){var e=a.style,t="max-height "+r.transition+"ms";e.WebkitTransition=e.MozTransition=e.OTransition=e.transition=t}},_calcHeight:function(){for(var e=0,t=0;t<a.inner.length;t++)e+=a.inner[t].offsetHeight;var n="."+r.jsClass+" ."+r.navClass+"-"+this.index+".opened{max-height:"+e+"px !important} ."+r.jsClass+" ."+r.navClass+"-"+this.index+".opened.dropdown-active {max-height:9999px !important}";E.styleSheet?E.styleSheet.cssText=n:E.innerHTML=n,n=""}},new b(i,s)};"undefined"!=typeof module&&module.exports?module.exports=i:t.responsiveNav=i}(document,window,0);