(self.webpackChunkvoid_ui_library=self.webpackChunkvoid_ui_library||[]).push([[256],{"./.storybook/components/FlexRowContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>FlexRowContainer});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),FlexRowContainer=function FlexRowContainer(props){var children=props.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"20px"},children})};FlexRowContainer.displayName="FlexRowContainer";try{FlexRowContainer.displayName="FlexRowContainer",FlexRowContainer.__docgenInfo={description:"",displayName:"FlexRowContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/FlexRowContainer.tsx#FlexRowContainer"]={docgenInfo:FlexRowContainer.__docgenInfo,name:"FlexRowContainer",path:".storybook/components/FlexRowContainer.tsx#FlexRowContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/IconButton/IconButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Size:()=>Size,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _IconButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/IconButton/IconButton.tsx"),react_icons_fa__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-icons/fa/index.esm.js"),_storybook_components_FlexRowContainer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/components/FlexRowContainer.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_IconButton__WEBPACK_IMPORTED_MODULE_1__.h,title:"Components/IconButton"};var Default=function Default(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_IconButton__WEBPACK_IMPORTED_MODULE_1__.h,{content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.huN,{})})};Default.displayName="Default";var Size=function Size(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_components_FlexRowContainer__WEBPACK_IMPORTED_MODULE_2__.z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_IconButton__WEBPACK_IMPORTED_MODULE_1__.h,{content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.huN,{}),size:"small"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_IconButton__WEBPACK_IMPORTED_MODULE_1__.h,{content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.huN,{}),size:"medium"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_IconButton__WEBPACK_IMPORTED_MODULE_1__.h,{content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.huN,{}),size:"large"})]})};Size.displayName="Size",Default.parameters=Object.assign({storySource:{source:"() => <IconButton content={<FaReact />} />"}},Default.parameters),Size.parameters=Object.assign({storySource:{source:'() => {\n  return (\n    <FlexRowContainer>\n      <IconButton content={<FaReact />} size="small" />\n      <IconButton content={<FaReact />} size="medium" />\n      <IconButton content={<FaReact />} size="large" />\n    </FlexRowContainer>\n  );\n}'}},Size.parameters);var __namedExportsOrder=["Default","Size"]},"./src/components/IconButton/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>IconButton});var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=(__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js")),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),IconButton_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/IconButton/IconButton.module.scss"),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(IconButton_module.Z,options);const IconButton_IconButton_module=IconButton_module.Z.locals||{};var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["ariaLabel","className","content","size"],IconButton=react.forwardRef((function(props,ref){var _props$ariaLabel=props.ariaLabel,ariaLabel=void 0===_props$ariaLabel?"Icon Button":_props$ariaLabel,className=props.className,content=props.content,_props$size=props.size,size=void 0===_props$size?"medium":_props$size,rest=(0,objectWithoutProperties.Z)(props,_excluded),iconButtonContentClasses=classnames_default()(className,IconButton_IconButton_module.iconButton,"small"===size&&IconButton_IconButton_module.small,"medium"===size&&IconButton_IconButton_module.medium,"large"===size&&IconButton_IconButton_module.large),iconSizeNumber="medium"===size?22:"small"===size?18:26;return(0,jsx_runtime.jsx)("button",Object.assign({"aria-label":ariaLabel,className:iconButtonContentClasses,ref},rest,{children:react.cloneElement(content,{size:iconSizeNumber})}))}));IconButton.displayName="IconButton";try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{ariaLabel:{defaultValue:{value:'"Icon Button"'},description:"The accessibile label for the Icon Button",name:"ariaLabel",required:!1,type:{name:"string"}},size:{defaultValue:{value:'"medium"'},description:"The size for the IconButton",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},content:{defaultValue:null,description:'The content for the Icon Button\n@note Content must be icons from "react-icons"',name:"content",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/core-js/internals/create-html.js":(module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),requireObjectCoercible=__webpack_require__("./node_modules/core-js/internals/require-object-coercible.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),quot=/"/g,replace=uncurryThis("".replace);module.exports=function(string,tag,attribute,value){var S=toString(requireObjectCoercible(string)),p1="<"+tag;return""!==attribute&&(p1+=" "+attribute+'="'+replace(toString(value),quot,"&quot;")+'"'),p1+">"+S+"</"+tag+">"}},"./node_modules/core-js/internals/string-html-forced.js":(module,__unused_webpack_exports,__webpack_require__)=>{var fails=__webpack_require__("./node_modules/core-js/internals/fails.js");module.exports=function(METHOD_NAME){return fails((function(){var test=""[METHOD_NAME]('"');return test!==test.toLowerCase()||test.split('"').length>3}))}},"./node_modules/core-js/modules/es.string.small.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),createHTML=__webpack_require__("./node_modules/core-js/internals/create-html.js");$({target:"String",proto:!0,forced:__webpack_require__("./node_modules/core-js/internals/string-html-forced.js")("small")},{small:function small(){return createHTML(this,"small","","")}})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/IconButton/IconButton.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.cdnfonts.com/css/poppins);"]),___CSS_LOADER_EXPORT___.push([module.id,".iconButton--OZasU{background-color:#3c3c3c;border:none;border-radius:999px;color:#ebebeb;cursor:pointer;outline:none}.iconButton--OZasU.small--vCneE{max-height:32px;max-width:32px;padding:7px}.iconButton--OZasU.medium--o7PEh{max-height:38px;max-width:38px;padding:8px}.iconButton--OZasU.large--u06gk{max-height:44px;max-width:44px;padding:9px}.iconButton--OZasU:hover,.iconButton--OZasU:focus{background-color:#646464}.iconButton--OZasU:active{background-color:#261931;color:#ebebeb}","",{version:3,sources:["webpack://./src/components/IconButton/IconButton.module.scss","webpack://./src/utility/_globals.scss"],names:[],mappings:"AAEA,mBACE,wBCDyB,CDEzB,WAAA,CACA,mBAAA,CACA,aCEmB,CDDnB,cAAA,CACA,YAAA,CAEA,gCACE,eAAA,CACA,cAAA,CACA,WAAA,CAGF,iCACE,eAAA,CACA,cAAA,CACA,WAAA,CAGF,gCACE,eAAA,CACA,cAAA,CACA,WAAA,CAGF,kDAEE,wBC3BuC,CD8BzC,0BACE,wBC9B8B,CD+B9B,aC3BiB",sourcesContent:['@use "../../utility/globals";\n\n.iconButton {\n  background-color: globals.$primary-background-color;\n  border: none;\n  border-radius: 999px;\n  color: globals.$primary-text-color;\n  cursor: pointer;\n  outline: none;\n\n  &.small {\n    max-height: 32px;\n    max-width: 32px;\n    padding: 7px;\n  }\n\n  &.medium {\n    max-height: 38px;\n    max-width: 38px;\n    padding: 8px;\n  }\n\n  &.large {\n    max-height: 44px;\n    max-width: 44px;\n    padding: 9px;\n  }\n\n  &:hover,\n  &:focus {\n    background-color: globals.$primary-background-color-hover-and-focus;\n  }\n\n  &:active {\n    background-color: globals.$primary-background-color-active;\n    color: globals.$primary-text-color;\n  }\n}\n','@import "https://fonts.cdnfonts.com/css/poppins";\n\n$primary-background-color: rgb(60 60 60);\n$primary-background-color-hover-and-focus: rgb(100 100 100);\n$primary-background-color-active: rgb(38 25 49);\n$primary-border-color: rgb(20 20 20);\n$primary-border-color-hover-and-focus: rgb(35 10 35);\n$primary-border-color-active: rgb(0 0 0);\n$primary-text-color: rgb(235 235 235);\n$font-family: "Poppins", sans-serif;\n$primary-box-shadow: rgb(56 20 56);\n$secondary-text-color: rgb(100 100 100);\n$secondary-text-color-hover-and-focus: rgb(38 25 49);\n$secondary-border-color-hover-and-focus: rgb(38 25 49);\n$secondary-background-color-hover-and-active: rgb(210 210 210);\n$secondary-background-color-active: rgb(177, 154, 183);\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={iconButton:"iconButton--OZasU",small:"small--vCneE",medium:"medium--o7PEh",large:"large--u06gk"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);