/*! For license information please see components-Switch-Switch-stories.7543da7b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkvoid_ui_library=self.webpackChunkvoid_ui_library||[]).push([[311],{"./.storybook/utilities/allowLayoutCalculations.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>allowLayoutCalculations});__webpack_require__("./node_modules/core-js/modules/web.timers.js");var allowLayoutCalculations=function allowLayoutCalculations(callback){setTimeout(callback,500)};try{allowLayoutCalculations.displayName="allowLayoutCalculations",allowLayoutCalculations.__docgenInfo={description:"",displayName:"allowLayoutCalculations",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utilities/allowLayoutCalculations.tsx#allowLayoutCalculations"]={docgenInfo:allowLayoutCalculations.__docgenInfo,name:"allowLayoutCalculations",path:".storybook/utilities/allowLayoutCalculations.tsx#allowLayoutCalculations"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Switch/Switch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Switch_stories});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js")),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),Switch_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Switch/Switch.module.scss"),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(Switch_module.Z,options);const Switch_Switch_module=Switch_module.Z.locals||{};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","isOn","label"],Switch=function Switch(props){var className=props.className,_props$isOn=props.isOn,isOn=void 0!==_props$isOn&&_props$isOn,label=props.label,rest=(0,objectWithoutProperties.Z)(props,_excluded);return(0,jsx_runtime.jsxs)("button",Object.assign({"aria-checked":isOn,className:classnames_default()(className,Switch_Switch_module.switchPill,isOn&&Switch_Switch_module.on),role:"switch",type:"button"},rest,{children:[(0,jsx_runtime.jsx)("span",{className:classnames_default()(Switch_Switch_module.switchIndicator,isOn&&Switch_Switch_module.on)}),label&&(0,jsx_runtime.jsx)(Typography.Z,{className:classnames_default()(Switch_Switch_module.switchLabel,isOn&&Switch_Switch_module.on),children:label})]}))};Switch.displayName="Switch",Switch.displayName="Switch";try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{isOn:{defaultValue:{value:"false"},description:"If the Switch is on",name:"isOn",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label for the Switch",name:"label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Switch/Switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/components/Switch/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}var esm=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"),allowLayoutCalculations=__webpack_require__("./.storybook/utilities/allowLayoutCalculations.tsx");const Switch_stories={component:Switch,parameters:{chromatic:{delay:2e3}},title:"Components/Switch"};var Template=function Template(args){var _React$useState=react.useState(!1),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),switchState=_React$useState2[0],toggleSwitchState=_React$useState2[1];return(0,jsx_runtime.jsx)(Switch,Object.assign({},args,{isOn:switchState,onClick:function onClick(){return toggleSwitchState(!switchState)}}))};Template.displayName="Template";var Default=Template.bind({}),WithLabel=Template.bind({});WithLabel.args={label:" Switch Label"},WithLabel.play=function(_ref){var canvasElement=_ref.canvasElement,canvas=(0,esm.uh)(canvasElement);(0,allowLayoutCalculations.z)((function(){return esm.mV.click(canvas.getByRole("switch"))}))},Default.parameters=Object.assign({storySource:{source:"(\n  args\n) => {\n  const [switchState, toggleSwitchState] =\n    React.useState<boolean>(false);\n\n  return (\n    <Switch\n      {...args}\n      isOn={switchState}\n      onClick={() => toggleSwitchState(!switchState)}\n    />\n  );\n}"}},Default.parameters),WithLabel.parameters=Object.assign({storySource:{source:"(\n  args\n) => {\n  const [switchState, toggleSwitchState] =\n    React.useState<boolean>(false);\n\n  return (\n    <Switch\n      {...args}\n      isOn={switchState}\n      onClick={() => toggleSwitchState(!switchState)}\n    />\n  );\n}"}},WithLabel.parameters);var __namedExportsOrder=["Default","WithLabel"]},"./src/components/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Typography});var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames=(__webpack_require__("./node_modules/core-js/modules/es.string.bold.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),Typography_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss"),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(Typography_module.Z,options);const Typography_Typography_module=Typography_module.Z.locals||{};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","className","type","variant","weight"],Typography=function Typography(props){var children=props.children,className=props.className,_props$type=props.type,type=void 0===_props$type?"h2":_props$type,_props$variant=props.variant,variant=void 0===_props$variant?"primary":_props$variant,_props$weight=props.weight,weight=void 0===_props$weight?"normal":_props$weight,rest=(0,objectWithoutProperties.Z)(props,_excluded);return(0,jsx_runtime.jsx)("div",Object.assign({className:classnames_default()(className,Typography_Typography_module.typography,"h1"===type&&Typography_Typography_module.typographyH1,"h2"===type&&Typography_Typography_module.typographyH2,"h3"===type&&Typography_Typography_module.typographyH3,"primary"===variant&&Typography_Typography_module.primary,"secondary"===variant&&Typography_Typography_module.secondary,"light"===weight&&Typography_Typography_module.light,"normal"===weight&&Typography_Typography_module.normal,"bold"===weight&&Typography_Typography_module.bold)},rest,{children}))};Typography.displayName="Typography";try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{children:{defaultValue:null,description:"The content for the Typography",name:"children",required:!0,type:{name:"ReactNode"}},type:{defaultValue:{value:'"h2"'},description:"The variant for the Typography",name:"type",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},variant:{defaultValue:{value:'"primary"'},description:"The text color for the Typography",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},weight:{defaultValue:{value:'"normal"'},description:"The font weight for the Typography",name:"weight",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"normal"'},{value:'"bold"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Typography.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"src/components/Typography/Typography.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/core-js/internals/create-html.js":(module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),requireObjectCoercible=__webpack_require__("./node_modules/core-js/internals/require-object-coercible.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),quot=/"/g,replace=uncurryThis("".replace);module.exports=function(string,tag,attribute,value){var S=toString(requireObjectCoercible(string)),p1="<"+tag;return""!==attribute&&(p1+=" "+attribute+'="'+replace(toString(value),quot,"&quot;")+'"'),p1+">"+S+"</"+tag+">"}},"./node_modules/core-js/internals/string-html-forced.js":(module,__unused_webpack_exports,__webpack_require__)=>{var fails=__webpack_require__("./node_modules/core-js/internals/fails.js");module.exports=function(METHOD_NAME){return fails((function(){var test=""[METHOD_NAME]('"');return test!==test.toLowerCase()||test.split('"').length>3}))}},"./node_modules/core-js/modules/es.string.bold.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),createHTML=__webpack_require__("./node_modules/core-js/internals/create-html.js");$({target:"String",proto:!0,forced:__webpack_require__("./node_modules/core-js/internals/string-html-forced.js")("bold")},{bold:function bold(){return createHTML(this,"b","","")}})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Switch/Switch.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.cdnfonts.com/css/poppins);"]),___CSS_LOADER_EXPORT___.push([module.id,'.switchPill--yBHbB{align-items:center;background:none;border:0;cursor:pointer;display:flex;margin:0;outline:none;padding:0}.switchIndicator--OmpUh{background:gray;border-radius:999px;height:22px;position:relative;transition:all .15s ease-in;width:42px}.switchIndicator--OmpUh::before{background:#fff;border-radius:999px;content:"";display:inline-block;height:16px;position:absolute;right:23px;top:3px;transition:all .15s ease-in;width:16px}.switchIndicator--OmpUh.on--Vp0yn{background:#261931}.switchIndicator--OmpUh.on--Vp0yn::before{background-color:#b19ab7;transform:translateX(20px)}.switchLabel--jy2vy{color:gray !important;margin-left:8px;transition:all .15s ease-in}.switchLabel--jy2vy.on--Vp0yn{color:#261931 !important}',"",{version:3,sources:["webpack://./src/components/Switch/Switch.module.scss","webpack://./src/utility/_globals.scss"],names:[],mappings:"AAEA,mBACE,kBAAA,CACA,eAAA,CACA,QAAA,CACA,cAAA,CACA,YAAA,CACA,QAAA,CACA,YAAA,CACA,SAAA,CAGF,wBACE,eAAA,CACA,mBAAA,CACA,WAAA,CACA,iBAAA,CACA,2BAAA,CACA,UAAA,CAEA,gCACE,eAAA,CACA,mBAAA,CACA,UAAA,CACA,oBAAA,CACA,WAAA,CACA,iBAAA,CACA,UAAA,CACA,OAAA,CACA,2BAAA,CACA,UAAA,CAGF,kCACE,kBCtBqC,CDwBrC,0CACE,wBCvB8B,CDwB9B,0BAAA,CAKN,oBACE,qBAAA,CACA,eAAA,CACA,2BAAA,CAEA,8BACE,wBAAA",sourcesContent:['@use "../../utility/globals";\n\n.switchPill {\n  align-items: center;\n  background: none;\n  border: 0;\n  cursor: pointer;\n  display: flex;\n  margin: 0;\n  outline: none;\n  padding: 0;\n}\n\n.switchIndicator {\n  background: gray;\n  border-radius: 999px;\n  height: 22px;\n  position: relative;\n  transition: all 0.15s ease-in;\n  width: 42px;\n\n  &::before {\n    background: white;\n    border-radius: 999px;\n    content: "";\n    display: inline-block;\n    height: 16px;\n    position: absolute;\n    right: 23px;\n    top: 3px;\n    transition: all 0.15s ease-in;\n    width: 16px;\n  }\n\n  &.on {\n    background: globals.$secondary-border-color-hover-and-focus;\n\n    &::before {\n      background-color: globals.$secondary-background-color-active;\n      transform: translateX(20px);\n    }\n  }\n}\n\n.switchLabel {\n  color: gray !important;\n  margin-left: 8px;\n  transition: all 0.15s ease-in;\n\n  &.on {\n    color: globals.$secondary-text-color-hover-and-focus !important;\n  }\n}\n','@import "https://fonts.cdnfonts.com/css/poppins";\n\n$primary-background-color: rgb(60 60 60);\n$primary-background-color-hover-and-focus: rgb(100 100 100);\n$primary-background-color-active: rgb(38 25 49);\n$primary-border-color: rgb(20 20 20);\n$primary-border-color-hover-and-focus: rgb(35 10 35);\n$primary-border-color-active: rgb(0 0 0);\n$primary-text-color: rgb(235 235 235);\n$font-family: "Poppins", sans-serif;\n$primary-box-shadow: rgb(56 20 56);\n$secondary-text-color: rgb(100 100 100);\n$secondary-text-color-hover-and-focus: rgb(38 25 49);\n$secondary-border-color-hover-and-focus: rgb(38 25 49);\n$secondary-background-color-hover-and-active: rgb(210 210 210);\n$secondary-background-color-active: rgb(177, 154, 183);\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={switchPill:"switchPill--yBHbB",switchIndicator:"switchIndicator--OmpUh",on:"on--Vp0yn",switchLabel:"switchLabel--jy2vy"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.cdnfonts.com/css/poppins);"]),___CSS_LOADER_EXPORT___.push([module.id,'.typography--xwaT_{font-family:"Poppins",sans-serif}.typography--xwaT_.primary--FgmIu{color:#ebebeb}.typography--xwaT_.secondary--L54i0{color:#646464}.typography--xwaT_.typographyH1--sFmZI{font-size:20px}.typography--xwaT_.typographyH2--1cL83{font-size:16px}.typography--xwaT_.typographyH3--kqJ_V{font-size:12px}.typography--xwaT_.light--t2psN{font-weight:100}.typography--xwaT_.normal--htVLZ{font-weight:400}.typography--xwaT_.bold--lCzjq{font-weight:700}',"",{version:3,sources:["webpack://./src/components/Typography/Typography.module.scss","webpack://./src/utility/_globals.scss"],names:[],mappings:"AAEA,mBACE,gCCMY,CDJZ,kCACE,aCEiB,CDCnB,oCACE,aCCmB,CDErB,uCACE,cAAA,CAGF,uCACE,cAAA,CAGF,uCACE,cAAA,CAGF,gCACE,eAAA,CAGF,iCACE,eAAA,CAGF,+BACE,eAAA",sourcesContent:['@use "../../utility/globals";\n\n.typography {\n  font-family: globals.$font-family;\n\n  &.primary {\n    color: globals.$primary-text-color;\n  }\n\n  &.secondary {\n    color: globals.$secondary-text-color;\n  }\n\n  &.typographyH1 {\n    font-size: 20px;\n  }\n\n  &.typographyH2 {\n    font-size: 16px;\n  }\n\n  &.typographyH3 {\n    font-size: 12px;\n  }\n\n  &.light {\n    font-weight: 100;\n  }\n\n  &.normal {\n    font-weight: 400;\n  }\n\n  &.bold {\n    font-weight: 700;\n  }\n}\n','@import "https://fonts.cdnfonts.com/css/poppins";\n\n$primary-background-color: rgb(60 60 60);\n$primary-background-color-hover-and-focus: rgb(100 100 100);\n$primary-background-color-active: rgb(38 25 49);\n$primary-border-color: rgb(20 20 20);\n$primary-border-color-hover-and-focus: rgb(35 10 35);\n$primary-border-color-active: rgb(0 0 0);\n$primary-text-color: rgb(235 235 235);\n$font-family: "Poppins", sans-serif;\n$primary-box-shadow: rgb(56 20 56);\n$secondary-text-color: rgb(100 100 100);\n$secondary-text-color-hover-and-focus: rgb(38 25 49);\n$secondary-border-color-hover-and-focus: rgb(38 25 49);\n$secondary-background-color-hover-and-active: rgb(210 210 210);\n$secondary-background-color-active: rgb(177, 154, 183);\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={typography:"typography--xwaT_",primary:"primary--FgmIu",secondary:"secondary--L54i0",typographyH1:"typographyH1--sFmZI",typographyH2:"typographyH2--1cL83",typographyH3:"typographyH3--kqJ_V",light:"light--t2psN",normal:"normal--htVLZ",bold:"bold--lCzjq"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */"),sourceURLs=cssMapping.sources.map((function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||"").concat(source," */")}));return[content].concat(sourceURLs).concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var isOldIE=function isOldIE(){var memo;return function memorize(){return void 0===memo&&(memo=Boolean(window&&document&&document.all&&!window.atob)),memo}}(),getTarget=function getTarget(){var memo={};return function memorize(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}}(),stylesInDom=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDom.length;i++)if(stylesInDom[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var index=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3]};-1!==index?(stylesInDom[index].references++,stylesInDom[index].updater(obj)):stylesInDom.push({identifier,updater:addStyle(obj,options),references:1}),identifiers.push(identifier)}return identifiers}function insertStyleElement(options){var style=document.createElement("style"),attributes=options.attributes||{};if(void 0===attributes.nonce){var nonce=__webpack_require__.nc;nonce&&(attributes.nonce=nonce)}if(Object.keys(attributes).forEach((function(key){style.setAttribute(key,attributes[key])})),"function"==typeof options.insert)options.insert(style);else{var target=getTarget(options.insert||"head");if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}return style}var replaceText=function replaceText(){var textStore=[];return function replace(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}();function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.media?"@media ".concat(obj.media," {").concat(obj.css,"}"):obj.css;if(style.styleSheet)style.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=style.childNodes;childNodes[index]&&style.removeChild(childNodes[index]),childNodes.length?style.insertBefore(cssNode,childNodes[index]):style.appendChild(cssNode)}}function applyToTag(style,options,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media?style.setAttribute("media",media):style.removeAttribute("media"),sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),style.styleSheet)style.styleSheet.cssText=css;else{for(;style.firstChild;)style.removeChild(style.firstChild);style.appendChild(document.createTextNode(css))}}var singleton=null,singletonCounter=0;function addStyle(obj,options){var style,update,remove;if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options)),update=applyToSingletonTag.bind(null,style,styleIndex,!1),remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else style=insertStyleElement(options),update=applyToTag.bind(null,style,options),remove=function remove(){!function removeStyleElement(style){if(null===style.parentNode)return!1;style.parentNode.removeChild(style)}(style)};return update(obj),function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}module.exports=function(list,options){(options=options||{}).singleton||"boolean"==typeof options.singleton||(options.singleton=isOldIE());var lastIdentifiers=modulesToDom(list=list||[],options);return function update(newList){if(newList=newList||[],"[object Array]"===Object.prototype.toString.call(newList)){for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDom[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDom[_index].references&&(stylesInDom[_index].updater(),stylesInDom.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}}},"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties});var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=(0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.Z)(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutPropertiesLoose})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}}}]);