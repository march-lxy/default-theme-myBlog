const path = require("path")
const rootpath = path.dirname(__dirname) //执行一次dirname将目录定位到docs的上级目录，也就是博客根目录

const docs = rootpath;
const utils = require(rootpath + '/utils/index.js');
const filehelper = require(rootpath + '/utils/getFilenames.js');
module.exports = {

    // 技术总结
    '/technology-sharing/vue/': utils.genSidebar('Vue相关问题', filehelper.getFileName(docs + "/technology-sharing/vue/"), false),
    '/technology-sharing/node/': utils.genSidebar('NodeJs&&爬虫', filehelper.getFileName(docs + "/technology-sharing/node/"), false),
    '/technology-sharing/jsDir/': utils.genSidebar('JS', filehelper.getFileName(docs + "/technology-sharing/jsDir/"), false),
    '/technology-sharing/Linux/': utils.genSidebar('Linux', filehelper.getFileName(docs + "/technology-sharing/Linux/"), false),
    '/technology-sharing/nuxt/': utils.genSidebar('nuxt', filehelper.getFileName(docs + "/technology-sharing/nuxt/"), false),
    '/technology-sharing/css/': utils.genSidebar('css', filehelper.getFileName(docs + "/technology-sharing/cssDir/"), false),
    // 实用工具

    '/tools/': utils.genSidebar('实用工具', filehelper.getFileName(docs + "/tools/"), false),
    // 一定要放在最后！！！
    // 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
    // '/': [''] // 此处选择禁用
};