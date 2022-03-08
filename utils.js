/*!
 * @license @pangenerator/utils v2.5.1, Copyright © 2022 panGenerator
 * Released under MIT license
 * https://github.com/panGenerator/utils#readme
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).utils=t()}(this,(function(){"use strict";const e=(e,t,r)=>e+(t-e)*r,t=(t,r,a)=>({x:e(t.x,r.x,a),y:e(t.y,r.y,a),z:e(t.z,r.z,a)}),r=e=>e*e,a=e=>{const t=Array(e.length);for(let r=0;r<e.length;r++)t[r]=e[r];return t},n={"Ą":"A","Ć":"C","Ę":"E","Ł":"L","Ń":"N","Ó":"O","Ś":"S","Ź":"Z","Ż":"Z","ą":"a","ć":"c","ę":"e","ł":"l","ń":"n","ó":"o","ś":"s","ź":"z","ż":"z"},o=e=>e.replace(/([ĄĆĘŁŃÓŚŹŻąćęłńóśźż])/g,(function(e){return n[e]})),s=(e,t)=>r(t.x-e.x)+r(t.y-e.y)+(void 0!==e.z&&void 0!==t.z?r(t.z-e.z):0),i=(e,t,r)=>{const a=s(t,r);if(0===a)return s(e,t);const n=((e.x-t.x)*(r.x-t.x)+(e.y-t.y)*(r.y-t.y))/a;return s(e,n<0?t:n>1?r:{x:t.x+n*(r.x-t.x),y:t.y+n*(r.y-t.y)})},l=(e,t="-")=>o(e).replace(/[A-Z]/g,((e,r)=>{const a=e.toLowerCase();return r?t+a:a})).replace(/([-_ ]){1,}/g,t);var c={map:(e,t,r,a,n)=>a+(n-a)*(e-t)/(r-t),clamp:(e,t,r)=>e>r?r:e<t?t:e,random:(e,t)=>(void 0===t&&(t=e,e=0),e+Math.random()*(t-e)),randomDir:()=>Math.random()>.5?1:-1,lerp:e,lerp3:t,lerpedPoints:(e,r,a)=>{const n=[],o=1/(a+1);for(let s=0;s<a;s++)n.push(t(e,r,o+o*s));return n},square:r,dist:(e,t)=>Math.sqrt(s(e,t)),norm:(e,t,r)=>(e-t)/(r-t),degrees:e=>180*e/Math.PI,radians:e=>e*Math.PI/180,intersection:(e,t)=>{const r=t.x-e.x,a=t.y-e.y,n=Math.sqrt(a*a+r*r);if(n>e.r+t.r)return!1;if(n<Math.abs(e.r-t.r))return!1;const o=(e.r*e.r-t.r*t.r+n*n)/(2*n),s=e.x+r*o/n,i=e.y+a*o/n,l=Math.sqrt(e.r*e.r-o*o),c=l/n*-a,d=r*(l/n);return[{x:s+c,y:i+d},{x:s-c,y:i-d}]},randomName:e=>(Math.random().toString(36)+"00000000000000000").slice(2,e+2),timestampName:()=>{var e=6e4*(new Date).getTimezoneOffset();let t=new Date(Date.now()-e).toISOString().replace(/z|t/gi," ").trim().replace(/:/gi,"-");return t=t.substring(0,t.indexOf(".")),t},randomIndex:e=>Math.floor(Math.random()*e),copyArray:a,shuffleArray:e=>{const t=a(e);for(let e=t.length-1;e>0;e--){const r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}return t},filterUnique:e=>[...new Set(e)],lerpColor:(e,t,r)=>{var a=parseInt(e.replace(/#/g,""),16),n=a>>16,o=a>>8&255,s=255&a,i=parseInt(t.replace(/#/g,""),16);return"#"+((1<<24)+(n+r*((i>>16)-n)<<16)+(o+r*((i>>8&255)-o)<<8)+(s+r*((255&i)-s))|0).toString(16).slice(1)},precision:(e,t)=>Math.round(e*Math.pow(10,t))/Math.pow(10,t),loadJSON:(e,t)=>{const r=new XMLHttpRequest;r.overrideMimeType("application/json"),r.open("GET",e,!0),r.onreadystatechange=()=>{4===r.readyState&&200===r.status&&t(JSON.parse(r.responseText))},r.send(null)},removeDiacritics:o,splitChunks:(e,t,r)=>{const a=e.split(new RegExp("(.{"+t.toString()+"})"));return r?a.filter((e=>e.length===t)):a.filter((e=>e.length>0))},getQuarter:e=>[(e=e||new Date).getFullYear(),Math.floor(e.getMonth()/3)+1],quarterExtent:(e,t)=>[new Date(`${t}-${(3*(e-1)+1).toString().padStart(2,"0")}-01`),new Date(`${t}-${(3*e).toString().padStart(2,"0")}-${1===e||4===e?31:30}`)],downloadDataUri:e=>{var t=document.createElement("a");t.setAttribute("href",e.data),t.setAttribute("download",e.filename),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},polarToCartesian:(e,t)=>({x:e*Math.cos(t),y:e*Math.sin(t)}),cartesianToPolar:(e,t)=>{let r=Math.atan2(t,e);if(r<0)for(;r<0;)r+=2*Math.PI;if(r>=2*Math.PI)for(;r>=Math.PI;)r-=2*Math.PI;return{r:Math.sqrt(e*e+t*t),angle:r}},pageOffset:e=>{const t=e.getBoundingClientRect(),r=e.ownerDocument.defaultView;return{top:t.top+r.pageYOffset,left:t.left+r.pageXOffset}},fuzzySearch:(e,t)=>{const r=".*"+t.replace(/(.)/g,"$1.*").toLowerCase();var a=new RegExp(r);return e.filter((e=>a.test(e.toLowerCase())))},dist2:s,distToSegment2:i,distToSegment:(e,t,r)=>Math.sqrt(i(e,t,r)),sepCase:l,snakeCase:e=>l(e,"_"),kebabCase:e=>l(e,"-"),camelCase:e=>{const t=o(e);return(t.slice(0,1).toLowerCase()+t.slice(1)).replace(/([-_ ]){1,}/g," ").split(/[-_ ]/).reduce(((e,t)=>e+t[0].toUpperCase()+t.substring(1)))}};return c}));
