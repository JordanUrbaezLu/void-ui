/*! For license information please see components-AstroTextField-AstroTextField-stories.9374f21f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkastro_ui_library=self.webpackChunkastro_ui_library||[]).push([[497],{"./src/components/AstroTextField/AstroTextField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllProps:()=>AllProps,Default:()=>Default,DisabledAndLabel:()=>DisabledAndLabel,Label:()=>Label,Large:()=>Large,Medium:()=>Medium,PasswordType:()=>PasswordType,Primary:()=>Primary,Secondary:()=>Secondary,Small:()=>Small,Tertiary:()=>Tertiary,TrailingIcon:()=>TrailingIcon,TrailingIconAndPasswordType:()=>TrailingIconAndPasswordType,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-icons/ai/index.esm.js"),_AstroTextField__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/AstroTextField/AstroTextField.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/AstroTextField",component:_AstroTextField__WEBPACK_IMPORTED_MODULE_3__.Z};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_AstroTextField__WEBPACK_IMPORTED_MODULE_3__.Z,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({}),Primary=Template.bind({});Primary.args={variant:"primary"};var Secondary=Template.bind({});Secondary.args={variant:"secondary"};var Tertiary=Template.bind({});Tertiary.args={variant:"tertiary"};var Small=Template.bind({});Small.args={size:"small"};var Medium=Template.bind({});Medium.args={size:"medium"};var Large=Template.bind({});Large.args={size:"large"};var Label=Template.bind({});Label.args={label:"AstroTextField"};var DisabledAndLabel=Template.bind({});DisabledAndLabel.args={disabled:!0,label:"Disabled"};var TrailingIcon=Template.bind({});TrailingIcon.args={trailingIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.mGl,{})};var PasswordType=Template.bind({});PasswordType.args={type:"password"};var TrailingIconAndPasswordType=Template.bind({});TrailingIconAndPasswordType.args={type:"password",trailingIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.w8I,{})};var AllProps=Template.bind({});AllProps.args={variant:"secondary",size:"small",type:"password",trailingIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.w8I,{}),label:"AstroTextField"},Default.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroTextField {...args} />;\n}"}},Default.parameters),Primary.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroTextField {...args} />;\n}"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroTextField {...args} />;\n}"}},Secondary.parameters),Tertiary.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroTextField {...args} />;\n}"}},Tertiary.parameters),Small.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroTextField {...args} />;\n}"}},Small.parameters),Medium.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroTextField {...args} />;\n}"}},Medium.parameters),Large.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroTextField {...args} />;\n}"}},Large.parameters),Label.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroTextField {...args} />;\n}"}},Label.parameters),DisabledAndLabel.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroTextField {...args} />;\n}"}},DisabledAndLabel.parameters),TrailingIcon.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroTextField {...args} />;\n}"}},TrailingIcon.parameters),PasswordType.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroTextField {...args} />;\n}"}},PasswordType.parameters),TrailingIconAndPasswordType.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroTextField {...args} />;\n}"}},TrailingIconAndPasswordType.parameters),AllProps.parameters=Object.assign({storySource:{source:"(args) => {\n  return <AstroTextField {...args} />;\n}"}},AllProps.parameters);var __namedExportsOrder=["Default","Primary","Secondary","Tertiary","Small","Medium","Large","Label","DisabledAndLabel","TrailingIcon","PasswordType","TrailingIconAndPasswordType","AllProps"]},"./src/components/AstroTextField/AstroTextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>AstroTextField_AstroTextField});__webpack_require__("./node_modules/core-js/modules/es.string.small.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),AstroTextField_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/AstroTextField/AstroTextField.module.scss"),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(AstroTextField_module.Z,options);const AstroTextField_AstroTextField_module=AstroTextField_module.Z.locals||{};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),AstroTextField=function AstroTextField(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"primary":_ref$variant,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,trailingIcon=_ref.trailingIcon,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$type=_ref.type,type=void 0===_ref$type?"text":_ref$type,_ref$label=_ref.label,label=void 0===_ref$label?"textfield":_ref$label,value=_ref.value,inputContainer=classnames_default()(AstroTextField_AstroTextField_module.astroTextFieldContainer,disabled&&AstroTextField_AstroTextField_module.disabled),classes=classnames_default()(AstroTextField_AstroTextField_module.astroTextField,"primary"===variant&&AstroTextField_AstroTextField_module.primary,"secondary"===variant&&AstroTextField_AstroTextField_module.secondary,"tertiary"===variant&&AstroTextField_AstroTextField_module.tertiary,"small"===size&&AstroTextField_AstroTextField_module.small,"medium"===size&&AstroTextField_AstroTextField_module.medium,"large"===size&&AstroTextField_AstroTextField_module.large,disabled&&AstroTextField_AstroTextField_module.disabled),iconClasses=classnames_default()(AstroTextField_AstroTextField_module.icon,"small"===size&&AstroTextField_AstroTextField_module.iconSmall,"medium"===size&&AstroTextField_AstroTextField_module.iconMedium,"large"===size&&AstroTextField_AstroTextField_module.iconLarge,disabled&&AstroTextField_AstroTextField_module.disabled),labelClasses=classnames_default()(AstroTextField_AstroTextField_module.label,"small"===size&&AstroTextField_AstroTextField_module.labelSmall,"medium"===size&&AstroTextField_AstroTextField_module.labelMedium,"large"===size&&AstroTextField_AstroTextField_module.labelLarge,disabled&&AstroTextField_AstroTextField_module.disabledLabel);return(0,jsx_runtime.jsxs)("div",{className:AstroTextField_AstroTextField_module.container,children:[(0,jsx_runtime.jsxs)("div",{className:inputContainer,children:[(0,jsx_runtime.jsx)("input",{"aria-label":label,className:classes,disabled,required:!0,type,value}),"textfield"!==label&&(0,jsx_runtime.jsx)("span",{className:labelClasses,children:label})]}),trailingIcon&&(0,jsx_runtime.jsx)("span",{className:iconClasses,children:trailingIcon})]})};AstroTextField.displayName="AstroTextField";const AstroTextField_AstroTextField=AstroTextField;try{AstroTextField.displayName="AstroTextField",AstroTextField.__docgenInfo={description:"",displayName:"AstroTextField",props:{disabled:{defaultValue:{value:"false"},description:"If the AstroTextField is disabled",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"textfield"},description:"The accessible label for the AstroTextField",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"The size of the AstroTextField",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},trailingIcon:{defaultValue:null,description:"The trailing icon for the AstroTextField",name:"trailingIcon",required:!1,type:{name:"ReactNode"}},type:{defaultValue:{value:"text"},description:"The type for the input in the AstroTextField",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"email"'},{value:'"password"'},{value:'"search"'},{value:'"tel"'},{value:'"time"'},{value:'"url"'}]}},value:{defaultValue:null,description:"The value for the AstroTextField",name:"value",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"The variant for the AstroTextField",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AstroTextField/AstroTextField.tsx#AstroTextField"]={docgenInfo:AstroTextField.__docgenInfo,name:"AstroTextField",path:"src/components/AstroTextField/AstroTextField.tsx#AstroTextField"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/AstroTextField/AstroTextField.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".container--LcEEl{display:flex;flex-direction:row}.astroTextFieldContainer--bNqDY{display:flex;flex-direction:column;font-family:Verdana,Geneva,Tahoma,sans-serif}.astroTextFieldContainer--bNqDY .disabled--xOyny{border:3px solid #dcdcdc !important;cursor:default !important;background-color:#dcdcdc}.astroTextField--DH6me{outline:none}.astroTextField--DH6me.primary--aeU8c{border:3px solid #ffb74d}.astroTextField--DH6me.primary--aeU8c:focus{border:3px solid #ffcb57}.astroTextField--DH6me.primary--aeU8c.small--WCSUc{border-radius:6px;font-size:12px;padding:4px}.astroTextField--DH6me.primary--aeU8c.small--WCSUc:focus~.label--wqMM5,.astroTextField--DH6me.primary--aeU8c.small--WCSUc:valid~.label--wqMM5{transform:translateX(-6px) translateY(-12px) scale(0.8);color:#ffb74d}.astroTextField--DH6me.primary--aeU8c.medium--_J444{border-radius:8px;font-size:18px;padding:6px}.astroTextField--DH6me.primary--aeU8c.medium--_J444:focus~.label--wqMM5,.astroTextField--DH6me.primary--aeU8c.medium--_J444:valid~.label--wqMM5{transform:translateX(-9px) translateY(-18px) scale(0.8);color:#ffb74d}.astroTextField--DH6me.primary--aeU8c.large--aIvg4{border-radius:10px;font-size:24px;padding:8px}.astroTextField--DH6me.primary--aeU8c.large--aIvg4:focus~.label--wqMM5,.astroTextField--DH6me.primary--aeU8c.large--aIvg4:valid~.label--wqMM5{transform:translateX(-12px) translateY(-24px) scale(0.8);color:#ffb74d}.astroTextField--DH6me.secondary--vg2CO{border:3px solid #9333ea}.astroTextField--DH6me.secondary--vg2CO:focus{border:3px solid #a04cf0}.astroTextField--DH6me.secondary--vg2CO.small--WCSUc{border-radius:6px;font-size:12px;padding:4px}.astroTextField--DH6me.secondary--vg2CO.small--WCSUc:focus~.label--wqMM5,.astroTextField--DH6me.secondary--vg2CO.small--WCSUc:valid~.label--wqMM5{transform:translateX(-6px) translateY(-12px) scale(0.8);color:#9333ea}.astroTextField--DH6me.secondary--vg2CO.medium--_J444{border-radius:8px;font-size:18px;padding:6px}.astroTextField--DH6me.secondary--vg2CO.medium--_J444:focus~.label--wqMM5,.astroTextField--DH6me.secondary--vg2CO.medium--_J444:valid~.label--wqMM5{transform:translateX(-9px) translateY(-18px) scale(0.8);color:#9333ea}.astroTextField--DH6me.secondary--vg2CO.large--aIvg4{border-radius:10px;font-size:24px;padding:8px}.astroTextField--DH6me.secondary--vg2CO.large--aIvg4:focus~.label--wqMM5,.astroTextField--DH6me.secondary--vg2CO.large--aIvg4:valid~.label--wqMM5{transform:translateX(-12px) translateY(-24px) scale(0.8);color:#9333ea}.astroTextField--DH6me.tertiary--B9wDg{border:3px solid #a9a9a9}.astroTextField--DH6me.tertiary--B9wDg:focus{border:3px solid #d3d3d3}.astroTextField--DH6me.tertiary--B9wDg.small--WCSUc{border-radius:6px;font-size:12px;padding:4px}.astroTextField--DH6me.tertiary--B9wDg.small--WCSUc:focus~.label--wqMM5,.astroTextField--DH6me.tertiary--B9wDg.small--WCSUc:valid~.label--wqMM5{transform:translateX(-6px) translateY(-12px) scale(0.8);color:#a9a9a9}.astroTextField--DH6me.tertiary--B9wDg.medium--_J444{border-radius:8px;font-size:18px;padding:6px}.astroTextField--DH6me.tertiary--B9wDg.medium--_J444:focus~.label--wqMM5,.astroTextField--DH6me.tertiary--B9wDg.medium--_J444:valid~.label--wqMM5{transform:translateX(-9px) translateY(-18px) scale(0.8);color:#a9a9a9}.astroTextField--DH6me.tertiary--B9wDg.large--aIvg4{border-radius:10px;font-size:24px;padding:8px}.astroTextField--DH6me.tertiary--B9wDg.large--aIvg4:focus~.label--wqMM5,.astroTextField--DH6me.tertiary--B9wDg.large--aIvg4:valid~.label--wqMM5{transform:translateX(-12px) translateY(-24px) scale(0.8);color:#a9a9a9}.icon--BmsYt{display:flex;align-items:center;cursor:pointer;user-select:none}.icon--BmsYt.iconSmall--TFjy8{font-size:21px;padding:1px}.icon--BmsYt.iconMedium--mJGAQ{font-size:28px;padding:3px}.icon--BmsYt.iconLarge--g9k0V{font-size:35px;padding:5px}.label--wqMM5{position:absolute;transition:all .2s ease-in;color:#737373;pointer-events:none;background-color:#fff}.label--wqMM5.labelSmall--mAZ6E{margin-left:6px;font-size:12px;margin-top:6px;padding:0px 2px}.label--wqMM5.labelMedium--EPtSV{margin-left:6px;font-size:18px;margin-top:8px;padding:0px 3px}.label--wqMM5.labelLarge--1rdYm{margin-left:12px;font-size:24px;margin-top:10px;padding:0px 4px}.label--wqMM5.disabledLabel--A0osZ{background-color:#dcdcdc}","",{version:3,sources:["webpack://./src/components/AstroTextField/AstroTextField.module.scss","webpack://./src/utility/_globals.scss"],names:[],mappings:"AAEA,kBACE,YAAA,CACA,kBAAA,CAGF,gCACE,YAAA,CACA,qBAAA,CACA,4CAAA,CACA,iDACE,mCAAA,CACA,yBAAA,CACA,wBAAA,CAIJ,uBACE,YAAA,CAEA,sCACE,wBAAA,CAEA,4CACE,wBAAA,CAGF,mDACE,iBAAA,CACA,cAAA,CACA,WAAA,CAEA,8IAEE,uDAAA,CACA,aCnCQ,CDuCZ,oDACE,iBAAA,CACA,cAAA,CACA,WAAA,CAEA,gJAEE,uDAAA,CACA,aC/CQ,CDmDZ,mDACE,kBAAA,CACA,cAAA,CACA,WAAA,CAEA,8IAEE,wDAAA,CACA,aC3DQ,CDgEd,wCACE,wBAAA,CAEA,8CACE,wBAAA,CAGF,qDACE,iBAAA,CACA,cAAA,CACA,WAAA,CAEA,kJAEE,uDAAA,CACA,aC7EU,CDiFd,sDACE,iBAAA,CACA,cAAA,CACA,WAAA,CAEA,oJAEE,uDAAA,CACA,aCzFU,CD6Fd,qDACE,kBAAA,CACA,cAAA,CACA,WAAA,CAEA,kJAEE,wDAAA,CACA,aCrGU,CD0GhB,uCACE,wBAAA,CAEA,6CACE,wBAAA,CAGF,oDACE,iBAAA,CACA,cAAA,CACA,WAAA,CAEA,gJAEE,uDAAA,CACA,aCvHS,CD2Hb,qDACE,iBAAA,CACA,cAAA,CACA,WAAA,CAEA,kJAEE,uDAAA,CACA,aCnIS,CDuIb,oDACE,kBAAA,CACA,cAAA,CACA,WAAA,CAEA,gJAEE,wDAAA,CACA,aC/IS,CDoJjB,aACE,YAAA,CACA,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,8BACE,cAAA,CACA,WAAA,CAGF,+BACE,cAAA,CACA,WAAA,CAGF,8BACE,cAAA,CACA,WAAA,CAIJ,cACE,iBAAA,CACA,0BAAA,CACA,aAAA,CACA,mBAAA,CACA,qBAAA,CACA,gCACE,eAAA,CACA,cAAA,CACA,cAAA,CACA,eAAA,CAEF,iCACE,eAAA,CACA,cAAA,CACA,cAAA,CACA,eAAA,CAEF,gCACE,gBAAA,CACA,cAAA,CACA,eAAA,CACA,eAAA,CAEF,mCACE,wBAAA",sourcesContent:['@use "../../utility/globals";\n\n.container {\n  display: flex;\n  flex-direction: row;\n}\n\n.astroTextFieldContainer {\n  display: flex;\n  flex-direction: column;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  .disabled {\n    border: 3px solid rgb(220, 220, 220) !important;\n    cursor: default !important;\n    background-color: rgb(220, 220, 220);\n  }\n}\n\n.astroTextField {\n  outline: none;\n\n  &.primary {\n    border: 3px solid globals.$primary-color;\n\n    &:focus {\n      border: 3px solid globals.$primary-color-pseudo-class;\n    }\n\n    &.small {\n      border-radius: 6px;\n      font-size: 12px;\n      padding: 4px;\n\n      &:focus ~ .label,\n      &:valid ~ .label {\n        transform: translateX(-6px) translateY(-12px) scale(0.8);\n        color: globals.$primary-color;\n      }\n    }\n\n    &.medium {\n      border-radius: 8px;\n      font-size: 18px;\n      padding: 6px;\n\n      &:focus ~ .label,\n      &:valid ~ .label {\n        transform: translateX(-9px) translateY(-18px) scale(0.8);\n        color: globals.$primary-color;\n      }\n    }\n\n    &.large {\n      border-radius: 10px;\n      font-size: 24px;\n      padding: 8px;\n\n      &:focus ~ .label,\n      &:valid ~ .label {\n        transform: translateX(-12px) translateY(-24px) scale(0.8);\n        color: globals.$primary-color;\n      }\n    }\n  }\n\n  &.secondary {\n    border: 3px solid globals.$secondary-color;\n\n    &:focus {\n      border: 3px solid globals.$secondary-color-pseudo-class;\n    }\n\n    &.small {\n      border-radius: 6px;\n      font-size: 12px;\n      padding: 4px;\n\n      &:focus ~ .label,\n      &:valid ~ .label {\n        transform: translateX(-6px) translateY(-12px) scale(0.8);\n        color: globals.$secondary-color;\n      }\n    }\n\n    &.medium {\n      border-radius: 8px;\n      font-size: 18px;\n      padding: 6px;\n\n      &:focus ~ .label,\n      &:valid ~ .label {\n        transform: translateX(-9px) translateY(-18px) scale(0.8);\n        color: globals.$secondary-color;\n      }\n    }\n\n    &.large {\n      border-radius: 10px;\n      font-size: 24px;\n      padding: 8px;\n\n      &:focus ~ .label,\n      &:valid ~ .label {\n        transform: translateX(-12px) translateY(-24px) scale(0.8);\n        color: globals.$secondary-color;\n      }\n    }\n  }\n\n  &.tertiary {\n    border: 3px solid globals.$tertiary-color;\n\n    &:focus {\n      border: 3px solid globals.$tertiary-color-pseudo-class;\n    }\n\n    &.small {\n      border-radius: 6px;\n      font-size: 12px;\n      padding: 4px;\n\n      &:focus ~ .label,\n      &:valid ~ .label {\n        transform: translateX(-6px) translateY(-12px) scale(0.8);\n        color: globals.$tertiary-color;\n      }\n    }\n\n    &.medium {\n      border-radius: 8px;\n      font-size: 18px;\n      padding: 6px;\n\n      &:focus ~ .label,\n      &:valid ~ .label {\n        transform: translateX(-9px) translateY(-18px) scale(0.8);\n        color: globals.$tertiary-color;\n      }\n    }\n\n    &.large {\n      border-radius: 10px;\n      font-size: 24px;\n      padding: 8px;\n\n      &:focus ~ .label,\n      &:valid ~ .label {\n        transform: translateX(-12px) translateY(-24px) scale(0.8);\n        color: globals.$tertiary-color;\n      }\n    }\n  }\n}\n.icon {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  &.iconSmall {\n    font-size: 21px;\n    padding: 1px;\n  }\n\n  &.iconMedium {\n    font-size: 28px;\n    padding: 3px;\n  }\n\n  &.iconLarge {\n    font-size: 35px;\n    padding: 5px;\n  }\n}\n\n.label {\n  position: absolute;\n  transition: all 0.2s ease-in;\n  color: rgb(115, 115, 115);\n  pointer-events: none;\n  background-color: white;\n  &.labelSmall {\n    margin-left: 6px;\n    font-size: 12px;\n    margin-top: 6px;\n    padding: 0px 2px;\n  }\n  &.labelMedium {\n    margin-left: 6px;\n    font-size: 18px;\n    margin-top: 8px;\n    padding: 0px 3px;\n  }\n  &.labelLarge {\n    margin-left: 12px;\n    font-size: 24px;\n    margin-top: 10px;\n    padding: 0px 4px;\n  }\n  &.disabledLabel {\n    background-color: rgb(220, 220, 220);\n  }\n}\n',"// TODO: Adjust color for improved consistency and design\n$primary-color: rgb(255, 183, 77);\n$primary-color-pseudo-class: rgb(255, 203, 87);\n$secondary-color: rgb(147 51 234);\n$secondary-color-pseudo-class: rgb(160, 76, 240);\n$tertiary-color: darkgray;\n$tertiary-color-pseudo-class: lightgray;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"container--LcEEl",astroTextFieldContainer:"astroTextFieldContainer--bNqDY",disabled:"disabled--xOyny",astroTextField:"astroTextField--DH6me",primary:"primary--aeU8c",small:"small--WCSUc",label:"label--wqMM5",medium:"medium--_J444",large:"large--aIvg4",secondary:"secondary--vg2CO",tertiary:"tertiary--B9wDg",icon:"icon--BmsYt",iconSmall:"iconSmall--TFjy8",iconMedium:"iconMedium--mJGAQ",iconLarge:"iconLarge--g9k0V",labelSmall:"labelSmall--mAZ6E",labelMedium:"labelMedium--EPtSV",labelLarge:"labelLarge--1rdYm",disabledLabel:"disabledLabel--A0osZ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */"),sourceURLs=cssMapping.sources.map((function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||"").concat(source," */")}));return[content].concat(sourceURLs).concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react-icons/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon});var react=__webpack_require__("./node_modules/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Tree2Element(tree){return tree&&tree.map((function(node,i){return react.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))}))}function GenIcon(data){return function(props){return react.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child))}}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(function(conf){return elem(conf)})):elem(DefaultContext)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isOldIE=function isOldIE(){var memo;return function memorize(){return void 0===memo&&(memo=Boolean(window&&document&&document.all&&!window.atob)),memo}}(),getTarget=function getTarget(){var memo={};return function memorize(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}}(),stylesInDom=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDom.length;i++)if(stylesInDom[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var index=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3]};-1!==index?(stylesInDom[index].references++,stylesInDom[index].updater(obj)):stylesInDom.push({identifier,updater:addStyle(obj,options),references:1}),identifiers.push(identifier)}return identifiers}function insertStyleElement(options){var style=document.createElement("style"),attributes=options.attributes||{};if(void 0===attributes.nonce){var nonce=__webpack_require__.nc;nonce&&(attributes.nonce=nonce)}if(Object.keys(attributes).forEach((function(key){style.setAttribute(key,attributes[key])})),"function"==typeof options.insert)options.insert(style);else{var target=getTarget(options.insert||"head");if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}return style}var replaceText=function replaceText(){var textStore=[];return function replace(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}();function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.media?"@media ".concat(obj.media," {").concat(obj.css,"}"):obj.css;if(style.styleSheet)style.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=style.childNodes;childNodes[index]&&style.removeChild(childNodes[index]),childNodes.length?style.insertBefore(cssNode,childNodes[index]):style.appendChild(cssNode)}}function applyToTag(style,options,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media?style.setAttribute("media",media):style.removeAttribute("media"),sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),style.styleSheet)style.styleSheet.cssText=css;else{for(;style.firstChild;)style.removeChild(style.firstChild);style.appendChild(document.createTextNode(css))}}var singleton=null,singletonCounter=0;function addStyle(obj,options){var style,update,remove;if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options)),update=applyToSingletonTag.bind(null,style,styleIndex,!1),remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else style=insertStyleElement(options),update=applyToTag.bind(null,style,options),remove=function remove(){!function removeStyleElement(style){if(null===style.parentNode)return!1;style.parentNode.removeChild(style)}(style)};return update(obj),function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}module.exports=function(list,options){(options=options||{}).singleton||"boolean"==typeof options.singleton||(options.singleton=isOldIE());var lastIdentifiers=modulesToDom(list=list||[],options);return function update(newList){if(newList=newList||[],"[object Array]"===Object.prototype.toString.call(newList)){for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDom[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDom[_index].references&&(stylesInDom[_index].updater(),stylesInDom.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}}}}]);