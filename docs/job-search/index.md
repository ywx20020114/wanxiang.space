# Job Search

记录我的求职投递与面试流程。

<script setup>
import { ref } from 'vue'

const isUnlocked = ref(false)
const password = ref('')
const error = ref('')

const correctPassword = 'your-password-here' // Change this to your actual password

function checkPassword() {
  if (password.value === correctPassword) {
    isUnlocked.value = true
    error.value = ''
  } else {
    error.value = '密码错误，请重试'
  }
}
</script>

<div v-if="!isUnlocked" class="password-container">
  <div class="password-box">
    <h2>🔒 密码保护</h2>
    <p>此页面需要密码才能访问</p>
    <form @submit.prevent="checkPassword">
      <input
        v-model="password"
        type="password"
        placeholder="请输入密码"
        class="password-input"
      />
      <button type="submit" class="password-button">解锁</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</div>

<div v-else class="content">
## 求职进度

### 📬 已投递

| 公司 | 职位 | 投递时间 | 状态 |
|------|------|----------|------|
| - | - | - | - |

### 💬 面试中

| 公司 | 职位 | 面试阶段 | 下一步 |
|------|------|----------|--------|
| - | - | - | - |

### 🎉 Offer

| 公司 | 职位 | 薪资 | 状态 |
|------|------|------|------|
| - | - | - | - |

### ❌ 拒绝

| 公司 | 职位 | 拒绝时间 | 原因 |
|------|------|----------|------|
| - | - | - | - |

---

::: details 添加新记录
在 `docs/job-search/records/` 文件夹中添加 markdown 文件来记录新的求职进度。

格式：
```markdown
---
company: "公司名称"
position: "职位名称"
date: 2024-01-15
status: applied|interviewing|offer|rejected
notes: "备注信息"
---
```
:::
</div>

<style scoped>
.password-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.password-box {
  text-align: center;
  padding: 40px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  max-width: 400px;
}

.password-box h2 {
  margin-bottom: 8px;
}

.password-box p {
  color: var(--vp-c-text-2);
  margin-bottom: 20px;
}

.password-input {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 12px;
  box-sizing: border-box;
}

.password-button {
  width: 100%;
  padding: 12px;
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.password-button:hover {
  background: var(--vp-c-brand-2);
}

.error {
  color: #ef4444;
  margin-top: 12px;
}

.content {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid var(--vp-c-divider);
}
</style>
