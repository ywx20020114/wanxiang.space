---
layout: page
title: About
---

<div class="hero">
  <div class="hero-bg"></div>
  <div class="hero-content">
    <div class="avatar">郁</div>
    <h1>郁万祥</h1>
    <p class="subtitle">南开大学 · 软件工程硕士 · AI应用开发</p>
    <div class="contact-row">
      <span class="contact-item">📧 yuwanxiang0114@163.com</span>
      <span class="contact-item">📱 19815840515</span>
      <span class="contact-item">📍 北京</span>
    </div>
  </div>
</div>

<div class="resume-container">

## 🎯 求职意向

<div class="target-card">
  <span>后端开发</span>
  <span class="divider">|</span>
  <span>大模型应用开发</span>
  <span class="divider">|</span>
  <span>应届生/实习生</span>
  <span class="divider">|</span>
  <span>可入职 2025</span>
</div>

---

## 🎓 教育背景

<div class="edu-card">
  <div class="edu-header">
    <h3 class="school">南开大学</h3>
    <span class="degree-badge">硕士</span>
  </div>
  <p class="edu-info">软件工程 | 2024.09 - 至今</p>
  <div class="edu-tags">
    <span class="tag">软件工程</span>
    <span class="tag">学硕</span>
  </div>
</div>

<div class="edu-card">
  <div class="edu-header">
    <h3 class="school">南开大学</h3>
    <span class="degree-badge">本科</span>
  </div>
  <p class="edu-info">软件工程 | 2020.09 - 2024.06</p>
</div>

---

## ⚡ 技术栈

<div class="skills-grid">
  <div class="skill-card">
    <div class="skill-icon">☕</div>
    <h4>后端技术</h4>
    <div class="tags">
      <span class="tag primary">Java</span>
      <span class="tag">Spring Boot</span>
      <span class="tag">MySQL</span>
      <span class="tag">Redis</span>
      <span class="tag">Kafka</span>
    </div>
  </div>
  <div class="skill-card">
    <div class="skill-icon">🤖</div>
    <h4>AI 应用</h4>
    <div class="tags">
      <span class="tag primary">LangChain</span>
      <span class="tag">LangGraph</span>
      <span class="tag">RAG</span>
      <span class="tag">多模型调度</span>
    </div>
  </div>
  <div class="skill-card">
    <div class="skill-icon">🛠️</div>
    <h4>开发工具</h4>
    <div class="tags">
      <span class="tag">Claude Code</span>
      <span class="tag">Cursor</span>
      <span class="tag">Git</span>
      <span class="tag">Linux</span>
    </div>
  </div>
</div>

---

## 💼 研究经历

<div class="experience-card research">
  <div class="exp-header">
    <h3>RAG检索增强与多智能体系统研究</h3>
    <span class="exp-date">2025.07 - 2025.12</span>
  </div>
  <div class="highlight-box">
    <span class="badge success">🏆 论文已被 SANER 2026 (CCF B) 接受</span>
  </div>
  <ul class="details">
    <li>基于 LangGraph 构建多智能体工作流，条件化循环边实现自动迭代优化</li>
    <li>角色化上下文压缩缩减<strong>65%</strong>对话长度，分级模型路由降低<strong>60%</strong> API成本</li>
  </ul>
</div>

---

## 💼 实习经历

<div class="experience-card">
  <div class="exp-header">
    <h3>Shopee-BJ</h3>
    <span class="company-badge">AI应用开发实习生</span>
  </div>
  <p class="exp-period">2025.12 - 至今</p>

  <h4 class="project-title">LLM Gateway 平台开发</h4>

  <div class="sub-project">
    <h5>Prompts 提示词管理平台</h5>
    <ul class="details">
      <li><strong>事务一致性</strong>：GORM 事务保证主表与版本表原子操作</li>
      <li><strong>并发控制</strong>：MySQL 唯一索引 + 409 冲突重试机制</li>
      <li><strong>性能优化</strong>：Redis 三级缓存 + 游标分页，查询从 2N+1 降至 <strong>3 次</strong></li>
      <li><strong>多层级校验</strong>：OpenAI SDK 格式校验 + JSON 序列化校验 + 变量完整性校验</li>
    </ul>
  </div>

  <div class="sub-project">
    <h5>多厂商 LLM 定价自动同步 Agent</h5>
    <ul class="details">
      <li>基于 LangChain LCEL 搭建多步状态流水线：抓取 → 解析 → 差异计算 → MDX更新</li>
      <li><strong>ReAct 智能爬虫</strong>：LLM 自主决策页面交互，替代硬编码规则</li>
      <li><strong>反幻觉设计</strong>：白名单闭集约束 + temperature=0 + LLM 自纠正机制</li>
    </ul>
  </div>
