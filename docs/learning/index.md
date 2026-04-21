---
layout: page
title: Learning Records
---

<div class="page-header">
  <div class="header-pattern"></div>
  <div class="header-content">
    <h1>Learning Records</h1>
    <p class="subtitle">Agent 学习记录、框架笔记、实战总结</p>
  </div>
</div>

<div class="content-wrapper">

## Agent 学习路径

### 基础概念
<div class="path-grid">
  <div class="path-item"><span class="path-icon">◉</span><span>Agent 定义与原理</span></div>
  <div class="path-item"><span class="path-icon">◉</span><span>规划与推理</span></div>
  <div class="path-item"><span class="path-icon">◉</span><span>工具使用</span></div>
  <div class="path-item"><span class="path-icon">◉</span><span>记忆系统</span></div>
</div>

### 框架学习
<div class="path-grid">
  <div class="path-item"><span class="path-icon">◉</span><span>LangChain</span></div>
  <div class="path-item"><span class="path-icon">◉</span><span>LlamaIndex</span></div>
  <div class="path-item"><span class="path-icon">◉</span><span>AutoGPT</span></div>
  <div class="path-item"><span class="path-icon">◉</span><span>CrewAI</span></div>
</div>

### 实战项目
<div class="path-grid">
  <div class="path-item"><span class="path-icon empty">○</span><span>项目一</span></div>
  <div class="path-item"><span class="path-icon empty">○</span><span>项目二</span></div>
</div>

---

## 笔记列表

| 标题 | 类别 | 日期 |
|:---|:---:|:---:|
| [Agent 基础概念](./agent/agent-basics) | 理论 | 2024-01-10 |

</div>

<style>
.page-header {
  background: linear-gradient(135deg, #1a365d 0%, #2c5282 50%, #3182ce 100%);
  color: white;
  padding: 48px 24px;
  position: relative;
  overflow: hidden;
}
.page-header::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #63b3ed, #3182ce, #2c5282);
}
.header-content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.page-header h1 {
  font-family: 'Crimson Pro', serif;
  font-size: 2.2em;
  font-weight: 600;
  margin: 0 0 8px;
}
.page-header .subtitle {
  font-size: 1em;
  opacity: 0.85;
  margin: 0;
}
.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 24px;
}
h2 {
  font-family: 'Crimson Pro', serif;
  font-size: 1.3em;
  font-weight: 600;
  color: #1a365d;
  margin: 32px 0 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #e2e8f0;
}
h3 { color: #1a365d; margin: 20px 0 12px; }
.path-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
  margin: 12px 0;
}
.path-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: #f7fafc;
  border-radius: 6px;
  font-size: 0.95em;
  color: #4a5568;
}
.path-icon { color: #3182ce; font-size: 0.8em; }
.path-icon.empty { color: #cbd5e0; }
table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 0.95em; }
th, td { padding: 12px 16px; text-align: left; border-bottom: 1px solid #e2e8f0; }
th { background: #f7fafc; font-weight: 600; color: #1a365d; }
tr:hover { background: #f7fafc; }
a { color: #3182ce; text-decoration: none; }
a:hover { text-decoration: underline; }
hr { border: none; border-top: 1px dashed #e2e8f0; margin: 32px 0; }
</style>
