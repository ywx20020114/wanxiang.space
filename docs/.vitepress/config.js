import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'wanxiang.space',
  description: 'Personal homepage - Resume, LeetCode, Job Search & Learning Records',

  srcDir: '.',
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'LeetCode', link: '/leetcode/' },
      { text: 'Job Search', link: '/job-search/' },
      { text: 'Learning', link: '/learning/' }
    ],

    sidebar: {
      '/leetcode/': [
        {
          text: 'Solutions',
          items: []
        }
      ],
      '/learning/': [
        {
          text: 'Agent Learning',
          items: []
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wanxiang-yu' }
    ],

    footer: {
      message: 'Powered by VitePress & GitHub Pages',
      copyright: `© ${new Date().getFullYear()} wanxiang`
    }
  }
})
