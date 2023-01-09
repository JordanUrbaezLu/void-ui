/*! For license information please see components-AstroButton-AstroButton-stories.907acde9.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkastro_ui_library=self.webpackChunkastro_ui_library||[]).push([[863],{"./src/components/AstroButton/AstroButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllProps:()=>AllProps,Default:()=>Default,Disabled:()=>Disabled,Large:()=>Large,LeadingIcon:()=>LeadingIcon,LeadingIconAndTrailingIcon:()=>LeadingIconAndTrailingIcon,Medium:()=>Medium,Primary:()=>Primary,Secondary:()=>Secondary,Small:()=>Small,TrailingIcon:()=>TrailingIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var _AstroButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/AstroButton/AstroButton.tsx"),react_icons_ai__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-icons/ai/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_AstroButton__WEBPACK_IMPORTED_MODULE_3__.Z,title:"Components/AstroButton"};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_AstroButton__WEBPACK_IMPORTED_MODULE_3__.Z,Object.assign({},args,{children:"Button"}))};Template.displayName="Template";var Default=Template.bind({}),Primary=Template.bind({});Primary.args={variant:"primary"};var Secondary=Template.bind({});Secondary.args={variant:"secondary"};var Small=Template.bind({});Small.args={size:"small"};var Medium=Template.bind({});Medium.args={size:"medium"};var Large=Template.bind({});Large.args={size:"large"};var Disabled=Template.bind({});Disabled.args={disabled:!0};var LeadingIcon=Template.bind({});LeadingIcon.args={leadingIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.kyg,{})};var TrailingIcon=Template.bind({});TrailingIcon.args={trailingIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.mGl,{})};var LeadingIconAndTrailingIcon=Template.bind({});LeadingIconAndTrailingIcon.args={leadingIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.kyg,{}),trailingIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.mGl,{})};var AllProps=Template.bind({});AllProps.args={size:"large",variant:"secondary",leadingIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.kyg,{}),trailingIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.mGl,{})},Default.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroButton {...args}>Button</AstroButton>;\n}"}},Default.parameters),Primary.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroButton {...args}>Button</AstroButton>;\n}"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroButton {...args}>Button</AstroButton>;\n}"}},Secondary.parameters),Small.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroButton {...args}>Button</AstroButton>;\n}"}},Small.parameters),Medium.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroButton {...args}>Button</AstroButton>;\n}"}},Medium.parameters),Large.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroButton {...args}>Button</AstroButton>;\n}"}},Large.parameters),Disabled.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroButton {...args}>Button</AstroButton>;\n}"}},Disabled.parameters),LeadingIcon.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroButton {...args}>Button</AstroButton>;\n}"}},LeadingIcon.parameters),TrailingIcon.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroButton {...args}>Button</AstroButton>;\n}"}},TrailingIcon.parameters),LeadingIconAndTrailingIcon.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroButton {...args}>Button</AstroButton>;\n}"}},LeadingIconAndTrailingIcon.parameters),AllProps.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroButton {...args}>Button</AstroButton>;\n}"}},AllProps.parameters);var __namedExportsOrder=["Default","Primary","Secondary","Small","Medium","Large","Disabled","LeadingIcon","TrailingIcon","LeadingIconAndTrailingIcon","AllProps"]},"./src/components/AstroButton/AstroButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>AstroButton_AstroButton});__webpack_require__("./node_modules/core-js/modules/es.string.small.js");var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),AstroButton_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/AstroButton/AstroButton.module.scss"),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(AstroButton_module.Z,options);const AstroButton_AstroButton_module=AstroButton_module.Z.locals||{};var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),AstroButton=react.forwardRef((function(props,ref){var children=props.children,disabled=props.disabled,leadingIcon=props.leadingIcon,onClick=props.onClick,_props$size=props.size,size=void 0===_props$size?"medium":_props$size,trailingIcon=props.trailingIcon,type=props.type,_props$variant=props.variant,variant=void 0===_props$variant?"primary":_props$variant,classes=classnames_default()(AstroButton_AstroButton_module.astroButton,"small"===size?AstroButton_AstroButton_module.small:"large"===size?AstroButton_AstroButton_module.large:AstroButton_AstroButton_module.medium,"secondary"===variant?AstroButton_AstroButton_module.secondary:AstroButton_AstroButton_module.primary,disabled&&AstroButton_AstroButton_module.disabled),content=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[leadingIcon&&(0,jsx_runtime.jsx)("span",{className:AstroButton_AstroButton_module.leadingIcon,children:leadingIcon}),children,trailingIcon&&(0,jsx_runtime.jsx)("span",{className:AstroButton_AstroButton_module.trailingIcon,children:trailingIcon})]});return(0,jsx_runtime.jsx)("button",{className:classes,onClick,disabled,ref,type:"reset"===type?"reset":"submit"===type?"submit":"button",children:content})}));const AstroButton_AstroButton=AstroButton;try{AstroButton.displayName="AstroButton",AstroButton.__docgenInfo={description:"",displayName:"AstroButton",props:{children:{defaultValue:null,description:"The content for the AstroButton",name:"children",required:!0,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"If the AstroButton is disabled",name:"disabled",required:!1,type:{name:"boolean"}},leadingIcon:{defaultValue:null,description:"The leading icon for the AstroButton",name:"leadingIcon",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"The callback fired when the AstroButton is clicked",name:"onClick",required:!1,type:{name:"(() => void)"}},size:{defaultValue:{value:'"medium"'},description:"The size of the AstroButton",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},trailingIcon:{defaultValue:null,description:"The trailing icon for the AstroButton",name:"trailingIcon",required:!1,type:{name:"ReactNode"}},type:{defaultValue:null,description:"The type of the AstroButton",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},variant:{defaultValue:{value:'"primary"'},description:"The variant of the AstroButton",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AstroButton/AstroButton.tsx#AstroButton"]={docgenInfo:AstroButton.__docgenInfo,name:"AstroButton",path:"src/components/AstroButton/AstroButton.tsx#AstroButton"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/core-js/internals/create-html.js":(module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),requireObjectCoercible=__webpack_require__("./node_modules/core-js/internals/require-object-coercible.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),quot=/"/g,replace=uncurryThis("".replace);module.exports=function(string,tag,attribute,value){var S=toString(requireObjectCoercible(string)),p1="<"+tag;return""!==attribute&&(p1+=" "+attribute+'="'+replace(toString(value),quot,"&quot;")+'"'),p1+">"+S+"</"+tag+">"}},"./node_modules/core-js/internals/string-html-forced.js":(module,__unused_webpack_exports,__webpack_require__)=>{var fails=__webpack_require__("./node_modules/core-js/internals/fails.js");module.exports=function(METHOD_NAME){return fails((function(){var test=""[METHOD_NAME]('"');return test!==test.toLowerCase()||test.split('"').length>3}))}},"./node_modules/core-js/modules/es.string.small.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),createHTML=__webpack_require__("./node_modules/core-js/internals/create-html.js");$({target:"String",proto:!0,forced:__webpack_require__("./node_modules/core-js/internals/string-html-forced.js")("small")},{small:function small(){return createHTML(this,"small","","")}})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/AstroButton/AstroButton.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".astroButton--Lx8JE{border-radius:30px;width:fit-content;font-family:Verdana,Geneva,Tahoma,sans-serif;display:flex;flex-direction:row;align-items:center;column-gap:5px}.astroButton--Lx8JE:hover{cursor:pointer}.primary--t6z08{background-color:#ffb74d;color:#000;border:2px solid #ffb74d}.primary--t6z08:hover{color:#9333ea;border:2px solid #9333ea}.primary--t6z08:active{background:#ffcb57}.secondary--lEbco{background-color:#9333ea;color:#000;border:2px solid #9333ea}.secondary--lEbco:hover{color:#ffb74d;border:2px solid #ffb74d}.secondary--lEbco:active{background:#a04cf0}.small--X5YgG{font-size:12px;padding:6px 8px}.small--X5YgG .leadingIcon--zRl5V,.small--X5YgG .trailingIcon--Y1EXn{height:12px}.medium--KMxPy{font-size:16px;padding:8px 10px}.medium--KMxPy .leadingIcon--zRl5V,.medium--KMxPy .trailingIcon--Y1EXn{height:16px}.large--kv5xa{font-size:20px;padding:10px 12px}.large--kv5xa .leadingIcon--zRl5V,.large--kv5xa .trailingIcon--Y1EXn{height:20px}.disabled--Hz_uG{color:gray !important;border:2px solid gray !important;background:rgba(0,0,0,.1) !important;cursor:default !important}","",{version:3,sources:["webpack://./src/components/AstroButton/AstroButton.module.scss","webpack://./src/utility/_globals.scss"],names:[],mappings:"AAEA,oBACE,kBAAA,CACA,iBAAA,CACA,4CAAA,CAIA,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,cAAA,CANA,0BACE,cAAA,CAQJ,gBACE,wBCfc,CDgBd,UAAA,CACA,wBAAA,CACA,sBACE,aCjBc,CDkBd,wBAAA,CAEF,uBACE,kBCtByB,CD0B7B,kBACE,wBC1BgB,CD2BhB,UAAA,CACA,wBAAA,CACA,wBACE,aChCY,CDiCZ,wBAAA,CAEF,yBACE,kBCjC2B,CDqC/B,cACE,cAAA,CACA,eAAA,CACA,qEAEE,WAAA,CAIJ,eACE,cAAA,CACA,gBAAA,CACA,uEAEE,WAAA,CAIJ,cACE,cAAA,CACA,iBAAA,CACA,qEAEE,WAAA,CAIJ,iBACE,qBAAA,CACA,gCAAA,CACA,oCAAA,CACA,yBAAA",sourcesContent:['@use "../../utility/globals";\n\n.astroButton {\n  border-radius: 30px;\n  width: fit-content;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  &:hover {\n    cursor: pointer;\n  }\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  column-gap: 5px;\n}\n\n.primary {\n  background-color: globals.$primary-color;\n  color: black;\n  border: 2px solid globals.$primary-color;\n  &:hover {\n    color: globals.$secondary-color;\n    border: 2px solid globals.$secondary-color;\n  }\n  &:active {\n    background: globals.$primary-color-pseudo-class;\n  }\n}\n\n.secondary {\n  background-color: globals.$secondary-color;\n  color: black;\n  border: 2px solid globals.$secondary-color;\n  &:hover {\n    color: globals.$primary-color;\n    border: 2px solid globals.$primary-color;\n  }\n  &:active {\n    background: globals.$secondary-color-pseudo-class;\n  }\n}\n\n.small {\n  font-size: 12px;\n  padding: 6px 8px;\n  .leadingIcon,\n  .trailingIcon {\n    height: 12px;\n  }\n}\n\n.medium {\n  font-size: 16px;\n  padding: 8px 10px;\n  .leadingIcon,\n  .trailingIcon {\n    height: 16px;\n  }\n}\n\n.large {\n  font-size: 20px;\n  padding: 10px 12px;\n  .leadingIcon,\n  .trailingIcon {\n    height: 20px;\n  }\n}\n\n.disabled {\n  color: gray !important;\n  border: 2px solid gray !important;\n  background: rgb(0, 0, 0, 0.1) !important;\n  cursor: default !important;\n}\n',"// TODO: Adjust color for improved consistency and design\n$primary-color: rgb(255, 183, 77);\n$primary-color-pseudo-class: rgb(255, 203, 87);\n$secondary-color: rgb(147 51 234);\n$secondary-color-pseudo-class: rgb(160, 76, 240);\n$tertiary-color: darkgray;\n$tertiary-color-pseudo-class: lightgray;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={astroButton:"astroButton--Lx8JE",primary:"primary--t6z08",secondary:"secondary--lEbco",small:"small--X5YgG",leadingIcon:"leadingIcon--zRl5V",trailingIcon:"trailingIcon--Y1EXn",medium:"medium--KMxPy",large:"large--kv5xa",disabled:"disabled--Hz_uG"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */"),sourceURLs=cssMapping.sources.map((function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||"").concat(source," */")}));return[content].concat(sourceURLs).concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var isOldIE=function isOldIE(){var memo;return function memorize(){return void 0===memo&&(memo=Boolean(window&&document&&document.all&&!window.atob)),memo}}(),getTarget=function getTarget(){var memo={};return function memorize(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}}(),stylesInDom=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDom.length;i++)if(stylesInDom[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var index=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3]};-1!==index?(stylesInDom[index].references++,stylesInDom[index].updater(obj)):stylesInDom.push({identifier,updater:addStyle(obj,options),references:1}),identifiers.push(identifier)}return identifiers}function insertStyleElement(options){var style=document.createElement("style"),attributes=options.attributes||{};if(void 0===attributes.nonce){var nonce=__webpack_require__.nc;nonce&&(attributes.nonce=nonce)}if(Object.keys(attributes).forEach((function(key){style.setAttribute(key,attributes[key])})),"function"==typeof options.insert)options.insert(style);else{var target=getTarget(options.insert||"head");if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}return style}var replaceText=function replaceText(){var textStore=[];return function replace(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}();function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.media?"@media ".concat(obj.media," {").concat(obj.css,"}"):obj.css;if(style.styleSheet)style.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=style.childNodes;childNodes[index]&&style.removeChild(childNodes[index]),childNodes.length?style.insertBefore(cssNode,childNodes[index]):style.appendChild(cssNode)}}function applyToTag(style,options,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media?style.setAttribute("media",media):style.removeAttribute("media"),sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),style.styleSheet)style.styleSheet.cssText=css;else{for(;style.firstChild;)style.removeChild(style.firstChild);style.appendChild(document.createTextNode(css))}}var singleton=null,singletonCounter=0;function addStyle(obj,options){var style,update,remove;if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options)),update=applyToSingletonTag.bind(null,style,styleIndex,!1),remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else style=insertStyleElement(options),update=applyToTag.bind(null,style,options),remove=function remove(){!function removeStyleElement(style){if(null===style.parentNode)return!1;style.parentNode.removeChild(style)}(style)};return update(obj),function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}module.exports=function(list,options){(options=options||{}).singleton||"boolean"==typeof options.singleton||(options.singleton=isOldIE());var lastIdentifiers=modulesToDom(list=list||[],options);return function update(newList){if(newList=newList||[],"[object Array]"===Object.prototype.toString.call(newList)){for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDom[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDom[_index].references&&(stylesInDom[_index].updater(),stylesInDom.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}}}}]);