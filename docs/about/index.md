---
layout: page
title: About
---

<div class="page-wrapper">
<header class="header">
<div class="header-pattern"></div>
<div class="header-content">
<div class="avatar-ring"><div class="avatar">郁</div></div>
<div class="header-text">
<h1>郁万祥</h1>
<p class="title-en">Wanxiang Yu</p>
<div class="header-tags">
<span class="tag-chip">南开大学</span>
<span class="tag-chip">软件工程</span>
<span class="tag-chip">硕士</span>
<span class="tag-chip highlight">后端开发</span>
<span class="tag-chip highlight">大模型应用开发</span>
</div>
</div>
</div>
<div class="header-contact">
<a href="mailto:yuwanxiang0114@163.com" class="contact-link">yuwanxiang0114@163.com</a>
<span class="separator">·</span>
<span>19815840515</span>
<span class="separator">·</span>
<span>北京</span>
<span class="separator">·</span>
<span>24岁</span>
<span class="separator">·</span>
<span>男</span>
</div>
</header>

<div class="resume-body">

## 求职意向

<div class="objective-content">
<span class="obj-item">后端开发</span>
<span class="obj-divider">/</span>
<span class="obj-item">大模型应用开发</span>
<span class="obj-divider">/</span>
<span class="obj-item accent">应届生 · 可入职 2026</span>
</div>

## 教育背景

<div class="edu-card">
<div class="edu-header"><h3>南开大学</h3><span class="edu-degree">硕士</span></div>
<p class="edu-info">软件工程 · 2024.09 - 至今</p>
<div class="edu-tags"><span class="mini-tag blue">AI / 大模型</span></div>
</div>

<div class="edu-card">
<div class="edu-header"><h3>南开大学</h3><span class="edu-degree">本科</span></div>
<p class="edu-info">软件工程 · 2020.09 - 2024.06</p>
</div>

## 研究经历

<div class="research-card">
<div class="paper-badge"><span>📄 Paper · SANER 2026 (CCF B 类)</span></div>
<h3>RAG 检索增强与多智能体系统研究</h3>
<p class="period">2025.07 - 2025.12</p>
<ul>
<li>基于 LangGraph 构建有状态、可编排的多智能体工作流，通过有向状态图编排智能体执行顺序与数据流向，设计条件化循环边实现自动迭代优化</li>
<li>优化 LLM 调用与成本控制：采用动态上下文管理 + 混合模型调度策略，角色化上下文压缩使平均对话长度缩减 <span class="metric">65%</span>；分级模型路由使 API 成本降低超 <span class="metric">60%</span></li>
<li>搭建 RAG 检索增强生成系统，将迁移案例、API 文档、社区方案构建为多粒度向量知识库</li>
</ul>
</div>

## 技术栈

<div class="skills-grid">
<div class="skill-group"><h4>AI 编程</h4><div class="skill-tags"><span class="skill-tag primary">Claude Code</span><span class="skill-tag primary">Cursor</span></div></div>
<div class="skill-group"><h4>AI / LLM</h4><div class="skill-tags"><span class="skill-tag primary">LangChain</span><span class="skill-tag primary">LangGraph</span><span class="skill-tag primary">RAG</span><span class="skill-tag primary">多智能体</span></div></div>
<div class="skill-group"><h4>后端</h4><div class="skill-tags"><span class="skill-tag">Go (Gin)</span><span class="skill-tag">Redis</span><span class="skill-tag">MySQL</span><span class="skill-tag">MQTT</span><span class="skill-tag">Kafka</span></div></div>
<div class="skill-group"><h4>存储</h4><div class="skill-tags"><span class="skill-tag">Neo4j</span><span class="skill-tag">Qdrant</span><span class="skill-tag">SQLite</span></div></div>
</div>

## 实习经历

<div class="exp-card">
<div class="exp-header"><h3>Shopee-BJ</h3><span class="exp-badge">AI 应用开发实习生</span></div>
<p class="period">2025.12 - 2026.05</p>

<h4>LLM Gateway 价格监控系统（0-1 设计实现）</h4>
<p><strong>核心：</strong>Playwright 自动化 + ReAct 智能爬虫 + LLM 解析，实现 AI 厂商定价自动化抓取与 MDX 文档同步，数据 100% 官方来源、零幻觉。</p>

<h4>ReAct 智能爬虫架构</h4>
<p>基于 Observe→Think→Act 循环让 LLM 自主完成页面交互，替代硬编码规则，降低维护成本、提升适应性。</p>

