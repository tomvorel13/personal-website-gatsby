webpackJsonp([0xc260c743ec7c],{"./node_modules/babel-runtime/core-js/object/assign.js":function(e,o,s){e.exports={default:s("./node_modules/core-js/library/fn/object/assign.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/object/keys.js":function(e,o,s){e.exports={default:s("./node_modules/core-js/library/fn/object/keys.js"),__esModule:!0}},"./node_modules/babel-runtime/helpers/extends.js":function(e,o,s){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}o.__esModule=!0;var r=s("./node_modules/babel-runtime/core-js/object/assign.js"),l=t(r);o.default=l.default||function(e){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e}},"./node_modules/babel-runtime/helpers/objectWithoutProperties.js":function(e,o){"use strict";o.__esModule=!0,o.default=function(e,o){var s={};for(var t in e)o.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(s[t]=e[t]);return s}},"./node_modules/core-js/library/fn/object/assign.js":function(e,o,s){s("./node_modules/core-js/library/modules/es6.object.assign.js"),e.exports=s("./node_modules/core-js/library/modules/_core.js").Object.assign},"./node_modules/core-js/library/fn/object/keys.js":function(e,o,s){s("./node_modules/core-js/library/modules/es6.object.keys.js"),e.exports=s("./node_modules/core-js/library/modules/_core.js").Object.keys},"./node_modules/core-js/library/modules/_object-assign.js":function(e,o,s){"use strict";var t=s("./node_modules/core-js/library/modules/_object-keys.js"),r=s("./node_modules/core-js/library/modules/_object-gops.js"),l=s("./node_modules/core-js/library/modules/_object-pie.js"),n=s("./node_modules/core-js/library/modules/_to-object.js"),u=s("./node_modules/core-js/library/modules/_iobject.js"),d=Object.assign;e.exports=!d||s("./node_modules/core-js/library/modules/_fails.js")(function(){var e={},o={},s=Symbol(),t="abcdefghijklmnopqrst";return e[s]=7,t.split("").forEach(function(e){o[e]=e}),7!=d({},e)[s]||Object.keys(d({},o)).join("")!=t})?function(e,o){for(var s=n(e),d=arguments.length,a=1,i=r.f,c=l.f;d>a;)for(var j,m=u(arguments[a++]),b=i?t(m).concat(i(m)):t(m),_=b.length,f=0;_>f;)c.call(m,j=b[f++])&&(s[j]=m[j]);return s}:d},"./node_modules/core-js/library/modules/_object-sap.js":function(e,o,s){var t=s("./node_modules/core-js/library/modules/_export.js"),r=s("./node_modules/core-js/library/modules/_core.js"),l=s("./node_modules/core-js/library/modules/_fails.js");e.exports=function(e,o){var s=(r.Object||{})[e]||Object[e],n={};n[e]=o(s),t(t.S+t.F*l(function(){s(1)}),"Object",n)}},"./node_modules/core-js/library/modules/es6.object.assign.js":function(e,o,s){var t=s("./node_modules/core-js/library/modules/_export.js");t(t.S+t.F,"Object",{assign:s("./node_modules/core-js/library/modules/_object-assign.js")})},"./node_modules/core-js/library/modules/es6.object.keys.js":function(e,o,s){var t=s("./node_modules/core-js/library/modules/_to-object.js"),r=s("./node_modules/core-js/library/modules/_object-keys.js");s("./node_modules/core-js/library/modules/_object-sap.js")("keys",function(){return function(e){return r(t(e))}})},"./node_modules/gatsby-link/index.js":function(e,o,s){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function r(e){return e.replace(/^\/\//g,"/")}o.__esModule=!0,o.navigateTo=void 0;var l=s("./node_modules/babel-runtime/helpers/extends.js"),n=t(l),u=s("./node_modules/babel-runtime/core-js/object/keys.js"),d=t(u),a=s("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),i=t(a),c=s("./node_modules/babel-runtime/helpers/classCallCheck.js"),j=t(c),m=s("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),b=t(m),_=s("./node_modules/babel-runtime/helpers/inherits.js"),f=t(_),p=s("./node_modules/react/react.js"),y=t(p),v=s("./node_modules/react-router-dom/index.js"),g=s("./node_modules/prop-types/index.js"),h=t(g),k="/";k="/tom-vorel-2017";var x={activeClassName:h.default.string,activeStyle:h.default.object,exact:h.default.bool,strict:h.default.bool,isActive:h.default.func,location:h.default.object},C=function(e){function o(s){(0,j.default)(this,o);var t=(0,b.default)(this,e.call(this));return t.state={to:r(k+s.to)},t}return(0,f.default)(o,e),o.prototype.componentWillReceiveProps=function(e){this.props.to!==e.to&&(this.setState({to:r(k+e.to)}),___loader.enqueue(this.state.to))},o.prototype.componentDidMount=function(){___loader.enqueue(this.state.to)},o.prototype.render=function(){var e=this,o=this.props,s=o.onClick,t=(0,i.default)(o,["onClick"]),r=void 0;return r=(0,d.default)(x).some(function(o){return e.props[o]})?v.NavLink:v.Link,y.default.createElement(r,(0,n.default)({onClick:function(o){if(s&&s(o),!(0!==o.button||e.props.target||o.defaultPrevented||o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)){var t=e.state.to;if(t.split("#").length>1&&(t=t.split("#").slice(0,-1).join("")),t===window.location.pathname){var r=e.state.to.split("#").slice(1).join("#"),l=document.getElementById(r);if(null!==l)return l.scrollIntoView(),!0}o.preventDefault(),window.___navigateTo(e.state.to)}return!0}},t,{to:this.state.to}))},o}(y.default.Component);C.propTypes=(0,n.default)({},x,{to:h.default.string.isRequired,onClick:h.default.func}),C.contextTypes={router:h.default.object},o.default=C;o.navigateTo=function(e){window.___navigateTo(r(k+e))}},'./node_modules/babel-loader/lib/index.js?{"plugins":["C:/Users/Tom/Desktop/tom-vorel-2017/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","C:/Users/Tom/Desktop/tom-vorel-2017/node_modules/babel-plugin-add-module-exports/lib/index.js","C:/Users/Tom/Desktop/tom-vorel-2017/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["C:/Users/Tom/Desktop/tom-vorel-2017/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"C:/Users/Tom/Desktop/tom-vorel-2017/node_modules/babel-preset-stage-0/lib/index.js","C:/Users/Tom/Desktop/tom-vorel-2017/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/projects.js':function(e,o,s){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}o.__esModule=!0;var r=s("./node_modules/react/react.js"),l=t(r),n=s("./node_modules/gatsby-link/index.js"),u=(t(n),function(){return l.default.createElement("div",{className:"projects__div"},l.default.createElement("h1",null,"Projects"))});o.default=u,e.exports=o.default}});
//# sourceMappingURL=component---src-pages-projects-js-51163302a9f9453b11ca.js.map