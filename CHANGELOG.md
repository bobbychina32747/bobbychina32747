# Changelog

本仓库（profile README）的对外更新记录。游戏与站点的里程碑见各自仓库的 `CHANGELOG.md`。

## v1.0.3 — 2026-09-22

按第二轮外部评审（朋友 review）做的调整：

- **核心定位前置**：第一屏第一行改成标题「学生 · 独立开发者 · 一个人写全栈」，钩子引言紧随其后 —— 扫一眼就知道是谁。
- **视觉层次**：新增自绘 `assets/stats.svg` 数字速览卡（10 年 Minecraft / 01–04 主时段 / M68 里程碑 / `[AI]` 提交前缀），仍为零第三方依赖，不引 github-readme-stats 之类的服务。
- **展开社区设计**：新增小节说明「虚拟资金 + 真实行情 + 可复盘报告」的形态、服务对象、卡点（缺督导、单人推进）与动机。
- **英文精简**：英文区只留定位 + 项目列表 + 技术栈 + 审美与零外联；工作流程细节收进 `More in English` 折叠块，中文为主版不变。
- **双号互导**：AI 号（`Bobbychina/Bobbychina`）README 补上指向本号的说明段（中英各一段）。

## v1.0.2 — 2026-09-22

按外部评审（B+：信息密度高但读着累）做的四项调整：

- **加钩子**：头图下第一行就是一句话定位（引用块）「把炒股游戏做成社区金融素养项目的独立开发者」。
- **开头三行英文**：正文开头加 3 行英文简介 + 锚点跳转到 `## English`，方便国际访客。
- **版式透气**：全部 8 个章节之间加分割线；`Now` 与 `Stack` 表格改成短句单元格；原则、工作方式改成短条目列表；英文区从长段落改成短条目。
- **双账号联动**：新增自绘卡片 `assets/ai-agent.svg`（机器人图标 + `[AI] Bobbychina32747` + 右侧仓库链接），在「作品」区做成可点击的 AI 号入口，并加 `🤖` 小标题。

## v1.0.1 — 2026-09-22

- 头图重做：画布从 1200×340 改为 **880×460**（GitHub profile 页实际渲染列宽约 887px，等于 1:1 不再缩放），字号整体放大约 30%，标题 96px。
- 头图布局：左侧姓名 + 中英标语，右侧新增「作息玻璃卡」（UTC+8 / 01:00–04:00 / most active），底部通栏终端卡（prompt → 输出同行显示）。
- 英文从折叠块改为正文可见的 `## English` 全量对照（Now / Stack / Selected work / Working with AI / How I ship / Aesthetic / Zero third-party）。
- 配色板与页脚改为 1000 宽画布，标签加英文（底 · bg、卡片 · card …），字号同步放大。
- 修掉标题与终端卡重叠：本地无 Georgia 时回退字体更宽，标题右边界实测 605 < 卡片 628。

## v1.0.0 — 2026-09-22

- 首版 profile README：`README.md` + 三张自绘 SVG（`assets/banner.svg` 头图、`assets/palette.svg` 配色板、`assets/footer.svg` 页脚）。
- 零第三方依赖：不使用 shields.io / github-readme-stats 等外部服务，全部图形本地绘制、随仓库分发。
- 头图动画带 `prefers-reduced-motion` 保护，静止状态可读。
- 本地预览链路：`tools/build-preview.mjs`（README → GitHub 渲染 → 可截图 HTML），产物进 `.preview/`，不入库。
