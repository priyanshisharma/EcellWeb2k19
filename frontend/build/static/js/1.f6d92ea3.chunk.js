(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{52:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var r=a(80),n=a.n(r),l=a(36),s="http://localhost:8000";s="",t.b=function(){var e=null,t=l.store.getState().auth;return t&&(e=t.token),n.a.create({baseURL:s,headers:{Authorization:e,Access:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJhbmRyb2lkIiwib3JnYW5pemF0aW9uIjoiRUNlbGwifQ.H2aaDJuOxK44D2kwRCWwv9s5rzJGCNYKT3thtQqN-hQ"}})}},60:function(e,t,a){e.exports=a.p+"static/media/logo-white.832dd500.png"},61:function(e,t,a){"use strict";var r=a(11),n=a(12),l=a(14),s=a(13),o=a(15),c=a(0),i=a.n(c),m=a(24),u=(a(94),a(60)),d=a.n(u),f=a(55),p=a(56),b=a(58),h=a(57),g=a(59),v=(a(78),function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"modal fade",id:this.props.id,tabIndex:"-1",role:"dialog"},i.a.createElement("div",{className:"modal-dialog cascading-modal",role:"document"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-c-tabs"},this.props.children)))))}}]),t}(c.Component)),E=a(65),N=a(52),y=a(64),w=a(27),_=a(63),O={forgetpas:{fontWeight:"bold",color:"skyblue",cursor:"pointer"}},k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={err:!1,success:!1,loader:!1},a._forget_pass=function(e){e.preventDefault(),a.close_btn.click(),document.querySelector("#forgetPasModal_toggle").click()},a._login=function(e){e.preventDefault(),a.setState({success:!1,err:!1,loader:!0}),Object(N.b)().post("/users/login/",{email:a.email.value,password:a.password.value}).then(function(e){var t=e.data;console.log(t),a.props.updateUser(Object(E.a)({},t,{loggedin:!0})),a.close_btn.click(),t.verified||document.querySelector("#otpModal_toggle").click(),a.setState({loader:!1})}).catch(function(e){console.error(e.request.response),a.setState({success:!1,err:!0,loader:!1}),setTimeout(function(){a.setState({err:!1,success:!1,loader:!1})},5e3)})},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this,t=i.a.createElement("div",{className:"my-3 text-danger font-weight-bold text-center"},"Please provide valid credentials!"),a=i.a.createElement("div",{className:"my-3 text-success font-weight-bold text-center"},"Your have successfully loggedin");return i.a.createElement("div",{className:"tab-pane fade in show active",id:"panel7",role:"tabpanel"},this.state.err?t:null,this.state.success?a:null,i.a.createElement("div",{className:"modal-body mb-1"},i.a.createElement("div",{className:"md-form form-sm mb-5"},i.a.createElement("i",{className:"fas fa-envelope prefix"}),i.a.createElement("input",{type:"email",ref:function(t){return e.email=t},className:"form-control form-control-sm validate",placeholder:"Your email"}),i.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"mlr_10"})),i.a.createElement("div",{className:"md-form form-sm mb-4"},i.a.createElement("i",{className:"fas fa-lock prefix"}),i.a.createElement("input",{type:"password",ref:function(t){return e.password=t},className:"form-control form-control-sm validate",placeholder:"Your password"}),i.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"mlr_11"})),i.a.createElement("div",{className:"mt-2 text-center"},i.a.createElement("span",{onClick:this._forget_pass,style:O.forgetpas,id:"forgetpas"}," Forgot Password?")),i.a.createElement("div",{className:"text-center mt-2"},i.a.createElement("button",{onClick:this._login,id:"loginbtn",className:"btn text-white font-weight-bold btn-info login-button"},this.state.loader?i.a.createElement(y.a,null):"Log in"," ",i.a.createElement("i",{className:"fas fa-sign-in ml-1"})),i.a.createElement("button",{ref:function(t){return e.close_btn=t},type:"button",className:"btn btn-outline-info font-weight-bold waves-effect ml-auto","data-dismiss":"modal"},"Close"))))}}]),t}(c.Component),x=Object(w.b)(function(e){return e},_)(k),j=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={err:!1,success:!1,loader:!1},a._singup=function(e){e.preventDefault(),a.password.value.length<8?a.setState({success:!1,err:!0,errmsg:"password should have minimum 8 characters"}):(a.setState({success:!1,err:!1,errmsg:"",loader:!0}),Object(N.b)().post("/users/register/",{first_name:a.first_name.value,last_name:a.last_name.value,email:a.email.value,contact:a.contact.value,password:a.password.value}).then(function(e){var t=e.data;console.log(t),a.first_name.value="",a.last_name.value="",a.email.value="",a.contact.value="",a.password.value="",a.setState({err:!1,loader:!1}),a.props.updateUser(Object(E.a)({},t,{loggedin:!0})),a.close_btn.click(),document.querySelector("#otpModal_toggle").click(),setTimeout(function(){a.setState({err:!1,success:!1,loader:!1,errmsg:""})},5e3)}).catch(function(t){var r="";console.error(t);try{var n=t.response.data;r=JSON.stringify(n.detail)}catch(e){r=t}a.setState({success:!1,err:!0,errmsg:r,loader:!1}),setTimeout(function(){a.setState({err:!1,success:!1,loader:!1,errmsg:""})},5e3)}))},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this,t=i.a.createElement("div",{className:"my-3 text-danger font-weight-bold text-center"},this.state.errmsg),a=i.a.createElement("div",{className:"my-3 text-success font-weight-bold text-center"},"Your have successfully registered! Please proceed to login");return i.a.createElement("div",{className:"tab-pane fade",id:"panel8",role:"tabpanel"},i.a.createElement("div",{className:"modal-body"},this.state.err?t:null,this.state.success?a:null,i.a.createElement("div",{className:"md-form form-sm mb-5"},i.a.createElement("i",{className:"fas fa-user prefix"}),i.a.createElement("input",{ref:function(t){return e.first_name=t},type:"text",className:"form-control form-control-sm validate",placeholder:"First Name"}),i.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"mlr_12"})),i.a.createElement("div",{className:"md-form form-sm mb-5"},i.a.createElement("i",{className:"fas fa-user prefix"}),i.a.createElement("input",{ref:function(t){return e.last_name=t},type:"text",className:"form-control form-control-sm validate",placeholder:"Last Name"}),i.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"mlr_12"})),i.a.createElement("div",{className:"md-form form-sm mb-5"},i.a.createElement("i",{className:"fas fa-phone prefix"}),i.a.createElement("input",{type:"text",ref:function(t){return e.contact=t},className:"form-control form-control-sm validate",placeholder:"Contact"}),i.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"mlr_12"})),i.a.createElement("div",{className:"md-form form-sm mb-5"},i.a.createElement("i",{className:"fas fa-envelope prefix"}),i.a.createElement("input",{ref:function(t){return e.email=t},type:"email",className:"form-control form-control-sm validate",placeholder:"Email"}),i.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"mlr_12"})),i.a.createElement("div",{className:"md-form form-sm mb-5"},i.a.createElement("i",{className:"fas fa-lock prefix"}),i.a.createElement("input",{ref:function(t){return e.password=t},type:"password",id:"mlr_13",className:"form-control form-control-sm validate",placeholder:"Password (min 8 chars)"}),i.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"mlr_13"})),i.a.createElement("div",{className:"text-center form-sm mt-2"},i.a.createElement("button",{disabled:this.state.success,id:"signupBtn",onClick:this._singup,className:"btn font-weight-bold text-white btn-info"},this.state.loader?i.a.createElement(y.a,null):"Sign up"," ",i.a.createElement("i",{className:"fas fa-sign-in ml-1"})),i.a.createElement("button",{ref:function(t){return e.close_btn=t},type:"button",className:"btn font-weight-bold btn-outline-info waves-effect ml-auto","data-dismiss":"modal"},"Close"))))}}]),t}(c.Component),C=Object(w.b)(function(e){return e},_)(j),S=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(v,{id:"loginRegModal"},i.a.createElement("ul",{className:"nav nav-tabs md-tabs tabs-2 light-blue darken-3",role:"tablist"},i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link active lgtabs","data-toggle":"tab",href:"#panel7",role:"tab"},i.a.createElement("i",{className:"fas fa-user mr-1"}),"Login")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link lgtabs","data-toggle":"tab",href:"#panel8",role:"tab"},i.a.createElement("i",{className:"fas fa-user-plus mr-1"}),"Signup"))),i.a.createElement("div",{className:"tab-content"},i.a.createElement(x,null),i.a.createElement(C,null))))}}]),t}(c.Component),P={resend_otp:{fontWeight:"bold",color:"skyblue",cursor:"pointer"}},T=function(e){function t(){var e,a;Object(f.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(b.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={err:!1,success:!1,resend:!1,loader:!1},a._verify_otp=function(e){e.preventDefault();a.props.auth;a.setState({success:!1,err:!1,loader:!0}),Object(N.b)().post("/users/verify_otp/",{otp:a.otp.value}).then(function(e){var t=e.data;console.log(t),a.setState({loader:!1}),a.props.updateUser({verified:!0}),a.close_btn.click()}).catch(function(e){a.setState({success:!1,err:!0,loader:!1}),console.error(e)})},a._resend_otp=function(){Object(N.b)().get("/users/resend_otp/").then(function(e){console.log(e.data),a.setState({resend:!0})}).catch(function(e){console.error(e.request.response)})},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=i.a.createElement("div",{className:"mt-3 text-danger font-weight-bold text-center"},"The entered OTP is not valid!"),a=i.a.createElement("div",{className:"mt-3 text-success font-weight-bold text-center"},"Logged in as "),r=i.a.createElement("div",{className:"mt-2 text-center"},"Didn't receive OTP? ",i.a.createElement("span",{onClick:this._resend_otp,style:P.resend_otp,id:"resend_otp"},"resend"));return i.a.createElement(v,{id:"otpModal"},i.a.createElement("div",{className:"text-center mt-3"},"OTP may take upto 10mins to be delivered."),this.state.err?t:null,this.state.success?a:null,i.a.createElement("div",{className:"modal-body mb-1"},i.a.createElement("div",{className:"md-form form-sm mb-4"},i.a.createElement("i",{className:"fas fa-envelope prefix"}),i.a.createElement("input",{type:"text",ref:function(t){return e.otp=t},className:"form-control form-control-sm validate",placeholder:"Please enter OTP received"}),i.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"mlr_10"})),this.state.resend?null:r,i.a.createElement("div",{className:"text-center mt-2"},i.a.createElement("button",{onClick:this._verify_otp,id:"verifyBtn",className:"btn font-weight-bold text-white btn-info login-button"},this.state.loader?i.a.createElement(y.a,null):"Verify OTP"),i.a.createElement("button",{ref:function(t){return e.close_btn=t},type:"button",className:"btn font-weight-bold btn-outline-info waves-effect ml-auto","data-dismiss":"modal"},"Close"))))}}]),t}(c.Component),M=Object(w.b)(function(e){return e},_)(T),F=a(9),A=a(6),I=a(66),L=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={},a._request_approval=function(e){e.preventDefault(),Object(N.b)().get("/users/request_ca_approval/").then(function(e){alert("You have successfully applied for CA! You can confirm it by clicking on your name on top right corner"),a.props.updateUser({applied:!0})}).catch(function(e){console.error(e)})},a._verify_otp=function(e){a.close_btn.click(),document.querySelector("#otpModal_toggle").click()},a._logout=function(e){a.props.updateUser({loggedin:!1}),a.close_btn.click()},a._go_to_portal=function(e){a.close_btn.click(),a.props.history.push("/caportal")},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(N.b)().get("/users/get_user_details/").then(function(t){var a=t.data;e.props.updateUser(a),console.log(a.user_type)})}},{key:"render",value:function(){var e=this,t=i.a.createElement("div",null,i.a.createElement("hr",null),i.a.createElement("button",{onClick:this._request_approval,className:"btn text-white btn-success login-button"},"Apply for CA"),i.a.createElement("hr",null)),a=i.a.createElement("div",null,i.a.createElement("hr",null),i.a.createElement("button",{disabled:!0,className:"btn btn-warning login-button"},"Applied for CA"),i.a.createElement("hr",null)),r=this.props.auth.verified?null:i.a.createElement("span",{onClick:this._verify_otp,id:"phnoverified_btn"},"click to verify phone no"),n=this.props.auth.applied?a:t;return"GST"!==this.props.auth.user_type&&(n=i.a.createElement("div",null,i.a.createElement("hr",null),i.a.createElement("button",{onClick:this._go_to_portal,className:"btn btn-primary login-button"},"Go to CA Portal"),i.a.createElement("hr",null))),i.a.createElement(v,{id:"logoutModal"},i.a.createElement("div",{className:"modal-body text-center mb-1"},i.a.createElement("div",{className:"details"},i.a.createElement("div",null,i.a.createElement("span",{className:"font-weight-bold"},"User: "),this.props.auth.first_name," ",this.props.auth.last_name),i.a.createElement("div",null,i.a.createElement("span",{className:"font-weight-bold"},"Email: "),this.props.auth.email),i.a.createElement("div",null,i.a.createElement("span",{className:"font-weight-bold"},"Member Type: "),I.a[this.props.auth.user_type]),i.a.createElement("div",null,r)),n,i.a.createElement("div",{className:"my-3 text-center"},"Are your sure want to logout?"),i.a.createElement("div",{className:"text-center mt-2"},i.a.createElement("button",{onClick:this._logout,className:"btn font-weight-bold text-white btn-info login-button"},"Logout"),i.a.createElement("button",{ref:function(t){return e.close_btn=t},type:"button",className:"btn font-weight-bold btn-outline-info waves-effect ml-auto","data-dismiss":"modal"},"Close"))))}}]),t}(c.Component),B=Object(A.d)(Object(w.b)(function(e){return e},_),F.g)(L),U=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={err:!1,success:!1,loader:!1},a._forgetpass=function(e){e.preventDefault(),a.setState({err:!1,success:!1,loader:!0}),Object(N.b)().post("users/forgot_password/",{email:a.email.value}).then(function(e){var t=e.data;console.log(t),console.log(a.email.value),a.setState({err:!1,success:!0,loader:!1}),a.email.value="",a.state.success&&(a.close_btn.click(),document.querySelector("#checkotp_toggle").click()),setTimeout(function(){a.setState({err:!1,success:!1,loader:!1})},5e3)}).catch(function(e){console.error(e.request.response),a.setState({success:!1,err:!0,loader:!1}),setTimeout(function(){a.setState({err:!1,success:!1,loader:!1})},5e3)})},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.getElementById("logbtn").addEventListener("click",function(){e.props.handleForgetMail(e.email.value)})}},{key:"render",value:function(){var e=this,t=i.a.createElement("div",{className:"my-3 text-danger font-weight-bold text-center"},"Account with this email id doesn't exists. Kindly signup or retry with correct email address."),a=i.a.createElement("div",{className:"my-3 text-success font-weight-bold text-center"});return i.a.createElement(v,{id:"forgetPasModal"},i.a.createElement("div",{className:"text-center mt-3"},"OTP will be sent to the registered mobile number of the email provided below."),this.state.err?t:null,this.state.success?a:null,i.a.createElement("div",{className:"modal-body mb-1"},i.a.createElement("div",{className:"md-form form-sm mb-5"},i.a.createElement("i",{className:"fas fa-envelope prefix"}),i.a.createElement("input",{type:"email",ref:function(t){return e.email=t},className:"form-control form-control-sm validate",placeholder:"Your email"}),i.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"mlr_10"})),i.a.createElement("div",{className:"text-center mt-2"},i.a.createElement("button",{onClick:this._forgetpass,id:"logbtn",className:"btn font-weight-bold text-white btn-info login-button"},this.state.loader?i.a.createElement(y.a,null):"Send OTP"),i.a.createElement("button",{ref:function(t){return e.close_btn=t},type:"button",className:"btn font-weight-bold btn-outline-info waves-effect ml-auto","data-dismiss":"modal"},"Close"))))}}]),t}(c.Component),q=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={err:!1,success:!1,loader:!1},a._changepass=function(e){e.preventDefault(),a.setState({err:!1,success:!1,loader:!0}),Object(N.b)().post("users/change_password/",{email:a.email.value,otp:a.otp.value,password:a.password.value}).then(function(e){var t=e.data;console.log(t),a.setState({err:!1,success:!0,loader:!1}),a.email.value="",a.otp.value="",a.password.value=""}).catch(function(e){console.error(e.request.response),a.setState({err:!0,success:!1,loader:!1})})},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this,t=i.a.createElement("div",{className:"my-3 text-danger font-weight-bold text-center"},"Invalid OTP"),a=i.a.createElement("div",{className:"my-3 text-success font-weight-bold text-center"},"Password successfully changed. Please Login");return i.a.createElement(v,{id:"changePasModal"},i.a.createElement("div",{className:"text-center mt-3 font-weight-bold"},"Please set your new passsword"),this.state.err?t:null,this.state.success?a:null,i.a.createElement("div",{className:"modal-body mb-1"},i.a.createElement("div",{className:"md-form form-sm mb-5"},i.a.createElement("input",{type:"hidden",value:this.props.emailToBeFilled,ref:function(t){return e.email=t},className:"form-control form-control-sm validate",placeholder:"Your email",disabled:!0}),i.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"mlr_10"})),i.a.createElement("div",{className:"md-form form-sm mb-4"},i.a.createElement("input",{type:"hidden",value:this.props.otpToBeFilled,ref:function(t){return e.otp=t},className:"form-control form-control-sm validate",placeholder:"Please enter OTP received"}),i.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"mlr_10"})),i.a.createElement("div",{className:"md-form form-sm mb-4"},i.a.createElement("i",{className:"fas fa-lock prefix"}),i.a.createElement("input",{type:"password",ref:function(t){return e.password=t},className:"form-control form-control-sm validate",placeholder:"Your new password"}),i.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"mlr_11"})),i.a.createElement("div",{className:"text-center mt-2"},i.a.createElement("button",{disabled:this.state.success,id:"changePassBtn",onClick:this._changepass,className:"btn text-white font-weight-bold btn-info login-button"},this.state.loader?i.a.createElement(y.a,null):"Change Password"),i.a.createElement("button",{ref:function(t){return e.close_btn=t},type:"button",className:"btn btn-outline-info font-weight-bold waves-effect ml-auto","data-dismiss":"modal"},"Close"))))}}]),t}(c.Component),D=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={err:!1,success:!1,loader:!1},a._check_otp=function(e){e.preventDefault(),a.setState({err:!1,success:!1,loader:!0}),Object(N.b)().post("users/check_otp/",{otp:a.otp.value,email:a.email.value}).then(function(e){var t=e.data;console.log(t),a.setState({err:!1,success:!0,loader:!1}),a.email.value="",a.otp.value="",a.state.success&&(a.close_btn.click(),document.querySelector("#changepass_toggle").click()),setTimeout(function(){a.setState({err:!1,success:!1,loader:!1})},5e3)}).catch(function(e){console.error(e.request.response),a.setState({success:!1,err:!0,loader:!1}),setTimeout(function(){a.setState({err:!1,success:!1,loader:!1})},5e3)})},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.getElementById("verifyOTPButton").addEventListener("click",function(){e.props.handleOTPChange(e.otp.value)})}},{key:"render",value:function(){var e=this,t=i.a.createElement("div",{className:"my-3 text-danger font-weight-bold text-center"},"Invalid OTP"),a=i.a.createElement("div",{className:"my-3 text-success font-weight-bold text-center"},"OTP verification Successful");return i.a.createElement(v,{id:"checkOtpModal"},i.a.createElement("div",{className:"text-center text-success font-weight-bold mt-3"},"An OTP has been sent to your registered mobile, please verify."),this.state.err?t:null,this.state.success?a:null,i.a.createElement("div",{className:"modal-body mb-1"},i.a.createElement("div",{className:"md-form form-sm mb-5"},i.a.createElement("input",{type:"hidden",value:this.props.emailToBeFilled,ref:function(t){return e.email=t},className:"form-control form-control-sm validate",placeholder:"Your email",disabled:!0}),i.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"mlr_10"})),i.a.createElement("div",{className:"md-form form-sm mb-4"},i.a.createElement("i",{className:"fas fa-envelope prefix"}),i.a.createElement("input",{type:"text",ref:function(t){return e.otp=t},className:"form-control form-control-sm validate",placeholder:"Please enter OTP received"}),i.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"mlr_10"})),i.a.createElement("div",{className:"text-center mt-2"},i.a.createElement("button",{onClick:this._check_otp,id:"verifyOTPButton",className:"btn font-weight-bold text-white btn-info login-button"},this.state.loader?i.a.createElement(y.a,null):"Verify OTP"),i.a.createElement("button",{ref:function(t){return e.close_btn=t},type:"button",className:"btn font-weight-bold btn-outline-info waves-effect ml-auto","data-dismiss":"modal"},"Close"))))}}]),t}(c.Component),R=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={active:!1,forgetmail:"",forgetOTP:""},a.setForgetMail=function(e){a.setState({forgetmail:e})},a.setForgetOTP=function(e){a.setState({forgetOTP:e})},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this,t=i.a.createElement("a",{href:"",className:"btn btn1","data-toggle":"modal","data-target":"#logoutModal"},this.props.auth.first_name.toUpperCase()," ",this.props.auth.last_name.toUpperCase()),a=i.a.createElement("a",{href:"",id:"login-signup-btn",className:"btn btn1","data-toggle":"modal","data-target":"#loginRegModal"},"LogIn/SignUp");return i.a.createElement("div",{className:"Navbar"},i.a.createElement("div",{className:"logoback"},i.a.createElement("img",{className:"logo ".concat(this.state.active?"active1":""),alt:"ECell logo",src:d.a})),i.a.createElement(S,null),i.a.createElement(M,null),i.a.createElement(U,{handleForgetMail:this.setForgetMail}),i.a.createElement(q,{otpToBeFilled:this.state.forgetOTP,emailToBeFilled:this.state.forgetmail}),i.a.createElement(D,{emailToBeFilled:this.state.forgetmail,handleOTPChange:this.setForgetOTP}),!!this.props.auth.loggedin&&i.a.createElement(B,null),i.a.createElement("a",{href:"",className:"btn btn1 d-none","data-toggle":"modal",id:"forgetPasModal_toggle","data-target":"#forgetPasModal"}),i.a.createElement("a",{href:"",className:"btn btn1 d-none","data-toggle":"modal",id:"otpModal_toggle","data-target":"#otpModal"}),i.a.createElement("a",{href:"",className:"btn btn1 d-none","data-toggle":"modal",id:"adforcaModal_toggle","data-target":"#adforcaModal"}),i.a.createElement("a",{href:"",className:"btn btn1 d-none","data-toggle":"modal",id:"changepass_toggle","data-target":"#changePasModal"}),i.a.createElement("a",{href:"",className:"btn btn1 d-none","data-toggle":"modal",id:"checkotp_toggle","data-target":"#checkOtpModal"}),i.a.createElement("h3",{className:"brand-header"},"ENTREPRENEURSHIP CELL"),this.props.name,i.a.createElement("h3",{className:"brand-header3"},"E-CELL"),i.a.createElement("h4",{className:"brand-header2"},"NIT RAIPUR"),i.a.createElement("div",{className:"login-button1"},this.props.auth.loggedin?t:a),i.a.createElement("div",{className:"toggle ".concat(this.state.active?"active1":""),onClick:function(){return e.setState({active:!e.state.active})}}),i.a.createElement("div",{className:"sidebar ".concat(this.state.active?"active1":"")},i.a.createElement("div",{className:"logoback2"},i.a.createElement("img",{className:"logo2",alt:"Ecell Logo",src:d.a})),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(m.b,{to:"/",className:"data-links","data-text":"Home"},"Home")),i.a.createElement("li",null,i.a.createElement(m.c,{to:"/events",className:"data-links","data-text":"events"},"Events")),i.a.createElement("li",null,i.a.createElement(m.c,{to:"/team",className:"data-links","data-text":"Team"},"Team")),i.a.createElement("li",null,i.a.createElement(m.c,{to:"/gallery",className:"data-links","data-text":"Gallery"},"Gallery")),i.a.createElement("li",null,i.a.createElement(m.c,{to:"/sponsors",className:"data-links","data-text":"Sponsors"},"Sponsors")),i.a.createElement("li",null,i.a.createElement(m.c,{to:"/speakers",className:"data-links","data-text":"Speakers"},"Speakers")),i.a.createElement("li",null,i.a.createElement(m.c,{to:"/startups",className:"data-links","data-text":"Startups"},"Startups")),i.a.createElement("li",null,i.a.createElement(m.c,{to:"/mentors",className:"data-links","data-text":"Mentors"},"Mentors")),i.a.createElement("li",null,i.a.createElement(m.c,{to:"/caportal_info",className:"data-links","data-text":"Caportal"},"CaPortal")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://medium.com/e-cell-nit-raipur",className:"data-links","data-text":"Blogs"},"Blogs")))))}}]),t}(c.Component);t.a=Object(w.b)(function(e){return e},_)(R)},63:function(e,t,a){"use strict";a.r(t),a.d(t,"updateUser",function(){return r});var r=function(e){return function(t){t({type:"update_user",payload:e})}}},64:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(){return n.a.createElement("div",{className:"spinner-border text-light",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading..."))}},66:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r={GST:"Guest",VLT:"Voluteer",EXE:"Executive",MNG:"Manager",HCO:"Head Co-ordinator",OCO:"Overall Co-ordinator",CAB:"Campus Ambassador"}},78:function(e,t,a){},94:function(e,t,a){}}]);
//# sourceMappingURL=1.f6d92ea3.chunk.js.map