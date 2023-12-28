const functions = [
  { text: '判断当前的设备', link: '/yutils/getDevice/' }
];

const vueHooks = [functions, { text: '建设中', link: '' }];

const DefaultSideBar = [
  { text: '工具函数', items: functions },
  { text: '业务组件库', items: vueHooks },
];

export default {
  base: '/yangcy-repo/',
  title: '',
  lang: 'zh-CN',
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: true,
    lastUpdatedText: '最后修改时间',
    socialLinks: [{ icon: 'github', link: 'https://github.com/vmejs/vmejs' }],
    // editLinks: true,
    // editLink: {
    //   pattern: 'https://github.com/vmejs/vmejs/main/docs/:path',
    //   text: '为此页提供修改建议',
    // },
    nav: [
      { text: '首页', link: '/' },
      { text: '业务组件库', link: '/yui/' },
      { text: '工具函数', link: '/yutils/' },
    ],
    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '',
          items: DefaultSideBar,
        },
      ],
      '/core/': [
        {
          text: '',
          items: DefaultSideBar,
        },
      ],
    },
  },
};