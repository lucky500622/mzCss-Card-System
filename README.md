# mzCss-CardSystem

## 项目简介

`mzCss-CardSystem` 是一个基于 Vue 3 的前端卡片系统项目，用于做卡卷兑换，自用。

## 技术栈

| 技术 | 说明 |
| --- | --- |
| Vue 3 | 核心框架，使用组合式 API 和单文件组件进行开发。 |
| TypeScript | 提供静态类型检查和更安全的语法支持。 |
| Vite | 作为开发与构建工具，提供快速冷启动和模块热更新。 |
| Vue Router | 负责页面路由与导航管理。 |
| Pinia | 作为状态管理库，替代 Vuex，用于全局数据管理。 |
| Vant | 移动端 UI 组件库，用于构建统一风格的交互界面。 |
| PostCSS | 处理 CSS 转换，包含 `postcss-px-to-viewport` 适配移动端布局。 |
| ESLint + Prettier + OXLint | 代码规范与格式化工具，保证代码风格一致性。 |
| Vue TSC | Vue 单文件组件的 TypeScript 类型检查工具。 |
| vite-plugin-gh-pages | 支持将构建产物部署到 GitHub Pages。 |
| vite-plugin-vue-devtools | 开发时增强 Vue 调试体验。 |

## 开发环境

- Node.js: `^22.18.0 || >=24.12.0`
- 现代浏览器

## 常用命令

- `npm run dev`：本地启动开发服务器。
- `npm run build`：构建生产包。
- `npm run preview`：预览构建后的静态站点。
- `npm run lint`：运行 ESLint 校验并自动修复。
- `npm run format`：格式化 `src/` 下代码。
- `npm run deploy`：构建并部署到 GitHub Pages。