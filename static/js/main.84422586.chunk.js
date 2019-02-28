(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(9),o=n.n(i),s=(n(17),n(7)),r=n(10),c=n(2),h=n(3),d=n(5),u=n(4),m=n(1),p=n(6),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={value:""},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleKeyDown=n.handleKeyDown.bind(Object(m.a)(n)),n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0,value:this.state.value,onChange:this.handleChange,onKeyDown:this.handleKeyDown}))}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleKeyDown",value:function(e){13===e.which&&(this.props.onAdd(e.target.value.trim()),this.setState({value:""}))}}]),t}(a.Component),g=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={text:e.text,editing:!1},n.handleEdit=n.handleEdit.bind(Object(m.a)(n)),n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.handleKeyDown=n.handleKeyDown.bind(Object(m.a)(n)),n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidUpdate",value:function(e,t){!t.editing&&this.state.editing&&(this.refs.input.focus(),this.refs.input.setSelectionRange(0,this.refs.input.value.length))}},{key:"render",value:function(){var e=[];return this.props.completed&&e.push("completed"),this.state.editing&&e.push("editing"),l.a.createElement("li",{className:e.join(" ")},l.a.createElement("div",{className:"view"},l.a.createElement("input",{className:"toggle",type:"checkbox",checked:this.props.completed,onChange:this.props.onToggle}),l.a.createElement("label",{onDoubleClick:this.handleEdit},this.props.text),l.a.createElement("button",{className:"destroy",onClick:this.props.onDelete})),l.a.createElement("input",{className:"edit",ref:"input",value:this.state.text,onChange:this.handleChange,onBlur:this.handleSubmit,onKeyDown:this.handleKeyDown}))}},{key:"handleEdit",value:function(){this.setState({editing:!0})}},{key:"handleChange",value:function(e){this.setState({text:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this.state.text.trim();t?(this.props.onUpdate(t),this.setState({text:t,editing:!1})):this.props.onDelete()}},{key:"handleKeyDown",value:function(e){27===e.which?this.setState({text:this.props.text,editing:!1}):13===e.which&&this.handleSubmit(e)}}]),t}(a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return this.props.items.length?l.a.createElement("section",{className:"main"},l.a.createElement("input",{id:"toggle-all",className:"toggle-all",type:"checkbox",checked:this.props.items.every(function(e){return e.completed}),onChange:this.props.onToggleAll}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement("ul",{className:"todo-list"},this.props.items.map(function(t){return l.a.createElement(g,{key:t.id,text:t.text,completed:t.completed,onDelete:function(){return e.props.onDelete(t.id)},onToggle:function(){return e.props.onToggle(t.id)},onUpdate:function(n){return e.props.onUpdate(t.id,n)}})}))):null}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={routes:[{path:"/",name:"All"},{path:"/active",name:"Active"},{path:"/completed",name:"Completed"}]},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;if(!this.props.items.length)return null;var t=this.props.items.reduce(function(e,t){return t.completed?e-1:e},this.props.items.length);return l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"todo-count"},l.a.createElement("strong",null,t)," ",1===t?"item":"items"," left"),l.a.createElement("ul",{className:"filters"},this.state.routes.map(function(t){return l.a.createElement("li",{key:t.path},l.a.createElement("a",{className:t.path===e.props.current?"selected":"",href:"#"+t.path,onClick:function(){return e.props.onFilter(t.path)}},t.name))})),t!==this.props.items.length&&l.a.createElement("button",{className:"clear-completed",onClick:this.props.onClear},"Clear completed"))}}]),t}(a.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"info"},l.a.createElement("p",null,"Double-click to edit a todo"),l.a.createElement("p",null,"Template by ",l.a.createElement("a",{href:"http://sindresorhus.com"},"Sindre Sorhus")),l.a.createElement("p",null,"Created by ",l.a.createElement("a",{href:"https://zce.me"},"zce")),l.a.createElement("p",null,"Part of ",l.a.createElement("a",{href:"http://todomvc.com"},"TodoMVC")))}}]),t}(a.Component),j={get:function(e){try{var t=window.localStorage.getItem(e);return JSON.parse(t)}catch(n){return null}},set:function(e,t){var n=JSON.stringify(t);window.localStorage.setItem(e,n)}},y=(n(18),{"/":function(){return!0},"/active":function(e){return!e.completed},"/completed":function(e){return e.completed}}),E=function(){var e=window.location.hash.substr(1);return e&&["/active","/completed"].includes(e)?e:"/"},k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={items:j.get("todos")||[],path:E(),loading:!0},n.handleAdd=n.handleAdd.bind(Object(m.a)(n)),n.handleDelete=n.handleDelete.bind(Object(m.a)(n)),n.handleToggle=n.handleToggle.bind(Object(m.a)(n)),n.handleUpdate=n.handleUpdate.bind(Object(m.a)(n)),n.handleToggleAll=n.handleToggleAll.bind(Object(m.a)(n)),n.handleClearCompleted=n.handleClearCompleted.bind(Object(m.a)(n)),n.handleFilter=n.handleFilter.bind(Object(m.a)(n)),n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){this.setState({loading:!1})}},{key:"componentDidUpdate",value:function(e,t){t.items!==this.state.items&&(console.log(this.state.items),j.set("todos",this.state.items))}},{key:"render",value:function(){if(this.state.loading)return null;var e=this.state.items.filter(y[this.state.path]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"todoapp"},l.a.createElement(f,{onAdd:this.handleAdd}),l.a.createElement(b,{items:e,onDelete:this.handleDelete,onToggle:this.handleToggle,onUpdate:this.handleUpdate,onToggleAll:this.handleToggleAll}),l.a.createElement(v,{items:this.state.items,current:this.state.path,onFilter:this.handleFilter,onClear:this.handleClearCompleted})),l.a.createElement(O,null))}},{key:"handleAdd",value:function(e){var t=this.state.items.reduce(function(e,t){return Math.max(t.id,e)},-1)+1,n=[].concat(Object(r.a)(this.state.items),[{id:t,text:e,completed:!1}]);this.setState({items:n})}},{key:"handleDelete",value:function(e){var t=this.state.items.filter(function(t){return t.id!==e});this.setState({items:t})}},{key:"handleToggle",value:function(e){var t=this.state.items.map(function(t){return t.id===e?Object(s.a)({},t,{completed:!t.completed}):t});this.setState({items:t})}},{key:"handleUpdate",value:function(e,t){var n=this.state.items.map(function(n){return n.id===e?Object(s.a)({},n,{text:t}):n});this.setState({items:n})}},{key:"handleToggleAll",value:function(){var e=this.state.items.every(function(e){return e.completed}),t=this.state.items.map(function(t){return Object(s.a)({},t,{completed:!e})});this.setState({items:t})}},{key:"handleClearCompleted",value:function(){var e=this.state.items.filter(function(e){return!e.completed});this.setState({items:e})}},{key:"handleFilter",value:function(e){this.setState({path:e})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.84422586.chunk.js.map