# Changelog

本仓库（profile README）的对外更新记录。游戏与站点的里程碑见各自仓库的 `CHANGELOG.md`。

## v1.0.0 — 2026-09-22

- 首版 profile README：`README.md` + 三张自绘 SVG（`assets/banner.svg` 头图、`assets/palette.svg` 配色板、`assets/footer.svg` 页脚）。
- 零第三方依赖：不使用 shields.io / github-readme-stats 等外部服务，全部图形本地绘制、随仓库分发。
- 头图动画带 `prefers-reduced-motion` 保护，静止状态可读。
- 本地预览链路：`tools/build-preview.mjs`（README → GitHub 渲染 → 可截图 HTML），产物进 `.preview/`，不入库。