<h4>LLM 反幻安全体系</h4>
<p>三级名称解析（AliasYAML→白名单→LM 闭集兜底），结合白名单约束、价格校验、多轮自纠正，杜绝幻觉。</p>

<h4>MDX 文档自动更新</h4>
<p>LLMUpdater + 自纠正 + 大表格分块策略，完成复杂表格语义级精准更新。</p>
</div>

<div class="exp-card">
<div class="exp-header"><h3>Shopee-BJ</h3><span class="exp-badge">大模型平台后端工程实习生</span></div>
<p class="period">2025.12 - 2026.05</p>

<h4>大模型统一调用网关（OpenAI 兼容 HTTP API）</h4>
<p>面向内部业务提供 Chat/Responses 等统一调用入口，API Key 鉴权、项目路由、计费 / 额度 / 审计全打通；技术栈 Go (Gin)+Redis+MySQL。</p>

<h4>Prompt 模块全链路设计实现</h4>
<p>支持 Prompt / 版本管理、默认版本、按版本渲染，兼容 Chat/Responses 等多类型输出。</p>

<h4>接入核心推理路径</h4>
<p>在 Responses 接口支持 prompt_id 模式，先渲染再合并请求体，保证下游调用参数统一、错误对齐。</p>

<h4>性能与一致性保障</h4>
<p>Redis 缓存 Prompt 模板，删改时主动失效；解析回写实际版本号，确保 DB 与缓存一致。</p>

<h4>审计对账打通</h4>
<p>审计日志携带 prompt_id/version，实现版本可追溯、存储与日志一致。</p>
</div>

<div class="exp-card">
<div class="exp-header"><h3>青岛谷岳机器人有限公司</h3><span class="exp-badge secondary">后端开发实习生</span></div>
<p class="period">2024.09 - 2025.01</p>

<h4>智能工厂集中监控与可视化平台（接入上百台工业机器人）</h4>
<p><strong>数据接入：</strong>基于 MQTT 接收设备数据，引入 Kafka 做缓冲层，保障数据不丢失。</p>
<p><strong>数据处理：</strong>实时写入 Redis 缓存（查询响应≤50ms），分钟级聚合写入 MySQL，数据压缩 95%。</p>
<p><strong>实时推送：</strong>维护 WebSocket 连接池，报警消息毫秒级推送，端到端延迟≤50ms。</p>
</div>

## 项目经历

<div class="project-card">
<h3>南开大学心理健康智能平台</h3>
<p class="period">2025.08 - 2025.11 · 核心开发</p>
<p><strong>实时流式脱敏管道：</strong>正则 + NER 混合识别敏感实体，纯内存处理、数据不落盘。</p>
<p><strong>三层记忆架构：</strong>工作记忆（内存 TTL）、情景记忆（SQLite+Qdrant）、语义记忆（Neo4j 知识图谱），支撑多轮对话与历史回溯。</p>
<p><strong>混合检索重排序：</strong>TF-IDF、向量 + 结构、向量 + 图遍历融合检索，实现三维加权排序。</p>
<p><strong>大模型统一调用层：</strong>封装多模型适配与自动降级，结合情绪标签优化提示词；基于 SSE 实现流式传输，保障服务连续与低延迟。</p>
</div>

## 荣誉奖项

<div class="awards-grid">
<div class="award-card"><span class="award-icon">🏆</span><p><strong>企业实训"优秀个人"</strong><br/><span class="sub">南开大学软件学院</span></p></div>
<div class="award-card"><span class="award-icon">🎓</span><p><strong>公能奖学金</strong><br/><span class="sub">2024 · 2025</span></p></div>
<div class="award-card"><span class="award-icon">🏅</span><p><strong>文体奖学金</strong><br/><span class="sub">2025</span></p></div>
</div>

</div>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap>');

.page-wrapper {
  --primary: #1a365d;
  --accent: #3182ce;
  --bg: #f7fafc;
  --bg-card: #ffffff;
  --text: #1a202c;
  --text-secondary: #4a5568;
  --border: #e2e8f0;
  font-family: 'IBM Plex Sans', -apple-system, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  min-height: 100vh;
}

