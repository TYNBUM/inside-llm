# Contributing / 参与贡献

欢迎改善 Inside LLM 的准确性、双语表达、互动实验和无障碍体验。

## 报告问题

请提供章节编号、操作步骤、预期与实际结果、浏览器与屏幕尺寸。内容纠错请附原始论文、官方文档或计算过程。不要在 Issue 中提交私人笔记或账号凭据。

## 修改与验证

1. Fork 仓库，在独立分支修改。
2. 用静态服务器打开 `index.html`；不需要安装依赖。
3. 检查中文、English、双语、浅色、深色及手机布局。
4. 如涉及导航，验证直接章节链接、搜索、前进/后退和刷新。
5. 如涉及实验或自测，给出至少一个已知结果，验证交互改变后的数值及状态保存。
6. 提交 PR，说明改动原因、截图或数值证据，以及尚未验证的部分。

课程内容在 `index.html`；课程数据、实验及自测在 `assets/course.js`。阅读壳层在 `assets/app.js`，视觉样式在 `assets/site.css`。保留现有章节 ID，以免破坏分享链接。

Do not add a build system or external runtime dependency without explaining the need. Keep Chinese and English content aligned. Distinguish general principles, model-specific choices, teaching simplifications, and uncertainty. Contributions are provided under the repository's MIT license.
