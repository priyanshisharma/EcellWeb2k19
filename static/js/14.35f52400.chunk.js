(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{161:function(e,t,n){"use strict";n.r(t);var o=n(11),a=n(12),r=n(14),c=n(13),i=n(15),u=n(0),l=n.n(u),s=n(51),f=n(24),m=(n(70),n(58)),b=n(57),p=n(27),y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return(n=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).axios=Object(s.b)(),n.state={events:[],loading:!0},n}return Object(i.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.axios.get("/events/list/2019/").then(function(t){var n=t.data.data;console.log({events:n}),e.setState({events:n,loading:!1})})}},{key:"render",value:function(){var e=this.state.events.map(function(e){return l.a.createElement("div",{className:"event",key:e.id},l.a.createElement("div",{className:"cont1"},l.a.createElement("div",{className:"front1 shadow-lg p-3 mb-5 bg-white rounded"},l.a.createElement("img",{className:"event-pic",src:e.icon_url,alt:e.name})),l.a.createElement("div",{className:"back2 shadow-lg p-3 mb-5 bg-white rounded"},l.a.createElement("div",{className:"inner1"},l.a.createElement("h4",{className:"event-name",style:{fontWeight:"800"}},e.name),l.a.createElement("div",{className:"image-text"},l.a.createElement(f.c,{className:"event-detail-link",to:"/events/".concat(e.id)},"Know More"))))))});return l.a.createElement("div",{className:"events"},l.a.createElement(m.a,null),l.a.createElement("div",{className:"container-fluid ctn16"},l.a.createElement("h2",{className:"header6"},"Our Events"),l.a.createElement("div",{className:"list"},this.state.loading?l.a.createElement(p.a,null):e)),l.a.createElement(b.a,null))}}]),t}(u.Component);t.default=y},52:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return o})},53:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}n.d(t,"a",function(){return a})},54:function(e,t,n){"use strict";function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return o})},55:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}var r=n(25);function c(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?Object(r.a)(e):t}n.d(t,"a",function(){return c})},56:function(e,t,n){"use strict";function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}n.d(t,"a",function(){return a})},70:function(e,t,n){}}]);
//# sourceMappingURL=14.35f52400.chunk.js.map