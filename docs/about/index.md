---
layout: page
title: About
---

<div class="page-wrapper">
  <!-- Header -->
  <header class="header">
    <div class="header-pattern"></div>
    <div class="header-content">
      <div class="avatar-ring">
        <div class="avatar">郁</div>
      </div>
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

    <!-- Objective -->
    <section class="section objective">
      <h2 class="section-title">
        <span class="title-icon">◎</span>
        求职意向
      </h2>
      <div class="objective-content">
        <span class="obj-item">后端开发</span>
        <span class="obj-divider">/</span>
        <span class="obj-item">大模型应用开发</span>
        <span class="obj-divider">/</span>
        <span class="obj-item accent">应届生 · 可入职 2025</span>
      </div>
    </section>

    <!-- Education -->
    <section class="section">
      <h2 class="section-title">
        <span class="title-icon">◎</span>
        教育背景
      </h2>
      <div class="edu-list">
        <div class="edu-item">
          <div class="edu-marker"></div>
          <div class="edu-content">
            <div class="edu-header">
              <h3>南开大学</h3>
              <span class="edu-degree">硕士</span>
            </div>
            <p class="edu-info">软件工程 · 2024.09 - 至今</p>
            <div class="edu-tags">
              <span class="mini-tag">研究方向</span>
              <span class="mini-tag blue">AI / 大模型</span>
            </div>
          </div>
        </div>
        <div class="edu-item">
          <div class="edu-marker"></div>
          <div class="edu-content">
            <div class="edu-header">
              <h3>南开大学</h3>
              <span class="edu-degree">本科</span>
            </div>
            <p class="edu-info">软件工程 · 2020.09 - 2024.06</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Research -->
    <section class="section">
      <h2 class="section-title">
        <span class="title-icon">◎</span>
        研究经历
      </h2>
      <div class="research-card">
        <div class="paper-badge">
          <span class="paper-icon">📄</span>
          <span>Paper · SANER 2026 (CCF B)</span>
        </div>
        <h3>RAG检索增强与多智能体系统研究</h3>
        <p class="research-period">2025.07 - 2025.12</p>
        <ul class="research-points">
          <li>基于 LangGraph 构建多智能体工作流，<span class="highlight-text">条件化循环边</span>实现自动迭代优化</li>
          <li>角色化上下文压缩缩减 <span class="metric">65%</span> 对话长度，分级模型路由降低 <span class="metric">60%</span> API成本</li>
        </ul>
      </div>
    </section>

    <!-- Skills -->
    <section class="section">
      <h2 class="section-title">
        <span class="title-icon">◎</span>
        技术栈
      </h2>
      <div class="skills-matrix">
        <div class="skill-group">
          <h4>后端</h4>
          <div class="skill-tags">
            <span class="skill-tag">Java</span>
            <span class="skill-tag">Spring Boot</span>
            <span class="skill-tag">MySQL</span>
            <span class="skill-tag">Redis</span>
            <span class="skill-tag">Kafka</span>
          </div>
        </div>
        <div class="skill-group">
          <h4>AI / LLM</h4>
          <div class="skill-tags">
            <span class="skill-tag primary">LangChain</span>
            <span class="skill-tag primary">LangGraph</span>
            <span class="skill-tag primary">RAG</span>
          </div>
        </div>
        <div class="skill-group">
          <h4>工具</h4>
          <div class="skill-tags">
            <span class="skill-tag">Claude Code</span>
            <span class="skill-tag">Cursor</span>
            <span class="skill-tag">Git</span>
            <span class="skill-tag">Linux</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="section">
      <h2 class="section-title">
        <span class="title-icon">◎</span>
        实习经历
      </h2>

      <div class="exp-card">
        <div class="exp-header">
          <div class="exp-title-row">
            <h3>Shopee-BJ</h3>
            <span class="exp-badge">AI应用开发实习生</span>
          </div>
          <p class="exp-period">2025.12 - 至今</p>
        </div>

        <div class="exp-project">
          <h4>LLM Gateway 平台开发</h4>

          <div class="project-block">
            <span class="project-label">Prompts 模块</span>
            <ul class="exp-points">
              <li><strong>事务一致性</strong>：GORM 事务保证主表与版本表原子操作</li>
              <li><strong>并发控制</strong>：MySQL 唯一索引 + 409 重试机制</li>
              <li><strong>性能优化</strong>：Redis 三级缓存 + 游标分页，查询 <span class="metric">2N+1 → 3</span></li>
              <li><strong>多层级校验</strong>：SDK格式 + JSON序列化 + 变量完整性</li>
            </ul>
          </div>

          <div class="project-block">
            <span class="project-label">定价 Agent</span>
            <ul class="exp-points">
              <li>LangChain LCEL 多步流水线：抓取 → 解析 → 差异计算 → MDX更新</li>
              <li><strong>ReAct 智能爬虫</strong>：LLM 自主决策页面交互</li>
              <li><strong>反幻觉设计</strong>：白名单闭集 + temperature=0 + 自纠正</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="exp-card">
        <div class="exp-header">
          <div class="exp-title-row">
            <h3>青岛谷岳机器人</h3>
            <span class="exp-badge secondary">后端开发实习生</span>
          </div>
          <p class="exp-period">2024.09 - 2025.01</p>
        </div>
        <div class="exp-project">
          <h4>智能工厂集中监控与可视化平台</h4>
          <ul class="exp-points">
            <li>MQTT + Kafka 数据缓冲，Redis Hash 查询响应 <span class="metric">≤50ms</span></li>
            <li>MySQL 批量写入压缩 <span class="metric">95%</span> 数据量</li>
            <li>WebSocket 毫秒级推送，端到端延迟 <span class="metric">≤50ms</span></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section class="section">
      <h2 class="section-title">
        <span class="title-icon">◎</span>
        项目经历
      </h2>

      <div class="project-card">
        <div class="project-header">
          <h3>南开大学心理健康智能平台</h3>
          <span class="project-period">2025.08 - 2025.11</span>
        </div>
        <p class="project-role">核心开发成员</p>

        <div class="tech-highlight">
          <span class="tech-label">三层记忆系统</span>
          <div class="memory-layers">
            <div class="layer">
              <span class="layer-name">工作记忆</span>
              <span class="layer-desc">容量控制 + TTL淘汰 + 加权淘汰策略</span>
            </div>
            <div class="layer">
              <span class="layer-name">情景记忆</span>
              <span class="layer-desc">SQLite + Qdrant 两阶段检索</span>
            </div>
            <div class="layer">
              <span class="layer-name">语义记忆</span>
              <span class="layer-desc">Neo4j 知识图谱融合检索</span>
            </div>
          </div>
        </div>

        <ul class="exp-points">
          <li>流式脱敏：正则 + NER 模型混合识别，数据纯内存处理绝不落盘</li>
          <li>混合检索重排：语义相似度(<span class="metric">0.7</span>) + 时间近因性(<span class="metric">0.2</span>) + 重要性乘数</li>
          <li>SSE 流式 API：端到端透传，<span class="metric">到达即清空</span>消除顿挫感</li>
        </ul>
      </div>
    </section>

    <!-- Awards -->
    <section class="section">
      <h2 class="section-title">
        <span class="title-icon">◎</span>
        荣誉奖项
      </h2>
      <div class="awards-grid">
        <div class="award-card">
          <span class="award-icon">🏆</span>
          <div class="award-text">
            <p class="award-title">企业实训"优秀个人"</p>
            <p class="award-org">南开大学软件学院</p>
          </div>
        </div>
        <div class="award-card">
          <span class="award-icon">🎓</span>
          <div class="award-text">
            <p class="award-title">公能奖学金</p>
            <p class="award-org">2024 · 2025</p>
          </div>
        </div>
        <div class="award-card">
          <span class="award-icon">🏅</span>
          <div class="award-text">
            <p class="award-title">文体奖学金</p>
            <p class="award-org">2025</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

