"use strict";(self.webpackChunksf_erd_generator_by_nttdata_crm=self.webpackChunksf_erd_generator_by_nttdata_crm||[]).push([[840],{840:(t,e,a)=>{a.d(e,{a:()=>l,b:()=>_,c:()=>d,d:()=>I,e:()=>M,f:()=>j,g:()=>C,h:()=>A,i:()=>x,j:()=>N,k:()=>R,l:()=>o,m:()=>Y,p:()=>B,s:()=>T,u:()=>h});var r=a(2110),n=a(609),i=a(5251);const s={extension:(t,e,a)=>{r.l.trace("Making markers for ",a),t.append("defs").append("marker").attr("id",a+"_"+e+"-extensionStart").attr("class","marker extension "+e).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id",a+"_"+e+"-extensionEnd").attr("class","marker extension "+e).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},composition:(t,e,a)=>{t.append("defs").append("marker").attr("id",a+"_"+e+"-compositionStart").attr("class","marker composition "+e).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",a+"_"+e+"-compositionEnd").attr("class","marker composition "+e).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},aggregation:(t,e,a)=>{t.append("defs").append("marker").attr("id",a+"_"+e+"-aggregationStart").attr("class","marker aggregation "+e).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",a+"_"+e+"-aggregationEnd").attr("class","marker aggregation "+e).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},dependency:(t,e,a)=>{t.append("defs").append("marker").attr("id",a+"_"+e+"-dependencyStart").attr("class","marker dependency "+e).attr("refX",6).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",a+"_"+e+"-dependencyEnd").attr("class","marker dependency "+e).attr("refX",13).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},lollipop:(t,e,a)=>{t.append("defs").append("marker").attr("id",a+"_"+e+"-lollipopStart").attr("class","marker lollipop "+e).attr("refX",13).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6),t.append("defs").append("marker").attr("id",a+"_"+e+"-lollipopEnd").attr("class","marker lollipop "+e).attr("refX",1).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6)},point:(t,e,a)=>{t.append("marker").attr("id",a+"_"+e+"-pointEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",6).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",a+"_"+e+"-pointStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",4.5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},circle:(t,e,a)=>{t.append("marker").attr("id",a+"_"+e+"-circleEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",a+"_"+e+"-circleStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},cross:(t,e,a)=>{t.append("marker").attr("id",a+"_"+e+"-crossEnd").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),t.append("marker").attr("id",a+"_"+e+"-crossStart").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},barb:(t,e,a)=>{t.append("defs").append("marker").attr("id",a+"_"+e+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")}},l=(t,e,a,r)=>{e.forEach((e=>{s[e](t,a,r)}))};const d=(t,e,a,i)=>{let s=t||"";if("object"===typeof s&&(s=s[0]),(0,r.m)((0,r.c)().flowchart.htmlLabels)){s=s.replace(/\\n|\n/g,"<br />"),r.l.debug("vertexText"+s);let t=function(t){const e=(0,n.Ltv)(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),a=e.append("xhtml:div"),r=t.label,i=t.isNode?"nodeLabel":"edgeLabel";var s,l;return a.html('<span class="'+i+'" '+(t.labelStyle?'style="'+t.labelStyle+'"':"")+">"+r+"</span>"),s=a,(l=t.labelStyle)&&s.attr("style",l),a.style("display","inline-block"),a.style("white-space","nowrap"),a.attr("xmlns","http://www.w3.org/1999/xhtml"),e.node()}({isNode:i,label:(0,r.M)(s).replace(/fa[blrs]?:fa-[\w-]+/g,(t=>`<i class='${t.replace(":"," ")}'></i>`)),labelStyle:e.replace("fill:","color:")});return t}{const t=document.createElementNS("http://www.w3.org/2000/svg","text");t.setAttribute("style",e.replace("color:","fill:"));let r=[];r="string"===typeof s?s.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(s)?s:[];for(const e of r){const r=document.createElementNS("http://www.w3.org/2000/svg","tspan");r.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),r.setAttribute("dy","1em"),r.setAttribute("x","0"),a?r.setAttribute("class","title-row"):r.setAttribute("class","row"),r.textContent=e.trim(),t.appendChild(r)}return t}},o=async(t,e,a,s)=>{let l;const o=e.useHtmlLabels||(0,r.m)((0,r.c)().flowchart.htmlLabels);l=a||"node default";const h=t.insert("g").attr("class",l).attr("id",e.domId||e.id),c=h.insert("g").attr("class","label").attr("style",e.labelStyle);let y;y=void 0===e.labelText?"":"string"===typeof e.labelText?e.labelText:e.labelText[0];const p=c.node();let g;g="markdown"===e.labelType?(0,i.a)(c,(0,r.d)((0,r.M)(y),(0,r.c)()),{useHtmlLabels:o,width:e.width||(0,r.c)().flowchart.wrappingWidth,classes:"markdown-node-label"}):p.appendChild(d((0,r.d)((0,r.M)(y),(0,r.c)()),e.labelStyle,!1,s));let x=g.getBBox();const f=e.padding/2;if((0,r.m)((0,r.c)().flowchart.htmlLabels)){const t=g.children[0],e=(0,n.Ltv)(g),a=t.getElementsByTagName("img");if(a){const t=""===y.replace(/<img[^>]*>/g,"").trim();await Promise.all([...a].map((e=>new Promise((a=>{function n(){if(e.style.display="flex",e.style.flexDirection="column",t){const t=(0,r.c)().fontSize?(0,r.c)().fontSize:window.getComputedStyle(document.body).fontSize,a=5,n=parseInt(t,10)*a+"px";e.style.minWidth=n,e.style.maxWidth=n}else e.style.width="100%";a(e)}setTimeout((()=>{e.complete&&n()})),e.addEventListener("error",n),e.addEventListener("load",n)})))))}x=t.getBoundingClientRect(),e.attr("width",x.width),e.attr("height",x.height)}return o?c.attr("transform","translate("+-x.width/2+", "+-x.height/2+")"):c.attr("transform","translate(0, "+-x.height/2+")"),e.centerLabel&&c.attr("transform","translate("+-x.width/2+", "+-x.height/2+")"),c.insert("rect",":first-child"),{shapeSvg:h,bbox:x,halfPadding:f,label:c}},h=(t,e)=>{const a=e.node().getBBox();t.width=a.width,t.height=a.height};function c(t,e,a,r){return t.insert("polygon",":first-child").attr("points",r.map((function(t){return t.x+","+t.y})).join(" ")).attr("class","label-container").attr("transform","translate("+-e/2+","+a/2+")")}function y(t,e,a,r){var n=t.x,i=t.y,s=n-r.x,l=i-r.y,d=Math.sqrt(e*e*l*l+a*a*s*s),o=Math.abs(e*a*s/d);r.x<n&&(o=-o);var h=Math.abs(e*a*l/d);return r.y<i&&(h=-h),{x:n+o,y:i+h}}function p(t,e,a,r){var n,i,s,l,d,o,h,c,y,p,x,f,u;if(n=e.y-t.y,s=t.x-e.x,d=e.x*t.y-t.x*e.y,y=n*a.x+s*a.y+d,p=n*r.x+s*r.y+d,(0===y||0===p||!g(y,p))&&(i=r.y-a.y,l=a.x-r.x,o=r.x*a.y-a.x*r.y,h=i*t.x+l*t.y+o,c=i*e.x+l*e.y+o,(0===h||0===c||!g(h,c))&&0!==(x=n*l-i*s)))return f=Math.abs(x/2),{x:(u=s*o-l*d)<0?(u-f)/x:(u+f)/x,y:(u=i*d-n*o)<0?(u-f)/x:(u+f)/x}}function g(t,e){return t*e>0}const x=(t,e)=>{var a,r,n=t.x,i=t.y,s=e.x-n,l=e.y-i,d=t.width/2,o=t.height/2;return Math.abs(l)*d>Math.abs(s)*o?(l<0&&(o=-o),a=0===l?0:o*s/l,r=o):(s<0&&(d=-d),a=d,r=0===s?0:d*l/s),{x:n+a,y:i+r}},f={node:function(t,e){return t.intersect(e)},circle:function(t,e,a){return y(t,e,e,a)},ellipse:y,polygon:function(t,e,a){var r=t.x,n=t.y,i=[],s=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY;"function"===typeof e.forEach?e.forEach((function(t){s=Math.min(s,t.x),l=Math.min(l,t.y)})):(s=Math.min(s,e.x),l=Math.min(l,e.y));for(var d=r-t.width/2-s,o=n-t.height/2-l,h=0;h<e.length;h++){var c=e[h],y=e[h<e.length-1?h+1:0],g=p(t,a,{x:d+c.x,y:o+c.y},{x:d+y.x,y:o+y.y});g&&i.push(g)}return i.length?(i.length>1&&i.sort((function(t,e){var r=t.x-a.x,n=t.y-a.y,i=Math.sqrt(r*r+n*n),s=e.x-a.x,l=e.y-a.y,d=Math.sqrt(s*s+l*l);return i<d?-1:i===d?0:1})),i[0]):t},rect:x},u=(t,e,a)=>{const r=(t=>{const e=new Set;for(const a of t)switch(a){case"x":e.add("right"),e.add("left");break;case"y":e.add("up"),e.add("down");break;default:e.add(a)}return e})(t),n=e.height+2*a.padding,i=n/2,s=e.width+2*i+a.padding,l=a.padding/2;return r.has("right")&&r.has("left")&&r.has("up")&&r.has("down")?[{x:0,y:0},{x:i,y:0},{x:s/2,y:2*l},{x:s-i,y:0},{x:s,y:0},{x:s,y:-n/3},{x:s+2*l,y:-n/2},{x:s,y:-2*n/3},{x:s,y:-n},{x:s-i,y:-n},{x:s/2,y:-n-2*l},{x:i,y:-n},{x:0,y:-n},{x:0,y:-2*n/3},{x:-2*l,y:-n/2},{x:0,y:-n/3}]:r.has("right")&&r.has("left")&&r.has("up")?[{x:i,y:0},{x:s-i,y:0},{x:s,y:-n/2},{x:s-i,y:-n},{x:i,y:-n},{x:0,y:-n/2}]:r.has("right")&&r.has("left")&&r.has("down")?[{x:0,y:0},{x:i,y:-n},{x:s-i,y:-n},{x:s,y:0}]:r.has("right")&&r.has("up")&&r.has("down")?[{x:0,y:0},{x:s,y:-i},{x:s,y:-n+i},{x:0,y:-n}]:r.has("left")&&r.has("up")&&r.has("down")?[{x:s,y:0},{x:0,y:-i},{x:0,y:-n+i},{x:s,y:-n}]:r.has("right")&&r.has("left")?[{x:i,y:0},{x:i,y:-l},{x:s-i,y:-l},{x:s-i,y:0},{x:s,y:-n/2},{x:s-i,y:-n},{x:s-i,y:-n+l},{x:i,y:-n+l},{x:i,y:-n},{x:0,y:-n/2}]:r.has("up")&&r.has("down")?[{x:s/2,y:0},{x:0,y:-l},{x:i,y:-l},{x:i,y:-n+l},{x:0,y:-n+l},{x:s/2,y:-n},{x:s,y:-n+l},{x:s-i,y:-n+l},{x:s-i,y:-l},{x:s,y:-l}]:r.has("right")&&r.has("up")?[{x:0,y:0},{x:s,y:-i},{x:0,y:-n}]:r.has("right")&&r.has("down")?[{x:0,y:0},{x:s,y:0},{x:0,y:-n}]:r.has("left")&&r.has("up")?[{x:s,y:0},{x:0,y:-i},{x:s,y:-n}]:r.has("left")&&r.has("down")?[{x:s,y:0},{x:0,y:0},{x:s,y:-n}]:r.has("right")?[{x:i,y:-l},{x:i,y:-l},{x:s-i,y:-l},{x:s-i,y:0},{x:s,y:-n/2},{x:s-i,y:-n},{x:s-i,y:-n+l},{x:i,y:-n+l},{x:i,y:-n+l}]:r.has("left")?[{x:i,y:0},{x:i,y:-l},{x:s-i,y:-l},{x:s-i,y:-n+l},{x:i,y:-n+l},{x:i,y:-n},{x:0,y:-n/2}]:r.has("up")?[{x:i,y:-l},{x:i,y:-n+l},{x:0,y:-n+l},{x:s/2,y:-n},{x:s,y:-n+l},{x:s-i,y:-n+l},{x:s-i,y:-l}]:r.has("down")?[{x:s/2,y:0},{x:0,y:-l},{x:i,y:-l},{x:i,y:-n+l},{x:s-i,y:-n+l},{x:s-i,y:-l},{x:s,y:-l}]:[{x:0,y:0}]},w=t=>t?" "+t:"",b=(t,e)=>`${e||"node default"}${w(t.classes)} ${w(t.class)}`,m=async(t,e)=>{const{shapeSvg:a,bbox:n}=await o(t,e,b(e,void 0),!0),i=n.width+e.padding+(n.height+e.padding),s=[{x:i/2,y:0},{x:i,y:-i/2},{x:i/2,y:-i},{x:0,y:-i/2}];r.l.info("Question main (Circle)");const l=c(a,i,i,s);return l.attr("style",e.style),h(e,l),e.intersect=function(t){return r.l.warn("Intersect called"),f.polygon(e,s,t)},a};function k(t,e,a,n){const i=[],s=t=>{i.push(t,0)},l=t=>{i.push(0,t)};e.includes("t")?(r.l.debug("add top border"),s(a)):l(a),e.includes("r")?(r.l.debug("add right border"),s(n)):l(n),e.includes("b")?(r.l.debug("add bottom border"),s(a)):l(a),e.includes("l")?(r.l.debug("add left border"),s(n)):l(n),t.attr("stroke-dasharray",i.join(" "))}const v=(t,e,a)=>{const r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id);let n=70,i=10;"LR"===a&&(n=10,i=70);const s=r.append("rect").attr("x",-1*n/2).attr("y",-1*i/2).attr("width",n).attr("height",i).attr("class","fork-join");return h(e,s),e.height=e.height+e.padding/2,e.width=e.width+e.padding/2,e.intersect=function(t){return f.rect(e,t)},r},L={rhombus:m,composite:async(t,e)=>{const{shapeSvg:a,bbox:n,halfPadding:i}=await o(t,e,"node "+e.classes,!0),s=a.insert("rect",":first-child"),l=e.positioned?e.width:n.width+e.padding,d=e.positioned?e.height:n.height+e.padding,c=e.positioned?-l/2:-n.width/2-i,y=e.positioned?-d/2:-n.height/2-i;if(s.attr("class","basic cluster composite label-container").attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",c).attr("y",y).attr("width",l).attr("height",d),e.props){const t=new Set(Object.keys(e.props));e.props.borders&&(k(s,e.props.borders,l,d),t.delete("borders")),t.forEach((t=>{r.l.warn(`Unknown node property ${t}`)}))}return h(e,s),e.intersect=function(t){return f.rect(e,t)},a},question:m,rect:async(t,e)=>{const{shapeSvg:a,bbox:n,halfPadding:i}=await o(t,e,"node "+e.classes+" "+e.class,!0),s=a.insert("rect",":first-child"),l=e.positioned?e.width:n.width+e.padding,d=e.positioned?e.height:n.height+e.padding,c=e.positioned?-l/2:-n.width/2-i,y=e.positioned?-d/2:-n.height/2-i;if(s.attr("class","basic label-container").attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",c).attr("y",y).attr("width",l).attr("height",d),e.props){const t=new Set(Object.keys(e.props));e.props.borders&&(k(s,e.props.borders,l,d),t.delete("borders")),t.forEach((t=>{r.l.warn(`Unknown node property ${t}`)}))}return h(e,s),e.intersect=function(t){return f.rect(e,t)},a},labelRect:async(t,e)=>{const{shapeSvg:a}=await o(t,e,"label",!0);r.l.trace("Classes = ",e.class);const n=a.insert("rect",":first-child");if(n.attr("width",0).attr("height",0),a.attr("class","label edgeLabel"),e.props){const t=new Set(Object.keys(e.props));e.props.borders&&(k(n,e.props.borders,0,0),t.delete("borders")),t.forEach((t=>{r.l.warn(`Unknown node property ${t}`)}))}return h(e,n),e.intersect=function(t){return f.rect(e,t)},a},rectWithTitle:(t,e)=>{let a;a=e.classes?"node "+e.classes:"node default";const i=t.insert("g").attr("class",a).attr("id",e.domId||e.id),s=i.insert("rect",":first-child"),l=i.insert("line"),o=i.insert("g").attr("class","label"),c=e.labelText.flat?e.labelText.flat():e.labelText;let y="";y="object"===typeof c?c[0]:c,r.l.info("Label text abc79",y,c,"object"===typeof c);const p=o.node().appendChild(d(y,e.labelStyle,!0,!0));let g={width:0,height:0};if((0,r.m)((0,r.c)().flowchart.htmlLabels)){const t=p.children[0],e=(0,n.Ltv)(p);g=t.getBoundingClientRect(),e.attr("width",g.width),e.attr("height",g.height)}r.l.info("Text 2",c);const x=c.slice(1,c.length);let u=p.getBBox();const w=o.node().appendChild(d(x.join?x.join("<br/>"):x,e.labelStyle,!0,!0));if((0,r.m)((0,r.c)().flowchart.htmlLabels)){const t=w.children[0],e=(0,n.Ltv)(w);g=t.getBoundingClientRect(),e.attr("width",g.width),e.attr("height",g.height)}const b=e.padding/2;return(0,n.Ltv)(w).attr("transform","translate( "+(g.width>u.width?0:(u.width-g.width)/2)+", "+(u.height+b+5)+")"),(0,n.Ltv)(p).attr("transform","translate( "+(g.width<u.width?0:-(u.width-g.width)/2)+", 0)"),g=o.node().getBBox(),o.attr("transform","translate("+-g.width/2+", "+(-g.height/2-b+3)+")"),s.attr("class","outer title-state").attr("x",-g.width/2-b).attr("y",-g.height/2-b).attr("width",g.width+e.padding).attr("height",g.height+e.padding),l.attr("class","divider").attr("x1",-g.width/2-b).attr("x2",g.width/2+b).attr("y1",-g.height/2-b+u.height+b).attr("y2",-g.height/2-b+u.height+b),h(e,s),e.intersect=function(t){return f.rect(e,t)},i},choice:(t,e)=>{const a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),r=[{x:0,y:14},{x:14,y:0},{x:0,y:-14},{x:-14,y:0}];return a.insert("polygon",":first-child").attr("points",r.map((function(t){return t.x+","+t.y})).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),e.width=28,e.height=28,e.intersect=function(t){return f.circle(e,14,t)},a},circle:async(t,e)=>{const{shapeSvg:a,bbox:n,halfPadding:i}=await o(t,e,b(e,void 0),!0),s=a.insert("circle",":first-child");return s.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",n.width/2+i).attr("width",n.width+e.padding).attr("height",n.height+e.padding),r.l.info("Circle main"),h(e,s),e.intersect=function(t){return r.l.info("Circle intersect",e,n.width/2+i,t),f.circle(e,n.width/2+i,t)},a},doublecircle:async(t,e)=>{const{shapeSvg:a,bbox:n,halfPadding:i}=await o(t,e,b(e,void 0),!0),s=a.insert("g",":first-child"),l=s.insert("circle"),d=s.insert("circle");return s.attr("class",e.class),l.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",n.width/2+i+5).attr("width",n.width+e.padding+10).attr("height",n.height+e.padding+10),d.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",n.width/2+i).attr("width",n.width+e.padding).attr("height",n.height+e.padding),r.l.info("DoubleCircle main"),h(e,l),e.intersect=function(t){return r.l.info("DoubleCircle intersect",e,n.width/2+i+5,t),f.circle(e,n.width/2+i+5,t)},a},stadium:async(t,e)=>{const{shapeSvg:a,bbox:r}=await o(t,e,b(e,void 0),!0),n=r.height+e.padding,i=r.width+n/4+e.padding,s=a.insert("rect",":first-child").attr("style",e.style).attr("rx",n/2).attr("ry",n/2).attr("x",-i/2).attr("y",-n/2).attr("width",i).attr("height",n);return h(e,s),e.intersect=function(t){return f.rect(e,t)},a},hexagon:async(t,e)=>{const{shapeSvg:a,bbox:r}=await o(t,e,b(e,void 0),!0),n=r.height+e.padding,i=n/4,s=r.width+2*i+e.padding,l=[{x:i,y:0},{x:s-i,y:0},{x:s,y:-n/2},{x:s-i,y:-n},{x:i,y:-n},{x:0,y:-n/2}],d=c(a,s,n,l);return d.attr("style",e.style),h(e,d),e.intersect=function(t){return f.polygon(e,l,t)},a},block_arrow:async(t,e)=>{const{shapeSvg:a,bbox:r}=await o(t,e,void 0,!0),n=r.height+2*e.padding,i=n/2,s=r.width+2*i+e.padding,l=u(e.directions,r,e),d=c(a,s,n,l);return d.attr("style",e.style),h(e,d),e.intersect=function(t){return f.polygon(e,l,t)},a},rect_left_inv_arrow:async(t,e)=>{const{shapeSvg:a,bbox:r}=await o(t,e,b(e,void 0),!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:-i/2,y:0},{x:n,y:0},{x:n,y:-i},{x:-i/2,y:-i},{x:0,y:-i/2}];return c(a,n,i,s).attr("style",e.style),e.width=n+i,e.height=i,e.intersect=function(t){return f.polygon(e,s,t)},a},lean_right:async(t,e)=>{const{shapeSvg:a,bbox:r}=await o(t,e,b(e),!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:-2*i/6,y:0},{x:n-i/6,y:0},{x:n+2*i/6,y:-i},{x:i/6,y:-i}],l=c(a,n,i,s);return l.attr("style",e.style),h(e,l),e.intersect=function(t){return f.polygon(e,s,t)},a},lean_left:async(t,e)=>{const{shapeSvg:a,bbox:r}=await o(t,e,b(e,void 0),!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:2*i/6,y:0},{x:n+i/6,y:0},{x:n-2*i/6,y:-i},{x:-i/6,y:-i}],l=c(a,n,i,s);return l.attr("style",e.style),h(e,l),e.intersect=function(t){return f.polygon(e,s,t)},a},trapezoid:async(t,e)=>{const{shapeSvg:a,bbox:r}=await o(t,e,b(e,void 0),!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:-2*i/6,y:0},{x:n+2*i/6,y:0},{x:n-i/6,y:-i},{x:i/6,y:-i}],l=c(a,n,i,s);return l.attr("style",e.style),h(e,l),e.intersect=function(t){return f.polygon(e,s,t)},a},inv_trapezoid:async(t,e)=>{const{shapeSvg:a,bbox:r}=await o(t,e,b(e,void 0),!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:i/6,y:0},{x:n-i/6,y:0},{x:n+2*i/6,y:-i},{x:-2*i/6,y:-i}],l=c(a,n,i,s);return l.attr("style",e.style),h(e,l),e.intersect=function(t){return f.polygon(e,s,t)},a},rect_right_inv_arrow:async(t,e)=>{const{shapeSvg:a,bbox:r}=await o(t,e,b(e,void 0),!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:0,y:0},{x:n+i/2,y:0},{x:n,y:-i/2},{x:n+i/2,y:-i},{x:0,y:-i}],l=c(a,n,i,s);return l.attr("style",e.style),h(e,l),e.intersect=function(t){return f.polygon(e,s,t)},a},cylinder:async(t,e)=>{const{shapeSvg:a,bbox:r}=await o(t,e,b(e,void 0),!0),n=r.width+e.padding,i=n/2,s=i/(2.5+n/50),l=r.height+s+e.padding,d="M 0,"+s+" a "+i+","+s+" 0,0,0 "+n+" 0 a "+i+","+s+" 0,0,0 "+-n+" 0 l 0,"+l+" a "+i+","+s+" 0,0,0 "+n+" 0 l 0,"+-l,c=a.attr("label-offset-y",s).insert("path",":first-child").attr("style",e.style).attr("d",d).attr("transform","translate("+-n/2+","+-(l/2+s)+")");return h(e,c),e.intersect=function(t){const a=f.rect(e,t),r=a.x-e.x;if(0!=i&&(Math.abs(r)<e.width/2||Math.abs(r)==e.width/2&&Math.abs(a.y-e.y)>e.height/2-s)){let n=s*s*(1-r*r/(i*i));0!=n&&(n=Math.sqrt(n)),n=s-n,t.y-e.y>0&&(n=-n),a.y+=n}return a},a},start:(t,e)=>{const a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),r=a.insert("circle",":first-child");return r.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),h(e,r),e.intersect=function(t){return f.circle(e,7,t)},a},end:(t,e)=>{const a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),r=a.insert("circle",":first-child"),n=a.insert("circle",":first-child");return n.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),r.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),h(e,n),e.intersect=function(t){return f.circle(e,7,t)},a},note:async(t,e)=>{e.useHtmlLabels||(0,r.c)().flowchart.htmlLabels||(e.centerLabel=!0);const{shapeSvg:a,bbox:n,halfPadding:i}=await o(t,e,"node "+e.classes,!0);r.l.info("Classes = ",e.classes);const s=a.insert("rect",":first-child");return s.attr("rx",e.rx).attr("ry",e.ry).attr("x",-n.width/2-i).attr("y",-n.height/2-i).attr("width",n.width+e.padding).attr("height",n.height+e.padding),h(e,s),e.intersect=function(t){return f.rect(e,t)},a},subroutine:async(t,e)=>{const{shapeSvg:a,bbox:r}=await o(t,e,b(e,void 0),!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:0,y:0},{x:n,y:0},{x:n,y:-i},{x:0,y:-i},{x:0,y:0},{x:-8,y:0},{x:n+8,y:0},{x:n+8,y:-i},{x:-8,y:-i},{x:-8,y:0}],l=c(a,n,i,s);return l.attr("style",e.style),h(e,l),e.intersect=function(t){return f.polygon(e,s,t)},a},fork:v,join:v,class_box:(t,e)=>{const a=e.padding/2;let i;i=e.classes?"node "+e.classes:"node default";const s=t.insert("g").attr("class",i).attr("id",e.domId||e.id),l=s.insert("rect",":first-child"),o=s.insert("line"),c=s.insert("line");let y=0,p=4;const g=s.insert("g").attr("class","label");let x=0;const u=e.classData.annotations&&e.classData.annotations[0],w=e.classData.annotations[0]?"\xab"+e.classData.annotations[0]+"\xbb":"",b=g.node().appendChild(d(w,e.labelStyle,!0,!0));let m=b.getBBox();if((0,r.m)((0,r.c)().flowchart.htmlLabels)){const t=b.children[0],e=(0,n.Ltv)(b);m=t.getBoundingClientRect(),e.attr("width",m.width),e.attr("height",m.height)}e.classData.annotations[0]&&(p+=m.height+4,y+=m.width);let k=e.classData.label;void 0!==e.classData.type&&""!==e.classData.type&&((0,r.c)().flowchart.htmlLabels?k+="&lt;"+e.classData.type+"&gt;":k+="<"+e.classData.type+">");const v=g.node().appendChild(d(k,e.labelStyle,!0,!0));(0,n.Ltv)(v).attr("class","classTitle");let L=v.getBBox();if((0,r.m)((0,r.c)().flowchart.htmlLabels)){const t=v.children[0],e=(0,n.Ltv)(v);L=t.getBoundingClientRect(),e.attr("width",L.width),e.attr("height",L.height)}p+=L.height+4,L.width>y&&(y=L.width);const S=[];e.classData.members.forEach((t=>{const a=t.getDisplayDetails();let i=a.displayText;(0,r.c)().flowchart.htmlLabels&&(i=i.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const s=g.node().appendChild(d(i,a.cssStyle?a.cssStyle:e.labelStyle,!0,!0));let l=s.getBBox();if((0,r.m)((0,r.c)().flowchart.htmlLabels)){const t=s.children[0],e=(0,n.Ltv)(s);l=t.getBoundingClientRect(),e.attr("width",l.width),e.attr("height",l.height)}l.width>y&&(y=l.width),p+=l.height+4,S.push(s)})),p+=8;const M=[];if(e.classData.methods.forEach((t=>{const a=t.getDisplayDetails();let i=a.displayText;(0,r.c)().flowchart.htmlLabels&&(i=i.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const s=g.node().appendChild(d(i,a.cssStyle?a.cssStyle:e.labelStyle,!0,!0));let l=s.getBBox();if((0,r.m)((0,r.c)().flowchart.htmlLabels)){const t=s.children[0],e=(0,n.Ltv)(s);l=t.getBoundingClientRect(),e.attr("width",l.width),e.attr("height",l.height)}l.width>y&&(y=l.width),p+=l.height+4,M.push(s)})),p+=8,u){let t=(y-m.width)/2;(0,n.Ltv)(b).attr("transform","translate( "+(-1*y/2+t)+", "+-1*p/2+")"),x=m.height+4}let T=(y-L.width)/2;return(0,n.Ltv)(v).attr("transform","translate( "+(-1*y/2+T)+", "+(-1*p/2+x)+")"),x+=L.height+4,o.attr("class","divider").attr("x1",-y/2-a).attr("x2",y/2+a).attr("y1",-p/2-a+8+x).attr("y2",-p/2-a+8+x),x+=8,S.forEach((t=>{(0,n.Ltv)(t).attr("transform","translate( "+-y/2+", "+(-1*p/2+x+4)+")");const e=null==t?void 0:t.getBBox();x+=((null==e?void 0:e.height)??0)+4})),x+=8,c.attr("class","divider").attr("x1",-y/2-a).attr("x2",y/2+a).attr("y1",-p/2-a+8+x).attr("y2",-p/2-a+8+x),x+=8,M.forEach((t=>{(0,n.Ltv)(t).attr("transform","translate( "+-y/2+", "+(-1*p/2+x)+")");const e=null==t?void 0:t.getBBox();x+=((null==e?void 0:e.height)??0)+4})),l.attr("style",e.style).attr("class","outer title-state").attr("x",-y/2-a).attr("y",-p/2-a).attr("width",y+e.padding).attr("height",p+e.padding),h(e,l),e.intersect=function(t){return f.rect(e,t)},s}};let S={};const M=async(t,e,a)=>{let n,i;if(e.link){let s;"sandbox"===(0,r.c)().securityLevel?s="_top":e.linkTarget&&(s=e.linkTarget||"_blank"),n=t.insert("svg:a").attr("xlink:href",e.link).attr("target",s),i=await L[e.shape](n,e,a)}else i=await L[e.shape](t,e,a),n=i;return e.tooltip&&i.attr("title",e.tooltip),e.class&&i.attr("class","node default "+e.class),n.attr("data-node","true"),n.attr("data-id",e.id),S[e.id]=n,e.haveCallback&&S[e.id].attr("class",S[e.id].attr("class")+" clickable"),n},T=(t,e)=>{S[e.id]=t},_=()=>{S={}},B=t=>{const e=S[t.id];r.l.trace("Transforming node",t.diff,t,"translate("+(t.x-t.width/2-5)+", "+t.width/2+")");const a=t.diff||0;return t.clusterNode?e.attr("transform","translate("+(t.x+a-t.width/2)+", "+(t.y-t.height/2-8)+")"):e.attr("transform","translate("+t.x+", "+t.y+")"),a},C=t=>{let{flowchart:e}=t;var a,r;const n=(null==(a=null==e?void 0:e.subGraphTitleMargin)?void 0:a.top)??0,i=(null==(r=null==e?void 0:e.subGraphTitleMargin)?void 0:r.bottom)??0;return{subGraphTitleTopMargin:n,subGraphTitleBottomMargin:i,subGraphTitleTotalMargin:n+i}},E={aggregation:18,extension:18,composition:18,dependency:6,lollipop:13.5,arrow_point:5.3};function $(t,e){if(void 0===t||void 0===e)return{angle:0,deltaX:0,deltaY:0};t=P(t),e=P(e);const[a,r]=[t.x,t.y],[n,i]=[e.x,e.y],s=n-a,l=i-r;return{angle:Math.atan(l/s),deltaX:s,deltaY:l}}const P=t=>Array.isArray(t)?{x:t[0],y:t[1]}:t,R=t=>({x:function(e,a,r){let n=0;if(0===a&&Object.hasOwn(E,t.arrowTypeStart)){const{angle:e,deltaX:a}=$(r[0],r[1]);n=E[t.arrowTypeStart]*Math.cos(e)*(a>=0?1:-1)}else if(a===r.length-1&&Object.hasOwn(E,t.arrowTypeEnd)){const{angle:e,deltaX:a}=$(r[r.length-1],r[r.length-2]);n=E[t.arrowTypeEnd]*Math.cos(e)*(a>=0?1:-1)}return P(e).x+n},y:function(e,a,r){let n=0;if(0===a&&Object.hasOwn(E,t.arrowTypeStart)){const{angle:e,deltaY:a}=$(r[0],r[1]);n=E[t.arrowTypeStart]*Math.abs(Math.sin(e))*(a>=0?1:-1)}else if(a===r.length-1&&Object.hasOwn(E,t.arrowTypeEnd)){const{angle:e,deltaY:a}=$(r[r.length-1],r[r.length-2]);n=E[t.arrowTypeEnd]*Math.abs(Math.sin(e))*(a>=0?1:-1)}return P(e).y+n}}),Y=(t,e,a,r,n)=>{e.arrowTypeStart&&W(t,"start",e.arrowTypeStart,a,r,n),e.arrowTypeEnd&&W(t,"end",e.arrowTypeEnd,a,r,n)},O={arrow_cross:"cross",arrow_point:"point",arrow_barb:"barb",arrow_circle:"circle",aggregation:"aggregation",extension:"extension",composition:"composition",dependency:"dependency",lollipop:"lollipop"},W=(t,e,a,n,i,s)=>{const l=O[a];if(!l)return void r.l.warn(`Unknown arrow type: ${a}`);const d="start"===e?"Start":"End";t.attr(`marker-${e}`,`url(${n}#${i}_${s}-${l}${d})`)};let X={},H={};const I=()=>{X={},H={}},j=(t,e)=>{const a=(0,r.m)((0,r.c)().flowchart.htmlLabels),s="markdown"===e.labelType?(0,i.a)(t,e.label,{style:e.labelStyle,useHtmlLabels:a,addSvgBackground:!0}):d(e.label,e.labelStyle),l=t.insert("g").attr("class","edgeLabel"),o=l.insert("g").attr("class","label");o.node().appendChild(s);let h,c=s.getBBox();if(a){const t=s.children[0],e=(0,n.Ltv)(s);c=t.getBoundingClientRect(),e.attr("width",c.width),e.attr("height",c.height)}if(o.attr("transform","translate("+-c.width/2+", "+-c.height/2+")"),X[e.id]=l,e.width=c.width,e.height=c.height,e.startLabelLeft){const a=d(e.startLabelLeft,e.labelStyle),r=t.insert("g").attr("class","edgeTerminals"),n=r.insert("g").attr("class","inner");h=n.node().appendChild(a);const i=a.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),H[e.id]||(H[e.id]={}),H[e.id].startLeft=r,D(h,e.startLabelLeft)}if(e.startLabelRight){const a=d(e.startLabelRight,e.labelStyle),r=t.insert("g").attr("class","edgeTerminals"),n=r.insert("g").attr("class","inner");h=r.node().appendChild(a),n.node().appendChild(a);const i=a.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),H[e.id]||(H[e.id]={}),H[e.id].startRight=r,D(h,e.startLabelRight)}if(e.endLabelLeft){const a=d(e.endLabelLeft,e.labelStyle),r=t.insert("g").attr("class","edgeTerminals"),n=r.insert("g").attr("class","inner");h=n.node().appendChild(a);const i=a.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),r.node().appendChild(a),H[e.id]||(H[e.id]={}),H[e.id].endLeft=r,D(h,e.endLabelLeft)}if(e.endLabelRight){const a=d(e.endLabelRight,e.labelStyle),r=t.insert("g").attr("class","edgeTerminals"),n=r.insert("g").attr("class","inner");h=n.node().appendChild(a);const i=a.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),r.node().appendChild(a),H[e.id]||(H[e.id]={}),H[e.id].endRight=r,D(h,e.endLabelRight)}return s};function D(t,e){(0,r.c)().flowchart.htmlLabels&&t&&(t.style.width=9*e.length+"px",t.style.height="12px")}const N=(t,e)=>{r.l.debug("Moving label abc88 ",t.id,t.label,X[t.id],e);let a=e.updatedPath?e.updatedPath:e.originalPath;const n=(0,r.c)(),{subGraphTitleTotalMargin:i}=C(n);if(t.label){const n=X[t.id];let s=t.x,l=t.y;if(a){const n=r.u.calcLabelPosition(a);r.l.debug("Moving label "+t.label+" from (",s,",",l,") to (",n.x,",",n.y,") abc88"),e.updatedPath&&(s=n.x,l=n.y)}n.attr("transform",`translate(${s}, ${l+i/2})`)}if(t.startLabelLeft){const e=H[t.id].startLeft;let n=t.x,i=t.y;if(a){const e=r.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_left",a);n=e.x,i=e.y}e.attr("transform",`translate(${n}, ${i})`)}if(t.startLabelRight){const e=H[t.id].startRight;let n=t.x,i=t.y;if(a){const e=r.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_right",a);n=e.x,i=e.y}e.attr("transform",`translate(${n}, ${i})`)}if(t.endLabelLeft){const e=H[t.id].endLeft;let n=t.x,i=t.y;if(a){const e=r.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_left",a);n=e.x,i=e.y}e.attr("transform",`translate(${n}, ${i})`)}if(t.endLabelRight){const e=H[t.id].endRight;let n=t.x,i=t.y;if(a){const e=r.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_right",a);n=e.x,i=e.y}e.attr("transform",`translate(${n}, ${i})`)}},U=(t,e)=>{r.l.debug("abc88 cutPathAtIntersect",t,e);let a=[],n=t[0],i=!1;return t.forEach((t=>{if(((t,e)=>{const a=t.x,r=t.y,n=Math.abs(e.x-a),i=Math.abs(e.y-r),s=t.width/2,l=t.height/2;return n>=s||i>=l})(e,t)||i)n=t,i||a.push(t);else{const s=((t,e,a)=>{r.l.debug(`intersection calc abc89:\n  outsidePoint: ${JSON.stringify(e)}\n  insidePoint : ${JSON.stringify(a)}\n  node        : x:${t.x} y:${t.y} w:${t.width} h:${t.height}`);const n=t.x,i=t.y,s=Math.abs(n-a.x),l=t.width/2;let d=a.x<e.x?l-s:l+s;const o=t.height/2,h=Math.abs(e.y-a.y),c=Math.abs(e.x-a.x);if(Math.abs(i-e.y)*l>Math.abs(n-e.x)*o){let t=a.y<e.y?e.y-o-i:i-o-e.y;d=c*t/h;const n={x:a.x<e.x?a.x+d:a.x-c+d,y:a.y<e.y?a.y+h-t:a.y-h+t};return 0===d&&(n.x=e.x,n.y=e.y),0===c&&(n.x=e.x),0===h&&(n.y=e.y),r.l.debug(`abc89 topp/bott calc, Q ${h}, q ${t}, R ${c}, r ${d}`,n),n}{d=a.x<e.x?e.x-l-n:n-l-e.x;let t=h*d/c,i=a.x<e.x?a.x+c-d:a.x-c+d,s=a.y<e.y?a.y+t:a.y-t;return r.l.debug(`sides calc abc89, Q ${h}, q ${t}, R ${c}, r ${d}`,{_x:i,_y:s}),0===d&&(i=e.x,s=e.y),0===c&&(i=e.x),0===h&&(s=e.y),{x:i,y:s}}})(e,n,t);let l=!1;a.forEach((t=>{l=l||t.x===s.x&&t.y===s.y})),a.some((t=>t.x===s.x&&t.y===s.y))||a.push(s),i=!0}})),a},A=function(t,e,a,i,s,l,d){let o=a.points;r.l.debug("abc88 InsertEdge: edge=",a,"e=",e);let h=!1;const c=l.node(e.v);var y=l.node(e.w);(null==y?void 0:y.intersect)&&(null==c?void 0:c.intersect)&&(o=o.slice(1,a.points.length-1),o.unshift(c.intersect(o[0])),o.push(y.intersect(o[o.length-1]))),a.toCluster&&(r.l.debug("to cluster abc88",i[a.toCluster]),o=U(a.points,i[a.toCluster].node),h=!0),a.fromCluster&&(r.l.debug("from cluster abc88",i[a.fromCluster]),o=U(o.reverse(),i[a.fromCluster].node).reverse(),h=!0);const p=o.filter((t=>!Number.isNaN(t.y)));let g=n.qrM;!a.curve||"graph"!==s&&"flowchart"!==s||(g=a.curve);const{x:x,y:f}=R(a),u=(0,n.n8j)().x(x).y(f).curve(g);let w;switch(a.thickness){case"normal":w="edge-thickness-normal";break;case"thick":case"invisible":w="edge-thickness-thick";break;default:w=""}switch(a.pattern){case"solid":w+=" edge-pattern-solid";break;case"dotted":w+=" edge-pattern-dotted";break;case"dashed":w+=" edge-pattern-dashed"}const b=t.append("path").attr("d",u(p)).attr("id",a.id).attr("class"," "+w+(a.classes?" "+a.classes:"")).attr("style",a.style);let m="";((0,r.c)().flowchart.arrowMarkerAbsolute||(0,r.c)().state.arrowMarkerAbsolute)&&(m=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,m=m.replace(/\(/g,"\\("),m=m.replace(/\)/g,"\\)")),Y(b,a,m,d,s);let k={};return h&&(k.updatedPath=o),k.originalPath=a.points,k}}}]);
//# sourceMappingURL=840.55ed9a83.chunk.js.map