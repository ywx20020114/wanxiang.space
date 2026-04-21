---
layout: page
title: About
---

# 郁万祥

<div class="resume-container">

## 基本信息

| | | | |
|:---:|:---:|:---:|:---:|
| 📧 yuwanxiang0114@163.com | 📱 19815840515 | 🎂 2002-01 | 🎯 后端开发 / AI应用开发 |

**求职意向**：北京 · 应届生/实习生 · 可入职 2025年

---

## 教育背景

| 时间 | 学校 | 学历 | 专业 | 排名 |
|:---|:---|:---:|:---|:---:|
| 2024.09 - 至今 | 南开大学 | 硕士 | 软件工程 | - |
| 2020.09 - 2024.06 | 南开大学 | 本科 | 软件工程 | - |

---

## 技术栈

**语言**：Java · Python · C/C++ · JavaScript

**框架**：Spring Boot · MySQL · Redis · Kafka · MQTT

**AI**：LangChain · LangGraph · RAG · 多模型调度

**工具**：Claude Code · Cursor · Git · Linux

---

## 研究经历

### RAG检索增强与多智能体系统研究
**南开大学** | 2025.07 - 2025.12

- 基于 LangGraph 构建多智能体工作流，通过条件化循环边实现自动迭代优化
- 角色化上下文压缩缩减65%对话长度，分级模型路由降低60% API成本
- CoMRA 论文已被 **SANER 2026 (CCF B)** 接受

---

## 实习经历

### Shopee-BJ · AI应用开发实习生
**2025.12 - 至今**

#### LLM Gateway 平台开发

独立负责 LLM Gateway 项目两大核心模块的设计与实现：

**1. Prompts 提示词管理平台**

- 企业级 AI 提示词管理：版本管理、双格式渲染引擎，对接 OpenAI/Claude/Gemini 等多厂商
- **事务一致性**：GORM 事务保证主表与版本表原子操作
- **并发控制**：MySQL 唯一索引 + 409 冲突重试机制处理版本号乐观分配
- **性能优化**：Redis 三级缓存 + 游标分页，查询次数从 2N+1 降至 3 次
- **多层级校验**：OpenAI SDK 格式校验 + JSON 序列化校验 + 变量完整性校验

**2. 多厂商 LLM 定价自动同步 Agent**

- 基于 LangChain LCEL 搭建多步状态流水线：Playwright 抓取 → BeautifulSoup 解析 → 差异计算 → MDX 增量更新
- **ReAct 智能爬虫**：LLM 自主决策页面交互，动态适应页面结构变化，替代硬编码规则
- **反幻觉设计**：
  - 白名单闭集约束 + temperature=0 + 结果校验
  - LLM 自纠正机制：Round 1 验证 → 回滚异常 → Round 2 自纠正
- **大表格分块策略**：超过 80 行拆块处理，避免输出截断
- OpenClaw 定时任务编排 + SeaClaw 变更通知

### 青岛谷岳机器人 · 后端开发实习生
**2024.09 - 2025.01**

#### 智能工厂集中监控与可视化平台

- **数据采集**：MQTT 接收设备上报，Kafka 作为缓冲层保证数据不丢失
- **实时处理**：Redis Hash 缓存设备状态，查询响应 ≤50ms；按分钟聚合批量写入 MySQL，数据压缩 95%
- **实时推送**：WebSocket 毫秒级主动推送，端到端延迟 ≤50ms

---

## 项目经历

### 南开大学心理健康智能平台
**2025.08 - 2025.11** | 项目核心开发

- **流式脱敏管道**：正则 + NER 模型混合识别，"标签化脱敏"保障原始数据纯内存处理、绝不落盘
- **三层记忆系统**：
  - 工作记忆：容量控制 + TTL淘汰 + 智能淘汰策略（重要性/时间/频率加权）
  - 情景记忆：SQLite + Qdrant 混合存储，两阶段检索（结构化预过滤 + 向量语义检索）
  - 语义记忆：Neo4j 知识图谱，向量 + 图遍历融合检索
- **混合检索重排序**：语义相似度(0.7) + 时间近因性(0.2) + 重要性乘数，三维加权重排序
- **统一调用层**：多模型适配 + 自动降级 + 情绪标签动态优化提示词
- **流式 API**：SSE 端到端透传，"到达即写即清空"消除攒包顿挫感

---

## 荣誉奖项

| |
|:---|
| 🏆 南开大学软件学院企业实训"优秀个人" |
| 🎓 南开大学 2024、2025 公能奖学金 |
| 🏅 南开大学 2025 文体奖学金 |

---

## Vibe Coding

Claude Code · Cursor —— 熟练运用 AI 编程工具进行项目快速迭代

</div>

<style scoped>
.resume-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1 {
  text-align: center;
  font-size: 2.2em;
  margin-bottom: 8px;
}

h2 {
  font-size: 1.2em;
  color: var(--vp-c-brand-1);
  border-bottom: none;
  padding-bottom: 0;
  margin-top: 32px;
  margin-bottom: 12px;
}

h3 {
  font-size: 1em;
  color: var(--vp-c-text-1);
  margin-top: 16px;
  margin-bottom: 8px;
}

h4 {
  font-size: 0.95em;
  color: var(--vp-c-text-2);
  margin-top: 4px;
  margin-bottom: 8px;
}

hr {
  border: none;
  border-top: 1px solid var(--vp-c-divider);
  margin: 24px 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 8px 0;
}

th, td {
  padding: 8px 12px;
  text-align: left;
  font-size: 0.95em;
}

th {
  font-weight: 600;
  background: transparent;
}

ul {
  margin: 8px 0;
  padding-left: 20px;
}

li {
  margin-bottom: 6px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

strong {
  color: var(--vp-c-text-1);
  font-weight: 600;
}

p {
  margin: 4px 0;
  color: var(--vp-c-text-2);
}

.info-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
  color: var(--vp-c-text-2);
  font-size: 0.95em;
}

.info-row span {
  white-space: nowrap;
}

.section {
  margin-bottom: 8px;
}

.project-title {
  font-weight: 600;
  color: var(--vp-c-brand-1);
  margin: 12px 0 8px;
}

.sub-title {
  display: inline-block;
  background: var(--vp-c-bg-soft);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.85em;
  margin-right: 8px;
  margin-bottom: 8px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 8px 0;
}

.tag {
  background: var(--vp-c-bg-soft);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.85em;
}

.award-row {
  padding: 6px 0;
}

.award-row .tag {
  background: var(--vp-c-bg-soft);
  padding: 4px 12px;
  border-radius: 6px;
}
</style>
