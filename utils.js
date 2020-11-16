/*!
 * @license @pangenerator/utils v2.2.0, Copyright © 2020 panGenerator
 * Released under MIT license
 * https://github.com/panGenerator/utils#readme
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).utils=t()}(this,(function(){"use strict";const e=(e,t,r)=>e+(t-e)*r,t=(t,r,n)=>({x:e(t.x,r.x,n),y:e(t.y,r.y,n),z:e(t.z,r.z,n)}),r=e=>e*e,n=e=>{const t=Array(e.length);for(let r=0;r<e.length;r++)t[r]=e[r];return t},o={"Ą":"A","Ć":"C","Ę":"E","Ł":"L","Ń":"N","Ó":"O","Ś":"S","Ź":"Z","Ż":"Z","ą":"a","ć":"c","ę":"e","ł":"l","ń":"n","ó":"o","ś":"s","ź":"z","ż":"z"};return{map:(e,t,r,n,o)=>n+(o-n)*(e-t)/(r-t),clamp:(e,t,r)=>e>r?r:e<t?t:e,random:(e,t)=>(void 0===t&&(t=e,e=0),e+Math.random()*(t-e)),randomDir:()=>Math.random()>.5?1:-1,lerp:e,lerp3:t,lerpedPoints:(e,r,n)=>{const o=[],a=1/(n+1);for(let i=0;i<n;i++)o.push(t(e,r,a+a*i));return o},square:r,dist:(e,t)=>Math.sqrt(r(t.x-e.x)+r(t.y-e.y)+(void 0!==e.z&&void 0!==t.z?r(t.z-e.z):0)),norm:(e,t,r)=>(e-t)/(r-t),degrees:e=>180*e/Math.PI,radians:e=>e*Math.PI/180,randomName:e=>(Math.random().toString(36)+"00000000000000000").slice(2,e+2),timestampName:()=>{var e=6e4*(new Date).getTimezoneOffset();let t=new Date(Date.now()-e).toISOString().replace(/z|t/gi," ").trim().replace(/:/gi,"-");return t=t.substring(0,t.indexOf(".")),t},randomIndex:e=>Math.floor(Math.random()*e),copyArray:n,shuffleArray:e=>{const t=n(e);for(let e=t.length-1;e>0;e--){const r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}return t},lerpColor:(e,t,r)=>{var n=parseInt(e.replace(/#/g,""),16),o=n>>16,a=n>>8&255,i=255&n,s=parseInt(t.replace(/#/g,""),16);return"#"+((1<<24)+(o+r*((s>>16)-o)<<16)+(a+r*((s>>8&255)-a)<<8)+(i+r*((255&s)-i))|0).toString(16).slice(1)},precision:(e,t)=>Math.round(e*Math.pow(10,t))/Math.pow(10,t),loadJSON:(e,t)=>{const r=new XMLHttpRequest;r.overrideMimeType("application/json"),r.open("GET",e,!0),r.onreadystatechange=()=>{4===r.readyState&&200===r.status&&t(JSON.parse(r.responseText))},r.send(null)},removeDiacritics:e=>e.replace(/([ĄĆĘŁŃÓŚŹŻąćęłńóśźż])/g,(function(e){return o[e]})),splitChunks:(e,t,r)=>{const n=e.split(new RegExp("(.{"+t.toString()+"})"));return r?n.filter(e=>e.length===t):n.filter(e=>e.length>0)},getQuarter:e=>[(e=e||new Date).getFullYear(),Math.floor(e.getMonth()/3)+1]}}));
