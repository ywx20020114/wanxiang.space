# Personal Homepage Specification

## 1. Project Overview

- **Project Name**: wanxiang.space - Personal Homepage
- **Type**: Static Website (VitePress + GitHub Pages)
- **Core Functionality**: A personal portfolio site with resume, LeetCode solutions, job search tracker, and learning logs
- **Target Users**: Potential employers, collaborators, and self-reference

## 2. Site Structure

### Pages
1. **Home** (`/`) - Landing page with brief intro and navigation
2. **About** (`/about/`) - Personal introduction with resume embed
3. **LeetCode** (`/leetcode/`) - List of solution records (auto-generated from `/leetcode-solutions/` folder)
4. **Job Search** (`/job-search/`) - Password-protected interview tracking
5. **Learning** (`/learning/`) - Agent learning records

### Data Architecture
```
wanxiang.space/
├── docs/                      # VitePress docs directory
│   ├── .vitepress/
│   │   └── config.js          # VitePress configuration
│   ├── index.md               # Home page
│   ├── about/
│   │   └── index.md            # About page
│   ├── leetcode/
│   │   ├── index.md            # LeetCode list page
│   │   └── solutions/          # Auto-loaded markdown files
│   ├── job-search/
│   │   ├── index.md            # Job search page (password protected)
│   │   └── records/            # Job search records
│   └── learning/
│       ├── index.md            # Learning overview
│       └── agent/              # Agent learning records
├── leetcode-solutions/        # LeetCode markdown files (root level, auto-scanned)
├── public/                    # Static assets
│   └── resume.pdf              # Resume PDF
├── package.json
└── SPEC.md
```

## 3. Features & Interactions

### 3.1 Personal Introduction (About)
- Display basic personal info (name, education, skills)
- Embed resume PDF viewer
- Download link for resume

### 3.2 LeetCode Solutions
- **Auto-generation**: Scan `/leetcode-solutions/` folder for `.md` files
- **Format**: Each file represents one problem solution
- **Required frontmatter**:
  ```yaml
  ---
  title: "Problem Title"
  problemId: 1234
  difficulty: Easy|Medium|Hard
  tags: ["array", "dp"]
  date: 2024-01-15
  ---
  ```
- **Display**: Sorted by date (newest first), filtered by difficulty/tags

### 3.3 Job Search (Password Protected)
- GitHub Pages private repository access
- Sections: Applied, Interviewing, Offer, Rejected
- Timeline view of application status

### 3.4 Learning Records
- Agent learning progress
- Topics covered, resources, notes
- Chronological list

## 4. Visual Design

### Theme
- Clean, professional, minimalist
- Dark/Light mode support

### Color Palette (TBD in implementation)
- Primary: `#646cff` (VitePress default blue)
- Background: light mode `#ffffff`, dark mode `#1a1a1a`
- Accent colors for status tags

### Typography
- System fonts with fallbacks
- Code blocks: monospace

## 5. Deployment

### GitHub Actions Workflow
- Trigger: Push to `main` branch
- Steps:
  1. Checkout code
  2. Setup Node.js
  3. Install dependencies
  4. Build VitePress
  5. Deploy to GitHub Pages

### Repository Structure
- Source code on `main` branch
- Deploy to `gh-pages` branch

## 6. Content Management

### Adding LeetCode Solutions
1. Create a `.md` file in `/leetcode-solutions/`
2. Add required frontmatter
3. Write solution content
4. Push to GitHub → Auto-deploys

### Adding Learning Records
1. Create a `.md` file in `/docs/learning/agent/`
2. Add frontmatter with title and date
3. Push → Auto-deploys

## 7. Security

### Job Search Page
- Use GitHub private repository (or Cloudflare Access)
- Password protection via `.htpasswd` or Cloudflare

## 8. Extensibility

- All content in Markdown → Easy to edit
- Modular structure → Easy to add new sections
- Git-based → Full version control
- Auto-deploy → Changes go live immediately
