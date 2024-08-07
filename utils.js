/*!
 * @license @pangenerator/utils v2.8.7, panGenerator 2024
 * Released under MIT license
 * https://github.com/panGenerator/utils#readme
 */
!function(global,factory){"object"==typeof exports&&"undefined"!=typeof module?factory(exports):"function"==typeof define&&define.amd?define(["exports"],factory):factory((global="undefined"!=typeof globalThis?globalThis:global||self).utils={})}(this,(function(exports){"use strict";const lerp=(start,stop,amt)=>start+(stop-start)*amt,square=a=>a*a,lerp3=(A,B,amt)=>({x:lerp(A.x,B.x,amt),y:lerp(A.y,B.y,amt),z:lerp(A.z,B.z,amt)}),dist2=(A,B)=>square(B.x-A.x)+square(B.y-A.y)+(void 0!==A.z&&void 0!==B.z?square(B.z-A.z):0),distToSegment2=(A,S,E)=>{const l2=dist2(S,E);if(0===l2)return dist2(A,S);const t=((A.x-S.x)*(E.x-S.x)+(A.y-S.y)*(E.y-S.y))/l2;return dist2(A,t<0?S:t>1?E:{x:S.x+t*(E.x-S.x),y:S.y+t*(E.y-S.y)})},table={"Ą":"A","Ć":"C","Ę":"E","Ł":"L","Ń":"N","Ó":"O","Ś":"S","Ź":"Z","Ż":"Z","ą":"a","ć":"c","ę":"e","ł":"l","ń":"n","ó":"o","ś":"s","ź":"z","ż":"z"},removeDiacritics=str=>str.replace(/([ĄĆĘŁŃÓŚŹŻąćęłńóśźż])/g,(function(l){return table[l]})),sepCase=(str,sep="-")=>removeDiacritics(str).replace(/[A-Z]/g,((letter,index)=>{const lcLet=letter.toLowerCase();return index?sep+lcLet:lcLet})).replace(/([-_ ]){1,}/g,sep),copyArray=source=>{const array=Array(source.length);for(let i=0;i<source.length;i++)array[i]=source[i];return array},getCSS=parentElement=>{const selectorTextArr=[];selectorTextArr.push("#"+parentElement.id);for(let c=0;c<parentElement.classList.length;c++)contains("."+parentElement.classList[c],selectorTextArr)||selectorTextArr.push("."+parentElement.classList[c]);const nodes=parentElement.getElementsByTagName("*");for(let i=0;i<nodes.length;i++){const id=nodes[i].id;contains("#"+id,selectorTextArr)||selectorTextArr.push("#"+id);const classes=nodes[i].classList;for(let c=0;c<classes.length;c++)contains("."+classes[c],selectorTextArr)||selectorTextArr.push("."+classes[c])}let extractedCSSText="";for(let i=0;i<document.styleSheets.length;i++){var s=document.styleSheets[i];try{if(!s.cssRules)continue}catch(e){if("SecurityError"!==e.name)throw e;continue}for(var cssRules=s.cssRules,r=0;r<cssRules.length;r++)contains(cssRules[r].selectorText,selectorTextArr)&&(extractedCSSText+=cssRules[r].cssText)}return extractedCSSText},appendCSS=(cssText,element)=>{var styleElement=document.createElement("style");styleElement.setAttribute("type","text/css"),styleElement.innerHTML=cssText;var refNode=element.hasChildNodes()?element.children[0]:null;element.insertBefore(styleElement,refNode)};exports.PID=class{constructor(P=0,I=0,D=0){this.set(P,I,D),this.ep=0,this.ei=0,this.ed=0}set(P=0,I=0,D=0){this.Kp=P,this.Ki=I,this.Kd=D}update(current,target){const error=target-current;return this.ei+=error,this.ed=error-this.ep,this.ep=error,this.Kp*this.ep+this.Ki*this.ei+this.Kd*this.ed}},exports.appendCSS=appendCSS,exports.camelCase=str=>{const text=removeDiacritics(str);return(text.slice(0,1).toLowerCase()+text.slice(1)).replace(/([-_ ]){1,}/g," ").split(/[-_ ]/).reduce(((cur,acc)=>cur+acc[0].toUpperCase()+acc.substring(1)))},exports.cartesianToPolar=P=>{let angle=Math.atan2(P.y,P.x);if(angle<0)for(;angle<0;)angle+=2*Math.PI;return{r:Math.sqrt(P.x*P.x+P.y*P.y),angle:angle}},exports.clamp=(val,min,max)=>val>max?max:val<min?min:val,exports.contains=(elem,arr)=>-1!==arr.indexOf(elem),exports.copyArray=copyArray,exports.datesBetween=(start,end)=>{const output=[];for(let date=start;date<=end;date.setDate(date.getDate()+1))output.push(new Date(date));return output},exports.degrees=radians=>180*radians/Math.PI,exports.dist=(A,B)=>Math.sqrt(dist2(A,B)),exports.dist2=dist2,exports.distToSegment=(A,S,E)=>Math.sqrt(distToSegment2(A,S,E)),exports.distToSegment2=distToSegment2,exports.downloadDataUri=options=>{var element=document.createElement("a");element.setAttribute("href",options.data),element.setAttribute("download",options.filename),element.style.display="none",document.body.appendChild(element),element.click(),document.body.removeChild(element)},exports.filterUnique=source=>[...new Set(source)],exports.fuzzySearch=(list,searchValue)=>{const buf=".*"+searchValue.replace(/(.)/g,"$1.*").toLowerCase();var reg=new RegExp(buf);return list.filter((e=>reg.test(e.toLowerCase())))},exports.getCSS=getCSS,exports.getQuarter=d=>[(d=d||new Date).getFullYear(),Math.floor(d.getMonth()/3)+1],exports.getSVGString=svgNode=>{svgNode.setAttribute("xlink","http://www.w3.org/1999/xlink");var cssStyleText=getCSS(svgNode);appendCSS(cssStyleText,svgNode);var svgString=(new XMLSerializer).serializeToString(svgNode);return svgString=(svgString=svgString.replace(/(\w+)?:?xlink=/g,"xmlns:xlink=")).replace(/NS\d+:href/g,"xlink:href")},exports.intersectCircles=(c1,c2)=>{const dx=c2.x-c1.x,dy=c2.y-c1.y,d=Math.sqrt(dy*dy+dx*dx);if(d>c1.r+c2.r)return!1;if(d<Math.abs(c1.r-c2.r))return!1;const a=(c1.r*c1.r-c2.r*c2.r+d*d)/(2*d),xc=c1.x+dx*a/d,yc=c1.y+dy*a/d,h=Math.sqrt(c1.r*c1.r-a*a),rx=h/d*-dy,ry=dx*(h/d);return[{x:xc+rx,y:yc+ry},{x:xc-rx,y:yc-ry}]},exports.intersectLines=(p1,p2,p3,p4)=>{if(p1.x===p2.x&&p1.y===p2.y||p3.x===p4.x&&p3.y===p4.y)return!1;const denominator=(p4.y-p3.y)*(p2.x-p1.x)-(p4.x-p3.x)*(p2.y-p1.y);if(0===denominator)return!1;let ua=((p4.x-p3.x)*(p1.y-p3.y)-(p4.y-p3.y)*(p1.x-p3.x))/denominator,ub=((p2.x-p1.x)*(p1.y-p3.y)-(p2.y-p1.y)*(p1.x-p3.x))/denominator;return!(ua<0||ua>1||ub<0||ub>1)&&{x:p1.x+ua*(p2.x-p1.x),y:p1.y+ua*(p2.y-p1.y)}},exports.kebabCase=str=>sepCase(str,"-"),exports.lerp=lerp,exports.lerp3=lerp3,exports.lerpColor=(a,b,amount)=>{var ah=parseInt(a.replace(/#/g,""),16),ar=ah>>16,ag=ah>>8&255,ab=255&ah,bh=parseInt(b.replace(/#/g,""),16);return"#"+((1<<24)+(ar+amount*((bh>>16)-ar)<<16)+(ag+amount*((bh>>8&255)-ag)<<8)+(ab+amount*((255&bh)-ab))|0).toString(16).slice(1)},exports.lerpStops=(A,B,count)=>{const points=[],step=1/(count+1);for(let i=0;i<count;i++)points.push(lerp3(A,B,step+step*i));return points},exports.loadJSON=(address,callback)=>{const xObj=new XMLHttpRequest;xObj.overrideMimeType("application/json"),xObj.open("GET",address,!0),xObj.onreadystatechange=()=>{4===xObj.readyState&&200===xObj.status&&callback(JSON.parse(xObj.responseText))},xObj.send(null)},exports.map=(value,low1,high1,low2,high2)=>low2+(high2-low2)*(value-low1)/(high1-low1),exports.norm=(value,start,stop)=>(value-start)/(stop-start),exports.pageOffset=elem=>{const rect=elem.getBoundingClientRect(),win=elem.ownerDocument.defaultView;return{top:rect.top+win.pageYOffset,left:rect.left+win.pageXOffset}},exports.polarToCartesian=(r,angle)=>({x:r*Math.cos(angle),y:r*Math.sin(angle)}),exports.precision=(value,precision)=>Math.round(value*Math.pow(10,precision))/Math.pow(10,precision),exports.quarterExtent=(quarter,year)=>[new Date(`${year}-${(3*(quarter-1)+1).toString().padStart(2,"0")}-01`),new Date(`${year}-${(3*quarter).toString().padStart(2,"0")}-${1===quarter||4===quarter?31:30}`)],exports.radians=degrees=>degrees*Math.PI/180,exports.random=(low,high)=>(void 0===high&&(high=low,low=0),low+Math.random()*(high-low)),exports.randomDir=()=>Math.random()>.5?1:-1,exports.randomIndex=N=>Math.floor(Math.random()*N),exports.randomName=N=>(Math.random().toString(36)+"00000000000000000").slice(2,N+2),exports.removeDiacritics=removeDiacritics,exports.removeNonAlphaNumeric=str=>str.replace(/[^A-Za-z0-9]/g,""),exports.sepCase=sepCase,exports.shallowCopyExcluding=(obj,prop)=>{const{[prop]:_,...copy}=obj;return copy},exports.shuffleArray=source=>{const array=copyArray(source);for(let i=array.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[array[i],array[j]]=[array[j],array[i]]}return array},exports.snakeCase=str=>sepCase(str,"_"),exports.splitChunks=(str,n,discard)=>{const chunks=str.split(new RegExp("(.{"+n.toString()+"})"));return discard?chunks.filter((x=>x.length===n)):chunks.filter((x=>x.length>0))},exports.square=square,exports.svgStringToImage=(svgString,width,height,format,transparent,callback)=>{var imgsrc="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(svgString))),canvas=document.createElement("canvas"),context=canvas.getContext("2d");canvas.width=width,canvas.height=height;var image=new Image;image.onload=()=>{context.clearRect(0,0,width,height),transparent||(context.beginPath(),context.fillStyle="#fff",context.fillRect(0,0,canvas.width,canvas.height)),context.drawImage(image,0,0,width,height),callback&&callback(canvas.toDataURL())},image.src=imgsrc},exports.svgToUri=svgNode=>{let source=(new XMLSerializer).serializeToString(svgNode);return source.match(/^<svg[^>]+xmlns="http:\/\/www\.w3\.org\/2000\/svg"/)||(source=source.replace(/^<svg/,'<svg xmlns="http://www.w3.org/2000/svg"')),source.match(/^<svg[^>]+"http:\/\/www\.w3\.org\/1999\/xlink"/)||(source=source.replace(/^<svg/,'<svg xmlns:xlink="http://www.w3.org/1999/xlink"')),source='<?xml version="1.0" standalone="no"?>\r\n'+source,"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(source)},exports.timestampName=()=>{var tzoffset=6e4*(new Date).getTimezoneOffset();let date=new Date(Date.now()-tzoffset).toISOString().replace(/z|t/gi," ").trim().replace(/:/gi,"-");return date=date.substring(0,date.indexOf(".")),date}}));
