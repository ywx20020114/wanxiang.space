# wanxiang.space

🔗 **访问网站**: https://ywx20020114.github.io/wanxiang.space

南开大学 | 软件工程 | 求职中

## 项目架构

```
wanxiang.space/
├── docs/                          # 页面内容 (Markdown)
│   ├── index.md                   # 首页
│   ├── about/                     # 个人介绍
│   │   └── index.md
│   ├── leetcode/                  # 刷题记录
│   │   ├── index.md
│   │   └── solutions/             # 题目解答
│   │       └── two-sum.md
│   ├── job-search/                # 找工作记录 (密码保护)
│   │   └── index.md
│   └── learning/                  # 学习记录
│       ├── index.md
│       └── agent/                 # Agent 学习笔记
│           └── agent-basics.md
├── leetcode-solutions/            # 刷题记录源文件
├── public/                        # 静态资源
│   ├── favicon.svg
│   └── resume.pdf                 # 简历 PDF
└── package.json
```

## 添加内容

### 添加刷题记录

在 `leetcode-solutions/` 目录下创建 Markdown 文件：

```markdown
---
title: "题目名称"
problemId: 1234
difficulty: Easy
tags: ["array", "hash-table"]
date: 2024-01-15
---

# 题目描述

解题思路和代码...
```

### 添加学习笔记

在 `docs/learning/agent/` 目录下创建 Markdown 文件：

```markdown
---
title: "笔记标题"
category: "类别"
date: 2024-01-15
---

笔记内容...
```

### 修改找工作记录密码

编辑 `docs/job-search/index.md`，修改 `correctPassword` 变量值。

---

Powered by VitePress & GitHub Pages
