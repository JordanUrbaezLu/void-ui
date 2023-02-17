/*! For license information please see components-Status-Status-stories.6bdd51d4.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkvoid_ui_library=self.webpackChunkvoid_ui_library||[]).push([[834],{"./.storybook/components/FlexColumnContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>FlexColumnContainer});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),FlexColumnContainer=function FlexColumnContainer(props){var children=props.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children})};FlexColumnContainer.displayName="FlexColumnContainer";try{FlexColumnContainer.displayName="FlexColumnContainer",FlexColumnContainer.__docgenInfo={description:"",displayName:"FlexColumnContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/FlexColumnContainer.tsx#FlexColumnContainer"]={docgenInfo:FlexColumnContainer.__docgenInfo,name:"FlexColumnContainer",path:".storybook/components/FlexColumnContainer.tsx#FlexColumnContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Status/Status.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Variant:()=>Variant,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Status_stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var FlexColumnContainer=__webpack_require__("./.storybook/components/FlexColumnContainer.tsx"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames=(__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),Status_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Status/Status.module.scss"),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(Status_module.Z,options);const Status_Status_module=Status_module.Z.locals||{};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","label","variant"],Status=function Status(props){var className=props.className,label=props.label,_props$variant=props.variant,variant=void 0===_props$variant?"offline":_props$variant,rest=(0,objectWithoutProperties.Z)(props,_excluded),title=variant.charAt(0).toUpperCase()+variant.slice(1);return(0,jsx_runtime.jsxs)("div",Object.assign({className:classnames_default()(className,Status_Status_module.statusContainer),role:"status",title},rest,{children:[(0,jsx_runtime.jsx)("span",{className:classnames_default()(Status_Status_module.status,"online"===variant&&Status_Status_module.online,"away"===variant&&Status_Status_module.away,"busy"===variant&&Status_Status_module.busy,"offline"===variant&&Status_Status_module.offline)}),label&&(0,jsx_runtime.jsx)("span",{className:classnames_default()(Status_Status_module.label,"online"===variant&&Status_Status_module.online,"away"===variant&&Status_Status_module.away,"busy"===variant&&Status_Status_module.busy,"offline"===variant&&Status_Status_module.offline),children:label})]}))};Status.displayName="Status",Status.displayName="Status";try{Status.displayName="Status",Status.__docgenInfo={description:"",displayName:"Status",props:{variant:{defaultValue:{value:'"offline"'},description:"The state of the Status",name:"variant",required:!1,type:{name:"enum",value:[{value:'"online"'},{value:'"away"'},{value:'"busy"'},{value:'"offline"'}]}},label:{defaultValue:null,description:"The label for the Status",name:"label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Status/Status.tsx#Status"]={docgenInfo:Status.__docgenInfo,name:"Status",path:"src/components/Status/Status.tsx#Status"})}catch(__react_docgen_typescript_loader_error){}const Status_stories={component:Status,title:"Components/Status"};var Variant=function Variant(){return(0,jsx_runtime.jsxs)(FlexColumnContainer.z,{children:[(0,jsx_runtime.jsx)(Status,{variant:"online",label:"Online"}),(0,jsx_runtime.jsx)(Status,{variant:"away",label:"Away"}),(0,jsx_runtime.jsx)(Status,{variant:"busy",label:"Busy"}),(0,jsx_runtime.jsx)(Status,{variant:"offline",label:"Offline"})]})};Variant.displayName="Variant",Variant.parameters=Object.assign({storySource:{source:'() => {\n  return (\n    <FlexColumnContainer>\n      <Status variant="online" label="Online" />\n      <Status variant="away" label="Away" />\n      <Status variant="busy" label="Busy" />\n      <Status variant="offline" label="Offline" />\n    </FlexColumnContainer>\n  );\n}'}},Variant.parameters);var __namedExportsOrder=["Variant"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Status/Status.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.cdnfonts.com/css/poppins);"]),___CSS_LOADER_EXPORT___.push([module.id,'.statusContainer--kK9J8{align-items:center;display:flex;font-family:"Poppins",sans-serif;width:fit-content}.status--KGdO_{border-radius:1000px;height:20px;margin:6px;position:relative;width:20px}.status--KGdO_.online--bo4nT{background-color:#42ed42;height:16px;margin:8px;width:16px}.status--KGdO_.online--bo4nT::before{animation:pulse--Ov3aF 1.2s ease infinite;background-color:#42ed42;border-radius:1000px;content:"";height:20px;left:-2px;position:absolute;top:-2px;width:20px}@keyframes pulse--Ov3aF{0%{transform:scale(1, 1)}50%{opacity:.3}100%{opacity:0;transform:scale(1.3)}}.status--KGdO_.offline--rDwzj{background-color:rgba(0,0,0,0);border:4px solid #3c3c3c;box-sizing:border-box}.status--KGdO_.away--L1g4r{background-color:#ffb833;height:14px;margin:9px;width:14px}.status--KGdO_.away--L1g4r::before{background-color:rgba(0,0,0,0);border:1px solid #ffb833;border-radius:1000px;box-sizing:border-box;content:"";display:block;height:20px;left:-3px;position:relative;top:-3px;width:20px}.status--KGdO_.busy--WjWR1{background-color:#f00000}.status--KGdO_.busy--WjWR1::before{background-color:#fff;border-radius:1000px;content:"";display:block;height:4px;left:4px;position:relative;top:8px;width:12px;z-index:1}.label--dLg2m.online--bo4nT{color:#42ed42}.label--dLg2m.offline--rDwzj{color:#3c3c3c}.label--dLg2m.away--L1g4r{color:#ffb833}.label--dLg2m.busy--WjWR1{color:#f00000}',"",{version:3,sources:["webpack://./src/components/Status/Status.module.scss","webpack://./src/utility/_globals.scss"],names:[],mappings:"AAEA,wBACE,kBAAA,CACA,YAAA,CACA,gCCUY,CDTZ,iBAAA,CAGF,eACE,oBAAA,CACA,WAAA,CACA,UAAA,CACA,iBAAA,CACA,UAAA,CAEA,6BACE,wBAAA,CACA,WAAA,CACA,UAAA,CACA,UAAA,CAGF,qCACE,yCAAA,CACA,wBAAA,CACA,oBAAA,CACA,UAAA,CACA,WAAA,CACA,SAAA,CACA,iBAAA,CACA,QAAA,CACA,UAAA,CAEA,wBACE,GACE,qBAAA,CAGF,IACE,UAAA,CAGF,KACE,SAAA,CACA,oBAAA,CAAA,CAKN,8BACE,8BAAA,CACA,wBAAA,CACA,qBAAA,CAGF,2BACE,wBAAA,CACA,WAAA,CACA,UAAA,CACA,UAAA,CAGF,mCACE,8BAAA,CACA,wBAAA,CACA,oBAAA,CACA,qBAAA,CACA,UAAA,CACA,aAAA,CACA,WAAA,CACA,SAAA,CACA,iBAAA,CACA,QAAA,CACA,UAAA,CAGF,2BACE,wBAAA,CAGF,mCACE,qBAAA,CACA,oBAAA,CACA,UAAA,CACA,aAAA,CACA,UAAA,CACA,QAAA,CACA,iBAAA,CACA,OAAA,CACA,UAAA,CACA,SAAA,CAKF,4BACE,aAAA,CAGF,6BACE,aC7FuB,CDgGzB,0BACE,aAAA,CAGF,0BACE,aAAA",sourcesContent:['@use "../../utility/globals";\n\n.statusContainer {\n  align-items: center;\n  display: flex;\n  font-family: globals.$font-family;\n  width: fit-content;\n}\n\n.status {\n  border-radius: 1000px;\n  height: 20px;\n  margin: 6px;\n  position: relative;\n  width: 20px;\n\n  &.online {\n    background-color: rgb(66 237 66);\n    height: 16px;\n    margin: 8px;\n    width: 16px;\n  }\n\n  &.online::before {\n    animation: pulse 1.2s ease infinite;\n    background-color: rgb(66 237 66);\n    border-radius: 1000px;\n    content: "";\n    height: 20px;\n    left: -2px;\n    position: absolute;\n    top: -2px;\n    width: 20px;\n\n    @keyframes pulse {\n      0% {\n        transform: scale(1, 1);\n      }\n\n      50% {\n        opacity: 0.3;\n      }\n\n      100% {\n        opacity: 0;\n        transform: scale(1.3);\n      }\n    }\n  }\n\n  &.offline {\n    background-color: transparent;\n    border: 4px solid globals.$primary-background-color;\n    box-sizing: border-box;\n  }\n\n  &.away {\n    background-color: rgb(255 184 51);\n    height: 14px;\n    margin: 9px;\n    width: 14px;\n  }\n\n  &.away::before {\n    background-color: transparent;\n    border: 1px solid rgb(255 184 51);\n    border-radius: 1000px;\n    box-sizing: border-box;\n    content: "";\n    display: block;\n    height: 20px;\n    left: -3px;\n    position: relative;\n    top: -3px;\n    width: 20px;\n  }\n\n  &.busy {\n    background-color: rgb(240 0 0);\n  }\n\n  &.busy::before {\n    background-color: white;\n    border-radius: 1000px;\n    content: "";\n    display: block;\n    height: 4px;\n    left: 4px;\n    position: relative;\n    top: 8px;\n    width: 12px;\n    z-index: 1;\n  }\n}\n\n.label {\n  &.online {\n    color: rgb(66 237 66);\n  }\n\n  &.offline {\n    color: globals.$primary-background-color;\n  }\n\n  &.away {\n    color: rgb(255 184 51);\n  }\n\n  &.busy {\n    color: rgb(240 0 0);\n  }\n}\n','@import "https://fonts.cdnfonts.com/css/poppins";\n\n$primary-color: rgb(255 183 77);\n$primary-color-pseudo-class: rgb(255 203 87);\n$secondary-color: rgb(147 51 234);\n$secondary-color-pseudo-class: rgb(160 76 240);\n$tertiary-color: darkgray;\n$tertiary-color-pseudo-class: lightgray;\n$primary-background-color: rgb(60 60 60);\n$primary-background-color-hover-and-focus: rgb(100 100 100);\n$primary-background-color-active: rgb(38 25 49);\n$primary-border-color: rgb(20 20 20);\n$primary-border-color-hover-and-focus: rgb(35 10 35);\n$primary-border-color-active: rgb(0 0 0);\n$primary-text-color: rgb(235 235 235);\n$font-family: "Poppins", sans-serif;\n$primary-box-shadow: rgb(56 20 56);\n$secondary-text-color: rgb(100 100 100);\n$secondary-text-color-hover-and-focus: rgb(38 25 49);\n$secondary-border-color-hover-and-focus: rgb(38 25 49);\n$secondary-background-color-hover-and-active: rgb(240 240 240);\n$secondary-background-color-active: rgb(238 230 240);\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={statusContainer:"statusContainer--kK9J8",status:"status--KGdO_",online:"online--bo4nT",pulse:"pulse--Ov3aF",offline:"offline--rDwzj",away:"away--L1g4r",busy:"busy--WjWR1",label:"label--dLg2m"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */"),sourceURLs=cssMapping.sources.map((function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||"").concat(source," */")}));return[content].concat(sourceURLs).concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var isOldIE=function isOldIE(){var memo;return function memorize(){return void 0===memo&&(memo=Boolean(window&&document&&document.all&&!window.atob)),memo}}(),getTarget=function getTarget(){var memo={};return function memorize(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}}(),stylesInDom=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDom.length;i++)if(stylesInDom[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var index=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3]};-1!==index?(stylesInDom[index].references++,stylesInDom[index].updater(obj)):stylesInDom.push({identifier,updater:addStyle(obj,options),references:1}),identifiers.push(identifier)}return identifiers}function insertStyleElement(options){var style=document.createElement("style"),attributes=options.attributes||{};if(void 0===attributes.nonce){var nonce=__webpack_require__.nc;nonce&&(attributes.nonce=nonce)}if(Object.keys(attributes).forEach((function(key){style.setAttribute(key,attributes[key])})),"function"==typeof options.insert)options.insert(style);else{var target=getTarget(options.insert||"head");if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}return style}var replaceText=function replaceText(){var textStore=[];return function replace(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}();function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.media?"@media ".concat(obj.media," {").concat(obj.css,"}"):obj.css;if(style.styleSheet)style.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=style.childNodes;childNodes[index]&&style.removeChild(childNodes[index]),childNodes.length?style.insertBefore(cssNode,childNodes[index]):style.appendChild(cssNode)}}function applyToTag(style,options,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media?style.setAttribute("media",media):style.removeAttribute("media"),sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),style.styleSheet)style.styleSheet.cssText=css;else{for(;style.firstChild;)style.removeChild(style.firstChild);style.appendChild(document.createTextNode(css))}}var singleton=null,singletonCounter=0;function addStyle(obj,options){var style,update,remove;if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options)),update=applyToSingletonTag.bind(null,style,styleIndex,!1),remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else style=insertStyleElement(options),update=applyToTag.bind(null,style,options),remove=function remove(){!function removeStyleElement(style){if(null===style.parentNode)return!1;style.parentNode.removeChild(style)}(style)};return update(obj),function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}module.exports=function(list,options){(options=options||{}).singleton||"boolean"==typeof options.singleton||(options.singleton=isOldIE());var lastIdentifiers=modulesToDom(list=list||[],options);return function update(newList){if(newList=newList||[],"[object Array]"===Object.prototype.toString.call(newList)){for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDom[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDom[_index].references&&(stylesInDom[_index].updater(),stylesInDom.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties});var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=(0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.Z)(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutPropertiesLoose})}}]);