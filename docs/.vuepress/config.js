module.exports = {
    title: '天下谁人不识君',
    description: '理想成为大牛的小牛同学',
    dest: './dist',
    port: '7777',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }]
    ],
    markdown: {
        lineNumbers: true,
        toc: {
            includeLevel: [3, 4]
        }
    },

    themeConfig: {
        logo: '/headLogo.png',
        nav: require('./nav'),
        sidebar: require('./sidebarConf'),
        sidebarDepth: 3,
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                // 刷新内容的弹窗
                message: '发现新内容',
                buttonText: '刷新'
            }
        },
        docsRepo: 'ACchenjiangbo/default-theme-myBlog',
        docsBranch: 'master', // git 源仓库 仓库分支
        docsDir: 'docs', // 仓库下的文件夹
        smoothScroll: true,
        plugins: [
            '@vuepress/plugin-back-to-top',
            '@vuepress/plugin-active-header-links',
        ]
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/plugin-active-header-links', {
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
                    appKey: 'XGQw70J7pvctx0FXIHpTB3IK',
                    placeholder: 'ヾﾉ≧∀≦)o来啊，快活啊!',
                    avatar: 'identicon',
                    visitor: true,
                    recordIP: true,
                }
            }
        ]
    ]
}