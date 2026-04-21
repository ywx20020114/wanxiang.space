# wanxiang.space

Personal homepage hosted on GitHub Pages.

## Quick Start

```bash
# Install dependencies
npm install

# Local development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Management

### Adding LeetCode Solutions

Create a new markdown file in `leetcode-solutions/` folder:

```markdown
---
title: "Problem Title"
problemId: 1234
difficulty: Easy
tags: ["array", "hash-table"]
date: 2024-01-15
---

# Problem Title

Your solution content here...
```

### Adding Learning Records

Create a new markdown file in `docs/learning/agent/` folder:

```markdown
---
title: "Learning Topic"
category: "Category"
date: 2024-01-15
description: "Brief description"
---

Your content here...
```

### Job Search Password

To change the password for the job search page, edit `docs/job-search/index.md` and modify the `correctPassword` variable.

## GitHub Deployment

Push to `main` branch → GitHub Actions automatically builds and deploys to GitHub Pages.

## Project Structure

```
wanxiang.space/
├── docs/                      # VitePress documentation
│   ├── .vitepress/
│   │   └── config.js          # VitePress configuration
│   ├── index.md               # Home page
│   ├── about/
│   ├── leetcode/
│   ├── job-search/
│   └── learning/
├── leetcode-solutions/        # LeetCode solution markdown files
├── public/                    # Static assets
│   └── resume.pdf
└── package.json
```
