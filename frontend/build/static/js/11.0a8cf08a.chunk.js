(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{100:function(e,t,a){},106:function(e,t,a){},167:function(e,t,a){"use strict";var l=a(11),n=a(12),r=a(14),i=a(13),s=a(15),c=a(0),o=a.n(c),m=(a(168),a(24)),d=a(80),u=a(72),p=a(25),b=a(65),E=(a(257),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s))))._logout=function(e){e.preventDefault(),a.props.updateUser({loggedin:!1,token:null}),window.location.assign("/")},a}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props.auth),o.a.createElement("div",null,o.a.createElement("nav",{class:"navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar"},o.a.createElement(m.b,{class:"navbar-brand",to:"/"},o.a.createElement("img",{width:"70px",height:"70px",src:a(89)})),o.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{class:"navbar-toggler-icon"})),o.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{class:"navbar-nav mr-auto"},o.a.createElement("li",{class:"nav-item"},o.a.createElement(m.b,{class:"nav-link ip-links mx-3",to:"/iportal/jobs"},"View Startups ")),o.a.createElement("li",{class:"nav-item"},o.a.createElement("a",{class:"nav-link ip-links mx-3",href:"#"},"My Applications")),o.a.createElement("li",{class:"nav-item mx-3"},o.a.createElement(m.b,{class:"nav-link ip-links",to:"/"},"Go to Main Site"))),o.a.createElement("ul",{class:"navbar-nav nav-flex-icons"},o.a.createElement("li",{class:"nav-item"},o.a.createElement("button",{className:"iplogout","data-toggle":"modal","data-target":"#ipLogout",style:{background:"#EA4763",border:"none"},class:"nav-link ip-links mx-3",href:"#"},this.props.auth.first_name," ",this.props.auth.last_name)),o.a.createElement("li",{class:"nav-item"},o.a.createElement("button",{style:{background:"#EA4763",border:"none"},onClick:this._logout,class:"nav-link ip-links mx-2"},o.a.createElement("i",{class:"fas fa-power-off"}),"Logout"))))),o.a.createElement(d.a,{id:"ipLogout"},o.a.createElement("div",{className:"modal-body text-center mb-1"},o.a.createElement("div",{className:"details"},o.a.createElement("div",{style:{fontSize:"21px"}},o.a.createElement("span",{className:"font-weight-bold"},o.a.createElement("strong",null,"User: ")),this.props.auth.first_name," ",this.props.auth.last_name),o.a.createElement("div",{style:{fontSize:"21px"}},o.a.createElement("span",{className:"font-weight-bold"},o.a.createElement("strong",null,"E-Mail: ")," "),this.props.auth.email),o.a.createElement("div",{style:{fontSize:"21px"}},o.a.createElement("span",{className:"font-weight-bold"},o.a.createElement("strong",null,"Member Type: ")),u.b[this.props.auth.user_type]),o.a.createElement("div",{className:"text-center mt-2"},o.a.createElement("button",{ref:function(t){return e.close_btn=t},type:"button",className:"btn font-weight-bold btn-primary text-white waves-effect ml-auto","data-dismiss":"modal"},"Close"))))))}}]),t}(c.Component));t.a=Object(p.b)(function(e){return e},b)(E)},168:function(e,t,a){},262:function(e,t){},263:function(e,t){},281:function(e,t){},283:function(e,t){},51:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var l=a(90),n=a.n(l),r=a(36),i="http://localhost:8000";i="",t.b=function(){var e=void 0,t=r.store.getState().auth;return t&&(e=t.loggedin?t.token:void 0),n.a.create({baseURL:i,headers:{Authorization:e,Access:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJhbmRyb2lkIiwib3JnYW5pemF0aW9uIjoiRUNlbGwifQ.H2aaDJuOxK44D2kwRCWwv9s5rzJGCNYKT3thtQqN-hQ"}})}},63:function(e,t,a){"use strict";var l=a(29),n=a(0),r=a.n(n),i=a(24),s=(a(106),a(89)),c=a.n(s);t.a=function(){return r.a.createElement("div",{className:"footer",style:{background:"#0A0908",textAlign:"center",marginTop:"50px",position:"relative",bottom:"0"}},r.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1500px",padding:"50px"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-lg-4 col5"},r.a.createElement("h3",{style:{color:"white",fontWeight:"800",padding:"8px",background:"#0A0908"}},"Quick Links"),r.a.createElement("div",{className:"f-links"},r.a.createElement(i.b,{to:"/"},"Home")),r.a.createElement("div",{className:"f-links"},r.a.createElement(i.b,{to:"/events"},"Events")),r.a.createElement("div",{className:"f-links"},r.a.createElement(i.b,{to:"/speakers"},"Speakers")),r.a.createElement("div",{className:"f-links"},r.a.createElement(i.b,{to:"/sponsors"},"Sponsors")),r.a.createElement("div",{className:"f-links"},r.a.createElement(i.b,{to:"/team"},"Team"))),r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4 col6"},r.a.createElement("img",{alt:"E-Cell Logo",style:{height:"80px",width:"80px"},src:c.a}),r.a.createElement("p",{style:{color:"white",margin:"15px",fontSize:"17px",fontWeight:"600"}},"E-Cell, NIT Raipur is established to motivate and educate people about entrepreneurship and serve as a meeting ground for corporate and young budding entrepreneurs from distinguished institutions."),r.a.createElement("p",{style:{color:"white",marginTop:"5px"}},"\xa9 All Rights Reserved")),r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4"},r.a.createElement("h3",{style:{color:"white",fontWeight:"800"}},"E-SUMMIT'19"),r.a.createElement("p",{style:{color:"white",fontWeight:"600"}},"Follow us online on-"),r.a.createElement("p",{style:{fontSize:"40px"}},r.a.createElement("a",{href:"https://www.facebook.com/ecellnitrr/",target:"_blank"},r.a.createElement("i",{className:"fab fa-facebook-square"})),r.a.createElement("a",{href:"https://www.instagram.com/ecell.nitraipur/",target:"_blank"},r.a.createElement("i",{className:"fab fa-instagram"})),r.a.createElement("a",{href:"https://twitter.com/ecellnitrr?lang=en",target:"_blank"},r.a.createElement("i",{className:"fab fa-twitter-square"})),r.a.createElement("a",{href:"https://in.linkedin.com/company/entrepreneurship-cell-nit-raipur",target:"_blank"},r.a.createElement("i",{className:"fab fa-linkedin"}))),r.a.createElement("div",null,r.a.createElement("a",Object(l.a)({href:"#",style:{color:"white"}},"href","tel:8094966697"),"+91 80949 66697")),r.a.createElement("div",null,r.a.createElement("a",Object(l.a)({href:"#",style:{color:"white"}},"href","tel:8839579796"),"+91 88395 79796")),r.a.createElement("br",null),r.a.createElement(i.b,{style:{color:"white"},to:"/terms"},"Terms and Conditions"),r.a.createElement("br",null),r.a.createElement(i.b,{style:{color:"white"},to:"/policy"},"Private Policy"),r.a.createElement("p",{className:"arr",style:{color:"white",marginTop:"5px"}},"\xa9 All Rights Reserved")))))}},65:function(e,t,a){"use strict";a.r(t),a.d(t,"updateUser",function(){return l});var l=function(e){return function(t){t({type:"update_user",payload:e})}}},72:function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"a",function(){return n});var l={GST:"Guest",VLT:"Voluteer",EXE:"Executive",MNG:"Manager",HCO:"Head Co-ordinator",OCO:"Overall Co-ordinator",CAB:"Campus Ambassador"},n={PND:"pending",RJD:"rejected",HRD:"hired",URV:"under review"}},749:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return b});var l=a(11),n=a(12),r=a(14),i=a(13),s=a(15),c=a(0),o=a.n(c),m=a(51),d=a(24),u=a(167),p=a(63),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={startup_detail:[],jobs:[]},a}return Object(s.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.startup_id;Object(m.b)().get("/iportal/startup/".concat(t,"/")).then(function(t){console.log(t);var a=t.data,l=a.jobs;e.setState({startup_detail:a,jobs:l}),console.log(e.state.startup_detail),console.log(e.state.jobs)})}},{key:"render",value:function(){var e=this,t=this.state.startup_detail,a=this.state.jobs.map(function(t){return o.a.createElement("div",{className:"m-3 p-3",style:{border:"3px solid black"},key:t.id},o.a.createElement("div",null,t.name),o.a.createElement("div",null,t.job_type),o.a.createElement("br",null),o.a.createElement("div",null,"Duration: ",t.duration),o.a.createElement("div",null,"Stipend: ",t.stipend),o.a.createElement("br",null),o.a.createElement(d.b,{to:"/iportal/jobs/".concat(e.state.startup_detail.id,"/opening/").concat(t.id),className:"btn btn-primary"},"Know More"))});return o.a.createElement("div",null,o.a.createElement(u.a,null),function(e){return o.a.createElement("div",null,o.a.createElement("div",{class:"jumbotron mdb-color lighten-2 white-text",style:{margin:"0"}},o.a.createElement("img",{src:e.logo}),o.a.createElement("br",null),o.a.createElement("h2",{class:"card-title h2"},e.name),o.a.createElement("p",{class:"my-4 h6"},e.sector),o.a.createElement("div",{class:"d-flex"},o.a.createElement("div",{class:"pb-2"},o.a.createElement("p",{class:"card-text"},e.brief),o.a.createElement("p",{class:"card-text"},e.description))),o.a.createElement("hr",{class:"my-4 rgba-white-light"}),o.a.createElement("div",{class:"pt-2"},o.a.createElement("ul",{class:"nav nav-pills mb-3",id:"pills-tab",role:"tablist"},o.a.createElement("li",{class:"nav-item"},o.a.createElement("a",{class:"btn btn-outline-white ",id:"pills-home-tab","data-toggle":"pill",href:"#pills-home",role:"tab","aria-controls":"pills-home","aria-selected":"true"},"More Info")),o.a.createElement("li",{class:"nav-item"},o.a.createElement("a",{class:"btn btn-outline-white ",id:"pills-profile-tab","data-toggle":"pill",href:"#pills-profile",role:"tab","aria-controls":"pills-profile","aria-selected":"false"},"Jobs Offered"))),o.a.createElement("div",{class:"tab-content pt-2 pl-1",id:"pills-tabContent"},o.a.createElement("div",{class:"tab-pane fade",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab"},o.a.createElement("div",null,"Email : ",e.email),o.a.createElement("div",null,"Contact: ",e.contact),o.a.createElement("br",null),o.a.createElement("div",null,"Address : ",o.a.createElement("br",null),e.address1,o.a.createElement("br",null),e.address2),o.a.createElement("br",null),o.a.createElement("div",null,e.district),o.a.createElement("div",null,e.country)),o.a.createElement("div",{class:"tab-pane fade",id:"pills-profile",role:"tabpanel","aria-labelledby":"pills-profile-tab"},o.a.createElement("div",{className:"d-flex"},a))))))}(t),o.a.createElement(p.a,null))}}]),t}(c.Component)},80:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var l=a(57),n=a(58),r=a(60),i=a(59),s=a(61),c=a(0),o=a.n(c),m=(a(100),function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"modal fade",id:this.props.id,tabIndex:"-1",role:"dialog"},o.a.createElement("div",{className:"modal-dialog cascading-modal",role:"document"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-c-tabs"},this.props.children)))))}}]),t}(c.Component))},89:function(e,t,a){e.exports=a.p+"static/media/logo-white.832dd500.png"}}]);
//# sourceMappingURL=11.0a8cf08a.chunk.js.map