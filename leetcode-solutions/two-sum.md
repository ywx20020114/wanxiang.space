---
title: "两数之和"
problemId: 1
difficulty: Easy
tags: ["array", "hash-table"]
date: 2024-01-15
---

# 两数之和

## 题目描述

给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出和为目标值 `target` 的那两个整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案，且同样的元素不能被重复利用。

## 解题思路

使用哈希表实现 O(n) 时间复杂度的解法：
- 遍历数组，对于每个元素，计算目标值与当前元素的差值
- 检查哈希表中是否存在这个差值
- 如果存在，返回两个下标
- 如果不存在，将当前元素及其下标存入哈希表

## 代码

```python
def two_sum(nums: list[int], target: int) -> list[int]:
    hash_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in hash_map:
            return [hash_map[complement], i]
        hash_map[num] = i
    return []
```

## 复杂度分析

- **时间复杂度**: O(n) - 只遍历数组一次
- **空间复杂度**: O(n) - 最坏情况下需要存储 n 个元素
