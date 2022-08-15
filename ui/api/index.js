!function(e){var t={};function s(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s=13)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-bootstrap")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-router-bootstrap")},function(e,t){e.exports=require("url-search-params")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("webpack")},function(e,t){e.exports=require("dotenv")},function(e,t){e.exports=require("http-proxy-middleware")},function(e,t){e.exports=require("source-map-support")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t){e.exports=require("serialize-javascript")},function(e,t,s){e.exports=s(19)},function(e,t){e.exports=require("webpack-dev-middleware")},function(e,t){e.exports=require("webpack-hot-middleware")},function(e,t,s){(function(t){const n=s(17),a=s(18),o=s(6),i={mode:"development",entry:{app:["./browser/App.jsx"]},output:{filename:"[name].bundle.js",path:n.resolve(t,"public"),publicPath:"/"},module:{rules:[{test:/\.jsx?$/,exclude:/node_modules/,use:{loader:"babel-loader",options:{presets:[["@babel/preset-env",{targets:{ie:"11",edge:"15",safari:"10",firefox:"50",chrome:"49"}}],"@babel/preset-react"]}}}]},optimization:{splitChunks:{name:"vendor",chunks:"all"}},plugins:[new o.DefinePlugin({__isBrowser__:"true"})],devtool:"source-map"},r={mode:"development",entry:{server:["./server/uiserver.js"]},target:"node",externals:[a()],output:{filename:"index.js",path:n.resolve(t,"api"),publicPath:"/"},module:{rules:[{test:/\.jsx?$/,use:{loader:"babel-loader",options:{presets:[["@babel/preset-env",{targets:{node:"10"}}],"@babel/preset-react"]}}}]},plugins:[new o.DefinePlugin({__isBrowser__:"false"})],devtool:"source-map"};e.exports=[i,r]}).call(this,"/")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("webpack-node-externals")},function(e,t,s){"use strict";s.r(t);var n=s(7),a=s.n(n),o=s(5),i=s.n(o),r=s(8),l=s.n(r),c=s(9),u=s.n(c),h=s(0),d=s.n(h),m=s(10),p=s.n(m),E=s(2),f=s(1),g=s(3),b=s(4),v=s.n(b);class C extends d.a.Component{constructor({location:{search:e}}){super();const t=new v.a(e);this.state={status:t.get("status")||"",effortMin:t.get("effortMin")||"",effortMax:t.get("effortMax")||"",changed:!1},this.onChangeStatus=this.onChangeStatus.bind(this),this.onChangeEffortMin=this.onChangeEffortMin.bind(this),this.onChangeEffortMax=this.onChangeEffortMax.bind(this),this.applyFilter=this.applyFilter.bind(this),this.showOriginalFilter=this.showOriginalFilter.bind(this)}componentDidUpdate(e){const{location:{search:t}}=e,{location:{search:s}}=this.props;t!==s&&this.showOriginalFilter()}onChangeStatus(e){this.setState({status:e.target.value,changed:!0})}onChangeEffortMin(e){e.target.value.match(/^\d*$/)&&this.setState({effortMin:e.target.value,changed:!0})}onChangeEffortMax(e){e.target.value.match(/^\d*$/)&&this.setState({effortMax:e.target.value,changed:!0})}showOriginalFilter(){const{location:{search:e}}=this.props,t=new v.a(e);this.setState({status:t.get("status")||"",effortMin:t.get("effortMin")||"",effortMax:t.get("effortMax")||"",changed:!1})}applyFilter(){const{status:e,effortMin:t,effortMax:s}=this.state,{history:n}=this.props,a=new v.a;e&&a.set("status",e),t&&a.set("effortMin",t),s&&a.set("effortMax",s);const o=a.toString()?"?"+a.toString():"";n.push({pathname:"/issues",search:o})}render(){const{status:e,changed:t}=this.state,{effortMin:s,effortMax:n}=this.state;return d.a.createElement(f.Row,null,d.a.createElement(f.Col,{xs:6,sm:4,md:3,lg:2},d.a.createElement(f.FormGroup,null,d.a.createElement(f.ControlLabel,null,"Status:"),d.a.createElement(f.FormControl,{componentClass:"select",value:e,onChange:this.onChangeStatus},d.a.createElement("option",{value:""},"(All)"),d.a.createElement("option",{value:"New"},"New"),d.a.createElement("option",{value:"Assigned"},"Assigned"),d.a.createElement("option",{value:"Fixed"},"Fixed"),d.a.createElement("option",{value:"Closed"},"Closed")))),d.a.createElement(f.Col,{xs:6,sm:4,md:3,lg:2},d.a.createElement(f.FormGroup,null,d.a.createElement(f.ControlLabel,null,"Effort between:"),d.a.createElement(f.InputGroup,null,d.a.createElement(f.FormControl,{value:s,onChange:this.onChangeEffortMin}),d.a.createElement(f.InputGroup.Addon,null,"-"),d.a.createElement(f.FormControl,{value:n,onChange:this.onChangeEffortMax})))),d.a.createElement(f.Col,{xs:6,sm:4,md:3,lg:2},d.a.createElement(f.FormGroup,null,d.a.createElement(f.ControlLabel,null," "),d.a.createElement(f.ButtonToolbar,null,d.a.createElement(f.Button,{bsStyle:"primary",type:"button",onClick:this.applyFilter},"Apply"),d.a.createElement(f.Button,{type:"button",onClick:this.showOriginalFilter,disabled:!t},"Reset")))))}}var y=Object(E.withRouter)(C);const w=Object(E.withRouter)(({issue:e,location:{search:t},closeIssue:s,deleteIssue:n,index:a})=>{const o={pathname:"/issues/"+e.id,search:t},i=d.a.createElement(f.Tooltip,{id:"close-tooltip",placement:"top"},"Edit Issue"),r=d.a.createElement(f.Tooltip,{id:"close-tooltip",placement:"top"},"Close Issue"),l=d.a.createElement(f.Tooltip,{id:"delete-tooltip",placement:"top"},"Delete Issue");const c=d.a.createElement("tr",null,d.a.createElement("td",null,e.id),d.a.createElement("td",null,e.status),d.a.createElement("td",null,e.owner),d.a.createElement("td",null,e.created.toDateString()),d.a.createElement("td",null,e.effort),d.a.createElement("td",null,e.due?e.due.toDateString():""),d.a.createElement("td",null,e.title),d.a.createElement("td",null,d.a.createElement(g.LinkContainer,{to:"/edit/"+e.id},d.a.createElement(f.OverlayTrigger,{delayShow:1e3,overlay:i},d.a.createElement(f.Button,{bsSize:"xsmall"},d.a.createElement(f.Glyphicon,{glyph:"edit"}))))," ",d.a.createElement(f.OverlayTrigger,{delayShow:1e3,overlay:r},d.a.createElement(f.Button,{bsSize:"xsmall",onClick:function(e){e.preventDefault(),s(a)}},d.a.createElement(f.Glyphicon,{glyph:"remove"})))," ",d.a.createElement(f.OverlayTrigger,{delayShow:1e3,overlay:l},d.a.createElement(f.Button,{bsSize:"xsmall",onClick:function(e){e.preventDefault(),n(a)}},d.a.createElement(f.Glyphicon,{glyph:"trash"})))));return d.a.createElement(g.LinkContainer,{to:o},c)});function S({issues:e,closeIssue:t,deleteIssue:s}){const n=e.map((e,n)=>d.a.createElement(w,{key:e.id,issue:e,closeIssue:t,deleteIssue:s,index:n}));return d.a.createElement(f.Table,{bordered:!0,condensed:!0,hover:!0,responsive:!0},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"ID"),d.a.createElement("th",null,"Status"),d.a.createElement("th",null,"Owner"),d.a.createElement("th",null,"Created"),d.a.createElement("th",null,"Effort"),d.a.createElement("th",null,"Due Date"),d.a.createElement("th",null,"Title"),d.a.createElement("th",null,"Action"))),d.a.createElement("tbody",null,n))}function x({issue:e}){return e?d.a.createElement("div",null,d.a.createElement("h3",null,"Description"),d.a.createElement("pre",null,e.description)):null}var I=s(11),D=s.n(I);const T=new RegExp("^\\d\\d\\d\\d-\\d\\d-\\d\\d");function M(e,t){return T.test(t)?new Date(t):t}async function F(e,t={},s=null){const n=process.env.UI_SERVER_API_ENDPOINT;try{const a=await D()(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,variables:t})}),o=await a.text(),i=JSON.parse(o,M);if(i.errors){const e=i.errors[0];if("BAD_USER_INPUT"===e.extensions.code){const t=e.extensions.exception.errors.join("\n ");s&&s(`${e.message}:\n ${t}`)}else s&&s(`${e.extensions.code}: ${e.message}`)}return i.data}catch(e){return s&&s("Error in sending data to server: "+e.message),null}}class N extends d.a.Component{componentDidUpdate(){const{showing:e,onDismiss:t}=this.props;e&&(clearTimeout(this.dismissTimer),this.dismissTimer=setTimeout(t,5e3))}componentWillUnmount(){clearTimeout(this.dismissTimer)}render(){const{showing:e,bsStyle:t,onDismiss:s,children:n}=this.props;return d.a.createElement(f.Collapse,{in:e},d.a.createElement("div",{style:{position:"fixed",bottom:20,left:20}},d.a.createElement(f.Alert,{bsStyle:t,onDismiss:s},n)))}}var O={};class P extends d.a.Component{static async fetchData(e,t,s){const n=new v.a(t),a={hasSelection:!1,selectedId:0};n.get("status")&&(a.status=n.get("status"));const o=parseInt(n.get("effortMin"),10);Number.isNaN(o)||(a.effortMin=o);const i=parseInt(n.get("effortMax"),10);Number.isNaN(i)||(a.effortMax=i);const{params:{id:r}}=e,l=parseInt(r,10);Number.isNaN(l)||(a.hasSelection=!0,a.selectedId=l);return await F("query issueList(\n      $status: StatusType\n      $effortMin: Int\n      $effortMax: Int\n      $hasSelection: Boolean!\n      $selectedId: Int!\n    ) {\n      issueList(\n        status: $status\n        effortMin: $effortMin\n        effortMax: $effortMax\n      ) {\n        id title status owner\n        created effort due\n      }\n      issue(id: $selectedId) @include (if : $hasSelection) {\n        id description\n      }\n    }",a,s)}constructor(){super();const e=O.initialData?O.initialData.issueList:null,t=O.initialData?O.initialData.issue:null;delete O.initialData,this.state={issues:e,selectedIssue:t,toastVisible:!1,toastMessage:"",toastType:"info"},this.closeIssue=this.closeIssue.bind(this),this.deleteIssue=this.deleteIssue.bind(this),this.showSuccess=this.showSuccess.bind(this),this.showError=this.showError.bind(this),this.dismissToast=this.dismissToast.bind(this)}componentDidMount(){const{issues:e}=this.state;null==e&&this.loadData()}componentDidUpdate(e){const{location:{search:t},match:{params:{id:s}}}=e,{location:{search:n},match:{params:{id:a}}}=this.props;t===n&&s===a||this.loadData()}async loadData(){const{location:{search:e},match:t}=this.props,s=await P.fetchData(t,e,this.showError);s&&this.setState({issues:s.issueList,selectedIssue:s.issue})}async closeIssue(e){const{issues:t}=this.state,s=await F("mutation issueClose($id: Int!) {\n      issueUpdate(id: $id, changes: { status: Closed }) {\n        id title status owner\n        effort created due description\n      }\n    }",{id:t[e].id},this.showError);s?this.setState(t=>{const n=[...t.issues];return n[e]=s.issueUpdate,{issues:n}}):this.loadData()}async deleteIssue(e){const{issues:t}=this.state,{location:{pathname:s,search:n},history:a}=this.props,{id:o}=t[e],i=await F("mutation issueDelete($id: Int!) {\n      issueDelete(id: $id)\n    }",{id:o},this.showError);i&&i.issueDelete?(this.setState(t=>{const i=[...t.issues];return s==="/issues/"+o&&a.push({pathname:"/issues",search:n}),i.splice(e,1),{issues:i}}),this.showSuccess(`Deleted issue ${o} successfully.`)):this.loadData()}showSuccess(e){this.setState({toastVisible:!0,toastMessage:e,toastType:"success"})}showError(e){this.setState({toastVisible:!0,toastMessage:e,toastType:"danger"})}dismissToast(){this.setState({toastVisible:!1})}render(){const{issues:e}=this.state;if(null==e)return null;const{toastVisible:t,toastType:s,toastMessage:n}=this.state,{selectedIssue:a}=this.state;return d.a.createElement(d.a.Fragment,null,d.a.createElement(f.Panel,null,d.a.createElement(f.Panel.Heading,null,d.a.createElement(f.Panel.Title,{toggle:!0},"Filter")),d.a.createElement(f.Panel.Body,{collapsible:!0},d.a.createElement(y,null))),d.a.createElement(S,{issues:e,closeIssue:this.closeIssue,deleteIssue:this.deleteIssue}),d.a.createElement(x,{issue:a}),d.a.createElement(N,{showing:t,onDismiss:this.dismissToast,bsStyle:s},n))}}function _(){return(_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}class k extends d.a.Component{constructor(e){var t;super(e),this.state={value:(t=e.value,null!=t?t.toString():"")},this.onBlur=this.onBlur.bind(this),this.onChange=this.onChange.bind(this)}onChange(e){e.target.value.match(/^\d*$/)&&this.setState({value:e.target.value})}onBlur(e){const{onChange:t}=this.props,{value:s}=this.state;t(e,function(e){const t=parseInt(e,10);return Number.isNaN(t)?null:t}(s))}render(){const{value:e}=this.state;return d.a.createElement("input",_({type:"text"},this.props,{value:e,onBlur:this.onBlur,onChange:this.onChange}))}}function B(){return(B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}class V extends d.a.Component{constructor(e){var t;super(e),this.state={value:(t=e.value,null!=t?t.toISOString().substr(0,10):""),focused:!1,valid:!0},this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this),this.onChange=this.onChange.bind(this)}onFocus(){this.setState({focused:!0})}onBlur(e){const{value:t,valid:s}=this.state,{onValidityChange:n,onChange:a}=this.props,o=function(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}(t),i=""===t||null!=o;i!==s&&n&&n(e,i),this.setState({focused:!1,valid:i}),i&&a(e,o)}onChange(e){e.target.value.match(/^[\d-]*$/)&&this.setState({value:e.target.value})}render(){const{valid:e,focused:t,value:s}=this.state,{value:n,onValidityChange:a,...o}=this.props,i=t||!e?s:null!=(r=n)?r.toDateString():"";var r;return d.a.createElement("input",B({},o,{value:i,placeholder:t?"yyyy-mm-dd":null,onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.onChange}))}}class j extends d.a.Component{constructor(e){var t;super(e),this.state={value:(t=e.value,null!=t?t:"")},this.onBlur=this.onBlur.bind(this),this.onChange=this.onChange.bind(this)}onChange(e){this.setState({value:e.target.value})}onBlur(e){const{onChange:t}=this.props,{value:s}=this.state;var n;t(e,0===(n=s).trim().length?null:n)}render(){const{value:e}=this.state,{tag:t="input",...s}=this.props;return d.a.createElement(t,{...s,value:e,onBlur:this.onBlur,onChange:this.onChange})}}class A extends d.a.Component{static async fetchData(e,t,s){const{params:{id:n}}=e;return await F("query issue($id: Int!) {\n      issue(id: $id) {\n        id title status owner\n        effort created due description\n      }\n    }",{id:n},s)}constructor(){super();const e=O.initialData?O.initialData.issue:null;delete O.initialData,this.state={issue:e,invalidFields:{},showingValidation:!1,toastVisible:!1,toastMessage:"",toastType:"success"},this.onChange=this.onChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this),this.onValidityChange=this.onValidityChange.bind(this),this.dismissValidation=this.dismissValidation.bind(this),this.showValidation=this.showValidation.bind(this),this.showSuccess=this.showSuccess.bind(this),this.showError=this.showError.bind(this),this.dismissToast=this.dismissToast.bind(this)}componentDidMount(){const{issue:e}=this.state;null==e&&this.loadData()}componentDidUpdate(e){const{match:{params:{id:t}}}=e,{match:{params:{id:s}}}=this.props;s!==t&&this.loadData()}onChange(e,t){const{name:s,value:n}=e.target,a=void 0===t?n:t;this.setState(e=>({issue:{...e.issue,[s]:a}}))}onValidityChange(e,t){const{name:s}=e.target;this.setState(e=>{const n={...e.invalidFields,[s]:!t};return t&&delete n[s],{invalidFields:n}})}async handleSubmit(e){e.preventDefault(),this.showValidation();const{issue:t,invalidFields:s}=this.state;if(0!==Object.keys(s).length)return;const{id:n,created:a,...o}=t,i=await F("mutation issueUpdate(\n      $id: Int!\n      $changes: IssueUpdateInputs!\n    ) {\n      issueUpdate(\n        id: $id\n        changes: $changes\n      ) {\n        id title status owner\n        effort created due description\n      }\n    }",{changes:o,id:n},this.showError);i&&(this.setState({issue:i.issueUpdate}),this.showSuccess("Updated issue successfully"))}async loadData(){const{match:e}=this.props,t=await A.fetchData(e,null,this.showError);this.setState({issue:t?t.issue:{},invalidFields:{}})}showValidation(){this.setState({showingValidation:!0})}dismissValidation(){this.setState({showingValidation:!1})}showSuccess(e){this.setState({toastVisible:!0,toastMessage:e,toastType:"success"})}showError(e){this.setState({toastVisible:!0,toastMessage:e,toastType:"danger"})}dismissToast(){this.setState({toastVisible:!1})}render(){const{issue:e}=this.state;if(null==e)return null;const{issue:{id:t}}=this.state,{match:{params:{id:s}}}=this.props;if(null==t)return null!=s?d.a.createElement("h3",null,`Issue with ID ${s} not found.`):null;const{invalidFields:n,showingValidation:a}=this.state;let o;0!==Object.keys(n).length&&a&&(o=d.a.createElement(f.Alert,{bsStyle:"danger",onDismiss:this.dismissValidation},"Please correct invalid fields before submitting."));const{issue:{title:i,status:r}}=this.state,{issue:{owner:l,effort:c,description:u}}=this.state,{issue:{created:h,due:m}}=this.state,{toastVisible:p,toastMessage:b,toastType:v}=this.state;return d.a.createElement(f.Panel,null,d.a.createElement(f.Panel.Heading,null,d.a.createElement(f.Panel.Title,null,"Editing issue: "+t)),d.a.createElement(f.Panel.Body,null,d.a.createElement(f.Form,{horizontal:!0,onSubmit:this.handleSubmit},d.a.createElement(f.FormGroup,null,d.a.createElement(f.Col,{componentClass:f.ControlLabel,sm:3},"Created"),d.a.createElement(f.Col,{sm:9},d.a.createElement(f.FormControl.Static,null,h.toDateString()))),d.a.createElement(f.FormGroup,null,d.a.createElement(f.Col,{componentClass:f.ControlLabel,sm:3},"Status"),d.a.createElement(f.Col,{sm:9},d.a.createElement(f.FormControl,{componentClass:"select",name:"status",value:r,onChange:this.onChange},d.a.createElement("option",{value:"New"},"New"),d.a.createElement("option",{value:"Assigned"},"Assigned"),d.a.createElement("option",{value:"Fixed"},"Fixed"),d.a.createElement("option",{value:"Closed"},"Closed")))),d.a.createElement(f.FormGroup,null,d.a.createElement(f.Col,{componentClass:f.ControlLabel,sm:3},"Owner"),d.a.createElement(f.Col,{sm:9},d.a.createElement(f.FormControl,{componentClass:j,name:"owner",value:l,onChange:this.onChange,key:t}))),d.a.createElement(f.FormGroup,null,d.a.createElement(f.Col,{componentClass:f.ControlLabel,sm:3},"Effort"),d.a.createElement(f.Col,{sm:9},d.a.createElement(f.FormControl,{componentClass:k,name:"effort",value:c,onChange:this.onChange,key:t}))),d.a.createElement(f.FormGroup,{validationState:n.due?"error":null},d.a.createElement(f.Col,{componentClass:f.ControlLabel,sm:3},"Due"),d.a.createElement(f.Col,{sm:9},d.a.createElement(f.FormControl,{componentClass:V,onValidityChange:this.onValidityChange,name:"due",value:m,onChange:this.onChange,key:t}),d.a.createElement(f.FormControl.Feedback,null))),d.a.createElement(f.FormGroup,null,d.a.createElement(f.Col,{componentClass:f.ControlLabel,sm:3},"Title"),d.a.createElement(f.Col,{sm:9},d.a.createElement(f.FormControl,{componentClass:j,size:50,name:"title",value:i,onChange:this.onChange,key:t}))),d.a.createElement(f.FormGroup,null,d.a.createElement(f.Col,{componentClass:f.ControlLabel,sm:3},"Description"),d.a.createElement(f.Col,{sm:9},d.a.createElement(f.FormControl,{componentClass:j,tag:"textarea",rows:4,cols:50,name:"description",value:u,onChange:this.onChange,key:t}))),d.a.createElement(f.FormGroup,null,d.a.createElement(f.Col,{smOffset:3,sm:6},d.a.createElement(f.ButtonToolbar,null,d.a.createElement(f.Button,{bsStyle:"primary",type:"submit"},"Submit"),d.a.createElement(g.LinkContainer,{to:"/issues"},d.a.createElement(f.Button,{bsStyle:"link"},"Back"))))),d.a.createElement(f.FormGroup,null,d.a.createElement(f.Col,{smOffset:3,sm:9},o)))),d.a.createElement(f.Panel.Footer,null,d.a.createElement(E.Link,{to:"/edit/"+(t-1)},"Prev")," | ",d.a.createElement(E.Link,{to:"/edit/"+(t+1)},"Next")),d.a.createElement(N,{showing:p,onDismiss:this.dismissToast,bsStyle:v},b))}}class $ extends d.a.Component{static async fetchData(){return await F("query {about}")}constructor(e){super(e);const t=O.initialData?O.initialData.about:null;delete O.initialData,this.state={apiAbout:t}}async componentDidMount(){const{apiAbout:e}=this.state;if(null==e){const e=await $.fetchData();this.setState({apiAbout:e.about})}}render(){const{apiAbout:e}=this.state;return d.a.createElement("div",{className:"text-center"},d.a.createElement("h3",null,"Issue Tracker version 0.9"),d.a.createElement("h4",null,e))}}var L=[{path:"/issues/:id?",component:P},{path:"/edit/:id",component:A},{path:"/report",component:function(){return d.a.createElement("div",null,d.a.createElement("h2",null,"This is a placeholder for the Issue Report"))}},{path:"/about",component:$},{path:"*",component:function(){return d.a.createElement("h1",null,"Page Not Found")}}];function R(){return(R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}function G(){return d.a.createElement(E.Switch,null,d.a.createElement(E.Redirect,{exact:!0,from:"/",to:"/issues"}),L.map(e=>d.a.createElement(E.Route,R({},e,{key:e.path}))))}class U extends d.a.Component{constructor(e){super(e),this.state={showing:!1,toastVisible:!1,toastMessage:"",toastType:"success"},this.showModal=this.showModal.bind(this),this.hideModal=this.hideModal.bind(this),this.handleSubmit=this.handleSubmit.bind(this),this.showError=this.showError.bind(this),this.dismissToast=this.dismissToast.bind(this)}showModal(){this.setState({showing:!0})}hideModal(){this.setState({showing:!1})}showError(e){this.setState({toastVisible:!0,toastMessage:e,toastType:"danger"})}dismissToast(){this.setState({toastVisible:!1})}async handleSubmit(e){e.preventDefault(),this.hideModal();const t=document.forms.issueAdd,s={owner:t.owner.value,title:t.title.value,due:new Date((new Date).getTime()+864e6)},n=await F("mutation issueAdd($issue: IssueInputs!) {\n      issueAdd(issue: $issue) {\n        id\n      }\n    }",{issue:s},this.showError);if(n){const{history:e}=this.props;e.push("/edit/"+n.issueAdd.id)}}render(){const{showing:e}=this.state,{toastVisible:t,toastMessage:s,toastType:n}=this.state;return d.a.createElement(d.a.Fragment,null,d.a.createElement(f.NavItem,{onClick:this.showModal},d.a.createElement(f.OverlayTrigger,{placement:"left",delayShow:1e3,overlay:d.a.createElement(f.Tooltip,{id:"create-issue"},"Create Issue")},d.a.createElement(f.Glyphicon,{glyph:"plus"}))),d.a.createElement(f.Modal,{keyboard:!0,show:e,onHide:this.hideModal},d.a.createElement(f.Modal.Header,{closeButton:!0},d.a.createElement(f.Modal.Title,null,"Create Issue")),d.a.createElement(f.Modal.Body,null,d.a.createElement(f.Form,{name:"issueAdd"},d.a.createElement(f.FormGroup,null,d.a.createElement(f.ControlLabel,null,"Title"),d.a.createElement(f.FormControl,{name:"title",autoFocus:!0})),d.a.createElement(f.FormGroup,null,d.a.createElement(f.ControlLabel,null,"Owner"),d.a.createElement(f.FormControl,{name:"owner"})))),d.a.createElement(f.Modal.Footer,null,d.a.createElement(f.ButtonToolbar,null,d.a.createElement(f.Button,{type:"button",bsStyle:"primary",onClick:this.handleSubmit},"Submit"),d.a.createElement(f.Button,{bsStyle:"link",onClick:this.hideModal},"Cancel")))),d.a.createElement(N,{showing:t,onDismiss:this.dismissToast,bsStyle:n},s))}}var q=Object(E.withRouter)(U);function H(){return d.a.createElement(f.Navbar,{fluid:!0},d.a.createElement(f.Navbar.Header,null,d.a.createElement(f.Navbar.Brand,null,"Issue Tracker")),d.a.createElement(f.Nav,null,d.a.createElement(g.LinkContainer,{exact:!0,to:"/"},d.a.createElement(f.NavItem,null,"Home")),d.a.createElement(g.LinkContainer,{to:"/issues"},d.a.createElement(f.NavItem,null,"Issue List")),d.a.createElement(g.LinkContainer,{to:"/report"},d.a.createElement(f.NavItem,null,"Report"))),d.a.createElement(f.Nav,{pullRight:!0},d.a.createElement(q,null),d.a.createElement(f.NavDropdown,{id:"user-dropdown",title:d.a.createElement(f.Glyphicon,{glyph:"option-vertical"}),noCaret:!0},d.a.createElement(g.LinkContainer,{to:"/about"},d.a.createElement(f.MenuItem,null,"About")))))}function z(){return d.a.createElement("small",null,d.a.createElement("hr",null),d.a.createElement("p",{className:"text-center"},"Full source code available at this"," ",d.a.createElement("a",{href:"https://github.com/vasansr/pro-mern-stack-2"},"GitHub repository")))}function J(){return d.a.createElement("div",null,d.a.createElement(H,null),d.a.createElement(f.Grid,{fluid:!0},d.a.createElement(G,null)),d.a.createElement(z,null))}var Y=s(12),W=s.n(Y);var X=async function(e,t){const s=L.find(t=>Object(E.matchPath)(e.path,t));let n;if(s&&s.component.fetchData){const t=Object(E.matchPath)(e.path,s),a=e.url.indexOf("?"),o=-1!==a?e.url.substr(a):null;n=await s.component.fetchData(t,o)}O.initialData=n;const a=d.a.createElement(E.StaticRouter,{location:e.url,context:{}},d.a.createElement(J,null)),o=p.a.renderToString(a);t.send(function(e,t){return`<!DOCTYPE HTML>\n<html>\n\n<head>\n  <meta charset="utf-8">\n  <title>Pro MERN Stack</title>\n  <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" >\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n\n  <style>\n    table.table-hover tr {cursor: pointer;}\n    .panel-title a {display: block; width: 100%; cursor: pointer;}\n  </style>\n</head>\n\n<body>\n  \x3c!-- Page generated from template. --\x3e\n  <div id="contents">${e}</div>\n  <script>window.__INITIAL_DATA__ = ${W()(t)}<\/script>\n\n  <script src="/env.js"><\/script>\n  <script src="/vendor.bundle.js"><\/script>\n  <script src="/app.bundle.js"><\/script>\n</body>\n\n</html>\n`}(o,n))};const K=i()();u.a.install(),a.a.config();process.env.ENABLE_HMR;K.use(i.a.static("public"));const Q=process.env.API_PROXY_TARGET;Q&&K.use("/graphql",l()({target:Q})),process.env.UI_API_ENDPOINT||(process.env.UI_API_ENDPOINT="http://localhost:3000/graphql"),process.env.UI_SERVER_API_ENDPOINT||(process.env.UI_SERVER_API_ENDPOINT=process.env.UI_API_ENDPOINT),K.get("/env.js",(e,t)=>{const s={UI_API_ENDPOINT:process.env.UI_API_ENDPOINT};t.send("window.ENV = "+JSON.stringify(s))}),K.get("*",(e,t,s)=>{X(e,t,s)});const Z=process.env.UI_SERVER_PORT||8e3;K.listen(Z,()=>{console.log("UI started on port "+Z)})}]);
//# sourceMappingURL=index.js.map