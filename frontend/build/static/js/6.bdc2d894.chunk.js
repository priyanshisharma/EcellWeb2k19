(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{102:function(e,t,a){},347:function(e,t,a){},51:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(77),l=a.n(n),r=a(35),i="https://ecell.nitrr.ac.in";i="",t.b=function(){var e=void 0,t=r.store.getState().auth;return t&&(e=t.loggedin?t.token:void 0),l.a.create({baseURL:i,headers:{Authorization:e,Access:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJhbmRyb2lkIiwib3JnYW5pemF0aW9uIjoiRUNlbGwifQ.H2aaDJuOxK44D2kwRCWwv9s5rzJGCNYKT3thtQqN-hQ"}})}},577:function(e,t,a){"use strict";a.r(t);var n=a(10),l=a(11),r=a(13),i=a(12),s=a(14),o=a(0),c=a.n(o),m=a(7),p=a(60),u=(a(347),a(22)),d=(a(187),a(51)),h=(a(69),function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={loading:!0,startup:{}},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(d.b)().get("/iportal/startup/".concat(this.props.auth.startup_id,"/")).then(function(t){console.log(t.data),e.setState({loading:!1,startup:t.data})})}},{key:"render",value:function(){var e=this;return this.state.loading?c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"text-center mt-5"}),this.state.loading?c.a.createElement("h1",null,"loading"):null):c.a.createElement("div",{className:"pb-2",style:{background:"lightgray",paddingTop:"",marginBottom:"-50px"}},c.a.createElement("div",{className:"container jumbotron hoverable"},c.a.createElement("div",null,c.a.createElement("div",{className:"d-flex my-5"},c.a.createElement("h1",{className:"text-center flex-grow-1 font-weight-bold"},"Idea Dashboard"),this.state.startup.can_hire_interns?null:c.a.createElement(o.Fragment,null,c.a.createElement("button",{onClick:function(){return e.props.history.push("/internship/startup/register")},className:"btn btn-success font-weight-bold"},"Register Startup"))),this.state.loading?c.a.createElement("h1",null,"loading"):null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"font-weight-bold"},"Idea in a Nutshell : "),c.a.createElement("span",null,this.state.startup.idea_in_a_nut_shell)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"font-weight-bold"},"Ideator Name : "),c.a.createElement("span",{className:"font-weight-bold"},this.state.startup.name)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"font-weight-bold"},"Ideator Designation : "),c.a.createElement("span",{className:"font-weight-bold"},this.state.startup.ideator_designation)),"Student"===this.state.startup.ideator_designation?c.a.createElement(o.Fragment,null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"font-weight-bold"},"Mentor Name : "),c.a.createElement("span",{className:"font-weight-bold"},this.state.startup.mentor_name)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"font-weight-bold"},"Mentor Designation : "),c.a.createElement("span",{className:"font-weight-bold"},this.state.startup.mentor_designation))):null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"font-weight-bold"},"Description : "),c.a.createElement("span",null,this.state.startup.describe_idea)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"font-weight-bold"},"Innovation in this : "),c.a.createElement("span",null,this.state.startup.innovation_in_this)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"font-weight-bold"},"End Product : "),c.a.createElement("span",null,this.state.startup.end_product)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"font-weight-bold"},"Idea Approved : "),c.a.createElement("span",null,this.state.startup.idea_approved?c.a.createElement("i",{className:"fa fa-check text-success"}):c.a.createElement("i",{className:"fa fa-times text-danger"}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"font-weight-bold"},"Beneficiaries : "),c.a.createElement("span",null,this.state.startup.beneficiaries)))))))}}]),t}(o.Component)),b=Object(u.b)(function(e){return e})(h),g=Object(o.lazy)(function(){return Promise.all([a.e(4),a.e(17)]).then(a.bind(null,568))}),f=Object(o.lazy)(function(){return Promise.all([a.e(2),a.e(3),a.e(24)]).then(a.bind(null,530))}),E=Object(o.lazy)(function(){return a.e(49).then(a.bind(null,569))}),v=Object(o.lazy)(function(){return Promise.all([a.e(2),a.e(3),a.e(23)]).then(a.bind(null,436))}),N=Object(o.lazy)(function(){return a.e(51).then(a.bind(null,570))}),w=Object(o.lazy)(function(){return Promise.all([a.e(2),a.e(15),a.e(43)]).then(a.bind(null,571))}),y=Object(o.lazy)(function(){return a.e(47).then(a.bind(null,572))}),k=Object(o.lazy)(function(){return a.e(46).then(a.bind(null,573))}),j=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.loggedin&&this.props.auth.startup_id||this.props.history.push("/internship")}},{key:"render",value:function(){return c.a.createElement("div",{style:{background:"lightgray",paddingTop:"100px"}},c.a.createElement(g,null),c.a.createElement(m.d,null,c.a.createElement(m.b,{path:"/internship/submit_idea/edit_idea/",component:f})," //edit idea",c.a.createElement(m.b,{path:"/internship/idea/",component:b})," //landing page for idea",c.a.createElement(m.b,{path:"/internship/startup/application_detail/:application_id/",component:k})," // view detail of application",c.a.createElement(m.b,{path:"/internship/startup/application/:job_id/",component:y})," // list of applications",c.a.createElement(m.b,{path:"/internship/startup/openings/new/",component:w})," // new opening",c.a.createElement(m.b,{path:"/internship/startup/openings/:job_id/",component:w})," // edit a opening",c.a.createElement(m.b,{path:"/internship/startup/openings/",component:N})," // list of openings",c.a.createElement(m.b,{path:"/internship/startup/edit",component:v})," //edit startup profile",c.a.createElement(m.b,{path:"/internship/startup/",component:E})," //landing page for startups"),c.a.createElement(p.a,null))}}]),t}(o.Component);t.default=Object(u.b)(function(e){return e})(j)},60:function(e,t,a){"use strict";var n=a(24),l=a(0),r=a.n(l),i=a(21),s=(a(102),a(84)),o=a.n(s);t.a=function(e){return r.a.createElement("div",{className:"footer",style:{background:"#0A0908",textAlign:"center",marginTop:e.noMarginTop?null:"50px",position:"relative",bottom:"0"}},r.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1500px",padding:"50px"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-lg-4 col5"},r.a.createElement("h3",{style:{color:"white",fontWeight:"800",padding:"8px",background:"#0A0908"}},"Quick Links"),r.a.createElement("div",{className:"f-links"},r.a.createElement(i.b,{to:"/"},"Home")),r.a.createElement("div",{className:"f-links"},r.a.createElement(i.b,{to:"/events"},"Events")),r.a.createElement("div",{className:"f-links"},r.a.createElement(i.b,{to:"/speakers"},"Speakers")),r.a.createElement("div",{className:"f-links"},r.a.createElement(i.b,{to:"/sponsors"},"Sponsors")),r.a.createElement("div",{className:"f-links"},r.a.createElement(i.b,{to:"/team"},"Team"))),r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4 col6"},r.a.createElement("img",{alt:"E-Cell Logo",style:{height:"80px",width:"80px"},src:o.a}),r.a.createElement("p",{style:{color:"white",margin:"15px",fontSize:"17px",fontWeight:"600"}},"E-Cell, NIT Raipur is established to motivate and educate people about entrepreneurship and serve as a meeting ground for corporate and young budding entrepreneurs from distinguished institutions."),r.a.createElement("p",{style:{color:"white",marginTop:"5px"}},"\xa9 All Rights Reserved")),r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4"},r.a.createElement("h3",{style:{color:"white",fontWeight:"800"}},"E-SUMMIT'19"),r.a.createElement("p",{style:{color:"white",fontWeight:"600"}},"Follow us online on-"),r.a.createElement("p",{style:{fontSize:"40px"}},r.a.createElement("a",{href:"https://www.facebook.com/ecellnitrr/",target:"_blank"},r.a.createElement("i",{className:"fab fa-facebook-square"})),r.a.createElement("a",{href:"https://www.instagram.com/ecell.nitraipur/",target:"_blank"},r.a.createElement("i",{className:"fab fa-instagram"})),r.a.createElement("a",{href:"https://twitter.com/ecellnitrr?lang=en",target:"_blank"},r.a.createElement("i",{className:"fab fa-twitter-square"})),r.a.createElement("a",{href:"https://in.linkedin.com/company/entrepreneurship-cell-nit-raipur",target:"_blank"},r.a.createElement("i",{className:"fab fa-linkedin"}))),r.a.createElement("div",null,r.a.createElement("a",Object(n.a)({href:"#",style:{color:"white"}},"href","tel:8094966697"),"+91 80949 66697")),r.a.createElement("div",null,r.a.createElement("a",Object(n.a)({href:"#",style:{color:"white"}},"href","tel:8839579796"),"+91 88395 79796")),r.a.createElement("br",null),r.a.createElement(i.b,{style:{color:"white"},to:"/terms"},"Terms and Conditions"),r.a.createElement("br",null),r.a.createElement(i.b,{style:{color:"white"},to:"/policy"},"Privacy Policy"),r.a.createElement("p",{className:"arr",style:{color:"white",marginTop:"5px"}},"\xa9 All Rights Reserved")))))}},69:function(e,t,a){},84:function(e,t,a){e.exports=a.p+"static/media/logo-white.832dd500.png"}}]);
//# sourceMappingURL=6.bdc2d894.chunk.js.map