webpackJsonp([1,2],{109:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(176),o=n.n(i);t.default={name:"app",components:{MainHeader:o.a}}},110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(115),o=n.n(i),s=n(112),r=n.n(s),a=n(114),l=n.n(a),c=n(182),u=n.n(c),p=n(90),A=n.n(p),m=n(171),g=n.n(m),f=n(170),I=n.n(f),E="<!-- generated by https://eleme-issue.surge.sh DO NOT REMOVE -->";g.a.setOptions({gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!0,smartLists:!0,smartypants:!1,highlight:function(e){return I()(e)}}),t.default={name:"content",data:function(){return{form:{repo:"",title:"",type:"",desc:"",versionRepository:"",versionVue:"",versionBrowser:"",reproduce:"",steps:"",expected:"",actual:"",existingComponent:!0,componentName:""},show:!1,loading:{repository:!1,vue:!1},version:{repo:[],vue:[]},issue:""}},computed:{lang:function(){return this.$route.path.split("/")[1]||window.navigator.language},contents:function(){var e=this;return u.a.filter(function(t){return t.lang===e.lang})[0]},api:function(){return{repositoryVersion:"https://registry.npm.taobao.org/"+(this.repo&&this.repo.npm),vueVersion:"https://registry.npm.taobao.org/vue"}},isBug:function(){return!this.contents.issueTypes.indexOf(this.form.type)},rules:function e(){var t=this.contents.valid,e={};for(var n in t)e[n]=[{required:!0,trigger:"change",message:t[n]}];return e},repo:function(){var e=this;return this.contents.repos.filter(function(t){return t.name===e.form.repo})[0]},issueHTML:function(){return g()(this.issue)},title:function(){var e="["+(this.isBug?"Bug Report":"Feature Request")+"] ";return encodeURIComponent(e+this.form.title).replace(/%2B/gi,"+")},body:function(){var e="\n"+E+"\n\n"+this.issue+"\n\n"+E+"\n";return encodeURIComponent(e).replace(/%2B/gi,"+")}},watch:{lang:{handler:function(){var e=this;this.$nextTick(function(){e.$refs.form.resetFields(),e.form.repo=e.contents.repos[0].name,e.form.versionRepository=e.version.repo[0],e.form.versionVue=e.version.vue[0],e.form.type=e.contents.issueTypes[0]})},immediate:!0},"form.repo":{handler:function(){this.fetchRepositoryVersion()},immediate:!0}},methods:{preview:function(){var e=this;this.$refs.form.validate(function(t){t&&e.createIssue()})},create:function(){window.open("https://github.com/"+this.repo.github+"/issues/new?title="+this.title+"&body="+this.body)},createIssue:function(){this.issue=this.isBug?("\n### "+this.form.repo+" version\n"+this.form.versionRepository+"\n\n### OS/Browsers version\n"+this.form.versionBrowser+"\n\n### Vue version\n"+this.form.versionVue+"\n\n### Reproduction Link\n["+this.form.reproduce+"]("+this.form.reproduce+")\n\n### Steps to reproduce\n"+this.form.steps+"\n\n### What is Expected?\n"+this.form.expect+"\n\n### What is actually happening?\n"+this.form.actual+"\n").trim():("\n### Existing Component\n"+(this.form.existingComponent?this.contents.existingComponentYes:this.contents.existingComponentNo)+"\n\n### Component Name\n"+this.form.componentName+"\n\n### Description\n"+this.form.desc+"\n").trim(),this.show=!0},fetchRepositoryVersion:function(){var e=this;return l()(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.get(e.api.repositoryVersion);case 2:n=t.sent,e.version.repo=r()(n.data.versions),e.form.versionRepository=e.version.repo[0];case 5:case"end":return t.stop()}},t,e)}))()},fetchVueVersion:function(){var e=this;return l()(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.get(e.api.vueVersion);case 2:n=t.sent,e.version.vue=r()(n.data.versions),e.form.versionVue=e.version.vue[0];case 5:case"end":return t.stop()}},t,e)}))()}},mounted:function(){this.fetchVueVersion()}}},111:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"header",data:function(){return{language:""}},computed:{lang:function(){return this.$route.path.split("/")[1]||window.navigator.language}},watch:{lang:{handler:function(e){this.language=e},immediate:!0}}}},167:function(e,t){},168:function(e,t){},169:function(e,t){},174:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgCAMAAADsrvZaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUJERjM2NzNGRDY1MTFFNjgyMjNCNTFGNjg0MDE0REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUJERjM2NzRGRDY1MTFFNjgyMjNCNTFGNjg0MDE0REMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QkRGMzY3MUZENjUxMUU2ODIyM0I1MUY2ODQwMTREQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QkRGMzY3MkZENjUxMUU2ODIyM0I1MUY2ODQwMTREQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkLyc8UAAAAGUExURf//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"},175:function(e,t,n){n(169);var i=n(38)(n(110),n(179),null,null);e.exports=i.exports},176:function(e,t,n){n(168);var i=n(38)(n(111),n(178),null,null);e.exports=i.exports},177:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("main-header"),e._v(" "),n("router-view")],1)},staticRenderFns:[]}},178:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("nav",[i("el-menu",{attrs:{theme:"dark",mode:"horizontal","default-active":e.language,router:!0}},[i("li",[i("a",{attrs:{href:"https://github.com/ElemeFE",target:"_blank"}},[i("img",{attrs:{src:n(174)}})])]),i("el-menu-item",{staticClass:"right",attrs:{index:"zh-CN"}},[e._v("中文")]),i("el-menu-item",{staticClass:"right",attrs:{index:"en-US"}},[e._v("English")])],1)],1)},staticRenderFns:[]}},179:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{xs:18,sm:18,md:12}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"top"}},[n("el-form-item",{attrs:{label:e.contents.repoSelectHint,prop:"repo"}},[n("el-select",{staticClass:"block",attrs:{placeholder:""},model:{value:e.form.repo,callback:function(t){e.form.repo=t},expression:"form.repo"}},e._l(e.contents.repos,function(e,t){return n("el-option",{key:e.github,attrs:{label:e.name,value:e.name}})}))],1),n("el-form-item",{attrs:{label:e.contents.issueTypesHint,prop:"type"}},[n("el-select",{staticClass:"block",attrs:{placeholder:""},model:{value:e.form.type,callback:function(t){e.form.type=t},expression:"form.type"}},e._l(e.contents.issueTypes,function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})}))],1),n("el-form-item",{attrs:{label:e.contents.issueTitleHint,prop:"title"}},[n("el-input",{model:{value:e.form.title,callback:function(t){e.form.title=t},expression:"form.title"}})],1),e.isBug?[n("el-form-item",[n("small",[n("p",{domProps:{textContent:e._s(e.contents.issueUsage)}}),n("ul",e._l(e.contents.links[e.form.repo],function(t){return n("li",{key:"l.link"},[n("span",{domProps:{textContent:e._s(t.desc)}}),n("a",{attrs:{href:t.link},domProps:{textContent:e._s(t.link)}})])})),n("b",{domProps:{textContent:e._s(e.contents.issueHint)}})])]),n("el-form-item",{attrs:{label:e.contents.versionRepositoryHint,prop:"versionRepository"}},[n("el-select",{staticClass:"block",attrs:{filterable:"filterable",loading:e.loading.repository,"no-match-text":e.contents.noMatchText,"no-data-text":e.contents.noDataText,placeholder:""},model:{value:e.form.versionRepository,callback:function(t){e.form.versionRepository=t},expression:"form.versionRepository"}},e._l(e.version.repo,function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})}))],1),n("el-form-item",{attrs:{label:e.contents.versionBrowserHint,prop:"versionBrowser"}},[n("el-input",{model:{value:e.form.versionBrowser,callback:function(t){e.form.versionBrowser=t},expression:"form.versionBrowser"}})],1),n("el-form-item",{attrs:{label:e.contents.versionVueHint,prop:"versionVue"}},[n("el-select",{staticClass:"block",attrs:{filterable:"filterable",loading:e.loading.vue,"no-match-text":e.contents.noMatchText,"no-data-text":e.contents.noDataText,placeholder:""},model:{value:e.form.versionVue,callback:function(t){e.form.versionVue=t},expression:"form.versionVue"}},e._l(e.version.vue,function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})}))],1),n("el-form-item",{attrs:{label:e.contents.reproduceHint,prop:"reproduce"}},[n("el-input",{model:{value:e.form.reproduce,callback:function(t){e.form.reproduce=t},expression:"form.reproduce"}})],1),n("el-form-item",[n("small",[n("p",{domProps:{textContent:e._s(e.contents.reproduceHintSamll)}}),n("ul",e._l(e.contents.reproduceLinks,function(t){return n("li",[n("a",{attrs:{href:t.link},domProps:{textContent:e._s(t.name)}})])}))])]),n("el-form-item",{attrs:{label:e.contents.stepsHint,prop:"steps"}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.form.steps,callback:function(t){e.form.steps=t},expression:"form.steps"}})],1),n("el-form-item",[n("small",{domProps:{innerHTML:e._s(e.contents.stepsHintSmall)}})]),n("el-form-item",{attrs:{label:e.contents.expectHint,prop:"expect"}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.form.expect,callback:function(t){e.form.expect=t},expression:"form.expect"}})],1),n("el-form-item",{attrs:{label:e.contents.actualHint,prop:"actual"}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.form.actual,callback:function(t){e.form.actual=t},expression:"form.actual"}})],1)]:[n("el-form-item",{attrs:{label:e.contents.existingComponentHint,prop:"existingComponent"}},[n("el-radio",{attrs:{label:!0},model:{value:e.form.existingComponent,callback:function(t){e.form.existingComponent=t},expression:"form.existingComponent"}},[e._v(e._s(e.contents.existingComponentYes))]),n("el-radio",{attrs:{label:!1},model:{value:e.form.existingComponent,callback:function(t){e.form.existingComponent=t},expression:"form.existingComponent"}},[e._v(e._s(e.contents.existingComponentNo))])],1),n("el-form-item",{attrs:{label:e.contents.componentNameHint,prop:"componentName"}},[n("el-input",{model:{value:e.form.componentName,callback:function(t){e.form.componentName=t},expression:"form.componentName"}})],1),n("el-form-item",{attrs:{label:e.contents.descHint,prop:"desc"}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.form.desc,callback:function(t){e.form.desc=t},expression:"form.desc"}})],1)],n("el-form-item",{staticClass:"center"},[n("el-button",{attrs:{type:"primary"},domProps:{textContent:e._s(e.contents.preview)},on:{click:e.preview}})],1)],2)],1)],1),n("el-dialog",{attrs:{title:e.contents.dialog.title},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("div",{domProps:{innerHTML:e._s(e.issueHTML)}}),n("span",{slot:"footer"},[n("el-button",{attrs:{type:"primary"},domProps:{textContent:e._s(e.contents.dialog.button)},on:{click:e.create}})],1)])],1)},staticRenderFns:[]}},182:function(e,t){e.exports=[{lang:"zh-CN",repoSelectHint:"选择要提交 issue 的库",repos:[{name:"Element UI",github:"ElemeFE/element",npm:"element-ui"},{name:"Mint UI",github:"ElemeFE/mint-ui",npm:"mint-ui"}],issueTitleHint:"Issue 标题",issueTypesHint:"Issue 类别",issueTypes:["Bug","新特性"],issueUsage:"Issue 是用作提交 Bug 以及请求新特性的，对于简单的问题，请查阅以下资源：",links:{"Element UI":[{desc:"官网：",link:"http://element.eleme.io/#/zh-CN"},{desc:"文档：",link:"http://element.eleme.io/#/zh-CN/component/"},{desc:"常见问题：",link:"https://github.com/ElemeFE/element/blob/dev/FAQ.md#常见问题"},{desc:"SegmentFault：",link:"https://segmentfault.com/t/element"},{desc:"Gitter：",link:"https://gitter.im/ElemeFE/element"}],"Mint UI":[{desc:"官网：",link:"https://github.com/ElemeFE/mint-ui"}]},issueHint:"在提交 issue 前，请先进行搜索来保证没有类似的 issue。",versionRepositoryHint:"项目版本",versionRepositoryHintSmall:"请检查在最新版本中能否重现此 issue。",versionBrowserHint:"操作系统版本 / 浏览器版本",versionVueHint:"Vue 版本",reproduceHint:"重现链接",reproduceHintSamll:"请提供可以重现 issue 的链接或者项目，例如：",reproduceLinks:[{name:"jsfiddle",link:"https://jsfiddle.net/pj71jkyw/"}],stepsHint:"重现步骤",stepsHintSmall:"<p>请清晰的描述重现该 issue 的步骤，没有清晰重现步骤的 issue 将不会被修复。标有<code>need repro</code>的 issue 如果在 7 天内不提供相关步骤，将直接被关闭。</p>",expectHint:"期待的行为",actualHint:"实际的行为",descHint:"Issue 描述",preview:"预览",valid:{repo:"请选择库名",title:"请填写 issue 标题",type:"请选择 issue 类别",versionRepository:"请选择项目的版本",versionBrowser:"请填写操作系统版本/浏览器版本",versionVue:"请选择 Vue 的版本",reproduce:"请填写重现链接",steps:"请填写重现步骤",expect:"请填写期待的行为",actual:"请填写实际的表现",desc:" 请填写描述",componentName:"请填写组件名"},loadingText:"加载中",noMatchText:"无匹配数据",noDataText:"无数据",dialog:{title:"Issue 预览",button:"创建"},existingComponentHint:"是否是已有组件？",existingComponentYes:"是",existingComponentNo:"否",componentNameHint:"组件名"},{lang:"en-US",repoSelectHint:"I am opening an issue for",repos:[{name:"Element UI",github:"ElemeFE/element",npm:"element-ui"},{name:"Mint UI",github:"ElemeFE/mint-ui",npm:"mint-ui"}],issueTitleHint:"Issue Title",issueTypesHint:"Issue Type",issueTypes:["Bug Report","Feature Request"],issueUsage:"The issue list of this repo is exclusively for bug reports and feature requests. For simple questions, please use the following resources:",links:{"Element UI":[{desc:"HomePage: ",link:"http://element.eleme.io/#/en-US"},{desc:"Docs: ",link:"http://element.eleme.io/#/en-US/component/"},{desc:"FAQ: ",link:"https://github.com/ElemeFE/element/blob/dev/FAQ.md#faq"},{desc:"SegmentFault: ",link:"https://segmentfault.com/t/element"},{desc:"Gitter: ",link:"https://gitter.im/ElemeFE/element"}],"Mint UI":[{desc:"HomePage: ",link:"https://github.com/ElemeFE/mint-ui"}]},issueHint:"Try to search for your issue, it may have already been answered or even fixed in the development branch.",versionRepositoryHint:"Repository Version",versionRepositoryHintSmall:"Check if the issue is reproducible with the latest stable version of Repository.",versionBrowserHint:"OS / Browser Version",versionVueHint:"Vue Version",reproduceHint:"Reproduction Link",reproduceHintSamll:"Use jsfiddle/codepen to reproduce issue. If it requires build setup, then create a project and provide a link to a repository.",reproduceLinks:[{name:"jsfiddle",link:"https://jsfiddle.net/pj71jkyw/"}],stepsHint:"Steps to reproduce",stepsHintSmall:"<p>It is <b>required</b> that you clearly describe the steps necessary to reproduce the issue you are running into. Issues with no clear repro steps will not be triaged. If an issue labeled <code>need repro</code> receives no further input from the issue author for more than 7 days, it will be closed.</p>",expectHint:"What is Expected?",actualHint:"What is actually happening?",descHint:"Issue Description",preview:"Preview",valid:{repo:"Please select repo.",title:"Please provide issue title.",type:"Please select type of issue",versionRepository:"Please select version of Repository.",versionBrowser:"Please select version of OS/Browser.",versionVue:"Please select version of Vue.",reproduce:"Please provide reproduction link.",steps:"Please provide steps to reproduce.",expect:"Please provide what is expected?",actual:"Please provide what is actually happening?",desc:" Please provide description.",componentName:"Please provide the name of component."},loadingText:"loading",noMatchText:"no matching data",noDataText:"no data",dialog:{title:"Issue Preview",button:"Create"},existingComponentHint:"Existing component?",existingComponentYes:"Yes",existingComponentNo:"No",componentNameHint:"Component Name"}]},183:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),o=n(68),s=n.n(o),r=n(65),a=n(66),l=n.n(a),c=n(67);n.n(c);i.default.use(l.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:r.a,template:"<App/>",components:{App:s.a}})},65:function(e,t,n){"use strict";var i=n(3),o=n(180),s=n(175),r=n.n(s);i.default.use(o.a);var a=window.navigator.language;t.a=new o.a({routes:[{path:"/en-US",name:"en-US",component:r.a},{path:"/zh-CN",name:"zh-CN",component:r.a},{path:"*",redirect:"/"+a}]})},67:function(e,t){},68:function(e,t,n){n(167);var i=n(38)(n(109),n(177),null,null);e.exports=i.exports}},[183]);
//# sourceMappingURL=app.7c55f9eec8f57b9c9386.js.map