(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{161:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n(12),o=n(14),l=n(13),c=n(15),s=n(0),i=n.n(s),u=(n(64),n(50)),m=n(58),p=n(57),f=n(69),d=n(51),b=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).axios=Object(u.b)(),n.state={sponsors:[],loading:!0,year:null},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.year;this.axios.get("/sponsors/list/".concat(t,"/")).then(function(n){console.log(n);var a=n.data.data;e.setState({loading:!1,sponsors:a,year:t})})}},{key:"render",value:function(){var e=this.state.sponsors.map(function(e){return i.a.createElement("div",{className:"col mx-3",key:e.id},i.a.createElement("div",{className:"cont"},i.a.createElement("div",{className:"front shadow-lg p-3 mb-5 bg-white rounded"},i.a.createElement("img",{alt:e.name,className:"spons-Image",src:e.pic_url})),i.a.createElement("div",{className:"back shadow-lg p-3 mb-5 bg-white rounded"},i.a.createElement("div",{className:"inner"},i.a.createElement("h6",{style:{fontWeight:"800"}},e.name),i.a.createElement("p",{className:"ph-no"},e.contact),i.a.createElement("p",null,e.details),i.a.createElement("p",null,i.a.createElement("a",{className:"web",href:e.website},"Website"))))))});return i.a.createElement("div",{className:"sponsors"},i.a.createElement(m.a,null),i.a.createElement("div",{className:"header1"},"SPONSORS ",this.state.year),i.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1200px",paddingTop:"300px"}},i.a.createElement(f.a,null)),i.a.createElement("div",{className:"container-fluid ctn9",style:{maxWidth:"1500px",paddingTop:"0px"}},this.state.loading?i.a.createElement(d.a,{style:{margin:"50px auto"}}):e),i.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1200px",paddingTop:"50px"}},i.a.createElement(f.a,null)),i.a.createElement(p.a,null))}}]),t}(s.Component);t.default=b},51:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(11),r=n(12),o=n(14),l=n(13),c=n(15),s=n(0),i=n.n(s),u=(n(34),function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"loader"},i.a.createElement("div",{className:"l_main"},i.a.createElement("div",{className:"l_square"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement("div",{className:"l_square"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement("div",{className:"l_square"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement("div",{className:"l_square"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null))))}}]),t}(s.Component))},52:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return a})},53:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",function(){return r})},54:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return a})},55:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}var o=n(25);function l(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}n.d(t,"a",function(){return l})},56:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}n.d(t,"a",function(){return r})},64:function(e,t,n){},69:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(24);t.a=function(){return r.a.createElement("div",{className:"ctn10"},r.a.createElement("div",null,r.a.createElement(o.b,{className:"links",to:"/sponsors/yearwise"},"Yearwise Sponsors")),r.a.createElement("div",null,r.a.createElement(o.b,{className:"links link-text",to:"/sponsors/sponsors_heads"},"Head Co-ordinators of Sponsorship")))}}}]);
//# sourceMappingURL=10.497c0c4b.chunk.js.map