(this["webpackJsonptic-tac-toe-react"]=this["webpackJsonptic-tac-toe-react"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},,function(t,e,i){"use strict";i.r(e);var s=i(1),n=i.n(s),a=i(8),r=i.n(a),c=(i(13),i(14),i(3)),o=i(4),l=i(2),h=i(6),u=i(5),d=(i(15),i(16),i(0)),g=function(t){Object(h.a)(i,t);var e=Object(u.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(o.a)(i,[{key:"getClasses",value:function(){var t="tile ";return null===this.props.value&&(t+="empty "),this.props.highlight&&(t+="highlight "),t.trim()}},{key:"render",value:function(){return Object(d.jsx)("div",{className:this.getClasses(),onClick:this.props.onClicked,children:this.props.value})}}]),i}(n.a.Component),v=function(t){Object(h.a)(i,t);var e=Object(u.a)(i);function i(t){var s;return Object(c.a)(this,i),(s=e.call(this,t)).state={size:t.size,tiles:new Array(t.size*t.size).fill(null),turn:0,round:0,scoring:[],players:[{alias:"Player 1",icon:"X"},{alias:"Player 2",icon:"O"}]},console.log("new Grid(".concat(s.state.size,", ").concat(s.state.size,") connect ").concat(s.state.size," to win")),s.handleTileClick=s.handleTileClick.bind(Object(l.a)(s)),s.renderTile=s.renderTile.bind(Object(l.a)(s)),s.getStatus=s.getStatus.bind(Object(l.a)(s)),s.moveStack=[],s}return Object(o.a)(i,[{key:"getCurrentPlayer",value:function(){return this.state.players[this.state.turn%this.state.players.length]}},{key:"handleActionButton",value:function(){if(this.state.gameover||this.moveStack.length<=0)return this.moveStack=[],void this.setState({scoring:[],gameover:!1,turn:0,round:this.state.round+1,tiles:new Array(this.state.size*this.state.size).fill(null)});var t=this.state.tiles.slice();t[this.moveStack.pop()]=null,this.setState({tiles:t,turn:this.state.turn-1})}},{key:"indexToCoordinate",value:function(t){return{x:t%this.state.size,y:Math.floor(t/this.state.size)}}},{key:"coordinateToIndex",value:function(t,e){return t+this.state.size*e}},{key:"checkScore",value:function(){var t=this.moveStack[this.moveStack.length-1],e=this.state.tiles[t],i=this.indexToCoordinate(t),s=i.x,n=i.y;if(console.log("last move: ".concat(t," - ").concat(s,",").concat(n)),null===e)return console.log("player last move ".concat(e)),[];for(var a={x:[],y:[],diag:[],revDiag:[]},r=0;r<this.state.size;r++){var c=this.coordinateToIndex(r,n),o=this.coordinateToIndex(s,r),l=this.coordinateToIndex(r,r),h=this.coordinateToIndex(r,this.state.size-(r+1));this.state.tiles[c]===e?a.x.push(c):a.x.length<this.state.size&&(a.x=[]),this.state.tiles[o]===e?a.y.push(o):a.y.length<this.state.size&&(a.y=[]),this.state.tiles[l]===e?a.diag.push(l):a.diag.length<this.state.size&&(a.diag=[]),this.state.tiles[h]===e?a.revDiag.push(h):a.revDiag.length<this.state.size&&(a.revDiag=[])}for(var u in a)if(console.log("checking ".concat(JSON.stringify(u))),a[u].length>=this.state.size)return a[u];return this.moveStack.length===this.state.tiles.length?(this.setState({gameover:!0}),[]):[]}},{key:"handleTileClick",value:function(t){var e=this;if(null===this.state.tiles[t]&&!this.state.gameover){var i=this.state.tiles.slice();i[t]=this.getCurrentPlayer().icon,this.moveStack.push(t),this.setState({tiles:i,turn:this.state.turn+1},(function(){var t=e.checkScore();console.log("scoring: ".concat(t)),t.length>0&&e.setState({gameover:!0,turn:e.state.turn-1,scoring:t})}))}}},{key:"getStatus",value:function(){return this.state.gameover?this.moveStack.length===this.state.tiles.length?"Draw":"".concat(this.getCurrentPlayer().icon," Wins!"):"".concat(this.getCurrentPlayer().icon,"'s turn")}},{key:"actionButtonText",value:function(){return this.state.gameover?"Play again?":"Undo"}},{key:"renderRows",value:function(){var t=this;return new Array(this.state.size).fill(this.turn).map((function(e,i){return Object(d.jsx)("div",{className:"row",children:t.state.tiles.slice(t.state.size*i,t.state.size*i+t.state.size).map((function(e,s){var n=t.state.size*i+s;return t.renderTile(n,t.state.scoring.includes(n))}))},"row_".concat(i))}))}},{key:"renderTile",value:function(t,e){return Object(d.jsx)(g,{highlight:e,value:this.state.tiles[t],onClicked:this.handleTileClick.bind(this,t)},"tile_".concat(t))}},{key:"render",value:function(){var t=this.getStatus();return Object(d.jsxs)("section",{children:[Object(d.jsx)("article",{id:"status",children:t}),Object(d.jsx)("div",{id:"grid",children:this.renderRows()}),Object(d.jsx)("button",{disabled:this.moveStack.length<1,id:"action-btn",onClick:this.handleActionButton.bind(this),children:this.actionButtonText()})]})}}]),i}(n.a.Component);var f=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App-header",children:"Tic-Tac-Toe"}),Object(d.jsx)(v,{size:3})]})},y=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,19)).then((function(e){var i=e.getCLS,s=e.getFID,n=e.getFCP,a=e.getLCP,r=e.getTTFB;i(t),s(t),n(t),a(t),r(t)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),y()}],[[18,1,2]]]);
//# sourceMappingURL=main.2a09c8d1.chunk.js.map