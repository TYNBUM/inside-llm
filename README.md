<div align="center">

# Inside LLM

**从会用大模型，到看懂它的内部。**

An interactive, bilingual field guide to large language models.

[在线学习 / Start learning](https://tynbum.github.io/inside-llm/) · [学习路径](#学习路径) · [English](#english) · [参与贡献](CONTRIBUTING.md)

![MIT License](https://img.shields.io/badge/license-MIT-168469)
![Vanilla JavaScript](https://img.shields.io/badge/built_with-HTML_CSS_JS-168469)
![中文 / English](https://img.shields.io/badge/languages-中文_%2F_English-168469)

</div>

一份从神经网络基础走向 Transformer 与推理基础设施的交互式教程。面向已经会使用聊天模型、提示词、API，却希望真正理解权重、隐藏层、注意力与 KV 缓存的学习者。

## 在这里怎么学

每个主要概念按「问题 → 直觉 → 实际对象 → 可见过程 → 数值例子 → 真实模型 → 理解检查」展开。

- **8 个核心主题、41 个学习单元**：核心学习时间约 443 分钟（7.4 小时）；另有 9 个选修深入专题。
- **可以动手的实验**：向量、矩阵乘法、XOR 网络、tokenization、Q/K/V、采样、量化、显存估算与请求流程。
- **三种阅读模式**：中文、English、中英对照。
- **完整阅读导航**：课程总览、可折叠目录、单章阅读、章内目录、上下章、可分享的章节链接、浏览器前进/后退。
- **本地全文搜索**：点击搜索，或按 `⌘ K` / `Ctrl K`。
- **学习进度**：实验设置、回答、完成状态保存在当前浏览器；首页可继续上次学习。
- **浅色与深色主题**，适配桌面与手机。

## 学习路径

| 部分 | 主题 | 核心时间 |
| --- | --- | --- |
| 1 | 程序、参数、模型文件与参数量 | 40 分钟 |
| 2–3 | 最少够用的数学；神经元、隐藏层与非线性 | 78 分钟 |
| 4 | 分词、嵌入、位置与上下文表示 | 50 分钟 |
| 5 | Q/K/V、注意力、多头与 Transformer 块 | 84 分钟 |
| 6 | 损失、梯度、训练与逐 token 生成 | 70 分钟 |
| 7 | GPU、量化、KV 缓存、延迟、显存与并行 | 81 分钟 |
| 8 | 端到端请求旅程与综合练习 | 40 分钟 |

第 2–3 部分按概念前置关系交错编排，因此导航显示为 7 组，涵盖 8 个核心主题。

## 本地运行

无需 npm、构建步骤、API key 或 GPU。克隆后直接用浏览器打开 `index.html`，或启动静态服务器：

```sh
git clone https://github.com/TYNBUM/inside-llm.git
cd inside-llm
python3 -m http.server 8000
```

访问 `http://localhost:8000`。网页运行不依赖第三方 CDN；外部参考文献需要联网。

## 项目结构

```text
index.html          完整中英课程内容与页面结构
assets/course.js    原课程数据、可视化实验、自测与状态
assets/course.css   实验、公式、表格等基础样式
assets/app.js       单章路由、搜索、继续学习与导航
assets/site.css     响应式布局与视觉系统
assets/favicon.svg  网站图标
docs/               设计说明与验证记录
```

## 内容与实现边界

本项目由原始单文件教程《Inside Large Language Models》整理改造，保留其课程正文、教学实验、自测与逐部分参考文献。实验为浏览器中的教学计算或模拟，不会下载或运行完整大语言模型。显存、性能和架构示例的适用假设见对应章节。

学习记录只存于浏览器 `localStorage`，不上传服务器，也不跨设备同步。清除浏览器数据会移除记录；站点域名改变后，记录不会自动迁移。项目不包含分析追踪或登录系统。

原课程保留引用来源；本次改造未声称逐条重新核验所有论文、文档、模型配置与数值例子。欢迎通过 Issue 或 PR 修正错误，并附上原始论文、官方文档或可复现计算。

## 设计参考与致谢

以下开源项目启发了课程组织与交互呈现；本项目没有复制它们的源代码或视觉资产：

- [Happy-LLM](https://github.com/datawhalechina/happy-llm)：分层学习路线与开源教程组织。
- [Transformer Explainer](https://github.com/poloclub/transformer-explainer)：交互式可视化教学。
- [LLM Visualization](https://github.com/bbycroft/llm-viz)：循序讲解模型计算流程。

## 部署到 GitHub Pages

仓库设置 → Pages → Build and deployment → Deploy from a branch → `main` / `/ (root)` → Save。`.nojekyll` 允许直接托管静态文件。所有站内资源都使用相对路径，支持仓库子路径部署。

## English

Inside LLM is a bilingual, hands-on introduction to neural networks, Transformer internals, and inference infrastructure. It includes 41 lessons across 8 topics, interactive toy experiments, comprehension checks, local search, progress tracking, and light/dark themes.

Choose **English** in the header or **Bilingual** for side-by-side reading. No installation, API key, GPU, or model download is needed. Open `index.html` or serve this directory with any static HTTP server. Learning state stays in your browser. The experiments demonstrate concepts; they do not run a complete LLM.

Contributions, corrections, accessibility improvements, and source-backed explanations are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE). Linked third-party papers, documentation, trademarks, and projects remain subject to their own licenses and rights.
