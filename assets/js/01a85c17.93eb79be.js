"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[64013,29514],{18607:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(19756),a=n(67294),o=n(86010),l=n(36247),i=n(51384),c="sidebar_2ahu",s="sidebarItemTitle_2hhb",u="sidebarItemList_2xAf",m="sidebarItem_2UVv",d="sidebarItemLink_1RT6",f="sidebarItemLinkActive_12pM",v=n(54416);function p(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,o.Z)(c,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,o.Z)(s,"margin-bottom--md")},t.title),a.createElement("ul",{className:u},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:m},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:f},e.title))}))))}var g=n(8969),h=["sidebar","toc","children"];var b=function(e){var t=e.sidebar,n=e.toc,i=e.children,c=(0,r.Z)(e,h),s=t&&t.items.length>0;return a.createElement(l.Z,c,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},s&&a.createElement("aside",{className:"col col--3"},a.createElement(p,{sidebar:t})),a.createElement("main",{className:(0,o.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),n&&a.createElement("div",{className:"col col--2"},a.createElement(g.Z,{toc:n})))))}},92867:function(e,t,n){n.r(t);var r=n(67294),a=n(18607),o=n(43953),l=n(19257);t.default=function(e){var t=e.tags,n=e.sidebar,i=(0,l.MA)();return r.createElement(a.Z,{title:i,wrapperClassName:l.kM.wrapper.blogPages,pageClassName:l.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},r.createElement("h1",null,i),r.createElement(o.Z,{tags:Object.values(t)}))}},8969:function(e,t,n){n.d(t,{r:function(){return f},Z:function(){return v}});var r=n(67294),a=n(86010),o=n(19257);function l(e){var t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function i(e){var t,n=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=r.find((function(e){return l(e).top>=n}));return a?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:null!=(t=r[r.indexOf(a)-1])?t:null:r[r.length-1]}function c(){var e=(0,r.useRef)(0),t=(0,o.LU)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var s=function(e){var t=(0,r.useRef)(void 0),n=c();(0,r.useEffect)((function(){var r=e.linkClassName,a=e.linkActiveClassName;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),o=i({anchorTopOffset:n.current}),l=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(a)),e.classList.add(a),t.current=e}else e.classList.remove(a)}(e,e===l)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])},u="tableOfContents_35-E",m="table-of-contents__link",d={linkClassName:m,linkActiveClassName:"table-of-contents__link--active"};function f(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:m,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(f,{isChild:!0,toc:e.children}))}))):null}var v=function(e){var t=e.toc;return s(d),r.createElement("div",{className:(0,a.Z)(u,"thin-scrollbar")},r.createElement(f,{toc:t}))}},19004:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),o=n(51384),l="tag_1Okp",i="tagRegular_3MiF",c="tagWithCount_1HU1";var s=function(e){var t,n=e.permalink,s=e.name,u=e.count;return r.createElement(o.Z,{href:n,className:(0,a.Z)(l,(t={},t[i]=!u,t[c]=u,t))},s,u&&r.createElement("span",null,u))}},43953:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(19004),o=n(19257),l="tag_21yA";function i(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:l},r.createElement(a.Z,e))}))),r.createElement("hr",null))}var c=function(e){var t=e.tags,n=(0,o.PZ)(t);return r.createElement("section",{className:"margin-vert--lg"},n.map((function(e){return r.createElement(i,{key:e.letter,letterEntry:e})})))}},15502:function(e,t,n){var r=n(67294).createContext(void 0);t.Z=r},26266:function(e,t,n){var r=n(67294),a=n(15502);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},32577:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(22122),a=n(19756),o=n(67294),l=n(86010),i=n(51384),c=n(19257),s=n(51402),u=n(34455),m=[{title:"Youtube",imageUrl:"/img/youtube.svg",url:"https://www.youtube.com/c/iotafoundation",backgroundColor:"var(--ifm-color-gray-900)"},{title:"GitHub",imageUrl:"/img/github.svg",url:"https://www.github.com/iotaledger/",backgroundColor:"#2C3850"},{title:"Discord",imageUrl:"/img/discord.svg",url:"https://discord.iota.org/",backgroundColor:"#4B576F"},{title:"Twitter",imageUrl:"/img/twitter.svg",url:"https://www.twitter.com/iota/",backgroundColor:"#6A768E"},{title:"Reddit",imageUrl:"/img/reddit.svg",url:"https://www.reddit.com/r/iota/",backgroundColor:"#7D89A1"},{title:"Linkedin",imageUrl:"/img/linkedin.svg",url:"https://www.linkedin.com/company/iotafoundation/",backgroundColor:"#8995AD"},{title:"Instagram",imageUrl:"/img/instagram.svg",url:"https://www.instagram.com/iotafoundation/",backgroundColor:"#99A5BD"},{title:"Facebook",imageUrl:"/img/facebook.svg",url:"https://www.facebook.com/TheIOTAFoundation/",backgroundColor:"#BAC6DE"}];function d(e){var t=e.title,n=e.imageUrl,r=e.url,a=e.backgroundColor;return o.createElement("a",{className:"social__link padding-horiz--sm padding-vert--md",style:{backgroundColor:a},href:r},o.createElement("img",{alt:t,className:"social__image",src:(0,s.Z)(n)}),o.createElement("div",{className:"social__title"},t))}var f=function(){return o.createElement("div",{className:"social"},m.map((function(e,t){return o.createElement(d,(0,r.Z)({key:t},e))})))},v=["to","href","label","prependBaseUrlToHref"];function p(e){var t=e.to,n=e.href,l=e.label,c=e.prependBaseUrlToHref,u=(0,a.Z)(e,v),m=(0,s.Z)(t),d=(0,s.Z)(n,{forcePrependBaseUrl:!0});return o.createElement(i.Z,(0,r.Z)({className:"footer__link-item"},n?{href:c?d:n}:{to:m},u),l)}var g=function(e){var t=e.sources,n=e.alt;return o.createElement(u.Z,{className:"footer__logo",alt:n,sources:t})};var h=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,r=t.links,a=void 0===r?[]:r,u=t.logo,m=void 0===u?{}:u,d={light:(0,s.Z)(m.src),dark:(0,s.Z)(m.srcDark||m.src)};return e?o.createElement("footer",{className:(0,l.Z)("footer","padding--none",{"footer--dark":"dark"===e.style})},o.createElement("div",{className:"container"},a&&a.length>0&&o.createElement("div",{className:"row footer__links padding-vert--xl"},a.map((function(e,t){return o.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.createElement("li",{key:e.href||e.to,className:"footer__item"},o.createElement(p,e))}))):null)}))),(m||n)&&o.createElement("div",{className:"footer__bottom padding-bottom--xl"},m&&(m.src||m.srcDark)&&o.createElement("div",null,m.href?o.createElement(i.Z,{href:m.href},o.createElement(g,{alt:m.alt,sources:d})):o.createElement(g,{alt:m.alt,sources:d})),n?o.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null)),o.createElement(f,null)):null}},78358:function(e,t,n){n.d(t,{O:function(){return p}});var r=n(22122),a=n(19756),o=n(67294),l=n(86010),i=n(51384),c=n(51402),s=n(78168),u=n(71699),m=["activeBasePath","activeBaseRegex","to","href","label","sublabel","icon","activeClassName","prependBaseUrlToHref"],d=["className","isDropdownItem"],f=["className","isDropdownItem"],v=["mobile","position"];function p(e){var t=e.activeBasePath,n=e.activeBaseRegex,l=e.to,d=e.href,f=e.label,v=e.sublabel,p=e.icon,g=e.activeClassName,h=void 0===g?"navbar__link--active":g,b=e.prependBaseUrlToHref,_=(0,a.Z)(e,m),E=(0,c.Z)(l),k=(0,c.Z)(t),w=(0,c.Z)(d,{forcePrependBaseUrl:!0}),Z=f&&d&&!(0,u.Z)(d),N="dropdown__link--active"===h;return o.createElement(i.Z,(0,r.Z)({},d?{href:b?w:d}:Object.assign({isNavLink:!0,activeClassName:h,to:E},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(k)}}:null),_),o.createElement("div",{className:"link"},p&&o.createElement("div",{className:"link__icon"},p),o.createElement("div",{className:"link__body"},o.createElement("div",{className:"link__label"},Z?o.createElement("span",null,f,o.createElement(s.Z,N&&{width:12,height:12})):f),v&&o.createElement("div",{className:"link__sublabel"},v))))}function g(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,c=(0,a.Z)(e,d),s=o.createElement(p,(0,r.Z)({className:(0,l.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},c));return i?o.createElement("li",null,s):s}function h(e){var t=e.className,n=(e.isDropdownItem,(0,a.Z)(e,f));return o.createElement("li",{className:"menu__list-item"},o.createElement(p,(0,r.Z)({className:(0,l.Z)("menu__link",t)},n)))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(e.position,(0,a.Z)(e,v));if("category-header"===r.to){return o.createElement("li",{style:{fontSize:"10px",color:"var(--ifm-color-emphasis-600)",paddingTop:"10px"}},r.label)}var l=n?h:g;return o.createElement(l,r)}},16679:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(22122),a=n(19756),o=n(67294),l=n(78358),i=n(57617),c=n(86010),s=n(19257),u=n(79861),m=["docId","activeSidebarClassName","label","docsPluginId"];function d(e){var t,n=e.docId,d=e.activeSidebarClassName,f=e.label,v=e.docsPluginId,p=(0,a.Z)(e,m),g=(0,i.useActiveDocContext)(v),h=g.activeVersion,b=g.activeDoc,_=(0,s.J)(v).preferredVersion,E=(0,i.useLatestVersion)(v),k=function(e,t){var n=e.flatMap((function(e){return e.docs})),r=n.find((function(e){return e.id===t}));if(!r){var a=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+a)}return r}((0,u.uniq)([h,_,E].filter(Boolean)),n);return o.createElement(l.Z,(0,r.Z)({exact:!0},p,{className:(0,c.Z)(p.className,(t={},t[d]=b&&b.sidebar===k.sidebar,t)),label:null!=f?f:k.id,to:k.path}))}},68510:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(22122),a=n(19756),o=n(67294),l=n(78358),i=n(61142),c=n(57617),s=n(19257),u=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],m=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,n,d=e.mobile,f=e.docsPluginId,v=e.dropdownActiveClassDisabled,p=e.dropdownItemsBefore,g=e.dropdownItemsAfter,h=(0,a.Z)(e,u),b=(0,c.useActiveDocContext)(f),_=(0,c.useVersions)(f),E=(0,c.useLatestVersion)(f),k=(0,s.J)(f),w=k.preferredVersion,Z=k.savePreferredVersionName;var N,y=(N=_.map((function(e){var t=(null==b?void 0:b.alternateDocVersions[e.name])||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==b?void 0:b.activeVersion)},onClick:function(){Z(e.name)}}})),[].concat(p,N,g)),C=null!=(t=null!=(n=b.activeVersion)?n:w)?t:E,I=d&&y?"Versions":C.label,D=d&&y?void 0:m(C).path;return y.length<=1?o.createElement(l.Z,(0,r.Z)({},h,{mobile:d,label:I,to:D,isActive:v?function(){return!1}:void 0})):o.createElement(i.Z,(0,r.Z)({},h,{mobile:d,label:I,to:D,items:y,isActive:v?function(){return!1}:void 0}))}},18384:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(22122),a=n(19756),o=n(67294),l=n(78358),i=n(57617),c=n(19257),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,a.Z)(e,s),f=(0,i.useActiveVersion)(m),v=(0,c.J)(m).preferredVersion,p=(0,i.useLatestVersion)(m),g=null!=(t=null!=f?f:v)?t:p,h=null!=n?n:g.label,b=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return o.createElement(l.Z,(0,r.Z)({},d,{label:h,to:b}))}},61142:function(e,t,n){var r=n(22122),a=n(19756),o=n(67294),l=n(86010),i=n(19257),c=n(78358),s=n(64090),u=["items","position","className"],m=["items","className","position"],d=["mobile","isDropdownItem"];function f(e,t){return!!(0,i.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath)))}function v(e){var t,n=e.items,m=e.position,d=e.className,v=(0,a.Z)(e,u),p=(0,o.useRef)(null),g=(0,o.useRef)(null),h=(0,o.useState)(!1),b=h[0],_=h[1],E=function(e,t,n){var r=t.filter((function(e){return f(e,(0,i.be)())})),a=e;return r.length&&(a=Object.assign({},r[0],{label:e.label+" > "+r[0].label})),a}(v,n,(0,i.be)());return(0,o.useEffect)((function(){var e=function(e){p.current&&!p.current.contains(e.target)&&_(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[p]),o.createElement("div",{ref:p,className:(0,l.Z)("dropdown","dropdown--hoverable",{"dropdown--right":"right"===m,"dropdown--show":b})},o.createElement(c.O,(0,r.Z)({className:(0,l.Z)("navbar__item navbar__link",d)},E,{onClick:v.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),_(!b))}}),null!=(t=v.children)?t:v.label),o.createElement("ul",{ref:g,className:"dropdown__menu"},n.map((function(e,t){return o.createElement(s.Z,(0,r.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),_(!1);var r=p.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function p(e){var t,n=e.items,u=e.className,d=(e.position,(0,a.Z)(e,m)),v=(0,i.be)(),p=function(e,t){return e.some((function(e){return f(e,t)}))}(n,v),g=(0,i.uR)({initialState:function(){return!p}}),h=g.collapsed,b=g.toggleCollapsed,_=g.setCollapsed;return(0,o.useEffect)((function(){p&&_(!p)}),[v,p]),o.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":h})},o.createElement(c.O,(0,r.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),b()}}),null!=(t=d.children)?t:d.label),o.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:h},n.map((function(e,t){return o.createElement(s.Z,(0,r.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(e.isDropdownItem,(0,a.Z)(e,d)),l=n?p:v;return o.createElement(l,r)}},64090:function(e,t,n){n.d(t,{Z:function(){return L}});var r=n(19756),a=n(67294),o=n(78358),l=n(61142),i=n(22122),c=n(86010),s=n(19257),u=["items","label","className"],m=["className"],d=["items_","layout","position","className"],f=["items_","className","position","layout"],v=["mobile"];function p(e,t){return e.some((function(e){e.items?p(e.items,t):function(e,t){!!(0,s.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||(!e.activeBasePath||t.startsWith(e.activeBasePath))}(e,t)}))}function g(e){var t,n=e.items,a=e.label,o=e.className,l=(0,r.Z)(e,u),i={items:[],index:0};n?(a&&i.items.push({label:a,className:o}),(t=i.items).push.apply(t,n)):i.items.push(Object.assign({label:a,className:o},l));return i}function h(e){var t=e.className,n=(0,r.Z)(e,m);if(n.to||n.href)return a.createElement(o.O,(0,i.Z)({className:(0,c.Z)("dropdown__link",t),activeClassName:"dropdown__link--active"},n));if(n.label)return a.createElement("div",{className:"dropdown__label"},n.label);throw"Mega dropdown item must be a link or a category header."}function b(e){var t,n=e.items_,l=e.layout,u=e.position,m=e.className,f=(0,r.Z)(e,d),v=p(n,(0,s.be)()),b=(0,a.useRef)(null),_=(0,a.useState)(!1),E=_[0],k=_[1],w=n.map(g),Z=l.length,N=Math.max.apply(Math,l.map((function(e){return e.split(/\s+/).length}))),y=[];l.forEach((function(e,t){e.split(/\s+/).forEach((function(e,n){e&&"."!==e&&(y[t+n*Z]=e)}))}));for(var C=y.map((function(e){var t,n=w[e];if(n)return null!=(t=n.items[n.index++])?t:null})),I=[],D=null,L=0;L<Z;L++){for(var A=[],x=0;x<N;x++){var B=C[L+x*Z];A.push(B),B&&(D=B)}I.push(A)}return D.onKeyDown=function(e){"Tab"===e.key&&k(!1)},(0,a.useEffect)((function(){var e=function(e){b.current&&!b.current.contains(e.target)&&k(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[b]),a.createElement(a.Fragment,null,a.createElement("div",{ref:b,className:(0,c.Z)("dropdown","dropdown--hoverable",{"dropdown--right":"right"===u,"dropdown--show":E}),onMouseEnter:function(){return k(!0)},onMouseLeave:function(){return k(!1)}},a.createElement(o.O,(0,i.Z)({className:(0,c.Z)("navbar__item navbar__link",m,{"navbar__link--active":v})},f,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),k(!E))}}),null!=(t=f.children)?t:f.label)),a.createElement("div",{className:(0,c.Z)("dropdown__container",{"dropdown__container--show":E}),onMouseEnter:function(){return k(!0)},onMouseLeave:function(){return k(!1)}},a.createElement("div",{className:"dropdown__menu dropdown__menu--mega"},I.map((function(e,t){return a.createElement("div",{className:"row row--no-gutters dropdown__row",key:t},e.map((function(e,t){return a.createElement("div",{className:"col margin-horiz--xs dropdown__col",key:t},e?a.createElement(h,e):null)})))})))))}function _(e){var t,n=e.items_,l=e.className,u=(e.position,e.layout,(0,r.Z)(e,f)),m=(0,s.be)(),d=p(n,m),v=(0,s.uR)({initialState:function(){return!d}}),g=v.collapsed,h=v.toggleCollapsed,b=v.setCollapsed;return(0,a.useEffect)((function(){d&&b(!d)}),[m,d]),a.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":g})},a.createElement(o.O,(0,i.Z)({role:"button",className:(0,c.Z)("menu__link menu__link--sublist",l)},u,{onClick:function(e){e.preventDefault(),h()}}),null!=(t=u.children)?t:u.label),a.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.map((function(e,t){return a.createElement(L,(0,i.Z)({mobile:!0,isDropdownItem:!0,onClick:u.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}var E=function(e){var t=e.mobile,n=void 0!==t&&t,o=(0,r.Z)(e,v),l=n?_:b;return a.createElement(l,o)},k=n(4194),w=n(6832),Z=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function N(e){var t=e.mobile,n=e.dropdownItemsBefore,o=e.dropdownItemsAfter,c=(0,r.Z)(e,Z),u=(0,w.Z)().i18n,m=u.currentLocale,d=u.locales,f=u.localeConfigs,v=(0,s.l5)();function p(e){return f[e].label}var g=d.map((function(e){var t="pathname://"+v.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:p(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===m?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),h=[].concat(n,g,o),b=t?"Languages":p(m);return a.createElement(l.Z,(0,i.Z)({},c,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(k.Z,{style:{verticalAlign:"text-bottom",marginRight:5}}),a.createElement("span",null,b)),items:h}))}var y=n(42738);function C(e){return e.mobile?null:a.createElement(y.Z,null)}var I=["type"],D={default:function(){return o.Z},localeDropdown:function(){return N},search:function(){return C},dropdown:function(){return l.Z},megaDropdown:function(){return E},docsVersion:function(){return n(18384).Z},docsVersionDropdown:function(){return n(68510).Z},doc:function(){return n(16679).Z}};function L(e){var t=e.type,n=(0,r.Z)(e,I),o=function(e){var t=D[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t,n){return n?"megaDropdown":e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items,void 0!==n.layout));return a.createElement(o,n)}},5086:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(22122),a=n(67294),o=n(19257),l=n(5730),i=n(86010),c=(0,a.memo)((function(e){var t=e.className,n=e.styles,r=e.icons,o=e.checked,l=e.disabled,c=e.onChange,s=(0,a.useState)(o),u=s[0],m=s[1],d=(0,a.useState)(!1),f=d[0],v=d[1],p=(0,a.useRef)(null);return a.createElement("div",{className:(0,i.Z)("toggle",t,{"toggle--checked":u,"toggle--focused":f,"toggle--disabled":l}),role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=p.current)?void 0:e.click()}},a.createElement("div",{className:"toggle__icon toggle__icon--unchecked",style:n.unchecked},r.unchecked),a.createElement("div",{className:"toggle__icon toggle__icon--checked",style:n.checked},r.checked),a.createElement("input",{ref:p,checked:u,type:"checkbox",className:"toggle__screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:function(){return m(!u)},onFocus:function(){return v(!0)},onBlur:function(){return v(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=p.current)||t.click())}}))}));function s(e){var t=(0,o.LU)().colorMode.switchConfig,n=t.darkIcon,i=t.darkIconStyle,s=t.lightIcon,u=t.lightIconStyle,m=(0,l.Z)();return a.createElement(c,(0,r.Z)({disabled:!m,styles:{unchecked:u,checked:i},icons:{unchecked:s,checked:n}},e))}}}]);