# 作业要求与提交清单

## 这份作业要做什么？

用原生 HTML5、CSS3、ES6+ 制作个人主页，展示有意义的个人介绍、项目内容和一个创意组件。必须是前端静态网站，不能用后端、jQuery 或组件库。至少两个普通 HTML 页面，再加一个明确标记的 AI-generated page。所有浏览器脚本必须是 ES modules。

原 PDF 共 235 分：设计文档 80 分；有意义的主页内容 15 分；公开视频讲解 15 分；GenAI 披露 10 分；code review 20 分；其余 19 项各 5 分。页面写着 Monday 11:59am，但没有明确日历日期；请以 Canvas 当前截止时间和课程时区为准。

## 已准备的文件与 rubric 对应

| 要求                                                    | 文件/实现                                                        | 状态                                       |
| ------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------ |
| 设计文档：description、personas、stories、mockups（80） | `design-document.md`、`mockups.svg`                              | 已提供；请审阅                             |
| 有意义的主页（15）                                      | 首页介绍、工作方法、项目页                                       | 已按简历更新工作及项目经历                 |
| ES modules（5）                                         | HTML `type="module"`、package.json `type: module`、import/export | 已实现                                     |
| 创意组件（5）                                           | Engineering Desk：选择优先级，阅读工程取舍                       | 已实现，AI 协助                            |
| 原创 JS >5 行（5）                                      | 优先级切换、项目过滤、AI mixer                                   | 已实现；学生本人须理解并确认课程 AI 政策   |
| 资源分类（5）                                           | css、js、images、docs                                            | 已完成                                     |
| author / description / icon（5）                        | 三页 head                                                        | 已完成                                     |
| Prettier（5）                                           | 配置及格式检查                                                   | 见 QA 报告                                 |
| W3C（5）                                                | 三个 HTML 文件                                                   | 见 QA 报告；官方验证结果不可用本地检查替代 |
| 课程 ESLint（5）                                        | 已接入用户提供的课程配置                                         | **已通过：0 errors、0 warnings**           |
| 图片 alt（5）                                           | 首页流程图                                                       | 已实现                                     |
| 两个 HTML 页面 + AI 第三页（5）                         | index / projects / ai-lab                                        | 已完成；前三页均如实披露 AI 协助           |
| classes（5）                                            | 结构、样式、交互选择器                                           | 已使用                                     |
| 标准语义标签（5）                                       | header/nav/main/section/article/button/input                     | 已使用                                     |
| 清晰 CSS，无 important（5）                             | css/styles.css 分节                                              | 已完成                                     |
| grid/flex（5）                                          | 响应式布局及导航                                                 | 已完成                                     |
| README（5）                                             | 作者、课程链接、目标、截图、运行构建                             | 已提供                                     |
| package.json（5）                                       | 模块类型、全部开发依赖和 scripts                                 | 已提供                                     |
| MIT（5）                                                | LICENSE                                                          | 已提供                                     |
| 公开部署（5）                                           | 公开可访问网址                                                   | **待你完成**                               |
| 公开且有旁白的视频（15）                                | 建议演示提纲见下                                                 | **待你录制并公开**                         |
| Google Form（5）                                        | 缩略图及全部链接                                                 | **待你提交并检查**                         |
| GenAI（10）                                             | README + genai-disclosure.md                                     | 已记录；补充界面实际模型名称/版本          |
| Code review（20）                                       | 课程安排的代码审查                                               | **待你亲自完成**                           |

## 你接下来需要做的事

1. 在本地运行网站，逐页审阅个人介绍。已根据你提供的简历更新 Rivian、Meta 实习经历和 SQL Master Class、Support-Ticket RAG Assistant 项目，并加入领英链接。请确认公开表述准确。
2. **课程 ESLint 已完成**：已接入你提供的 `eslint.config.js`，保留规则，仅统一格式；补齐插件并通过检查。之后每次改代码，运行 `npm run format` 和 `npm run lint` 复查。
3. 核对课程 AI 政策，尤其是“student implemented original JS”以及前两个页面的 AI 使用边界。本交付不能证明你本人独立实现；请理解、修改并解释代码，不隐瞒生成过程。
4. 将项目放到你的代码仓库，用静态托管服务部署根目录或构建后的 `dist/`。验证首页、`projects.html`、`ai-lab.html` 均能直接访问和刷新。网址必须无需你的账号登录。
5. 在 W3C validator 使用 File Upload 或部署后的 URL 分别检查三个 HTML 页面。修复并记录错误为零的结果。
6. 录制有本人旁白的短视频，并设为公开可访问。PDF 没有指定时长；建议约 2–3 分钟，最终遵照课堂通知。
7. 填老师给的 Google Form，检查缩略图显示、网站/视频/仓库链接。附件中没有 Form 地址，不要使用猜测链接。
8. 按课程说明完成 code review。PDF 给出的教程：https://www.youtube.com/watch?v=fNnIgo4mIeo 。本项目没有代替你完成审查。
9. 在 Canvas 提交公开网站 URL，并补齐 README 中的公开链接及实际模型信息（如课程要求）。

## 视频建议提纲

- 介绍姓名和主页目标。
- 展示首页，切换 Clarity / Speed / Resilience，说明对应取舍。
- 展示项目页，过滤 Web / Systems，介绍两个简历项目的技术、贡献与结果。
- 展示 AI 页面，拖动滑块并解释 AI 使用范围。
- 简单展示模块、资源文件夹、响应式布局与设计文档。
- 说明验证结果、公开部署及任何尚存限制。

## 最后填写（不要把未填内容冒充已提交）

- Public website URL：待填写
- Repository URL：待填写
- Public narrated video URL：待填写
- Google Form confirmation：待完成
- Code review confirmation：待完成
- Class ESLint result：已通过，0 errors / 0 warnings（使用用户提供的课程配置）
- Exact visible model/version label：待核实
