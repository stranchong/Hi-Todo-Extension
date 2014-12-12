/**
 * 后台程序
 */
// 创建Todo
function create_todo(){

}
// 创建Todo（有选择文本）
function create_todo_select(info, tab){
    var text = encodeURIComponent(info.selectionText);
    chrome.tabs.sendMessage(tab.id, {method: "todo_with_content", content: text}, function(response) {
        var text = response;

    });
}
function share_to_hi(info, tab){
    var pageUrl = encodeURIComponent(tab.url);
    var title = encodeURI(tab.title);
    var imgUrl;
    var description = '';
    var apiUrl;
    // 异步回调请求数据
    chrome.tabs.sendMessage(tab.id, "getPageImg", function(response) {
        imgUrl = encodeURI(response);
        chrome.tabs.sendMessage(tab.id, "getPageDes", function(response) {
            description = encodeURI(response);
            apiUrl = "http://open.im.baidu.com/share/html/share.html?resourceUrl=" + pageUrl + "&pic=" + imgUrl + "&title=" + title + "&description=" + description + "&tip=" + encodeURI("来自百度Hi Todo浏览器扩展") + "&charset=UTF-8&rt=1";
            window.open(apiUrl);
        });
    });
}
// 创建二维码
function create_qrc(info, tab){
    chrome.tabs.sendMessage(tab.id, "createQRC");
}
// 右键菜单
chrome.contextMenus.create({"title": "创建Todo，关于「%s」", "contexts":["selection"], "onclick": create_todo_select});
chrome.contextMenus.create({"title": "创建Todo", "onclick": create_todo});
chrome.contextMenus.create({"title": "分享此页面到百度Hi", "onclick": share_to_hi});
chrome.contextMenus.create({"title": "网页二维码", "onclick": create_qrc});