.header {
  background: linear-gradient(135deg, #1a365d 0%, #2c5282 50%, #3182ce 100%);
  color: white;
  padding: 64px 24px 48px;
  position: relative;
}
.header::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #63b3ed, #3182ce, #2c5282);
}
.header-content {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 32px;
}
.avatar-ring {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05));
  padding: 4px;
  flex-shrink: 0;
}
.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(255,255,255,0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5em;
  color: var(--primary);
  font-weight: 600;
  font-family: 'Crimson Pro', serif;
}
.header-text h1 {
  font-family: 'Crimson Pro', serif;
  font-size: 2.4em;
  font-weight: 600;
  margin: 0;
  letter-spacing: 2px;
}
.title-en {
  font-size: 1em;
  opacity: 0.8;
  margin: 4px 0 12px;
}
.header-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.tag-chip {
  background: rgba(255,255,255,0.15);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85em;
}
.tag-chip.highlight {
  background: rgba(99, 179, 237, 0.4);
  border: 1px solid rgba(255,255,255,0.2);
}
.header-contact {
  max-width: 900px;
  margin: 24px auto 0;
  font-size: 0.9em;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}
.contact-link {
  color: #90cdf4;
  text-decoration: none;
}
.separator { opacity: 0.5; }
.resume-body {
  max-width: 900px;
  margin: 0 auto;
  padding: 48px 24px;
}
h2 {
  font-family: 'Crimson Pro', serif;
  font-size: 1.3em;
  font-weight: 600;
  color: var(--primary);
  margin: 32px 0 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--border);
}
h3 { font-size: 1.05em; color: var(--primary); margin: 0; }
h4 { font-size: 0.95em; color: var(--accent); margin: 12px 0 8px; font-weight: 500; }
.objective-content {
  background: linear-gradient(135deg, #ebf8ff, #f0f7ff);
  border: 1px solid #bee3f8;
  border-radius: 8px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 0.95em;
}
.obj-item { color: var(--text); }
.obj-item.accent { color: var(--accent); font-weight: 500; }
.obj-divider { color: var(--text-secondary); }
.edu-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 12px;
}
.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}
.edu-degree {
  background: var(--accent);
  color: white;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 0.75em;
}
.edu-info { color: var(--text-secondary); font-size: 0.9em; margin: 0; }
.edu-tags { display: flex; gap: 6px; margin-top: 8px; }
.mini-tag { background: var(--bg); color: var(--text-secondary); padding: 2px 8px; border-radius: 4px; font-size: 0.8em; }
.mini-tag.blue { background: #ebf8ff; color: var(--accent); }
.research-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 20px 24px;
}
.paper-badge {
  display: inline-block;
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  color: #92400e;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8em;
  margin-bottom: 12px;
}
.period { color: var(--text-secondary); font-size: 0.85em; margin: 4px 0 12px; }
.research-card ul, .exp-card ul { margin: 0; padding-left: 18px; }
.research-card li, .exp-card li { margin-bottom: 6px; color: var(--text-secondary); }
.metric {
  font-family: 'JetBrains Mono', monospace;
  background: #ebf8ff;
  color: var(--accent);
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 0.85em;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
.skill-group {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px;
}
.skill-group h4 {
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-secondary);
  margin: 0 0 10px;
}
.skill-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.skill-tag {
  background: var(--bg);
  color: var(--text-secondary);
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.85em;
  border: 1px solid var(--border);
}
.skill-tag.primary { background: var(--primary); color: white; border-color: var(--primary); }
.exp-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 16px;
}
.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 4px;
}
.exp-badge {
  background: linear-gradient(135deg, var(--accent), var(--primary));
  color: white;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.75em;
}
.exp-badge.secondary { background: var(--text-secondary); }
.exp-card p { color: var(--text-secondary); margin: 0 0 8px; line-height: 1.5; }
.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 16px;
}
.project-card h3 { margin-bottom: 4px; }
.awards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}
.award-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.award-icon { font-size: 1.8em; }
.award-card p { margin: 0; font-size: 0.95em; }
.award-card .sub { color: var(--text-secondary); font-size: 0.85em; }

@media (max-width: 600px) {
  .header { padding: 48px 16px 32px; }
  .header-content { flex-direction: column; text-align: center; }
  .header-text h1 { font-size: 1.8em; }
  .header-tags { justify-content: center; }
  .header-contact { flex-direction: column; gap: 4px; }
  .separator { display: none; }
  .resume-body { padding: 32px 16px; }
  .exp-header { flex-direction: column; align-items: flex-start; }
}
</style>
