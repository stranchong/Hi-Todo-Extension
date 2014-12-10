/**
 * 后台程序
 */
function create_qrc(info, tab){
    chrome.tabs.sendMessage(tab.id, "createQRC");
}
// 右键菜单
chrome.contextMenus.create({"title": "网页二维码", "onclick": create_qrc});