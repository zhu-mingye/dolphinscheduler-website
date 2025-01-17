# 达人专栏 | 还不会用 Apache Dolphinscheduler？大佬用时一个月写出的最全入门教程

<div align=center>
<img src="/img/2022-05-23/ch/1.png"/>
</div>

作者 | 欧阳涛 招联金融大数据开发工程师

海豚调度(Apache DolphinScheduler，下文简称 DS)是分布式易扩展的可视化 DAG 工作流任务调度系统，致力于解决数据处理流程中错综复杂的依赖关系，使调度系统在数据处理流程中开箱即用。Apache DolphinScheduler 作为 Apache 的顶级开源项目，与其他开源项目相似的地方在于，其运行以及安装都是从脚本开始的。

脚本的位置都是根目录的 script 文件夹下的，脚本执行顺序如下:

1、查看启动的脚本 start-all.sh，可以发现启动 4 个最重要的启动服务，分别是 dolphinscheduler-daemon.sh start master-server/worker-server/alert-server/api-server

2、在 dolphinscheduler-daemon.sh 脚本中会首先执行 dolphinscheduler-env.sh 脚本，这个脚本作用是引入环境，包括 Hadoop、Spark、Flink、Hive 环境等。由于 DS 需要调度这些任务，如果不引入这些环境，即使调度成功，执行也无法成功。

3、紧接着在 dolphinscheduler-daemon.sh 脚本中循环执行上述 4 个模块下的 bin/start.sh.如下图所示：

<div align=center>
<img src="/img/2022-05-23/ch/2.png"/>
</div>

如下图所示：执行 dolphinscheduler-daemon.sh start master-server 时会去 master 模块的 src/main/bin 执行 start.sh，打开 start.sh 后，可以发现启动了一个 MasterServer，其他 Worker，Alert 以及 API 模块等同理。

<div align=center>
<img src="/img/2022-05-23/ch/3.png"/>
</div>

至此，从脚本如何运行代码这块就已经结束了，接下来我们将详细介绍一下这 4 个模块的主要用途。Master 主要负责 DAG 任务切分、任务提交监控，并同时监听其它 Master 和 Worker 的健康状态等；Worker 主要负责任务的执行；Alert 是负责警告服务；API 负责 DS 的增删改查业务逻辑，即网页端看到的项目管理、资源管理、安全管理等等。

其实，如果大家接触过其他大数据项目，例如 Flink、Hdfs、Hbase 等，就会发现这些架构都是类似的，像 hdfs 是 NameNode 和 WorkNode 的架构；Hbase 是 HMasterServer 和 HRegionServer 的架构；Flink 是 JobManager 和 TaskManager 的架构等，如果你能够熟练掌握这些框架，想必对于 DS 的掌握也会更容易的了。

Master，Worker 这些都是通过 SpringBoot 的启动，创建的对象也都是由 Spring 托管，如果大家平常接触 Spring 较多的话，那么笔者认为您理解 DS 一定会比其他的开源项目更容易。

## 备注:

1、运行脚本中还有一个 python-gateway-server 模块，这个模块是用 python 代码编写工作流的，并不在本文考虑范围之内，所以就暂时忽略，如果详细了解此模块的话，在社区请教其他同学的了。

2、启动 Alert 脚本是执行 Alert 模块下的 alert-server 的脚本，因为 Alert 也是个父模块的，笔者不打算讲 alert-server。相信在看完 Master 和 Worker 的执行流程之后，Alert 模块应该不难理解。

3、另外，初次接触 DS 的同学会发现 Alert 模块有个 alert-api 模块，笔者想说的是这 alert-api 和前面所说的 api-server 没有一丁点关系，api-server 是启动 api 模块的 ApiApplicationServer 脚本，负责整个 DS 的业务逻辑的，而 alert-api 则是负责告警的 spi 的插件接口，打开 alert-api 模块可以发这里面的代码全是接口和定义，没有处理任何逻辑的，所以还是很好区分的了。同理 task 模块下的 task-api 与 alert-api 只是职责相同，处理的是不同功能而已。

4、DS 的全都是 SpringBoot 管理的，如果有同学没搞过 SpringBoot 或者 Spring 的话，可以参考下列网址以及网上的其他相关资料等。

https://spring.io/quickstart

如果想详细了解警告模块，请参考下方链接以及咨询其他同学。

https://dolphinscheduler.apache.org/#/zh-cn/blog/Hangzhou_cisco

Apache DolphinScheduler 项目官网的地址为:https://github.com/apache/dolphinscheduler

下一章，笔者将介绍 DS 最重要的两个模块 Master 和 Worker，以及它们如何进行通信的，敬请期待。