.page-wrapper {
  --primary: #1a365d;
  --primary-light: #2c5282;
  --accent: #3182ce;
  --accent-light: #63b3ed;
  --bg: #f7fafc;
  --bg-card: #ffffff;
  --text: #1a202c;
  --text-secondary: #4a5568;
  --text-muted: #718096;
  --border: #e2e8f0;
  --highlight: #ebf8ff;

  font-family: 'IBM Plex Sans', -apple-system, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  min-height: 100vh;
}

/* Header */
.header {
  background: linear-gradient(135deg, #1a365d 0%, #2c5282 50%, #3182ce 100%);
  color: white;
  padding: 64px 24px 48px;
  position: relative;
  overflow: hidden;
}

.header-pattern {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255,255,255,0.03) 0%, transparent 40%);
  pointer-events: none;
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
  font-weight: 300;
  letter-spacing: 1px;
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
  backdrop-filter: blur(4px);
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

.contact-link:hover {
  text-decoration: underline;
}

.separator {
  opacity: 0.5;
}

/* Body */
.resume-body {
  max-width: 900px;
  margin: 0 auto;
  padding: 48px 24px;
}

/* Section */
.section {
  margin-bottom: 48px;
}

.section-title {
  font-family: 'Crimson Pro', serif;
  font-size: 1.3em;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--border);
  display: flex;
  align-items: center;
  gap: 10px;
}

.title-icon {
  color: var(--accent);
  font-size: 1.1em;
}

