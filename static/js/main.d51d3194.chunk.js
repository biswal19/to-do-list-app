(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(2),s=n.n(r),l=(n(14),n(3)),c=n(4),o=n(1),u=n(6),m=n(5),d=n(8),h=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).createTasks=a.createTasks.bind(Object(o.a)(a)),a}return Object(c.a)(n,[{key:"createTasks",value:function(e){var t=this;return(i.a.createElement("li",{onClick:function(){return t.delete(e.key)},key:e.key},e.text))}},{key:"delete",value:function(e){console.log("key is:"+e),this.props.delete(e)}},{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return i.a.createElement("ul",{className:"theList"},i.a.createElement(d.a,{duration:250,easing:"ease-out"},e))}}]),n}(a.Component),v=(n(15),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={items:[]},a.addItem=a.addItem.bind(Object(o.a)(a)),a.deleteItem=a.deleteItem.bind(Object(o.a)(a)),a}return Object(c.a)(n,[{key:"addItem",value:function(e){if(" "!==this._inputElement.value){var t={text:this._inputElement.value,key:Date.now()};this.setState((function(e){return{items:e.items.concat(t)}}))}this._inputElement.value=" ",console.log(this.state.items),e.preventDefault()}},{key:"deleteItem",value:function(e){console.log("key in deleteItem:"+e),console.log("Items at delete:"+this.state.items);var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"render",value:function(){var e=this;return(i.a.createElement("div",null,i.a.createElement("div",{className:"todoListMain"},i.a.createElement("div",{className:"header"},i.a.createElement("form",{onSubmit:this.addItem},i.a.createElement("input",{ref:function(t){return e._inputElement=t},palceholder:"enter task"}),i.a.createElement("button",{type:"submit"},"add"))),i.a.createElement(h,{entries:this.state.items,delete:this.deleteItem})),i.a.createElement("div",{id:"bottom"},i.a.createElement("p",null,i.a.createElement("h1",null,"Made by Chandrika Biswal")))))}}]),n}(a.Component)),f=document.querySelector("#container");s.a.render(i.a.createElement("div",null,i.a.createElement(v,null)),f)},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.d51d3194.chunk.js.map