</div>

<div class="experience-card">
  <div class="exp-header">
    <h3>青岛谷岳机器人</h3>
    <span class="company-badge">后端开发实习生</span>
  </div>
  <p class="exp-period">2024.09 - 2025.01</p>

  <h4 class="project-title">智能工厂集中监控与可视化平台</h4>
  <ul class="details">
    <li>MQTT + Kafka 数据缓冲，Redis Hash 查询响应 ≤<strong>50ms</strong></li>
    <li>MySQL 批量写入数据压缩 <strong>95%</strong>，支撑历史趋势分析</li>
    <li>WebSocket 毫秒级主动推送，端到端延迟 ≤<strong>50ms</strong></li>
  </ul>
</div>

---

## 🚀 项目经历

<div class="experience-card highlight">
  <div class="exp-header">
    <h3>南开大学心理健康智能平台</h3>
    <span class="exp-date">2025.08 - 2025.11</span>
  </div>
  <p class="project-desc">面向全校师生的心理支持平台，核心开发成员</p>

  <div class="sub-project">
    <h5>三层记忆系统架构</h5>
    <ul class="details">
      <li><strong>工作记忆</strong>：容量控制 + TTL淘汰 + 重要性/频率加权淘汰策略</li>
      <li><strong>情景记忆</strong>：SQLite + Qdrant 混合存储，两阶段检索</li>
      <li><strong>语义记忆</strong>：Neo4j 知识图谱，向量 + 图遍历融合检索</li>
    </ul>
  </div>

  <div class="sub-project">
    <h5>其他技术亮点</h5>
    <ul class="details">
      <li>流式脱敏：正则 + NER 模型混合识别，数据纯内存处理绝不落盘</li>
      <li>混合检索重排：语义相似度(0.7) + 时间近因性(0.2) + 重要性乘数</li>
      <li>SSE 流式 API：端到端透传，"到达即清空"消除顿挫感</li>
    </ul>
  </div>
</div>

---

## 🏆 荣誉奖项

<div class="awards-row">
  <div class="award-item">
    <span class="award-icon">🏆</span>
    <span>企业实训"优秀个人"</span>
  </div>
  <div class="award-item">
    <span class="award-icon">🎓</span>
    <span>公能奖学金 (2024, 2025)</span>
  </div>
  <div class="award-item">
    <span class="award-icon">🏅</span>
    <span>文体奖学金 (2025)</span>
  </div>
</div>

---

## ✨ Vibe Coding

<div class="vibe-section">
  <span class="vibe-tag">Claude Code</span>
  <span class="vibe-tag">Cursor</span>
  <span class="vibe-desc">熟练运用 AI 编程工具进行项目快速迭代</span>
</div>

