---
layout: page
title: Job Search
---

<div class="page-header">
  <div class="header-pattern"></div>
  <div class="header-content">
    <h1>Job Search</h1>
    <p class="subtitle">求职投递与面试流程记录</p>
  </div>
</div>

<div class="content-wrapper">

<script setup>
import { ref } from 'vue'

const isUnlocked = ref(false)
const password = ref('')
const error = ref('')

const correctPassword = '__JOB_SEARCH_PASSWORD__'

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
    <div class="lock-icon">🔒</div>
    <h2>密码保护</h2>
    <p>此页面需要密码才能访问</p>
    <form @submit.prevent="checkPassword">
      <input v-model="password" type="password" placeholder="请输入密码" class="password-input" />
      <button type="submit" class="password-button">解锁</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</div>

<div v-else class="content">

## 求职进度

### 📬 已投递

| 公司 | 职位 | 投递时间 | 状态 |
|:---|:---|:---:|:---:|
| - | - | - | - |

### 💬 面试中

| 公司 | 职位 | 面试阶段 | 下一步 |
|:---|:---|:---:|:---:|
| - | - | - | - |

### 🎉 Offer

| 公司 | 职位 | 薪资 | 状态 |
|:---|:---|:---:|:---:|
| - | - | - | - |

### ❌ 拒绝

| 公司 | 职位 | 拒绝时间 | 原因 |
|:---|:---|:---:|:---|
| - | - | - | - |

</div>

</div>

<style>
.page-header {
  background: linear-gradient(135deg, #1a365d 0%, #2c5282 50%, #3182ce 100%);
  color: white;
  padding: 48px 24px;
  position: relative;
  overflow: hidden;
}
.page-header::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #63b3ed, #3182ce, #2c5282);
}
.header-content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.page-header h1 {
  font-family: 'Crimson Pro', serif;
  font-size: 2.2em;
  font-weight: 600;
  margin: 0 0 8px;
}
.page-header .subtitle { font-size: 1em; opacity: 0.85; margin: 0; }
.content-wrapper { max-width: 900px; margin: 0 auto; padding: 40px 24px; }
h2 { font-family: 'Crimson Pro', serif; font-size: 1.3em; font-weight: 600; color: #1a365d; margin: 32px 0 16px; padding-bottom: 8px; border-bottom: 2px solid #e2e8f0; }
h3 { color: #1a365d; margin: 20px 0 12px; }
table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 0.95em; }
th, td { padding: 12px 16px; text-align: left; border-bottom: 1px solid #e2e8f0; }
th { background: #f7fafc; font-weight: 600; color: #1a365d; }
tr:hover { background: #f7fafc; }
.password-container { display: flex; justify-content: center; align-items: center; min-height: 400px; padding: 40px 0; }
.password-box { text-align: center; padding: 48px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; max-width: 400px; width: 100%; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); }
.lock-icon { font-size: 3em; margin-bottom: 16px; }
.password-box h2 { margin: 0 0 8px; border: none; padding: 0; color: #1a365d; }
.password-box > p { color: #718096; margin: 0 0 24px; }
.password-input { width: 100%; padding: 14px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 16px; margin-bottom: 12px; box-sizing: border-box; transition: border-color 0.2s; }
.password-input:focus { outline: none; border-color: #3182ce; }
.password-button { width: 100%; padding: 14px; background: linear-gradient(135deg, #3182ce, #2c5282); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 500; transition: transform 0.2s, box-shadow 0.2s; }
.password-button:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(49, 130, 206, 0.3); }
.error { color: #e53e3e; margin-top: 12px; font-size: 0.9em; }
.content { animation: fadeIn 0.3s ease-in; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>
