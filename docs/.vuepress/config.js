module.exports = {
    title: '天下谁人不识君',
    description: '理想成为大牛的小牛同学',
    dest: './dist',
    port: '7777',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.gif'
        }]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require('./nav'),
        sidebar: require('./sidebarConf'),
        sidebarDepth: 2,
        lastUpdated: '最后更新时间:',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "New content is available.",
                buttonText: 'Refresh'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！',
        smoothScroll: true,
        plugins: [
            '@vuepress/plugin-back-to-top',
            '@vuepress/plugin-active-header-links',
        ]
    },
    themeEntry: {
        plugins: [
            '@vuepress/plugin-back-to-top',
            '@vuepress/plugin-active-header-links',
        ]
    },
    plugins: [
        '@vuepress/plugin-back-to-top',
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }],
        [
            'vuepress-plugin-comment',
            {
                choosen: 'valine',
                // options选项中的所有参数，会传给Valine的配置
                options: {
                    el: '#valine-vuepress-comment',
                    appId: 'NK6vtvs0tsr7ajg2kQzv0bTC-gzGzoHsz',
                    appKey: 'XGQw70J7pvctx0FXIHpTB3IK'
                }
            }
        ]
    ]
}