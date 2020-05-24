/*! For license information please see a8b2a833.50786b6e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{115:function(t,e,s){"use strict";s.r(e),s.d(e,"frontMatter",(function(){return c})),s.d(e,"metadata",(function(){return p})),s.d(e,"rightToc",(function(){return h})),s.d(e,"default",(function(){return u}));var r=s(2),n=s(6),i=s(0),o=s(129),a=s(131),l=s(130),c={id:"hello-world",title:"Hello, World!"},p={id:"examples/hello-world",title:"Hello, World!",description:"<CodeBlock children={",source:"@site/docs/examples/hello-world.md",permalink:"/docs/examples/hello-world",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/hello-world.md",sidebar:"sidebar",previous:{title:"What is Grid.js?",permalink:"/docs/index"},next:{title:"Pagination",permalink:"/docs/examples/pagination"}},h=[],d={rightToc:h};function u(t){var e=t.components,s=Object(n.a)(t,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,s,{components:e,mdxType:"MDXLayout"}),Object(o.b)(l.a,{children:"\nconst grid = new Grid({\n  columns: ['Name', 'Email', 'Phone Number'],\n  data: [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']\n  ]\n});\n",transformCode:function(t){return"\nfunction () {\n  "+t+"\n  \n  useEffect(() => {\n    grid.render(document.getElementById('wrapper'));\n  });\n  \n  return (\n    <div id=\"wrapper\" />\n  );\n}\n"},live:!0,scope:{Grid:a.a,CodeBlock:l.a,useEffect:i.useEffect},mdxType:"CodeBlock"}))}u.isMDXComponent=!0},131:function(t,e,s){"use strict";s.d(e,"a",(function(){return vt}));s(12);function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){const e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))}class n{constructor(t){this._id=t||r()}get id(){return this._id}}class i extends n{constructor(){super(),this._columns=[]}get columns(){return this._columns}set columns(t){this._columns=t}adjustWidth(t){for(const e of this.columns)!e.width&&t&&(e.width=Math.round(100/this.columns.length)+"%")}static fromUserConfig(t){if(!t.columns&&!t.from)return null;const e=new i;var s;return"toLowerCase",(s=t.columns)&&s.length&&function(t,e){return void 0!==t.toLowerCase}(s[0])?e.columns=i.fromArrayOfString(t.columns).columns:t.from?e.columns=i.fromHTMLTable(t.from).columns:e.columns=t.columns,e.adjustWidth(t.autoWidth),e}static fromArrayOfString(t){const e=new i;for(const s of t)e.columns.push({name:s});return e}static fromHTMLTable(t){const e=new i,s=t.querySelector("thead").querySelectorAll("th");for(const r of s)e.columns.push({name:r.innerText});return e}}class o{constructor(t){const e=Object.assign(Object.assign({},o.defaultConfig()),t);Object.assign(this,e)}static defaultConfig(){return{width:"100%",autoWidth:!0}}static fromUserConfig(t){const e=new o(t);return t?(e.header=i.fromUserConfig(e),e.pagination=Object.assign({enabled:!0===t.pagination||t.pagination instanceof Object},t.pagination),e.search=Object.assign({enabled:!0===t.search||t.search instanceof Object},t.search),e):e}}var a,l,c,p,h,d,u,_,f={},g=[],m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function y(t,e){for(var s in e)t[s]=e[s];return t}function b(t){var e=t.parentNode;e&&e.removeChild(t)}function w(t,e,s){var r,n=arguments,i={};for(r in e)"key"!==r&&"ref"!==r&&(i[r]=e[r]);if(arguments.length>3)for(s=[s],r=3;r<arguments.length;r++)s.push(n[r]);if(null!=s&&(i.children=s),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===i[r]&&(i[r]=t.defaultProps[r]);return v(t,i,e&&e.key,e&&e.ref,null)}function v(t,e,s,r,n){var i={type:t,props:e,key:s,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:n};return null==n&&(i.__v=i),a.vnode&&a.vnode(i),i}function k(t){return t.children}function x(t,e){this.props=t,this.context=e}function P(t,e){if(null==e)return t.__?P(t.__,t.__.__k.indexOf(t)+1):null;for(var s;e<t.__k.length;e++)if(null!=(s=t.__k[e])&&null!=s.__e)return s.__e;return"function"==typeof t.type?P(t):null}function C(t){var e,s;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(s=t.__k[e])&&null!=s.__e){t.__e=t.__c.base=s.__e;break}return C(t)}}function S(t){(!t.__d&&(t.__d=!0)&&l.push(t)&&!c++||h!==a.debounceRendering)&&((h=a.debounceRendering)||p)(N)}function N(){for(var t;c=l.length;)t=l.sort((function(t,e){return t.__v.__b-e.__v.__b})),l=[],t.some((function(t){var e,s,r,n,i,o,a;t.__d&&(o=(i=(e=t).__v).__e,(a=e.__P)&&(s=[],(r=y({},i)).__v=r,n=L(a,i,r,e.__n,void 0!==a.ownerSVGElement,null,s,null==o?P(i):o),M(s,i),n!=o&&C(i)))}))}function D(t,e,s,r,n,i,o,a,l){var c,p,h,d,u,_,m,y=s&&s.__k||g,w=y.length;if(a==f&&(a=null!=i?i[0]:w?P(s,0):null),c=0,e.__k=E(e.__k,(function(s){if(null!=s){if(s.__=e,s.__b=e.__b+1,null===(h=y[c])||h&&s.key==h.key&&s.type===h.type)y[c]=void 0;else for(p=0;p<w;p++){if((h=y[p])&&s.key==h.key&&s.type===h.type){y[p]=void 0;break}h=null}if(d=L(t,s,h=h||f,r,n,i,o,a,l),(p=s.ref)&&h.ref!=p&&(m||(m=[]),h.ref&&m.push(h.ref,null,s),m.push(p,s.__c||d,s)),null!=d){var g;if(null==_&&(_=d),void 0!==s.__d)g=s.__d,s.__d=void 0;else if(i==h||d!=a||null==d.parentNode){t:if(null==a||a.parentNode!==t)t.appendChild(d),g=null;else{for(u=a,p=0;(u=u.nextSibling)&&p<w;p+=2)if(u==d)break t;t.insertBefore(d,a),g=a}"option"==e.type&&(t.value="")}a=void 0!==g?g:d.nextSibling,"function"==typeof e.type&&(e.__d=a)}else a&&h.__e==a&&a.parentNode!=t&&(a=P(h))}return c++,s})),e.__e=_,null!=i&&"function"!=typeof e.type)for(c=i.length;c--;)null!=i[c]&&b(i[c]);for(c=w;c--;)null!=y[c]&&A(y[c],y[c]);if(m)for(c=0;c<m.length;c++)j(m[c],m[++c],m[++c])}function E(t,e,s){if(null==s&&(s=[]),null==t||"boolean"==typeof t)e&&s.push(e(null));else if(Array.isArray(t))for(var r=0;r<t.length;r++)E(t[r],e,s);else s.push(e?e("string"==typeof t||"number"==typeof t?v(null,t,null,null,t):null!=t.__e||null!=t.__c?v(t.type,t.props,t.key,null,t.__v):t):t);return s}function T(t,e,s){"-"===e[0]?t.setProperty(e,s):t[e]="number"==typeof s&&!1===m.test(e)?s+"px":null==s?"":s}function U(t,e,s,r,n){var i,o,a,l,c;if(n?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(i=t.style,"string"==typeof s)i.cssText=s;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(l in r)s&&l in s||T(i,l,"");if(s)for(c in s)r&&s[c]===r[c]||T(i,c,s[c])}else"o"===e[0]&&"n"===e[1]?(o=e!==(e=e.replace(/Capture$/,"")),a=e.toLowerCase(),e=(a in t?a:e).slice(2),s?(r||t.addEventListener(e,O,o),(t.l||(t.l={}))[e]=s):t.removeEventListener(e,O,o)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&!n&&e in t?t[e]=null==s?"":s:"function"!=typeof s&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==s||!1===s?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),s):null==s||!1===s&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,s))}function O(t){this.l[t.type](a.event?a.event(t):t)}function L(t,e,s,r,n,i,o,l,c){var p,h,d,u,_,f,g,m,b,w,v=e.type;if(void 0!==e.constructor)return null;(p=a.__b)&&p(e);try{t:if("function"==typeof v){if(m=e.props,b=(p=v.contextType)&&r[p.__c],w=p?b?b.props.value:p.__:r,s.__c?g=(h=e.__c=s.__c).__=h.__E:("prototype"in v&&v.prototype.render?e.__c=h=new v(m,w):(e.__c=h=new x(m,w),h.constructor=v,h.render=R),b&&b.sub(h),h.props=m,h.state||(h.state={}),h.context=w,h.__n=r,d=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=v.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=y({},h.__s)),y(h.__s,v.getDerivedStateFromProps(m,h.__s))),u=h.props,_=h.state,d)null==v.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==v.getDerivedStateFromProps&&m!==u&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,w),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,w)||e.__v===s.__v&&!h.__){for(h.props=m,h.state=h.__s,e.__v!==s.__v&&(h.__d=!1),h.__v=e,e.__e=s.__e,e.__k=s.__k,h.__h.length&&o.push(h),p=0;p<e.__k.length;p++)e.__k[p]&&(e.__k[p].__=e);break t}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,w),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(u,_,f)}))}h.context=w,h.props=m,h.state=h.__s,(p=a.__r)&&p(e),h.__d=!1,h.__v=e,h.__P=t,p=h.render(h.props,h.state,h.context),e.__k=null!=p&&p.type==k&&null==p.key?p.props.children:Array.isArray(p)?p:[p],null!=h.getChildContext&&(r=y(y({},r),h.getChildContext())),d||null==h.getSnapshotBeforeUpdate||(f=h.getSnapshotBeforeUpdate(u,_)),D(t,e,s,r,n,i,o,l,c),h.base=e.__e,h.__h.length&&o.push(h),g&&(h.__E=h.__=null),h.__e=!1}else null==i&&e.__v===s.__v?(e.__k=s.__k,e.__e=s.__e):e.__e=I(s.__e,e,s,r,n,i,o,c);(p=a.diffed)&&p(e)}catch(t){e.__v=null,a.__e(t,e,s)}return e.__e}function M(t,e){a.__c&&a.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){a.__e(t,e.__v)}}))}function I(t,e,s,r,n,i,o,a){var l,c,p,h,d,u=s.props,_=e.props;if(n="svg"===e.type||n,null!=i)for(l=0;l<i.length;l++)if(null!=(c=i[l])&&((null===e.type?3===c.nodeType:c.localName===e.type)||t==c)){t=c,i[l]=null;break}if(null==t){if(null===e.type)return document.createTextNode(_);t=n?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,_.is&&{is:_.is}),i=null,a=!1}if(null===e.type)u!==_&&t.data!=_&&(t.data=_);else{if(null!=i&&(i=g.slice.call(t.childNodes)),p=(u=s.props||f).dangerouslySetInnerHTML,h=_.dangerouslySetInnerHTML,!a){if(u===f)for(u={},d=0;d<t.attributes.length;d++)u[t.attributes[d].name]=t.attributes[d].value;(h||p)&&(h&&p&&h.__html==p.__html||(t.innerHTML=h&&h.__html||""))}(function(t,e,s,r,n){var i;for(i in s)"children"===i||"key"===i||i in e||U(t,i,null,s[i],r);for(i in e)n&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||s[i]===e[i]||U(t,i,e[i],s[i],r)})(t,_,u,n,a),h?e.__k=[]:(e.__k=e.props.children,D(t,e,s,r,"foreignObject"!==e.type&&n,i,o,f,a)),a||("value"in _&&void 0!==(l=_.value)&&l!==t.value&&U(t,"value",l,u.value,!1),"checked"in _&&void 0!==(l=_.checked)&&l!==t.checked&&U(t,"checked",l,u.checked,!1))}return t}function j(t,e,s){try{"function"==typeof t?t(e):t.current=e}catch(t){a.__e(t,s)}}function A(t,e,s){var r,n,i;if(a.unmount&&a.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||j(r,null,e)),s||"function"==typeof t.type||(s=null!=(n=t.__e)),t.__e=t.__d=void 0,null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){a.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&A(r[i],e,s);null!=n&&b(n)}function R(t,e,s){return this.constructor(t,s)}function W(t,e,s,r){return new(s||(s=Promise))((function(n,i){function o(t){try{l(r.next(t))}catch(t){i(t)}}function a(t){try{l(r.throw(t))}catch(t){i(t)}}function l(t){t.done?n(t.value):new s((function(e){e(t.value)})).then(o,a)}l((r=r.apply(t,e||[])).next())}))}a={__e:function(t,e){for(var s,r;e=e.__;)if((s=e.__c)&&!s.__)try{if(s.constructor&&null!=s.constructor.getDerivedStateFromError&&(r=!0,s.setState(s.constructor.getDerivedStateFromError(t))),null!=s.componentDidCatch&&(r=!0,s.componentDidCatch(t)),r)return S(s.__E=s)}catch(e){t=e}throw t}},x.prototype.setState=function(t,e){var s;s=this.__s!==this.state?this.__s:this.__s=y({},this.state),"function"==typeof t&&(t=t(s,this.props)),t&&y(s,t),null!=t&&this.__v&&(e&&this.__h.push(e),S(this))},x.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),S(this))},x.prototype.render=k,l=[],c=0,p="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,d=f;class B extends class{}{constructor(t){super(),this.rows=[],this.set(t)}get(){return W(this,void 0,void 0,(function*(){return this.rows}))}set(t){return W(this,void 0,void 0,(function*(){return this.rows=t,!0}))}get length(){return new Promise(t=>t(Array.from(this.rows).length))}}class $ extends Error{}class F extends ${}class H extends x{}function G(...t){return"gridjs gridjs"+t.reduce((t,e)=>`${t}-${e}`,"")}!function(t){t[t.Init=0]="Init",t[t.Loading=1]="Loading",t[t.Loaded=2]="Loaded",t[t.Rendered=3]="Rendered"}(u||(u={}));class q extends H{render(){return w("td",{className:G("td")},this.props.cell.data)}}class K extends H{render(){return this.props.children?w("tr",{className:G("tr")},this.props.children):w("tr",{className:G("tr")},this.props.row.cells.map(t=>w(q,{cell:t,key:t.id})))}}class J extends H{render(){return w("tbody",{className:G("tbody")},this.props.data&&this.props.data.rows.map(t=>w(K,{key:t.id,row:t})))}}!function(t){t[t.Extractor=0]="Extractor",t[t.Transformer=1]="Transformer",t[t.Filter=2]="Filter",t[t.Sort=3]="Sort",t[t.Limit=4]="Limit"}(_||(_={}));class z{constructor(t){this.propsUpdatedCallback=new Set,this.beforeProcessCallback=new Set,this.afterProcessCallback=new Set,this._props={},this.id=r(),t&&this.setProps(t)}process(...t){this.validateProps instanceof Function&&this.validateProps(...t),this.trigger(this.beforeProcessCallback,...t);const e=this._process(...t);return this.trigger(this.afterProcessCallback,...t),e}trigger(t,...e){t&&t.forEach(t=>t(...e))}setProps(t){return Object.assign(this._props,t),this.trigger(this.propsUpdatedCallback,this),this}get props(){return this._props}propsUpdated(t){return this.propsUpdatedCallback.add(t),this}beforeProcess(t){return this.beforeProcessCallback.add(t),this}afterProcess(t){return this.afterProcessCallback.add(t),this}}class V extends n{constructor(t){super(),this.data=t}get data(){return this._data}set data(t){this._data=t}}class X extends n{constructor(t){super(),this.cells=t||[]}get cells(){return this._cells}set cells(t){this._cells=t}static fromCells(t){return new X(t.map(t=>new V(t.data)))}get length(){return this.cells.length}}class Y extends n{constructor(t){super(),this.rows=t instanceof Array?t:t instanceof X?[t]:[]}get rows(){return this._rows}set rows(t){this._rows=t}get length(){return this.rows.length}static fromRows(t){return new Y(t.map(t=>X.fromCells(t.cells)))}static fromArray(t){return t=function(t){return t[0]instanceof Array?t:[t]}(t),new Y(t.map(t=>new X(t.map(t=>new V(t)))))}}class Q extends z{validateProps(){for(const t of this.props.columns)if(void 0===t.direction&&(t.direction=1),1!==t.direction&&-1!==t.direction)throw Error("Invalid sort direction "+t.direction)}get type(){return _.Sort}compare(t,e,s,r){const n=t.cells[s],i=e.cells[s];return n.data>i.data?1*r:n.data<i.data?-1*r:0}compareWrapper(t,e){let s=0;for(const r of this.props.columns){if(0!==s)break;s|=this.compare(t,e,r.index,r.direction)}return s}_process(t){const e=[...t.rows];return e.sort(this.compareWrapper.bind(this)),new Y(e)}}var Z=new class{constructor(){this._callbacks={},this._isDispatching=!1,this._isHandled={},this._isPending={},this._lastID=1}register(t){const e="ID_"+this._lastID++;return this._callbacks[e]=t,e}unregister(t){if(!this._callbacks[t])throw Error(`Dispatcher.unregister(...): ${t} does not map to a registered callback.`);delete this._callbacks[t]}waitFor(t){if(!this._isDispatching)throw Error("Dispatcher.waitFor(...): Must be invoked while dispatching.");for(let e=0;e<t.length;e++){const s=t[e];if(this._isPending[s]){if(!this._isHandled[s])throw Error(`Dispatcher.waitFor(...): Circular dependency detected while ' +\n            'waiting for ${s}.`)}else{if(!this._callbacks[s])throw Error(`Dispatcher.waitFor(...): ${s} does not map to a registered callback.`);this._invokeCallback(s)}}}dispatch(t){if(this._isDispatching)throw Error("Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.");this._startDispatching(t);try{for(const t in this._callbacks)this._isPending[t]||this._invokeCallback(t)}finally{this._stopDispatching()}}isDispatching(){return this._isDispatching}_invokeCallback(t){this._isPending[t]=!0,this._callbacks[t](this._pendingPayload),this._isHandled[t]=!0}_startDispatching(t){for(const e in this._callbacks)this._isPending[e]=!1,this._isHandled[e]=!1;this._pendingPayload=t,this._isDispatching=!0}_stopDispatching(){delete this._pendingPayload,this._isDispatching=!1}};class tt extends class{init(t){this.callbacks||(this.callbacks={}),t&&!this.callbacks[t]&&(this.callbacks[t]=[])}on(t,e){return this.init(t),this.callbacks[t].push(e),this}off(t,e){const s=t;return this.init(),this.callbacks[s]&&0!==this.callbacks[s].length?(this.callbacks[s]=this.callbacks[s].filter(t=>t!=e),this):this}emit(t,...e){const s=t;return this.init(s),this.callbacks[s].length>0&&(this.callbacks[s].forEach(t=>t(...e)),!0)}}{constructor(){super(),this._state=this.getInitialState(),Z.register(this._handle.bind(this))}_handle(t){this.handle(t.type,t.payload)}setState(t){const e=this._state;this._state=t,this.emit("updated",t,e)}get state(){return this._state}}var et=new class extends tt{getInitialState(){return[]}handle(t,e){if("SORT_COLUMN"===t){const{index:t,direction:s,multi:r}=e;this.sortColumn(t,s,r)}else if("SORT_COLUMN_TOGGLE"===t){const{index:t,multi:s}=e;this.sortToggle(t,s)}}sortToggle(t,e){const s=[...this.state].find(e=>e.index===t);s?this.sortColumn(t,1===s.direction?-1:1,e):this.sortColumn(t,1,e)}sortColumn(t,e,s){let r=[...this.state];const n=r.length,i=r.find(e=>e.index===t);let o=!1,a=!1,l=!1,c=!1;if(void 0!==i?s?-1===i.direction?l=!0:c=!0:1===n?c=!0:n>1&&(a=!0,o=!0):0===n?o=!0:n>0&&!s?(o=!0,a=!0):n>0&&s&&(o=!0),a&&(r=[]),o)r.push({index:t,direction:e});else if(c){const t=r.indexOf(i);r[t].direction=e}else if(l){const t=r.indexOf(i);r.splice(t,1)}this.setState(r)}};class st{dispatch(t,e){Z.dispatch({type:t,payload:e})}}var rt=new class extends st{sortColumn(t,e,s){this.dispatch("SORT_COLUMN",{index:t,direction:e,multi:s})}sortToggle(t,e){this.dispatch("SORT_COLUMN_TOGGLE",{index:t,multi:e})}},nt=new class{format(t,e){return`[Grid.js] [${e.toUpperCase()}]: ${t}`}error(t,e){const s=this.format(t,"error");if(e)throw Error(s);console.error(s)}warn(t){console.warn(this.format(t,"warn"))}info(t){console.info(this.format(t,"info"))}};class it extends H{constructor(t){super(t),this.sortProcessor=this.getOrCreateSortProcessor(),this.state={direction:0},et.on("updated",this.storeUpdated.bind(this))}componentWillUnmount(){et.off("updated",this.storeUpdated.bind(this))}storeUpdated(t){this.sortProcessor.setProps({columns:t});const e=et.state.find(t=>t.index===this.props.index);e?this.setState({direction:e.direction}):this.setState({direction:0})}getOrCreateSortProcessor(){const t=this.props.pipeline.getStepsByType(_.Sort);let e;return t.length>1&&nt.warn("There are more than sorting pipeline registered, selecting the first one"),t.length>0?e=t[0]:(e=new Q({columns:et.state}),this.props.pipeline.register(e)),e}changeDirection(t){t.preventDefault(),t.stopPropagation(),rt.sortToggle(this.props.index,!0===t.shiftKey)}render(){const t=this.state.direction;let e="neutral";return 1===t?e="asc":-1===t&&(e="desc"),w("button",{title:"Sort column "+(1===t?"descending":"ascending"),className:`${G("sort")} ${G("sort",e)}`,onClick:this.changeDirection.bind(this)})}}class ot extends H{isSortable(){return this.props.column.sort}onClick(t){t.stopPropagation(),this.isSortable()&&rt.sortToggle(this.props.index,!0===t.shiftKey)}render(){return w("th",{className:`${G("th")} ${this.isSortable()?G("th","sort"):""}`.trim(),onClick:this.onClick.bind(this),width:this.props.column.width},this.props.column.name,this.isSortable()&&w(it,{pipeline:this.props.pipeline,index:this.props.index,column:this.props.column}))}}class at extends H{render(){return this.props.header?w("thead",{className:G("thead")},w(K,null,this.props.header.columns.map((t,e)=>w(ot,{pipeline:this.props.pipeline,column:t,index:e})))):null}}class lt extends H{getStyle(){const t={};return this.props.width&&(t.width=this.props.width),t}render(){return w("table",{className:G("table"),style:this.getStyle()},w(at,{pipeline:this.props.pipeline,header:this.props.header}),w(J,{data:this.props.data}))}}class ct extends z{get type(){return _.Filter}_process(t){return this.props.keyword?(e=String(this.props.keyword).trim(),new Y(t.rows.filter(t=>t.cells.some(t=>new RegExp(String(e),"gi").test(String(t.data)))))):t;var e}}var pt=new class extends tt{getInitialState(){return{keyword:null}}handle(t,e){if("SEARCH_KEYWORD"===t){const{keyword:t}=e;this.search(t)}}search(t){this.setState({keyword:t})}},ht=new class extends st{search(t){this.dispatch("SEARCH_KEYWORD",{keyword:t})}};let dt=(()=>{class t extends H{constructor(t){super();const{enabled:e,keyword:s}=t;if(e){ht.search(s),pt.on("updated",this.storeUpdated.bind(this));const e=new ct({keyword:t.keyword});this.searchProcessor=e,this.props.pipeline.register(e)}}storeUpdated(t){this.searchProcessor.setProps({keyword:t.keyword})}onChange(t){const e=t.target.value;ht.search(e)}render(){return this.props.enabled?w("div",{className:G("search")},w("input",{type:"search",placeholder:this.props.placeholder,onInput:this.onChange.bind(this),className:`${G("input")} ${G("search","input")}`,value:pt.state.keyword})):null}}return t.defaultProps={placeholder:"Type a keyword..."},t})();class ut extends H{render(){return w("div",{className:G("head")},w(dt,Object.assign({pipeline:this.props.config.pipeline},this.props.config.search)))}}class _t extends z{validateProps(){if(isNaN(Number(this.props.limit))||isNaN(Number(this.props.page)))throw Error("Invalid parameters passed")}get type(){return _.Limit}_process(t){const e=this.props.page,s=e*this.props.limit,r=(e+1)*this.props.limit;return new Y(t.rows.slice(s,r))}}let ft=(()=>{class t extends H{constructor(t){super(),this.state={limit:t.limit,page:t.page||0,total:0,pages:0}}componentWillMount(){if(this.props.enabled){const t=new _t({limit:this.state.limit,page:this.state.page});t.beforeProcess(t=>{const e=t.rows.length;this.setState({total:e,pages:Math.ceil(e/this.state.limit)})}),this.processor=t,this.props.pipeline.register(t)}}componentDidMount(){this.props.pipeline.updated(t=>{t!==this.processor&&this.setPage(0)})}setPage(t){if(t>=this.state.pages||t<0||t===this.state.page)return null;this.setState({page:t}),this.processor.setProps({page:t})}currentPageClass(t){return this.state.page===t?G("currentPage"):null}render(){if(!this.props.enabled)return null;const t=Math.min(this.state.pages,this.props.buttonsCount);let e=Math.min(this.state.page,Math.floor(t/2));return this.state.page+Math.floor(t/2)>=this.state.pages&&(e=t-(this.state.pages-this.state.page)),w("div",{className:G("pagination")},this.props.summary&&this.state.total>0&&w("div",{className:G("summary"),title:`Page ${this.state.page+1} of ${this.state.pages}`},"Showing ",w("span",null,this.state.page*this.state.limit+1)," to"," ",w("span",null,Math.min((this.state.page+1)*this.state.limit,this.state.total))," ","of ",w("span",null,this.state.total)," results"),w("div",{className:G("pages")},this.props.prevButton&&w("button",{onClick:this.setPage.bind(this,this.state.page-1)},"Previous"),this.state.pages>t&&this.state.page-e>0&&w(k,null,w("button",{onClick:this.setPage.bind(this,0),title:"Page 1"},"1"),w("button",{className:G("spread")},"...")),Array.from(Array(t).keys()).map(t=>this.state.page+(t-e)).map(t=>w("button",{onClick:this.setPage.bind(this,t),className:this.currentPageClass(t)},t+1)),this.state.pages>t&&this.state.pages>this.state.page+e+1&&w(k,null,w("button",{className:G("spread")},"..."),w("button",{onClick:this.setPage.bind(this,this.state.pages-1),title:"Page "+this.state.pages},this.state.pages)),this.props.nextButton&&w("button",{onClick:this.setPage.bind(this,this.state.page+1)},"Next")))}}return t.defaultProps={summary:!0,nextButton:!0,prevButton:!0,buttonsCount:3,limit:10},t})();class gt extends H{render(){return w("div",{className:G("footer")},w(ft,Object.assign({pipeline:this.props.config.pipeline},this.props.config.pagination)))}}class mt extends H{constructor(t){super(t),this.state={status:u.Loading,data:null}}setData(t){this.setState({data:t,status:u.Loaded})}componentDidMount(){return W(this,void 0,void 0,(function*(){this.setData(yield this.props.pipeline.process()),this.props.pipeline.updated(()=>W(this,void 0,void 0,(function*(){this.setState({status:u.Loading}),this.setData(yield this.props.pipeline.process())})))}))}render(){return w("div",{className:G("container"),style:{width:this.props.width}},w(ut,{config:this.props.config}),w("div",{className:G("wrapper"),style:{width:this.props.width}},w(lt,{pipeline:this.props.pipeline,data:this.state.data,header:this.props.header,width:this.props.width}),w(gt,{config:this.props.config})))}}class yt{constructor(t){this._steps=new Map,this.cache=new Map,this.lastProcessorIndexUpdated=-1,this.propsUpdatedCallback=new Set,this.afterRegisterCallback=new Set,this.updatedCallback=new Set,t&&t.forEach(t=>this.register(t))}register(t,e=null){if(null===t.type)throw Error("Processor type is not defined");t.propsUpdated(this.processorPropsUpdated.bind(this)),this.addProcessorByPriority(t,e),this.afterRegistered(t)}addProcessorByPriority(t,e){let s=this._steps.get(t.type);if(!s){const e=[];this._steps.set(t.type,e),s=e}if(null===e||e<0)s.push(t);else if(s[e]){const r=s.slice(0,e-1),n=s.slice(e+1);this._steps.set(t.type,r.concat(t).concat(n))}else s[e]=t}get steps(){let t=[];for(const e of this.getSortedProcessorTypes()){const s=this._steps.get(e);s&&s.length&&(t=t.concat(s))}return t.filter(t=>t)}getStepsByType(t){return this.steps.filter(e=>e.type===t)}getSortedProcessorTypes(){return Object.keys(_).filter(t=>!isNaN(Number(t))).map(t=>Number(t))}process(t){return W(this,void 0,void 0,(function*(){const e=this.lastProcessorIndexUpdated,s=this.steps;let r=t;for(const t of s)this.findProcessorIndexByID(t.id)>=e?(r=yield t.process(r),this.cache.set(t.id,r)):r=this.cache.get(t.id);return this.lastProcessorIndexUpdated=s.length,r}))}findProcessorIndexByID(t){return this.steps.findIndex(e=>e.id==t)}setLastProcessorIndex(t){const e=this.findProcessorIndexByID(t.id);this.lastProcessorIndexUpdated>e&&(this.lastProcessorIndexUpdated=e)}trigger(t,...e){t&&t.forEach(t=>t(...e))}processorPropsUpdated(t){this.setLastProcessorIndex(t),this.trigger(this.propsUpdatedCallback),this.trigger(this.updatedCallback,t)}afterRegistered(t){this.setLastProcessorIndex(t),this.trigger(this.afterRegisterCallback),this.trigger(this.updatedCallback,t)}propsUpdated(t){return this.propsUpdatedCallback.add(t),this}afterRegister(t){return this.afterRegisterCallback.add(t),this}updated(t){return this.updatedCallback.add(t),this}}class bt extends z{get type(){return _.Extractor}_process(){return W(this,void 0,void 0,(function*(){return yield this.props.storage.get()}))}}class wt extends z{get type(){return _.Transformer}_process(t){return Y.fromArray(t)}}class vt{constructor(t){this.bootstrap(t)}bootstrap(t){this.setConfig(t),this.setStorage(),this.setPipeline()}get config(){return this._config}set config(t){this._config=t}setConfig(t){this.config=o.fromUserConfig(t)}setStorage(){this.config.storage=class{static createFromConfig(t){let e=null;if(t.data&&(e=new B(t.data)),t.from&&(e=new B(this.tableElementToArray(t.from)),t.from.style.display="none"),!e)throw new F("Could not determine the storage type");return e}static tableElementToArray(t){const e=[],s=t.querySelector("tbody").querySelectorAll("tr");for(const r of s){const t=r.querySelectorAll("td"),s=[];for(const e of t)s.push(e.innerHTML);e.push(s)}return e}}.createFromConfig(this.config)}setPipeline(){this.config.pipeline=new yt([new bt({storage:this.config.storage}),new wt])}createElement(){return w(mt,{config:this.config,pipeline:this.config.pipeline,header:this.config.header,width:this.config.width})}render(t){t||nt.error("Container element cannot be null",!0),t.childNodes.length>0?nt.error(`The container element ${t} is not empty. Make sure the container is empty and call render() again`):function(t,e,s){var r,n,i;a.__&&a.__(t,e),n=(r=s===d)?null:e.__k,t=w(k,null,[t]),i=[],L(e,e.__k=t,n||f,f,void 0!==e.ownerSVGElement,n?null:g.slice.call(e.childNodes),i,f,r),M(i,t)}(this.createElement(),t)}}}}]);