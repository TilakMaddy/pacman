parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NVij":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LEVEL=exports.CLASS_LIST=exports.OBJECT_TYPE=exports.DIRECTIONS=exports.CELL_SIZE=exports.GRID_SIZE=void 0;var o=20;exports.GRID_SIZE=o;var e=25;exports.CELL_SIZE=e;var r={ArrowLeft:{code:37,movement:-1,rotation:180},ArrowUp:{code:38,movement:-o,rotation:270},ArrowRight:{code:39,movement:1,rotation:0},ArrowDown:{code:40,movement:o,rotation:90}};exports.DIRECTIONS=r;var t={BLANK:"blank",WALL:"wall",DOT:"dot",BLINKY:"blinky",PINKY:"pinky",INKY:"inky",CLYDE:"clyde",PILL:"pill",PACMAN:"pacman",GHOST:"ghost",SCARED:"scared",GHOSTLAIR:"lair"};exports.OBJECT_TYPE=t;var L=[t.BLANK,t.WALL,t.DOT,t.BLINKY,t.PINKY,t.INKY,t.CLYDE,t.PILL,t.PACMAN,t.GHOSTLAIR];exports.CLASS_LIST=L;var I=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,7,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,7,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1,1,2,2,2,2,1,2,2,2,1,1,2,2,2,1,2,2,2,2,1,1,1,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,0,0,0,1,2,1,2,2,2,2,2,2,2,2,1,2,1,0,0,0,0,0,0,1,2,1,2,1,9,9,9,9,1,2,1,2,1,0,0,0,1,1,1,1,2,1,2,1,9,9,9,9,1,2,1,2,1,1,1,1,1,0,0,0,2,2,2,1,9,9,9,9,1,2,2,2,0,0,0,1,1,1,1,1,2,1,2,1,9,9,9,9,1,2,1,2,1,1,1,1,0,0,0,1,2,1,2,1,1,1,1,1,1,2,1,2,1,0,0,0,0,0,0,1,2,1,2,0,0,0,0,0,0,2,1,2,1,0,0,0,1,1,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,1,2,2,2,2,1,2,2,2,1,1,2,2,2,1,2,2,2,2,1,1,2,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,7,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,7,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];exports.LEVEL=I;
},{}],"NVR6":[function(require,module,exports) {
function n(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,l=new Array(r);e<r;e++)l[e]=n[e];return l}module.exports=n;
},{}],"XfJI":[function(require,module,exports) {
var r=require("./arrayLikeToArray");function a(a){if(Array.isArray(a))return r(a)}module.exports=a;
},{"./arrayLikeToArray":"NVR6"}],"OMTj":[function(require,module,exports) {
function e(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}module.exports=e;
},{}],"UyFj":[function(require,module,exports) {
var r=require("./arrayLikeToArray");function t(t,e){if(t){if("string"==typeof t)return r(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(t,e):void 0}}module.exports=t;
},{"./arrayLikeToArray":"NVR6"}],"wFNi":[function(require,module,exports) {
function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=e;
},{}],"Fhqp":[function(require,module,exports) {
var r=require("./arrayWithoutHoles"),e=require("./iterableToArray"),u=require("./unsupportedIterableToArray"),a=require("./nonIterableSpread");function o(o){return r(o)||e(o)||u(o)||a()}module.exports=o;
},{"./arrayWithoutHoles":"XfJI","./iterableToArray":"OMTj","./unsupportedIterableToArray":"UyFj","./nonIterableSpread":"wFNi"}],"fcMS":[function(require,module,exports) {
function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}module.exports=n;
},{}],"P8NW":[function(require,module,exports) {
function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function r(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}module.exports=r;
},{}],"IxO8":[function(require,module,exports) {
function e(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}module.exports=e;
},{}],"p2kp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("@babel/runtime/helpers/toConsumableArray")),t=a(require("@babel/runtime/helpers/classCallCheck")),r=a(require("@babel/runtime/helpers/createClass")),s=a(require("@babel/runtime/helpers/defineProperty")),i=require("./setup");function a(e){return e&&e.__esModule?e:{default:e}}var n=function(){function a(e){var r=this;(0,t.default)(this,a),(0,s.default)(this,"objectExists",function(e,t){return r.grid[e].classList.contains(t)}),this.dotCount=0,this.grid=[],this.DOMGrid=e}return(0,r.default)(a,[{key:"createGrid",value:function(e){var t=this;this.dotCount=0,this.grid=[],this.DOMGrid.innerHTML="",this.DOMGrid.style.cssText="\n      grid-template-columns: repeat(".concat(i.GRID_SIZE,", ").concat(i.CELL_SIZE,"px);\n    "),e.forEach(function(e){var r=document.createElement("div");r.classList.add("square",i.CLASS_LIST[e]),r.style.cssText="\n        width: ".concat(i.CELL_SIZE,"px;\n        height: ").concat(i.CELL_SIZE,"px;\n      "),t.DOMGrid.append(r),t.grid.push(r),i.OBJECT_TYPE.DOT==i.CLASS_LIST[e]&&t.dotCount++})}},{key:"addObject",value:function(t,r){var s;(s=this.grid[t].classList).add.apply(s,(0,e.default)(r))}},{key:"removeObject",value:function(t,r){var s;(s=this.grid[t].classList).remove.apply(s,(0,e.default)(r))}},{key:"rotateDiv",value:function(e,t){this.grid[e].style.transform="rotate(".concat(t,"deg)")}},{key:"moveCharacter",value:function(e){if(e.shouldMove()){var t=e.getNextMove(this.objectExists.bind(this)),r=t.nextMovePos,s=t.direction,i=e.makeMove(),a=i.classesToRemove,n=i.classesToAdd;e.rotation&&e.nextMovePos!==e.pos&&(this.rotateDiv(r,e.dir.rotation),this.rotateDiv(e.pos,0)),this.removeObject(e.pos,a),this.addObject(r,n),e.setNewPos(r,s)}}},{key:"showGameStatus",value:function(e){var t=document.createElement("div");t.classList.add("game-status"),t.innerHTML="\n      ".concat(e?"WIN !":"GAME OVER","\n    "),this.DOMGrid.append(t)}}],[{key:"createGameboard",value:function(e,t){var r=new this(e);return r.createGrid(t),r}}]),a}();exports.default=n;
},{"@babel/runtime/helpers/toConsumableArray":"Fhqp","@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","@babel/runtime/helpers/defineProperty":"IxO8","./setup":"NVij"}],"naqe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=s(require("@babel/runtime/helpers/classCallCheck")),t=s(require("@babel/runtime/helpers/createClass")),i=require("./setup");function s(e){return e&&e.__esModule?e:{default:e}}var r=function(){function s(t,i){(0,e.default)(this,s),this.pos=t,this.speed=i,this.dir=null,this.timer=0,this.powerPill=!1,this.rotation=!0}return(0,t.default)(s,[{key:"shouldMove",value:function(){return!!this.dir&&(this.timer===this.speed?(this.timer=0,!0):void this.timer++)}},{key:"getNextMove",value:function(e){var t=this.pos+this.dir.movement;return(e(t,i.OBJECT_TYPE.WALL)||e(t,i.OBJECT_TYPE.GHOSTLAIR))&&(t=this.pos),{nextMovePos:t,direction:this.dir}}},{key:"makeMove",value:function(){return{classesToRemove:[i.OBJECT_TYPE.PACMAN],classesToAdd:[i.OBJECT_TYPE.PACMAN]}}},{key:"setNewPos",value:function(e){this.pos=e}},{key:"handleKeyInput",value:function(e,t){if(e.keyCode>=37&&e.keyCode<=40){var s=i.DIRECTIONS[e.key],r=this.pos+s.movement;t(r,i.OBJECT_TYPE.WALL)||t(r,i.OBJECT_TYPE.GHOSTLAIR)||(this.dir=s)}}}]),s}();exports.default=r;
},{"@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","./setup":"NVij"}],"BSCL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("@babel/runtime/helpers/toConsumableArray")),t=r(require("@babel/runtime/helpers/classCallCheck")),i=r(require("@babel/runtime/helpers/createClass")),s=require("./setup");function r(e){return e&&e.__esModule?e:{default:e}}var o=function(){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,i=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;(0,t.default)(this,r),this.name=n,this.movement=o,this.startPos=i,this.pos=i,this.speed=e,this.timer=0,this.isScared=!1,this.rotation=!1,this.dir=s.DIRECTIONS.ArrowRight}return(0,i.default)(r,[{key:"shouldMove",value:function(){if(this.timer===this.speed)return this.timer=0,!0;this.timer++}},{key:"getNextMove",value:function(e){var t=this.movement(this.pos,this.dir,e);return{nextMovePos:t.nextMovePos,direction:t.direction}}},{key:"makeMove",value:function(){var t=[s.OBJECT_TYPE.GHOST,s.OBJECT_TYPE.SCARED,this.name],i=[s.OBJECT_TYPE.GHOST,this.name];return this.isScared&&(i=[].concat((0,e.default)(i),[s.OBJECT_TYPE.SCARED])),{classesToAdd:i,classesToRemove:t}}},{key:"setNewPos",value:function(e,t){this.dir=t,this.pos=e}}]),r}();exports.default=o;
},{"@babel/runtime/helpers/toConsumableArray":"Fhqp","@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","./setup":"NVij"}],"MuB3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.randomMovement=t;var e=require("./setup");function t(t,r,o){for(var n=r,a=t+n.movement,s=Object.keys(e.DIRECTIONS);o(a,e.OBJECT_TYPE.WALL)||o(a,e.OBJECT_TYPE.GHOST);){var v=s[Math.floor(Math.random()*s.length)];a=t+(n=e.DIRECTIONS[v]).movement}return{nextMovePos:a,direction:n}}
},{"./setup":"NVij"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./setup"),t=a(require("./GameBoard")),o=a(require("./Pacman")),n=a(require("./Ghost")),r=require("./ghostMoves");function a(e){return e&&e.__esModule?e:{default:e}}var s="./sounds/munch.wav",u="./sounds/pill .wav",c="./sounds/game_start.wav",d="./sounds/death.wav",i="./sounds/eat_ghost.wav",l=document.querySelector("#game"),E=document.querySelector("#score"),m=document.querySelector("#start-button"),T=t.default.createGameboard(l,e.LEVEL),v=1e4,P=80,f=0,p=null,C=!1,O=!1,w=null;function L(e){new Audio(e).play()}function Y(e,t){L(d),document.removeEventListener("keydown",function(t){e.handleKeyInput(t,T.objectExists.bind(T))}),T.showGameStatus(C),clearInterval(p),m.classList.remove("hide")}function _(t,o){var n=o.find(function(e){return e.pos==t.pos});n&&(t.powerPill?(L(i),T.removeObject(n.pos,[e.OBJECT_TYPE.GHOST,e.OBJECT_TYPE.SCARED,n.name]),n.pos=n.startPos,f+=100):(console.log("lost "),T.removeObject(t.pos,[e.OBJECT_TYPE.PACMAN]),T.rotateDiv(t.pos,0),Y(t,l)))}function h(t,o){T.moveCharacter(t),_(t,o),o.forEach(function(e){T.moveCharacter(e),_(t,o)}),T.objectExists(t.pos,e.OBJECT_TYPE.DOT)&&(L(s),T.removeObject(t.pos,[e.OBJECT_TYPE.DOT]),T.dotCount--,f+=10),T.objectExists(t.pos,e.OBJECT_TYPE.PILL)&&(L(u),T.removeObject(t.pos,[e.OBJECT_TYPE.PILL]),t.powerPill=!0,f+=50,clearTimeout(w),w=setTimeout(function(){t.powerPill=!1},v)),t.powerPill!==O&&(O=t.powerPill,o.forEach(function(e){return e.isScared=O})),0===T.dotCount&&(C=!0,Y(t,o)),E.innerHTML=f}function B(){L(c),C=!1,O=!1,f=0,m.classList.add("hide"),T.createGrid(e.LEVEL);var t=new o.default(287,2);T.addObject(287,[e.OBJECT_TYPE.PACMAN]),document.addEventListener("keydown",function(e){t.handleKeyInput(e,T.objectExists.bind(T))});var a=[new n.default(5,188,r.randomMovement,e.OBJECT_TYPE.BLINKY),new n.default(4,209,r.randomMovement,e.OBJECT_TYPE.PINKY),new n.default(3,230,r.randomMovement,e.OBJECT_TYPE.INKY),new n.default(2,251,r.randomMovement,e.OBJECT_TYPE.CLYDE)];p=setInterval(function(){h(t,a)},P)}m.addEventListener("click",B);
},{"./setup":"NVij","./GameBoard":"p2kp","./Pacman":"naqe","./Ghost":"BSCL","./ghostMoves":"MuB3"}]},{},["Focm"], null)
//# sourceMappingURL=src.1afa76d5.js.map