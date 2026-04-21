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
<span class="tag-chip highlight">AI 应用开发</span>
</div>
</div>
</div>
<div class="header-contact">
<a href="mailto:yuwanxiang0114@163.com" class="contact-link">yuwanxiang0114@163.com</a>
<span class="separator">·</span>
<span>19815840515</span>
<span class="separator">·</span>
<span>北京</span>
</div>
</header>

<div class="resume-body">

## 求职意向

<div class="objective-content">
<span class="obj-item">后端开发</span>
<span class="obj-divider">/</span>
<span class="obj-item">大模型应用开发</span>
<span class="obj-divider">/</span>
<span class="obj-item accent">应届生 · 可入职 2025</span>
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
<div class="paper-badge"><span>📄 Paper · SANER 2026 (CCF B)</span></div>
<h3>RAG检索增强与多智能体系统研究</h3>
<p class="period">2025.07 - 2025.12</p>
<ul>
<li>基于 LangGraph 构建多智能体工作流，条件化循环边实现自动迭代优化</li>
<li>角色化上下文压缩缩减 <span class="metric">65%</span> 对话长度，分级模型路由降低 <span class="metric">60%</span> API成本</li>
</ul>
</div>

## 技术栈

<div class="skills-grid">
<div class="skill-group"><h4>后端</h4><div class="skill-tags"><span class="skill-tag">Java</span><span class="skill-tag">Spring Boot</span><span class="skill-tag">MySQL</span><span class="skill-tag">Redis</span><span class="skill-tag">Kafka</span></div></div>
<div class="skill-group"><h4>AI / LLM</h4><div class="skill-tags"><span class="skill-tag primary">LangChain</span><span class="skill-tag primary">LangGraph</span><span class="skill-tag primary">RAG</span></div></div>
<div class="skill-group"><h4>工具</h4><div class="skill-tags"><span class="skill-tag">Claude Code</span><span class="skill-tag">Cursor</span><span class="skill-tag">Git</span><span class="skill-tag">Linux</span></div></div>
</div>

## 实习经历

<div class="exp-card">
<div class="exp-header"><h3>Shopee-BJ</h3><span class="exp-badge">AI应用开发实习生</span></div>
<p class="period">2025.12 - 至今</p>
<h4>LLM Gateway 平台开发</h4>
<p><strong>Prompts 模块</strong>：GORM 事务 + MySQL 唯一索引 + 409 重试 + Redis 三级缓存 + 游标分页查询</p>
<p><strong>定价 Agent</strong>：LangChain LCEL 多步流水线 + ReAct 智能爬虫 + 白名单闭集反幻觉设计</p>
</div>

<div class="exp-card">
<div class="exp-header"><h3>青岛谷岳机器人</h3><span class="exp-badge secondary">后端开发实习生</span></div>
<p class="period">2024.09 - 2025.01</p>
<p><strong>智能工厂集中监控平台</strong>：MQTT + Kafka 数据缓冲 + Redis Hash 查询响应 ≤50ms + WebSocket 毫秒级推送</p>
</div>

## 项目经历

<div class="project-card">
<h3>南开大学心理健康智能平台</h3>
<p class="period">2025.08 - 2025.11 · 核心开发成员</p>
<p><strong>三层记忆系统</strong>：工作记忆(SQLite+Qdrant) + 情景记忆(Neo4j) + 语义记忆</p>
<p><strong>其他</strong>：正则+NER 流式脱敏、混合检索重排、SSE 端到端透传</p>
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
