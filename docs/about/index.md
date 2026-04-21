---
layout: page
title: About
---

# 关于我

<div class="profile">
  <div class="avatar">郁</div>
  <h1>郁万祥</h1>
  <p class="subtitle">25届应届生 · Java开发 · 天津</p>
  <div class="contact">
    <span>📧 wanxiang.yu@outlook.com</span>
    <span>📱 150-2250-8728</span>
  </div>
</div>

## 教育背景

<div class="education">
  <div class="edu-item">
    <div class="edu-header">
      <h3>南开大学</h3>
      <span class="date">2022.09 - 2025.06</span>
    </div>
    <p class="degree">软件工程（学硕）</p>
    <div class="edu-stats">
      <span>初试: 338</span>
      <span>复试: 82.4</span>
      <span>排名: 11/52</span>
    </div>
  </div>
</div>

## 专业技能

<div class="skills-grid">
  <div class="skill-category">
    <h4>编程语言</h4>
    <div class="tags">
      <span class="tag primary">Java</span>
      <span class="tag">Python</span>
      <span class="tag">C/C++</span>
      <span class="tag">JavaScript</span>
    </div>
  </div>
  <div class="skill-category">
    <h4>框架&技术</h4>
    <div class="tags">
      <span class="tag primary">Spring Boot</span>
      <span class="tag">MySQL</span>
      <span class="tag">Redis</span>
      <span class="tag">RabbitMQ</span>
      <span class="tag">Vue3</span>
    </div>
  </div>
  <div class="skill-category">
    <h4>工具&其他</h4>
    <div class="tags">
      <span class="tag">Linux</span>
      <span class="tag">Git</span>
      <span class="tag">数据库设计</span>
      <span class="tag">SQL 优化</span>
      <span class="tag">CET-4</span>
    </div>
  </div>
</div>

## 项目经历

<div class="projects">
  <div class="project">
    <div class="project-header">
      <h3>校园论坛系统</h3>
      <span class="date">2024.03 - 2024.06</span>
    </div>
    <p class="project-desc">独立开发基于 Spring Boot + Vue3 的论坛系统</p>
    <ul class="project-details">
      <li>设计数据库，创建 RESTful API</li>
      <li>实现 JWT 用户认证</li>
      <li>开发 Vue3 前端页面</li>
    </ul>
  </div>

  <div class="project">
    <div class="project-header">
      <h3>作业管理系统</h3>
      <span class="date">2023.09 - 2023.11</span>
    </div>
    <p class="project-desc">基于 Spring Boot + Vue3 + MySQL 的全栈应用</p>
    <ul class="project-details">
      <li>实现作业的增删改查、提交和批改功能</li>
      <li>支持学生和教师两种角色权限</li>
      <li>集成 ECharts 进行数据可视化</li>
    </ul>
  </div>
</div>

## 校园经历

<div class="experience">
  <div class="exp-item">
    <div class="exp-header">
      <h4>南开大学研究生学生会</h4>
      <span class="date">2023.09 - 2024.07</span>
    </div>
    <p>策划并执行 6 场校园活动，单场覆盖 300+ 学生 | 撰写 20+ 推文，总浏览量 20000+</p>
  </div>
  <div class="exp-item">
    <div class="exp-header">
      <h4>南开大学软件学院研究生学生会</h4>
      <span class="date">2022.09 - 2023.07</span>
    </div>
    <p>参与组织 3 场校级活动 | 管理 2 个新媒体平台</p>
  </div>
</div>

## 求职意向

<div class="target">
  <span class="target-item">🎯 职位：Java 开发</span>
  <span class="target-item">📍 地点：天津 / 北京</span>
  <span class="target-item">📅 可入职：2025 年</span>
</div>

---

[📄 下载 PDF 简历](/wanxiang.space/resume.pdf)

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
  font-size: 1.1em;
  margin: 0;
}

h4 {
  font-size: 0.95em;
  margin: 0 0 8px;
  color: var(--vp-c-text-2);
}

/* Education */
.education {
  margin: 20px 0;
}

.edu-item {
  padding: 16px 20px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  margin-bottom: 12px;
}

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.edu-header h3 {
  color: var(--vp-c-brand-1);
}

.date {
  color: var(--vp-c-text-2);
  font-size: 0.9em;
}

.degree {
  margin: 4px 0 8px;
  color: var(--vp-c-text-2);
}

.edu-stats {
  display: flex;
  gap: 16px;
  font-size: 0.9em;
}

.edu-stats span {
  background: var(--vp-c-bg);
  padding: 2px 10px;
  border-radius: 4px;
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
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

/* Projects */
.projects {
  margin: 20px 0;
}

.project {
  padding: 20px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  margin-bottom: 16px;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.project-desc {
  color: var(--vp-c-text-2);
  margin: 0 0 12px;
}

.project-details {
  margin: 0;
  padding-left: 20px;
}

.project-details li {
  margin-bottom: 4px;
  color: var(--vp-c-text-2);
}

/* Experience */
.experience {
  margin: 20px 0;
}

.exp-item {
  padding: 16px 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

.exp-item:last-child {
  border-bottom: none;
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.exp-item p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.95em;
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

.target-item {
  font-size: 1em;
}

/* Footer */
.footer {
  margin-top: 40px;
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
