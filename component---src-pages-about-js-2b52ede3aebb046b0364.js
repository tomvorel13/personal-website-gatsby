webpackJsonp([0xefeaa6d1881d],{"./node_modules/babel-runtime/core-js/object/assign.js":function(e,o,t){e.exports={default:t("./node_modules/core-js/library/fn/object/assign.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/object/keys.js":function(e,o,t){e.exports={default:t("./node_modules/core-js/library/fn/object/keys.js"),__esModule:!0}},"./node_modules/babel-runtime/helpers/extends.js":function(e,o,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}o.__esModule=!0;var r=t("./node_modules/babel-runtime/core-js/object/assign.js"),n=s(r);o.default=n.default||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}},"./node_modules/babel-runtime/helpers/objectWithoutProperties.js":function(e,o){"use strict";o.__esModule=!0,o.default=function(e,o){var t={};for(var s in e)o.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}},"./node_modules/core-js/library/fn/object/assign.js":function(e,o,t){t("./node_modules/core-js/library/modules/es6.object.assign.js"),e.exports=t("./node_modules/core-js/library/modules/_core.js").Object.assign},"./node_modules/core-js/library/fn/object/keys.js":function(e,o,t){t("./node_modules/core-js/library/modules/es6.object.keys.js"),e.exports=t("./node_modules/core-js/library/modules/_core.js").Object.keys},"./node_modules/core-js/library/modules/_object-assign.js":function(e,o,t){"use strict";var s=t("./node_modules/core-js/library/modules/_object-keys.js"),r=t("./node_modules/core-js/library/modules/_object-gops.js"),n=t("./node_modules/core-js/library/modules/_object-pie.js"),l=t("./node_modules/core-js/library/modules/_to-object.js"),a=t("./node_modules/core-js/library/modules/_iobject.js"),u=Object.assign;e.exports=!u||t("./node_modules/core-js/library/modules/_fails.js")(function(){var e={},o={},t=Symbol(),s="abcdefghijklmnopqrst";return e[t]=7,s.split("").forEach(function(e){o[e]=e}),7!=u({},e)[t]||Object.keys(u({},o)).join("")!=s})?function(e,o){for(var t=l(e),u=arguments.length,i=1,d=r.f,c=n.f;u>i;)for(var m,b=a(arguments[i++]),j=d?s(b).concat(d(b)):s(b),f=j.length,_=0;f>_;)c.call(b,m=j[_++])&&(t[m]=b[m]);return t}:u},"./node_modules/core-js/library/modules/_object-sap.js":function(e,o,t){var s=t("./node_modules/core-js/library/modules/_export.js"),r=t("./node_modules/core-js/library/modules/_core.js"),n=t("./node_modules/core-js/library/modules/_fails.js");e.exports=function(e,o){var t=(r.Object||{})[e]||Object[e],l={};l[e]=o(t),s(s.S+s.F*n(function(){t(1)}),"Object",l)}},"./node_modules/core-js/library/modules/es6.object.assign.js":function(e,o,t){var s=t("./node_modules/core-js/library/modules/_export.js");s(s.S+s.F,"Object",{assign:t("./node_modules/core-js/library/modules/_object-assign.js")})},"./node_modules/core-js/library/modules/es6.object.keys.js":function(e,o,t){var s=t("./node_modules/core-js/library/modules/_to-object.js"),r=t("./node_modules/core-js/library/modules/_object-keys.js");t("./node_modules/core-js/library/modules/_object-sap.js")("keys",function(){return function(e){return r(s(e))}})},"./node_modules/gatsby-link/index.js":function(e,o,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function r(e){return e.replace(/^\/\//g,"/")}o.__esModule=!0,o.navigateTo=void 0;var n=t("./node_modules/babel-runtime/helpers/extends.js"),l=s(n),a=t("./node_modules/babel-runtime/core-js/object/keys.js"),u=s(a),i=t("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),d=s(i),c=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),m=s(c),b=t("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),j=s(b),f=t("./node_modules/babel-runtime/helpers/inherits.js"),_=s(f),p=t("./node_modules/react/react.js"),y=s(p),g=t("./node_modules/react-router-dom/index.js"),h=t("./node_modules/prop-types/index.js"),v=s(h),k="/";k="/tom-vorel-2017";var x={activeClassName:v.default.string,activeStyle:v.default.object,exact:v.default.bool,strict:v.default.bool,isActive:v.default.func,location:v.default.object},w=function(e){function o(t){(0,m.default)(this,o);var s=(0,j.default)(this,e.call(this));return s.state={to:r(k+t.to)},s}return(0,_.default)(o,e),o.prototype.componentWillReceiveProps=function(e){this.props.to!==e.to&&(this.setState({to:r(k+e.to)}),___loader.enqueue(this.state.to))},o.prototype.componentDidMount=function(){___loader.enqueue(this.state.to)},o.prototype.render=function(){var e=this,o=this.props,t=o.onClick,s=(0,d.default)(o,["onClick"]),r=void 0;return r=(0,u.default)(x).some(function(o){return e.props[o]})?g.NavLink:g.Link,y.default.createElement(r,(0,l.default)({onClick:function(o){if(t&&t(o),!(0!==o.button||e.props.target||o.defaultPrevented||o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)){var s=e.state.to;if(s.split("#").length>1&&(s=s.split("#").slice(0,-1).join("")),s===window.location.pathname){var r=e.state.to.split("#").slice(1).join("#"),n=document.getElementById(r);if(null!==n)return n.scrollIntoView(),!0}o.preventDefault(),window.___navigateTo(e.state.to)}return!0}},s,{to:this.state.to}))},o}(y.default.Component);w.propTypes=(0,l.default)({},x,{to:v.default.string.isRequired,onClick:v.default.func}),w.contextTypes={router:v.default.object},o.default=w;o.navigateTo=function(e){window.___navigateTo(r(k+e))}},'./node_modules/babel-loader/lib/index.js?{"plugins":["C:/Users/Tom/Desktop/tom-vorel-2017/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","C:/Users/Tom/Desktop/tom-vorel-2017/node_modules/babel-plugin-add-module-exports/lib/index.js","C:/Users/Tom/Desktop/tom-vorel-2017/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["C:/Users/Tom/Desktop/tom-vorel-2017/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"C:/Users/Tom/Desktop/tom-vorel-2017/node_modules/babel-preset-stage-0/lib/index.js","C:/Users/Tom/Desktop/tom-vorel-2017/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/about.js':function(e,o,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}o.__esModule=!0;var r=t("./node_modules/react/react.js"),n=s(r),l=t("./node_modules/gatsby-link/index.js"),a=(s(l),function(){return n.default.createElement("div",{className:"about__div"},n.default.createElement("h1",null,"About Page"),n.default.createElement("div",{className:"about__text"},n.default.createElement("p",null,"Hi, I'm Tom Vorel."),n.default.createElement("p",null,"I am a passionate, self-taught front end web developer from Brno, Czech Republic. I wrote my first line of code back in high school, but it wasn't until the age of 22 when I decided, that I wanted to make my passion - creating beautiful things with code my full time job. My main focus as of right now is Javascript, in particular the React ecosystem, but I also enjoy exploring the newest technologies and frameworks (e.g. Node, Angular, Vue)."),n.default.createElement("p",null,"My main passion outside of work are sports. I love running and weightlifting and I also play football from time to time. I also love watching documentaries, reading or listening to interesting podcasts while drinking a cup of coffee.")))});o.default=a,e.exports=o.default}});
//# sourceMappingURL=component---src-pages-about-js-2b52ede3aebb046b0364.js.map