/* Objective */
.objective-content {
  background: linear-gradient(135deg, var(--highlight), #f0f7ff);
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

.obj-item {
  color: var(--text);
}

.obj-item.accent {
  color: var(--accent);
  font-weight: 500;
}

.obj-divider {
  color: var(--text-muted);
}

/* Education */
.edu-list {
  position: relative;
  padding-left: 24px;
}

.edu-list::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(to bottom, var(--accent), var(--border));
}

.edu-item {
  position: relative;
  padding: 16px 0 16px 24px;
}

.edu-marker {
  position: absolute;
  left: -24px;
  top: 20px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: white;
  border: 3px solid var(--accent);
  z-index: 1;
}

.edu-content {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px 20px;
}

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.edu-header h3 {
  font-size: 1.1em;
  color: var(--primary);
  font-weight: 600;
}

.edu-degree {
  background: var(--accent);
  color: white;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 0.75em;
  font-weight: 500;
}

.edu-info {
  color: var(--text-secondary);
  font-size: 0.9em;
  margin: 0;
}

.edu-tags {
  display: flex;
  gap: 6px;
  margin-top: 8px;
}

.mini-tag {
  background: var(--bg);
  color: var(--text-muted);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.8em;
}

.mini-tag.blue {
  background: var(--highlight);
  color: var(--accent);
}

/* Research Card */
.research-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 20px 24px;
  position: relative;
}

.paper-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  color: #92400e;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8em;
  margin-bottom: 12px;
}

.research-card h3 {
  font-size: 1.05em;
  color: var(--primary);
  margin: 0 0 4px;
}

.research-period {
  color: var(--text-muted);
  font-size: 0.85em;
  margin: 0 0 12px;
}

.research-points {
  margin: 0;
  padding-left: 18px;
}

.research-points li {
  margin-bottom: 6px;
  color: var(--text-secondary);
  line-height: 1.5;
}

.highlight-text {
  color: var(--accent);
  font-weight: 500;
}

/* Metrics */
.metric {
  font-family: 'JetBrains Mono', monospace;
  background: var(--highlight);
  color: var(--accent);
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 0.85em;
  font-weight: 500;
}

/* Skills Matrix */
.skills-matrix {
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
  color: var(--text-muted);
  margin: 0 0 10px;
  font-weight: 500;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-tag {
  background: var(--bg);
  color: var(--text-secondary);
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.85em;
  border: 1px solid var(--border);
}

.skill-tag.primary {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

/* Experience Cards */
.exp-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 16px;
}

.exp-header {
  margin-bottom: 12px;
}

.exp-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 4px;
}

.exp-title-row h3 {
  font-size: 1.1em;
  color: var(--primary);
  font-weight: 600;
}

.exp-badge {
  background: linear-gradient(135deg, var(--accent), var(--primary));
  color: white;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.75em;
  font-weight: 500;
}

.exp-badge.secondary {
  background: var(--text-secondary);
}

.exp-period {
  color: var(--text-muted);
  font-size: 0.85em;
  margin: 0;
}

.exp-project h4 {
  font-size: 0.95em;
  color: var(--accent);
  margin: 12px 0 8px;
  font-weight: 500;
}

.project-block {
  margin: 12px 0;
  padding-left: 16px;
  border-left: 2px solid var(--border);
}

.project-label {
  display: inline-block;
  background: var(--bg);
  color: var(--text-secondary);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.8em;
  margin-bottom: 8px;
}

.exp-points {
  margin: 0;
  padding-left: 18px;
}

.exp-points li {
  margin-bottom: 6px;
  color: var(--text-secondary);
  line-height: 1.5;
}

.exp-points strong {
  color: var(--primary);
}

/* Project Card */
.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 20px 24px;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.project-header h3 {
  font-size: 1.05em;
  color: var(--primary);
  font-weight: 600;
}

.project-period {
  color: var(--text-muted);
  font-size: 0.85em;
}

.project-role {
  color: var(--accent);
  font-size: 0.9em;
  margin: 0 0 16px;
}

.tech-highlight {
  background: var(--highlight);
  border: 1px solid #bee3f8;
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 12px;
}

.tech-label {
  font-size: 0.8em;
  color: var(--accent);
  font-weight: 500;
  display: block;
  margin-bottom: 8px;
}

.memory-layers {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.layer {
  display: flex;
  gap: 12px;
  align-items: baseline;
}

.layer-name {
  font-weight: 500;
  color: var(--primary);
  font-size: 0.9em;
  min-width: 70px;
}

.layer-desc {
  font-size: 0.85em;
  color: var(--text-secondary);
}

/* Awards */
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

.award-icon {
  font-size: 1.8em;
}

.award-text {
  flex: 1;
}

.award-title {
  font-weight: 500;
  color: var(--text);
  margin: 0 0 2px;
  font-size: 0.95em;
}

.award-org {
  color: var(--text-muted);
  margin: 0;
  font-size: 0.8em;
}

/* Responsive */
@media (max-width: 600px) {
  .header {
    padding: 48px 16px 32px;
  }

  .header-content {
    flex-direction: column;
    text-align: center;
  }

  .header-text h1 {
    font-size: 1.8em;
  }

  .header-tags {
    justify-content: center;
  }

  .header-contact {
    flex-direction: column;
    gap: 4px;
  }

  .separator {
    display: none;
  }

  .resume-body {
    padding: 32px 16px;
  }

  .exp-title-row {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