</div>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  background: linear-gradient(135deg, #e8f4fc 0%, #d4e9f7 50%, #c0ddf2 100%);
  padding: 80px 20px 60px;
  text-align: center;
  overflow: hidden;
  margin-bottom: 40px;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 80%, rgba(100, 150, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(100, 180, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.avatar {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #4a90d9, #6ab0ff);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5em;
  color: white;
  margin: 0 auto 20px;
  box-shadow: 0 8px 32px rgba(74, 144, 217, 0.3);
}

.hero h1 {
  font-size: 2.5em;
  margin: 0 0 8px;
  background: linear-gradient(135deg, #2c5282, #4a90d9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.1em;
  color: #5a7a9a;
  margin: 0 0 16px;
}

.contact-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.contact-item {
  color: #5a7a9a;
  font-size: 0.95em;
}

/* Container */
.resume-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px 60px;
}

h2 {
  font-size: 1.15em;
  color: #4a90d9;
  border-bottom: none;
  padding: 0;
  margin: 32px 0 16px;
}

h3 {
  font-size: 1.05em;
  color: #2c5282;
  margin: 0;
}

h4 {
  font-size: 0.95em;
  color: #4a90d9;
  margin: 8px 0;
}

h5 {
  font-size: 0.9em;
  color: #6a9fd9;
  margin: 8px 0;
}

hr {
  border: none;
  border-top: 1px dashed #d4e9f7;
  margin: 28px 0;
}

/* Target Card */
.target-card {
  background: linear-gradient(135deg, #e8f4fc, #d4e9f7);
  padding: 16px 24px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  font-size: 0.95em;
  color: #2c5282;
}

.divider {
  color: #a0c4e8;
}

/* Education */
.edu-card {
  background: linear-gradient(135deg, #f8fbfe, #eef6fc);
  border-left: 4px solid #4a90d9;
  padding: 16px 20px;
  border-radius: 0 8px 8px 0;
  margin-bottom: 12px;
}

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.school {
  color: #2c5282;
}

.degree-badge {
  background: #4a90d9;
  color: white;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 0.8em;
}

.edu-info {
  color: #5a7a9a;
  margin: 4px 0;
  font-size: 0.9em;
}

.edu-tags {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin: 16px 0;
}

.skill-card {
  background: linear-gradient(135deg, #f8fbfe, #eef6fc);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
}

.skill-icon {
  font-size: 2em;
  margin-bottom: 8px;
}

.skill-card h4 {
  color: #2c5282;
  margin-bottom: 12px;
}

/* Tags */
.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
}

.tag {
  background: white;
  color: #5a7a9a;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.85em;
  border: 1px solid #d4e9f7;
}

.tag.primary {
  background: #4a90d9;
  color: white;
  border-color: #4a90d9;
}

/* Experience Card */
.experience-card {
  background: linear-gradient(135deg, #f8fbfe, #f0f6fc);
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 16px;
  border: 1px solid #e0ecf5;
}

.experience-card.research {
  border-left: 4px solid #4a90d9;
}

.experience-card.highlight {
  background: linear-gradient(135deg, #e8f4fc, #dce9f6);
  border: 2px solid #4a90d9;
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 4px;
}

.exp-header h3 {
  color: #2c5282;
}

.exp-date {
  color: #8ab4d8;
  font-size: 0.85em;
}

.company-badge {
  background: linear-gradient(135deg, #6ab0ff, #4a90d9);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8em;
}

.exp-period {
  color: #8ab4d8;
  font-size: 0.9em;
  margin: 0 0 12px;
}

.project-title {
  color: #4a90d9;
  font-weight: 600;
  margin: 12px 0 8px;
  padding-bottom: 8px;
  border-bottom: 1px dashed #d4e9f7;
}

.sub-project {
  margin: 12px 0;
  padding-left: 12px;
  border-left: 2px solid #c0ddf2;
}

.highlight-box {
  margin: 8px 0;
}

.badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.85em;
}

.badge.success {
  background: #d1fae5;
  color: #065f46;
}

/* Details */
.details {
  margin: 8px 0;
  padding-left: 18px;
}

.details li {
  margin-bottom: 6px;
  line-height: 1.6;
  color: #4a5568;
}

.details strong {
  color: #2c5282;
}

/* Awards */
.awards-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 16px 0;
}

.award-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #fef9e7, #fef3cd);
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 0.9em;
  color: #7c6a3e;
}

.award-icon {
  font-size: 1.2em;
}

/* Vibe */
.vibe-section {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin: 16px 0;
}

.vibe-tag {
  background: linear-gradient(135deg, #2c5282, #4a90d9);
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.9em;
}

.vibe-desc {
  color: #5a7a9a;
  font-size: 0.95em;
}

/* Responsive */
@media (max-width: 600px) {
  .hero {
    padding: 40px 16px;
  }

  .hero h1 {
    font-size: 2em;
  }

  .contact-row {
    flex-direction: column;
    gap: 8px;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .exp-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
