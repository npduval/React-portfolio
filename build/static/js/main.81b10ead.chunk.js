(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/istockphoto.07770787.jpg"},function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){var n={"./dog-adoption.png":14,"./password-generator.png":15,"./readme-generator.png":16,"./social-network.png":17,"./text-editor.png":18,"./weather-dashboard.png":19};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=13},function(e,t,a){e.exports=a.p+"static/media/dog-adoption.17703bd9.png"},function(e,t,a){e.exports=a.p+"static/media/password-generator.fc673cc7.png"},function(e,t,a){e.exports=a.p+"static/media/readme-generator.dfbe4289.png"},function(e,t,a){e.exports=a.p+"static/media/social-network.18744622.png"},function(e,t,a){e.exports=a.p+"static/media/text-editor.84a47dca.png"},function(e,t,a){e.exports=a.p+"static/media/weather-dashboard.ab761c31.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),c=a.n(l),o=(a(12),a(1)),i=a(6),m=a.n(i);var s=function(e){return r.a.createElement("header",{className:"flex-row space-between px-1"},r.a.createElement("h1",null,"Nick Duval"),r.a.createElement("img",{src:m.a,alt:"wooden background"}),e.children)};function u(e){return e.charAt(0).toUpperCase()+e.slice(1)}function p(e){return e.replace(/-/g," ").replace(/(^\w|\s\w)/g,(function(e){return e.toUpperCase()}))}var d=function(e){var t=e.pages,a=void 0===t?[]:t,l=e.setCurrentPage,c=e.currentPage;return Object(n.useEffect)((function(){document.title=u(c.name)}),[c]),r.a.createElement("nav",null,r.a.createElement("ul",{className:"flex-row"},a.map((function(e){return r.a.createElement("li",{className:"mx-5 ".concat(c.name===e.name&&"navActive"),key:e.name},r.a.createElement("span",{onClick:function(){return l(e)}},u(e.name)))}))))},E=function(e){return r.a.createElement("div",null,e.children)};var f=function(){return r.a.createElement("section",{className:"my-5"},r.a.createElement("div",{className:"my-2"},r.a.createElement("div",{className:"profile-img my-5"},r.a.createElement("i",{className:"fas fa-user-circle",style:{fontSize:"96px"}})),r.a.createElement("p",null,"Skilled Technical Support Engineer with over 5 years experince in the FinTech software space supporting Fortune 500 companies. Skilled in Technical Support, Enterprise Software, Finance, and Management."),r.a.createElement("p",null,"Motivated Full Stack Bootcamp graduate from the University of New Hampshire with 6 months experience in Software Development.")))};var g=function(e){var t=e.project,n=t.name,l=t.repo,c=t.link,o=t.description;return r.a.createElement("div",{className:"project",key:n},r.a.createElement("img",{src:a(13)("./".concat(n,".png")),alt:p(n),className:"project-bg"}),r.a.createElement("div",{className:"project-text"},r.a.createElement("h3",null,r.a.createElement("a",{href:c},p(n))," ",r.a.createElement("a",{href:l},r.a.createElement("i",{className:"fab fa-github"}))),r.a.createElement("p",null,o)))};var h=function(){var e=Object(n.useState)([{name:"dog-adoption",description:"Javascript, API",link:"https://cluck135.github.io/Dog-Adoption-Site/",repo:"https://github.com/cluck135/Dog-Adoption-Site"},{name:"text-editor",description:"Progressive Web Application",link:"https://text-editor1.herokuapp.com/",repo:"https://github.com/npduval/Text-Editor"},{name:"password-generator",description:"Javascript",link:"https://npduval.github.io/Password-Generator/",repo:"https://github.com/npduval/Password-Generator"},{name:"readme-generator",description:"Node.js",link:"https://drive.google.com/file/d/1xeRtpzl9Tcj8W-fHFUOcxcQM9l8tNEyA/view?usp=sharing",repo:"https://github.com"},{name:"weather-dashboard",description:"JavaScript/API",link:"https://npduval.github.io/Weather-Dashboard/",repo:"https://github.com/npduval/Weather-Dashboard"},{name:"social-network",description:"Express.js, MongoDB",link:"https://watch.screencastify.com/v/VRORTMu1IdhYHDaOCoTR",repo:"https://github.com/npduval/Social-Network-API"}]),t=Object(o.a)(e,1)[0];return r.a.createElement("div",null,r.a.createElement("div",{className:"flex-row"},t.map((function(e,t){return r.a.createElement(g,{project:e,key:"project"+t})}))))},v=a(2),b=a(3);var w=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),i=Object(o.a)(c,2),m=i[0],s=i[1],u=a.name,p=a.email,d=a.message,E=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);s(t?"":"Your email is invalid.")}else e.target.value.length?s(""):s("".concat(e.target.name," is required."));m||(l(Object(b.a)(Object(b.a)({},a),{},Object(v.a)({},e.target.name,e.target.value))),console.log("Handle Form",a))};return r.a.createElement("section",null,r.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),m||console.log("Submit Form",a)}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{type:"text",name:"name",defaultValue:u,onBlur:E})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{type:"email",name:"email",defaultValue:p,onBlur:E})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"message"},"Message:"),r.a.createElement("textarea",{name:"message",rows:"5",defaultValue:d,onBlur:E})),m&&r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},m)),r.a.createElement("button",{type:"submit"},"Submit")))};var k=function(){return r.a.createElement("section",{className:"my-5"},r.a.createElement("div",{className:"my-2"},r.a.createElement("p",null,"Download my ",r.a.createElement("a",{href:"https://drive.google.com/file/d/16KQzmtPk_yNHPFK_3pr58MchBjQUZzwN/view?usp=sharing",target:"_blank"},"resume")),r.a.createElement("h3",null,"Front-end Proficiencies"),r.a.createElement("ul",{className:"skills"},r.a.createElement("li",null,"HTML"),r.a.createElement("li",null,"CSS"),r.a.createElement("li",null,"JavaScript"),r.a.createElement("li",null,"jQuery"),r.a.createElement("li",null,"responsive design"),r.a.createElement("li",null,"React"),r.a.createElement("li",null,"Bootstrap")),r.a.createElement("h3",null,"Back-end Proficiencies"),r.a.createElement("ul",{className:"skills"},r.a.createElement("li",null,"APIs"),r.a.createElement("li",null,"Node"),r.a.createElement("li",null,"Express"),r.a.createElement("li",null,"MySQL, Sequelize"),r.a.createElement("li",null,"MongoDB, Mongoose"),r.a.createElement("li",null,"REST"),r.a.createElement("li",null,"GraphQL"))))};var x=function(e){var t=e.currentPage;return r.a.createElement("section",null,r.a.createElement("h2",null,u(t.name)),r.a.createElement(E,null,function(){switch(t.name){case"about me":return r.a.createElement(f,null);case"portfolio":return r.a.createElement(h,null);case"contact":return r.a.createElement(w,null);case"resume":return r.a.createElement(k,null);default:return r.a.createElement(f,null)}}()))};var N=function(){return r.a.createElement("footer",{className:"flex-row px-1"},[{name:"fab fa-github",link:"https://github.com/npduval"},{name:"fab fa-linkedin",link:"https://www.linkedin.com/in/nicholas-duval-mba-303688163/"},{name:"fa fa-envelope",link:"mailto:nicholaspduval74@gmail.com"}].map((function(e){return r.a.createElement("a",{href:e.link,key:e.name,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:e.name}))})))};var S=function(){var e=Object(n.useState)([{name:"about me"},{name:"portfolio"},{name:"contact"},{name:"resume"}]),t=Object(o.a)(e,1)[0],a=Object(n.useState)(t[0]),l=Object(o.a)(a,2),c=l[0],i=l[1];return r.a.createElement("div",null,r.a.createElement(s,null,r.a.createElement(d,{pages:t,setCurrentPage:i,currentPage:c})),r.a.createElement("main",null,r.a.createElement(x,{currentPage:c})),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.81b10ead.chunk.js.map