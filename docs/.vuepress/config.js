module.exports = {
    base: '/frog/',
    title: "Frog UI",
    description: "个人组件库",
    head: [
        ['link', { rel: 'stylesheet', href: '/font/iconfont.css' }]
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '组件', link: '/introduce/' },
            { text: 'github', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: "介绍",
                collapsable: false,
                children: [
                    '/introduce/'
                ]
            },
            {
                title: "入门",
                collapsable: false,
                children: [
                    '/entry/'
                ]
            },
            {
                title: "组件",
                collapsable: false,
                children: [
                    './components/button',
                    './components/button-group',
                    './components/dialog',
                ]
            },
        ]
    }
}