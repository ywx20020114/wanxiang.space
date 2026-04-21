---
layout: page
title: About
---

# 关于我

<div class="profile">
  <div class="avatar">郁</div>
  <h1>郁万祥</h1>
  <p class="subtitle">南开大学 · 软件工程硕士 · 24届</p>
  <div class="contact">
    <span>📧 yuwanxiang0114@163.com</span>
    <span>📱 19815840515</span>
  </div>
</div>

## 教育背景

| 时间 | 学校 | 学历 | 专业 |
|------|------|------|------|
| 2024.09 - 至今 | 南开大学 | 硕士 | 软件工程 |
| 2020.09 - 2024.06 | 南开大学 | 本科 | 软件工程 |

## 专业技能

<div class="skills-grid">
  <div class="skill-category">
    <h4>后端技术</h4>
    <div class="tags">
      <span class="tag primary">Java</span>
      <span class="tag">Spring Boot</span>
      <span class="tag">MySQL</span>
      <span class="tag">Redis</span>
      <span class="tag">Kafka</span>
      <span class="tag">MQTT</span>
    </div>
  </div>
  <div class="skill-category">
    <h4>AI 应用</h4>
    <div class="tags">
      <span class="tag primary">LangChain</span>
      <span class="tag">LangGraph</span>
      <span class="tag">RAG</span>
      <span class="tag">多模型调度</span>
    </div>
  </div>
  <div class="skill-category">
    <h4>工具</h4>
    <div class="tags">
      <span class="tag">Claude Code</span>
      <span class="tag">Cursor</span>
      <span class="tag">Git</span>
      <span class="tag">Linux</span>
    </div>
  </div>
</div>

## 研究经历

<div class="section">
  <div class="item">
    <div class="item-header">
      <h3>RAG检索增强与多智能体系统研究</h3>
      <span class="date">2025.07 - 2025.12</span>
    </div>
    <ul class="details">
      <li>基于 LangGraph 构建多智能体工作流，编排执行顺序与数据流向</li>
      <li>角色化上下文压缩缩减65%对话长度，分级模型路由降低60% API成本</li>
      <li>CoMRA 论文已被 <strong>SANER 2026 (CCF B)</strong> 接受</li>
    </ul>
  </div>
</div>

## 实习经历

<div class="section">
  <div class="item">
    <div class="item-header">
      <h3>Shopee-BJ · AI应用开发实习生</h3>
      <span class="date">2025.12 - 至今</span>
    </div>
    <p class="project-title">多厂商 LLM 定价自动同步 Agent</p>
    <ul class="details">
      <li>基于 LangChain LCEL 搭建多步状态流水线：抓取 → 解析 → 差异计算 → MDX更新</li>
      <li>设计两级名称映射策略 + 白名单闭集约束，确保LLM不产生幻觉</li>
      <li>OpenClaw 定时任务编排，实现按日同步与变更通知</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <h3>青岛谷岳机器人 · 后端开发实习生</h3>
      <span class="date">2024.09 - 2025.01</span>
    </div>
    <p class="project-title">智能工厂集中监控与可视化平台</p>
    <ul class="details">
      <li>MQTT + Kafka 数据缓冲，Redis Hash 缓存查询响应≤50ms</li>
      <li>MySQL 批量写入压缩95%数据量，支撑历史趋势分析</li>
      <li>WebSocket 毫秒级主动推送报警，端到端延迟≤50ms</li>
    </ul>
  </div>
</div>

## 项目经历

<div class="section">
  <div class="item">
    <div class="item-header">
      <h3>南开大学心理健康智能平台</h3>
      <span class="date">2025.08 - 2025.11</span>
    </div>
    <ul class="details">
      <li>实时流式脱敏管道：正则 + NER 模型，"标签化脱敏"保障数据不落盘</li>
      <li>大模型统一调用层：对话记忆 + 情绪标签 + 多模型自动降级</li>
      <li>SSE 流式问答 API，端到端透传保障低延迟流畅交互</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <h3>LLM Gateway · Prompts 模块</h3>
      <span class="date">独立负责</span>
    </div>
    <ul class="details">
      <li>企业级 AI 提示词管理平台：版本管理、双格式渲染引擎</li>
      <li>GORM 事务保证数据一致性，MySQL 唯一索引 + 409 重试处理并发</li>
      <li>Redis 三级缓存 + 游标分页优化，查询从 2N+1 次降至 3 次</li>
    </ul>
  </div>
</div>

## 荣誉奖项

<div class="awards">
  <span class="award">🏆 南开大学软件学院企业实训"优秀个人"</span>
  <span class="award">🎓 南开大学 2024、2025 公能奖学金</span>
  <span class="award">🏅 南开大学 2025 文体奖学金</span>
</div>

## 求职意向

<div class="target">
  <span>🎯 岗位：后端开发 / 大模型应用开发</span>
  <span>📍 城市：北京</span>
  <span>📅 状态：应届生 / 实习生</span>
</div>

---

<style scoped>
.profile {
  text-align: center;
  padding: 40px 0;
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 40px;
}

.avatar {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #646cff, #9252ff);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  color: white;
  margin: 0 auto 16px;
}

.profile h1 {
  font-size: 2em;
  margin: 0 0 8px;
}

.subtitle {
  font-size: 1.1em;
  color: var(--vp-c-text-2);
  margin: 0 0 16px;
}

.contact {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  font-size: 0.95em;
}

.contact span {
  color: var(--vp-c-text-2);
}

h2 {
  margin-top: 40px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 1.3em;
}

h3 {
  font-size: 1.05em;
  margin: 0;
}

h4 {
  font-size: 0.9em;
  margin: 0 0 10px;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin: 20px 0;
}

.skill-category {
  padding: 16px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  background: var(--vp-c-bg);
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.85em;
}

.tag.primary {
  background: var(--vp-c-brand-1);
  color: white;
}

/* Section */
.section {
  margin: 20px 0;
}

.item {
  padding: 20px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  margin-bottom: 16px;
}

.item:last-child {
  margin-bottom: 0;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
  flex-wrap: wrap;
  gap: 8px;
}

.item-header h3 {
  color: var(--vp-c-brand-1);
}

.date {
  color: var(--vp-c-text-2);
  font-size: 0.9em;
  white-space: nowrap;
}

.project-title {
  color: var(--vp-c-text-2);
  margin: 0 0 12px;
  font-size: 0.95em;
}

.details {
  margin: 0;
  padding-left: 20px;
}

.details li {
  margin-bottom: 6px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.details li:last-child {
  margin-bottom: 0;
}

/* Awards */
.awards {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 20px 0;
}

.award {
  background: var(--vp-c-bg-soft);
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.9em;
}

/* Target */
.target {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
  background: linear-gradient(135deg, var(--vp-c-bg-soft), var(--vp-c-bg));
  border-radius: 8px;
  margin: 20px 0;
}

.target span {
  font-size: 0.95em;
}

/* Table */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
}

th, td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid var(--vp-c-divider);
}

th {
  background: var(--vp-c-bg-soft);
  font-weight: 600;
}
</style>
