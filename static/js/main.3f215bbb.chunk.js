(this.webpackJsonpplatzi_reactjs=this.webpackJsonpplatzi_reactjs||[]).push([[0],{34:function(e,t,a){},35:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),r=a.n(s),c=a(18),i=a.n(c),o=(a(33),a(34),a(9)),l=a(2),d=a(3),j=a(4),b=a(6),h=a(5),u=(a(35),a.p+"static/media/platziconf-logo.c1d00c3e.svg"),m=a.p+"static/media/astronauts.ea532e99.svg",p=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"Home",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"Home__col col-12 col-md-4",children:[Object(n.jsx)("img",{src:u,alt:"Platzi Conf Logo",className:"img-fluid mb-2"}),Object(n.jsx)("h1",{children:"Badge Management System"}),Object(n.jsx)(o.b,{className:"btn btn-primary",to:"/badges",children:"Start"})]}),Object(n.jsx)("div",{className:"Home__col d-none d-md-block col-md-8",children:Object(n.jsx)("img",{src:m,alt:"Astronauts",className:"img-fluid p-4"})})]})})})}}]),a}(s.Component),O=a(7),g=a.n(O),f=a(12),v=a(15),x=a(16),N=(a(42),a.p+"static/media/badge-header.2c3af956.svg"),w=(a(43),a(27)),y=a.n(w);var _=function(e){var t=e.email,a=y()(t);return Object(n.jsx)("img",{className:e.className,src:"https://www.gravatar.com/avatar/".concat(a,"?d=identicon"),alt:"avatar"})},C=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"Badge",children:[Object(n.jsx)("div",{className:"Badge__header",children:Object(n.jsx)("img",{src:N,alt:"logo de la conferencia"})}),Object(n.jsxs)("div",{className:"Badge__section-name",children:[Object(n.jsx)(_,{className:"Badge__avatar",email:this.props.email}),Object(n.jsxs)("h1",{children:[this.props.firstName," ",Object(n.jsx)("br",{})," ",this.props.lastName]})]}),Object(n.jsxs)("div",{className:"Badge__section-info",children:[Object(n.jsx)("h3",{children:this.props.jobTitle}),Object(n.jsxs)("div",{children:["@",this.props.twitter]})]}),Object(n.jsx)("div",{className:"Badge__footer",children:"#platziconf"})]})}}]),a}(r.a.Component),S=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).handleClick=function(e){console.log("Button was clicked")},e}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{onSubmit:this.props.onSubmit,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"First Name"}),Object(n.jsx)("input",{className:"form-control",type:"text",name:"firstName",onChange:this.props.onChange,value:this.props.formValues.firstName}),Object(n.jsx)("label",{children:"Last Name"}),Object(n.jsx)("input",{className:"form-control",type:"text",name:"lastName",onChange:this.props.onChange,value:this.props.formValues.lastName}),Object(n.jsx)("label",{children:"Email"}),Object(n.jsx)("input",{className:"form-control",type:"email",name:"email",onChange:this.props.onChange,value:this.props.formValues.email}),Object(n.jsx)("label",{children:"Job Title"}),Object(n.jsx)("input",{className:"form-control",type:"text",name:"jobTitle",onChange:this.props.onChange,value:this.props.formValues.jobTitle}),Object(n.jsx)("label",{children:"Twitter"}),Object(n.jsx)("input",{className:"form-control",type:"text",name:"twitter",onChange:this.props.onChange,value:this.props.formValues.twitter})]}),Object(n.jsx)("button",{onClick:this.handleClick,className:"btn btn-primary",children:"Save"}),this.props.error&&Object(n.jsx)("p",{className:"text-danger",children:this.props.error.message})]})})}}]),a}(r.a.Component),B=(a(46),a(47),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"lds-grid",children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})}}]),a}(s.Component));var k=function(){return Object(n.jsx)("div",{className:"PageLoading",children:Object(n.jsx)(B,{})})},T="http://localhost:3001",I=function(e){return new Promise((function(t){return setTimeout(t,e)}))},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*(t-e+1))+e},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;return I(M(e,t))};function E(e){return A.apply(this,arguments)}function A(){return(A=Object(f.a)(g.a.mark((function e(t){var a,n,s,r,c=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:{},e.next=3,D();case 3:return a.headers={"Content-Type":"application/json",Accept:"application/json"},n=T+t,e.next=7,fetch(n,a);case 7:return s=e.sent,e.next=10,s.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L={badges:{list:function(){return E("/badges")},create:function(e){return E("/badges",{method:"POST",body:JSON.stringify(e)})},read:function(e){return E("/badges/".concat(e))},update:function(e,t){return E("/badges/".concat(e),{method:"PUT",body:JSON.stringify(t)})},remove:function(e){return E("/badges/".concat(e),{method:"DELETE"})}}},P=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={loading:!1,error:null,form:{firstName:"",lastName:"",email:"",jobTitle:"",twitter:""}},e.handleChange=function(t){e.setState({form:Object(x.a)(Object(x.a)({},e.state.form),{},Object(v.a)({},t.target.name,t.target.value))})},e.handleSubmit=function(){var t=Object(f.a)(g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),e.setState({loading:!0,error:null}),t.prev=2,t.next=5,L.badges.create(e.state.form);case 5:e.setState({loading:!1}),e.props.history.push("/badges"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.setState({loading:!1,error:t.t0});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(j.a)(a,[{key:"render",value:function(){return this.state.loading?Object(n.jsx)(k,{}):Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"BadgeNew__hero",children:Object(n.jsx)("img",{className:"BadgeNew__hero-image img-fluid",src:u,alt:"logo"})}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-6",children:Object(n.jsx)(C,{firstName:this.state.form.firstName||"FIRST_NAME",lastName:this.state.form.lastName||"LAST_NAME",email:this.state.form.email||"EMAIL",avatarURL:"https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon",jobTitle:this.state.form.jobTitle||"JOB_TITLE",twitter:this.state.form.twitter||"TWITTER"})}),Object(n.jsxs)("div",{className:"col-6",children:[Object(n.jsx)("h1",{children:"New Attendant"}),Object(n.jsx)(S,{onChange:this.handleChange,onSubmit:this.handleSubmit,formValues:this.state.form,error:this.state.error})]})]})})]})}}]),a}(r.a.Component),J=(a(48),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={loading:!0,error:null,form:{firstName:"",lastName:"",email:"",jobTitle:"",twitter:""}},e.fetchData=function(){var t=Object(f.a)(g.a.mark((function t(a){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),t.prev=1,t.next=4,L.badges.read(e.props.match.params.badgeId);case 4:n=t.sent,e.setState({loading:!1,form:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.setState({loading:!1,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){e.setState({form:Object(x.a)(Object(x.a)({},e.state.form),{},Object(v.a)({},t.target.name,t.target.value))})},e.handleSubmit=function(){var t=Object(f.a)(g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),e.setState({loading:!0,error:null}),t.prev=2,t.next=5,L.badges.update(e.props.match.params.badgeId,e.state.form);case 5:e.setState({loading:!1}),e.props.history.push("/badges"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.setState({loading:!1,error:t.t0});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return this.state.loading?Object(n.jsx)(k,{}):Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"BadgeEdit__hero",children:Object(n.jsx)("img",{className:"BadgeEdit__hero-image img-fluid",src:u,alt:"logo"})}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-6",children:Object(n.jsx)(C,{firstName:this.state.form.firstName||"FIRST_NAME",lastName:this.state.form.lastName||"LAST_NAME",email:this.state.form.email||"EMAIL",avatarURL:"https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon",jobTitle:this.state.form.jobTitle||"JOB_TITLE",twitter:this.state.form.twitter||"TWITTER"})}),Object(n.jsxs)("div",{className:"col-6",children:[Object(n.jsx)("h1",{children:"Edit Attendant"}),Object(n.jsx)(S,{onChange:this.handleChange,onSubmit:this.handleSubmit,formValues:this.state.form,error:this.state.error})]})]})})]})}}]),a}(r.a.Component));a(49);var V=function(e){return Object(n.jsxs)("div",{className:"PageError",children:["\u274c ",e.error.message," \ud83d\ude31"]})};a(50),a(51);var z=function(e){return e.isOpen?i.a.createPortal(Object(n.jsx)("div",{className:"Modal",children:Object(n.jsxs)("div",{className:"Modal__container",children:[Object(n.jsx)("button",{onClick:e.onClose,className:"Modal__close-button",children:"X"}),e.children]})}),document.getElementById("modal")):null};var F=function(e){return Object(n.jsx)(z,{isOpen:e.isOpen,onClose:e.onClose,children:Object(n.jsxs)("div",{className:"DeleteBadgeModal",children:[Object(n.jsx)("h1",{children:"Are you sure?"}),Object(n.jsx)("p",{children:"You are about to delete this badge"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:e.onDeleteBadge,className:"btn btn-danger mr-4",children:"Delete"}),Object(n.jsx)("button",{onClick:e.onClose,className:"btn btn-primary",children:"Cancel"})]})]})})};var R=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"BadgeDetails__hero",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-6",children:Object(n.jsx)("img",{src:u,alt:"logo de la conf"})}),Object(n.jsx)("div",{className:"col-6 BadgeDetails__hero-attendant-name",children:Object(n.jsxs)("h1",{children:[e.badge.firstName," ",e.badge.lastName," "]})})]})})}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-6",children:Object(n.jsx)(C,{firstName:e.badge.firstName,lastName:e.badge.lastName,email:e.badge.email,twitter:e.badge.twitter,jobTitle:e.badge.jobTitle})}),Object(n.jsxs)("div",{className:"col-6",children:[Object(n.jsx)("h2",{children:"Actions"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)(o.b,{className:"btn btn-primary mb-4",to:"badges/".concat(e.badge.id,"/edit"),children:"Edit"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:e.onOpenModal,className:"btn btn-danger",children:"Delete"}),Object(n.jsx)(F,{isOpen:e.modalIsOpen,onClose:e.onCloseModal,onDeleteBadge:e.onDeleteBadge})]})]})]})]})})]})},U=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={loading:!0,error:null,data:void 0,modalIsOpen:!1},e.fetchData=function(){var t=Object(f.a)(g.a.mark((function t(a){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),t.prev=1,t.next=4,L.badges.read(e.props.match.params.badgeId);case 4:n=t.sent,e.setState({loading:!1,data:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.setState({loading:!1,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handleOpenModal=function(t){e.setState({modalIsOpen:!0})},e.handleCloseModal=function(t){e.setState({modalIsOpen:!1})},e.handleDeleteBadge=function(){var t=Object(f.a)(g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),t.prev=1,t.next=4,L.badges.remove(e.props.match.params.badgeId);case 4:e.props.history.push("/badges"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e.setState({loading:!1,error:t.t0});case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return this.state.loading?Object(n.jsx)(k,{}):this.state.error?Object(n.jsx)(V,{error:this.state.error}):Object(n.jsx)(R,{badge:this.state.data,onCloseModal:this.handleCloseModal,onOpenModal:this.handleOpenModal,modalIsOpen:this.state.modalIsOpen,onDeleteBadge:this.handleDeleteBadge})}}]),a}(r.a.Component),H=(a(52),a(23)),W=(a(53),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"BadgesListItem",children:[Object(n.jsx)(_,{className:"BadgesListItem__avatar",email:this.props.badge.email}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("strong",{children:[this.props.badge.firstName," ",this.props.badge.lastName]}),Object(n.jsx)("br",{}),"@",this.props.badge.twitter,Object(n.jsx)("br",{}),this.props.badge.jobTitle]})]})}}]),a}(r.a.Component));var X=function(e){var t=e.badges,a=r.a.useState(""),s=Object(H.a)(a,2),c=s[0],i=s[1],l=r.a.useState(t),d=Object(H.a)(l,2),j=d[0],b=d[1];return r.a.useMemo((function(){var e=t.filter((function(e){return"".concat(e.firstName," ").concat(e.lastName).toLowerCase().includes(c.toLowerCase())}));b(e)}),[t,c]),0===j.length?Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Filter Badges"}),Object(n.jsx)("input",{className:"form-control",type:"text",value:c,onChange:function(e){console.log(e.target.value),i(e.target.value)}})]}),Object(n.jsx)("h3",{children:"No badges found"}),Object(n.jsx)(o.b,{to:"/badges/new",className:"btn btn-primary",children:"Create new Badge"})]}):Object(n.jsxs)("div",{className:"BadgesList",children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Filter Badges"}),Object(n.jsx)("input",{className:"form-control",type:"text",value:c,onChange:function(e){console.log(e.target.value),i(e.target.value)}})]}),Object(n.jsx)("ul",{className:"list-unstyled",children:j.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{className:"text-reset text-decoration-none",to:"/badges/".concat(e.id),children:Object(n.jsx)(W,{badge:e})})},e.id)}))})]})},Y=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={loading:!0,error:null,data:void 0},e.fetchData=Object(f.a)(g.a.mark((function t(){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),t.prev=1,t.next=4,L.badges.list();case 4:a=t.sent,e.setState({loading:!1,data:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.setState({loading:!1,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.fetchData(),this.intervalId=setInterval(this.fetchData,5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){return this.state.loading&&!this.state.data?Object(n.jsx)(k,{}):this.state.error?Object(n.jsx)(V,{error:this.state.error}):Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"Badges",children:Object(n.jsx)("div",{className:"Badges__hero",children:Object(n.jsx)("div",{className:"Badges__container",children:Object(n.jsx)("img",{className:"Badges_conf-logo",src:N,alt:"conf-logo"})})})}),Object(n.jsxs)("div",{className:"Badges__container",children:[Object(n.jsx)("div",{className:"Badges__buttons",children:Object(n.jsx)(o.b,{className:"btn btn-primary",to:"/badges/new",children:"New Badge"})}),Object(n.jsx)("div",{className:"Badges__list",children:Object(n.jsxs)("div",{className:"Badges_container",children:[Object(n.jsx)(X,{badges:this.state.data}),this.state.loading&&"Loading..."]})})]})]})}}]),a}(r.a.Component);var q=function(){return Object(n.jsx)("h1",{children:"404: Not Found"})},G=(a(54),a.p+"static/media/logo.235d00e1.svg"),K=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"Navbar",children:Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsxs)(o.b,{className:"Navbar__brand",to:"/",children:[Object(n.jsx)("img",{className:"Navbar__brand-logo",src:G,alt:"logo"}),Object(n.jsx)("span",{className:"font-weight-light",children:"Platzi"}),Object(n.jsx)("span",{className:"font-weight-bold",children:"Conf"})]})})})}}]),a}(r.a.Component);var Q=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(K,{}),e.children]})};var Z=function(){return Object(n.jsx)(o.a,{children:Object(n.jsx)(Q,{children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",component:p}),Object(n.jsx)(l.a,{exact:!0,path:"/badges",component:Y}),Object(n.jsx)(l.a,{exact:!0,path:"/badges/new",component:P}),Object(n.jsx)(l.a,{exact:!0,path:"/badges/:badgeId/",component:U}),Object(n.jsx)(l.a,{exact:!0,path:"/badges/:badgeId/edit",component:J}),Object(n.jsx)(l.a,{component:q})]})})})};i.a.render(Object(n.jsx)(Z,{}),document.getElementById("app"))}},[[55,1,2]]]);
//# sourceMappingURL=main.3f215bbb.chunk.js.map