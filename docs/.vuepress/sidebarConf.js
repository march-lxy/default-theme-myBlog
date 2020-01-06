const path = require("path")
const rootpath = path.dirname(__dirname) //执行一次dirname将目录定位到docs的上级目录，也就是博客根目录

const docs = rootpath;
const utils = require(rootpath + '/utils/index.js');
const filehelper = require(rootpath + '/utils/getFilenames.js');

/**
 * 侧边栏的配置（顺序无所谓）
 * utils.genSidebar('Java基础', filehelper.getFileName(docs+"/Java/Basic/"), false),
 */
module.exports = {

    // .... 省略部分

    // 其他
    '/technology-sharing/vue/': utils.genSidebar('VUE', filehelper.getFileName(docs + "/technology-sharing/vue/"), false),
    '/technology-sharing/node/': utils.genSidebar('NODE', filehelper.getFileName(docs + "/technology-sharing/node/"), false),
    '/technology-sharing/jsDir/': utils.genSidebar('JS', filehelper.getFileName(docs + "/technology-sharing/jsDir/"), false),
    // 一定要放在最后！！！
    // 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
    // '/': [''] // 此处选择禁用
};