webpackJsonp([2],{1:function(e,t){e.exports=React},3:function(e,t){e.exports=ReactDOM},412:function(e,t,n){e.exports=n(413)},413:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),h=n(1),c=l(h),s=n(3),u=l(s),d=n(14),p=l(d),_=n(15),f=l(_),S=n(414),m=l(S),g=n(416),b=l(g),D=n(19),A=l(D),k=n(418),y=l(k),v=n(8);n(419);var w=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),i(t,[{key:"render",value:function(){var e=this.getLanguage(),t=y.default[e],n=t.list;return c.default.createElement("div",{className:"blog-list-page"},c.default.createElement(f.default,{type:"dark",currentKey:"blog",logo:"/img/hlogo_white.svg",language:e,onLanguageChange:this.onLanguageChange}),c.default.createElement("section",{className:"blog-container"},c.default.createElement("div",{className:"col col-18 left-part"},c.default.createElement(m.default,{pageSize:5},n.map(function(e,t){return c.default.createElement(b.default,{key:t,dataSource:e})}))),c.default.createElement("div",{className:"col col-6 right-part"},c.default.createElement("h4",null,t.postsTitle),c.default.createElement("ul",null,n.map(function(e,t){return c.default.createElement("li",{key:t},c.default.createElement("a",{href:(0,v.getLink)(e.link),target:e.target||"_self"},c.default.createElement("span",null,e.dateStr,"  "),c.default.createElement("span",null,e.title)))})))),c.default.createElement(A.default,{logo:"/img/ds_gray.svg",language:e}))}}]),t}(p.default);document.getElementById("root")&&u.default.render(c.default.createElement(w,null),document.getElementById("root")),t.default=w},414:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,h=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),c=n(1),s=l(c),u=n(4),d=l(u),p=n(20),_=n(12),f=l(_),S=n(8);n(415);var m={pageSize:d.default.number},g={pageSize:5},b=(0,p.autobind)(i=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.container=null,n.state={page:0,pageWidth:0},n}return r(t,e),h(t,[{key:"componentDidMount",value:function(){var e=this,t=this.container.getBoundingClientRect().width;this.setState({pageWidth:t}),this.throttleAdjust=(0,S.throttle)(function(){e.setState({pageWidth:e.container.getBoundingClientRect().width})},200),window.addEventListener("resize",this.throttleAdjust)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.throttleAdjust)}},{key:"changePage",value:function(e){this.setState({page:e})}},{key:"renderSliderList",value:function(){for(var e=this.props,t=e.children,n=e.pageSize,l=this.state,a=l.page,o=l.pageWidth,r=[],i=s.default.Children.count(t),h=Math.ceil(i/n),c=0;c<h;c++)r.push(Array.from(t).slice(c*n,(c+1)*n));return s.default.createElement("div",{className:"slider-list",style:{transform:"translateX(-"+a*o+"px)",transition:"transform 500ms ease",width:h*o}},r.map(function(e,t){return s.default.createElement("div",{className:"slider-page",style:{width:o},key:t},e.map(function(e,t){return s.default.createElement("div",{className:"slider-item",key:t},e)}))}))}},{key:"renderControl",value:function(){var e=this.props,t=e.children,n=e.pageSize,l=this.state.page,a=s.default.Children.count(t),o=Math.ceil(a/n);return s.default.createElement("div",{className:"slider-control"},s.default.createElement("img",{className:(0,f.default)({"slider-control-prev":!0,"slider-control-prev-hidden":0===l}),src:(0,S.getLink)("/img/system/prev.png"),onClick:this.changePage.bind(this,l-1)}),s.default.createElement("img",{className:(0,f.default)({"slider-control-next":!0,"slider-control-next-hidden":l===o-1}),src:(0,S.getLink)("/img/system/next.png"),onClick:this.changePage.bind(this,l+1)}))}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:"page-slider",ref:function(t){e.container=t}},this.renderSliderList(),this.renderControl())}}]),t}(s.default.Component))||i;b.propTypes=m,b.defaultProps=g,t.default=b},415:function(e,t){},416:function(e,t,n){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),h=n(1),c=function(e){return e&&e.__esModule?e:{default:e}}(h),s=n(20),u=n(8);n(417);var d=(0,s.autobind)(r=function(e){function t(e){l(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isHovered:!1},n}return o(t,e),i(t,[{key:"onMouseOver",value:function(){this.setState({isHovered:!0})}},{key:"onMouseOut",value:function(){this.setState({isHovered:!1})}},{key:"render",value:function(){var e=this.props.dataSource,t=e.link,n=e.target,l=e.title,a=e.author,o=e.companyIcon,r=e.companyIconHover,i=e.dateStr,h=e.desc,s=this.state.isHovered;return c.default.createElement("a",{href:(0,u.getLink)(t),target:n||"_self",className:"blog-item",onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut},c.default.createElement("div",{className:"title"},c.default.createElement("img",{src:s?(0,u.getLink)("/img/system/docs_hover.png"):(0,u.getLink)("/img/system/docs_normal.png")}),c.default.createElement("span",null,l)),c.default.createElement("div",{className:"brief-info"},c.default.createElement("span",{className:"author"},a),o?c.default.createElement("img",{src:s?(0,u.getLink)(r):(0,u.getLink)(o)}):null,c.default.createElement("span",{className:"date"},i)),c.default.createElement("p",null,h))}}]),t}(c.default.Component))||r;t.default=d},417:function(e,t){},418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={"en-us":{barText:"Blog",postsTitle:"All posts",list:[{title:"How did Yili explore a “path” for digital transformation based on DolphinScheduler?",author:"Debra Chen",dateStr:"2022-10-31",desc:"People in general know about Yili. Every year, 1.3 billion... ",link:"/en-us/blog/How_did_Yili_explore_a_path_for_digital_transformation_based_on_DolphinScheduler.html"},{title:"How can more people benefit from big data?",author:"Debra Chen",dateStr:"2022-10-29",desc:"During the ApacheCon Asia 2022, Chen Wei, who has more than 10 years... ",link:"/en-us/blog/How_can_more_people_benefit_from_big_data.html"},{title:"Apache DolphinScheduler 2.0.7 released, fixes complement and fault tolerance",author:"Debra Chen",dateStr:"2022-10-28",desc:"Recently, Apache DolphinScheduler version 2.0.7 was officially released...... ",link:"/en-us/blog/Apache_DolphinScheduler_2.0.7.html"},{title:"Apache DolphinScheduler 3.0.1 released, with the scheduling kernel and UI optimized",author:"Debra Chen",dateStr:"2022-9-28",desc:"hanks to this Release Manager — @zhuangchong, who led the release of the 3.0.1...... ",link:"/en-us/blog/Apache_dolphinScheduler_3.0.1.html"},{title:"Apache DolphinScheduler 3.0.0 Official Version Released!",author:"Debra Chen",dateStr:"2022-9-2",desc:"The official version 3.0.0 has undergone the most significant changes since its release... ",link:"/en-us/blog/Apache_dolphinScheduler_3.0.0.html"},{title:"ApacheCon Asia 2022 Review | Application of DolphinScheduler in T3Go One-stop Platform",author:"Debra Chen",dateStr:"2022-8-30",desc:"At the ApacheCon Asia 2022, big data engineers Li Xinkai & Zhao Yuwei at T3Go ... ",link:"/en-us/blog/DolphinScheduler_in_T3Go_One-stop_Platform.html"},{title:"pache DolphinScheduler Extends Capabilities Through Python API and AWS Support",author:"Debra Chen",dateStr:"2022-8-26",desc:"In the ever-changing world of technology, data is abundant. ... ",link:"/en-us/blog/Python_API_and_AWS_Support.html"},{title:"Three scenarios and five optimizations of Apache DolphinScheduler in XWBank for processing of task instances",author:"Debra Chen",dateStr:"2022-5-25",desc:"At XWBank, a large number of task instances are generated every day... ",link:"/en-us/blog/Apache_DolphinScheduler_in_XWBank.html"},{title:"Don’t know how to use Apache DolphinScheduler? A community talent writes the usage tutorial of it in one month!（2）",author:"Debra Chen",dateStr:"2022-5-24",desc:"Apache DolphinScheduler (hereinafter referred to as DS) is a distributed and easily scalable visual DAG workflow task scheduling system... ",link:"/en-us/blog/2_The_most_comprehensive_introductory_tutorial_written_in_a_month.html"},{title:"Don’t know how to use Apache DolphinScheduler? A community talent writes the usage tutorial of it in one month!（1）",author:"Debra Chen",dateStr:"2022-5-23",desc:"Apache DolphinScheduler (hereinafter referred to as DS) is a distributed and easily scalable visual DAG workflow task scheduling system... ",link:"/en-us/blog/The_most_comprehensive_introductory_tutorial_written_in_a_month.html"},{title:"China Unicom revamps Apache DolphinScheduler Resource Center for cross-cluster calls in billing environments and one-stop access to data scripts",author:"Debra Chen",dateStr:"2022-5-07",desc:"Today, Apache DolphinScheduler announced the official release of version 2.0.5 ... ",link:"/en-us/blog/China_Unicom_revamps_Apache_DolphinScheduler.html"},{title:"3.0.0 Alpha Release! Nine New Features and A Brand New UI Unlock New Capabilities For the Scheduling System",author:"Debra Chen",dateStr:"2022-4-16",desc:"n April 22, 2022, Apache DolphinScheduler officially announced the release of alpha version 3.0.0! ... ",link:"/en-us/blog/Apache_dolphinScheduler_3.0.0_alpha.html"},{title:"How Does Live-broadcasting Platform Adapt to Apache DolphinScheduler?",author:"Debra Chen",dateStr:"2022-4-16",desc:"Background on the introduction of Apache DolphinScheduler to YY Live... ",link:"/en-us/blog/How_Does_Live-broadcasting_Platform_Adapt_to_Apache_DolphinScheduler.html"},{title:"How Does Ziru Build A Job Scheduling System Popular Among Data Analysts?",author:"Debra Chen",dateStr:"2022-4-16",desc:"As one of the creators of enterprise data assets... ",link:"/en-us/blog/How_Does_Ziru_Build_A_Job_Scheduling_System_Popular_Among_Data_Analysts.html"},{title:"Fast Task Type Expanding On Apache DolphinScheduler | Tutorial",author:"Debra Chen",dateStr:"2022-4-14",desc:"At present, the scheduler plays an indispensable role in big data ecology... ",link:"/en-us/blog/Fast_Task_Type_Expanding_On_Apache_DolphinScheduler_Tutorial.html"},{title:"First Anniversary Celebration of Apache DolphinScheduler's Graduation From ASF Incubator! Here Comes the Project Status Report!",author:"Debra Chen",dateStr:"2022-4-14",desc:"Before you know it, Apache DolphinScheduler.. ",link:"/en-us/blog/Apache_DolphinScheduler_s_Graduation_From_ASF_Incubator.html"},{title:"Fully Embracing K8s, Cisco Hangzhou Seeks to Support K8s Tasks Based on ApacheDolphinScheduler",author:"Debra Chen",dateStr:"2022-3-21",desc:"K8s is the future of the cloud and is the only infrastructure platform.. ",link:"/en-us/blog/K8s_Cisco_Hangzhou.html"},{title:"Cisco Hangzhou's Travel Through Apache DolphinScheduler Alert Module Refactor",author:"Debra Chen",dateStr:"2022-3-16",desc:"Cisco Hangzhou has introduced Apache DolphinScheduler.. ",link:"/en-us/blog/Hangzhou_cisco.html"},{title:"How Does 360 DIGITECH process 10,000+ workflow instances per day by Apache DolphinScheduler",author:"Debra Chen",dateStr:"2022-3-15",desc:"ince 2020, 360 DIGITECH has fully migrated its scheduling system from Azkaban to Apache DolphinScheduler.. ",link:"/en-us/blog/How_Does_360_DIGITECH_process_10_000+_workflow_instances_per_day.html"},{title:"Exploration and practice of Tujia Big Data Platform Based on Apache DolphinScheduler",author:"Debra Chen",dateStr:"2022-3-10",desc:"Tujia introduced Apache DolphinScheduler in 2019.. ",link:"/en-us/blog/Exploration_and_practice_of_Tujia_Big_Data_Platform_Based.html"},{title:"Release News! Apache DolphinScheduler 2_0_5 optimizes The Fault Tolerance Process of Worker",author:"Debra Chen",dateStr:"2022-3-7",desc:"Today, Apache DolphinScheduler announced the official release of version 2.0.5. ",link:"/en-us/blog/Apache_dolphinScheduler_2.0.5.html"},{title:"Technical Practice of Apache DolphinScheduler in Kubernetes System",author:"Debra Chen",dateStr:"2022-2-24",desc:"Kubernetes is a cluster system based on container technology, ",link:"/en-us/blog/DolphinScheduler_Kubernetes_Technology_in_action.html"},{title:"Sign Up to Apache DolphinScheduler Meetup Online | We Are Waiting For You to Join the Grand Gathering on 2.26 2022!",author:"Debra Chen",dateStr:"2022-2-18",desc:"Apache DolphinScheduler Meetup Online ",link:"/en-us/blog/Meetup_2022_02_26.html"},{title:"Apache DolphinScheduler 2.0.3 Release Announcement: DingTalk alert plugin adds signature verification, and supports data sources to obtain links from multiple sessions\n",author:"Debra Chen",dateStr:"2022-1-27",desc:"Apache DolphinScheduler Board Report",link:"/en-us/blog/Apache_dolphinScheduler_2.0.3.html"},{title:"Apache DolphinScheduler Board Report: Community Runs Well, Commit Number Grows over 123%",author:"Debra Chen",dateStr:"2022-1-13",desc:"Apache DolphinScheduler Board Report",link:"/en-us/blog/Board_of_Directors_Report.html"},{title:"Apache DolphinScheduler 2.0.2  Release Announcement:WorkflowAsCode is Launched!",author:"Debra Chen",dateStr:"2022-1-13",desc:" TWOS",link:"/en-us/blog/Apache_dolphinScheduler_2.0.2.html"},{title:"Congratulations! Apache DolphinScheduler Has Been Approved As A TWOS Candidate Member",author:"Debra Chen",dateStr:"2022-1-11",desc:" TWOS",link:"/en-us/blog/Twos.html"},{title:"Apache DolphinScheduler Won the「2021 OSC Most Popular Projects」award, and Whaleops Open Source Technology Received the honor of「Outstanding Chinese Open Source Original Startups」!",author:"Debra Chen",dateStr:"2022-1-7",desc:" 2021 OSC Most Popular Projects",link:"/en-us/blog/Awarded_most_popular_project_in_2021.html"},{title:"Eavy Info Builds Data Asset Management Platform Services Based on Apache DolphinScheduler to Construct Government Information Ecology",author:"Debra Chen",dateStr:"2021-12-30",desc:" Use Case",link:"/en-us/blog/Eavy_Info.html"},{title:"Apache DolphinScheduler 2.0.1 is here, and the highly anticipated one-click upgrade and plug-in finally come!",author:"Debra Chen",dateStr:"2021-12-20",desc:"Apache DolphinScheduler 2.0.1",link:"/en-us/blog/Apache-DolphinScheduler-2.0.1.html"},{title:"From Airflow to Apache DolphinScheduler, the Roadmap of Scheduling System On Youzan Big Data Development Platform",author:"Debra Chen",dateStr:"2021-12-16",desc:"YouZan case study",link:"/en-us/blog/YouZan-case-study.html"},{title:"Refactoring, Plug-in, Performance Improves By 20 times, Apache DolphinScheduler 2.0 alpha Release Highlights Check!",author:"Debra Chen",dateStr:"2021-10-29",desc:"DolphinScheduler 2.0 alpha release",link:"/en-us/blog/DS-2.0-alpha-release.html"},{title:"DolphinScheduler Vulnerability Explanation",author:"Debar Chen",dateStr:"2021-10-26",desc:"DolphinScheduler Vulnerability Explanation",link:"/en-us/blog/DolphinScheduler-Vulnerability-Explanation.html"},{title:"Introducing Apache DolphinScheduler 1.3.9, StandaloneServer is Available!",author:"Debar Chen",dateStr:"2021-10-22",desc:"Introducing Apache DolphinScheduler 1.3.9, StandaloneServer is Available!",link:"/en-us/blog/Introducing-Apache-DolphinScheduler-1.3.9.html"},{title:"Introducing Apache DolphinScheduler 1.3.9, StandaloneServer is Available!",author:"Debar Chen",dateStr:"2021-10-22",desc:"Apache Dolphin Scheduler(Incubating) will organize a meetup in Shanghai  2019.10.26. Welcome to register.",link:"/en-us/blog/Introducing-Apache-DolphinScheduler-1.3.9.html"},{title:"Why did we split the big json of DAG in workflow definition?",author:"JinyLeeChina",translator:"QuakeWang",dateStr:"2021-06-03",desc:"The task and relationship in the workflow of Dolphinscheduler is saved as the process_definition_json field that saves the process_definiton table in the database in a large JSON. If a workflow is large, this JSON field has become a result. Very big, you need to analyze JSON when using it, it costs very much, and the task cannot be reused, so the community plan launches the JSON split project.",link:"/en-us/blog/Json_Split.html"},{title:" Big Data Workflow Task Scheduling - Directed Acyclic Graph (DAG) for Topological Sorting",author:"LidongDai",translator:"QuakeWang",dateStr:"2021-05-06",desc:"DAG: Full name Directed Acyclic Graph，referred to as DAG。Tasks in the workflow are assembled in the form of directed acyclic graphs, which are topologically traversed from nodes with zero indegrees of ingress until there are no successor nodes.",link:"/en-us/blog/DAG.html"},{title:"FAQ of Apache DolphinScheduler",author:"LidongDai",dateStr:"2021-03-20",desc:"Apache Dolphin Scheduler(Incubating) will organize a meetup in Shanghai  2019.10.26. Welcome to register.",link:"/en-us/blog/FAQ.html"},{title:"Apache Dolphin Scheduler(Incubating) Meetup 2019.10 Shanghai",author:"William",dateStr:"2019-9-27",desc:"Apache Dolphin Scheduler(Incubating) will organize a meetup in Shanghai  2019.10.26. Welcome to register.",link:"/en-us/blog/meetup_2019_10_26.html"}]},"zh-cn":{barText:"博客",postsTitle:"所有文章",list:[{title:"金融任务实例实时、离线跑批Apache DolphinScheduler在新网银行的三大场景与五大优化",author:"Debra Chen",dateStr:"2022-5-23",desc:"在新网银行，每天都有大量的任务实例产生，其中实时任务占据多数...",link:"/zh-cn/blog/Apache_DolphinScheduler_in_XWBank.html"},{title:"还不会用 Apache Dolphinscheduler？大佬用时一个月写出的最全入门教程（2）",author:"Debra Chen",dateStr:"2022-5-23",desc:"海豚调度(Apache DolphinScheduler，下文简称DS)是分布式易扩展的可视化DAG工作流任务调度系统，...",link:"/zh-cn/blog/2_The_most_comprehensive_introductory_tutorial_written_in_a_month.html"},{title:"还不会用 Apache Dolphinscheduler？大佬用时一个月写出的最全入门教程（1）",author:"Debra Chen",dateStr:"2022-5-23",desc:"海豚调度(Apache DolphinScheduler，下文简称DS)是分布式易扩展的可视化DAG工作流任务调度系统，...",link:"/zh-cn/blog/The_most_comprehensive_introductory_tutorial_written_in_a_month.html"},{title:"中国联通改造 Apache DolphinScheduler 资源中心，实现计费环境跨集群调用与数据脚本一站式访问",author:"Debra Chen",dateStr:"2022-5-07",desc:"截止2022年，中国联通用户规模达到4.6亿，占据了全中国人口的30%，...",link:"/zh-cn/blog/China_Unicom_revamps_Apache_DolphinScheduler.html"},{title:"3.0.0 alpha 重磅发布！九大新功能、全新 UI 解锁调度系统新能力",author:"Debra Chen",dateStr:"2022-4-25",desc:"2022 年 4 月 22 日，Apache DolphinScheduler 正式宣布 3.0.0 alpha 版本发布！...",link:"/zh-cn/blog/Apache_dolphinScheduler_3.0.0_alpha.html"},{title:"论语音社交视频直播平台与 Apache DolphinScheduler 的适配度有多高",author:"Debra Chen",dateStr:"2022-4-16",desc:"YY直播引入Apache DolphinScheduler的背景...",link:"/zh-cn/blog/How_Does_Live-broadcasting_Platform_Adapt_to_Apache_DolphinScheduler.html"},{title:"数据分析师干了专业数仓工程师的活，自如是怎么做到的？",author:"Debra Chen",dateStr:"2022-4-16",desc:"数据分析师作为企业数据资产的缔造者之一...",link:"/zh-cn/blog/How_Does_Ziru_Build_A_Job_Scheduling_System_Popular_Among_Data_Analysts.html"},{title:"极速开发扩充 Apache DolphinScheduler Task 类型 | 实用教程",author:"Debra Chen",dateStr:"2022-4-14",desc:"目前在大数据生态中，调度系统是不可或缺的一个重要组件......",link:"/zh-cn/blog/Fast_Task_Type_Expanding_On_Apache_DolphinScheduler_Tutorial.html"},{title:"Apache DolphinScheduler ASF 孵化器毕业一周年，汇报来了！",author:"Debra Chen",dateStr:"2022-4-14",desc:"不知不觉，Apache DolphinScheduler 已经从......",link:"/zh-cn/blog/Apache_DolphinScheduler_s_Graduation_From_ASF_Incubator.html"},{title:"全面拥抱 K8s，ApacheDolphinScheduler 应用与支持 K8s 任务的探索",author:"Debra Chen",dateStr:"2022-3-21",desc:"K8s 打通了主流公私云之间的壁垒，成为唯一连通公私云的基础架构平台......",link:"/zh-cn/blog/K8s_Cisco_Hangzhou.html"},{title:"杭州思科对 Apache DolphinScheduler Alert 模块的改造",author:"Debra Chen",dateStr:"2022-3-16",desc:"杭州思科已经将 Apache DolphinScheduler 引入公司自建的大数据平台......",link:"/zh-cn/blog/Hangzhou_cisco.html"},{title:"日均处理 10000+ 工作流实例，Apache DolphinScheduler 在 360 数科的实践",author:"Debra Chen",dateStr:"2022-3-15",desc:"从 2020 年起，360 数科全面将调度系统从 Azkaban 迁移到 Apache DolphinScheduler......",link:"/zh-cn/blog/How_Does_360_DIGITECH_process_10_000+_workflow_instances_per_day.html"},{title:"途家大数据平台基于 Apache DolphinScheduler 的探索与实践",author:"Debra Chen",dateStr:"2022-3-10",desc:"途家在 2019 年引入 Apache DolphinScheduler。",link:"/zh-cn/blog/Exploration_and_practice_of_Tujia_Big_Data_Platform_Based.html"},{title:"Apache DolphinScheduler 2_0_5 发布，Worker 容错流程优化",author:"Debra Chen",dateStr:"2022-3-7",desc:"今天，Apache DolphinScheduler 宣布 2.0.5 版本正式发布。",link:"/zh-cn/blog/Apache_dolphinScheduler_2.0.5.html"},{title:"Apache DolphinScheduler 在 Kubernetes 体系中的技术实战",author:"Debra Chen",dateStr:"2022-2-18",desc:"Apache DolphinScheduler 在 Kubernetes 体系中的技术实战",link:"/zh-cn/blog/DolphinScheduler_Kubernetes_Technology_in_action.html"},{title:"直播报名火热启动 | 2022 年 Apache DolphinScheduler Meetup 首秀！",author:"Debra Chen",dateStr:"2022-2-18",desc:"直播报名火热启动 | 2022 年 Apache DolphinScheduler Meetup 首秀！",link:"/zh-cn/blog/Meetup_2022_02_26.html"},{title:"Apache DolphinScheduler 2.0.3 发布，支持钉钉告警签名校验，数据源可从多个会话获取链接",author:"Debra Chen",dateStr:"2022-1-27",desc:"Apache DolphinScheduler 董事会报告：社区健康运行，Commit 增长 123%",link:"/zh-cn/blog/Apache_dolphinScheduler_2.0.3.html"},{title:"Apache DolphinScheduler 董事会报告：社区健康运行，Commit 增长 123%",author:"Debra Chen",dateStr:"2022-1-13",desc:"Apache DolphinScheduler 董事会报告：社区健康运行，Commit 增长 123%",link:"/zh-cn/blog/Board_of_Directors_Report.html"},{title:"WorkflowAsCode 来了，Apache DolphinScheduler 2.0.2 惊喜发布！",author:"Debra Chen",dateStr:"2022-1-13",desc:"Apache DolphinScheduler 2.0.2",link:"/zh-cn/blog/Apache_dolphinScheduler_2.0.2.html"},{title:"恭喜 Apache DolphinScheduler 入选可信开源社区共同体（TWOS）预备成员！",author:"Debra Chen",dateStr:"2022-1-11",desc:"TWOS",link:"/zh-cn/blog/Twos.html"},{title:"Apache DolphinScheduler 获评 2021 年度「最受欢迎项目」",author:"Debra Chen",dateStr:"2022-1-7",desc:"最受欢迎项目奖",link:"/zh-cn/blog/Awarded_most_popular_project_in_2021.html"},{title:"亿云基于 DolphinScheduler 构建资产数据管理平台服务，助力政务信息化生态建设",author:"Debra Chen",dateStr:"2021-12-30",desc:"最佳实践",link:"/zh-cn/blog/Eavy_Info.html"},{title:"Apache DolphinScheduler 2.0.1 来了，备受期待的一键升级、插件化终于实现！",author:"Debra Chen",dateStr:"2021-12-17",desc:"Apache DolphinScheduler 2.0.1",link:"/zh-cn/blog/Apache-DolphinScheduler-2.0.1.html"},{title:"荔枝机器学习平台与大数据调度系统“双剑合璧”，打造未来数据处理新模式!",author:"Debra Chen",dateStr:"2021-11-23",desc:"Lizhi case study",link:"/zh-cn/blog/Lizhi-case-study.html"},{title:"重构、插件化、性能提升 20 倍，Apache DolphinScheduler 2.0 alpha 发布亮点太多!",author:"DolphinScheduler",dateStr:"2021-10-29",desc:"DolphinScheduler 2.0 alpha发布",link:"/zh-cn/blog/DS-2.0-alpha-release.html"},{title:"DolphinScheduler漏洞情况说明",author:"徐玮毅",dateStr:"2021-10-26",desc:"DolphinScheduler漏洞情况说明",link:"/zh-cn/blog/DolphinScheduler漏洞情况说明.html"},{title:"Apache DolphinScheduler 架构演进及开源经验分享",author:"徐玮毅",dateStr:"2021-07-18",desc:"DolphinScheduler 1.2.x/1.3.x/2.0架构演进及开源经验分享（阮文俊）",link:"/zh-cn/blog/DS_architecture_evolution.html"},{title:"伴鱼数据质量平台实践",author:"伴鱼技术团队",editor:"太空人",dateStr:"2021-07-06",desc:"伴鱼基础架构数据团队在应对该类问题时推出的平台化产品 - 数据质量中心（Data Quality Center, DQC）的设计与实现",link:"/zh-cn/blog/ipalfish_tech_platform.html"},{title:"DolphinScheduler在Windows环境启动源码",author:"寇文皓",dateStr:"2021-07-05",desc:"在Windows环境下启动DolphinScheduler的代码进行开发调试",link:"/zh-cn/blog/DS_run_in_windows.html"},{title:"DolphinScheduler 核心之 DAG 大 JSON 拆分详解",author:"进勇",editor:"小P",dateStr:"2021-05-29",desc:"DolphinScheduler 核心之 DAG 大 JSON 拆分始末",link:"/zh-cn/blog/dolphinscheduler_json.html"},{title:"为什么要把 DolphinScheduler 工作流定义中保存任务及关系的大 json 给拆了?",author:"进勇",editor:"王福政",dateStr:"2021-05-25",desc:"当前 DolphinScheduler 的工作流中的任务及关系保存时是以大 json 的方式保存到数据库中 process_definiton 表的 process_definition_json 字段，如果某个工作流很大比如有 1000 个任务，这个 json 字段也就随之变得非常大，在使用时需要解析 json，非常耗费性能，且任务没法重用，故社区计划启动 json 拆分项目。",link:"/zh-cn/blog/json_split.html"},{title:"大数据工作流任务调度--有向无环图(DAG)之拓扑排序",author:"代立冬",translator:"王福政",dateStr:"2021-05-19",desc:"DAG：全称是Directed Acyclic Graph，简称DAG。工作流中的任务以有向无环图的形式组合，从拓扑上看，这些节点的入口度为零，直到没有后续节点为止。",link:"/zh-cn/blog/DAG.html"},{title:"Apache Dolphinscheduler 1.3.x 系列配置文件指南",author:"张伯毅",dateStr:"2021-01-05",target:"_blank",desc:"本文档为dolphinscheduler配置文件指南,针对版本为 dolphinscheduler-1.3.x 版本",link:"https://mp.weixin.qq.com/s/gJUsGBHuMxw79VGH2ziZtg"},{title:"DolphinScheduler & K8s 在优路科技的实践！",author:"李文禾",dateStr:"2020-11-12",target:"_blank",desc:"本文通过介绍DolphinScheduler on Kubernetes 在优路科技的实践，阐述了DolphinScheduler如何在云原生时代，更好地助力企业实现高效的数据调度解决方案",link:"https://mp.weixin.qq.com/s/roNuuZ1AWySam5WwNQHwhg"},{title:"Apache DolphinScheduler 需要的sudo，还可以这么玩，长见识了！",author:"海豚调度",dateStr:"2020-12-16",target:"_blank",desc:"这里推荐一下社区贡献者 import 的实践文章，写的非常赞，sudo 也是非常的痛点，也寻求一种更好的实现方式来实现多租户",link:"https://mp.weixin.qq.com/s/5rRWMoT0DLMcOdDl-mrsRQ"},{title:"Apache Dolphin Scheduler(Incubating)将于2019.10在上海举行见面会",author:"郭炜",dateStr:"2019-9-27",desc:"Apache Dolphin Scheduler(Incubating) 将于2019年10月26日在上海组织一次会议，欢迎踊跃报名。 ",link:"/zh-cn/blog/meetup_2019_10_26.html"}]}}},419:function(e,t){}},[412]);